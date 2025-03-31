# apply_diff

The `apply_diff` tool makes precise, surgical changes to files by specifying exactly what content to replace. It uses multiple sophisticated strategies for finding and applying changes while maintaining proper code formatting and structure.

## Parameters

The tool accepts these parameters:

- `path` (required): The path of the file to modify relative to the current working directory.
- `diff` (required): The search/replace block defining the changes using a format specific to the active diff strategy.
- `start_line` (optional): A hint for where the search content begins, used by some strategies.
- `end_line` (optional): A hint for where the search content ends, used by some strategies.

## What It Does

This tool applies targeted changes to existing files using sophisticated strategies to locate and replace content precisely. Unlike simple search and replace, it uses intelligent matching algorithms (including fuzzy matching) that adapt to different content types and file sizes, with fallback mechanisms for complex edits.

## When is it used?

- When Roo needs to make precise changes to existing code without rewriting entire files.
- When refactoring specific sections of code while maintaining surrounding context.
- When fixing bugs in existing code with surgical precision.
- When implementing feature enhancements that modify only certain parts of a file.

## Key Features

- Implements two primary diff strategies: `MultiSearchReplaceDiffStrategy` and `UnifiedDiffStrategy`.
- Uses intelligent fuzzy matching with configurable confidence thresholds (typically 0.8-1.0).
- Provides context around matches using `BUFFER_LINES` (default 40).
- Employs an overlapping window approach for searching large files.
- Preserves code formatting and indentation automatically.
- Combines overlapping matches for improved confidence scoring.
- Shows changes in a diff view for user review and editing before applying.
- Tracks consecutive errors per file (`consecutiveMistakeCountForApplyDiff`) to prevent repeated failures.
- Validates file access against `.rooignore` rules.
- Handles multi-line edits effectively.

## Limitations

- Works best with unique, distinctive code sections for reliable identification.
- Performance can vary with very large files or highly repetitive code patterns.
- Fuzzy matching might occasionally select incorrect locations if content is ambiguous.
- Each diff strategy has specific format requirements.
- Complex edits might require careful strategy selection or manual review.

## How It Works

When the `apply_diff` tool is invoked, it follows this process:

1.  **Parameter Validation**: Validates required `path` and `diff` parameters.
2.  **RooIgnore Check**: Validates if the target file path is allowed by `.rooignore` rules.
3.  **Strategy Selection**: Determines the appropriate diff strategy (`MultiSearchReplaceDiffStrategy` or `UnifiedDiffStrategy`) based on the `diff` format and configuration.
4.  **File Analysis**: Loads the target file content.
5.  **Match Finding**: Uses the selected strategy's algorithms (exact, fuzzy, overlapping windows) to locate the target content, considering confidence thresholds and context (`BUFFER_LINES`).
6.  **Change Preparation**: Generates the proposed changes, preserving indentation.
7.  **User Interaction**:
    *   Displays the changes in a diff view.
    *   Allows the user to review and potentially edit the proposed changes.
    *   Waits for user approval or rejection.
8.  **Change Application**: If approved, applies the changes (potentially including user edits) to the file.
9.  **Error Handling**: If errors occur (e.g., match failure, partial application), increments the `consecutiveMistakeCountForApplyDiff` for the file and reports the failure type.
10. **Feedback**: Returns the result, including any user feedback or error details.

## Diff Strategies

Roo Code uses these primary strategies for applying diffs:

### MultiSearchReplaceDiffStrategy

An enhanced search/replace format supporting multiple changes in one request. Requires line numbers for each search block.

*   **Best for**: Multiple, distinct changes where line numbers are known or can be estimated.
*   **Requires**: Exact match for the `SEARCH` block content, including whitespace and indentation. Line numbers (`:start_line:`, `:end_line:`) are mandatory. Markers within content must be escaped (`\`).

Example format for the `<diff>` block:

```diff
<<<<<<< SEARCH
:start_line:10
:end_line:12
-------
    // Old calculation logic
    const result = value * 0.9;
    return result;
=======
    // Updated calculation logic with logging
    console.log(`Calculating for value: ${value}`);
    const result = value * 0.95; // Adjusted factor
    return result;
>>>>>>> REPLACE

<<<<<<< SEARCH
:start_line:25
:end_line:25
-------
    const defaultTimeout = 5000;
=======
    const defaultTimeout = 10000; // Increased timeout
>>>>>>> REPLACE
```

### UnifiedDiffStrategy

Uses the standard unified diff format but incorporates advanced matching algorithms. It supports fuzzy matching with confidence scoring, overlapping windows for large files, and a git-based fallback mechanism for complex changes. This strategy is often used by default when "Enable editing through diffs" is turned on in settings.

*   **Best for**: Applying standard patches, handling complex changes, situations where line numbers might be inaccurate, or when fuzzy matching is beneficial.
*   **Requires**: Standard unified diff format.

Example format for the `<diff>` block:

```diff
--- a/src/utils.ts
+++ b/src/utils.ts
@@ -1,5 +1,5 @@
 import { Logger } from '../logger';

 function calculateTotal(items: number[]): number {
-  return items.reduce((sum, item) => sum + item, 0);
+  // Add 10% markup and round
+  const total = items.reduce((sum, item) => sum + item * 1.1, 0);
+  return Math.round(total * 100) / 100;
 }
```

## Technical Details

### Confidence Thresholds
- Fuzzy matching relies on confidence scores (typically 0.8 to 1.0).
- A score of 1.0 requires a near-exact match, while lower values (e.g., 0.8) allow more flexibility but increase the risk of incorrect matches.
- The threshold can be adjusted in Roo Code settings ("Match precision" slider).

<img src="/img/fast-edits/fast-edits-1.png" alt="Match precision slider in Roo Code settings" width="600" />
*Description: Settings screen showing the 'Match precision' slider for diffs.*

### Context Buffer (`BUFFER_LINES`)
- When searching, the strategies often use surrounding lines (`BUFFER_LINES`, default 40) to help confirm the correct match location, especially for fuzzy matching.

### Overlapping Window Search
- For large files (`LARGE_FILE_THRESHOLD`, default 1000 lines), search is performed in overlapping windows (`MAX_WINDOW_SIZE`, default 500 lines) to manage memory and improve performance.

### Indentation Preservation
- The tool automatically detects and preserves the indentation of the surrounding code when applying changes.

### Overlapping Matches
- The `UnifiedDiffStrategy` can combine multiple potential matches that overlap, improving confidence in the final selected location.

## User Interaction

### Diff View
- Before applying any changes, Roo presents them in a standard diff view within VS Code.
- This allows you to visually inspect the exact changes proposed.

### Editing Changes
- You can directly edit the proposed changes within the diff view before applying them. Roo will use your modified version.

### User Feedback
- After applying (or attempting to apply) the diff, Roo reports success or failure, often including details about the process or specific errors encountered.

## Error Handling

### Consecutive Error Tracking
- Roo tracks `consecutiveMistakeCountForApplyDiff` for each file. If `apply_diff` fails repeatedly on the same file, Roo might switch strategies or suggest alternative approaches.

### Failure Types
- The system distinguishes between partial failures (some changes applied, others failed) and complete failures.

### Common Error Messages
- **Marker Sequencing:** Errors if `<<<<<<< SEARCH`, `=======`, `>>>>>>> REPLACE` markers are missing, misplaced, or duplicated in `MultiSearchReplaceDiffStrategy`.
- **Match Not Found:** The specified `SEARCH` content couldn't be located with sufficient confidence.
- **File Access Denied:** The file path is blocked by a `.rooignore` rule.

Example Marker Sequencing Error:
```
ERROR: Special marker '=======' found in your diff content at line X:
[...]
```

## Marker Handling (MultiSearchReplaceDiffStrategy)

### Validation
- The `MultiSearchReplaceDiffStrategy` strictly validates the sequence and presence of markers (`<<<<<<< SEARCH`, `:start_line:`, `:end_line:`, `-------`, `=======`, `>>>>>>> REPLACE`).

### Escaping Markers
- If your actual code *contains* text that looks like a diff marker (e.g., `<<<<<<< SEARCH`), you **must** escape it in the `diff` block by adding a backslash (`\`) at the beginning of the line when using `apply_diff`.

Example Escaping in `<diff>` block:
```diff
<<<<<<< SEARCH
:start_line:5
:end_line:7
-------
Code before marker
\<<<<<<< SEARCH  // Escaped marker in original code
Code after marker
=======
Replacement content
>>>>>>> REPLACE
```
- Escape `\<<<<<<< SEARCH`, `\=======`, and `\>>>>>>> REPLACE` as needed within both `SEARCH` and `REPLACE` blocks if they appear as literal text in your code.

## Integration

### RooIgnore
- The tool respects `.rooignore` files. If a file path matches a pattern in `.rooignore`, `apply_diff` will be blocked. See [Advanced Usage -> Large Projects](/advanced-usage/large-projects) for more on `.rooignore`.

### Cline Integration
- `apply_diff` is integrated into the core `Cline` class, ensuring it respects overall tool permissions and settings like "Enable editing through diffs".

## Best Practices

- **Multiple Changes:** Use the `MultiSearchReplaceDiffStrategy` to apply multiple, independent changes to a file in a single `apply_diff` request for efficiency.
- **Escaping (for `apply_diff`):** When using `apply_diff` with `MultiSearchReplaceDiffStrategy`, always escape literal diff markers (`<<<<<<< SEARCH`, `=======`, `>>>>>>> REPLACE`) within your code snippets using a preceding backslash (`\`).
- **Clarity:** Provide clear and unique `SEARCH` blocks. If the content is highly repetitive, include more surrounding lines for context.
- **Review:** Always review the changes presented in the diff view carefully before approving, especially when fuzzy matching might be involved.
- **Large/Complex Changes:** For very complex refactoring across multiple files, consider breaking down the task or guiding Roo step-by-step. The `UnifiedDiffStrategy` offers the best chance for complex single-file edits due to its advanced matching capabilities.

## Examples When Used

- Fixing a bug: Roo identifies the buggy function and uses `apply_diff` to modify only that function, potentially using `UnifiedDiffStrategy` if the code has slightly changed since it was last read (leveraging fuzzy matching).
- Refactoring: Roo applies targeted improvements using `MultiSearchReplaceDiffStrategy` for several small changes or `UnifiedDiffStrategy` for a standard patch.
- Feature Enhancement: Roo adds new logic within an existing function using a precise diff, relying on indentation preservation.

## Usage Examples

Using `MultiSearchReplaceDiffStrategy` (Requires line numbers):
```xml
<apply_diff>
<path>src/calculation.py</path>
<diff>
<<<<<<< SEARCH
:start_line:1
:end_line:5
-------
def calculate_total(items):
    total = 0
    for item in items:
        total += item
    return total
=======
def calculate_total(items):
    """Calculate total with 10% markup"""
    return sum(item * 1.1 for item in items)
>>>>>>> REPLACE
</diff>
</apply_diff>
```

Using `UnifiedDiffStrategy`:
```xml
<apply_diff>
<path>src/utils.ts</path>
<diff>
--- a/src/utils.ts
+++ b/src/utils.ts
@@ -24,7 +24,7 @@
 function formatUsername(name: string): string {
   return name
     .toLowerCase()
-    .replace(/[^a-z0-9]/g, '');
+    .replace(/[^a-z0-9_-]/g, ''); // Allow underscores and hyphens
 }
</diff>
</apply_diff>
