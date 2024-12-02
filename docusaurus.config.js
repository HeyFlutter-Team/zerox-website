// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ZeroX',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production URL of your site here
  url: 'https://github.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/zerox-website/',

  // GitHub pages deployment config.
  organizationName: 'HeyFlutter-Team', // Usually your GitHub org/user name.
  projectName: 'zerox-website', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/', // Serve the documentation at the site's root
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark', // Set the default theme to dark
        disableSwitch: false, // Allow users to switch between light and dark modes
        respectPrefersColorScheme: false, // Ignore the user's system color scheme preference
      },
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'ZeroX doc',
        logo: {
          alt: 'ZeroX Logo',
          src: 'img/logo_light.png',
          srcDark: 'img/logo_dark.png',
        },
        items: [
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark', // Ensure the footer remains in dark mode
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Introduction',
                to: '/intro', // Ensure this matches the path of your intro page
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} HeyFlutter-Team. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
