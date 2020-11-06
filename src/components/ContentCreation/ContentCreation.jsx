import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { BsArrowRight } from "react-icons/bs"
import SectionHeading from "../SectionHeading"
import { useWindowSize } from "../../hooks/getwidth"

export default function ContentCreation() {
  const data = useStaticQuery(graphql`
    query {
      contentfulContentCreation {
        title
        subtitle
        featuredSubtitle
        description
        image {
          file {
            url
          }
        }
      }
    }
  `)

  const componentData = data.contentfulContentCreation
  const windowSize = useWindowSize()

  return (
    <div className="lg:flex flex-warp container m-auto max-w-6xl py-12 lg:py-24 px-5 items-center">
      <div className="xl:w-1/2 lg:pr-8">
        <SectionHeading
          data={{
            title: componentData.title,
            description: componentData.subtitle,
            featuredSubtitle: componentData.featuredSubtitle,
          }}
        />
        <span className="block text-18xl pt-5 font-medium md:text-base">
          {componentData.description}
        </span>
        <button className="flex items-center py-5 focus:outline-none">
          <span className="font-bold text-lightblue pr-2">Learn More </span>
          <BsArrowRight size={20} color="#1F76FF" />
        </button>
      </div>
      <div className="xl:w-1/2 max-w-2xl m-auto p-2">
        <img
          src={`${componentData.image?.file?.url}?w=${windowSize?.width}`}
          alt="Altas Logo"
          className="w-full"
        />
      </div>
    </div>
  )
}
