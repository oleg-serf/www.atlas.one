import React from "react"
import { graphql, useStaticQuery } from "gatsby"

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
    <div className="text-center py-32 bg-gray-900">
      <div className="container max-w-6xl m-auto">
        <img src={componentData.icon.file.url} alt="" className="m-auto" />
        <h2 className="block font-bold pt-5  md:text-4xl text-2xl text-white">
          {componentData.title}
        </h2>
        <div className="flex justify-center">
          <span className="block text-xl md:text-3xl py-6 max-w-3xl text-white">
            {componentData.description}
          </span>
        </div>

        <button className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-3 px-8  bg-blue-500 hover:border-transparent">
          {componentData.buttonText}
        </button>
      </div>
    </div>
  )
}
