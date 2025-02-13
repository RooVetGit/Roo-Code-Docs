# Using Tools

Roo Code has a set of built-in tools that it can use to interact with your code, files, and environment.  These tools allow Roo Code to perform actions like:

*   Reading and writing files
*   Executing commands in the terminal
*   Searching your codebase
*   Accessing information from the web (with browser support enabled)

You don't need to *tell* Roo Code which tool to use.  Just describe your task in plain English, and Roo Code will determine the appropriate tool (or sequence of tools) to use.  You will always have the opportunity to approve or reject each tool use.

## Available Tools

Here's a brief overview of the core tools available in Roo Code:

| Tool                        | Description                                                                  |
| :---------------------------| :----------------------------------------------------------------------------|
| `read_file`                 | Reads the content of a file.                                                 |
| `write_to_file`             | Creates a new file or overwrites an existing file with the provided content. |
| `apply_diff`                | Applies a set of changes (a "diff") to an existing file.                     |
| `execute_command`           | Runs a command in the VS Code terminal.                                      |
| `search_files`              | Searches for text or a regular expression within files in a directory.       |
| `list_files`                | Lists the files and directories within a given directory.                    |
| `list_code_definition_names`| Lists code definitions like class names.                                     |
| `browser_action`            | Performs actions in a headless browser (if enabled).                         |
| `ask_followup_question`     | Asks you a clarifying question.                                              |
| `attempt_completion`        | Indicates that Roo Code believes the task is complete.                       |

**Note:**  The availability of some tools may depend on the current [mode](./modes.md) and your settings.

## How Tools are Used

1.  **You describe your task:**  You tell Roo Code what you want to achieve in the chat input.
2.  **Roo Code proposes a tool:**  Roo Code analyzes your request and determines which tool (or sequence of tools) is most appropriate.
3.  **You review and approve:** Roo Code presents the proposed tool use, including the tool name and any parameters (like the file path or command to execute).  You can review this proposal and either **Approve** or **Reject** it.
4.  **Roo Code executes the tool (if approved):** If you approve, Roo Code executes the tool and shows you the result.
5.  **Iteration:**  Roo Code may use multiple tools in sequence to complete a task, waiting for your approval after each step.

## Example

Let's say you want to create a new file named `hello.txt` with the content "Hello, world!".  The interaction might look like this:

**You:** Create a file named `hello.txt` with the content "Hello, world!".

**Roo Code:** (Proposes to use the `write_to_file` tool)

```xml
<write_to_file>
<path>hello.txt</path>
<content>
Hello, world!
</content>
</write_to_file>
```

**You:** (Click "Approve")

**Roo Code:** (Confirms that the file was created)

## Important Considerations

*   Always review proposed actions carefully.  Even though Roo Code is designed to be helpful, it's still an AI, and it can make mistakes.
*   Start with small tasks.  Get comfortable with Roo Code's behavior before giving it more complex instructions.
*   Use context mentions.  Provide clear context using @ mentions (e.g., @/src/file.ts) to help Roo Code understand your request.
*   Use custom instructions.  Guide Roo's behavior even more with custom instructions, or change the prompt using different modes

## Advanced Tool Usage

Roo Code can be extended with additional tools using the Model Context Protocol (MCP). See the [MCP](../advanced-usage/mcp) section for more details. You can also create [Custom Modes](../advanced-usage/custom-modes) with restricted tool access for enhanced safety and control.