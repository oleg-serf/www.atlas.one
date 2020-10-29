import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { IoIosCreate } from "react-icons/io"
import { FaTelegramPlane, FaComments } from "react-icons/fa"

export default function Solutions() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulSolutions {
        edges {
          node {
            title
            subtitle
            description
            solutions {
              title
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

  const componentData = data.allContentfulSolutions.edges[0].node
  
  return (
    <div className="bg-industry py-24" id="solutions">
      <div className="flex flex-wrap container m-auto max-w-6xl px-5">
        <div className="xl:w-1/1 lg:w-1/2 lg:justify-center">
          <div
            style={{
              position: "relative",
              maxHeight: "500px",
              height: "100%",
              maxWidth: "500px",
              width: "100%",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                maxWidth: "300px",
                width: "100%",
              }}
            >
              <img
                src={componentData.images[0].file.url}
                alt="Altas Logo"
                style={{ minWidth: "100px" }}
              />
            </div>
            <div
              style={{
                position: "absolute",
                right: 0,
                bottom: 0,
                maxWidth: "300px",
                width: "100%",
              }}
            >
              <img
                src={componentData.images[1].file.url}
                alt="Altas Logo"
                style={{ minWidth: "100px" }}
              />
            </div>
          </div>
        </div>
        <div className="xl:w-1/1 lg:w-1/2">
          <h2 className="block font-bold text-blue-500">
            {componentData.title}
          </h2>
          <h2 className="block md:text-45xl text-25xl font-bold pt-5 tracking-tigh">
            {componentData.subtitle}
          </h2>
          <span className="block md:text-18xl text-lg pt-5 border-b-2 pb-5">
            {componentData.description}
          </span>

          <div className="pt-5">
            <div className="flex py-1">
              <FaTelegramPlane size={28} color="#19B5FE" />{" "}
              <span className="font-bold pl-1 text-xl">
                {componentData.solutions[0].title}
              </span>
            </div>
            <div className="flex py-1">
              <FaComments size={28} color="#19B5FE" />{" "}
              <span className="font-bold pl-1 text-xl">
                {componentData.solutions[1].title}
              </span>
            </div>
            <div className="flex py-1">
              <IoIosCreate size={28} color="#19B5FE" />{" "}
              <span className="font-bold pl-1 text-xl">
                {componentData.solutions[2].title}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}