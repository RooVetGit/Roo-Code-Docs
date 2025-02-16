# Custom Instructions

Roo Code allows you to customize its behavior using instructions.  These instructions are added to the system prompt and influence how Roo Code responds to your requests. You can define:

*   **Global Custom Instructions:**  Apply to all modes.
*   **Mode-Specific Custom Instructions:** Apply only to a specific mode.
* **`.clinerules` Files:** Generic rules that apply across all modes, or create mode-specific rules files like `.clinerules-code`

## Global Custom Instructions

These instructions are added to every prompt, regardless of the active mode.  They're useful for setting general preferences or providing information that's always relevant.

**How to set them:**

1.  Open the Roo Code panel (<Codicon name="rocket" />).
2.  Click the "Prompts" button in the top menu bar.
3.  Find the "Custom Instructions for All Modes" section.
4.  Enter your instructions in the text area.
5.  Click "Done" to save your changes.

## Mode-Specific Custom Instructions

These instructions are added only when a specific mode is active.  They allow you to fine-tune Roo Code's behavior for different tasks.

**How to set them:**

1.  Open the Roo Code panel (<Codicon name="rocket" />).
2.  Click the "Prompts" button in the top menu bar.
3.  Select the mode you want to customize from the dropdown.
4.  Find the "Mode-specific Custom Instructions" section.
5.  Enter your instructions in the text area.
6.  Click "Done" to save your changes.

**Note:** Mode-specific instructions are added *after* global custom instructions.

## `.clinerules` and `.clinerules-[mode]` Files

For more advanced customization, you can create `.clinerules` files in your workspace root.  These files contain rules that Roo Code will follow.

*   **`.clinerules`:**  Contains general rules that apply to all modes.
*   **`.clinerules-[mode]`:** Contains rules specific to a particular mode (e.g., `.clinerules-code`, `.clinerules-architect`).

**Format:**

Each line in a `.clinerules` file represents a single rule.  You can use plain English to describe the rules.

## Preferred Language

You can also specify a preferred language for Roo Code to use. This will instruct Roo Code to communicate with you in that language.  You can set this in the **Prompts** tab.

## Examples of Custom Instructions

*   "Always use spaces for indentation, with a width of 4 spaces."
*   "Use camelCase for variable names."
*   "Write unit tests for all new functions."
*   "Explain your reasoning before providing code."
*   "Focus on code readability and maintainability."
*   "Prioritize using the most common library in the community"
*   "When adding new features to websites, ensure they are responsive and accessible."

By using custom instructions, you can tailor Roo Code's behavior to match your coding style, project requirements, and personal preferences.