import React from "react"
import { graphql, useStaticQuery } from "gatsby"

export default function Benifits() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBenefits {
        edges {
          node {
            title
            description {
              description
            }
            benefits {
              description
              title
              icon
            }
          }
        }
      }
    }
  `)

  return (
    <div className="px-5 py-24 container m-auto max-w-6xl" id="benifits">
      <h2 className=" text-blue uppercase ">
        {data.allContentfulBenefits.edges[0].node.title}
      </h2>

      <h2 className="block text-5xl max-w-3xl">
        {data.allContentfulBenefits.edges[0].node.description.description}
      </h2>

      <div className="flex flex-wrap py-2 mt-20">
        {data.allContentfulBenefits.edges[0].node.benefits.map((v, i) => (
          <div className="w-full lg:w-1/3 md:w-2/4 sm:w-1/1 md:pr-8 pb-4 ">
            <img src={v.icon} alt="Icon" />
            <h3 className="block xl:text-25xl text-3xl font-bold pt-5 pr-5">
              {v.title}
            </h3>
            <div className="py-3 pr-6">
              <span className="text-1xl font-medium">
                {v.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
