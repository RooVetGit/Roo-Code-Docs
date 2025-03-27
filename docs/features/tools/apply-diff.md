# apply_diff

The `apply_diff` tool makes precise, surgical changes to files by specifying exactly what content to replace. It uses multiple sophisticated strategies for finding and applying changes while maintaining proper code formatting and structure.

## Parameters

The tool accepts these parameters:

- `path` (required): The path of the file to modify relative to the current working directory
- `diff` (required): The search/replace block defining the changes using a format specific to the active diff strategy
- `start_line` (optional): A hint for where the search content begins, used by some strategies
- `end_line` (optional): A hint for where the search content ends, used by some strategies

## What It Does

This tool applies targeted changes to existing files using multiple sophisticated strategies to locate and replace content. Unlike simple search and replace, it implements intelligent matching algorithms that can adapt to different content types and file sizes, with fallback mechanisms for complex changes.

## When is it used?

- When Roo needs to make precise changes to existing code without rewriting entire files
- When refactoring specific sections of code while maintaining surrounding context
- When fixing bugs in existing code with surgical precision
- When implementing feature enhancements that modify only certain parts of a file

## Key Features

- Implements multiple diff strategies optimized for different use cases
- Uses intelligent fuzzy matching with adaptive confidence thresholds
- Supports both exact matching and similarity-based matching
- Preserves code formatting, indentation, and structure
- Includes git-based fallback mechanism for complex changes
- Shows changes in a diff view for user approval before applying
- Adapts matching algorithms based on file size and content uniqueness
- Provides comprehensive error reporting with context and debugging information

## Limitations

- Works best with unique, distinctive code sections that can be reliably identified
- Performance may vary with very large files or repetitive code patterns
- When using fuzzy matching, may occasionally select incorrect matching locations
- Each diff strategy has different requirements and syntax for specifying changes
- Some complex edits may require trying multiple strategies or formats

## How It Works

When the `apply_diff` tool is invoked, it follows this process:

1. **Parameter Validation**: Validates the required `path` and `diff` parameters
2. **Strategy Selection**: Determines which diff strategy to use based on the diff format and configuration
3. **File Analysis**: Loads the target file's content and analyzes code structure and patterns
4. **Match Finding**:
   - Uses multiple matching algorithms ranging from exact matches to fuzzy similarity
   - Adapts confidence thresholds based on file size and content uniqueness
   - Uses line numbers as hints but can find matches without them
5. **Change Preparation**:
   - Shows changes in a diff view before applying them
   - Maintains proper indentation and formatting
6. **User Approval**: Waits for user approval before applying changes
7. **Change Application**: Applies approved changes to the file
8. **Validation**: Confirms the changes were applied correctly

## Diff Strategies

The tool implements several different strategies for applying changes:

### UnifiedDiffStrategy
Uses standard unified diff format similar to `git diff` output. This is the most traditional diff format used by many tools.

Example format:
```
--- src/utils.ts
+++ src/utils.ts
@@ -1,9 +1,10 @@
 import { Logger } from '../logger';
 
 function calculateTotal(items: number[]): number {
-  return items.reduce((sum, item) => {
-    return sum + item;
+  const total = items.reduce((sum, item) => {
+    return sum + item * 1.1;  // Add 10% markup
   }, 0);
+  return Math.round(total * 100) / 100;  // Round to 2 decimal places
 }
```

### SearchReplaceDiffStrategy
A simpler strategy that uses a search/replace block format without line numbers. Useful for direct replacements where you know the exact content to change.

Example format:
```
<<<<<<< SEARCH
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
```

### MultiSearchReplaceDiffStrategy
An enhanced version of the search/replace strategy that supports multiple search/replace blocks and includes line number hints to help with locating the content.

Example format:
```
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
```

### NewUnifiedDiffStrategy
The most sophisticated strategy that implements multiple matching algorithms, fuzzy matching with confidence scoring, and even a git-based fallback mechanism for complex changes.

## Matching Algorithms

The system uses several techniques to find the right location for changes:

### Exact Matching
When possible, the system tries to find exact matches of the search content in the file. This is the most reliable method when the content hasn't changed.

### Fuzzy Matching
For cases where the content might have changed slightly, the system uses:
- Levenshtein distance calculations
- String similarity comparisons
- Configurable similarity thresholds
- Context evaluation for surrounding lines

### Adaptive Thresholds
The system adjusts matching thresholds based on:
- File size: Larger files use more relaxed thresholds
- Content uniqueness: More unique content can use stricter thresholds
- Pattern complexity: More complex patterns can use more relaxed thresholds

### Content Uniqueness Detection
The system evaluates how unique the search pattern is within the file to boost confidence in matches:
```javascript
// Conceptual example (actual implementation may vary)
function evaluateContentUniqueness(searchStr: string, content: string[]): number {
  const searchLines = searchStr.split("\n")
  const uniqueLines = new Set(searchLines)
  
  // Calculate how many search lines are relatively unique in the content
  let uniqueCount = 0
  for (const line of uniqueLines) {
    const matches = contentStr.match(regex)
    if (matches && matches.length <= 2) {
      // Line appears at most twice
      uniqueCount++
    }
  }

  return uniqueCount / uniqueLines.size
}
```

### Git Fallback
For especially complex changes, the system can create a temporary git repository and use git's own merge algorithms as a last resort:
```javascript
// Conceptual example (actual implementation may vary)
async function applyGitFallback(hunk: Hunk, content: string[]) {
  // Creates temporary git repository
  // Commits original content
  // Commits desired changes
  // Uses git cherry-pick to apply changes
  // Returns result
}
```

## Examples When Used

- When fixing a bug, Roo identifies the specific function containing the bug and uses `apply_diff` to modify only that function, using fuzzy matching if the function has been slightly modified.
- When refactoring code, Roo uses `apply_diff` with the appropriate strategy based on how extensive the changes are.
- When implementing a feature enhancement, Roo adds new capabilities to existing functions using targeted edits, with git fallback for complex changes.
- When updating API usage across a codebase, Roo identifies all instances of deprecated calls and replaces them with updated versions, adapting confidence thresholds based on pattern uniqueness.

## Usage Examples

Using the MultiSearchReplaceDiffStrategy:
```
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

Using the UnifiedDiffStrategy:
```
<apply_diff>
<path>src/utils.ts</path>
<diff>
--- src/utils.ts
+++ src/utils.ts
@@ -24,7 +24,7 @@
 function formatUsername(name: string): string {
   return name
     .toLowerCase()
-    .replace(/[^a-z0-9]/g, '');
+    .replace(/[^a-z0-9_-]/g, '');
 }
</diff>
</apply_diff>
```

Using the SearchReplaceDiffStrategy for simple replacements:
```
<apply_diff>
<path>src/cart.js</path>
<diff>
<<<<<<< SEARCH
function calculateDiscount(price, quantity) {
  let discount = 0;
  if (quantity > 10) {
    discount = price * 0.1;
  }
  return discount;
}
=======
function calculateDiscount(price, quantity) {
  let discount = 0;
  if (quantity > 10) {
    discount = price * quantity * 0.1;
  }
  return discount;
}
>>>>>>> REPLACE
</diff>
</apply_diff>
```
