# API Configuration Profiles

API Configuration Profiles allow you to create and switch between different sets of AI settings. Each profile can have different configurations for each mode, letting you optimize your experience based on the task at hand.

## How It Works

Configuration profiles can have their own:
- API providers (OpenAI, Anthropic, etc.)
- API keys
- Model selections
- Temperature settings
- Thinking budgets

This lets you optimize your model configuration for different modes. For instance, you might want Architect and Debug mode to use a more powerful/expensive model to come up with a great plan, while Code mode uses a more standard coding model.

## Setting Up Profiles

1. Open Settings → Providers
2. Choose a Configuration Profile from the dropdown, or create a new one
3. Configure the profile's provider, model, key, and parameters

## Linking Profiles to Modes

In the <Codicon name="notebook" /> Prompts tab, you can associate a Configuration Profile with each Mode.

## Benefits

- **Cost optimization**: Use premium models only where they add the most value
- **Performance tailoring**: Match model capabilities to each mode's specific needs
- **Workflow optimization**: Seamless transitions between modes with appropriate settings

## Related Features

- Works with [custom modes](custom-modes)
- Integrates with [local models](local-models) for offline work
- Supports [temperature settings](model-temperature) per mode