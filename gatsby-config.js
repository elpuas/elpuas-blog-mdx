const path = require('path')
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'ElPuas | Web Artisan',
    description:
      'Blog of Alfredo Navas.',
    author: '@3lpu4s',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        defaultLayouts: {
          posts: require.resolve("./src/components/blog-post-layout.js"),
          default: require.resolve("./src/components/blog-post-layout.js"),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-highlight-code`,
            options: {
              terminal: 'carbon',
              theme: 'blackboard'
            },
          },
        ],
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/pages/blog`
      }
    },
    {
      resolve: 'gatsby-source-google-spreadsheets',
      options: {
        spreadsheetId: process.env.GATSBY_SPREADSHEET_ID,
        credentials: {
          type: 'service_account',
          project_id: process.env.GATSBY_PROJECT_ID,
          private_key_id: process.env.GATSBY_PRIVATE_KEY_ID,
          private_key: process.env.GATSBY_PRIVATE_KEY,
          client_email: process.env.GATSBY_CLIENT_EMAIL,
          client_id: '',
          auth_uri: 'https://accounts.google.com/o/oauth2/auth',
          token_uri: 'https://oauth2.googleapis.com/token',
          auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
          client_x509_cert_url: `https://www.googleapis.com/robot/v1/metadata/x509/${process.env.GATSBY_PROJECT_ID}%40appspot.gserviceaccount.com`,
        },
      }
    },
    'gatsby-plugin-dark-mode',
    'gatsby-plugin-transition-link',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'el-puas-blog',
        short_name: 'el-puas',
        start_url: '/',
        background_color: '#000729',
        theme_color: '#000729',
        display: 'minimal-ui',
        icon: "src/images/skull-icon.png",
        icons: [
          {
            "src": "src/images/skull-icon.png",
            "sizes": "196x196",
            "type": "image/png",
            "purpose": "any maskable"
          }
        ] // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-load-script',
      options: {
        src: 'https://cdn.rawgit.com/progers/pathseg/master/pathseg.js',
      }
    },
    {
    resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Heebo\:700, 800, 900`,
        ],
        display: 'swap'
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
  ],
}
