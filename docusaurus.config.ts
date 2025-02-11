import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Roo Code Docs',
  tagline: 'Roo Code Documentation',
  favicon: 'img/roo-code-logo-white.png',

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
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/roo-code-logo-white.png',
    navbar: {
      title: 'Roo Code Docs',
      logo: {
        alt: 'Roo Code Logo',
        src: 'img/roo-code-logo-white.png',
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
