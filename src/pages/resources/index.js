import React from "react"
import { graphql } from "gatsby"
import { Layout, GetStart, Resources } from "../../components"
import SectionHeading from "../../components/SectionHeading"
import "./index.scss"

const ResourcesPage = ({ data }) => {
  const {
    resourcesPageTitle,
    resourcesPageSubtite,
    resourcesPageFeatured,
  } = data?.allContentfulResources?.edges?.[0]?.node

  return (
    <Layout isTransparentHeader={false}>
      <div className="flex items-center resourcespage-main">
        <div className="px-5 max-w-6xl mx-auto w-full mt-20">
          <div className="w-full py-12">
            <SectionHeading
              isHero
              data={{
                title: resourcesPageTitle,
                description: resourcesPageSubtite,
                featuredSubtitle: resourcesPageFeatured,
              }}
            />
          </div>
        </div>
      </div>
      <Resources showHeroes />
      <GetStart />
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulResources {
      edges {
        node {
          resourcesPageTitle
          resourcesPageSubtite
          resourcesPageFeatured
        }
      }
    }
    allContentfulResource {
      edges {
        node {
          slug
          featured
          title {
            title
          }
          subtitle {
            subtitle
          }
          buttonText
          description {
            description
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
        }
      }
    }
  }
`

export default ResourcesPage