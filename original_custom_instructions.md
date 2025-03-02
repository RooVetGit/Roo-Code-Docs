# Custom Instructions

Roo Code allows you to customize its behavior using custom instructions at both global and workspace levels. These instructions are added to the system prompt and influence how Roo Code responds to your requests. You can define:

* **Global Custom Instructions:** Apply across all workspaces
* **Workspace-Level Instructions:**
    * **Workspace-Wide:** Apply to all modes in the workspace through `.clinerules` files
    * **Mode-Specific:** Apply to specific modes in the workspace through files like `.clinerules-code`

## Preferred Language

You can specify a preferred language for Roo Code to use. When set, this appears at the start of your custom instructions and directs Roo Code to communicate in your chosen language. You can set this in the **Prompts** tab.

## Global Custom Instructions

These instructions apply across all workspaces. They're useful for setting preferences that you want to maintain regardless of which project you're working on.

**How to set them:**

1.  **Open Prompts Tab:** Click the <Codicon name="notebook" /> icon in the Roo Code top menu bar
2.  **Find Section:** Find the "Custom Instructions for All Modes" section
3.  **Enter Instructions:** Enter your instructions in the text area
4.  **Save Changes:** Click "Done" to save your changes

## Workspace-Level Instructions

These instructions only apply within your current workspace, allowing you to customize Roo Code's behavior for specific projects.

### Workspace-Wide Instructions

Workspace-wide instructions are defined through rule files in your workspace root, primarily using `.clinerules`. Additional support for `.cursorrules` and `.windsurfrules` is available for editor compatibility.

### Mode-Specific Instructions

Mode-specific instructions can be set in two independent ways that can be used simultaneously:

1.  **Using the Prompts Tab:**
    * **Open Tab:** Click the <Codicon name="notebook" /> icon in the Roo Code top menu bar
    * **Select Mode:** Under the Modes heading, click the button for the mode you want to customize
    * **Enter Instructions:** Enter your instructions in the text area under "Mode-specific Custom Instructions (optional)"
    * **Save Changes:** Click "Done" to save your changes

2.  **Using Rule Files:** Create a `.clinerules-[mode]` file in your workspace root (e.g., `.clinerules-code`)

When both tab instructions and rule files are set for a mode, both sets of instructions will be included in the system prompt.

### How Instructions are Combined

Instructions are placed in the system prompt in this exact format:

```
====
USER'S CUSTOM INSTRUCTIONS
The following additional instructions are provided by the user, and should be followed to the best of your ability without interfering with the TOOL USE guidelines.
[Language Preference (if set)]
[Global Instructions]
[Mode-specific Instructions]

Rules:
[.clinerules-{mode} rules]
[.clinerules rules]
[.cursorrules rules]
[.windsurfrules rules]
```

### About Rule Files

* **File Location:** All rule files must be placed in the workspace root directory
* **Empty Files:** Empty or missing rule files are silently skipped
* **Source Headers:** Each rule file's contents are included with a header indicating its source
* **Rule Interaction:** Mode-specific rules complement global rules rather than replacing them

## Examples of Custom Instructions

* "Always use spaces for indentation, with a width of 4 spaces"
* "Use camelCase for variable names"
* "Write unit tests for all new functions"
* "Explain your reasoning before providing code"
* "Focus on code readability and maintainability"
* "Prioritize using the most common library in the community"
* "When adding new features to websites, ensure they are responsive and accessible"

By using custom instructions, you can tailor Roo Code's behavior to match your coding style, project requirements, and personal preferences.