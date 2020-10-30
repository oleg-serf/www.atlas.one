const resolveConfig = require("tailwindcss/resolveConfig")
const tailwindConfig = require("./tailwind.config.js")

const { theme } = resolveConfig(tailwindConfig)

module.exports = {
  siteMetadata: {
    title: "Atlas One",
    author: "Melanie Nolan",
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
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Gatsby Starter Tailwind CSS",
        short_name: "Gatsby Starter Tailwind CSS",
        start_url: "/",
        background_color: theme.colors.white,
        theme_color: theme.colors.teal[500],
        icon: "static/icon.svg",
      },
    },    
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [require("tailwindcss"), require("autoprefixer")],
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100
      }
    }
  ],
}
