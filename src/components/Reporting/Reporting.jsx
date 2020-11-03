import React from "react"
import { BsArrowRight } from "react-icons/bs"
import { graphql, useStaticQuery } from "gatsby"

export default function Reporting() {
  const data = useStaticQuery(graphql`
    query {
      contentfulReporting {
        subtitle
        title
        featuredSubtitle
        description
        image {
          fixed {
            srcSet
          }
        }
      }
    }
  `)

  const componentData = data.contentfulReporting

  return (
    <div className="flex flex-wrap-reverse container m-auto max-w-6xl py-12 lg:py-24 px-5 flex items-center">
      <div className="lg:w-1/2 w-full lg:pr-8">
        <img
          srcSet={componentData.image?.fixed?.srcSet}
          alt="Altas Logo"
          className="w-full"
        />
      </div>
      <div className="lg:w-1/2 w-full lg:p-5">
        <h2 className="block text-blue uppercase tracking-title text-sm">
          {componentData.title}
        </h2>
        <h2 className="block md:text-45xl text-25xl pt-5 sub-title font-bold">
          {componentData.subtitle}{" "}
          <h2 className="text-blue inline-block">
            {componentData.featuredSubtitle}
          </h2>
        </h2>
        <span className="block text-18xl pt-5 font-medium md:text-base">
          {componentData.description}
        </span>
        <button className="flex py-5">
          <span className="font-bold text-lightblue pr-2">Learn about our chat </span>
          <BsArrowRight size={28} color="#1F76FF" />
        </button>
      </div>
    </div>
  )
}
