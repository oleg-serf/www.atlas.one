import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
// import { BsArrowRight } from "react-icons/bs"
import SectionHeading from "../SectionHeading"
import ResourceCard from "../ResourceCard"
// import { useWindowSize } from "../../hooks/getwidth"
import "./resources.scss"

export default function Resources({ data: parentData }) {
  console.log(parentData, "resource");
  const data = useStaticQuery(graphql`
    query {
      allContentfulResources {
        edges {
          node {
            title
            subtitle
            featuredSubtitle
            description
          }
        }
      }
      allContentfulResource {
        edges {
          node {
            slug
            title {
              title
            }
            subtitle {
              subtitle
            }
            buttonText

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
            type {
              types
            }
          }
        }
      }
    }
  `)

  const componentData = data.allContentfulResources.edges[0].node
  const allResources = data.allContentfulResource.edges
  // const windowSize = useWindowSize()

  return (
    <div className="py-24 resources-main">
      <div className="container px-5 m-auto max-w-6xl">
        <SectionHeading
          data={{
            title: componentData.title,
            description: componentData.subtitle,
            featuredSubtitle: componentData.featuredSubtitle,
          }}
        />

        <span className="block font-medium text-xl pt-5 max-w-2xl pl-2 md:text-base">
          {componentData.description}
        </span>

        <div className="flex flex-wrap mt-10">
        {allResources.map(({ node }, i) => (
            <Link
              to={`/resource/${node.slug}`}
              className="w-full lg:w-1/3 md:w-2/4 sm:w-1/1 h-full"
              key={i}
            >
              <ResourceCard data={node} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
