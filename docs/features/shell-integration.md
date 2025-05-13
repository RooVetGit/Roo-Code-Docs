# Terminal Shell Integration

Terminal Shell Integration is a key feature that enables Roo Code to execute commands in your terminal and intelligently process their output. This bidirectional communication between the AI and your development environment unlocks powerful automation capabilities.

## What is Shell Integration?

Shell integration is automatically enabled in Roo Code and connects directly to your terminal's command execution lifecycle without requiring any setup from you. This built-in feature allows Roo to:

- Execute commands on your behalf through the [`execute_command`](/advanced-usage/available-tools/execute-command) tool
- Read command output in real-time without manual copy-pasting
- Automatically detect and fix errors in running applications
- Observe command exit codes to determine success or failure
- Track working directory changes as you navigate your project
- React intelligently to terminal output without user intervention
- Stop running commands directly from the chat interface using the stop button that appears next to the command execution message.

<img src="/img/v3.15/v3.15.png" alt="Stop Command Button in Chat UI" width="600" />

When you ask Roo to perform tasks like installing dependencies, starting a development server, or analyzing build errors, shell integration works behind the scenes to make these interactions smooth and effective.

## Troubleshooting Shell Integration

Shell integration is built into Roo Code and works automatically in most cases. If you see "Shell Integration Unavailable" messages or experience issues with command execution, try these solutions:

1. **Update VSCode/Cursor** to the latest version (VSCode 1.93+ required)
2. **Ensure a compatible shell is selected**: Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P`) → "Terminal: Select Default Profile" → Choose bash, zsh, PowerShell, or fish
3. **Windows PowerShell users**: Run `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser` then restart VSCode
4. **WSL users**: Add `. "$(code --locate-shell-integration-path bash)"` to your `~/.bashrc`

## Terminal Integration Settings
### Command Execution Fallback

Roo Code includes a fallback mechanism to ensure commands can still run even if VSCode's native shell integration fails or is unavailable.

- **How it works**: If Roo Code cannot connect to the terminal using standard shell integration, it will automatically attempt to execute the command directly using a background process.
- **Notification**: You'll see a notification in the chat if this fallback is used, indicating that the command is running without full shell integration features (like real-time output streaming or exit code detection might be limited).
- **Resolution**: The notification will include links to help you troubleshoot the underlying shell integration issue if you wish to restore full functionality. Often, following the steps in this document resolves the problem.

<img src="/img/v3.15.0/v3.15.0.png" alt="Stop Command Button in Chat UI" width="600" />

Roo Code provides several settings to fine-tune shell integration. Access these in the Roo Code sidebar under Settings → Terminal.

### Basic Settings

#### Terminal Output Limit
<img src="/img/shell-integration/shell-integration.png" alt="Terminal output limit slider set to 500" width="600" />
Maximum number of lines to include in terminal output when executing commands. When exceeded lines will be removed from the middle, saving tokens. Default: 500 lines.

#### Compress progress bar output
<img src="/img/shell-integration/shell-integration-10.png" alt="Compress progress bar output checkbox" width="600" />
When enabled, processes terminal output with carriage returns (\\r) to simulate how a real terminal would display content like progress bars. This removes intermediate progress bar states, retaining only the final state, which conserves context space for more relevant information.

### Advanced Settings

:::info Important
**Terminal restart required for these settings**

Changes to advanced terminal settings only take effect after restarting your terminals. To restart a terminal:

1. Click the trash icon in the terminal panel to close the current terminal
2. Open a new terminal with Terminal → New Terminal or <kbd>Ctrl</kbd>+<kbd>`</kbd> (backtick)

Always restart all open terminals after changing any of these settings.
:::

#### Inherit environment variables
<img src="/img/shell-integration/shell-integration-11.png" alt="Inherit environment variables checkbox" width="600" />
When enabled, the terminal will inherit environment variables from VSCode's parent process, such as user-profile-defined shell integration settings. This directly toggles the VSCode global setting [`terminal.integrated.inheritEnv`](https://code.visualstudio.com/docs/editor/integrated-terminal#_inherit-environment-variables).

#### Disable terminal shell integration
<img src="/img/shell-integration/shell-integration-9.png" alt="Disable terminal shell integration checkbox" width="600" />
Enable this if terminal commands aren't working correctly or you see 'Shell Integration Unavailable' errors. This uses a simpler method to run commands, bypassing some advanced terminal features.

The following settings are applicable when "Disable terminal shell integration" is **unchecked** (i.e., shell integration is enabled):

##### a. Terminal shell integration timeout
<img src="/img/shell-integration/shell-integration-1.png" alt="Terminal shell integration timeout slider set to 15s" width="600" />
Maximum time to wait for shell integration to initialize before executing commands. For users with long shell startup times, this value may need to be increased if you see 'Shell Integration Unavailable' errors in the terminal. Default: 15s (as shown in UI).

##### b. Terminal command delay
<img src="/img/shell-integration/shell-integration-2.png" alt="Terminal command delay slider set to 0ms" width="600" />
Delay in milliseconds to add after command execution. The default setting of 0 disables the delay completely. This can help ensure command output is fully captured in terminals with timing issues. In most terminals, it is implemented by setting `PROMPT_COMMAND='sleep N'` and Powershell appends `start-sleep` to the end of each command. Originally was workaround for VSCode bug [#237208](https://github.com/microsoft/vscode/issues/237208) and may not be needed. Default: 0ms.

##### c. Enable PowerShell counter workaround
<img src="/img/shell-integration/shell-integration-3.png" alt="Enable PowerShell counter workaround checkbox" width="600" />
When enabled, adds a counter to PowerShell commands to ensure proper command execution. This helps with PowerShell terminals that might have issues with command output capture.

##### d. Clear ZSH EOL mark
<img src="/img/shell-integration/shell-integration-4.png" alt="Clear ZSH EOL mark checkbox" width="600" />
When enabled, clears the ZSH end-of-line mark by setting `PROMPT_EOL_MARK=''`. This prevents issues with command output interpretation when output ends with special characters like '%'.

##### e. Enable Oh My Zsh integration
<img src="/img/shell-integration/shell-integration-5.png" alt="Enable Oh My Zsh integration checkbox" width="600" />
When enabled, sets `ITERM_SHELL_INTEGRATION_INSTALLED=Yes` to enable Oh My Zsh shell integration features. Applying this setting might require restarting the IDE.

##### f. Enable Powerlevel10k integration
<img src="/img/shell-integration/shell-integration-6.png" alt="Enable Powerlevel10k integration checkbox" width="600" />
When enabled, sets `POWERLEVEL9K_TERM_SHELL_INTEGRATION=true` to enable Powerlevel10k shell integration features.

##### g. Enable ZDOTDIR handling
<img src="/img/shell-integration/shell-integration-7.png" alt="Enable ZDOTDIR handling checkbox" width="600" />
When enabled, creates a temporary directory for ZDOTDIR to handle zsh shell integration properly. This ensures VSCode shell integration works correctly with zsh while preserving your zsh configuration.

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

## WSL Terminal Integration Methods

When using Windows Subsystem for Linux (WSL), there are two distinct ways to use VSCode with WSL, each with different implications for shell integration:

### Method 1: VSCode Windows with WSL Terminal

In this setup:
- VSCode runs natively in Windows
- You use the WSL terminal integration feature in VSCode
- Shell commands are executed through the WSL bridge
- May experience additional latency due to Windows-WSL communication
- Shell integration markers may be affected by the WSL-Windows boundary: you must make sure that `source "$(code --locate-shell-integration-path <shell>)"` is loaded for your shell within the WSL environment because it may not get automatically loaded; see above.

### Method 2: VSCode Running Within WSL

In this setup:
- You launch VSCode directly from within WSL using `code .`
- VSCode server runs natively in the Linux environment
- Direct access to Linux filesystem and tools
- Better performance and reliability for shell integration
- Shell integration is loaded automatically since VSCode runs natively in the Linux environment
- Recommended approach for WSL development

For optimal shell integration with WSL, we recommend:
1. Open your WSL distribution
2. Navigate to your project directory
3. Launch VSCode using `code .`
4. Use the integrated terminal within VSCode

## Known Issues and Workarounds

### VS Code Shell Integration for Fish + Cygwin on Windows

For fellow Windows users running Fish terminal within a Cygwin environment, here's how VS Code's shell integration works:

1.  **(Optional) Locate the Shell Integration Script:**
    Open your Fish terminal *within VS Code* and run the following command:
    ```bash
    code --locate-shell-integration-path fish
    ```
    This will output the path to the `shellIntegration.fish` script. Note down this path.

2.  **Update Your Fish Configuration:**
    Edit your `config.fish` file (usually located at `~/.config/fish/config.fish` within your Cygwin home directory). Add the following line, preferably within an `if status is-interactive` block or at the very end of the file:

    ```fish
    # Example config.fish structure
    if status is-interactive
        # Your other interactive shell configurations...
        # automatic locate integration script:
        string match -q "$TERM_PROGRAM" "vscode"; and . (code --locate-shell-integration-path fish)

        # Or if the above fails for you:
        # Source the VS Code shell integration script
        # IMPORTANT: Replace the example path below with the actual path you found in Step 1.
        # Make sure the path is in a format Cygwin can understand (e.g., using /cygdrive/c/...).
        # source "/cygdrive/c/Users/YourUser/.vscode/extensions/..../shellIntegration.fish"
    end
    ```
    *Remember to replace the example path with the actual path from Step 1, correctly formatted for Cygwin.*

3.  **Configure VS Code Terminal Profile:**
    Open your VS Code `settings.json` file (Ctrl+Shift+P -> "Preferences: Open User Settings (JSON)"). Update or add the Fish profile under `terminal.integrated.profiles.windows` like this:

    ```json
    {
      // ... other settings ...

      "terminal.integrated.profiles.windows": {
        // ... other profiles ...

        // Recommended: Use bash.exe to launch fish as a login shell
        "fish": {
          "path": "C:\\cygwin64\\bin\\bash.exe", // Or your Cygwin bash path
          "args": [
            "--login", // Ensures login scripts run (important for Cygwin environment)
            "-i",      // Ensures bash runs interactively
            "-c",
            "exec fish" // Replace bash process with fish
          ],
          "icon": "terminal-bash" // Optional: Use a recognizable icon
        }
        // Alternative (if the above fails): Launch fish directly
        "fish-direct": {
          "path": "C:\\cygwin64\\bin\\fish.exe", // Ensure this is in your Windows PATH or provide full path
          // Use 'options' here instead of 'args'; otherwise, you might encounter the error "terminal process terminated exit code 1".
          "options": ["-l", "-c"], // Example: login and interactive flags.
          "icon": "terminal-fish" // Optional: Use a fish icon
        }
      },

      // Optional: Set fish as your default if desired
      // "terminal.integrated.defaultProfile.windows": "fish", // or "fish-direct" depending what you use.

      // ... other settings ...
    }
    ```
    *Note: Using `bash.exe --login -i -c "exec fish"` is often more reliable in Cygwin environments for ensuring the correct environment setup before `fish` starts. However, if that approach doesn't work, try the `fish-direct` profile configuration.*

4.  **Restart VS Code:**
    Close and reopen Visual Studio Code completely to apply the changes.

5.  **Verify:**
    Open a new Fish terminal in VS Code. The shell integration features (like command decorations, better command history navigation, etc.) should now be active. You can test basic functionality by running simple commands like `echo "Hello from integrated Fish!"`. <img src="/img/shell-integration/shell-integration-8.png" alt="Fish Cygwin Integration Example" width="600" />

This setup works reliably on Windows systems using Cygwin, Fish, and the Starship prompt, and should assist users with similar configurations.


### Shell Integration Failures After VSCode 1.98

**Issue**: After VSCode updates beyond version 1.98, shell integration may fail with the error "VSCE output start escape sequence (]633;C or ]133;C) not received".

**Solutions**:
1. **Set Terminal Command Delay**:
   - Set the Terminal Command Delay to 50ms in Roo Code settings
   - Restart all terminals after changing this setting
   - This matches older default behavior and may resolve the issue, however some users have reported that a value of 0ms works better. This is a workaround for upstream VSCode problems.

2. **Roll Back VSCode Version**:
   - Download VSCode v1.98 from [VSCode Updates](https://code.visualstudio.com/updates/v1_98)
   - Replace your current VSCode installation
   - No backup of Roo settings needed

3. **WSL-Specific Workaround**:
   - If using WSL, ensure you launch VSCode from within WSL using `code .`

4. **ZSH Users**:
   - Try enabling some or all ZSH-related workarounds in Roo settings
   - These settings can help regardless of your operating system

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

### Checking Debug Logs
When shell integration issues occur, check the debug logs:
1. Open Help → Toggle Developer Tools → Console
2. Set "Show All Levels" to see all log messages
3. Look for messages containing `[Terminal Process]`
4. Check `preOutput` content in error messages:
   - Empty preOutput (`''`) means VSCode sent no data
   - This indicates a potential VSCode shell integration issue, or an upstream bug that is out of our control
   - The absence of shell integration markers may require adjusting settings to work around possible upstream bugs or local workstation configuration issues related to shell initialization and VSCode's loading of special shell integration hooks

### Using the VSCode Terminal Integration Test Extension
The [VSCode Terminal Integration Test Extension](https://github.com/KJ7LNW/vsce-test-terminal-integration) helps diagnose shell integration issues by testing different settings combinations:


1. **When Commands Stall**:
   - If you see "command already running" warnings, click "Reset Stats" to reset the terminal state
   - These warnings indicate shell integration is not working
   - Try different settings combinations until you find one that works
   - If it really gets stuck, restart the extension by closing the window and pressing F5

2. **Testing Settings**:
   - Systematically try different combinations of:
     * Terminal Command Delay
     * Shell Integration settings
   - Document which combinations succeed or fail
   - This helps identify patterns in shell integration issues

3. **Reporting Issues**:
   - Once you find a problematic configuration
   - Document the exact settings combination
   - Note your environment (OS, VSCode version, shell, and any shell prompt customization)
   - Open an issue with these details to help improve shell integration

### Additional Resources

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