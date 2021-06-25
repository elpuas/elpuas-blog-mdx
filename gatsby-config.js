const path = require('path')
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

// const KEY_UNPARSE = process.env.GATSBY_PRIVATE_KEY_SSH;

// if (KEY_UNPARSE) {
//   KEY_UNPARSE.replace(/\\n/gm, "\n");
// }

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
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyDefault: 'en',
        useLangKeyLayout: false
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
          private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCigmgNFWAGwQ/0\nZ0nOTdt4Uta+cctiD0E/f98UIdJf7p1Z/VZ3oneij1v/5Wp/LjGGZHhoSya0NN1k\nMD6RT/oOV6C5VzJ1pObQlWCpYZjROJGwWzZU02szKuhpqyHOcHNEASCflBTMPn1d\n/ABNNL5r4vBt6W0MRAc+hqoZ+jQ+ngxd3p3ttUJtfFn6+zUT6T/F+lynf/jYuNKO\nAWyi9A5fCszLA2Nb9o6+T2hSFjcVA9+WboTxZfwGae6C7ETnApIefUDUtvqslOR0\nZWbsIRN1O7QDhQHdlphFrMEudva8jWf8cgQXrXhTZQaYIABQdEpDnVzDx7dQ8Ehn\n/xl8Uj/TAgMBAAECggEABbMSKCdQQ1xhDV7UAVbMtDcfjfVavzkuviXjcobPJIsv\nXJkcf7ykeoCRpvNqXUSG+yIp8Op11IsoGpvwjdMiv38GRYnP3L1oVPdwOPCR1gCo\nZ2mDic0SbOx70zzrxhw+hquNc9tTMWidp/6vGgYYCZufeBNgPjZilKhPbfLPA0Uk\ncLmkYWyinIC/cu4Y2ZAFLvX0CnGsC+o35carBwflUWOy5V9p0bxDrrM0qea/rz+P\n6VFwaDiLkNmrJFEl2+OQYObwuKkJ+R2nOvSpdOxmHEUY1mxSiw2k22EpQeE2jv9L\nNjHz75X9TnjA4KQW5DFF5OSrMs75gFKI+7MP92+NoQKBgQDXfPOgMpPk0v/Zxu7Q\n1G1RNIflxhHUiPPfCO0ECmourqp7SsyPrf8B8DaC9XfwtbBYzBm/QDTgk4KQXeun\nvzGaFCasYircJcvDajGyR3NB7ZCNsLAXs7lG/wJpVVBkMxR0VLARyh2XKvBo3t8l\nL1KRVaHzMFEVmGxo802t87kdcwKBgQDBD6/k1LCJajhX67Q0ndW65C9cDNfzdo4B\n8Zv567CmWo70Gm/UnBToMaAC66LU72utc5XKky5Yt8OsHCvdP7cZg1BUOjef/Cm1\nxYzRJXJlJC+QoXIuyRzeOJL+kzWPOlsGFuS8ufCtmEV2+elPYCcdUUSFbD1LNBV2\n2MKb+5e8IQKBgQCJFOD66RHyQFQoWwfzax97yDonbsBK/zB8kvYMWv+/YLftJOFL\nCboupnxXBQbe5wYfBv/eDV9V+iDV7BmMpfFM/kK36N8xGw4r6zNgIVnt9828hUkQ\nWvGje3gyP+abR29crb8wIe5/Cv7TB+zWf+s7r0kOJo9+eG+GuDiTT3dUhwKBgAOG\nstK+I79OxlqsvmzbmSTBuC+5OFSFDNDyRcQJzv8q1kOVHAfJFgSrq12CSkYTXWcc\nnlbF22nZaWSCWza+TCzWHih7q7prU6OzSQAk6/L29ztwB3LdT36rj9vAepD0Iud4\nkZL03nV9O3+RzvYZLn21l0fMk04FVIMIMH3C2aGhAoGAIWPNAm2CW9oJQpGRtmOj\n1rfMnBLnGCGvZd9lOAuaVcPLO++6YcgJ/vLmDwfexvk+fi7+m3DDRSiLOG+CDD7T\nWXIlrCW8vFvPbBwumTaYd1G03wMS6loPWwStl70seuz9LYV12/svKSTMWaao9soE\nYAwopkDpi09N9DQ+WUugnOI=\n-----END PRIVATE KEY-----\n",
          client_email: process.env.GATSBY_CLIENT_EMAIL,
          client_id: process.env.GATSBY_CLIENT_ID,
          auth_uri: 'https://accounts.google.com/o/oauth2/auth',
          token_uri: 'https://oauth2.googleapis.com/token',
          auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
          client_x509_cert_url: `https://www.googleapis.com/robot/v1/metadata/x509/gatsby-blog-db-606%40${process.env.GATSBY_PROJECT_ID}.iam.gserviceaccount.com`,
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
