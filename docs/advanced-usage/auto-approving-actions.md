# Auto-Approving Actions

Roo Code can automatically approve certain actions without needing your explicit confirmation each time. This speeds up your workflow, but it's important to use this feature carefully.  **Always be mindful of the actions you're auto-approving, as they give Roo Code more control.**

## The Auto-Approve Toolbar

The easiest way to manage auto-approval settings is through the **Auto-Approve Toolbar**, located in the toolbar directly above the chat input box:

1.  **Open the Auto-Approve Toolbar:** Click on the toolbar to expand it.
2.  **Check/Uncheck Actions:**  A menu will appear with checkboxes for different action types. Check the actions you want Roo Code to perform automatically, and uncheck the ones you want to approve manually.

The available auto-approval options are:

*   **Read Files:** Allows Roo Code to read files and directories without confirmation.
*   **Edit Files:** Allows Roo Code to create, modify, and delete files. **Use with caution!**
*   **Run Commands:** Allows Roo Code to execute terminal commands. **Use with caution!**  You can restrict this to a specific list of allowed commands in the settings.
*   **Use Browser:** Allows Roo Code to perform actions in a headless browser, such as opening web pages and interacting with elements.
*   **Use MCP:** Allows Roo Code to interact with configured MCP servers.
*   **Switch Modes:** Allows Roo Code to switch modes automatically.
*   **Retry Requests:** Allows Roo Code to automatically retry failed API requests.

**When an action is auto-approved, Roo Code will proceed without showing you a confirmation prompt.**

## Top-Level Toggle

At the top of the Auto-Approve Toolbar is a toggle to enable/disable auto-approval overall. When this is disabled, none of the actions will be auto-approved. You can use this to quickly disable auto-approval when you don't want Roo Code to take certain actions automatically.

## Advanced Configuration (Settings)

You can also find these auto-approval options in the Roo Code settings panel (gear icon ⚙️ in the top right corner).  The settings panel provides the same functionality as the auto-approve menu, but in a different location.  The auto-approve menu is generally the quickest way to change these settings.

## Security Considerations

*   **Start Slowly:** Begin by auto-approving only read-only operations.  As you become more comfortable with Roo Code, you can gradually enable other actions.
*   **Review Regularly:**  Periodically review your auto-approval settings to make sure they still align with your needs and security preferences.
* **Allowed Commands:** You can limit which commands can be auto-executed. Go to `Settings > Auto-Approve Settings` to find and modify the list of allowed command prefixes.

By understanding and carefully configuring auto-approval, you can optimize Roo Code's performance while maintaining control over your system.