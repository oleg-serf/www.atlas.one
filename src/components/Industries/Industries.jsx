import React from "react"
import { RiGovernmentFill } from "react-icons/ri"
import { graphql, useStaticQuery } from "gatsby"

export default function Industries() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulIndustries {
        edges {
          node {
            title
            subTitle
            images {
              file {
                url
              }
            }
            description {
              description
            }
            industries {
              title
              iconBg
              description
            }
          }
        }
      }
    }
  `)

  return (
    <div className="p-5 py-10 bg-gray-100">
      <div className="container max-w-6xl m-auto">
        <h2 className="font-bold text-blue-500 block uppercase">
          {data.allContentfulIndustries.edges[0].node.title}
        </h2>

        <h2 className="font-bold text-45xl">
          {data.allContentfulIndustries.edges[0].node.subTitle}
        </h2>

        <span className="block text-18xl pt-5 max-w-2xl">
          {data.allContentfulIndustries.edges[0].node.description.description}
        </span>

        <div className="flex flex-wrap mt-20">
          <div className="w-full lg:w-1/3 md:w-2/4 sm:w-1/1 pb-4">
            {data.allContentfulIndustries.edges[0].node.industries.map(
              (v, i) => {
                if (i % 2 === 0) {
                  return (
                    <div className="shadow-base flex bg-white p-2 rounded mb-4">
                      <div
                        className="w-1/3 rounded mx-2 flex py-6"
                        style={{ backgroundColor: v.iconBg }}
                      >
                        <RiGovernmentFill
                          size={50}
                          className="m-auto"
                          color="#fff"
                        />
                      </div>
                      <div className="w-2/3">
                        <span className="font-bold text-18xl">{v.title}</span>
                        <span className="block">{v.description}</span>
                      </div>
                    </div>
                  )
                }
              }
            )}
          </div>
          <div className="w-full lg:w-1/3 md:w-2/4 sm:w-1/1 px-1">
            {data.allContentfulIndustries.edges[0].node.industries.map(
              (v, i) => {
                if (i % 2 === 1) {
                  return (
                    <div className="shadow-base flex bg-white p-2 rounded mb-4">
                      <div
                        className="w-1/3 rounded mx-2 flex py-6"
                        style={{ backgroundColor: v.iconBg }}
                      >
                        <RiGovernmentFill
                          size={50}
                          className="m-auto"
                          color="#fff"
                        />
                      </div>
                      <div className="w-2/3">
                        <span className="font-bold text-18xl">{v.title}</span>
                        <span className="block">{v.description}</span>
                      </div>
                    </div>
                  )
                }
              }
            )}
          </div>
          <div className="w-full lg:w-1/3 md:w-2/4 sm:w-1/1 pb-4 p-2">
            <img
              src={
                data.allContentfulIndustries.edges[0].node.images[0].file.url
              }
              alt="Altas Logo"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
