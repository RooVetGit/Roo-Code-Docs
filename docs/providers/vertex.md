---
sidebar_label: GCP Vertex AI
---

# Using GCP Vertex AI With Roo Code

Roo Code supports accessing models through Google Cloud Platform's Vertex AI, a managed machine learning platform that provides access to various foundation models, including Anthropic's Claude family.

**Website:** [https://cloud.google.com/vertex-ai](https://cloud.google.com/vertex-ai)

## Prerequisites

*   **Google Cloud Account:** You need an active Google Cloud Platform (GCP) account.
*   **Project:** You need a GCP project with the Vertex AI API enabled.
*   **Model Access:** You must request and be granted access to the specific Claude models on Vertex AI you want to use. See the [Google Cloud documentation](https://cloud.google.com/vertex-ai/generative-ai/docs/partner-models/use-claude#before_you_begin) for instructions.
*   **Application Default Credentials (ADC):**  Roo Code uses Application Default Credentials to authenticate with Vertex AI. The easiest way to set this up is to:
    1.  Install the Google Cloud CLI: [https://cloud.google.com/sdk/docs/install](https://cloud.google.com/sdk/docs/install)
    2.  Authenticate using: `gcloud auth application-default login`

## Supported Models

Roo Code supports the following models through Vertex AI:

*   `claude-3-5-sonnet-v2@20241022` (Recommended): A powerful model balancing performance and cost. Supports image inputs.
*	`claude-3-5-sonnet@20240620`
*   `claude-3-5-haiku@20241022`
*   `claude-3-opus@20240229`
*   `claude-3-haiku@20240307`

Refer to the [Google Cloud documentation](https://cloud.google.com/vertex-ai/generative-ai/docs/partner-models/use-claude) for the most up-to-date list of available models and their IDs.

## Configuration in Roo Code

1.  **Open Roo Code Settings:** Click the gear icon (<Codicon name="gear" />) in the Roo Code panel.
2.  **Select Provider:** Choose "GCP Vertex AI" from the "API Provider" dropdown.
3.  **Enter Project ID:** Enter your Google Cloud Project ID.
4.  **Select Region:** Choose the region where your Vertex AI resources are located (e.g., `us-east5`).
5.  **Select Model:** Choose your desired model from the "Model" dropdown.

## Tips and Notes

*   **Permissions:**  Ensure your Google Cloud account has the necessary permissions to access Vertex AI and the specific models you want to use.
*   **Pricing:** Refer to the [Vertex AI pricing](https://cloud.google.com/vertex-ai/pricing) page for details.
