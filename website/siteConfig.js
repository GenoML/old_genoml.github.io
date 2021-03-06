/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'National Institutes of Health (NIH)',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/users/nih.png',
    infoLink: 'https://nih.gov',
    pinned: true,
  },
  {
    caption: 'International Parkinson Disease Genomics Consortium (IPDGC)',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/users/IDPGC-logo-01.jpg',
    infoLink: 'https://pdgenetics.org',
    pinned: true,
  },
];

const siteConfig = {
  title: 'GenoML', // Title for your website.
  tagline: ' Automated Machine Learning (AutoML) for Genomics',
  url: 'https://genoml.github.io', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'genoml.github.io',
  organizationName: 'GenoML',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'introduction', label: 'About'},
    {doc: 'quick-start', label: 'Getting Started'},
    {doc: 'contribute', label: 'Contribute'},
    {href: 'https://github.com/GenoML', label: 'GitHub' },
    // {blog: true, label: 'Blog'},
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/dna.png',
  footerIcon: 'img/dna.png',
  favicon: 'img/favicon.png',

  /* Colors for website */
  colors: {
    // primaryColor: '#2E8555',
    // secondaryColor: '#205C3B',
    primaryColor: '#121020',
    secondaryColor: '#121020',
    accentColor: '#785BA3',
    actionColor: '#008cf2',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} GenoML`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],
  
  // Google Analytics
  gaTrackingId: 'UA-134657372-1',

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/docusaurus.png',
  twitterImage: 'img/docusaurus.png',

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: 'https://github.com/GenoML/genoml',
};

module.exports = siteConfig;
