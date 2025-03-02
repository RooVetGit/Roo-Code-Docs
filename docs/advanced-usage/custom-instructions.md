# Customizing Roo Code Behavior

Roo Code allows you to customize its behavior using custom instructions and rules at both global and workspace levels. These customizations are added to the system prompt and influence how Roo Code responds to your requests.

## Types of Customization

Roo Code offers two complementary approaches to customization:

1. **Custom Instructions**: General guidelines that shape how Roo interacts with you
2. **Custom Rules**: Structured technical guidelines for code standards and practices

| Feature | Custom Instructions | Custom Rules |
|---------|---------------------|--------------|
| **Primary Purpose** | General behavioral guidance | Specific technical guidelines |
| **Format** | Free-form text | Structured markdown format |
| **Configuration Method** | UI (Prompts Tab) or rules files | Rules files in project root |
| **Scope** | Global or workspace-specific | Global or mode-specific |
| **Best For** | General preferences, tone, approach | Coding standards, technical requirements |

Both approaches complement each other - you can use custom instructions for general guidance and custom rules for specific technical requirements.

## Custom Instructions Configuration

You can define custom instructions at various levels:

* **Global Custom Instructions:** Apply across all workspaces
* **Workspace-Level Instructions:**
    * **Workspace-Wide:** Apply to all modes in the workspace through `.clinerules` files
    * **Mode-Specific:** Apply to specific modes in the workspace through files like `.clinerules-code`

### Preferred Language

You can specify a preferred language for Roo Code to use. When set, this appears at the start of your custom instructions and directs Roo Code to communicate in your chosen language. You can set this in the **Prompts** tab. For more details on managing this and other settings, see [Managing Preferences and Settings](managing-preferences).

### Setting Global Custom Instructions

These instructions apply across all workspaces. They're useful for setting preferences that you want to maintain regardless of which project you're working on.

**How to set them:**

1. **Open Prompts Tab:** Click the <Codicon name="notebook" /> icon in the Roo Code top menu bar
2. **Find Section:** Find the "Custom Instructions for All Modes" section
3. **Enter Instructions:** Enter your instructions in the text area
4. **Save Changes:** Click "Done" to save your changes

### Setting Workspace-Level Instructions

These instructions only apply within your current workspace, allowing you to customize Roo Code's behavior for specific projects.

#### Workspace-Wide Instructions

Workspace-wide instructions are defined through rule files in your workspace root, primarily using `.clinerules`. Additional support for `.cursorrules` and `.windsurfrules` is available for editor compatibility.

#### Mode-Specific Instructions

Mode-specific instructions can be set in two independent ways that can be used simultaneously:

1. **Using the Prompts Tab:**
   * **Open Tab:** Click the <Codicon name="notebook" /> icon in the Roo Code top menu bar
   * **Select Mode:** Under the Modes heading, click the button for the mode you want to customize
   * **Enter Instructions:** Enter your instructions in the text area under "Mode-specific Custom Instructions (optional)"
   * **Save Changes:** Click "Done" to save your changes

2. **Using Rule Files:** Create a `.clinerules-[mode]` file in your workspace root (e.g., `.clinerules-code`)

When both tab instructions and rule files are set for a mode, both sets of instructions will be included in the system prompt.

## Custom Rules

Custom rules provide more structured guidelines stored in special files in your project's root directory. They tell Roo how to approach various aspects of your codebase, such as:

- Coding style and formatting preferences
- Documentation requirements
- Testing practices
- Error handling approaches
- Project-specific conventions

### Rule File Types

Roo Code supports several rule file formats:

| File Name | Purpose |
|-----------|---------|
| `.clinerules` | Primary rule file for all modes |
| `.clinerules-code` | Rules specific to Code mode |
| `.clinerules-architect` | Rules specific to Architect mode |
| `.clinerules-[mode]` | Rules for any custom mode |
| `.cursorrules` | Alternative format (compatible with Cursor AI) |
| `.windsurfrules` | Alternative format (compatible with Windsurf) |

All rule files should be placed in your project's root directory.

### Rule File Format

Rule files use a simple, markdown-based format that's easy to read and write:

```markdown
# Category Title

1. Rule Group Title:
   - Specific guideline
   - Another guideline
   - Technical requirement

2. Another Rule Group:
   - Guideline one
   - Guideline two
```

This format makes rules easy to read for both humans and AI.

### Global vs. Mode-Specific Rules

Roo Code allows you to create both global rules and mode-specific rules:

- **Global Rules** (`.clinerules`) apply to all modes
- **Mode-Specific Rules** (`.clinerules-[mode]`) only apply when using that specific mode

When both exist, mode-specific rules take priority, but global rules still apply if they don't conflict.

## How Instructions and Rules are Combined

Instructions are placed in the system prompt in this exact format:

```
====
USER'S CUSTOM INSTRUCTIONS
The following additional instructions are provided by the user, and should be followed to the best of your ability without interfering with the TOOL USE guidelines.
[Language Preference (if set)]
[Global Instructions]
[Mode-specific Instructions]

Rules:
[.clinerules-{mode} rules]
[.clinerules rules]
[.cursorrules rules]
[.windsurfrules rules]
```

### About Rule Files

* **File Location:** All rule files must be placed in the workspace root directory
* **Empty Files:** Empty or missing rule files are silently skipped
* **Source Headers:** Each rule file's contents are included with a header indicating its source
* **Rule Interaction:** Mode-specific rules complement global rules rather than replacing them

## Examples and Best Practices

### Example Custom Instructions

* "Always use spaces for indentation, with a width of 4 spaces"
* "Use camelCase for variable names"
* "Write unit tests for all new functions"
* "Explain your reasoning before providing code"
* "Focus on code readability and maintainability"
* "Prioritize using the most common library in the community"
* "When adding new features to websites, ensure they are responsive and accessible"

### Example Rule Categories

#### Code Style Rules

```markdown
# Code Style

1. Formatting:
   - Use 2-space indentation for all files
   - Keep line length under 100 characters
   - Place opening braces on the same line
   - Use trailing commas in multi-line arrays and objects

2. Naming Conventions:
   - Use camelCase for variables and functions
   - Use PascalCase for classes and components
   - Use UPPER_SNAKE_CASE for constants
   - Prefix private methods with underscore
```

#### Testing Rules

```markdown
# Testing Requirements

1. Test Coverage:
   - Write tests for all new functions
   - Maintain at least 80% code coverage
   - Test both success and error paths
   - Use descriptive test names

2. Test Structure:
   - Organize tests by feature or component
   - Use setup and teardown for common operations
   - Mock external dependencies
   - Test edge cases explicitly
```

#### Documentation Rules

```markdown
# Documentation Standards

1. Code Documentation:
   - Document all public functions with JSDoc
   - Explain complex algorithms with comments
   - Include examples for APIs
   - Document parameters and return values

2. Project Documentation:
   - Keep README up-to-date
   - Document setup steps
   - Include troubleshooting guidance
   - Add comments for non-obvious code
```

### Project-Specific Rule Examples

#### Web Development Project

```markdown
# Web Project Rules

1. Accessibility:
   - Use semantic HTML elements
   - Include alt text for images
   - Ensure keyboard navigation works
   - Maintain WCAG AA compliance

2. Performance:
   - Keep bundle size under 500KB
   - Optimize images before adding
   - Implement code splitting
   - Lazy load non-critical resources
```

#### Data Science Project

```markdown
# Data Science Rules

1. Data Management:
   - Document data sources
   - Version control datasets
   - Include data cleaning steps
   - Note missing value handling

2. Models:
   - Document training parameters
   - Include accuracy metrics
   - Validate against test data
   - Explain feature importance
```

## Best Practices for Effective Customization

### Be Specific and Clear

Vague instructions can lead to inconsistent results. Be as specific as possible:

**Good Example:**
"Use TypeScript's strict mode and provide type annotations for all function parameters and return values."

**Less Effective:**
"Make sure to use types properly."

For rules files, write clear, actionable guidelines rather than vague principles:

**Good:**
```markdown
- Validate all user inputs before processing
- Log errors with stack traces and context
- Use parameterized queries for database operations
```

**Not as helpful:**
```markdown
- Make sure code is secure
- Handle errors properly
- Be careful with databases
```

### Organize Logically

Group related rules together under clear categories:

```markdown
# Security

1. Input Validation:
   - Validate all user inputs
   - Sanitize data before use
   - Reject unexpected values

2. Authentication:
   - Require strong passwords
   - Implement account lockouts
   - Log authentication attempts
```

### Prioritize Important Guidelines

Put the most important instructions first, as they'll receive more attention:

```
1. Always handle errors and edge cases explicitly
2. Include JSDoc comments for all public functions
3. Follow the repository's existing code style
```

### Balance Flexibility and Constraint

Too many rigid instructions can limit Roo's ability to help, while too few may lead to inconsistent results:

**Balanced Approach:**
"Follow the existing code style in the project, but feel free to suggest improvements where patterns are unclear or could be more efficient."

### Keep Rules Updated

Review and update your rules as your project evolves:

- Remove outdated guidelines
- Add rules for new technologies
- Refine based on project learnings

## Advanced Usage

### Combining Rules with Custom Modes

For an even more tailored experience, you can:

1. Create a [custom mode](custom-modes) with specific capabilities
2. Create matching `.clinerules-[mode]` file
3. Get specialized assistance that follows your guidelines

For example, you might create a "security-auditor" mode with a `.clinerules-security-auditor` file containing security-focused rules.

### Testing Your Customizations

To verify your customizations are working:

1. Create your rule file in the project root
2. Switch to the appropriate mode if using mode-specific rules
3. Ask Roo to perform a task related to your rules
4. Check if the response follows your guidelines

For example, after adding code style rules, ask Roo to write a new function and see if it follows your specified style.

## When to Use Each Approach

Here's guidance on when to use each customization approach:

**Use Custom Instructions when:**
- Setting general preferences that apply across projects
- Specifying how Roo should communicate with you
- Providing high-level guidance on approach and methodology
- Setting simple preferences without complex formatting

**Use Custom Rules when:**
- Defining specific coding standards
- Setting project-specific technical requirements
- Creating structured, categorical guidelines
- Sharing standards across a team
- Creating mode-specific behavior

For best results, combine both approaches - use custom instructions for general guidance and custom rules for specific technical requirements.

By effectively customizing Roo Code's behavior, you can transform it into a team member who understands and follows your project's unique needs and standards.