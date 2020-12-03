const resolveConfig = require("tailwindcss/resolveConfig")
const tailwindConfig = require("./tailwind.config.js")

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const { theme } = resolveConfig(tailwindConfig)

module.exports = {
  siteMetadata: {
    title: "Atlas One",
    author: "Oleg Pristaskin",
    description: "A Gatsby starter to set you up with Tailwind CSS",
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `hv5gzgthqwih`,
        accessToken: `Vr1qT4pl8A_G251KjAIFftTuz1UwyQAjMs7wroaDx0Q`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [require("tailwindcss"), require("autoprefixer")],
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -70,
        duration: 100,
      },
    },
    {
      resolve: "gatsby-source-hubspot-forms",
      options: {
        apiKey: process.env.GATSBY_HUBSPOT_API_KEY,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GATSBY_GOOGLE_ANALYTICS_ID,
        head: true,
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: process.env.GATSBY_GOOGLE_ANALYTICS_ID,
      },
    },
    {
      resolve: "gatsby-plugin-hubspot",
      options: {
        trackingCode: process.env.GATSBY_HUBSPOT_TRACKING_CODE,
        respectDNT: true,
        productionOnly: true,
      },
    },
  ],
}
