import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Roo Code Docs',
  tagline: 'Roo Code Documentation',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.roocode.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'RooVetGit', // Usually your GitHub org/user name.
  projectName: 'Roo-Code-Docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          editUrl: 'https://github.com/RooVetGit/Roo-Code-Docs/edit/main/',
          showLastUpdateTime: true,
        },
        blog: false, // Disable blog feature
        sitemap: {
          lastmod: 'date',
          priority: null,
          changefreq: null,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["en"],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        docsRouteBasePath: "/",
      },
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          // Files moved from advanced-usage to features
          {
            to: '/features/checkpoints',
            from: ['/advanced-usage/checkpoints'],
          },
          {
            to: '/features/code-actions',
            from: ['/advanced-usage/code-actions'],
          },
          {
            to: '/features/custom-instructions',
            from: ['/advanced-usage/custom-instructions'],
          },
          {
            to: '/features/custom-modes',
            from: ['/advanced-usage/custom-modes'],
          },
          {
            to: '/features/enhance-prompt',
            from: ['/advanced-usage/enhance-prompt'],
          },
          {
            to: '/features/experimental/experimental-features',
            from: ['/advanced-usage/experimental-features'],
          },
          {
            to: '/features/model-temperature',
            from: ['/advanced-usage/model-temperature'],
          },
          {
            to: '/features/tool-reference',
            from: ['/advanced-usage/tool-reference'],
          },
          {
            to: '/features/auto-approving-actions',
            from: ['/advanced-usage/auto-approving-actions'],
          },
          {
            to: '/features/api-configuration-profiles',
            from: ['/advanced-usage/api-configuration-profiles'],
          },
          
          // MCP related redirects
          {
            to: '/features/mcp/overview',
            from: ['/advanced-usage/mcp', '/mcp/overview'],
          },
          {
            to: '/features/mcp/using-mcp-in-roo',
            from: ['/mcp/using-mcp-in-roo'],
          },
          {
            to: '/features/mcp/what-is-mcp',
            from: ['/mcp/what-is-mcp'],
          },
          {
            to: '/features/mcp/server-transports',
            from: ['/mcp/server-transports'],
          },
          {
            to: '/features/mcp/mcp-vs-api',
            from: ['/mcp/mcp-vs-api'],
          },
        ],
      },
    ],
  ],

  themeConfig: {
    image: 'img/roo-code-logo-white.png',
    navbar: {
      logo: {
        alt: 'Roo Code Logo',
        src: 'img/roo-code-logo-white.png',
        srcDark: 'img/roo-code-logo-dark.png',
      },
      items: [
        {
          href: 'https://github.com/RooVetGit/Roo-Code',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://marketplace.visualstudio.com/items?itemName=RooVeterinaryInc.roo-cline',
          label: 'Install Extension',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/roocode',
            },
            {
              label: 'Reddit',
              href: 'https://www.reddit.com/r/RooCode/',
            },
            {
              label: 'Twitter',
              href: 'https://x.com/roo_code',
            },
          ],
        },
        {
          title: 'GitHub',
          items: [
            {
              label: 'Issues',
              href: 'https://github.com/RooVetGit/Roo-Code/issues',
            },
            {
              label: 'Feature Requests',
              href: 'https://github.com/RooVetGit/Roo-Code/discussions/categories/feature-requests?discussions_q=is%3Aopen+category%3A%22Feature+Requests%22+sort%3Atop',
            },
          ],
        },
        {
          title: 'Download',
          items: [
            {
              label: 'VS Code Marketplace',
              href: 'https://marketplace.visualstudio.com/items?itemName=RooVeterinaryInc.roo-cline',
            },
            {
              label: 'Open VSX Registry',
              href: 'https://open-vsx.org/extension/RooVeterinaryInc/roo-cline',
            },
          ],
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
