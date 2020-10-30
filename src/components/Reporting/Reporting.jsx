import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { BsArrowRight } from "react-icons/bs"

export default function Reporting() {
  const data = useStaticQuery(graphql`
    query {
      contentfulReporting {
        subtitle
        title
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

  const componentData = data.contentfulReporting

  return (
    <div className="flex flex-wrap-reverse container m-auto max-w-6xl py-12 lg:py-24 px-5">
      <div className="lg:w-1/2 w-full pr-5">
        <img
          src={componentData.image.file.url}
          alt="Altas Logo"
          className="w-full"
        />
      </div>
      <div className="lg:w-1/2 w-full">
        <h1 className="block text-blue uppercase">
          {componentData.title}
        </h1>
        <h2 className="block md:text-45xl text-25xl pt-5">
          {componentData.subtitle}{" "}
          <h2 className="text-blue inline-block">
            {componentData.featuredSubtitle}
          </h2>
        </h2>
        <span className="block font-medium text-18xl pt-5 md:text-2xl">
          {componentData.description}
        </span>
        <button className="flex py-5">
          <span className="font-bold text-lightblue pr-2">Learn More</span>{" "}
          <BsArrowRight size={28} color="#1F76FF" />
        </button>
      </div>
    </div>
  )
}
