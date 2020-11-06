import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { BsArrowRight } from "react-icons/bs"
import SectionHeading from "../SectionHeading"
import { useWindowSize } from "../../hooks/getwidth"
import "./resources.scss"

export default function Resources({ data: parentData }) {
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
          }
        }
      }
    }
  `)

  const componentData = data.allContentfulResources.edges[0].node
  const allResources = data.allContentfulResource.edges
  const windowSize = useWindowSize()

  return (
    <div className="px-5 py-24 resources-main" id="resources">
      <div className="container m-auto max-w-6xl">
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
          {allResources.map(
            ({ node: { slug, overviewImage, buttonText, title } }, i) => (
              <Link
                to={`/resource/${slug}`}
                className="w-full lg:w-1/3 md:w-2/4 sm:w-1/1 h-full"
                key={i}
              >
                <div className="w-full h-full p-5">
                  <div className="bg-white resource-box rounded-xl">
                    <div>
                      <img
                        src={`${overviewImage.file?.url}?w=${windowSize.width||1000}`}
                        alt="Altas Logo"
                        className="w-full"
                      />
                    </div>
                    <div className="p-4 white-content">
                      <button className="bg-ebook text-blue bg-blue-200 font-medim py-1 px-3 border-none rounded-sm">
                        {buttonText}
                      </button>                      
                      <h2 className="block font-bold py-3 text-xl resource-description">
                        {title.title}
                      </h2>
                      <button className="flex items-center py-5 outline-none">
                        <span className="font-bold text-lightblue pr-1">Explore </span>
                        <BsArrowRight size={20} color="#1F76FF" />
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  )
}
