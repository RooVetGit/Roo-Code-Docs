# OpenAI

Roo Code supports accessing models directly through the official OpenAI API.

**Website:** [https://openai.com/](https://openai.com/)

## Getting an API Key

1.  **Sign Up/Sign In:** Go to the [OpenAI Platform](https://platform.openai.com/). Create an account or sign in.
2.  **Navigate to API Keys:** Go to the [API keys](https://platform.openai.com/api-keys) page.
3.  **Create a Key:** Click "Create new secret key". Give your key a descriptive name (e.g., "Roo Code").
4.  **Copy the Key:** **Important:** Copy the API key *immediately*. You will not be able to see it again. Store it securely.

## Supported Models

Roo Code supports a variety of OpenAI models, including:

*	`o3-mini`
*   `o1`
*   `o1-preview`
*	`o1-mini`
*   `gpt-4o`

Roo Code will also try to dynamically populate a dropdown list of supported models, for your convenience.
Refer to the [OpenAI Models documentation](https://platform.openai.com/docs/models) for the most up-to-date list of models and capabilities.

## Configuration in Roo Code

1.  **Open Roo Code Settings:** Click the gear icon (⚙️) in the Roo Code panel.
2.  **Select Provider:** Choose "OpenAI-Native" from the "API Provider" dropdown.
3.  **Enter API Key:** Paste your OpenAI API key into the "API Key" field.
4.  **Select Model:** Choose your desired model from the "Model ID" dropdown.
5. **(Optional) Custom Base URL:** If you're not using the official OpenAI endpoint (you almost certainly are) enter a custom Base URL here.

## Tips and Notes

*   **Pricing:** Refer to the [OpenAI Pricing](https://openai.com/pricing) page for details on model costs.
*   **Rate Limits:** Be aware of OpenAI's rate limits.  Roo Code has settings to help you manage rate limits.
* **Azure OpenAI Service:** If you'd like to use the Azure OpenAI service, please see our section on [OpenAI-compatible](./openai-compatible.md) providers.