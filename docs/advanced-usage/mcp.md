# Model Context Protocol (MCP)

The Model Context Protocol (MCP) is a standard for extending Roo Code's capabilities by connecting to external tools and services.  MCP servers can provide additional tools and resources that Roo Code can use to accomplish tasks.

## Why Use MCP?

*   **Extend Functionality:** Add new capabilities to Roo Code without modifying the core extension.
*   **Access External Data:** Connect to databases, APIs, or other services.
*   **Custom Integrations:** Create custom tools tailored to your specific workflow.
*   **Community Contributions:** Share and use tools developed by the Roo Code community.

## MCP Server Status

You can view and manage your MCP server connections by clicking the server icon in the top navigation bar.

## Finding and Installing MCP Servers

Roo Code does not come with any pre-installed MCP servers.  You'll need to find and install them separately.

*   **Community Repositories:**  Check for community-maintained lists of MCP servers.  (Link to a hypothetical community repo/list here)
*   **GitHub Search:** Search GitHub for "MCP server" or "Model Context Protocol server."
*   **Ask Roo:**  You can ask Roo Code to help you find or even create MCP servers.

Installation typically involves adding the server's configuration to the `cline_mcp_settings.json` file.  See the [Configuration](#configuration) section for details.

## Using MCP Tools and Resources

Once an MCP server is connected, its tools and resources become available to Roo Code.

*   **Tools:**  MCP tools are invoked using the `use_mcp_tool` tool.  You'll need to provide the server name and the tool name.
*   **Resources:** MCP resources can be accessed using the `access_mcp_resource` tool.  You'll need to provide the server name and the resource URI.

Roo Code will prompt you for any required parameters when using these tools.

## Creating Your Own MCP Server

You can create your own MCP server to add custom functionality to Roo Code.  This requires some programming knowledge.  See the [MCP documentation](https://github.com/modelcontextprotocol) for details on how to create an MCP server.

## Configuration

MCP server configurations are stored in the `cline_mcp_settings.json` file. You can access it from Roo Code's settings by clicking on "Edit MCP Settings", or you can open it from the VS Code command palette with the `Roo Code: Open MCP Config` command.

The file uses a JSON format:

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
    },
    "server2": {
      "command": "node",
      "args": ["/path/to/server.js"],
      "timeout": 90
    }
  }
}