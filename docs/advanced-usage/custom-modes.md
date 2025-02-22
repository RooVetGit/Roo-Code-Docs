# Custom Modes

Roo Code allows you to create **custom modes** to tailor Roo's behavior to specific tasks or workflows. Custom modes can be either **global** (available across all projects) or **project-specific** (defined within a single project).  They allow you to define:

*   **A unique name and slug:** For easy identification
*   **A role definition:** Placed at the beginning of the system prompt, this defines Roo's core expertise and personality for the mode. This placement is crucial as it shapes Roo's fundamental understanding and approach to tasks
*   **Custom instructions:** Added at the end of the system prompt, these provide specific guidelines that modify or refine Roo's behavior. Unlike `.clinerules` files (which only add rules at the end), this structured placement of role and instructions allows for more nuanced control over Roo's responses
*   **Allowed tools:** Which Roo Code tools the mode can use (e.g., read files, write files, execute commands)
*   **File restrictions:** (Optional) Limit file access to specific file types or patterns (e.g., only allow editing `.md` files)

## Why Use Custom Modes?

*   **Specialization:** Create modes optimized for specific tasks, like "Documentation Writer," "Test Engineer," or "Refactoring Expert"
*   **Safety:** Restrict a mode's access to sensitive files or commands. For example, a "Review Mode" could be limited to read-only operations
*   **Experimentation:** Safely experiment with different prompts and configurations without affecting other modes
*   **Team Collaboration:** Share custom modes with your team to standardize workflows

## Creating Custom Modes

You have three options for creating custom modes:

### 1. Ask Roo! (Recommended)

You can quickly create a basic custom mode by asking Roo Code to do it for you. For example:

> Create a new mode called "Documentation Writer". It should only be able to read files and write Markdown files.

Roo Code will guide you through the process. However, for fine-tuning modes or making specific adjustments, you'll want to use the Prompts tab or manual configuration methods described below.

### 2. Using the Prompts Tab

1.  **Open Prompts Tab:** Click the <Codicon name="notebook" /> icon in the Roo Code top menu bar
2.  **Create New Mode:** Click the <Codicon name="add" /> button to the right of the Modes heading
3.  **Fill in Fields:**
    * **Name:** Enter a display name for the mode
    * **Slug:** Enter a lowercase identifier (letters, numbers, and hyphens only)
    * **Save Location:** Choose Global (via `cline_custom_modes.json`, available across all workspaces) or Project-specific (via `.roomodes` file in project root)
    * **Role Definition:** Define Roo's expertise and personality for this mode (appears at the start of the system prompt)
    * **Available Tools:** Select which tools this mode can use
    * **Custom Instructions:** (Optional) Add behavioral guidelines specific to this mode (appears at the end of the system prompt)
4.  **Create Mode:** Click the "Create Mode" button to save your new mode

Note: File type restrictions can only be added through manual configuration.

### 3. Manual Configuration

You can configure custom modes by editing JSON files through the Prompts tab:

Both global and project-specific configurations can be edited through the Prompts tab:

1.  **Open Prompts Tab:** Click the <Codicon name="notebook" /> icon in the Roo Code top menu bar
2.  **Access Settings Menu:** Click the <Codicon name="bracket" /> button to the right of the Modes heading
3.  **Choose Configuration:**
    * Select "Edit Global Modes" to edit `cline_custom_modes.json` (available across all workspaces)
    * Select "Edit Project Modes" to edit `.roomodes` file (in project root)
4.  **Edit Configuration:** Modify the JSON file that opens
5.  **Save Changes:** Roo Code will automatically detect the changes

## Configuration Precedence

Mode configurations are applied in this order:

1. Project-level mode configurations (from `.roomodes`)
2. Global mode configurations (from `cline_custom_modes.json`)
3. Default mode configurations

This means that project-specific configurations will override global configurations, which in turn override default configurations.

## Custom Mode Configuration (JSON Format)

Both global and project-specific configurations use the same JSON format. Each configuration file contains a `customModes` array of mode definitions:

```json
{
  "customModes": [
    {
      "slug": "mode-name",
      "name": "Mode Display Name",
      "roleDefinition": "Mode's role and capabilities",
      "groups": ["read", "edit"],
      "customInstructions": "Additional guidelines"
    }
  ]
}
```

### Required Properties

#### `slug`
* A unique identifier for the mode
* Use lowercase letters, numbers, and hyphens
* Keep it short and descriptive
* Example: `"docs-writer"`, `"test-engineer"`

#### `name`
* The display name shown in the UI
* Can include spaces and proper capitalization
* Example: `"Documentation Writer"`, `"Test Engineer"`

#### `roleDefinition`
* Detailed description of the mode's role and capabilities
* Defines Roo's expertise and personality for this mode
* Example: `"You are a technical writer specializing in clear documentation"`

#### `groups`
* Array of allowed tool groups
* Available groups: `"read"`, `"edit"`, `"browser"`, `"command"`, `"mcp"`
* Can include file restrictions for the `"edit"` group

##### File Restrictions Format
```json
["edit", {
  "fileRegex": "\\.md$",
  "description": "Markdown files only"
}]
```

### Optional Properties

#### `customInstructions`
* Additional behavioral guidelines for the mode
* Example: `"Focus on explaining concepts and providing examples"`

### Understanding File Restrictions

The `fileRegex` property uses regular expressions to control which files a mode can edit:

* `\\.md$` - Match files ending in ".md"
* `\\.(test|spec)\\.(js|ts)$` - Match test files (e.g., "component.test.js")
* `\\.(js|ts)$` - Match JavaScript and TypeScript files

Common regex patterns:
* `\\.` - Match a literal dot
* `(a|b)` - Match either "a" or "b"
* `$` - Match the end of the filename

[Learn more about regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

### Example Configurations

Each example shows different aspects of mode configuration:

#### Basic Documentation Writer
```json
{
  "customModes": [{
    "slug": "docs-writer",
    "name": "Documentation Writer",
    "roleDefinition": "You are a technical writer specializing in clear documentation",
    "groups": [
      "read",
      ["edit", { "fileRegex": "\\.md$", "description": "Markdown files only" }]
    ],
    "customInstructions": "Focus on clear explanations and examples"
  }]
}
```

#### Test Engineer with File Restrictions
```json
{
  "customModes": [{
    "slug": "test-engineer",
    "name": "Test Engineer",
    "roleDefinition": "You are a test engineer focused on code quality",
    "groups": [
      "read",
      ["edit", { "fileRegex": "\\.(test|spec)\\.(js|ts)$", "description": "Test files only" }]
    ]
  }]
}
```

#### Project-Specific Mode Override
```json
{
  "customModes": [{
    "slug": "code",
    "name": "Code (Project-Specific)",
    "roleDefinition": "You are a software engineer with project-specific constraints",
    "groups": [
      "read",
      ["edit", { "fileRegex": "\\.(js|ts)$", "description": "JS/TS files only" }]
    ],
    "customInstructions": "Focus on project-specific JS/TS development"
  }]
}
```
By following these instructions, you can create and manage custom modes to enhance your workflow with Roo-Code.

## Community Gallery

Ready to explore more? Check out the [Custom Modes Gallery](/community#custom-modes-gallery) to discover and share custom modes created by the community!
