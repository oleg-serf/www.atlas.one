import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import SectionHeading from "../SectionHeading"
import ResourceCard from "../ResourceCard"
import Hero from "../Hero"
import "./resources.scss"

export default function Resources({
  data: parentData,
  showTitle = false,
  showThree = false,
  showHeroes = false,
}) {
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
      allContentfulResource(sort: { fields: rank }) {
        edges {
          node {
            rank
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

  return (
    <div className={`${!showHeroes ? "py-24" : "pb-24"} px-5 resources-main`} id={parentData ? "#" : "resources"}>
      <div className="container m-auto max-w-6xl">
        {showTitle && (
          <React.Fragment>
            <SectionHeading
              data={{
                title: parentData?.mainHeading ?? componentData.title,
                description: componentData.subtitle,
                featuredSubtitle: componentData.featuredSubtitle,
              }}
            />
            <span className="block font-medium text-xl pt-5 max-w-2xl md:text-base">
              {componentData.description}
            </span>
          </React.Fragment>
        )}

        <div className="flex flex-wrap py-8 lg:-mx-3">
          {(!showThree ? allResources : allResources?.slice(0, 3)).map(({ node }, i) => 
            (showHeroes && i % 4 === 0) ? (
              <Link to={`/resources/${node.slug}`} key={i}>
                <Hero data={node} />
              </Link>
            ) : (
              <Link
                to={`/resources/${node.slug}`}
                className="w-full lg:w-1/3 md:w-2/4 sm:w-1/1 h-full"
                key={i}
              >
                <ResourceCard data={node} />
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  )
}
