# Ollama

Roo Code supports running models locally using [Ollama](https://ollama.com/). This provides privacy, offline access, and potentially lower costs, but requires more setup and a powerful computer.

## Setting up Ollama

1.  **Download and Install Ollama:** Download the Ollama installer for your operating system from the [Ollama website](https://ollama.com/). Follow the installation instructions.

2.  **Download a Model:** Ollama supports many different models. You can find a list of available models on the [Ollama website](https://ollama.com/library). Some recommended models for coding tasks include:

    *   `codellama:7b-code` (good starting point, smaller)
    *   `codellama:13b-code` (better quality, larger)
    *   `codellama:34b-code` (even better quality, very large)
    *   `mistralai/Mistral-7B-Instruct-v0.1` (good general-purpose model)
    *   `deepseek-coder:6.7b-base` (good for coding tasks)

    To download a model, open your terminal and run:

    ```bash
    ollama run <model_name>
    ```

    For example:

    ```bash
    ollama run codellama:7b-code
    ```
    **Note:** The first time you download a model, it may take a while, depending on the model size and your internet connection. You need to make sure Ollama is up and running before connecting to it.

3. **Start the Ollama server.** By default, Ollama will be running on `http://localhost:11434`

## Configuration in Roo Code

1.  **Open Roo Code Settings:** Click the gear icon (<Codicon name="gear" />) in the Roo Code panel.
2.  **Select Provider:** Choose "Ollama" from the "API Provider" dropdown.
3.  **Enter Model ID:** Enter the name of the model you downloaded (e.g., `codellama:7b-code`).
4.  **(Optional) Base URL:** By default, Roo Code will connect to Ollama at `http://localhost:11434`. If you've configured Ollama to use a different address or port, enter the full URL here.

## Tips and Notes

*   **Resource Requirements:** Running large language models locally can be resource-intensive.  Make sure your computer meets the minimum requirements for the model you choose.
*   **Model Selection:** Experiment with different models to find the one that best suits your needs.
*   **Offline Use:** Once you've downloaded a model, you can use Roo Code offline with that model.
*   **Ollama Documentation:** Refer to the [Ollama documentation](https://ollama.com/docs) for more information on installing, configuring, and using Ollama.