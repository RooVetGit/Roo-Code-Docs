# Experimental Features

Roo Code includes experimental features that are still under development.  These features may be unstable, change significantly, or be removed in future versions.  Use them with caution and be aware that they may not work as expected.

**Warning:** Experimental features may have unexpected behavior, including potential data loss or security vulnerabilities.  Enable them at your own risk.

## Enabling Experimental Features

To enable or disable experimental features:

1.  Open the Roo Code settings (<Codicon name="gear" /> icon in the top right corner).
2.  Go to the "Advanced Settings" section.
3.  Find the "Experimental Features" section.
4.  Check or uncheck the boxes for the features you want to enable or disable.
5.  Click "Done" to save your changes.

## Current Experimental Features

The following experimental features are currently available:

### Unified Diff Editing Strategy

This is an alternate diff editing strategy to the standard search-and-replace algorithm. It evaluates multiple different approaches to applying a unified diff to a file, and selects the best approach for the given file.

**Note:** You must have "Enable editing through diffs" checked to use this feature.

**When to use it:** Enable this feature when:
- You're working with large or complex files
- You're experiencing difficulties with the standard diff strategy
- You need to make precise changes with better context awareness
- You're refactoring code that has complex indentation patterns

**Real-world example:** When refactoring a deeply nested React component with multiple levels of indentation, the unified diff strategy can better preserve the correct indentation structure.

### Checkpoints (Version Control)

This will automatically save a checkpoint to git whenever you make changes to files.

This lets you easily restore a previous state of the files if anything goes wrong. For more details, see [Checkpoints](checkpoints).

**When to use it:** Enable this feature when:
- You're making extensive changes to your codebase
- You want to experiment with different approaches
- You need a safety net for risky refactoring
- You want to track progression of changes

**Real-world example:** When refactoring a critical authentication module, checkpoints create automatic save points that you can return to if something breaks unexpectedly.

### Search and Replace

Adds a new tool for searching and replacing text in a file.

**When to use it:** Enable this feature when:
- You need to make consistent changes across files
- You're renaming variables or functions
- You need to update formatting patterns
- You're updating API calls or imports

**Real-world example:** When migrating from one library to another, you can use search and replace to systematically update import statements and function calls throughout your codebase.

### Insert Content

Adds a new tool for inserting content at any position in a file.

**When to use it:** Enable this feature when:
- You need to add new functions or methods
- You're adding import statements
- You want to insert documentation blocks
- You're adding configuration options

**Real-world example:** When extending an API class with new methods, the insert content tool lets you add new methods exactly where you want them without disturbing existing code.

### Power Steering

When enabled, Roo will remind the model about the details of its current mode definition more frequently. This will lead to stronger adherence to role definitions and custom instructions, but will use more tokens per message. For more on how this affects token usage, see [Managing the Context Window](managing-context-window).

**When to use it:** Enable this feature when:
- You need strict adherence to coding standards
- You're working in regulated environments
- You want consistent formatting and style
- You need to follow complex project rules

**Real-world example:** In a team environment with strict coding standards, power steering helps ensure that all generated code consistently follows team conventions defined in your custom rules.

## Feature Combinations

Certain experimental features work particularly well together:

**Code Refactoring Workflow:**
- Enable Unified Diff Strategy for precise code changes
- Enable Checkpoints to automatically save progress
- Enable Power Steering to ensure adherence to code standards

**API Development Workflow:**
- Enable Insert Content to add new endpoints
- Enable Search and Replace to update existing endpoints
- Enable Checkpoints to track API evolution

## Troubleshooting Experimental Features

If you encounter issues with experimental features:

1. **For general problems:**
   - Disable the problematic feature
   - Restart VS Code
   - Try re-enabling the feature

2. **For unified diff issues:**
   - Ensure "Enable editing through diffs" is checked
   - Try with smaller, more focused changes

3. **For checkpoint issues:**
   - Check that Git is properly configured in your workspace
   - Ensure you have write permissions to the repository

## Providing Feedback

If you encounter any issues with experimental features, or if you have suggestions for improvements, please report them on the [Roo Code GitHub Issues page](https://github.com/RooVetGit/Roo-Code/issues).

Your feedback is valuable and helps us improve Roo Code!