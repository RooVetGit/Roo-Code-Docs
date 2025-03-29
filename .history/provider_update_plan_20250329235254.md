# Provider Documentation Update Plan

This document outlines the necessary updates to align the Roo Code provider documentation with the actual implementations found in the source code (`../Roo-Code/src/shared/api.ts`).

**Primary Goal:** Update the "Supported Models" section in each provider's documentation file (`docs/providers/*.md`) to match the models defined in the source code.

## Source Code Model Lists (from `../Roo-Code/src/shared/api.ts`)

*   **Anthropic:**
    *   `claude-3-7-sonnet-20250219:thinking`
    *   `claude-3-7-sonnet-20250219`
    *   `claude-3-5-sonnet-20241022`
    *   `claude-3-5-haiku-20241022`
    *   `claude-3-opus-20240229`
    *   `claude-3-haiku-20240307`
*   **Bedrock:**
    *   `amazon.nova-pro-v1:0`
    *   `amazon.nova-pro-latency-optimized-v1:0`
    *   `amazon.nova-lite-v1:0`
    *   `amazon.nova-micro-v1:0`
    *   `anthropic.claude-3-7-sonnet-20250219-v1:0`
    *   `anthropic.claude-3-5-sonnet-20241022-v2:0`
    *   `anthropic.claude-3-5-haiku-20241022-v1:0`
    *   `anthropic.claude-3-5-sonnet-20240620-v1:0`
    *   `anthropic.claude-3-opus-20240229-v1:0`
    *   `anthropic.claude-3-sonnet-20240229-v1:0`
    *   `anthropic.claude-3-haiku-20240307-v1:0`
    *   `anthropic.claude-2-1-v1:0`
    *   `anthropic.claude-2-0-v1:0`
    *   `anthropic.claude-instant-v1:0`
    *   `deepseek.r1-v1:0`
    *   `meta.llama3-3-70b-instruct-v1:0`
    *   `meta.llama3-2-90b-instruct-v1:0`
    *   `meta.llama3-2-11b-instruct-v1:0`
    *   `meta.llama3-2-3b-instruct-v1:0`
    *   `meta.llama3-2-1b-instruct-v1:0`
    *   `meta.llama3-1-405b-instruct-v1:0`
    *   `meta.llama3-1-70b-instruct-v1:0`
    *   `meta.llama3-1-70b-instruct-latency-optimized-v1:0`
    *   `meta.llama3-1-8b-instruct-v1:0`
    *   `meta.llama3-70b-instruct-v1:0`
    *   `meta.llama3-8b-instruct-v1:0`
    *   `amazon.titan-text-lite-v1:0`
    *   `amazon.titan-text-express-v1:0`
    *   `amazon.titan-text-embeddings-v1:0`
    *   `amazon.titan-text-embeddings-v2:0`
*   **Glama:** Default model: `anthropic/claude-3-7-sonnet` (No explicit list in code)
*   **Requesty:** Default model: `anthropic/claude-3-7-sonnet-latest` (No explicit list in code)
*   **OpenRouter:** Default model: `anthropic/claude-3.7-sonnet` (No explicit list in code)
*   **Vertex:**
    *   `gemini-2.0-flash-001`
    *   `gemini-2.5-pro-exp-03-25`
    *   `gemini-2.0-pro-exp-02-05`
    *   `gemini-2.0-flash-lite-001`
    *   `gemini-2.0-flash-thinking-exp-01-21`
    *   `gemini-1.5-flash-002`
    *   `gemini-1.5-pro-002`
    *   `claude-3-7-sonnet@20250219:thinking`
    *   `claude-3-7-sonnet@20250219`
    *   `claude-3-5-sonnet-v2@20241022`
    *   `claude-3-5-sonnet@20240620`
    *   `claude-3-5-haiku@20241022`
    *   `claude-3-opus@20240229`
    *   `claude-3-haiku@20240307`
*   **Gemini:**
    *   `gemini-2.5-pro-exp-03-25`
    *   `gemini-2.0-flash-001`
    *   `gemini-2.0-flash-lite-preview-02-05`
    *   `gemini-2.0-pro-exp-02-05`
    *   `gemini-2.0-flash-thinking-exp-01-21`
    *   `gemini-2.0-flash-thinking-exp-1219`
    *   `gemini-2.0-flash-exp`
    *   `gemini-1.5-flash-002`
    *   `gemini-1.5-flash-exp-0827`
    *   `gemini-1.5-flash-8b-exp-0827`
    *   `gemini-1.5-pro-002`
    *   `gemini-1.5-pro-exp-0827`
    *   `gemini-exp-1206`
*   **OpenAI Native (Compatible):**
    *   `o3-mini`
    *   `o3-mini-high`
    *   `o3-mini-low`
    *   `o1`
    *   `o1-preview`
    *   `o1-mini`
    *   `gpt-4.5-preview`
    *   `gpt-4o`
    *   `gpt-4o-mini`
*   **DeepSeek:**
    *   `deepseek-chat`
    *   `deepseek-reasoner`
*   **Mistral:**
    *   `codestral-latest`
    *   `mistral-large-latest`
    *   `ministral-8b-latest`
    *   `ministral-3b-latest`
    *   `mistral-small-latest`
    *   `pixtral-large-latest`
*   **Unbound:** Default model: `anthropic/claude-3-5-sonnet-20241022` (No explicit list in code)
*   **LM Studio, Ollama, OpenAI, VSCode LM:** Models are likely fetched dynamically or configured by the user; no static lists found in `api.ts`.
*   **Human Relay:** Not applicable (no models).

## Next Steps

Proceed provider by provider:
1.  Read the current `docs/providers/<provider>.md` file.
2.  Compare the "Supported Models" section with the list above.
3.  Update the markdown file with the correct list using `apply_diff` or `write_to_file`.

*(Original Discrepancy Note - Keeping for reference, but action deferred per user feedback)*
*   *`openai-compatible.md` vs `openai-native.ts`: The documentation uses `openai-compatible.md`, while the code defines models under `openAiNativeModels`. We will keep the documentation file named `openai-compatible.md` for now and update its model list based on `openAiNativeModels`.*