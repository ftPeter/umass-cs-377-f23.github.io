// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "COMPSCI 377",
  tagline: "Operating Systems",
  url: "https://umass-cs-377.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  trailingSlash: true,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "umass-cs-377", // Usually your GitHub org/user name.
  projectName: "umass-cs-377.github.io", // Usually your repo name.
  deploymentBranch: "gh-pages",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],

  plugins: [
    require.resolve("docusaurus-lunr-search"),
    "./src/plugins/webpack_mod",
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        // lectures: {
        //   routeBasePath: '/lectures', // Serve the docs at the site's root
        //   /* other docs plugin options */
        // },
        blog: {
          showReadingTime: true,
          blogTitle: "Announcements",
          blogDescription: "Announcements",
          blogSidebarTitle: "Recent Announcements",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: "Home",
        // logo: {
        //   alt: 'My Site Logo',
        //   src: 'img/logo.svg',
        // },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Information',
          // },
          // { to: '/docs/intro', label: 'Boo', position: 'left' },
          { to: "/blog", label: "Announcements", position: "left" },
          { to: "docs/intro", label: "Material", position: "left" },
          {
            to: "docs/information/syllabus",
            label: "Syllabus",
            position: "left",
          },
          {
            to: "docs/information/schedule",
            label: "Schedule",
            position: "left",
          },
          {
            to: "docs/lectures",
            label: "Lectures",
            position: "left",
          },
          {
            to: "docs/information/office-hours",
            label: "Office Hours",
            position: "left",
          },
          // { type: 'doc', docId: 'index', to: '/lectures', label: 'Lectures', position: 'left' },
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Material",
            items: [
              {
                label: "Syllabus",
                to: "docs/information/syllabus",
              },
              {
                label: "Schedule",
                to: "docs/information/schedule",
              },
              {
                label: "Lectures",
                to: "docs/lectures",
              },
            ],
          },
          {
            title: "Assignments",
            items: [
              {
                label: "Projects",
                to: "docs/information/schedule/#projects",
              },
              {
                label: "Quizzes",
                to: "docs/information/schedule/#quizzes",
              },
              {
                label: "Final Project",
                to: "docs/information/schedule/#final_project",
              },
            ],
          },
          {
            title: "Learning Systems",
            items: [
              {
                label: "Moodle",
                href: "https://umass.moonami.com",
              },
              {
                label: "Piazza",
                href: "https://piazza.com",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} COMPSCI 377`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
