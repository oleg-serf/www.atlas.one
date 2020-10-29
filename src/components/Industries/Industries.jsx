import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { RiGovernmentFill } from "react-icons/ri"
import "./Industries.scss"

export default function Industries() {
  const [sliderclass, setsliderclass] = useState(false)

  const data = useStaticQuery(graphql`
    query {
      allContentfulIndustries {
        edges {
          node {
            title
            subTitle
            images {
              file {
                url
              }
            }
            description {
              description
            }
            industries {
              title
              iconBg
              description
            }
          }
        }
      }
    }
  `)

  useEffect(() => {
    setInterval(() => {
      setsliderclass(s => !s)
    }, 5000)
  }, [])
  
  const images = data.allContentfulIndustries.edges[0].node.images.map((v, i) => v.file.url)

  return (
    <div className="bg-industry px-5 py-24" id="industries">
      <div className="container max-w-6xl m-auto">
        <h2 className="font-bold text-blue-500 block uppercase">
          {data.allContentfulIndustries.edges[0].node.title}
        </h2>

        <h2 className="font-bold text-45xl">
          {data.allContentfulIndustries.edges[0].node.subTitle}
        </h2>

        <span className="block text-18xl pt-5 max-w-2xl">
          {data.allContentfulIndustries.edges[0].node.description.description}
        </span>

        <div className="flex flex-wrap mt-20">
          <div className="w-full flex flex-wrap justify-between  lg:w-2/3   py-1">
            {data.allContentfulIndustries.edges[0].node.industries.map((v, i) => (
              <div className="shadow-base flex bg-white rounded mb-4 industry-box p-2">
                <div
                  className="w-1/3 rounded flex"
                  style={{
                    backgroundColor: v.iconBg,
                    maxHeight: "110px",
                    verticalAlign: "middle",
                  }}
                >
                  <RiGovernmentFill
                    size={50}
                    className="m-auto"
                    color="#fff"
                  />
                </div>
                <div className="w-2/3 px-2">
                  <span className="font-bold text-18xl">{v.title}</span>
                  <span className="block text-16xl md:text-lg">
                    {v.description}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div classname="w-full lg:w-1/3 px-2">
            <img
              src={images[0]}
              alt="Altas Logo"
              className={`w-full  rounded ${
                sliderclass ? "fadein" : "fadeout"
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  )
}