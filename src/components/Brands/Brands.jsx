import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import "./index.scss"

export default function Brands() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulTrustedPartners {
        edges {
          node {
            partnersImages {
              fluid {
                srcSet
              }
            }
          }
        }
      }
    }
  `)

  const componentData = data.allContentfulTrustedPartners.edges[0].node

  return (
    <>
      <div className="mt-40 lg:pt-24"> </div>
      <div className="justify-center text-center p-5">
        <p style={{ color: "#B5C7DC" }}>Trusted over 2300+ companies</p>
        <div className="flex flex-wrap justify-center items-center p-6 w-full lg:w-auto">
          {componentData.partnersImages.map((v, i) => (
            <div className="p-5 lg:mx-5 w-1/2 lg:w-auto" key={i}>
              <img
                srcSet={v.fluid?.srcSet}
                className="brand-image"
                alt="Altas Logo" />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
