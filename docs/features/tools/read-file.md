
# read_file

The `read_file` tool examines the contents of files in a project. It allows Roo to understand code, configuration files, and documentation to provide better assistance.

## Parameters

The tool accepts these parameters:

- `path` (required): The path of the file to read relative to the current working directory
- `start_line` (optional): The starting line number to read from (1-based indexing)
- `end_line` (optional): The ending line number to read to (1-based, inclusive)
- `auto_truncate` (optional): Whether to automatically truncate large files when line range isn't specified (true/false)

## What It Does

This tool reads the content of a specified file and returns it with line numbers for easy reference. It can read entire files or specific sections, and even extract text from PDFs and Word documents.

## When is it used?

- When Roo needs to understand existing code structure
- When Roo needs to analyze configuration files
- When Roo needs to extract information from text files
- When Roo needs to see code before suggesting changes
- When specific line numbers need to be referenced in discussions

## Key Features

- Displays file content with line numbers for easy reference
- Can read specific portions of files by specifying line ranges
- Extracts readable text from PDF and DOCX files
- Intelligently truncates large files to focus on the most relevant sections
- Provides method summaries with line ranges for large code files
- Efficiently streams only requested line ranges for better performance
- Makes it easy to discuss specific parts of code with line numbering

## Limitations

- May not handle extremely large files efficiently without using line range parameters
- For binary files (except PDF and DOCX), may return content that isn't human-readable

## How It Works

When the `read_file` tool is invoked, it follows this process:

1. **Parameter Validation**: Validates the required `path` parameter and optional parameters
2. **Path Resolution**: Resolves the relative path to an absolute path
3. **Reading Strategy Selection**:
   - The tool uses a strict priority hierarchy (explained in detail below)
   - It chooses between range reading, auto-truncation, or full file reading
4. **Content Processing**:
   - Adds line numbers to the content (e.g., "1 | const x = 13") where `1 |` is the line number.
   - For truncated files, adds truncation notice and method definitions
   - For special formats (PDF, DOCX, IPYNB), extracts readable text

## Reading Strategy Priority

The tool uses a clear decision hierarchy to determine how to read a file:

1. **First Priority: Explicit Line Range**
   - If either `start_line` or `end_line` is provided, the tool always performs a range read
   - The implementation efficiently streams only the requested lines, making it suitable for processing large files
   - This takes precedence over all other options

2. **Second Priority: Auto-Truncation for Large Files**
   - This only applies when ALL of these conditions are met:
     - Neither `start_line` nor `end_line` is specified
     - The `auto_truncate` parameter is set to `true`
     - The file is not a binary file
     - The file exceeds the configured line threshold (typically 500-1000 lines)
   - When auto-truncation activates, the tool:
     - Reads only the first portion of the file (determined by the maxReadFileLine setting)
     - Adds a truncation notice showing the number of lines displayed vs. total
     - Provides a summary of method definitions with their line ranges

3. **Default Behavior: Read Entire File**
   - If neither of the above conditions are met, it reads the entire file content
   - For special formats like PDF, DOCX, and IPYNB, it uses specialized extractors

## Examples When Used

- When asked to explain or improve code, Roo first reads the relevant files to understand the current implementation.
- When troubleshooting configuration issues, Roo reads config files to identify potential problems.
- When working with documentation, Roo reads existing docs to understand the current content before suggesting improvements.

## Usage Examples

Reading an entire file:
```
<read_file>
<path>src/app.js</path>
</read_file>
```

Reading specific lines (46-68) of a file:
```
<read_file>
<path>src/app.js</path>
<start_line>46</start_line>
<end_line>68</end_line>
</read_file>
```

Reading a large file with auto-truncation:
```
<read_file>
<path>src/large-module.js</path>
<auto_truncate>true</auto_truncate>
</read_file>
```
