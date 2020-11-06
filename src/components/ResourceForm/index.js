import React, { useState } from "react"
// import Axios from "axios"
import Cookies from "js-cookie"
import "./index.scss"

export default function ResourceForm({ fields, id }) {
  const [form, setform] = useState({})

  const getFields = () => {
    const Fields = Object.keys(form).map(key => {
      let field = {
        name: key,
        value: form[key],
      }
      return field
    })
    return Fields
  }

  const submitFormData = () => {
    const isBrowser = typeof window !== "undefined"
    const hutk = isBrowser ? Cookies.get("hubspotutk") : null
    const pageUri = isBrowser ? window.location.href : null
    const pageName = isBrowser ? document.title : null
    const url = `${process.env.BASE_URL}/submissions/v3/integration/submit/${process.env.PORTAL_ID}/${id}`
    const body = {
      submittedAt: Date.now(),
      fields: getFields(),
      context: {
        hutk,
        pageUri,
        pageName,
      },
      legalConsentOptions: {
        // Include this object when GDPR options are enabled
        consent: {
          consentToProcess: true,
          text:
            "I agree to allow Example Company to store and process my personal data.",
          communications: [
            {
              value: true,
              subscriptionTypeId: 999,
              text:
                "I agree to receive marketing communications from Example Company.",
            },
          ],
        },
      },
    }
    fetch(url, {
      method: "post",
      body: JSON.stringify(body),
      contentType: "application/json",
      dataType: "json",
      headers: {
        accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }).then(response => {
      console.log(response.data)
    })
  }

  return (
    <div className="w-full lg:w-4/5 mx-auto">
      <form
        onSubmit={e => {
          e.preventDefault()
          submitFormData()
        }}
        className="resource-form p-8 px-20 text-white flex justify-center flex-col rounded-md"
      >
        <h2 className="text-3xl my-1 text-center">Get your copy</h2>
        <p className="text-menu my-1 text-center text-base">
          Fill the form to get your ebook
        </p>
        <div className="my-6">
          {fields.map(({ fields }) => {
            const { label, placeholder, fieldType, required, name } = fields[0]

            return (
              <div className="flex flex-col my-2">
                <label className="text-sm">
                  {label}{required && "*"}
                </label>
                <input
                  placeholder={placeholder}
                  className="border border-field rounded p-2 my-2 font-medium"
                  type={fieldType}
                  name={name}
                  required={required}
                  onChange={e =>
                    setform({
                      ...form,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              </div>
            )
          })}
          <button
            type="submit"
            className="blue-button text-white font-medium lg:mx-0 w-full py-3 px-6 mt-2"
          >
            Download
          </button>
        </div>
      </form>
    </div>
  )
}
