import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import "./index.scss"

export default function Brands({ isLanding = false }) {
  const data = useStaticQuery(graphql`
    query {
      allContentfulTrustedPartners {
        edges {
          node {
            supportingText
            partnersImages {
              file {
                url
              }
            }
          }
        }
      }
    }
  `)

  const componentData = data.allContentfulTrustedPartners.edges[0].node

  return (
    <div className={`${isLanding ? "mt-40 lg:pt-24" : "py-12"}`}>
      <div className="justify-center text-center p-5">
        <p style={{ color: "#B5C7DC" }}>
          {componentData?.supportingText}
        </p>
        <div className="flex flex-wrap justify-center items-center p-6 w-full lg:w-auto">
          {componentData.partnersImages.map((v, i) => (
            <div className="p-5 lg:mx-5 w-1/2 lg:w-auto flex justify-center" key={i}>
              <img
                srcSet={
                  `${v?.file?.url}?h=80 1x,
                   ${v?.file?.url}?h=120 1.5x,
                   ${v?.file?.url}?h=160 2x,
                   ${v?.file?.url}?h=240 3x`
                }
                className="brand-image"
                alt="Altas Logo"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
