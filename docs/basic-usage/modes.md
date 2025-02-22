# Using Modes

Roo Code offers different "modes" to tailor its behavior and capabilities to specific tasks. Think of modes as different personas or roles that Roo Code can adopt. Each mode has a specific focus, and some modes have restrictions on the tools they can use.  This helps to ensure that Roo Code stays on task and avoids unintended actions.

## Built-in Modes

Roo Code comes with four built-in modes:

*   **Code Mode (Default):** This is the general-purpose coding mode.  Roo Code can read, write, and execute code in this mode. It's designed for tasks like creating new features, refactoring existing code, and fixing bugs.

*   **Architect Mode:** This mode is for high-level planning and design discussions. Roo Code can read files in this mode, but it *cannot* write to files or execute commands. Use this mode to discuss system architecture, design patterns, or overall project structure.

*   **Ask Mode:** This mode is for asking questions and getting explanations. Roo Code can read files, access external resources, but it *cannot* modify files or run commands. Use this mode to understand code, explore concepts, or get help with specific problems. You can use this mode to learn more about new or existing code.

*   **Debug Mode:** This mode is specifically designed for systematic problem diagnosis. It uses a structured approach where Roo Code first analyzes potential causes, narrows down the most likely explanations, and validates them through strategic logging before implementing fixes. This methodical process helps ensure more accurate bug fixes.

## Why Use Modes?

Modes help to:

*   **Focus Roo Code's responses:**  Each mode has a specific "role definition" and instructions that guide its behavior.
*   **Improve safety:**  Modes like Architect and Ask restrict Roo Code's ability to modify files or run commands, reducing the risk of unintended changes.
*   **Optimize for different tasks:**  The Code mode is designed for active coding, while the Architect mode is better for planning, and the Ask mode is best for understanding.

## Switching Modes

You can switch between modes using the dropdown menu in the chat input area:

1.  **Locate the Dropdown:**  Find the dropdown menu to the left of the chat input box. It will usually display the name of the current mode (e.g., "Code", "Architect", "Ask", "Debug").

2.  **Select a Mode:** Click the dropdown and choose the mode you want to use.

Roo Code will remember the last used API configuration for each mode, making it easy to switch between different providers or models for different tasks.

Hint: You can also use the `/` command to switch modes.  For example, `/architect` will switch to Architect Mode.

## Custom Modes

Roo Code also allows you to create your own custom modes, with tailored instructions and tool permissions.  See the [Advanced Usage: Custom Modes](./../advanced-usage/custom-modes) section for more information.

## Tips

*   Start in **Code Mode** for most coding tasks.
*   Switch to **Architect Mode** when planning or discussing high-level design.
*   Use **Ask Mode** when you need to understand code or concepts.
*   Switch to **Debug Mode** when tracking down bugs.
*   Create **Custom Modes** to optimize Roo Code for your own project and workflows.
*   Experiment with different modes to find what works best!
