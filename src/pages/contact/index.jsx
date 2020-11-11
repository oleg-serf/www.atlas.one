import React from "react"
import { graphql } from "gatsby"
import { 
  Layout,
  Brands,
  RequestForm,
  Chat
} from "../../components"
import "./index.scss"

const Contact = ({
  data: {
    hubspotForm: { formFieldGroups, guid },
  },
}) => {
  const features = [
    "Learn how to improve communications with your community",
    "Get pricing information",
    "Find the right solutions for your needs",
  ]

  return (
    <Layout isTransparentHeader={false}>
      <div className="flex items-center bg-even">
        <div className="px-5 max-w-6xl mx-auto w-full mt-20">
          <div className="flex items-center contact-main lg:mt-24">
            <div className="px-5 max-w-xl mx-auto w-full">
              <div className="w-full py-12 lg:px-6 flex flex-col">
                <h1 className="text-black lg:text-center tracking-subtitle text-2xl lg:text-45xl my-2">
                  Contact our sales team
                </h1>
                <p className="text-base lg:text-center">
                  Our experienced sales team can help you find the right solution.
                  Please fill out the form and we’ll be in touch shortly.
                </p>
              </div>
            </div>
          </div>
          <RequestForm
            formFieldGroups={formFieldGroups}
            id={guid}
            data={{
              title: "We’re here to help",
              jsx: "<div><p>We're happy to answer questions and get you acquainted with Atlas One.</p></div>",
              buttonText: "Talk to our Sales Team",
              features
            }}
          />
        </div>
      </div>
      <Brands />
      <Chat />
    </Layout>
  )
}

export const query = graphql`
  query {
    hubspotForm(id: { eq: "72bc3258-dc2b-4b6d-ab52-1defd4c73e64" }) {
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
          options {
            label
            value
          }
        }
      }
    }
  }
`

export default Contact
