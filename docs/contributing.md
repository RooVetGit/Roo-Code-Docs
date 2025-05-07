---
sidebar_label: 'Contributing'
---

# Contributing to Roo Code

Roo Code is a community-driven project, and we highly value every contribution. To ensure a smooth and effective process for everyone, **we operate on an "[Issue-First](#2-key-principle-issue-first-approach)" basis.** This means all work should be linked to a GitHub Issue *before* a Pull Request is submitted (see our [PR Policy](#pull-request-pr-policy) for details). Please read this guide carefully to understand how to contribute.
This guide outlines how to contribute to Roo Code, whether you're fixing bugs, adding features, or improving documentation.

## I. Before You Contribute

First, familiarize yourself with our community standards and project direction.

### 1. Code of Conduct

All contributors must adhere to our [Code of Conduct](https://github.com/RooVetGit/Roo-Code/blob/main/CODE_OF_CONDUCT.md). Please read it before contributing.

### 2. Understand the Project Roadmap

Roo Code has a clear development roadmap that guides our priorities and future direction. Understanding our roadmap can help you:

- Align your contributions with project goals
- Identify areas where your expertise would be most valuable
- Understand the context behind certain design decisions
- Find inspiration for new features that support our vision

Our current roadmap focuses on six key pillars:

#### Provider Support
We aim to support as many providers well as we can:

- More versatile "OpenAI Compatible" support
- xAI, Microsoft Azure AI, Alibaba Cloud Qwen, IBM Watsonx, Together AI, DeepInfra, Fireworks AI, Cohere, Perplexity AI, FriendliAI, Replicate
- Enhanced support for Ollama and LM Studio

#### Model Support
We want Roo to work as well on as many models as possible, including local models:

- Local model support through custom system prompting and workflows
- Benchmarking evals and test cases

#### System Support
We want Roo to run well on everyone's computer:

- Cross platform terminal integration
- Strong and consistent support for Mac, Windows, and Linux

#### Documentation
We want comprehensive, accessible documentation for all users and contributors:

- Expanded user guides and tutorials
- Clear API documentation
- Better contributor guidance
- Multilingual documentation resources
- Interactive examples and code samples

#### Stability
We want to significantly decrease the number of bugs and increase automated testing:

- Debug logging switch
- "Machine/Task Information" copy button for sending in with bug/support requests

#### Internationalization
We want Roo to speak everyone's language:

- 我们希望 Roo Code 说每个人的语言
- Queremos que Roo Code hable el idioma de todos
- हम चाहते हैं कि Roo Code हर किसी की भाषा बोले
- نريد أن يتحدث Roo Code لغة الجميع

We especially welcome contributions that advance our roadmap goals. If you're working on something that aligns with these pillars, please mention it in your PR description.

### 3. Join the Roo Code Community

Connecting with the Roo Code community is a great way to get started:

-   **Primary Method**:
    1.  Join the [Roo Code Discord community](https://discord.gg/roocode).
    2.  Once joined, send a direct message (DM) to **Hannes Rudolph** (Discord username: `hrudolph`) to discuss your interest and get guidance.
-   **Alternative for Experienced Contributors**: If you're comfortable with an issue-first approach, you can engage directly through GitHub by following the Kanban board and communicating via issues and pull requests.

## II. Finding & Planning Your Contribution

Identify what you'd like to work on and how to approach it.

### 1. Types of Contributions

We welcome various contributions:

-   **Bug Fixes**: Addressing issues in existing code.
-   **New Features**: Adding new functionality.
-   **Documentation**: Improving guides, examples, or fixing typos.

### 2. Key Principle: Issue-First Approach

**All contributions must start with a GitHub Issue.** This is a critical step to ensure alignment and prevent wasted effort.

-   **Find or Create an Issue**:
    -   Before starting any work, search [GitHub Issues](https://github.com/RooVetGit/Roo-Code/issues) to see if an issue for your intended contribution already exists.
    -   If it exists and is unassigned, comment on the issue to express your interest in taking it on. A maintainer will then assign it to you.
    -   If no issue exists, create a new one, detailing the bug or feature. For new features, await approval from a maintainer (especially @hannesrudolph) before proceeding.
-   **Claiming and Assignment**:
    -   Clearly state your intention to work on an issue by commenting on it.
    -   Wait for a maintainer to officially assign the issue to you in GitHub. This prevents multiple people from working on the same thing.
-   **Consequences of Not Following**:
    -   Pull Requests (PRs) submitted without a corresponding, pre-approved, and assigned issue may be closed without a full review. This policy is in place to ensure contributions align with project priorities and to respect the time of both contributors and maintainers.

This approach helps us track work, ensure changes are desired, and coordinate efforts effectively.

### 3. Deciding What to Work On

-   **Good First Issues**: Check the "Issue [Unassigned]" section of our [Roo Code Issues](https://github.com/orgs/RooVetGit/projects/1) GitHub Project.
-   **Documentation**: Contribute to our [docs](https://docs.roocode.com/) via the "Edit this page" link or the [Roo Code Docs repository](https://github.com/RooVetGit/Roo-Code-Docs).
-   **Proposing New Features**: For significant features, create a [feature request](https://github.com/RooVetGit/Roo-Code/discussions/categories/feature-requests?discussions_q=is%3Aopen+category%3A%22Feature+Requests%22+sort%3Atop) for discussion before implementation. This aligns with our **Issue-First Approach** detailed in the PR Policy.

### 3. Reporting Bugs or Issues

If you find a bug:

1.  **Search Existing Issues**: Check [GitHub Issues](https://github.com/RooVetGit/Roo-Code/issues) for duplicates.
2.  **Create a New Issue**: If unique, use the template on our [issues page](https://github.com/RooVetGit/Roo-Code/issues/new/choose).

> 🔐 **Security Vulnerabilities**: Report privately using GitHub's security tool.

## III. Development & Submission Process

Follow these steps for coding and submitting your work.

### 1. Development Setup

1.  **Clone**: `git clone https://github.com/RooVetGit/Roo-Code.git`
2.  **Install Dependencies**: `npm run install:all`
3.  **Run Webview (Dev Mode)**: `npm run dev` (for Vite/React app with HMR)
4.  **Debug Extension**: Press `F5` in VS Code.

Webview changes are immediate; extension changes require an extension host restart.
Alternatively, build and install a `.vsix`:
```sh
npm run build
code --install-extension bin/roo-cline-.vsix
```

### 2. Writing Code Guidelines

-   **Focused PRs**: One feature/bug fix per PR.
-   **Code Quality**: Pass CI (linting, formatting). Address ESLint issues. Respond to Ellipsis feedback. Follow TypeScript best practices.
-   **Testing**: Add tests for new features. Run `npm test`. Update existing tests.
-   **Commit Messages**: Clear, descriptive, reference issues (`#issue-number`).
-   **Pre-Submission Checklist**: Rebase on `main`, ensure build success, all tests pass, remove debug code.

### 3. Submitting Code: Pull Request (PR) Process

#### Draft Pull Requests

Use Draft PRs for work that is not yet ready for full review but for which you'd like to:
-   Run automated checks (CI).
-   Get early feedback from maintainers or other contributors.
-   Signal that the work is in progress.

Mark a PR as "Ready for Review" only when all checks are passing and you believe it meets the criteria outlined in the "Writing Code Guidelines" and "Pull Request Description" sections.

#### Pull Request Description

Your PR description must be comprehensive:
-   Clearly describe the changes made and their purpose.
-   Include detailed steps to test the changes.
-   List any breaking changes.
-   **For UI changes, provide clear before-and-after screenshots or videos.**
-   **Crucially, state whether your PR necessitates updates to user-facing documentation. If so, specify which documents or sections are affected.**

#### Pull Request (PR) Policy

##### Objective
Maintain a clean, focused, and actionable PR backlog.

##### Issue-First Approach
-   **Required**: Before starting work, create or reference an existing, approved issue. (See "Key Principle: Issue-First Approach" under "II. Finding & Planning Your Contribution" for full details).
-   **Approval**: Issues, especially for new features or significant changes, must be reviewed and approved by maintainers (particularly @hannesrudolph) *before* coding begins.
-   **Reference**: PRs must explicitly reference these pre-approved issues.
-   **Consequences**: Failure to follow this process may result in your PR being closed without a full review.

##### Conditions for Open PRs
-   **Ready for Merge**: Passes tests, aligns with roadmap, approved, clear docs/comments, **includes clear before-and-after images or videos for any UI changes**, references an approved issue.
-   **To be Closed**: Unresolved issues (test failures, conflicts), misaligned with goals, stale (inactive >30 days).

##### Procedure
1.  **Issue Qualification**: @hannesrudolph reviews new and existing issues to ensure they align with the project and follow the "Issue-First Approach." This step helps qualify issues before they are considered for PR submission.
2.  **Initial PR Triage (Daily)**: Maintainers (Dev Team) conduct a quick daily review of incoming PRs to filter for urgency or critical issues.
3.  **Thorough PR Review (Weekly - Mondays)**: Maintainers (Dev Team) perform a more in-depth review of PRs to assess readiness, alignment with an approved issue, and overall quality.
4.  **Detailed Feedback & Iteration**: Based on the thorough review, maintainers provide feedback (Approve, Request Changes, or Reject). Contributors are expected to respond to feedback and iterate as needed.
5.  **Decision Stage**: Approved PRs are merged. PRs with unresolvable issues or misalignment may be closed with a clear explanation.
6.  **Follow-up**: Authors of closed PRs are encouraged to open new ones if issues are resolved or project direction shifts.

##### Responsibilities
-   **Issue Qualification & Process Adherence (@hannesrudolph)**: Ensures all contributions adhere to the "Issue-First Approach" by reviewing and qualifying issues. Guides contributors on process.
-   **Maintainers (Dev Team)**: Conduct initial and thorough PR reviews, provide technical feedback, make approval/rejection decisions, and merge PRs.
-   **Contributors**: Ensure PRs are linked to an approved and assigned issue, meet quality guidelines, and respond promptly to feedback.

This policy ensures clarity and efficient integration.

## IV. Legal

### Contribution Agreement

By submitting a pull request, you agree that your contributions will be licensed under the [Apache 2.0 License](https://github.com/RooVetGit/Roo-Code/blob/main/LICENSE), the same as the project.