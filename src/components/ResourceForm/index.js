import React, { useState } from "react"
import Cookies from "js-cookie"
import querystring from "querystring"
import "./index.scss"

export default function ResourceForm({ fields, id }) {
  const [form, setform] = useState({})

  const submitFormData = () => {
    const isBrowser = typeof window !== "undefined"
    const hutk = isBrowser ? Cookies.get("hubspotutk") : null
    const pageUri = isBrowser ? window.location.href : null
    const pageName = isBrowser ? document.title : null
    const url = `${process.env.GATSBY_BASE_URL}/uploads/form/v2/${process.env.GATSBY_PORTAL_ID}/${id}`
    const body = querystring.stringify({
      submittedAt: Date.now(),
      email: form.email,
      firstname: form.firstname,
      lastname: form.lastname,
      jobtitle: form.jobtitle,
      hs_context: JSON.stringify({
        hutk: hutk,
        pageUrl: pageUri,
        pageName: pageName,
      }),
    })

    fetch(url, {
      method: "post",
      body: body,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Content-Length": body.length,
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
