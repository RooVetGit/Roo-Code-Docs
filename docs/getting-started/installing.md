---
sidebar_label: Installing Roo Code
---

# Installing Roo Code

Roo Code is a VS Code extension that brings AI-powered coding assistance directly to your editor. Install using one of these methods:

1. **VS Code Marketplace (Recommended)** - fastest method for standard VS Code users
2. **Open VSX Registry** - for VS Code-compatible editors like VSCodium
3. **VSIX File (Advanced)** - offline installation or specific builds

## VS Code Marketplace

1. Open VS Code
2. Access Extensions: Click the Extensions icon in the Activity Bar or press `Ctrl+Shift+X` (Windows/Linux) or `Cmd+Shift+X` (macOS)
3. Search for "Roo Code"
4. Select "Roo Code" by RooVeterinaryInc and click **Install**
5. Reload VS Code if prompted

After installation, find the Roo Code icon (<Codicon name="rocket" />) in the Activity Bar to open the Roo Code panel.

<img src="/img/installing/installing.png" alt="VS Code marketplace with Roo Code extension ready to install" width="400" />
*VS Code marketplace with Roo Code extension ready to install*

## Open VSX Registry

For VS Code-compatible editors without Marketplace access (like VSCodium):

1. Open your editor
2. Access the Extensions view
3. Search for "Roo Code"
4. Select "Roo Code" by RooVeterinaryInc and click **Install**
5. Reload if prompted

<img src="/img/installing/installing-1.png" alt="Open VSX Registry with Roo Code extension ready to install" width="400" />
*Open VSX Registry with Roo Code extension ready to install*

## VSIX File Installation

For offline installation, development testing, or specific builds:

1. Get the VSIX file:
   * Download from [GitHub Releases](https://github.com/RooVetGit/Roo-Code/releases)
   * For development builds: find in `bin/` after running `npm run build`
2. In VS Code, open Extensions view
3. Click "..." menu (top-right) and select "Install from VSIX..."
4. Browse to and select the downloaded or generated `.vsix` file
5. Reload VS Code if prompted

<img src="/img/installing/installing-2.png" alt="VS Code's Install from VSIX dialog" width="400" />
*VS Code's "Install from VSIX" dialog with Roo Code VSIX file selected*

## Troubleshooting

<img src="/img/installing/installing-4.png" alt="VS Code Output panel showing Roo Code logs for troubleshooting" width="100%" />
*VS Code Output panel showing Roo Code logs for troubleshooting*

**Extension Not Visible**
* Restart VS Code
* Verify Roo Code is listed and enabled in Extensions
* Try disabling and re-enabling
* Check Output panel for errors (View → Output, select "Roo Code")

**Installation Problems**
* Try the VSIX installation method if Marketplace access fails
* Ensure stable internet connection
* Verify VS Code version 1.84.0 or later

## Getting Support

If you encounter issues not covered here:

* Join our [Discord community](https://discord.gg/roocode) for real-time support
* Submit issues on [GitHub](https://github.com/RooVetGit/Roo-Code/issues)
* Visit our [Reddit community](https://www.reddit.com/r/RooCode)