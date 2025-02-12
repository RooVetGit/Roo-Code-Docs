# Custom Modes

Roo Code allows you to create **custom modes** to tailor the AI assistant's behavior to specific tasks or workflows. Custom modes let you define:

*   **A unique name and slug:** For easy identification.
*   **A role definition:** A description of the mode's purpose and expertise.
*   **Custom instructions:** Specific guidelines for the AI to follow in this mode.
*   **Allowed tools:** Which Roo Code tools the mode can use (e.g., read files, write files, execute commands).
*   **File restrictions:** (Optional) Limit file access to specific file types or patterns (e.g., only allow editing `.md` files).

## Why Use Custom Modes?

*   **Specialization:** Create modes optimized for specific tasks, like "Documentation Writer," "Test Engineer," or "Refactoring Expert."
*   **Safety:** Restrict a mode's access to sensitive files or commands. For example, a "Review Mode" could be limited to read-only operations.
*   **Experimentation:** Safely experiment with different prompts and configurations without affecting other modes.
*   **Team Collaboration:** Share custom modes with your team to standardize workflows.

## Creating a Custom Mode

You have three options for creating custom modes:

### 1. Ask Roo! (Recommended)

The easiest way to create or modify a custom mode is to simply **ask Roo Code to do it!** For example:

> Create a new mode called "Documentation Writer". It should only be able to read files and write Markdown files.

Or, to modify an existing mode:

> Modify the "Code" mode to only allow reading files.

Roo Code will guide you through the process.

### 2. Using the Prompts Tab

1.  **Open the Prompts Tab:** Click the notebook icon in the Roo Code top menu bar.
2.  **Click "Create New Mode":**  Use the "+" button to add a new mode.
3.  **Fill in the Fields:**  Enter the mode's name, role definition, custom instructions, and select the allowed tool groups.
4. **Add File Restrictions:** For the "edit" group, you can optionally specify a regular expression to restrict file access.
5.  **Click "Create Mode":**  Save your new mode.

### 3. Manual Configuration (Advanced)

For advanced users, you can directly edit the `cline_custom_modes.json` file:

1.  **Open the Prompts Tab:** Click the notebook icon in the Roo Code top menu bar.
2.  **Open the Settings File:** Click the code icon (`<>`) in the top right corner of the "Prompts" tab.  This will open the `cline_custom_modes.json` file in a VS Code editor.
3.  **Edit the JSON:** Add or modify mode configurations within the `customModes` array, following the format described below.
4.  **Save the File:** Roo Code will automatically detect the changes.

## Custom Mode Configuration (JSON Format)

The `cline_custom_modes.json` file uses a JSON format. Here's an example:

```json
{
  "customModes": [
    {
      "slug": "docs-writer",
      "name": "Docs Writer",
      "roleDefinition": "You are a technical writer specializing in creating clear and concise documentation.",
      "customInstructions": "Focus on explaining concepts and providing examples. Use Markdown format.",
      "groups": [
        "read",
        ["edit", { "fileRegex": "\\.md$", "description": "Markdown files only" }]
      ]
    },
    {
      "slug": "test-engineer",
      "name": "Test Engineer",
      "roleDefinition": "You are a test engineer responsible for writing unit and integration tests.",
      "groups": [
        "read",
        ["edit", { "fileRegex": "\\.(test|spec)\\.(js|ts|jsx|tsx)$", "description": "Test files only" }]
      ]
    }
  ]
}