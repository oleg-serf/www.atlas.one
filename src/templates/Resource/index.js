import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import {
  Layout,
  GetStart,
  Resources,
  ResourceForm
} from "../../components"
import { useWindowSize } from "../../hooks/getwidth"
import "./index.scss"

const Resource = ({ pathContext, data }) => {
  const windowSize = useWindowSize()

  const { formFieldGroups } = data?.hubspotForm
  const { pageResource } = pathContext

  return (
    <Layout isTransparentHeader={false}>
      <div className="flex flex-col justify-center resource-main bg-even">
        <div className="px-5 max-w-6xl mx-auto flex flex-wrap mt-20">
          <div className="w-full lg:w-1/2 py-12">
            <span className="border-none rounded-sm p-1 px-3 text-blue bg-ebook text-base font-600">
              {pageResource?.buttonText}
            </span>
            <h1 className="text-3xl lg:text-5xl sub-title mt-5">
              {pageResource?.title?.title}
            </h1>
          </div>
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <div className="w-4/5 rounded-full resource-image flex items-center justify-center py-12">
              <img
                className="w-1/3"
                src={`${pageResource?.image?.file?.url}?w=${windowSize?.width}`}
                alt="resourcesimage"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-12 lg:py-24">
        <div className="max-w-6xl mx-auto flex flex-wrap px-5">
          <div className="w-full lg:w-1/2 py-12">
            <h2 className="text-blue block uppercase tracking-title text-sm">
              Description
            </h2>
            <h1 className="text-2xl lg:text-4xl my-4">
              {pageResource.subtitle?.subtitle}
            </h1>
            <p className="text-base text-black font-medium">
              {documentToReactComponents(pageResource?.description?.json)}
            </p>
          </div>
          <div className="w-full lg:w-1/2 lg:p-5">
            <ResourceForm fields={formFieldGroups} id={pathContext?.formId} />
          </div>
        </div>
      </div>
      <Resources data={{ mainHeading: "You may also like" }} />
      <GetStart />
    </Layout>
  )
}
export const query = graphql`
  query($formId: String!) {
    hubspotForm(id: { eq: $formId }) {
      guid
      portalId
      name
      submitText
      redirect
      formFieldGroups {
        fields {
          label
          name
          required
          fieldType
          placeholder
        }
      }
    }
  }
`

export default Resource
