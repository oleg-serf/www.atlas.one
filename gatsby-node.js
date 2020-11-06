const PATH = require("path")

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const ResourceTemplate = PATH.resolve("./src/templates/Resource/index.js")

  const Resources = await graphql(`
    query {
      allContentfulResource {
        edges {
          node {
            slug
            formId
            title {
              title
            }
            subtitle {
              subtitle
            }
            description {
              json
            }
            image {
              file {
                url
              }
            }
            overviewImage {
              file {
                url
              }
            }
            buttonText
          }
        }
      }
    }
  `)

  // Creating dynamic pages for footer navigation topics
  const { edges } = Resources.data.allContentfulResource

  edges.forEach(({ node }, index) => {
    createPage({
      component: ResourceTemplate,
      path: `/resource/${node.slug}`,
      context: {
        pageResource: node,
        formId: node.formId,
      },
    })
  })
}
