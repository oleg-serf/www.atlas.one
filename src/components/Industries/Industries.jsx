import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
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

  useEffect(() => {
    setInterval(() => {
      setsliderclass(s => !s)
    }, 5000)
  }, [])

  const contentData = data.allContentfulIndustries.edges[0].node
  const images = contentData.images.map(v => v.file.url)

  return (
    <div className="bg-industry px-5 py-24" id="industries">
      <div className="container max-w-6xl m-auto">
        <h2 className="text-blue block uppercase">
          {contentData.title}
        </h2>
        <h2 className="lg:text-45xl text-25xl">
          {contentData.subTitle}
        </h2>
        <span className="block text-18xl font-medium pt-5 max-w-2xl">
          {contentData.description.description}
        </span>
        <div className="flex flex-wrap mt-20">
          <div className="w-full flex flex-wrap justify-between lg:w-2/3 py-1">
            {contentData.industries.map((v, i) => (
              <div className="shadow-base flex items-center bg-white rounded my-2 industry-box p-3">
                <div
                  className="box rounded-md flex items-center justify-center"
                  style={{
                    backgroundColor: v.iconBg,
                    verticalAlign: "middle",
                  }}
                >
                  <img src={contentData.icons[i]?.file?.url} alt="icons" />
                </div>
                <div className="w-2/3 pl-4">
                  <span className="font-600 text-lg">
                    {v.title}
                  </span>
                  <span className="block pt-1 font-medium text-grey text-16xl md:text-md">
                    {v.description}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full lg:w-1/3 px-2">
            <img
              src={images[0]}
              alt="Altas Logo"
              className={`w-full rounded my-2 ${
                sliderclass ? "fadein" : "fadeout"
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
