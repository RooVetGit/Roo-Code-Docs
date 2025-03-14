---
title: Remote Browser Connection
description: Connect to an existing Chrome browser for containerized development, custom profiles, and remote workflows
---

# Remote Browser Connection

Connect Roo to an existing Chrome browser instead of launching a new one. This feature bypasses Roo's default browser process creation, allowing Roo to work in containerized environments, with custom browser profiles, and across remote development workflows.

> **Key Benefit:** Separates the browser process from the VS Code environment, solving common challenges in containerized development and remote workflows.

## Use Cases

- **DevContainers:** Connect from containerized VS Code to host Chrome browser
- **Remote Development:** Use local Chrome with remote VS Code server
- **Custom Chrome Profiles:** Use profiles with specific extensions and settings
- **Shared Sessions:** Connect multiple Roo instances to one browser

## Setup

Connect to a remote browser in three steps:

### 1. Launch Chrome with Remote Debugging

Start Chrome with debugging enabled:

**macOS**:
```bash
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222 --user-data-dir=/tmp/chrome-debug
```

**Windows**:
```bash
"C:\Program Files\Google\Chrome\Application\chrome.exe" --remote-debugging-port=9222 --user-data-dir=C:\chrome-debug
```

**Linux**:
```bash
google-chrome --remote-debugging-port=9222 --user-data-dir=/tmp/chrome-debug
```

> **Note:** The `--user-data-dir` parameter creates an isolated Chrome profile that doesn't affect your regular browsing.

### 2. Configure Roo Settings

To access these settings:

1. Click ⚙️ in the top-right corner
2. Navigate to `Browser / Computer Use` settings
3. Check "Enable browser tool"
4. Check "Use remote browser connection"
5. Enter custom Chrome DevTools Protocol URL (optional)
6. Click "Test Connection" to verify

<img src={require('@site/static/img/remote-browser-connection/remote-browser-connection.png').default} alt="Remote Browser Connection Settings" width="700" />

### 3. Configure DevContainer Network (If Applicable)

For container-based development, configure network access to reach the host machine:

For VS Code devcontainers, add this network configuration to your `devcontainer.json`:

```json
{
  "runArgs": [
    "--network=host"  // Enables access to host's Chrome instance
  ]
}
```

## Connection Process

Roo connects to Chrome in this sequence:

1. Tries your custom URL (if provided)
2. Runs auto-discovery on localhost, containers, and network
3. Falls back to launching a local browser if all attempts fail

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Connection Failed | Verify Chrome is running with `--remote-debugging-port=9222` |
| Port Already in Use | Change to alternative port in both Chrome and Roo settings |
| Network Issues | Check container/VM can access host machine |
| Chrome Not Detected | Verify firewalls allow WebSocket connections |
| Permission Errors | Ensure access to the specified `--user-data-dir` location |

## Advanced Capabilities

### Auto-Discovery

When no URL is specified, Roo searches for Chrome instances across:
- Standard debugging ports (9222, 9223) on localhost
- Docker containers with debugging-enabled Chrome
- Network-accessible instances via discovery protocols

### Automatic Fallback

When remote connections fail, Roo launches a local browser instance automatically to maintain workflow continuity.

### Alternative Setup via Chrome DevTools

For GUI-based configuration:

1. Open `chrome://inspect` in Chrome
2. Click "Configure" beside "Discover network targets"
3. Add `localhost:9222` and click "Done"
