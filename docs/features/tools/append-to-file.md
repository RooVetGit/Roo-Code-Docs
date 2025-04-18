# append_to_file

The `append_to_file` tool adds content to the end of a specified file. If the file doesn't exist, it creates the file with the provided content. It automatically handles directory creation if needed.

## Parameters

The tool accepts these parameters:

- `path` (required): The relative path (from the workspace root) of the file to append to.
- `content` (required): The content to append to the file.

## What It Does

This tool appends the provided `content` to the end of the file specified by `path`. If the target file doesn't exist, the tool creates it and populates it with the `content`. It also ensures any necessary parent directories for the file path are created. Changes are presented in a diff view for user approval before being saved.

## When is it used?

- When adding new entries to log files.
- When appending data records to existing datasets (e.g., CSV, JSON lines).
- When incrementally building a file where new content should always go at the end.
- When creating a file for the first time with initial content, especially if subsequent operations will append to it.

## Key Features

- **Append or Create**: Appends content to existing files or creates new files if they don't exist.
- **Interactive Approval**: Shows proposed changes (append or new file creation) in a diff view, requiring explicit user approval.
- **User Edit Support**: Allows editing the proposed content directly within the diff view before final approval.
- **Automatic Directory Creation**: Automatically creates parent directories if they don't exist for the specified `path`.
- **Content Preprocessing**: Cleans content by removing potential AI model artifacts (like code fences) and unescaping HTML entities.
- **Access Control**: Validates file access against `.rooignore` rules.
- **Diff View Integration**: Opens the file in a diff view, scrolling to the first change for review.
- **Partial Update Support**: Can handle streaming content (`block.partial`) into the diff view.
- **Context Tracking**: Records the file edit operation for context management.

## Limitations

- **Append Only**: Content is always added to the *end* of the file; it cannot insert content at other positions.
- **Review Overhead**: The mandatory diff view approval adds an interactive step.
- **Potential for Large Files**: While generally efficient, appending large amounts of content repeatedly might impact performance less than `write_to_file` but more than `apply_diff` for targeted changes.

## How It Works

When the `append_to_file` tool is invoked, it follows this process:

1.  **Parameter Validation**: Checks for required `path` and `content`. Reports errors if missing.
2.  **Path Processing**: Resolves the relative `path` to an absolute path and checks if it's outside the workspace.
3.  **Access Control**: Validates file access against `.rooignore` rules using `rooIgnoreController`.
4.  **File Existence Check**: Determines if the file exists using `fileExistsAtPath`.
5.  **Content Preprocessing**: Removes markdown code fences, unescapes HTML entities (for non-Claude models), and strips potential line numbers.
6.  **Diff View Interaction**:
    *   Opens the file in the diff view (`cline.diffViewProvider.open`).
    *   If the file exists, prepares the `newContent` by prefixing it with the `originalContent` and a newline (`\n`).
    *   Updates the diff view with the final content (`cline.diffViewProvider.update`), supporting partial (streaming) updates.
    *   Scrolls to the first detected change after a complete update (`cline.diffViewProvider.scrollToFirstDiff`).
7.  **User Approval**: Presents the change (append or creation) via `askApproval`. Shows a formatted diff if appending. Reverts if rejected.
8.  **Saving Changes**: If approved, saves the changes using `cline.diffViewProvider.saveChanges`.
9.  **File Context Tracking**: Tracks the edit using `cline.getFileContextTracker().trackFileContext`.
10. **Handling User Edits**: If the user edited the content in the diff view, reports the final merged content back to the AI.
11. **Error Handling**: Uses the `handleError` callback for issues. Resets the diff view on completion, error, or rejection.
12. **Result Reporting**: Reports success (including user edits) or failure back to the AI model using `pushToolResult`.

## Usage Examples

Appending log entries to an existing file:

```xml
<append_to_file>
<path>logs/application.log</path>
<content>
[2024-04-18 10:30:00] INFO: User logged in successfully.
[2024-04-18 10:30:05] WARN: Disk space running low.
</content>
</append_to_file>
```

Creating a new file and adding initial content (if `notes.md` doesn't exist):

```xml
<append_to_file>
<path>project/docs/notes.md</path>
<content>
# Project Notes

- Initial setup complete.
- Need to configure database connection.
</content>
</append_to_file>