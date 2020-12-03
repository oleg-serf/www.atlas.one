import React, { useState } from "react"
import { navigate } from "gatsby"
import { submitForm } from "../../functions/submit-form"
import "./index.scss"

export default function ResourceForm({ 
  fields, 
  id,
  title,
  description,
  callToActionText
}) {
  const [form, setform] = useState({})
  const [message, setMessage] = useState(null)

  const getFields = () => {
    return Object.keys(form).map(key => {
      return {
        name: key,
        value: form[key],
      }
    })
  }
  const submitFormData = async () => {
    let data = await submitForm(id, getFields(), Date.now(), true)
    if (data.inlineMessage) {
      setMessage(data.inlineMessage)
    } else {
      if (typeof window != "undefined") {
        navigate("/success")
        // window.open(data.redirectUri, "_blank")
        setMessage("File has been opened on new tab")
      }
    }
  }

  return (
    <div className="w-full lg:w-4/5 mx-auto">
      <form
        onSubmit={e => {
          e.preventDefault()
          submitFormData()
        }}
        className="resource-form p-8 px-10 lg:px-20 text-white flex justify-center flex-col rounded-md"
      >
        <h2 className="text-3xl my-1 text-center">
          { title }
        </h2>
        <p className="text-menu my-1 text-center text-base">
          { description }
        </p>
        {message && (
          <div
            className="my-4 text-center"
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {!message && (
          <div className="my-6">
            {fields.map(({ fields }) => {
              const {
                label,
                placeholder,
                fieldType,
                required,
                name,
              } = fields[0]
              return (
                <div className="flex flex-col my-2">
                  <label className="text-sm">
                    {`${label}${required ? "*" : ""}`}
                  </label>
                  <input
                    className="border border-field rounded p-2 my-2 font-medium"
                    placeholder={placeholder}
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
              className="blue-button text-white font-medium lg:mx-0 w-full py-3 px-6 mt-2"
              type="submit"
            >
              {callToActionText}
            </button>
          </div>
        )}
      </form>
    </div>
  )
}
