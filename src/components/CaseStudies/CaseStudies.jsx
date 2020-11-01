import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"

export default function CaseStudies() {
  const [index, setIndex] = useState(0)

  const data = useStaticQuery(graphql`
    query {
      allContentfulCaseStudies {
        edges {
          node {
            title
            caseStudies {
              author
              comment
              position
            }
            images {
              file {
                url
              }
            }
          }
        }
      }
    }
  `)

  const detail = data.allContentfulCaseStudies.edges[0].node.caseStudies
  const images = data.allContentfulCaseStudies.edges[0].node.images
  
  const slideRight = () => {
    if (index + 1 !== detail.length) {
      setIndex((index + 1) % detail.length) // increases index by 1
    }
  }

  const slideLeft = () => {
    if (index !== 0) {
      const nextIndex = index - 1
      if (nextIndex < 0) {
        setIndex(detail.length - 1)
      } else {
        setIndex(nextIndex)
      }
    }
  }
  
  return (
    <div className="py-12 md:py-24 bg-even" id="case-studies">
      {data.allContentfulCaseStudies.edges.map(edge => (
        <div className="flex flex-wrap-reverse mb-4 container m-auto max-w-6xl px-5">
          <div className="xl:w-1/3 lg:w-1/2 lg:justify-center">
            <img
              src={images[index]?.file?.url}
              alt="Altas Logo"
              className="rounded-lg h-full"
            />
          </div>
          <div className="xl:w-2/3 lg:w-1/2 lg:pl-16 mb-8 lg:mb-0">
            <div className="flex">
              <h2 className="py-3 font-bold text-blue flex-1 uppercase">
                {edge.node.title}
              </h2>
              <div className="py-3 flex-1">
                <div className="flex justify-end">
                  <div className="border-r-2 px-2 cursor-pointer">
                    <BsArrowLeft
                      size={30}
                      color={index === 0 ? "grey" : "#22A7F0"}
                      onClick={slideLeft}
                    />
                  </div>
                  <div className="px-2 cursor-pointer">
                    <BsArrowRight
                      size={30}
                      color={index + 1 === detail.length ? "grey" : "#22A7F0"}
                      onClick={slideRight}
                    />
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div>
              <div className="text-base font-bold md:text-25xl py-10 ">
                {detail[index].comment}
              </div>
              <div>
                <span className="block font-bold">
                  {detail[index].author}
                </span>
                <span>{detail[index].position}</span>
              </div>
            </div>
            <br />
            <hr />
            <div className="flex py-3">
              <div className="h-2 w-2 bg-black rounded m-1"></div>
              <div className="h-2 w-2 bg-gray-600 rounded m-1"></div>
              <div className="h-2 w-2 bg-gray-600 rounded m-1"></div>
              <div className="h-2 w-2 bg-gray-600 rounded m-1"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}