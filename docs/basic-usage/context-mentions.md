# Context Mentions

Context mentions are a powerful way to provide Roo Code with specific information about your project, allowing it to perform tasks more accurately and efficiently.  You can use mentions to refer to files, folders, problems, and Git commits.  Context mentions start with the `@` symbol.

## Types of Mentions

### File Mentions (`@/path/to/file.ts`)

Use file mentions to include the contents of a specific file in your request.

*   **Example:** "Explain the function `calculateTotal` in the file @/src/utils.ts."
*   **How it works:** Roo Code will read the contents of the specified file and include it in the context sent to the AI model.
* **Best Practices**: Always include the `/` to tell Roo you're specifying a file path.
* **Note:** You can use the `@` character in any chat field, so you may use it while also providing feedback.

### Folder Mentions (`@/path/to/folder/`)

Use folder mentions to refer to a directory.  Roo Code will be able to use the *names* of the files and subdirectories within that folder.

*   **Example:** "What files are in the @/src/components/ folder?"
* **Note**: To find files inside of that folder, you will need to ask Roo to use one of its tools, `list files`.

### Problems Mention (`@problems`)

Use the `@problems` mention to include a list of all current errors and warnings from the VS Code Problems panel in your request.

*   **Example:** "@problems Fix all errors in the current file."
* **Note:** This is especially useful when you see errors in the Problems panel and want Roo Code to address them.

### Git Commit Mentions (`@a1b2c3d`)

Use a Git commit hash (short or long) to include information about a specific commit.

*   **Example:** "What changes were made in commit @a1b2c3d?"
* **Note:** Roo Code will include the commit message, author, date, and a diff of the changes.

If you want to refer to the working changes in the git repository, you can use the `@git-changes` mention.

*   **Example:** "Can you propose a commit message for @git-changes?"

### URL Mentions (`@https://example.com`)

Use a URL to have Roo Code fetch and include the content of a website.

*   **Example:** "Summarize the content of @https://docusaurus.io/."
*   **Note:** Roo Code will convert the website content to Markdown.

## Using Mentions

*   **Type `@`:** Start typing `@` in the chat input field.  A dropdown menu will appear with suggestions.
*   **Select a Mention:** Use the arrow keys or your mouse to select the desired mention from the dropdown, and press Enter or click to insert it.
*   **Type to Search:** As you type after the `@` symbol, the suggestions will be filtered.
* **Multiple Mentions:** You can include multiple mentions in a single message.
*   **Combine with Text:** You can combine mentions with regular text to create your request.  For example: "Check the function in @/src/utils.ts and fix any @problems".

## Tips

*   **Be Specific:** The more specific your mentions are, the better Roo Code will understand your request.
*   **Use Relative Paths:** When referring to files within your workspace, use paths relative to the workspace root.
*   **Check for Typos:** Make sure the file paths and commit hashes are correct.

Context mentions are a powerful tool for providing Roo Code with the information it needs to complete your tasks effectively.  Experiment with different types of mentions to see how they can improve your workflow.