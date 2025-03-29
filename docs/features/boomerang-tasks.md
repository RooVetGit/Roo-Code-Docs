---
sidebar_label: 'Boomerang Tasks'
---

# Boomerang Tasks: Orchestrate Complex Workflows

Boomerang Tasks (also known as subtasks or task orchestration) allow you to break down complex projects into smaller, manageable pieces. Think of it like delegating parts of your work to specialized assistants. Each subtask runs in its own context, often using a different Roo Code mode tailored for that specific job (like [`code`](/basic-usage/using-modes#code-mode-default), [`architect`](/basic-usage/using-modes#architect-mode), or [`debug`](/basic-usage/using-modes#debug-mode)).

<video width="100%" controls>
  <source src="/img/boomerang-tasks/Roo-Code-Boomerang-Tasks.mp4#t=0.001" type="video/mp4"></source>
  Your browser does not support the video tag.
</video>

:::info Boomerang Mode is a Custom Mode
The `Boomerang Mode` mentioned here is not a built-in mode but a custom mode you can create yourself. It's specifically designed to orchestrate workflows by breaking down tasks and delegating them to other modes. See the [Setting Up Boomerang Mode](#setting-up-boomerang-mode) section below for instructions.

Learn more about [Built-in Modes](/basic-usage/using-modes#built-in-modes) or the general process of creating [Custom Modes](/features/custom-modes).
:::

## Why Use Boomerang Tasks?

-   **Tackle Complexity:** Break large, multi-step projects (e.g., building a full feature) into focused subtasks (e.g., design, implementation, documentation).
-   **Use Specialized Modes:** Automatically delegate subtasks to the mode best suited for that specific piece of work, leveraging specialized capabilities for optimal results.
-   **Maintain Focus & Efficiency:** Each subtask operates in its own isolated context with a separate conversation history. This prevents the parent (orchestrator) task from becoming cluttered with the detailed execution steps (like code diffs or file analysis results), allowing it to focus efficiently on the high-level workflow and manage the overall process based on concise summaries from completed subtasks.
-   **Streamline Workflows:** Results from one subtask can be automatically passed to the next, creating a smooth flow (e.g., architectural decisions feeding into the coding task).

## How It Works

1.  Using a [Custom Mode](/features/custom-modes) configured for orchestration (like the [`Boomerang Mode` described below](#setting-up-boomerang-mode)), Roo can analyze a complex task and suggest breaking it down into a subtask[^1].

2.  The parent task pauses, and the new subtask begins in a different mode[^2].
3.  When the subtask's goal is achieved, Roo signals completion.
4.  The parent task resumes with only the summary[^3] of the subtask. The parent uses this summary to continue the main workflow.

## Key Considerations

-   **Approval Required:** By default, you must approve the creation and completion of each subtask. This can be automated via the [Auto-Approving Actions](/features/auto-approving-actions#subtasks) settings if desired.
-   **Context Isolation and Transfer:** Each subtask operates in complete isolation with its own conversation history. It does not automatically inherit the parent's context. Information must be explicitly passed:
    *   **Down:** Via the initial instructions provided when the subtask is created.
    *   **Up:** Via the final summary provided when the subtask finishes. Be mindful that only this summary returns to the parent.
-   **Navigation:** Roo's interface helps you see the hierarchy of tasks (which task is the parent, which are children). You can typically navigate between active and paused tasks.

Boomerang Tasks provide a powerful way to manage complex development workflows directly within Roo Code, leveraging specialized modes for maximum efficiency.

:::tip Keep Tasks Focused

## Setting Up Boomerang Mode

You can create your own Boomerang Mode to manage complex workflows. Follow the steps in the [Custom Modes](/features/custom-modes) documentation, using the text below for the key configuration fields.

**Recommended Tool Access:** Ensure **all tool access checkboxes are unchecked** in the "Available Tools" section when creating the mode. Boomerang Mode primarily uses the [`new_task`](/features/tools/new-task) capability (which doesn't require specific tool group permissions) to delegate work to other modes.

**Role Definition:**
```text title="Copy this for the 'Role Definition' field"
You are Roo, a strategic workflow orchestrator who coordinates complex tasks by delegating them to appropriate specialized modes. You have a comprehensive understanding of each mode's capabilities and limitations, allowing you to effectively break down complex problems into discrete tasks that can be solved by different specialists.
```

**Mode-specific Custom Instructions:**
```text title="Copy this for the 'Mode-specific Custom Instructions' field"
Your role is to coordinate complex workflows by delegating tasks to specialized modes. As an orchestrator, you should:

1. When given a complex task, break it down into logical subtasks that can be delegated to appropriate specialized modes.

2. For each subtask, use the `new_task` tool to delegate. Choose the most appropriate mode for the subtask's specific goal and provide comprehensive instructions in the `message` parameter. These instructions must include:
    *   All necessary context from the parent task or previous subtasks required to complete the work.
    *   A clearly defined scope, specifying exactly what the subtask should accomplish.
    *   An explicit statement that the subtask should *only* perform the work outlined in these instructions and not deviate.
    *   An instruction for the subtask to signal completion by using the `attempt_completion` tool, providing a concise yet thorough summary of the outcome in the `result` parameter, keeping in mind that this summary will be the source of truth used to keep track of what was completed on this project.
    *   A statement that these specific instructions supersede any conflicting general instructions the subtask's mode might have.

3. Track and manage the progress of all subtasks. When a subtask is completed, analyze its results and determine the next steps.

4. Help the user understand how the different subtasks fit together in the overall workflow. Provide clear reasoning about why you're delegating specific tasks to specific modes.

5. When all subtasks are completed, synthesize the results and provide a comprehensive overview of what was accomplished.

6. Ask clarifying questions when necessary to better understand how to break down complex tasks effectively.

7. Suggest improvements to the workflow based on the results of completed subtasks.

Use subtasks to maintain clarity. If a request significantly shifts focus or requires a different expertise (mode), consider creating a subtask rather than overloading the current one.
```

### Download Configuration

You can download the Boomerang Mode configuration file here: [Download boomerang-mode.roomodes](/downloads/boomerang-tasks/roomodes.json). Rename to `.roomodes` and place in the root directory of your project.
:::


[^1]: This context is passed via the `message` parameter of the [`new_task`](/features/tools/new-task) tool.
[^2]: The mode for the subtask is specified via the `mode` parameter of the [`new_task`](/features/tools/new-task) tool during initiation.
[^3]: This summary is passed via the `result` parameter of the [`attempt_completion`](/features/tools/attempt-completion) tool when the subtask finishes.