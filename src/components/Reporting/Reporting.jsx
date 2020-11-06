import React, { useRef } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { BsArrowRight } from "react-icons/bs"
import SectionHeading from "../SectionHeading"
import { useWindowSize, getSrcSet } from "../../hooks/getwidth"

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
  const imgRef = useRef(null);
  const imgSize = useWindowSize(imgRef);

  return (
    <div className="flex flex-wrap-reverse container m-auto max-w-6xl py-12 lg:py-24 px-5 flex items-center">
      <div className="lg:w-1/2 w-full lg:pr-8">
        <img
          srcSet={ getSrcSet(componentData.image?.file?.url, imgSize.width) }
          alt="Altas Logo"
          className="w-full"
          ref={imgRef}
        />
      </div>
      <div className="lg:w-1/2 w-full lg:p-5">
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
          <span className="font-bold text-lightblue pr-2">Learn about our chat </span>
          <BsArrowRight size={20} color="#1F76FF" />
        </button>
      </div>
    </div>
  )
}
