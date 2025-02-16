# Custom Modes

Roo Code allows you to create **custom modes** that can be either global (available across all projects) or project-specific (defined within a single project). These modes let you tailor Roo's behavior to specific tasks or workflows by defining:

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
4.  **Click "Create Mode":**  Save your new mode.

Note: Adding/editing file type restrictions is not yet supported in the prompts tab UI.

### 3. Manual Configuration (Advanced)

Custom modes can be configured in two locations:

1. **Global Configuration:**
   - Located at `~/Library/Application Support/Cursor/User/globalStorage/rooveterinaryinc.roo-cline/settings/cline_custom_modes.json`
   - These modes are available across all projects

2. **Project-Specific Configuration:**
   - Located in `.roomodes` file in your project's root directory
   - These modes are only available within that specific project
   - Project-specific modes take precedence over global modes with the same slug

To edit either configuration:

1.  **Open the Prompts Tab:** Click the notebook icon in the Roo Code top menu bar.
2.  **Open the Settings File:** Click the code icon (`<>`) in the top right corner of the "Prompts" tab.
3.  **Edit the JSON:** Add or modify mode configurations within the `customModes` array, following the format described below.
4.  **Save the File:** Roo Code will automatically detect the changes.

## Custom Mode Configuration (JSON Format)

Both global and project-specific configuration files use the same JSON format. Here's an example:

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
```

## Community Gallery

Ready to explore more? Check out the [Custom Modes Gallery](../community#custom-modes-gallery) to discover and share custom modes created by the community!