import React from "react"
import { graphql, useStaticQuery } from "gatsby"

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
    <div className="text-center py-40 container m-auto" id="contact-us">
      <h2 className="block font-bold text-blue text-xl">
        {componentData.title}
      </h2>
      <h2 className="block text-5xl pt-5">
        {componentData.subtitle}
      </h2>
      
      <div className="flex justify-center">
        <span className="block text-1xl pt-5 text-2xl pb-6 max-w-3xl font-medium">
          {componentData.description}
        </span>
      </div>

      <button className="hover:bg-blue text-white font-semibold hover:text-white py-3 px-8 border bg-blue hover:border-transparent">
        {componentData.buttonText}
      </button>
    </div>
  )
}