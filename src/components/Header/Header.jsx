import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import HeroImage from "./../../images/header-placeholder.png"
import "./header.scss"

export default function Header() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulLandingHero {
        edges {
          node {
            title
            description {
              description
            }
            heroButtons {
              text
              boderColor
              bg
            }
          }
        }
      }
    }
  `)

  const componentData = data.allContentfulLandingHero.edges[0].node

  return (
    <div
      className="header relative"
      style={{ maxHeight: "830px", minHeight: "600px" }}
    >
      <div className="container px-5 m-auto pt-24">
        <div className="text-center max-w-4xl m-auto">
          <h1 className="xl:text-54xl md:text-5xl text-3xl font-bold text-white pt-5">
            {componentData.title}
          </h1>
          <br />
          <br />
          <span className="mt-2 xl:text-1xl md:text-2xl text-lg text-white">
            {componentData.description.description}
          </span>
          <br />
          <div className="mt-6">
            {componentData.heroButtons.map((v, i) => (
              <button
                className="w-40 m-2 bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-3 px-4 border hover:border-transparent rounded"
                style={{
                  border: "1px solid",
                  borderColor: v.boderColor,
                  background: v.bg,
                }}
              >
                {v.text}
              </button>
            ))}
            <img
              alt="HeroImage"
              src={HeroImage}
              className="m-auto h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
