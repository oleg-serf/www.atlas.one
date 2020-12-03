import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { getSrcSet } from "../../hooks/getwidth"
import "./apply.scss"

export default function Brands() {
  const data = useStaticQuery(graphql`
    query {
      contentfulApply {
        title
        description
        icon {
          file {
            url
          }
        }
        buttonText
      }
    }
  `)

  const componentData = data.contentfulApply

  return (
    <div className="text-center py-12 lg:py-24 px-5 apply-main">
      <div className="container max-w-6xl m-auto flex flex-wrap">
        <div className="w-full lg:w-2/3 flex flex-wrap lg:flex-no-wrap justify-center lg:justify-start lg:items-start">
          <img
            srcSet={ getSrcSet(componentData.icon?.file?.url, 80) }
            alt="annoucement-icon"
            className="lg:m-0"
          />
          <div className="px-6 w-full lg:w-auto">
            <h2 className="block lg:text-45xl text-25xl text-white text-center lg:text-left mt-4 lg:mt-0">
              {componentData.title}
            </h2>
            <div>
              <span className="block text-base py-6 max-w-3xl text-white text-center lg:text-left">
                {componentData.description}
              </span>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/3 flex justify-end p-5 lg:p-0 lg:mt-4">
          <Link
            to="/resources/apply-for-a-no-cost-sponsored-version-of-atlas-one-essential"
            className="text-white font-semibold blue-button py-3 px-16 h-12 rounded-sm w-full lg:w-auto"
          >
            {componentData.buttonText}
          </Link>
        </div>
      </div>
    </div>
  )
}