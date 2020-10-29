import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { BsArrowRight } from "react-icons/bs"

export default function Communication() {
  const data = useStaticQuery(graphql`
    query {
      contentfulCommmunications {
        title
        subtitle
        description
        image {
          file {
            url
          }
        }
      }
    }
  `)

  const componentData = data.contentfulCommmunications

  return (
    <div className="lg:flex flex-warp container m-auto max-w-6xl py-10 p-5">
      <div className="xl:w-1/2 pt-20 md:pr-8">
        <h2 className="block text-blue uppercase text-xl">
          {componentData.title}
        </h2>
        <h2 className="block md:text-45xl text-xl pt-5">
          {componentData.subtitle}
        </h2>
        <span className="block text-18xl pt-5 font-medium md:text-xl">
          {componentData.description}
        </span>
        <div className="flex py-5">
          <span className="font-bold text-blue-500 pr-2">Learn More</span>{" "}
          <BsArrowRight size={28} color="#19B5FE" />
        </div>
      </div>
      <div className="xl:w-1/2 max-w-2xl m-auto">
        <img
          src={componentData.image.file.url}
          alt="Altas Logo"
          className="w-full"
          style={{ minWidth: "300px", minHeight: "300px" }}
        />
      </div>
    </div>
  )
}
