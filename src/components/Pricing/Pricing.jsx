import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { AiFillCheckCircle } from "react-icons/ai"
import "./pricing.scss"

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
              subTitle
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
    <div className="px-5 py-24" id="pricing">
      <div className="container max-w-6xl m-auto">
        <div className="text-center">
          <h2 className="text-blue block uppercase">
            {componentData.title}
          </h2>
          <h2 className="lg:text-45xl text-25xl">
            {componentData.subtitle}
          </h2>
        </div>

        <div className="flex flex-wrap pricing-main mt-20">
          {componentData.packages.map(item => (
            <div className="w-full lg:w-1/3 md:w-2/4 sm:w-1/1 pb-4 rounded-md lg:border-r border-b lg:border-b-0">
              <div className="bg-white w-full h-full rounded">
                <h2 className="block text-3xl text-center lg:text-left border-b p-5">
                  {item.title}
                </h2>
                <div className="p-5">
                  <h3 className="block text-1xl font-600 mb-2">
                    {item.subTitle}
                  </h3>
                  {item.properties.map(property => (
                    <div className="flex justify-center lg:justify-start py-2">
                      <AiFillCheckCircle size={30} color="00AEEF" />
                      <span className="text-1xl font-medium pl-3">
                        {property}
                      </span>
                    </div>
                  ))}
                  <button
                    style={{
                      backgroundColor: item.bg,
                      color: item.color,
                      borderColor: item.borderColor,
                    }}
                    className="bg-transparent hover:bg-blue-500 font-semibold mt-4 py-3 px-8 border border-blue-500 hover:border-transparent w-full lg:w-auto"
                  >
                    {item.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
