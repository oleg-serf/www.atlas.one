import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import "./solutions.scss"

export default function Solutions() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulSolutions {
        edges {
          node {
            title
            subtitle
            description
            featuredSubtitle
            solutions {
              title
            }
            images {
              file {
                url
              }
            }
            icons {
              file {
                url
              }
            }
          }
        }
      }
    }
  `)

  const componentData = data.allContentfulSolutions.edges[0].node

  return (
    <div className="py-12 lg:py-24" id="solutions">
      <div className="flex flex-wrap-reverse container m-auto max-w-6xl px-5 ">
        <div className="w-full lg:w-1/2 images-parent mt-8 lg:mt-0">
          <div className="relative ">
            <img
              className="absolute image1"
              src={componentData.images[0].file.url}
              alt="image1"
            />
            <img
              className="absolute image2"
              src={componentData.images[1].file.url}
              alt="image2"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <h2 className="block font-bold text-blue uppercase">
            {componentData.title}
          </h2>
          <h2 className="block md:text-45xl text-25xl pt-5 tracking-tigh">
            {componentData.subtitle}
            <h2 className="text-blue inline-block">
              {componentData.featuredSubtitle}
            </h2>
          </h2>
          <span className="block md:text-18xl text-lg pt-5 font-medium border-b-2 pb-5">
            {componentData.description}
          </span>

          <div className="pt-5">
            {componentData.solutions.map((solution, index) => (
              <div className="flex py-2">
                <img
                  src={componentData.icons[index].file.url}
                  alt = "icons"
                />
                <span className="font-bold pl-5 text-xl">
                  {solution.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
