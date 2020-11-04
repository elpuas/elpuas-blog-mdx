const path = require('path')

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
        name: 'gatsby-default-mdx-basic',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
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
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
