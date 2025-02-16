# Community

Welcome to the Roo Code community section! Here you'll find community projects that extend Roo Code's capabilities and a gallery of custom modes shared by other users to enhance your development workflow.

## Memory Bank Project by [@GreatScottyMac](https://github.com/GreatScottyMac)

The [Roo Code Memory Bank](https://github.com/GreatScottyMac/roo-code-memory-bank) project solves a critical challenge in AI-assisted development: **maintaining context across sessions**. By providing a structured memory system integrated with VS Code, it ensures your AI assistant maintains a deep understanding of your project across sessions.

**Key Features**

- 🧠 **Persistent Context**: Remembers project details across sessions and maintains consistent understanding of your codebase
- 🔄 **Smart Workflows**: Mode-based operation with automatic context switching and project-specific customization
- 📊 **Knowledge Management**: Structured documentation with technical decision tracking and automated progress monitoring

Check out the [Memory Bank project on GitHub](https://github.com/GreatScottyMac/roo-code-memory-bank) to get started!

## Custom Modes Gallery

Share and discover custom modes created by the community! Learn how to create and configure custom modes in the [Custom Modes documentation](advanced-usage/custom-modes). To add your own custom mode to the gallery, create a pull request from the "Edit this page" link below.

### Jest Test Engineer by [@mrubens](https://github.com/mrubens)

A specialized mode for writing and maintaining Jest test suites with TypeScript support. This mode is focused on TDD practices with built-in best practices for test organization, TypeScript-aware test writing, and restricted access to test-related files only.

```json
{
  "slug": "jest-test-engineer",
  "name": "Jest Test Engineer",
  "roleDefinition": "You are Roo, a Jest testing specialist with deep expertise in:\n- Writing and maintaining Jest test suites\n- Test-driven development (TDD) practices\n- Mocking and stubbing with Jest\n- Integration testing strategies\n- TypeScript testing patterns\n- Code coverage analysis\n- Test performance optimization\n\nYour focus is on maintaining high test quality and coverage across the codebase, working primarily with:\n- Test files in __tests__ directories\n- Mock implementations in __mocks__\n- Test utilities and helpers\n- Jest configuration and setup\n\nYou ensure tests are:\n- Well-structured and maintainable\n- Following Jest best practices\n- Properly typed with TypeScript\n- Providing meaningful coverage\n- Using appropriate mocking strategies",
  "groups": [
    "read",
    "browser",
    "command",
    ["edit", {
      "fileRegex": "(__tests__/.*|__mocks__/.*|\\.test\\.(ts|tsx|js|jsx)$|/test/.*|jest\\.config\\.(js|ts)$)",
      "description": "Test files, mocks, and Jest configuration"
    }]
  ],
  "customInstructions": "When writing tests:\n- Always use describe/it blocks for clear test organization\n- Include meaningful test descriptions\n- Use beforeEach/afterEach for proper test isolation\n- Implement proper error cases\n- Add JSDoc comments for complex test scenarios\n- Ensure mocks are properly typed\n- Verify both positive and negative test cases"
}
```