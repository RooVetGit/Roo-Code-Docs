# Typing Your Requests

Roo Code is designed to understand natural language.  You don't need to use any special commands or syntax to communicate with it.  Just type your request in plain English, as if you were talking to a human developer.

## Best Practices

*   **Be Clear and Specific:**  Clearly state what you want Roo Code to do.  Avoid vague or ambiguous language.  For example, instead of saying "Fix the code," say "Fix the bug in the `calculateTotal` function that causes it to return incorrect results."
*   **Provide Context:**  If your request refers to specific files, functions, or parts of your code, use [Context Mentions](./context-mentions) to provide that context.
*   **Break Down Complex Tasks:**  For large or complex tasks, break them down into smaller, more manageable steps.  Roo Code works best when given focused instructions.
*   **Use Examples:** If you want Roo Code to generate code in a specific style, provide examples.

## Examples

Here are some examples of well-formed requests:

*   "Create a new file named `utils.py` and add a function called `add` that takes two numbers as arguments and returns their sum."
*   "In the file `src/components/Button.tsx`, change the color of the button to blue."
*   "Find all instances of the variable `oldValue` in the file `/src/App.js` and replace them with `newValue`."
*   "Run the command `npm install` in the terminal."
*   "Explain the function `calculateTotal` in the file `/src/utils.ts`."
* "@problems Address all detected problems."

## What *Not* to Do

*   **Don't be vague:** Avoid requests like "Fix the code" or "Make it better."
*   **Don't assume Roo Code knows what you're thinking:** Provide all necessary context.
*   **Don't use jargon unnecessarily:** Use plain English whenever possible.
*   **Don't give multiple unrelated instructions in a single request:** Break down complex tasks into smaller steps.
*   **Don't assume a request was successful:** Always wait for confirmation from Roo Code after each tool use.