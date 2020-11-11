import React, { useRef } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { AiFillCheckCircle } from "react-icons/ai"
import Communication from "../Communication/Communication"
import Reporting from "../Reporting/Reporting"
import ContentCreation from "../ContentCreation/ContentCreation"
import { useWindowSize, getSrcSet } from "../../hooks/getwidth"
import "./solutions.scss"

export default function Solutions() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulSolutions {
        edges {
          node {
            title
            subtitle
            description
            featuredSubtitle
            solutions {
              title
            }
            images {
              file {
                url
              }
            }
            icons {
              file {
                url
              }
            }
          }
        }
      }
    }
  `)
  
  const componentData = data.allContentfulSolutions.edges[0].node
  const imgRef = useRef(null)
  const imgSize = useWindowSize(imgRef)
  
  return (
    <div className="py-12 lg:py-24" id="solutions">
      <div className="flex flex-wrap-reverse items-center container m-auto max-w-6xl px-5">
        <div className="w-full lg:w-1/2 images-parent mt-8 lg:mt-0 relative">
          <img
            className="absolute image1"
            srcSet={ getSrcSet(componentData.images[0]?.file?.url, imgSize.width || 300) }
            alt="image1"
            ref={imgRef}
          />
          <img
            className="absolute image2"
            srcSet={ getSrcSet(componentData.images[1]?.file?.url, imgSize.width || 300) }
            alt="image2"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h2 className="block font-bold text-blue uppercase tracking-title text-sm">
            {componentData.title}
          </h2>
          <h2 className="block md:text-45xl text-25xl pt-5 sub-title font-bold">
            {componentData.subtitle}
            <h2 className="text-blue inline-block">
              {componentData.featuredSubtitle}
            </h2>
          </h2>
          <span className="block md:text-base text-lg pt-5 font-medium border-b-2 pb-5">
            {componentData.description}
          </span>

          <div className="pt-5">
            {componentData.solutions.map((solution, index) => (
              <div className="flex py-2" key={index}>
                <span><AiFillCheckCircle size={25} fill="#00AEEF" /></span>
                <span className="font-600 pl-5 text-base tracking-subtitle">
                  {solution.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Communication />
      <Reporting />
      <ContentCreation />
    </div>
  )
}
