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
    <div className="text-center py-32 bg-apply">
      <div className="container max-w-6xl m-auto flex">
        <div className="w-2/3 flex items-start">
          <img
            src={componentData.icon.file.url}
            alt="annoucement-icon"
          />
          <div className="px-6">
            <h2 className="block md:text-5xl text-2xl text-white text-left">
              {componentData.title}
            </h2>
            <div>
              <span className="block text-2xl py-6 max-w-3xl text-white text-left">
                {componentData.description}
              </span>
            </div>
          </div>
        </div>
        <div className="w-1/3 flex justify-end">
          <button className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-3 px-16 bg-blue hover:border-transparent h-16 rounded-md">
            {componentData.buttonText}
          </button>
        </div>
      </div>
    </div>
  )
}
