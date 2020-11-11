import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Layout } from "../../components"
import "./index.scss"

const PressRelease = ({ data }) => {
  const { title, lastUpdated, contents } = data?.allContentfulPressRelease?.edges[0]?.node
  const updatedDate = new Date(lastUpdated)
  const month = updatedDate.toLocaleString('default', {month: 'long'})

  return (
    <Layout isTransparentHeader={false}>
      <div className="flex items-center privacy-main">
        <div className="px-5 max-w-6xl mx-auto w-full mt-20">
          <div className="w-full py-12 flex flex-col items-center">
            <h1 className="text-black tracking-subtitle text-2xl lg:text-45xl my-2">
              {title}
            </h1>
            <p className="text-base">
              Last Updated: {month} {updatedDate.getDate()+1}, {updatedDate.getFullYear()}
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto policies px-5">
        {documentToReactComponents(contents.json)}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulPressRelease {
      edges {
        node {
          title
          lastUpdated
          contents {
            json
          }
        }
      }
    }
  }
`

export default PressRelease