# Managing Preferences and Settings

Roo Code offers numerous settings and preferences that allow you to customize its behavior. This guide explores the different settings available and how to configure them for your specific needs.

## Accessing Settings

You can access Roo Code's settings in two ways:

1. **Via Settings UI:**
   - Click the <Codicon name="gear" /> Settings icon in the top right of the Roo Code interface
   - Browse through the available settings categories
   - Make your changes and click "Done" to save

2. **Via VSCode Settings:**
   - Open VSCode Settings (File > Preferences > Settings or Ctrl+,)
   - Search for "Roo Code" or "roo-cline"
   - Adjust settings through the VSCode interface

## Settings Categories

Roo Code's settings are organized into several categories:

### General Settings

These control basic behavior and appearance:

| Setting | Description | Default |
|---------|-------------|---------|
| Preferred Language | Language Roo uses for responses | English |
| Show Line Numbers | Display line numbers in code snippets | On |
| Use Markdown Formatting | Enable rich formatting in responses | On |
| Sound Effects | Enable notification sounds | On |
| Sound Volume | Volume level for notification sounds | 50% |

### Security and Permission Settings

These control what Roo can do without asking for permission:

| Setting | Description | Default |
|---------|-------------|---------|
| Always Allow Read-Only | Auto-approve read operations | Off |
| Always Allow Write | Auto-approve write operations | Off |
| Always Allow Execute | Auto-approve execute operations | Off |
| Always Allow Browser | Auto-approve browser operations | Off |
| Always Allow MCP | Auto-approve MCP operations | Off |
| Always Approve Resubmit | Auto-approve resubmissions | Off |
| Always Allow Mode Switch | Auto-approve mode switching | Off |
| Allowed Commands | Specific commands allowed without confirmation | [] |

### API Configuration Settings

These control the AI services that power Roo:

| Setting | Description |
|---------|-------------|
| API Provider | Which AI service to use (OpenAI, Anthropic, etc.) |
| API Key | Authentication key for the API |
| Model | Which specific model to use |
| Temperature | Randomness in responses (0.0-1.0) |

### Advanced Settings

These control more technical aspects of Roo:

| Setting | Description | Default |
|---------|-------------|---------|
| Request Delay Seconds | Delay between successive requests | 0 |
| Rate Limit Seconds | Minimum time between requests | 0 |
| Write Delay Ms | Delay between writes for streaming | 50 |
| Fuzzy Match Threshold | Threshold for fuzzy matching in diffs | 0.8 |
| Max Open Tabs Context | Maximum number of open tabs to include in context | 10 |
| Terminal Output Line Limit | Maximum terminal lines to include | 100 |

### Experimental Features

As covered in [Experimental Features](experimental-features), these settings enable cutting-edge capabilities that are still under development.

## Project-Specific Settings

You can configure different settings for different projects using VSCode's workspace settings:

1. Create or edit `.vscode/settings.json` in your project
2. Add settings with the `roo-cline.` prefix
3. These settings will override global settings when working in that project

Example workspace settings:
```json
{
  "roo-cline.preferredLanguage": "TypeScript",
  "roo-cline.allowedCommands": [
    "npm test",
    "npm run build"
  ],
  "roo-cline.maxOpenTabsContext": 15
}
```

## Settings for Specific Workflows

Here are recommended settings for common workflows:

### For Fast Development

```json
{
  "roo-cline.alwaysAllowReadOnly": true,
  "roo-cline.alwaysAllowWrite": false,
  "roo-cline.alwaysAllowExecute": false,
  "roo-cline.experiments": {
    "insert_content": true,
    "search_and_replace": true
  }
}
```

### For Code Review

```json
{
  "roo-cline.alwaysAllowReadOnly": true,
  "roo-cline.alwaysAllowWrite": false,
  "roo-cline.alwaysAllowExecute": false,
  "roo-cline.maxOpenTabsContext": 20
}
```

### For Learning a New Codebase

```json
{
  "roo-cline.alwaysAllowReadOnly": true,
  "roo-cline.alwaysAllowWrite": false,
  "roo-cline.alwaysAllowExecute": false,
  "roo-cline.maxOpenTabsContext": 30,
  "roo-cline.experiments": {
    "powerSteering": false
  }
}
```

### For Teaching and Pair Programming

```json
{
  "roo-cline.alwaysAllowReadOnly": false,
  "roo-cline.alwaysAllowWrite": false,
  "roo-cline.alwaysAllowExecute": false,
  "roo-cline.useMarkdownFormatting": true,
  "roo-cline.showLineNumbers": true
}
```

## Token Usage Considerations

Some settings significantly affect token usage:

| Setting | Impact on Token Usage |
|---------|----------------------|
| Power Steering | High increase (repeats mode definition) |
| Max Open Tabs Context | Increases with higher values |
| Terminal Output Line Limit | Increases with higher values |
| Preferred Language | Minimal impact |
| MCP Enabled | Increases if MCP servers are complex |

For more detailed information on how these settings affect your context window, see [Managing the Context Window](managing-context-window).

If you're concerned about token usage or costs, consider:
- Disabling Power Steering
- Reducing Max Open Tabs Context to 5-10
- Reducing Terminal Output Line Limit to 50
- Disabling MCP when not needed

## Tips for Managing Settings

1. **Start Simple**: Begin with default settings and adjust as you become familiar with Roo
2. **Security First**: Be cautious about auto-approving operations, especially in shared environments
3. **Test Changes**: After changing settings, test Roo's behavior to ensure it meets your expectations
4. **Reset When Needed**: You can reset to defaults if you encounter unexpected behavior
5. **Project-Specific**: Use workspace settings for project-specific needs

## Troubleshooting Settings Issues

If you encounter issues with settings:

1. **Settings Not Applied**: 
   - Make sure you clicked "Done" after making changes
   - Try reloading the VS Code window
   - Check for workspace settings overriding global ones

2. **Conflicting Settings**: 
   - Look for conflicting settings in different locations
   - Workspace settings override global settings
   - Most recent settings override older ones

3. **Reset to Defaults**:
   - Click "Reset to Defaults" in the settings UI
   - Or delete specific settings from your VSCode settings

By understanding and optimizing Roo Code's settings, you can create a customized experience that matches your workflow preferences and project requirements.