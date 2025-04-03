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
3.  **File Analysis**: Loads the target file content.
4.  **Match Finding**: Uses the selected strategy's algorithms (exact, fuzzy, overlapping windows) to locate the target content, considering confidence thresholds and context (`BUFFER_LINES`).
5.  **Change Preparation**: Generates the proposed changes, preserving indentation.
6.  **User Interaction**:
    *   Displays the changes in a diff view.
    *   Allows the user to review and potentially edit the proposed changes.
    *   Waits for user approval or rejection.
7.  **Change Application**: If approved, applies the changes (potentially including user edits) to the file.
8.  **Error Handling**: If errors occur (e.g., match failure, partial application), increments the `consecutiveMistakeCountForApplyDiff` for the file and reports the failure type.
9. **Feedback**: Returns the result, including any user feedback or error details.

## Diff Strategy

Roo Code uses this strategy for applying diffs:

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