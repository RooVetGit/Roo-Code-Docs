# OpenRouter

OpenRouter is an AI platform that provides access to a wide variety of language models from different providers, all through a single API.  This can simplify setup and allow you to easily experiment with different models.

**Website:** [https://openrouter.ai/](https://openrouter.ai/)

## Getting an API Key

1.  **Sign Up/Sign In:** Go to the [OpenRouter website](https://openrouter.ai/).  Sign in with your Google or GitHub account.
2.  **Get an API Key:** Go to the [keys page](https://openrouter.ai/keys).  You should see an API key listed.  If not, create a new key.
3.  **Copy the Key:** Copy the API key.

## Supported Models

OpenRouter supports a large and growing number of models.  Roo Code automatically fetches the list of available models. Some popular models available through OpenRouter include:

*   **Anthropic:** Claude 3.5 Sonnet, Claude 3 Haiku, Claude 3 Opus
* **Google:** Gemini 2.0 Flash
* **Mistral:** Mixtral 8x22B
*   **Meta:** Llama 3 8B Instruct, Llama 3 70B Instruct
* **DeepSeek**: DeepSeek-R1

Refer to the [OpenRouter Models page](https://openrouter.ai/models) for the complete and up-to-date list.

## Configuration in Roo Code

1.  **Open Roo Code Settings:** Click the gear icon (⚙️) in the Roo Code panel.
2.  **Select Provider:** Choose "OpenRouter" from the "API Provider" dropdown.
3.  **Enter API Key:** Paste your OpenRouter API key into the "API Key" field.
4.  **Select Model:** Choose your desired model from the "Model ID" dropdown.
5.  **(Optional) Custom Base URL:** If you need to use a custom base URL for the OpenRouter API, check "Use custom base URL" and enter the URL. Leave this blank for most users.

## Tips and Notes

* **Model Selection:** OpenRouter offers a wide range of models. Experiment to find the best one for your needs.
* **Pricing:**  OpenRouter charges based on the underlying model's pricing.  See the [OpenRouter Models page](https://openrouter.ai/models) for details.
* **Prompt Caching:** Some providers support prompt caching. See the OpenRouter documentation for supported models.