---
title: Using MCP in Roo Code
sidebar_label: Using MCP in Roo Code
---

# Using MCP in Roo Code

Model Context Protocol (MCP) extends Roo Code's capabilities by connecting to external tools and services. This guide covers everything you need to know about using MCP with Roo Code.

## Configuring MCP Servers

MCP server configurations can be managed at two levels:

1.  **Global Configuration**: Stored in the `mcp_settings.json` file, accessible via VS Code settings (see below). These settings apply across all your workspaces unless overridden by a project-level configuration.
2.  **Project-level Configuration**: Defined in a `.roo/mcp.json` file within your project's root directory. This allows you to set up project-specific servers and share configurations with your team by committing the file to version control. Roo Code automatically detects and loads this file if it exists.

**Precedence**: If a server name exists in both global and project configurations, the **project-level configuration takes precedence**.

### Editing MCP Settings Files

You can edit both global and project-level MCP configuration files directly from the Roo Code MCP settings view:

1. Click the <Codicon name="server" /> icon in the top navigation of the Roo Code pane.

  <img src="/img/using-mcp-in-roo/using-mcp-in-roo-10.png" alt="MCP Servers interface in Roo Code" width="400" />

2. Scroll to the bottom of the MCP settings view.
3. Click the appropriate button:
    *   **`Edit Global MCP`**: Opens the global `mcp_settings.json` file.
    *   **`Edit Project MCP`**: Opens the project-specific `.roo/mcp.json` file. If this file doesn't exist, Roo Code will create it for you.

  <img src="/img/using-mcp-in-roo/using-mcp-in-roo-9.png" alt="Edit Global MCP and Edit Project MCP buttons" width="600" />

Both files use a JSON format with a `mcpServers` object containing named server configurations:

  ```json
  {
    "mcpServers": {
      "server1": {
        "command": "python",
        "args": ["/path/to/server.py"],
        "env": {
          "API_KEY": "your_api_key"
        },
        "alwaysAllow": ["tool1", "tool2"],
        "disabled": false
      }
    }
  }
    ```
    *Example of MCP Server config in Roo Code (STDIO Transport)*
  
  ### Understanding Transport Types
  
  MCP supports two transport types for server communication:
  
  #### STDIO Transport
  
  Used for local servers running on your machine:
  
  * Communicates via standard input/output streams
  * Lower latency (no network overhead)
  * Better security (no network exposure)
  * Simpler setup (no HTTP server needed)
  * Runs as a child process on your machine
  
  For more in-depth information about how STDIO transport works, see [STDIO Transport](/features/mcp/server-transports#stdio-transport).
  
  STDIO configuration example:
  ```json
  {
    "mcpServers": {
      "local-server": {
        "command": "node",
        "args": ["/path/to/server.js"],
        "env": {
          "API_KEY": "your_api_key"
        },
        "alwaysAllow": ["tool1", "tool2"],
        "disabled": false
      }
    }
  }
  ```
  
  #### SSE Transport
  
  Used for remote servers accessed over HTTP/HTTPS:
  
  * Communicates via Server-Sent Events protocol
  * Can be hosted on a different machine
  * Supports multiple client connections
  * Requires network access
  * Allows centralized deployment and management
  
  For more in-depth information about how SSE transport works, see [SSE Transport](/features/mcp/server-transports#sse-transport).
  
  SSE configuration example:
  
  ```json
  {
    "mcpServers": {
      "remote-server": {
        "url": "https://your-server-url.com/mcp",
        "headers": {
          "Authorization": "Bearer your-token"
        },
        "alwaysAllow": ["tool3"],
        "disabled": false
      }
    }
  }
  ```
  
  ## Enabling or Disabling MCP Servers

Disabling your MCP Servers here will remove all MCP related logic and definitions from your system prompt, reducing your token usage. This will prevent Roo Code from connecting to any MCP servers, and the `use_mcp_tool` and `access_mcp_resource` tools will not be available. Check this off if you don't intend to use MCP Servers. This is on by default.

1. Click the <Codicon name="server" /> icon in the top navigation of the Roo Code pane
2. Check/Uncheck `Enable MCP Servers` 

  <img src="/img/using-mcp-in-roo/using-mcp-in-roo-2.png" alt="Enable MCP Servers toggle" width="400" />

## Enabling or Disabling MCP Server Creation

Disabling your MCP Server Creation here will just remove the instructions from your system prompt that Roo Code uses to write MCP servers while not removing the context related to operating them. This reduces token usage. This is on by default.

1. Click the <Codicon name="server" /> icon in the top navigation of the Roo Code pane
2. Check/Uncheck `Enable MCP Server Creation` 

  <img src="/img/using-mcp-in-roo/using-mcp-in-roo-3.png" alt="Enable MCP Server Creation toggle" width="400" />

## Managing Individual MCP Servers

   <img src="/img/using-mcp-in-roo/using-mcp-in-roo-8.png" alt="Example of a configuration pane for a MCP Server" width="400" />

Each MCP server has its own configuration panel where you can modify settings, manage tools, and control its operation. To access these settings:

1. Click the <Codicon name="server" /> icon in the top navigation of the Roo Code pane
2. Locate the MCP server you want to manage in the list
   <img src="/img/using-mcp-in-roo/using-mcp-in-roo-4.png" alt="List of MCP Servers" width="400" />

### Deleting a Server

1. Press the <Codicon name="trash" /> next to the MCP server you would like to delete
2. Press the `Delete` button on the confirmation box

  <img src="/img/using-mcp-in-roo/using-mcp-in-roo-5.png" alt="Delete confirmation box" width="400" />

### Restarting a Server

1. Press the <Codicon name="refresh" /> button next to the MCP server you would like to restart

### Enabling or Disabling a Server

1. Press the <Codicon name="activate" /> toggle switch next to the MCP server to enable/disable it

### Network Timeout

To set the maximum time to wait for a response after a tool call to the MCP server:

1. Click the `Network Timeout` pulldown at the bottom of the individual MCP server's config box and change the time. Default is 1 minute but it can be set between 30 seconds and 5 minutes.

<img src="/img/using-mcp-in-roo/using-mcp-in-roo-6.png" alt="Network Timeout pulldown" width="400" />

### Auto Approve Tools

MCP tool auto-approval works on a per-tool basis and is disabled by default. To configure auto-approval:

1. First enable the global "Use MCP servers" auto-approval option in [auto-approving-actions](/features/auto-approving-actions)
2. In the MCP server settings, locate the specific tool you want to auto-approve
3. Check the `Always allow` checkbox next to the tool name

<img src="/img/using-mcp-in-roo/using-mcp-in-roo-7.png" alt="Always allow checkbox for MCP tools" width="120" />

When enabled, Roo Code will automatically approve this specific tool without prompting. Note that the global "Use MCP servers" setting takes precedence - if it's disabled, no MCP tools will be auto-approved.

## Finding and Installing MCP Servers

Roo Code does not come with any pre-installed MCP servers. You'll need to find and install them separately.

* **Community Repositories:** Check for community-maintained lists of MCP servers on GitHub
* **Ask Roo:** You can ask Roo Code to help you find or even create MCP servers (when "[Enable MCP Server Creation](#enabling-or-disabling-mcp-server-creation)" is enabled)
* **Build Your Own:** Create custom MCP servers using the SDK to extend Roo Code with your own tools

For full SDK documentation, visit the [MCP GitHub repository](https://github.com/modelcontextprotocol/).

## Using MCP Tools in Your Workflow

After configuring an MCP server, Roo will automatically detect available tools and resources. To use them:

1. Type your request in the Roo Code chat interface
2. Roo will identify when an MCP tool can help with your task
3. Approve the tool use when prompted (or use auto-approval)

Example: "Analyze the performance of my API" might use an MCP tool that tests API endpoints.

## Troubleshooting MCP Servers

Common issues and solutions:

* **Server Not Responding:** Check if the server process is running and verify network connectivity
* **Permission Errors:** Ensure proper API keys and credentials are configured in your `mcp_settings.json` (for global settings) or `.roo/mcp.json` (for project settings).
* **Tool Not Available:** Confirm the server is properly implementing the tool and it's not disabled in settings
* **Slow Performance:** Try adjusting the network timeout value for the specific MCP server

## Platform-Specific MCP Configuration Examples

### Windows Configuration Example

When setting up MCP servers on Windows, you'll need to use the Windows Command Prompt (`cmd`) to execute commands. Here's an example of configuring a Puppeteer MCP server on Windows:

```json
{
  "mcpServers": {
    "puppeteer": {
      "command": "cmd",
      "args": [
        "/c",
        "npx",
        "-y",
        "@modelcontextprotocol/server-puppeteer"
      ]
    }
  }
}
```

This Windows-specific configuration:
- Uses the `cmd` command to access the Windows Command Prompt
- Uses `/c` to tell cmd to execute the command and then terminate
- Uses `npx` to run the package without installing it permanently
- The `-y` flag automatically answers "yes" to any prompts during installation
- Runs the `@modelcontextprotocol/server-puppeteer` package which provides browser automation capabilities

:::note
For macOS or Linux, you would use a different configuration:
```json
{
  "mcpServers": {
    "puppeteer": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-puppeteer"
      ]
    }
  }
}
```
:::

The same approach can be used for other MCP servers on Windows, adjusting the package name as needed for different server types.
