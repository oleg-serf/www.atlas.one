import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"

export default function CaseStudies() {
  const [index, setIndex] = useState(0)
  const [detail, setDetail] = useState([
    {
      image: "Empty",
      description: "All base UI elements are made using Nested Symbols and shared styles that are logically connected. Gorgeous, high-quality video sharing on desktop, mobile, tablet. All base UI elements are made using Nested Symbols",
      author: "Empty",
      profession: "Empty",
    }, 
  ])

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

  useEffect(() => {
    setDetail(data.allContentfulCaseStudies.edges[0].node.caseStudies)
  });

  const slideRight = () => {
    setIndex((index + 1) % detail.length) // increases index by 1
  }

  const slideLeft = () => {
    const nextIndex = index - 1
    if (nextIndex < 0) {
      setIndex(detail.length - 1)
    } else {
      setIndex(nextIndex)
    }
  }

  return (
    <div className="bg-gray-100">
      <div className="flex flex-wrap mb-4 p-10 container m-auto">
        <div className="xl:w-1/3 lg:w-1/2 lg:justify-center">
          <img
            src={data.allContentfulCaseStudies.edges[0].node.images[0].file.url}
            alt="Altas Logo"
            className="rounded-lg"
          />
        </div>
        <div className="xl:w-2/3 lg:w-1/2 pl-5">
          <div className="flex">
            <div className="py-3 font-bold text-blue-500 flex-1 uppercase">
              {data.allContentfulCaseStudies.edges[0].node.title}
            </div>
            <div className="py-3 flex-1">
              <div className="flex justify-end">
                <div className="border-r-2 px-2 cursor-pointer">
                  <BsArrowLeft
                    size={30}
                    color="grey"
                    onClick={slideLeft} 
                  />
                </div>
                <div className="px-2 cursor-pointer">
                  <BsArrowRight
                    size={30}
                    color="#22A7F0"
                    onClick={slideRight}
                  />
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div>
            <div className="text-base md:text-25xl py-10 ">
              {detail[index].comment}
            </div>
            <div>
              <span className="block font-bold">{detail[index].author}</span>
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
    </div>
  )
}