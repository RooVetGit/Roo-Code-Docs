---
sidebar_label: 'Intelligent Context Condensation'
---
import Codicon from '@site/src/components/Codicon';

# Intelligently Condense the Context Window

The `autoCondenseContext` experimental feature proactively manages Roo Code's conversation history to prevent loss of context when the conversation becomes lengthy.

## How It Works

When a conversation with Roo approaches its context window limit, older messages would typically be dropped to make space. The `autoCondenseContext` feature addresses this by automatically summarizing the conversation history using a Large Language Model (LLM) call. This summarization is triggered when the context window is almost full.

The goal is to shrink the token count of the conversation history while preserving essential information, preventing the context window from overflowing and avoiding the silent dropping of messages. This helps maintain a more coherent and complete conversation history for the LLM.

**Key Points:**
*   **Summarization Trigger:** Occurs when the context window is almost full.
*   **Message Preservation:** All original messages are preserved when rewinding to old checkpoints. However, messages from before the most recent summary are not included in subsequent API calls to the LLM.

**Disclaimer**: The LLM call used for summarization has an associated cost. Currently, this cost is not reflected in the usage/cost displayed in the Roo Code UI.

<img src="/img/intelligent-context-condensation/intelligent-context-condensation.png" alt="Settings for Intelligent Context Condensation and Power Steering" width="600" />
## Enabling This Feature

This feature is managed within the "Experimental Features" section of Roo Code's Advanced Settings.

1.  Open Roo Code settings (<Codicon name="gear" /> icon in the top right corner).
2.  Navigate to "Advanced Settings".
3.  Locate the "Experimental Features" area.
4.  Toggle the "Intelligently condense the context window" option.
5.  Save your changes.

For general information on experimental features, see [Experimental Features Overview](/features/experimental/experimental-features).

## Future Enhancements

The following enhancements are being considered for this feature:
*   A manual option for users to trigger the condense operation.
*   A UI indicator to show when a condense operation has occurred.
*   User configuration options to control when `autoCondenseContext` runs.
*   Telemetry to better evaluate the feature's effectiveness and handle context window overrun errors more dynamically.

## Feedback

Please report any issues or suggestions regarding this feature on the [Roo Code GitHub Issues page](https://github.com/RooCodeInc/Roo-Code/issues). Your feedback is crucial for improving Roo Code.