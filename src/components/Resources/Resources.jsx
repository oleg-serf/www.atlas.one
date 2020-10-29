import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { BsArrowRight } from "react-icons/bs"
import BlogImage from "./../../images/blog.png"

export default function Resources() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulResources {
        edges {
          node {
            title
            subtitle
            description
            resources {
              description
              buttonText
            }
          }
        }
      }
    }
  `)

  const componentData = data.allContentfulResources.edges[0].node

  return (
    <div className="px-5 py-24 bg-industry" id="resources">
      <div className="container m-auto max-w-6xl ">
        <h2 className="text-blue-500 pl-2">
          {componentData.title}
        </h2>
        <h2 className="font-bold text-4xl pl-2">
          {componentData.subtitle}
        </h2>
        <span className="block text-xl pt-5 max-w-2xl pl-2">
          {componentData.description}
        </span>

        <div className="flex flex-wrap mt-10">
          {componentData.resources.map((v, i) => (
            <div className="w-full  lg:w-1/3 md:w-2/4  sm:w-1/1  pb-4">
              <div className="w-full h-full p-2">
                <div className="bg-white rounded-xl">
                  <div className="pb-5">
                    <img
                      src={BlogImage}
                      alt="Altas Logo"
                      className="w-full"
                    />
                  </div>
                  <div className="px-2">
                    <button className="bg-transparent hover:bg-blue-500 text-blue-500 bg-blue-200 font-semibold hover:text-white py-2 px-8 border hover:border-transparent">
                      {v.buttonText}
                    </button>

                    <span className="block font-bold py-3 text-2xl">
                      {v.description}
                    </span>

                    <div className="flex py-5">
                      <span className="font-bold text-blue-500 pr-1">Explore</span>{" "}
                      <BsArrowRight size={28} color="#19B5FE" />
                    </div>
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
