
# Roo Code Writing Style Standards 

This guide outlines the writing style standards for the Roo Code documentation team, based on the successful practices observed in high-quality technical documentation.

## 1. Word Choice (Diction)

Write technical content that is clear yet approachable:
- Use precise technical terms when necessary, but define them on first use
- Keep language professional but conversational 
- Choose simple words over complex ones when they convey the same meaning
- Maintain consistency with technical terminology across all documentation

Example:
```
Good: "The API requires authentication using your private key."
Avoid: "The API necessitates the utilization of authentication credentials via your private key."
```

## 2. Sentence Structure (Syntax)

Structure your writing for clarity and readability:
- Write short to medium-length sentences (15-25 words on average)
- Vary sentence structure to maintain reader engagement
- Use bullet points for lists of items or steps
- Start each sentence with the key information

Example:
```
Good: "Install the package using npm. Then configure your settings in the config file."
Avoid: "After you have ensured that you have the latest version of npm installed on your system, you can proceed to install the package, and once that has completed successfully, you should then move on to configuring your settings in the configuration file."
```

## 3. Tone

Maintain a consistent, professional yet helpful tone:
- Be direct and confident in technical explanations
- Show empathy when discussing potential issues or errors
- Stay positive and solution-focused
- Keep the tone consistent across all documentation types

Example:
```
Good: "If you encounter this error, here's how to resolve it..."
Avoid: "You probably messed up if you're seeing this error..."
```

## 4. Voice

Use a consistent voice throughout documentation:
- Use second person ("you") for instructions and guidance
- Use first person plural ("we") when explaining design decisions
- Use active voice for clarity
- Write in present tense

Example:
```
Good: "You can configure the settings in config.json"
Avoid: "The settings could be configured in config.json by the user"
```

## 5. Technical Presentation

Present technical information clearly:
- Use code blocks for all code examples
- Format command line instructions consistently
- Include comments in code examples when helpful
- Show both example usage and expected output

Example:
```python
# Good
def connect_to_api(api_key):
    """Connect to the API using your key."""
    return Client(api_key)

# Avoid
def connect_to_api(api_key):
    return Client(api_key)  # connects to API
```

## 6. Document Structure

Organize content logically and consistently:
- Use clear hierarchical headings (H1 > H2 > H3)
- Place most important information first
- Include a table of contents for longer documents
- Use consistent section ordering across similar documents

Example structure:
```
1. Overview
2. Prerequisites
3. Installation
4. Basic Usage
5. Advanced Features
6. Troubleshooting
```

## 7. Content Focus

Keep documentation focused and relevant:
- Address one main topic per document
- Provide clear examples for complex concepts
- Link to related documentation rather than duplicate content
- Include relevant context and background information

## 8. Formatting Consistency

Maintain consistent formatting:
- Use standardized markdown formatting
- Apply consistent spacing between sections
- Format code blocks, commands, and file paths consistently
- Use standard capitalization for product names and technical terms

## 9. User Focus

Write with your audience in mind:
- Consider the user's technical level
- Provide clear steps for implementation
- Include troubleshooting guidance
- Link to additional resources when appropriate

Example:
```
Good: "To deploy your application, follow these steps..."
Avoid: "Deployment is possible through various methods..."
```

## Best Practices Checklist

Before submitting documentation:
- [ ] Verify technical accuracy
- [ ] Check for consistent terminology
- [ ] Ensure all code examples are tested
- [ ] Validate all links
- [ ] Review for clarity and conciseness
- [ ] Check formatting consistency
- [ ] Include necessary context
- [ ] Add appropriate cross-references

Follow these guidelines to create documentation that is clear, consistent, and valuable to our users. Remember that good documentation is crucial for user success with our products.