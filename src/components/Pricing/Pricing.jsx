import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { AiFillCheckCircle } from "react-icons/ai"

export default function Pricing() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPricing {
        edges {
          node {
            title
            subtitle
            packages {
              title
              properties
              buttonText
              borderColor
              bg
              color
            }
          }
        }
      }
    }
  `)

  const componentData = data.allContentfulPricing.edges[0].node
  
  return (
    <div className="p-5 py-10 bg-gray-200" id="pricing">
      <div className="container max-w-6xl m-auto">
        <div className="text-center">
          <h2 className="text-blue-500 block uppercase">
            {componentData.title}
          </h2>
          <h2 className="font-bold text-4xl">
            {componentData.subtitle}
          </h2>
        </div>

        <div className="flex flex-wrap  mt-20">
          {componentData.packages.map((v, i) => (
            <div className="w-full  lg:w-1/3 md:w-2/4  sm:w-1/1  pb-4 p-1">
              <div className="bg-white w-full h-full rounded p-5">
                <span className="block text-3xl font-bold py-3">
                  {v.title}
                </span>

                {v.properties.map((v, i) => (
                  <div className="flex py-2">
                    <AiFillCheckCircle size={40} color="#19B5FE" />
                    <span className="text-1xl  pt-2 pl-1">{v}</span>
                  </div>
                ))}

                <button
                  style={{
                    backgroundColor: v.bg,
                    color: v.color,
                    borderColor: v.borderColor,
                  }}
                  className="bg-transparent hover:bg-blue-500 font-semibold  py-3 px-8 border border-blue-500 hover:border-transparent"
                >
                  {v.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
