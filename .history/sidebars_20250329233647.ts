import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'index',
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/installing',
        'getting-started/connecting-api-provider',
        'getting-started/your-first-task',
        'basic-usage/the-chat-interface',
        'basic-usage/typing-your-requests',
        'basic-usage/how-tools-work',
        'basic-usage/context-mentions',
        'basic-usage/using-modes',
        'tips-and-tricks',
      ],
    },
    {
      type: 'category',
      label: 'Features',
      items: [
        'features/api-configuration-profiles',
        'features/auto-approving-actions',
        'features/boomerang-tasks',
        'features/browser-use',
        'features/checkpoints',
        'features/code-actions',
        'features/custom-instructions',
        'features/custom-modes',
        'features/enhance-prompt',
        'features/model-temperature',
        {
          type: 'category',
          label: 'Tool Use',
          items: [
            'features/tools/tool-use-overview',
            'features/tools/read-file',
            'features/tools/search-files',
            'features/tools/list-files',
            'features/tools/list-code-definition-names',
            'features/tools/apply-diff',
            'features/tools/write-to-file',
            'features/tools/execute-command',
            'features/tools/browser-action',
            'features/tools/ask-followup-question',
            'features/tools/attempt-completion',
            'features/tools/switch-mode',
            'features/tools/new-task',
            'features/tools/use-mcp-tool',
            'features/tools/access-mcp-resource',
          ],
        },
        {
          type: 'category',
          label: 'MCP',
          items: [
            {
              type: 'doc',
              id: 'features/mcp/overview',
              label: 'MCP Overview'
            },
            'features/mcp/using-mcp-in-roo',
            'features/mcp/what-is-mcp',
            'features/mcp/server-transports',
            'features/mcp/mcp-vs-api',
          ],
        },
        {
          type: 'category',
          label: 'Experimental',
          items: [
            'features/experimental/experimental-features',
          ],
        },
        'features/more-features'
      ],
    },
    {
      type: 'category',
      label: 'Advanced Usage',
      items: [
        'advanced-usage/prompt-engineering',
        'advanced-usage/large-projects',
        'advanced-usage/rate-limits-costs',
        'advanced-usage/local-models',
      ],
    },
    {
      type: 'category',
      label: 'Model Providers',
      items: [
        'providers/anthropic',
        'providers/bedrock',
        'providers/deepseek',
        'providers/vertex',
        'providers/gemini',
        'providers/glama',
        'providers/human-relay',
        'providers/lmstudio',
        'providers/mistral',
        'providers/ollama',
        'providers/openai',
        'providers/openai-compatible',
        'providers/openrouter',
        'providers/requesty',
        'providers/unbound',
        'providers/vscode-lm',
      ]
    },
    {
      type: 'category',
      label: 'FAQ',
      items: [
        'faq',
      ],
    },
    'tutorial-videos',
    {
      type: 'category',
      label: 'Community',
      items: [
        'community',
      ],
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      items: [
        'troubleshooting/shell-integration',
      ],
    },
  ],
};

export default sidebars;
