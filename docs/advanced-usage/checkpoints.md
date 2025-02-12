# Checkpoints

Checkpoints allow you to save the state of your project at a specific point in time during a task. This enables you to easily revert to a previous state if needed, providing a safety net for complex or potentially risky operations.

**Important:** Checkpoints are an experimental feature.  Enable them in the Roo Code settings.

## How Checkpoints Work

When checkpoints are enabled, Roo Code automatically creates a new checkpoint whenever:

*   A task is started.
*   A file is created, modified, or deleted.
*   A command is executed.

## Viewing Checkpoints

You can view the list of checkpoints for a task in the chat history.

## Restoring a Checkpoint

To restore a checkpoint:

1.  **Open the chat view.**
2.  **Find the checkpoint** you want to restore in the chat history.
3.  **Click on the restore button**

This will revert all files in your project to their state at that checkpoint.

**Note:**  Restoring a checkpoint will overwrite any changes you've made since that checkpoint.  It's recommended to commit your work before restoring a checkpoint.

## Limitations

*   Checkpoints are only created during active Roo Code tasks. Changes made outside of a task will not be captured.
*   Currently, there is no built-in mechanism for deleting old checkpoints.  This may be added in a future version.

## Enabling/Disabling Checkpoints

You can enable or disable checkpoints in the Roo Code settings.  Look for the "Checkpoints Enabled" checkbox.