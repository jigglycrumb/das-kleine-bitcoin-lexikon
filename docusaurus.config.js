// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Das kleine Bitcoin Lexikon",
  tagline: "Bitcoin von A bis Z",
  url: "http://bitcoin-lexikon.org",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/bitcoin.ico",
  organizationName: "hpcodecraft", // Usually your GitHub org/user name.
  projectName: "das-kleine-bitcoin-lexikon", // Usually your repo name.
  trailingSlash: false,

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/", // Serve the docs at the site's root
          sidebarPath: require.resolve("./sidebars.js"),
          sidebarCollapsible: false,
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Startseite",
        logo: {
          alt: "My Site Logo",
          src: "img/bitcoin.svg",
        },
        items: [
          {
            type: "doc",
            docId: "willkommen",
            position: "left",
            label: "Lexikon",
          },
          {
            href: "https://github.com/hpcodecraft/das-kleine-bitcoin-lexikon",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
