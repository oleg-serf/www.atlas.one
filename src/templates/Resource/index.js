import React, { useRef } from "react"
import { graphql } from "gatsby"
import { BsArrowLeft } from "react-icons/bs"
import { AiFillCheckCircle } from "react-icons/ai"
import { BLOCKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import {
  Layout,
  GetStart,
  Resources,
  ResourceForm
} from "../../components"
import { useWindowSize, getSrcSet } from "../../hooks/getwidth"
import "./index.scss"

const Resource = ({ pageContext, data }) => {
  const imgRef = useRef(null)
  const imgSize = useWindowSize(imgRef)

  const { formFieldGroups } = data?.hubspotForm
  const { pageResource } = pageContext
  const options = {
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => (
        <h1 className="text-2xl lg:text-4xl my-4">{children}</h1>
      ),

      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className="my-4">{children}</p>
      ),
    },
  }
console.log(pageResource)
  return (
    <Layout isTransparentHeader={false}>
      <div className="flex flex-col justify-center resource-main bg-even">
        <div className="w-full px-5 max-w-6xl mx-auto flex flex-wrap mt-2 lg:mt-32">
          <div className="w-full lg:w-1/2 py-24">
            <div className="flex items-center lg:-ml-6">
              {/* eslint-disable-next-line */}
              <span
                className="cursor-pointer"
                onClick={()=>{typeof window !== 'undefined' && window.history.back()}}
              >
                <BsArrowLeft size={20} color="#141414" />
              </span>
              <span className="border-none rounded-sm ml-3 p-1 px-3 text-blue bg-ebook text-base font-600">
                {pageResource?.type?.types[0]}
              </span>
            </div>
            <h1 className="text-3xl lg:text-45xl tracking-subtitle mt-5">
              {pageResource?.subtitle?.subtitle}
            </h1>
          </div>
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <div className="w-4/5 rounded-full resource-image flex items-center justify-center py-12">
              <img
                className="w-1/2"
                srcSet={getSrcSet(pageResource?.image?.file?.url, imgSize.width)}
                alt="resourcesimage"
                ref={imgRef}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-12 lg:py-24" style={{minHeight: "80vh"}}>
        <div className="max-w-6xl mx-auto flex flex-wrap px-5">
          <div className="w-full lg:w-1/2 py-12">
            <h2 className="text-blue block uppercase tracking-title text-sm">
              Description
            </h2>
            {/* <h1 className="text-2xl lg:text-4xl my-4">
              {pageResource.subtitle?.subtitle}
            </h1> */}
            <div className="text-base text-black font-medium my-4">
              {documentToReactComponents(
                pageResource?.description?.json,
                options
              )}
            </div>
            {pageResource?.features && (
              <ul className="my-8 flex flex-col ">
                {pageResource?.features?.features?.map(feature => (
                  <li className="flex  lg:items-start items-center py-2">
                    <span>
                      <AiFillCheckCircle size={28} fill="#00AEEF" />
                    </span>
                    <span className="text-1xl font-medium pl-3">{feature}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="w-full lg:w-1/2 lg:p-5">
            <ResourceForm fields={formFieldGroups} id={pageContext?.formId} />
          </div>
        </div>
      </div>
      <Resources
        data={{ mainHeading: "You may also like" }}
        showTitle
        showThree
      />
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
