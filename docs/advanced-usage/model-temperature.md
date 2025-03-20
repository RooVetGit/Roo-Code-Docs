# Adjusting Model Temperature

Temperature controls the randomness of AI model outputs. Adjusting this setting optimizes results for different tasks - from precise code generation to creative brainstorming.

:::info
Temperature is one of the most powerful parameters for controlling AI behavior. A well-tuned temperature setting can dramatically improve the quality and appropriateness of responses for specific tasks.
:::

## What is Temperature?

Temperature is a parameter that controls the randomness of the model's predictions. It's typically a value between 0.0 and 2.0, depending on the model.

*   **Lower Temperature (0.0-0.3):** The model becomes deterministic and focused, selecting the most probable outputs. Ideal for tasks requiring precision and correctness, like code generation.
*   **Higher Temperature (0.7-1.0+):** The model becomes more creative and diverse, exploring less likely outputs. Useful for brainstorming, generating variations, or exploring different design options.

Technically, temperature affects the probability distribution of the model's next-token predictions by dividing the logits (pre-softmax activation values) before they're converted to probabilities, altering how the model samples from its vocabulary.

## Default Values in Roo Code

Roo Code uses a default temperature of 0.0 for most interactions, optimizing for maximum determinism and precision in code generation. There may be slight variances depending on the provider or model type - for instance, DeepSeek models default to 0.6 for slightly more creative outputs. Models with thinking capabilities (where the AI shows its reasoning process) require a fixed temperature of 1.0 which cannot be changed, as this setting ensures optimal performance of the thinking mechanism.

## When to Adjust Temperature

Here are some examples of temperature settings that might work well for different tasks:

*   **Code Mode (0.0-0.3):** For writing precise, correct code with consistent, deterministic results
*   **Architect Mode (0.4-0.7):** For brainstorming architecture or design solutions with balanced creativity and structure
*   **Ask Mode (0.7-1.0):** For explanations or open-ended questions requiring diverse and insightful responses
*   **Debug Mode (0.0-0.3):** For troubleshooting bugs with consistent precision

These are starting points – it's important to [experiment with different settings](#experimentation) to find what works best for your specific needs and preferences.

## How to Adjust Temperature

1.  **Open the Roo Code Panel:** Click the Roo Code icon (<Codicon name="rocket" />) in the VS Code Activity Bar
2.  **Open Settings:** Click the <Codicon name="gear" /> icon in the top right corner
3.  **Find Temperature Control:** Navigate to the Providers section
4.  **Enable Custom Temperature:** Check the "Use custom temperature" box
5.  **Set Your Value:** Adjust the slider to your preferred value

    <img src="/img/model-temperature/model-temperature.png" alt="Temperature setting in Roo Code settings panel" width="550" />
    *Temperature slider in Roo Code settings panel*

## Using API Configuration Profiles for Temperature

Create multiple [API configuration profiles](api-configuration-profiles) with different temperature settings:

**How to set up task-specific temperature profiles:**

1. Create specialized profiles like "Code - Low Temp" (0.1) and "Ask - High Temp" (0.8)
2. Configure each profile with appropriate temperature settings
3. Switch between profiles using the dropdown in settings or chat interface
4. Set different profiles as defaults for each mode for automatic switching when changing modes

This approach optimizes model behavior for specific tasks without manual adjustments.

## Technical Implementation

Roo Code implements temperature handling with these considerations:

*   User-defined settings take priority over defaults
*   Provider-specific behaviors are respected
*   Model-specific limitations are enforced:
    *   Thinking-enabled models require a fixed temperature of 1.0
    *   Some models don't support temperature adjustments

## Experimentation

Experimenting with different temperature settings is the most effective way to discover what works best for your specific needs:

### Effective Temperature Testing

1. **Start with defaults** - Begin with Roo Code's preset values (0.0 for most tasks) as your baseline
2. **Make incremental adjustments** - Change values in small steps (±0.1) to observe subtle differences
3. **Test consistently** - Use the same prompt across different temperature settings for valid comparisons
4. **Document results** - Note which values produce the best outcomes for specific types of tasks
5. **Create profiles** - Save effective settings as [API configuration profiles](api-configuration-profiles) for quick access

Remember that different models may respond differently to the same temperature values, and thinking-enabled models always use a fixed temperature of 1.0 regardless of your settings.

## Related Features

- Works with all [API providers](../providers/openai) supported by Roo Code
- Complements [custom instructions](custom-instructions) for fine-tuning responses
- Works alongside [custom modes](custom-modes) you create