# Requesty

Roo Code supports accessing models through the [Requesty](https://www.requesty.ai/) AI platform. Requesty provides a unified API for interacting with various large language models (LLMs), including those from Anthropic and OpenAI, and offers features for testing, deploying, and monitoring LLM applications.  It's designed to simplify the process of integrating AI into applications.

**Website:** [https://www.requesty.ai/](https://www.requesty.ai/)

## Getting an API Key

1.  **Sign Up/Sign In:** Go to the [Requesty website](https://www.requesty.ai/) and create an account or sign in.
2.  **Get API Key:**  You can find and copy your API key from the "Default Key" section of your [Requesty dashboard](https://www.requesty.ai/dashboard).

## Supported Models

Requesty provides access to a wide range of models.  Roo Code will automatically fetch the latest list of available models. Some commonly supported models include:

*  **Anthropic:** Claude models (e.g., `anthropic/claude-3-5-sonnet-20241022`). Roo Code is optimized for Claude models.
*  **OpenAI:** GPT models (e.g., `openai/gpt-4o`).
*  **DeepSeek:** Coder models (e.g. `deepseek/deepseek-coder-33b-instruct`)
* Plus Many More

**Important:** When selecting a model, use the full model ID as shown in the dropdown (e.g., `anthropic/claude-3-5-sonnet-20241022`).

Refer to the [Requesty documentation](https://docs.requesty.ai/platform/prompt-playground) for the most up-to-date list of models and their IDs. You can filter by model features to show the models that best fit your purpose.

## Configuration in Roo Code

1.  **Open Roo Code Settings:** Click the gear icon (⚙️) in the Roo Code panel.
2.  **Select Provider:** Choose "Requesty" from the "API Provider" dropdown.
3.  **Enter API Key:** Paste your Requesty API key into the "API Key" field.
4.  **Select Model:** Choose your desired model from the "Model ID" dropdown.

## Tips and Notes

*   **Pricing:** Requesty operates on a pay-per-use basis. Pricing varies depending on the model you choose.  See the [Requesty documentation](https://docs.requesty.ai/platform/insight-explorer) for details.  Roo Code will display pricing information (if available) in the model selection dropdown and below the model selection.
*   **Base URL:** The base URL for the Requesty API (`https://router.requesty.ai/v1`) is automatically configured in Roo Code.  You should not need to modify this.
*   **Prompt Caching:**  Some models available through Requesty support prompt caching. This can significantly reduce costs and improve performance for repeated prompts.  Check the "Model Info" section in Roo Code after selecting a model to see if caching is supported.
* **Prompt Playground**: You can test and improve prompts directly in Requesty's user interface before using them in the extension.
* **Monitoring**: Requesty provides usage dashboards and tools to help monitor prompts, costs, and model performance, as well as handle prompt injection and data leaks.