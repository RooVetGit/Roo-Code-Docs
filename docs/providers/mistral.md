---
sidebar_label: Mistral AI
---

# Using Mistral AI With Roo Code

Roo Code supports accessing models through the Mistral AI API, including both standard Mistral models and the code-specialized Codestral model.

**Website:** [https://mistral.ai/](https://mistral.ai/)

## Getting an API Key

1.  **Sign Up/Sign In:** Go to the [Mistral Platform](https://console.mistral.ai/). Create an account or sign in.  You may need to go through a verification process.
2.  **Create an API Keys:**  Get a [Mistral API Key](https://console.mistral.ai/api-keys/) and/or a [Codestral API Key](https://console.mistral.ai/codestral).
3.  **Copy the Key:** **Important:** Copy the API key *immediately*. You will not be able to see it again. Store it securely.

## Supported Models

Roo Code supports the following Mistral models:

*   `codestral-latest`
*   `mistral-large-latest`
*   `mistral-8b-latest`
*   `mistral-3b-latest`
*   `mistral-small-latest`
*   `pixtral-large-latest`

**Note:**  Model availability and specifications may change.  Refer to the [Mistral AI documentation](https://docs.mistral.ai/api/) for the latest information.

## Configuration in Roo Code

1.  **Open Roo Code Settings:** Click the gear icon (<Codicon name="gear" />) in the Roo Code panel.
2.  **Select Provider:** Choose "Mistral" from the "API Provider" dropdown.
3.  **Enter API Key:** Paste your Mistral API key into the "Mistral API Key" field if you're using a `mistral` model.  If you intend to use `codestral-latest`, see the "Codestral" section below.
4.  **Select Model:** Choose your desired model from the "Model" dropdown. 

## Using Codestral

Codestral is a model specifically designed for code generation and interaction. To use Codestral:

1.  **Select "Mistral" as the API Provider.**
2.  **Enter your Codestral API Key.**
3.  **Select a Codestral Model:** Choose a model with the `codestral-` prefix from the "Model ID" dropdown (e.g., `codestral-latest`).

## Tips and Notes

* **Pricing:** Refer to the [Mistral AI pricing](https://mistral.ai/pricing/) page for details on model costs.
