import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

export default function GetStart() {
  const data = useStaticQuery(graphql`
    query {
      contentfulStartToday {
        title
        subtitle
        description
        buttonText
      }
    }
  `)

  const componentData = data.contentfulStartToday

  return (
    <div className="text-center py-12 lg:py-24 container m-auto px-12" id="contact-us">
      <h2 className="block text-blue uppercase tracking-title text-sm">
        {componentData.title}
      </h2>
      <h2 className="block lg:text-45xl text-3xl pt-5 sub-title font-bold">
        {componentData.subtitle}
      </h2>
      <div className="flex justify-center">
        <span className="block md:text-18xl pt-5 pb-6 max-w-3xl">
          {componentData.description}
        </span>
      </div>
      <Link to="/request-demo">
        <button className="blue-button text-white font-semibold py-3 px-8 w-full lg:w-auto lg:mr-8 mb-6 lg:mb-0">
          Book a demo
        </button>
      </Link>
      <Link to="/contact">
        <button className="transparent-button hover:text-white font-semibold py-3 px-8 w-full lg:w-auto">
          {componentData.buttonText}
        </button>
      </Link>
    </div>
  )
}
