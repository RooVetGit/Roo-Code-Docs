# Experimental Features

Roo Code includes experimental features that are still under development.  These features may be unstable, change significantly, or be removed in future versions.  Use them with caution and be aware that they may not work as expected.

**Warning:** Experimental features may have unexpected behavior, including potential data loss or security vulnerabilities.  Enable them at your own risk.

## Enabling Experimental Features

To enable or disable experimental features:

1.  Open the Roo Code settings (gear icon ⚙️ in the top right corner).
2.  Go to the "Advanced Settings" section.
3.  Find the "Experimental Features" section.
4.  Check or uncheck the boxes for the features you want to enable or disable.
5.  Click "Done" to save your changes.

## Current Experimental Features

The following experimental features are currently available:

### Unified Diff Editing Strategy

This is an alternate diff editing strategy to the standard search-and-replace algorithm. It evaluates multiple different approaches to applying a unified diff to a file, and selects the best approach for the given file.

**Note:** You must have "Enable editing through diffs" checked to use this feature.

### Checkpoints (Version Control)

This will automatically save a checkpoint to git whenever you make changes to files.

This lets you easily restore a previous state of the files if anything goes wrong.

### Search and Replace

Adds a new tool for searching and replacing text in a file.

### Insert Content

Adds a new tool for inserting content at any position in a file.

## Providing Feedback

If you encounter any issues with experimental features, or if you have suggestions for improvements, please report them on the [Roo Code GitHub Issues page](https://github.com/RooVetGit/Roo-Code/issues).

Your feedback is valuable and helps us improve Roo Code!