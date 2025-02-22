# Adjusting Model Temperature

Roo Code allows you to control the "temperature" setting for your AI models. Temperature is a crucial parameter that influences the randomness and creativity of the model's output.  Understanding and adjusting temperature is particularly useful for getting the best results from different modes, like **Architect** and **Ask**, where more creative or varied responses might be desired.

## What is Temperature?

Temperature is a parameter that controls the randomness of the model's predictions. It's a value, typically between 0.0 and 1.0 (though some providers might accept different value ranges).

*   **Lower Temperature (closer to 0.0):** The model becomes more deterministic and focused. It will select the most probable, predictable outputs. This is good for tasks requiring precision and correctness, like code generation.
*   **Higher Temperature (closer to 1.0):** The model becomes more creative and unpredictable. It will explore less likely, more diverse outputs. This is useful for brainstorming, generating different variations of text, or exploring different design options.

## Why Adjust Temperature?

Different tasks benefit from different temperature settings.  For example:

*   **Code Mode (Low Temperature):** When writing code, you generally want precise and correct results.  A lower temperature (e.g., 0.0 - 0.3) is usually best.
*   **Architect Mode (Medium Temperature):** When brainstorming architectural designs, you might want more creative suggestions.  A medium temperature (e.g., 0.4 - 0.7) can be helpful.
*   **Ask Mode (Medium to High Temperature):** When asking open-ended questions or seeking explanations, a higher temperature (e.g., 0.7 - 1.0) can lead to more diverse and insightful responses.  You might even go higher for creative writing tasks.
*   **Debug Mode (Low Temperature):** When tracking down bugs, you want precise and correct results.  A lower temperature (e.g., 0.0 - 0.3) is usually best.

## How to Adjust Temperature in Roo Code

You can adjust the temperature in the Roo Code settings:

1.  **Open the Roo Code Panel:** Click the Roo Code icon (<Codicon name="rocket" />) in the VS Code Activity Bar.
2.  **Open Settings:** Click the <Codicon name="gear" /> icon in the top right corner of the Roo Code panel.
3.  **Find the Temperature Setting:** In the settings panel, you'll find a "Use custom temperature" setting within the API configuration section.
4.  **Enter the Temperature Value:** Check the box and enter the temperature value you want to use. The range is typically from 0.0 to 1.0, but this may depend on the specific model and provider.

## Per-API Configuration Profiles

Roo Code allows you to create multiple API configuration profiles.  This is *very* useful for managing temperature settings. You can:

*   **Create a "Code - Low Temp" profile:** Configure this profile with your preferred API provider, a code-focused model (like Claude 3.5 Sonnet), and a low temperature (e.g., 0.1).
*   **Create an "Ask - High Temp" profile:** Configure this profile with the same provider (or a different one), perhaps a model better suited for general knowledge, and a higher temperature (e.g., 0.8).
*   **Switch Profiles:**  Use the "Configuration Profile" dropdown in the Roo Code settings to quickly switch between your saved configurations.  You can also set a default configuration for each mode (Code, Architect, Ask, Debug), so Roo Code automatically uses the appropriate settings when you switch modes.

This lets you tailor the AI's behavior to the specific task at hand without constantly adjusting settings.

## Experimentation

The best way to understand the effect of temperature is to experiment. Try different values and see how they impact the model's output, or do some research online. You may find that different temperatures work best for different tasks or even for different parts of the same task.