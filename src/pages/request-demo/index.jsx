import React from "react"
import { graphql } from "gatsby"
import {
  Layout,
  Brands,
  RequestForm,
  Chat
} from "../../components"
import Mac from "../../images/mac2.png"
import "./index.scss"

const RequestDemo = ({
  data: {
    hubspotForm: { formFieldGroups, guid },
  },
}) => {
  return (
    <Layout isTransparentHeader={false}>
      <div className="flex items-center bg-even">
        <div className="px-5 max-w-6xl mx-auto w-full mt-20">
          <RequestForm
            formFieldGroups={formFieldGroups}
            id={guid}
            data={{
              title: "Request a Demo",
              jsx: `<p>Reach out to schedule a personalized demo with our team. We will show you an Enterprise SaaS solution to governments and public safety agencies to help improve communications with their community</p>`,
              buttonText: "Request Demo",
              image: Mac,
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
    hubspotForm(id: { eq: "c6a3e9be-76a2-4bd9-8164-7bde5d1ce220" }) {
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
export default RequestDemo
