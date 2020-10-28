import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Icon from "./../../images/icon.png"

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
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <div className="p-10 py-10 container m-auto">
        <div className="font-bold text-blue-500 uppercase">
          {data.allContentfulBenefits.edges[0].node.title}
        </div>

        <span className="block font-bold text-4xl max-w-xl">
          {data.allContentfulBenefits.edges[0].node.description.description}
        </span>

        <div className="flex flex-wrap py-2 mt-20">
          {data.allContentfulBenefits.edges[0].node.benefits.map((v, i) => (
            <div className="w-full lg:w-1/3 md:w-2/4 sm:w-1/1  md:pr-10 pb-4 ">
              <img src={Icon} alt="Altas Logo" />
              <span className="block xl:text-25xl text-3xl font-bold pt-5 pr-5">{v.title}</span>
              <div className="py-3 pr-6">
                <span className="text-1xl ">{v.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
