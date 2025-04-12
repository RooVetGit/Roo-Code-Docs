# Terminal Shell Integration

Terminal Shell Integration is a key feature that enables Roo Code to execute commands in your terminal and intelligently process their output. This bidirectional communication between the AI and your development environment unlocks powerful automation capabilities.

## What is Shell Integration?

Shell integration is automatically enabled in Roo Code and connects directly to your terminal's command execution lifecycle without requiring any setup from you. This built-in feature allows Roo to:

- Execute commands on your behalf through the [`execute_command`](/features/tools/execute-command) tool
- Read command output in real-time without manual copy-pasting
- Automatically detect and fix errors in running applications
- Observe command exit codes to determine success or failure
- Track working directory changes as you navigate your project
- React intelligently to terminal output without user intervention

When you ask Roo to perform tasks like installing dependencies, starting a development server, or analyzing build errors, shell integration works behind the scenes to make these interactions smooth and effective.

## Troubleshooting Shell Integration

Shell integration is built into Roo Code and works automatically in most cases. If you see "Shell Integration Unavailable" messages or experience issues with command execution, try these solutions:

1. **Update VSCode/Cursor** to the latest version (VSCode 1.93+ required)
2. **Ensure a compatible shell is selected**: Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P`) → "Terminal: Select Default Profile" → Choose bash, zsh, PowerShell, or fish
3. **Windows PowerShell users**: Run `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser` then restart VSCode
4. **WSL users**: Add `. "$(code --locate-shell-integration-path bash)"` to your `~/.bashrc`

## Terminal Integration Settings

Roo Code provides several settings to fine-tune shell integration. Access these in the Roo Code sidebar under Settings → Terminal.

### Basic Settings

#### Terminal Output Limit
<img src="/img/shell-integration/shell-integration.png" alt="Terminal output limit slider set to 500" width="600" />
Controls the maximum number of lines captured from terminal output. When exceeded, it keeps 20% of the beginning and 80% of the end with a truncation message in between. This prevents excessive token usage while maintaining context. Default: 500 lines.
Controls the maximum number of lines captured from terminal output. When exceeded, lines are removed from the middle to save tokens. Default: 500 lines.

#### Terminal Shell Integration Timeout
<img src="/img/shell-integration/shell-integration-1.png" alt="Terminal shell integration timeout slider set to 15s" width="600" />

Maximum time to wait for shell integration to initialize before executing commands. Increase this value if you experience "Shell Integration Unavailable" errors. Default: 15 seconds.

#### Terminal Command Delay
<img src="/img/shell-integration/shell-integration-2.png" alt="Terminal command delay slider set to 0ms" width="600" />

Adds a small pause after running commands to help Roo capture all output correctly. This is helpful if Roo seems to miss parts of command output or reacts before commands finish. Default: 0ms (disabled).

### Advanced Settings

:::info Important
**Terminal restart required for these settings**

Changes to advanced terminal settings only take effect after restarting your terminals. To restart a terminal:

1. Click the trash icon in the terminal panel to close the current terminal
2. Open a new terminal with Terminal → New Terminal or <kbd>Ctrl</kbd>+<kbd>`</kbd> (backtick)

Always restart all open terminals after changing any of these settings.
:::

#### PowerShell Counter Workaround
<img src="/img/shell-integration/shell-integration-3.png" alt="PowerShell counter workaround checkbox" width="600" />

Helps PowerShell run the same command multiple times in a row. Enable this if you notice Roo can't run identical commands consecutively in PowerShell.

#### Clear ZSH EOL Mark
<img src="/img/shell-integration/shell-integration-4.png" alt="Clear ZSH EOL mark checkbox" width="600" />

Prevents ZSH from adding special characters at the end of output lines that can confuse Roo when reading terminal results.

#### Oh My Zsh Integration
<img src="/img/shell-integration/shell-integration-5.png" alt="Enable Oh My Zsh integration checkbox" width="600" />

Makes Roo work better with the popular Oh My Zsh shell customization framework. Turn this on if you use Oh My Zsh and experience terminal issues.

#### Powerlevel10k Integration
<img src="/img/shell-integration/shell-integration-6.png" alt="Enable Powerlevel10k integration checkbox" width="600" />

Improves compatibility if you use the Powerlevel10k theme for ZSH. Turn this on if your fancy terminal prompt causes issues with Roo.

#### ZDOTDIR Handling
<img src="/img/shell-integration/shell-integration-7.png" alt="Enable ZDOTDIR handling checkbox" width="600" />

Helps Roo work with custom ZSH configurations without interfering with your personal shell settings and customizations.

## How Shell Integration Works

Shell integration connects Roo to your terminal's command execution process in real-time:

1. **Connection**: When you open a terminal, VS Code establishes a special connection with your shell.

2. **Command Tracking**: VS Code monitors your terminal activities by detecting:
   - When a new prompt appears
   - When you enter a command
   - When the command starts running
   - When the command finishes (and whether it succeeded or failed)
   - What directory you're currently in

3. **Different Shells, Same Result**: Each shell type (Bash, Zsh, PowerShell, Fish) implements this slightly differently behind the scenes, but they all provide the same functionality to Roo.

4. **Information Gathering**: Roo can see what commands are running, where they're running, how long they take, whether they succeed, and their complete output - all without you having to copy and paste anything.

## Troubleshooting Shell Integration

### PowerShell Execution Policy (Windows)

PowerShell restricts script execution by default. To configure:

1. Open PowerShell as Administrator
2. Check current policy: `Get-ExecutionPolicy`
3. Set appropriate policy: `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser`

Common policies:
- `Restricted`: No scripts allowed (default)
- `RemoteSigned`: Local scripts can run; downloaded scripts need signing
- `Unrestricted`: All scripts run with warnings
- `AllSigned`: All scripts must be signed

### Manual Shell Integration Installation

If automatic integration fails, add the appropriate line to your shell configuration:

**Bash** (`~/.bashrc`):
```bash
[[ "$TERM_PROGRAM" == "vscode" ]] && . "$(code --locate-shell-integration-path bash)"
```

**Zsh** (`~/.zshrc`):
```bash
[[ "$TERM_PROGRAM" == "vscode" ]] && . "$(code --locate-shell-integration-path zsh)"
```

**PowerShell** (`$Profile`):
```powershell
if ($env:TERM_PROGRAM -eq "vscode") { . "$(code --locate-shell-integration-path pwsh)" }
```

**Fish** (`~/.config/fish/config.fish`):
```fish
string match -q "$TERM_PROGRAM" "vscode"; and . (code --locate-shell-integration-path fish)
```

### Terminal Customization Issues

If you use terminal customization tools:

**Powerlevel10k**:
```bash
# Add before sourcing powerlevel10k in ~/.zshrc
typeset -g POWERLEVEL9K_TERM_SHELL_INTEGRATION=true
```

**Alternative**: Enable the Powerlevel10k Integration setting in Roo Code.

### Verifying Shell Integration Status

Confirm shell integration is active with these commands:

**Bash**:
```bash
set | grep -i '[16]33;'
echo "$PROMPT_COMMAND" | grep vsc
trap -p DEBUG | grep vsc
```

**Zsh**:
```zsh
functions | grep -i vsc
typeset -p precmd_functions preexec_functions
```

**PowerShell**:
```powershell
Get-Command -Name "*VSC*" -CommandType Function
Get-Content Function:\Prompt | Select-String "VSCode"
```

**Fish**:
```fish
functions | grep -i vsc
functions fish_prompt | grep -i vsc
```

Visual indicators of active shell integration:
1. Shell integration indicator in terminal title bar
2. Command detection highlighting
3. Working directory updates in terminal title
4. Command duration and exit code reporting

## Known Issues and Workarounds

### Ctrl+C Behavior

**Issue**: If text is already typed in the terminal when Roo tries to run a command, Roo will press Ctrl+C first to clear the line, which can interrupt running processes.

**Workaround**: Make sure your terminal prompt is empty (no partial commands typed) before asking Roo to execute terminal commands.

### Multi-line Command Issues

**Issue**: Commands that span multiple lines can confuse Roo and may show output from previous commands mixed in with current output.

**Workaround**: Instead of multi-line commands, use command chaining with `&&` to keep everything on one line (e.g., `echo a && echo b` instead of typing each command on a separate line).

### PowerShell-Specific Issues

1. **Premature Completion**: PowerShell sometimes tells Roo a command is finished before all the output has been shown.
2. **Repeated Commands**: PowerShell may refuse to run the same command twice in a row.

**Workaround**: Enable the "PowerShell counter workaround" setting and set a terminal command delay of 150ms in the settings to give commands more time to complete.

### Incomplete Terminal Output

**Issue**: Sometimes VS Code doesn't show or capture all the output from a command.

**Workaround**: If you notice missing output, try closing and reopening the terminal tab, then run the command again. This refreshes the terminal connection.

## Troubleshooting Resources

- [VSCode Terminal Output Issue #237208](https://github.com/microsoft/vscode/issues/237208)
- [VSCode Terminal Integration Test Repository](https://github.com/KJ7LNW/vsce-test-terminal-integration)
- [Roo Code Shell Integration Architecture PR](https://github.com/RooVetGit/Roo-Code/pull/1365)

## Support

If you're still having issues:

1. Check [Roo Code GitHub Issues](https://github.com/RooVetGit/Roo-Code/issues)
2. Create a new issue with:
   - OS and VSCode version
   - Shell type
   - Steps to reproduce
   - Error messages

For additional help, join our [Discord](https://discord.gg/roocode).