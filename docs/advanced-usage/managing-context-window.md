# Managing the Context Window

The context window is a critical resource in Roo Code that affects how well the AI understands your project and responds to your requests. This guide explains what the context window is, how it works, and how to optimize it for better results.

## What Is the Context Window?

The context window is the AI's "working memory" - the amount of information it can consider at once when responding to you. This includes:

1. **Your conversation history**: Previous messages between you and Roo
2. **File contents**: Code and other files you've referenced
3. **System information**: Details about your environment
4. **Tool descriptions**: Instructions for the tools Roo can use

Every AI model has a limited context window size (measured in tokens - roughly 3/4 of a word). When this limit is reached, Roo must remove older information to make room for new content.

## Why Context Management Matters

Effective context management helps you:

- Get more accurate and relevant responses
- Work with larger codebases
- Have longer, more productive conversations
- Avoid repetition or confusion in responses

## Settings That Affect Context Usage

Several Roo Code settings directly impact how much of your context window is used:

### Max Open Tabs Context

**Setting**: `maxOpenTabsContext`

This controls how many of your open editor tabs Roo includes in its context:
- **Higher values** (15-30): Roo sees more of your open files
- **Lower values** (1-5): Roo focuses on fewer files, saving context space
- **Zero**: Roo doesn't automatically include open files

**When to adjust**: Increase when working across many related files, decrease for focused tasks or when conversations get long.

### Terminal Output Line Limit

**Setting**: `terminalOutputLineLimit`

This limits how much terminal output Roo can see when you use `@terminal`:
- **Higher values** (100+): Roo sees more output lines
- **Lower values** (20-50): Roo sees less output, saving context space

**When to adjust**: Increase when debugging complex build or error output, decrease for general work.

### Power Steering (Experimental)

**Setting**: `powerSteering`

When enabled, Roo will remind itself about its current mode and instructions more frequently. See [Experimental Features](experimental-features) for more information.
- **Enabled**: Stronger adherence to instructions but uses more context space
- **Disabled**: More context available for content but potentially less consistent adherence

**When to adjust**: Enable when strict adherence to guidelines is critical, disable when you need maximum context for complex tasks.

### MCP Enabled

**Setting**: `mcpEnabled`

When enabled, Roo includes [MCP](mcp) server information in the context.
- **Enabled**: Access to MCP tools but uses some context space
- **Disabled**: Saves context space but no MCP capabilities

**When to adjust**: Disable when not using MCP features to save context space.

## Strategies for Managing Context

### 1. Strategic Use of Mentions

Be specific with @mentions:
- Mention specific files rather than directories
- Reference only the files needed for your current task
- Use line number ranges for large files: `@/path/to/file.js:10-50`

**Example**:
Instead of: "Look at all the files in @/src/"
Use: "Look at the key files @/src/main.js and @/src/api/client.js"

### 2. Start New Conversations

Start fresh conversations for different tasks or topics:
- Complete one task before moving to another
- Use "New task" when shifting to a different area
- Consider using different modes for different tasks

**Example**:
After completing a feature implementation, start a new conversation for code review or documentation.

### 3. Focus Your Questions

Make your questions and requests specific:
- Ask about one thing at a time
- Break complex tasks into smaller steps
- Avoid tangents that consume context without adding value

**Example**:
Instead of: "Can you explain this codebase and also fix all the bugs?"
Use: "First, can you explain the architecture of this module?"

### 4. Monitor Context Usage

Pay attention to how full your context window is:
- Look for the context usage indicator in the UI
- Watch for responses that seem to "forget" earlier parts of the conversation
- Start a new conversation if you notice degrading quality

### 5. Optimize for Different Workflows

Adjust settings based on your current task:

#### For Codebase Exploration
```
Recommended settings:
- maxOpenTabsContext: 15-20
- terminalOutputLineLimit: 20
- Power Steering: Disabled
```

#### For Debugging Problems
```
Recommended settings:
- maxOpenTabsContext: 3-5
- terminalOutputLineLimit: 100
- Power Steering: Disabled
```

#### For Strict Guidelines Adherence
```
Recommended settings:
- maxOpenTabsContext: 5-10
- terminalOutputLineLimit: 30
- Power Steering: Enabled
```

## Signs of Context Limitations

Watch for these signs that you might be hitting context limits:

- Roo "forgets" details from earlier in the conversation
- Responses become less specific or accurate
- Roo asks questions about information you've already provided
- Responses are cut off or incomplete

## Advanced Context Management

### Mode-Specific Optimization

Different modes include different tools in the context:
- **Ask mode**: Includes minimal tools, more space for conversation
- **Code mode**: Includes all coding tools, less space for conversation
- **Custom modes**: Can be designed to include only necessary tools

### Context-Efficient Coding

When working with code:
- Break large files into smaller, modular files
- Create focused components with clear purposes
- Use clear file and function names to reduce needed explanation
- Maintain consistent patterns to minimize required context

### Workspace Organization

Organize your workspace to help Roo:
- Keep related files open together
- Close unrelated files
- Use meaningful file names
- Structure projects logically

## Conclusion

Understanding and managing the context window is key to getting the most out of Roo Code. By being mindful of context limitations and adjusting your approach and settings accordingly, you can have more productive, accurate, and efficient interactions with Roo.

Remember that context management involves trade-offs - more space for code means less for conversation history, and vice versa. The best approach depends on your specific task and preferences.