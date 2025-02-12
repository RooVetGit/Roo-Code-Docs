# Using Local Models

Roo Code supports running language models locally on your own machine using [Ollama](https://ollama.com/) and [LM Studio](https://lmstudio.ai/).  This offers several advantages:

*   **Privacy:** Your code and data never leave your computer.
*   **Offline Access:**  You can use Roo Code even without an internet connection.
*   **Cost Savings:**  Avoid API usage fees associated with cloud-based models.
*   **Customization:**  Experiment with different models and configurations.

**However, using local models also has some drawbacks:**

*   **Resource Requirements:**  Local models can be resource-intensive, requiring a powerful computer with a good CPU and, ideally, a dedicated GPU.
*   **Setup Complexity:**  Setting up local models can be more complex than using cloud-based APIs.
*   **Model Performance:**  The performance of local models can vary significantly. While some are excellent, they may not always match the capabilities of the largest, most advanced cloud models.
* **Limited Features**: Local models (and many online models) often do not support advanced features such as prompt caching, computer use, and others.

## Supported Local Model Providers

Roo Code currently supports two main local model providers:

1.  **Ollama:**  A popular open-source tool for running large language models locally.  It supports a wide range of models.
2.  **LM Studio:**  A user-friendly desktop application that simplifies the process of downloading, configuring, and running local models.  It also provides a local server that emulates the OpenAI API.

## Setting Up Ollama

1.  **Download and Install Ollama:**  Download the Ollama installer for your operating system from the [Ollama website](https://ollama.com/). Follow the installation instructions.

2.  **Download a Model:**  Ollama supports many different models.  You can find a list of available models on the [Ollama website](https://ollama.com/library).  Some recommended models for coding tasks include:

    *   `codellama:7b-code` (good starting point, smaller)
    *   `codellama:13b-code` (better quality, larger)
    *   `codellama:34b-code` (even better quality, very large)
    *   `mistralai/Mistral-7B-Instruct-v0.1` (good general-purpose model)
    *   `deepseek-coder:6.7b-base` (good for coding tasks)
    * `llama3:8b-instruct-q5_1` (good for general tasks)

    To download a model, open your terminal and run:

    ```bash
    ollama run <model_name>
    ```

    For example:

    ```bash
    ollama run codellama:7b-code
    ```
    
    This will download the model and then run it in your terminal.  You can type `/bye` to exit the model.
    
    **Important:** The first time you run a model, Ollama *must* be running. If you run with a model and Ollama is not open, VSCode may hang.

3.  **Configure Roo Code:**
    *   Open the Roo Code sidebar (🚀 icon).
    *   Click the settings gear icon (⚙️).
    *   Select "ollama" as the API Provider.
    *   Enter the Model ID (e.g., `codellama:7b-code`).
    *   (Optional) You can configure the base URL if you're running Ollama on a different machine. The default is `http://localhost:11434`.

## Setting Up LM Studio

1.  **Download and Install LM Studio:** Download LM Studio from the [LM Studio website](https://lmstudio.ai/).
2.  **Download a Model:** Use the LM Studio interface to search for and download a model.  Some recommended models include those listed above for Ollama. Look for models in the GGUF format.
3.  **Start the Local Server:**
    *   In LM Studio, click the **"Local Server"** tab (the icon looks like `<->`).
    *   Select your downloaded model.
    *   Click **"Start Server"**.
4.  **Configure Roo Code:**
    *   Open the Roo Code sidebar (🚀 icon).
    *   Click the settings gear icon (⚙️).
    *   Select "lmstudio" as the API Provider.
    *   Enter the Model ID.  This should be the name of the model file you loaded in LM Studio (e.g., `codellama-7b.Q4_0.gguf`).  LM Studio shows a list of "Currently loaded models" in its UI.
    *   (Optional) You can configure the base URL if you're running LM Studio on a different machine. The default is `http://localhost:1234`.

## Troubleshooting

*   **"Please check the LM Studio developer logs to debug what went wrong":** This error usually indicates a problem with the model or its configuration in LM Studio.  Try the following:
    *   Make sure the LM Studio local server is running and that the correct model is loaded.
    *   Check the LM Studio logs for any error messages.
    *   Try restarting the LM Studio server.
    *   Ensure your chosen model is compatible with Roo Code.  Some very small models may not work well.
    *  Some models may require a larger context length.

*   **"No connection could be made because the target machine actively refused it":**  This usually means that the Ollama or LM Studio server isn't running, or is running on a different port/address than Roo Code is configured to use.  Double-check the Base URL setting.

*   **Slow Response Times:** Local models can be slower than cloud-based models, especially on less powerful hardware.  If performance is an issue, try using a smaller model.

*   **Model Not Found:** Ensure you have typed in the name of the model correctly. If you're using Ollama, use the same name that you provide in the `ollama run` command.