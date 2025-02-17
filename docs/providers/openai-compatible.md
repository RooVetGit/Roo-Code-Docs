# OpenAI Compatible

Roo Code supports a wide range of AI model providers that offer APIs compatible with the OpenAI API standard. This means you can use models from providers *other than* OpenAI, while still using a familiar API interface.  This includes providers like:

*   **Local models** running through tools like Ollama and LM Studio (covered in separate sections).
*   **Cloud providers** like Perplexity, Together AI, Anyscale, and others.
*   **Any other provider** offering an OpenAI-compatible API endpoint.

This document focuses on setting up providers *other than* the official OpenAI API (which has its own [dedicated configuration page](./openai.md)).

## General Configuration

The key to using an OpenAI-compatible provider is to configure two main settings:

1.  **Base URL:** This is the API endpoint for the provider.  It will *not* be `https://api.openai.com/v1` (that's for the official OpenAI API).
2.  **API Key:**  This is the secret key you obtain from the provider.
3.  **Model ID:** This is the model name of the specific model.

You'll find these settings in the Roo Code settings panel (click the gear icon ⚙️):

*   **API Provider:** Select "OpenAI Compatible".
*   **Base URL:** Enter the base URL provided by your chosen provider.  **This is crucial.**
*   **API Key:** Enter your API key.
*   **Model ID:** Enter the model ID that you have access to.
*   **Model Configuration:** The settings shown below will automatically be applied.
    - **Max Output Tokens:** 4096
    - **Context Window:** 8192
    - **Supports prompt caching:** False
    - **Supports images:** True
    - **Input Price:** 0
    - **Output Price:** 0

## Provider-Specific Instructions and Examples

Here are some examples of how to configure Roo Code for some popular OpenAI-compatible providers.  **Always refer to your provider's documentation for the most up-to-date information.**

### Perplexity

*   **Website:** [https://perplexity.ai/](https://perplexity.ai/)
*   **API Key:** Obtain your API key from your [Perplexity account settings](https://www.perplexity.ai/).
*   **Base URL:** `https://api.perplexity.ai`
*   **Supported Models:** The models may vary, but some available models are: `pplx-7b-online`, `pplx-70b-online`, `pplx-7b-chat`, `pplx-70b-chat`, `mistral-7b-instruct`, `codellama-34b-instruct`, `codellama-70b-instruct`, `llama-2-70b-chat`.

### Together AI

*   **Website:** [https://together.ai/](https://together.ai/)
*   **API Key:**  Obtain your API key from your [Together AI account](https://api.together.xyz/settings/api-keys).
*   **Base URL:** `https://api.together.xyz/v1`
*   **Supported Models:** [See the models list on the Together AI website.](https://docs.together.ai/docs/inference-models)

### Anyscale Endpoints

*   **Website:** [https://www.anyscale.com/](https://www.anyscale.com/)
*   **API Key:** Obtain your API Key from your [Anyscale Endpoints](https://app.endpoints.anyscale.com/) account.
*   **Base URL:** `https://api.endpoints.anyscale.com/v1`
*   **Supported Models:** [See the models list on the Anyscale Endpoints website.](https://docs.endpoints.anyscale.com/category/models)

### Using a Custom Provider

If your provider isn't listed above, you can still configure Roo Code to use it, as long as it offers an OpenAI-compatible API.

1.  **Obtain the Base URL:**  Find the API base URL in your provider's documentation.  This is the URL you'll use to make API requests.
2.  **Obtain an API Key:**  Follow your provider's instructions for creating an API key.
3.  **Find the Model ID:**  Your provider will list the available model IDs.
4.  **Enter the Information:**  Enter the Base URL, API Key, and Model ID into the Roo Code settings.

## Troubleshooting

*   **"Invalid API Key":** Double-check that you've entered the API key correctly.
*   **"Model Not Found":** Make sure you're using a valid model ID for your chosen provider.
*   **Connection Errors:** Verify the Base URL is correct and that your provider's API is accessible.
*   **Unexpected Results:** If you're getting unexpected results, try a different model or adjust the temperature setting.

By using an OpenAI-compatible provider, you can leverage the flexibility of Roo Code with a wider range of AI models. Remember to always consult your provider's documentation for the most accurate and up-to-date information.