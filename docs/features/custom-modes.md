# Custom Modes

Roo Code allows you to create **custom modes** to tailor Roo's behavior to specific tasks or workflows. Custom modes can be either **global** (available across all projects) or **project-specific** (defined within a single project). Each mode—including custom ones—remembers the last model you used with it, automatically selecting that model when you switch to the mode. This lets you maintain different preferred models for different types of tasks without manual reconfiguration.

:::info Mode-Specific Instruction File Locations
You can provide instructions for custom modes using dedicated files or directories within your workspace. This allows for better organization and version control compared to only using the JSON `customInstructions` property.

**Preferred Method: Directory (`.roo/rules-{mode-slug}/`)**
```
.
├── .roo/
│   └── rules-docs-writer/  # Example for mode slug "docs-writer"
│       ├── 01-style-guide.md
│       └── 02-formatting.txt
└── ... (other project files)
```

**Fallback Method: Single File (`.roorules-{mode-slug}`)**
```
.
├── .roorules-docs-writer  # Example for mode slug "docs-writer"
└── ... (other project files)
```
The directory method takes precedence if it exists and contains files. See [Mode-Specific Instructions via Files/Directories](#mode-specific-instructions-via-filesdirectories) for details.
:::

## Why Use Custom Modes?

*   **Specialization:** Create modes optimized for specific tasks, like "Documentation Writer," "Test Engineer," or "Refactoring Expert"
*   **Safety:** Restrict a mode's access to sensitive files or commands. For example, a "Review Mode" could be limited to read-only operations
*   **Experimentation:** Safely experiment with different prompts and configurations without affecting other modes
*   **Team Collaboration:** Share custom modes with your team to standardize workflows

    <img src="/img/custom-modes/custom-modes.png" alt="Overview of custom modes interface" width="400" />
    *Roo Code's interface for creating and managing custom modes.*

## What's Included in a Custom Mode?

Custom modes allow you to define:

*   **A unique name and slug:** For easy identification
*   **A role definition:** Placed at the beginning of the system prompt, this defines Roo's core expertise and personality for the mode. This placement is crucial as it shapes Roo's fundamental understanding and approach to tasks
*   **Custom instructions:** Added near the end of the system prompt, these provide specific guidelines that modify or refine Roo's behavior for the mode. You can define these using the `customInstructions` JSON property, and/or by adding instruction files to a dedicated directory (see below). The preferred method for file-based instructions is now using a **`.roo/rules-{mode-slug}/` directory**, which allows for better organization and takes precedence over the older `.roorules-{mode-slug}` file method. This structured placement allows for more nuanced control over Roo's responses.
*   **Allowed tools:** Which Roo Code tools the mode can use (e.g., read files, write files, execute commands)
*   **File restrictions:** (Optional) Limit file access to specific file types or patterns (e.g., only allow editing `.md` files)

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

### Optional Properties

#### `customInstructions`
* Additional behavioral guidelines for the mode
* Example: `"Focus on explaining concepts and providing examples"`

### Mode-Specific Instructions via Files/Directories

In addition to the `customInstructions` property in JSON, you can provide mode-specific instructions via files in your workspace. This is particularly useful for:

*   Organizing lengthy or complex instructions into multiple, manageable files.
*   Managing instructions easily with version control.
*   Allowing non-technical team members to modify instructions without editing JSON.

There are two ways Roo Code loads these instructions, with a clear preference for the newer directory-based method:

**1. Preferred Method: Directory-Based Instructions (`.roo/rules-{mode-slug}/`)**

*   **Structure:** Create a directory named `.roo/rules-{mode-slug}/` in your workspace root. Replace `{mode-slug}` with your mode's slug (e.g., `.roo/rules-docs-writer/`).
*   **Content:** Place one or more files (e.g., `.md`, `.txt`) containing your instructions inside this directory. You can organize instructions further using subdirectories; Roo Code reads files recursively, appending their content to the system prompt in **alphabetical order** based on filename.
*   **Loading:** All instruction files found within this directory structure will be loaded and applied to the specified mode.

**2. Fallback (Backward Compatibility): File-Based Instructions (`.roorules-{mode-slug}`)**

*   **Structure:** If the `.roo/rules-{mode-slug}/` directory **does not exist or is empty**, Roo Code will look for a single file named `.roorules-{mode-slug}` in your workspace root (e.g., `.roorules-docs-writer`).
*   **Loading:** If found, the content of this single file will be loaded as instructions for the mode.

**Precedence:**

*   The **directory-based method (`.roo/rules-{mode-slug}/`) takes precedence**. If this directory exists and contains files, any corresponding root-level `.roorules-{mode-slug}` file will be **ignored** for that mode.
*   This ensures that projects migrated to the new directory structure behave predictably, while older projects using the single-file method remain compatible.

**Combining with JSON `customInstructions`:**

*   Instructions loaded from either the directory or the fallback file are combined with the `customInstructions` property defined in the mode's JSON configuration.
*   Typically, the content from the files/directories is appended after the content from the JSON `customInstructions` property.

## Configuration Precedence

Mode configurations are applied in this order:

1. Project-level mode configurations (from `.roomodes`)
2. Global mode configurations (from `custom_modes.json`)
3. Default mode configurations

This means that project-specific configurations will override global configurations, which in turn override default configurations.
*   **Note on Instruction Files:** Within the loading of mode-specific instructions from the filesystem, the directory `.roo/rules-{mode-slug}/` takes precedence over the single file `.roorules-{mode-slug}` found in the workspace root.

## Creating Custom Modes

You have three options for creating custom modes:

### 1. Ask Roo! (Recommended)

You can quickly create a basic custom mode by asking Roo Code to do it for you. For example:
```
Create a new mode called "Documentation Writer". It should only be able to read files and write Markdown files.
```
Roo Code will guide you through the process. However, for fine-tuning modes or making specific adjustments, you'll want to use the Prompts tab or manual configuration methods described below.
:::info
#### Custom Mode Creation Settings
When enabled, Roo allows you to create custom modes using prompts like 'Make me a custom mode that...'. Disabling this reduces your system prompt by about 700 tokens when this feature isn't needed. When disabled you can still manually create custom modes using the + button above or by editing the related config JSON. 
<img src="/img/custom-modes/custom-modes-1.png" alt="Enable Custom Mode Creation Through Prompts setting" width="600" />
You can find this setting within the prompt settings by clicking the <Codicon name="notebook" /> icon in the Roo Code top menu bar.
:::

### 2. Using the Prompts Tab

1.  **Open Prompts Tab:** Click the <Codicon name="notebook" /> icon in the Roo Code top menu bar
2.  **Create New Mode:** Click the <Codicon name="add" /> button to the right of the Modes heading
3.  **Fill in Fields:**

        <img src="/img/custom-modes/custom-modes-2.png" alt="Custom mode creation interface in the Prompts tab" width="600" />
        *The custom mode creation interface showing fields for name, slug, save location, role definition, available tools, and custom instructions.*

    * **Name:** Enter a display name for the mode
    * **Slug:** Enter a lowercase identifier (letters, numbers, and hyphens only)
    * **Save Location:** Choose Global (via `custom_modes.json`, available across all workspaces) or Project-specific (via `.roomodes` file in project root)
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
    * Select "Edit Global Modes" to edit `custom_modes.json` (available across all workspaces)
    * Select "Edit Project Modes" to edit `.roomodes` file (in project root)
4.  **Edit Configuration:** Modify the JSON file that opens
5.  **Save Changes:** Roo Code will automatically detect the changes

## Example Configurations

Each example shows different aspects of mode configuration:

### Basic Documentation Writer
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

### Test Engineer with File Restrictions
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

### Project-Specific Mode Override
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

## Understanding Regex in Custom Modes

Regex patterns in custom modes let you precisely control which files Roo can edit:

### Basic Syntax

When you specify `fileRegex` in a custom mode, you're creating a pattern that file paths must match:

```json
["edit", { "fileRegex": "\\.md$", "description": "Markdown files only" }]
```

### Important Rules

- **Double Backslashes:** In JSON, backslashes must be escaped with another backslash. So `\.md$` becomes `\\.md$`
- **Path Matching:** Patterns match against the full file path, not just the filename
- **Case Sensitivity:** Regex patterns are case-sensitive by default

### Common Pattern Examples

| Pattern | Matches | Doesn't Match |
|---------|---------|---------------|
| `\\.md$` | `readme.md`, `docs/guide.md` | `script.js`, `readme.md.bak` |
| `^src/.*` | `src/app.js`, `src/components/button.tsx` | `lib/utils.js`, `test/src/mock.js` |
| `\\.(css\|scss)$` | `styles.css`, `theme.scss` | `styles.less`, `styles.css.map` |
| `docs/.*\\.md$` | `docs/guide.md`, `docs/api/reference.md` | `guide.md`, `src/docs/notes.md` |
| `^(?!.*(test\|spec)).*\\.js$` | `app.js`, `utils.js` | `app.test.js`, `utils.spec.js` |

### Pattern Building Blocks

- `\\.` - Match a literal dot (period)
- `$` - Match the end of the string
- `^` - Match the beginning of the string
- `.*` - Match any character (except newline) zero or more times
- `(a|b)` - Match either "a" or "b"
- `(?!...)` - Negative lookahead (exclude matches)

### Testing Your Patterns

Before applying a regex pattern to a custom mode:

1. Test it on sample file paths to ensure it matches what you expect
2. Remember that in JSON, each backslash needs to be doubled (`\d` becomes `\\d`)
3. Start with simpler patterns and build complexity gradually


:::tip
### Let Roo Build Your Regex Patterns
Instead of writing complex regex patterns manually, you can ask Roo to create them for you! Simply describe which files you want to include or exclude:
```
Create a regex pattern that matches JavaScript files but excludes test files
```
Roo will generate the appropriate pattern with proper escaping for JSON configuration.
:::

## Community Gallery
Ready to explore more? Check out the [Custom Modes Gallery](/community#custom-modes-gallery) to discover and share custom modes created by the community!
