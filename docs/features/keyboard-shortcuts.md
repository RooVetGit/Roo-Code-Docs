---
sidebar_label: Keyboard Shortcuts
---

# Keyboard Shortcuts

The Roo Code interface supports keyboard shortcuts to streamline your workflow and reduce dependence on mouse interactions.

## Available Keyboard Commands

Roo Code offers several keyboard commands to enhance your workflow. This page focuses on the `roo.acceptInput` command, but here's a quick reference to all keyboard commands:

| Command | Description | Default Shortcut |
|---------|-------------|-----------------|
| `roo.acceptInput` | Submit text or accept the primary suggestion | None (configurable) |
| `roo.focus` | Focus the Roo input box | None (configurable) |
| `roo.openChat` | Open Roo sidebar | Ctrl+Shift+R (⌘+Shift+R on Mac) |

### Key Benefits of Keyboard Commands

* **Keyboard-Driven Interface**: Submit text or select the primary suggestion button without mouse interaction
* **Improved Accessibility**: Essential for users with mobility limitations or those who experience discomfort with mouse usage
* **Vim/Neovim Compatibility**: Supports seamless transitions for developers coming from keyboard-centric environments
* **Workflow Efficiency**: Reduces context switching between keyboard and mouse during development tasks

## roo.acceptInput Command

The `roo.acceptInput` command lets you submit text or accept suggestions with keyboard shortcuts instead of clicking buttons or pressing Enter in the input area.

### What It Does

When triggered, the command:
- Clicks the primary (first) button when suggestion buttons are visible (see [Suggested Responses](/features/suggested-responses))
- Submits your current text input when in regular text input mode

### Detailed Setup Guide

#### Method 1: Using the VS Code UI

1. Open the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on Mac)
2. Type "Preferences: Open Keyboard Shortcuts"
3. In the search box, type "roo.acceptInput"
4. Locate "Roo: Accept Input/Suggestion" in the results
5. Click the + icon to the left of the command
6. Press your desired key combination (e.g., `Ctrl+Enter` or `Alt+Enter`)
7. Press Enter to confirm

<img src="/img/keyboard-shortcuts/keyboard-shortcut-setup.png" alt="Setting up the roo.acceptInput keyboard shortcut in VS Code's Keyboard Shortcuts UI" width="700" />

#### Method 2: Editing keybindings.json directly

1. Open the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on Mac)
2. Type "Preferences: Open Keyboard Shortcuts (JSON)"
3. Add the following entry to the JSON array:

```json
{
  "key": "ctrl+enter",  // or your preferred key combination
  "command": "roo.acceptInput",
  "when": "rooViewFocused"
}
```

#### Recommended Key Combinations

Choose a key combination that doesn't conflict with existing VS Code shortcuts:

- `Alt+Enter` - Easy to press while typing
- `Ctrl+Space` - Familiar for those who use autocomplete
- `Ctrl+Enter` - Intuitive for command execution
- `Alt+A` - Mnemonic for "Accept"

### Practical Use Cases

#### Quick Development Workflows

- **Multi-Step Code Generation**: When Roo asks clarifying questions during code generation, accept the primary suggestion without breaking your flow
- **Rapid Prototyping**: Quickly move through a series of inputs when creating a prototype
- **Confirmations**: Accept default confirmation options during processes like creating files, running terminal commands, or applying diffs
- **Consecutive Tasks**: Chain multiple small tasks together with minimal interruption

#### Keyboard-Centric Development

- **Vim/Neovim Workflows**: If you're coming from a Vim/Neovim background, maintain your keyboard-focused workflow
- **IDE Integration**: Use alongside other VS Code keyboard shortcuts for a seamless experience
- **Code Reviews**: Quickly accept suggestions when reviewing code with Roo
- **Documentation Writing**: Submit text and accept formatting suggestions when generating documentation

#### Accessibility Use Cases

- **Hand Mobility Limitations**: Essential for users who have difficulty using a mouse
- **Repetitive Strain Prevention**: Reduce mouse usage to prevent or manage repetitive strain injuries
- **Screen Reader Integration**: Works well with screen readers for visually impaired users
- **Voice Control Compatibility**: Can be triggered via voice commands when using voice control software

### Accessibility Benefits

The `roo.acceptInput` command was designed with accessibility in mind:

- **Reduced Mouse Dependence**: Complete entire workflows without reaching for the mouse
- **Reduced Physical Strain**: Helps users who experience discomfort or pain from mouse usage
- **Alternative Input Method**: Supports users with mobility impairments who rely on keyboard navigation
- **Workflow Optimization**: Particularly valuable for users coming from keyboard-centric environments like Vim/Neovim

### Keyboard-Centric Workflows

Here are some complete workflow examples showing how to effectively use keyboard shortcuts with Roo:

#### Development Workflow Example

1. Open VS Code and navigate to your project
2. Open Roo (`Ctrl+Shift+R` or via sidebar)
3. Type your request: "Create a REST API endpoint for user registration"
4. When Roo asks for framework preferences, use your `roo.acceptInput` shortcut to select the first suggestion
5. Continue using the shortcut to accept code generation suggestions
6. When Roo offers to save the file, use the shortcut again to confirm
7. Use VS Code's built-in shortcuts to navigate through the created files

#### Code Review Workflow

1. Select code you want to review and use VS Code's "Copy" command
2. Ask Roo to review it: "Review this code for security issues"
3. As Roo asks clarifying questions about the code context, use your shortcut to accept suggestions
4. When Roo provides improvement recommendations, use the shortcut again to accept implementation suggestions

### Troubleshooting

| Issue | Solution |
|-------|----------|
| Shortcut doesn't work | Ensure Roo is focused (click in the Roo panel first) |
| Wrong suggestion selected | The command always selects the first (primary) button; use mouse if you need a different option |
| Conflicts with existing shortcuts | Try a different key combination in VS Code keyboard settings |
| No visual feedback when used | This is normal - the command silently activates the function without visual confirmation |
| Shortcut works inconsistently | Make sure the `when: "rooViewFocused"` clause is in your keybindings.json |

### Technical Implementation

The `roo.acceptInput` command is implemented as follows:

- Command registered as `roo.acceptInput` with display title "Roo: Accept Input/Suggestion" in the command palette
- When triggered, it sends an "acceptInput" message to the active Roo webview
- The webview determines the appropriate action based on the current UI state
- Designed to work with the `rooViewFocused` context condition
- No default key binding - users assign their preferred shortcut

### Limitations

- Works only when the Roo interface is active
- Has no effect if no inputs or suggestions are currently available
- Prioritizes the primary (first) button when multiple suggestions are shown
- Cannot be used to select specific suggestions (always picks the first one)