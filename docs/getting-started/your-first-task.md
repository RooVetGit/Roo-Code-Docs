---
sidebar_label: Your First Task
---

# Starting Your First Task with Roo Code

Now that you've [configured your AI provider and model](./connecting-api-provider), you're ready to start using Roo Code! This guide will walk you through your first interaction.

## Step 1: Open the Roo Code Panel

If the Roo Code panel isn't already visible, click the Roo Code icon (<Codicon name="rocket" />) in the VS Code Activity Bar (the vertical bar on the side of the window). This will open the Roo Code chat interface.  If you don't see the icon, make sure the extension is installed and enabled.

## Step 2: Type Your Task

In the Roo Code chat box (at the bottom of the panel), type a description of what you want Roo Code to do.  Be clear and concise.  Here are some examples of good initial tasks:

*   "Create a file named `hello.txt` containing 'Hello, world!'."
*   "Write a Python function that adds two numbers."
*    "Create an html file for a simple website with the title 'Roo test'"

You don't need to use any special commands or syntax at this point.  Just write your request in plain English.

## Step 3: Send Your Task

Press Enter, or click the Send icon (<Codicon name="send" />) to the right of the input box.

## Step 4: Review and Approve Actions

Roo Code will analyze your request and propose a series of actions.  These actions might include:

*   **Reading files:** Roo Code will show you the contents of files it wants to read.
*   **Writing to files:** Roo Code will show you a diff (a visual representation of the changes) of any proposed file modifications.  You'll see added lines in green and removed lines in red.
*   **Executing commands:** Roo Code will show you the exact command it wants to run in your terminal.
*   **Using the Browser:** Roo Code will show you the action it's going to perform (click, type, etc)
* **Asking a question:** If Roo Code is not sure on how to proceed, it will ask you follow-up questions.

**You will have the opportunity to approve or reject each action.**  Roo Code will not perform any action without your explicit permission (unless you've enabled auto-approval in the settings).

*   **Approve:** If you're happy with the proposed action, click the "Approve" button (or similar).
*   **Reject:** If you don't want Roo Code to perform the action, click the "Reject" button. You can provide feedback to help Roo Code understand why you rejected the action.

## Step 5: Iterate

Roo Code works iteratively.  After each action, it will wait for your feedback and then propose the next step.  Continue reviewing and approving (or rejecting) actions until the task is complete.