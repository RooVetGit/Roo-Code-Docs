---
sidebar_label: Installing Roo Code
---

# Installing Roo Code

Roo Code is a VS Code extension that brings AI-powered coding assistance to your editor.  There are three main ways to install it:

1.  **From the VS Code Marketplace (Recommended)**
2.  **From the Open VSX Registry**
3.  **From a VSIX file (Advanced)**

## 1. Installation from the VS Code Marketplace

This is the easiest and recommended method for most users.

1.  **Open VS Code.**
2.  **Open the Extensions View:**
    *   Click the Extensions icon in the Activity Bar on the side of VS Code.  (It looks like four squares, with one detached.)
    *   Or, use the keyboard shortcut: `Ctrl+Shift+X` (Windows/Linux) or `Cmd+Shift+X` (macOS).
3.  **Search for Roo Code:** In the Extensions view search box, type `Roo Code`.
4.  **Install:** Find "Roo Code" in the search results (by RooVeterinaryInc). Click the **Install** button.
5.  **Reload (if required):**  VS Code may prompt you to reload.  If so, click the **Reload** button.

Once installed, you'll see the Roo Code icon (<Codicon name="rocket" />) in the Activity Bar.  Click it to open the Roo Code panel.

## 2. Installation from the Open VSX Registry

If you're using a VS Code-compatible editor that doesn't have access to the VS Code Marketplace (like VSCodium), you can install Roo Code from the Open VSX Registry.

1.  **Open your editor.**
2.  **Open the Extensions View.**
3.  **Search for Roo Code:** Type `Roo Code` in the Extensions view search box.
4.  **Install:** Find "Roo Code" in the search results (by RooVeterinaryInc). Click the **Install** button.
5.  **Reload (if required):** Your editor may prompt you to reload. If so, click the reload button.

## 3. Installation from a VSIX File (Advanced)

This method is useful if you're developing Roo Code, testing a specific build, or need to install it offline.

1.  **Download the VSIX file:**
    *   **Releases:**  You can find official releases on the [Roo Code GitHub Releases page](https://github.com/RooVetGit/Roo-Code/releases).  Download the `.vsix` file from the latest release.
    *   **Development Builds:** If you're building the extension yourself, the `.vsix` file is located in the `bin/` directory after running `npm run package`.

2.  **Open VS Code.**
3.  **Open the Extensions View.**
4.  **Install from VSIX:**
    *   Click the **"..."** (Views and More Actions...) menu in the top-right corner of the Extensions view.
    *   Select **"Install from VSIX..."**
    *   Browse to the downloaded `.vsix` file and select it.
5.  **Reload (if required):**  VS Code may prompt you to reload.  If so, click the **Reload** button.

## Troubleshooting Installation

*   **Extension Doesn't Appear:**
    *   Make sure you've restarted VS Code after installation.
    *   Check the Extensions view to see if Roo Code is listed and enabled.
    *   Try disabling and re-enabling the extension.
    *   Check for any error messages in the VS Code Output panel (View -> Output, then select "Roo Code" from the dropdown).
*   **Marketplace Issues:**
    *   If you're having trouble with the VS Code Marketplace, try installing from a VSIX file (see instructions above).
    *   Ensure you have a stable internet connection.
* **Compatibility:** Roo Code requires VS Code version 1.84.0 or later.

If you continue to experience problems, please visit our [GitHub Issues page](https://github.com/RooVetGit/Roo-Code/issues) or [Reddit community](https://www.reddit.com/r/RooCode) to report the issue or ask for help.