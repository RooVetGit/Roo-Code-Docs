# Mistral AI

Roo Code supports accessing models through the Mistral AI API, including both standard Mistral models and the code-specialized Codestral model.

**Website:** [https://mistral.ai/](https://mistral.ai/)

## Getting an API Key

1.  **Sign Up/Sign In:** Go to the [Mistral Platform](https://console.mistral.ai/). Create an account or sign in.  You may need to go through a verification process.
2.  **Navigate to API Keys:**  Navigate to the [API Keys](https://console.mistral.ai/api-keys/) page.
3.  **Create a Key:** Create a new API key. Give it a descriptive name (e.g., "Roo Code").
4.  **Copy the Key:** **Important:** Copy the API key *immediately*. You will not be able to see it again. Store it securely.

## Supported Models

Roo Code supports the following Mistral models, along with their context window and max output tokens:

| Model Name              | Endpoint                                    | Context Window | Max Output Tokens |
| :---------------------- | :------------------------------------------ | :------------- | :---------------- |
| `mistral-small-latest`  | `https://api.mistral.ai`                    | 32k            | 131,000 tokens    |
| `mistral-medium-latest` | `https://api.mistral.ai`                    | 32k            | 131,000 tokens    |
| `mistral-large-latest`  | `https://api.mistral.ai`                    | 32k            | 131,000 tokens    |
| `codestral-latest`      | `https://codestral.mistral.ai`              | 32k            | 256,000 tokens    |

**Note:**  Model availability and specifications may change.  Refer to the [Mistral AI documentation](https://docs.mistral.ai/api/) for the latest information. The `codestral-latest` model is available on a separate endpoint that needs to be specified.

## Configuration in Roo Code

1.  **Open Roo Code Settings:** Click the gear icon (<Codicon name="gear" />) in the Roo Code panel.
2.  **Select Provider:** Choose "Mistral" from the "API Provider" dropdown.
3.  **Enter API Key:** Paste your Mistral API key into the "API Key" field.
4.  **Select Model:** Choose your desired model from the "Model ID" dropdown.  If you intend to use `codestral-latest`, see the "Codestral" section below.
5. **(Optional) Codestral URL:** If you are using a Codestral model, make sure to enter `https://codestral.mistral.ai` into the "Codestral Base URL" box.

## Using Codestral

Codestral is a model specifically designed for code generation and interaction. To use Codestral:

1.  **Select "Mistral" as the API Provider.**
2.  **Enter your Mistral API Key.**  (The same API key works for both the standard Mistral API and the Codestral endpoint.)
3.  **Select a Codestral Model:** Choose a model with the `codestral-` prefix from the "Model ID" dropdown (e.g., `codestral-latest`).
4.  **Set the Codestral Base URL:** Enter `https://codestral.mistral.ai` in the "Codestral Base URL" field. This field appears only when a Codestral model is selected.  If you do *not* set this URL correctly, requests to Codestral will fail.

## Tips and Notes

*   **Pricing:** Refer to the [Mistral AI pricing](https://mistral.ai/pricing/) page for details on model costs.
* **Prompt Caching:** At the moment, the models do not support prompt caching.
* **Codestral:** Remember to set the `Codestral Base URL` when using Codestral models.  The standard Mistral models use the default base URL (`https://api.mistral.ai`).