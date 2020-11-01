import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { BsArrowRight } from "react-icons/bs"

export default function Communication() {
  const data = useStaticQuery(graphql`
    query {
      contentfulCommmunications {
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

  const componentData = data.contentfulCommmunications

  return (
    <div className="lg:flex flex-warp container m-auto max-w-6xl py-12 lg:py-24 px-5 items-center">
      <div className="xl:w-1/2 md:pr-8">
        <h2 className="block text-blue uppercase">
          {componentData.title}
        </h2>
        <h2 className="block md:text-45xl text-25xl pt-5 tracking-tigh">
          {componentData.subtitle}{" "}
          <h2 className="text-blue inline-flex">
            {componentData.featuredSubtitle}
          </h2>
        </h2>
        <span className="block text-18xl pt-5 font-medium md:text-xl">
          {componentData.description}
        </span>
        <button className="flex py-5">
          <span className="font-bold text-lightblue pr-2">Learn More </span>
          <BsArrowRight size={28} color="#1F76FF" />
        </button>
      </div>
      <div className="xl:w-1/2 max-w-2xl m-auto">
        <img
          src={componentData.image?.file?.url}
          alt="Altas Logo"
          className="w-full"
        />
      </div>
    </div>
  )
}
