# Provider Documentation Update Plan

This document outlines the necessary updates to align the Roo Code provider documentation with the actual implementations found in the source code (`../Roo-Code/src/api/providers/`).

## Discrepancies Found

1.  **Missing Documentation:**
    *   `openai-native`: A provider implementation (`openai-native.ts`) exists, but there is no corresponding `docs/providers/openai-native.md` file.

2.  **Outdated/Incorrect Documentation:**
    *   `openai-compatible.md`: This documentation file exists, but the corresponding provider implementation seems to be `openai-native.ts`.

## Proposed Actions

1.  **Create New Doc:**
    *   Create `docs/providers/openai-native.md` with content describing the OpenAI Native provider.
2.  **Rename/Update Existing Doc:**
    *   Rename `docs/providers/openai-compatible.md` to `docs/providers/openai-native.md`.
    *   **OR** Update the content of `docs/providers/openai-compatible.md` to accurately reflect the `openai-native.ts` provider and then rename the file. (Requires clarification on whether `openai-compatible` was a distinct provider previously). **Recommendation:** Rename and update content for `openai-native`.
3.  **Update Sidebar:**
    *   Modify `sidebars.ts` to replace the `'providers/openai-compatible'` entry with `'providers/openai-native'`.

## Currently Documented Providers (Seemingly Up-to-Date)

*   Anthropic (`anthropic.md`)
*   Bedrock (`bedrock.md`)
*   Deepseek (`deepseek.md`)
*   Gemini (`gemini.md`)
*   Glama (`glama.md`)
*   Human Relay (`human-relay.md`)
*   LM Studio (`lmstudio.md`)
*   Mistral (`mistral.md`)
*   Ollama (`ollama.md`)
*   OpenAI (`openai.md`)
*   OpenRouter (`openrouter.md`)
*   Requesty (`requesty.md`)
*   Unbound (`unbound.md`)
*   Vertex (`vertex.md`)
*   VSCode LM (`vscode-lm.md`)