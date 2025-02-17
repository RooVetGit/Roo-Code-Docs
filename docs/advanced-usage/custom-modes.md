# Custom Modes

Roo Code allows you to create **custom modes** to tailor Roo's behavior to specific tasks or workflows. Custom modes can be either **global** (available across all projects) or **project-specific** (defined within a single project).  They allow you to define:

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

## Creating Custom Modes

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

### 3. Manual Configuration

Custom modes can be configured by directly editing JSON files. There are two locations for custom mode configurations:

1.  **Global Configuration:**
    *   Located at `~/Library/Application Support/Cursor/User/globalStorage/rooveterinaryinc.roo-cline/settings/cline_custom_modes.json`
    *   These modes are available across all projects.

2.  **Project-Specific Configuration:**
    *   Located in a `.roomodes` file in your project's root directory.
    *   These modes are only available within that specific project.
    *   **Project-specific modes take precedence over global modes with the same slug.**  This means if you define a mode with the slug "code" in your `.roomodes` file, it will override the global "code" mode when you're working in that project.

To edit either configuration:

1.  **Open the Prompts Tab:** Click the notebook icon in the Roo Code top menu bar.
2.  **Open the Settings File:** Click the code icon (`<>`) in the top right corner of the "Prompts" tab.  (This will allow you to edit either the Global or project-specific configuration file. You can also edit a project-specific configuration, by manually creating/opening the `.roomodes` file in your project's root directory.)
3.  **Edit the JSON:** Add or modify mode configurations within the `customModes` array, following the format described below.
4.  **Save the File:** Roo Code will automatically detect the changes.

## Custom Mode Configuration (JSON Format)

Both global and project-specific configuration files use the same JSON format.  The configuration is a JSON object with a `customModes` key, which contains an array of mode definitions. Each mode definition is a JSON object with the following properties:

*   `slug`: (Required) A unique identifier for the mode (lowercase letters, numbers, and hyphens).  Shorter is better.
*   `name`: (Required) The display name for the mode.
*   `roleDefinition`: (Required) A detailed description of the mode's role and capabilities.
*   `groups`: (Required) An array of allowed tool groups. Each group can be specified either as a string (e.g., `"edit"` to allow editing any file) or with file restrictions (e.g., `["edit", { "fileRegex": "\\.md$", "description": "Markdown files only" }]` to only allow editing markdown files).
    *   Available tool groups are: `"read"`, `"edit"`, `"browser"`, `"command"`, `"mcp"`.
    *   **Understanding `fileRegex`:** The `fileRegex` property uses a *regular expression* (or *regex*) to define which files the mode is allowed to edit. A regular expression is a sequence of characters that specifies a search pattern. Here's a breakdown of some common regex components used in the examples:
        *   `\.`: Matches a literal dot (`.`).  The backslash is used to "escape" the dot, since a dot has a special meaning in regular expressions (matching any character).
        *   `(test|spec)`: Matches either "test" or "spec". The parentheses create a *capturing group*, and the pipe (`|`) acts as an "or".
        *   `(js|ts|jsx|tsx)`: Matches "js", "ts", "jsx", or "tsx".
        *   `$`: Matches the end of the string. This ensures that the entire filename matches the pattern, not just a part of it.
        *   For example, `\\.md$` matches any filename that ends with ".md".  `\\.(test|spec)\\.(js|ts|jsx|tsx)$` matches filenames like "myComponent.test.js", "utils.spec.ts", etc.
        *   You can learn more about regular expressions on websites like [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions).
*   `customInstructions`: (Optional) Additional instructions for the mode.

Here are some examples:

**Example 1: A simple documentation writer mode (could be global or project-specific):**

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
    }
  ]
}
```

**Example 2: A test engineer mode (could be global or project-specific):**

```json
{
  "customModes": [
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

**Example 3:  Adding a new mode in a `.roomodes` file (project-specific):**

```json
{
  "customModes": [
    {
      "slug": "data-scientist",
      "name": "Data Scientist",
      "roleDefinition": "You are Roo, a data scientist with expertise in data analysis, machine learning, and statistical modeling.",
      "groups": [
        "read",
        "edit",
        "command"
      ],
      "customInstructions": "Focus on data analysis and machine learning tasks."
    }
  ]
}
```

**Example 4: Overriding an existing mode in a `.roomodes` file (project-specific):**

```json
{
  "customModes": [
    {
      "slug": "code"
      "name": "Code (Project-Specific)",
      "roleDefinition": "You are Roo, a highly skilled software engineer.  In this project, you have limited file access.",
      "groups": [
        "read",
        ["edit", { "fileRegex": "\\.(js|ts)$", "description": "JavaScript and TypeScript files only" }]
      ],
      "customInstructions": "Focus on JS and TS files in this project."
    }
  ]
}
```

**Example 5: Mode with File Restrictions (can be used in global or .roomodes)**
```json
{
  "customModes": [
    {
      "slug": "markdown-editor",
      "name": "Markdown Editor",
      "roleDefinition": "You are Roo, a markdown editor with expertise in editing and formatting markdown files.",
      "groups": [
        "read",
        ["edit", { "fileRegex": "\\.md$", "description": "Markdown files only" }],
        "browser"
      ],
      "customInstructions": "Focus on editing and formatting markdown files."
    }
  ]
}
```
By following these instructions, you can create and manage custom modes to enhance your workflow with Roo-Code.

## Community Gallery

Ready to explore more? Check out the [Custom Modes Gallery](../community#custom-modes-gallery) to discover and share custom modes created by the community!