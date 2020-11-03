import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { BsArrowRight } from "react-icons/bs"
import "./resources.scss"

export default function Resources() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulResources {
        edges {
          node {
            title
            subtitle
            featuredSubtitle
            description
            resources {
              description
              buttonText
            }
            images {
              fixed {
                srcSet
              }
            }
          }
        }
      }
    }
  `)

  const componentData = data.allContentfulResources.edges[0].node

  return (
    <div className="px-5 py-24 resources-main" id="resources">
      <div className="container m-auto max-w-6xl ">
        <h2 className="text-blue uppercase pl-2 tracking-title text-sm">
          {componentData.title}
        </h2>
        <h2 className="pl-2 lg:text-45xl text-25xl sub-title font-bold">
          {componentData.subtitle}{" "}
          <h2 className="inline-block text-blue">
            {componentData.featuredSubtitle}
          </h2>
        </h2>

        <span className="block font-medium text-xl pt-5 max-w-2xl pl-2 md:text-base">
          {componentData.description}
        </span>

        <div className="flex flex-wrap mt-10">
          {componentData.resources.map((v, i) => (
            <div className="w-full lg:w-1/3 md:w-2/4 sm:w-1/1" key={i}>
              <div className="w-full h-full p-5">
                <div className="bg-white resource-box rounded-xl">
                  <div className="pb-5">
                    <img
                      srcSet={componentData.images[i].fixed.srcSet}
                      alt="Altas Logo"
                      className="w-full"
                    />
                  </div>
                  <div className="p-4">
                    <button className="bg-ebook text-blue bg-blue-200 font-medim py-1 px-3 border rounded-sm">
                      {v.buttonText}
                    </button>

                    <h2 className="block font-bold py-3 text-xl resource-description">
                      {v.description}
                    </h2>

                    <button className="flex py-5 focus:outline-none">
                      <span className="font-bold text-lightblue pr-1 ">Explore </span>
                      <BsArrowRight size={28} color="#1F76FF" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
