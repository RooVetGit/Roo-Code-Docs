# Unbound

Roo Code supports accessing models through [Unbound](https://getunbound.ai/), a platform that focuses on providing secure and reliable access to a variety of large language models (LLMs). Unbound acts as a gateway, allowing you to use models from providers like Anthropic and OpenAI without needing to manage multiple API keys and configurations directly.  They emphasize security and compliance features for enterprise use.

**Website:** [https://getunbound.ai/](https://getunbound.ai/)

## Getting an API Key

1.  **Sign Up/Sign In:** Go to the [Unbound website](https://getunbound.ai/).  Create an account or sign in.
2.  **Navigate to Tokens:** In the Unbound dashboard, find the "Tokens" section (or similar - the exact wording might change). This is where you manage your API keys. The direct link is [https://api.getunbound.ai/tokens](https://api.getunbound.ai/tokens).
3.  **Generate a Key:** Create a new API key.  You may be prompted to give it a name (e.g., "Roo Code").
4.  **Copy the Key:** Copy the generated API key.  **Important:** Store this key securely, as you won't be able to view it again.

## Supported Models

Roo Code will automatically fetch the list of available models from the Unbound API. Commonly supported models include:

*   **Anthropic Claude models:** (e.g., `anthropic/claude-3-5-sonnet-20241022`) These are generally recommended for best performance with Roo Code.
*   **OpenAI models:** (e.g., `openai/gpt-4o`)
* Other providers, as listed by running the extension

**Important:**  When selecting a model, use the full model ID as shown in the dropdown (e.g., `anthropic/claude-3-5-sonnet-20241022`).

Refer to the [Unbound documentation](https://docs.getunbound.ai/reference/introduction) for the most up-to-date list of supported models and their IDs.

## Configuration in Roo Code

1.  **Open Roo Code Settings:** Click the gear icon (⚙️) in the Roo Code panel.
2.  **Select Provider:** Choose "Unbound" from the "API Provider" dropdown.
3.  **Enter API Key:** Paste your Unbound API key into the "API Key" field.
4.  **Select Model:** Choose your desired model from the "Model ID" dropdown.

## Tips and Notes

*   **Pricing:** Unbound operates on a pay-per-use basis. Pricing varies depending on the model you choose. See the [Unbound documentation](https://docs.getunbound.ai/reference/pricing) for details.
*   **Base URL:** The base URL for the Unbound API (`https://api.getunbound.ai/v1`) is automatically configured in Roo Code. You should not need to modify this.
* **Prompt Caching:** Some of the models offered by Unbound support prompt caching. Check the "Model Info" below the model dropdown after selecting a model to see if your chosen model has this feature.
* **Security Focus:** Unbound emphasizes security features for enterprise use.  If your organization has strict security requirements for AI usage, Unbound might be a good option.