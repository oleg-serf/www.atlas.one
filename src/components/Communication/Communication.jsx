import React, { useRef } from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { BsArrowRight } from "react-icons/bs"
import SectionHeading from "../SectionHeading"
import { useWindowSize, getSrcSet } from "../../hooks/getwidth"

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
  const imgRef = useRef(null);
  const imgSize = useWindowSize(imgRef);

  return (
    <div className="lg:flex flex-warp container m-auto max-w-6xl py-12 lg:py-24 px-5 items-center">
      <div className="xl:w-1/2 md:pr-8">
        <SectionHeading
          data={{
            title: componentData.title,
            description: componentData.subtitle,
            featuredSubtitle: componentData.featuredSubtitle,
          }}
        />
        <span className="block pt-5 font-medium md:text-base">
          {componentData.description}
        </span>
        <Link to="/request-demo">
          <button className="flex py-5 focus:outline-none items-center">
            <span className="font-bold text-lightblue pr-2">Learn more </span>
            <BsArrowRight size={20} color="#1F76FF" />
          </button>
        </Link>
      </div>
      <div className="xl:w-1/2 max-w-2xl m-auto">
        <img
          srcSet={ getSrcSet(componentData.image?.file?.url, imgSize.width) }
          alt="Altas Logo"
          className="w-full"
          ref={imgRef}
        />
      </div>
    </div>
  )
}
