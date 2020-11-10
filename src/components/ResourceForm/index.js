import React, { useState } from "react"
import { navigate } from "gatsby"
import "./index.scss"

export default function ResourceForm({ fields, id }) {
  const [form, setform] = useState({})
  const [message, setMessage] = useState(null)

  const submitFormData = () => {
    const url = `${process.env.GATSBY_BASE_URL}/submissions/v3/integration/submit/${process.env.GATSBY_PORTAL_ID}/${id}`
    
    const data = {
      "submittedAt": Date.now(),
      "fields": [
        {
          "name": "email",
          "value": form.email
        },
        {
          "name": "firstname",
          "value": form.firstname
        },
        {
          "name": "lastname",
          "value": form.lastname,
        },
        {
          "name": "company",
          "value": form.company,
        },
        {
          "name": "jobtitle",
          "value": form.jobtitle,
        }
      ],
      "skipValidation": true,
    }

    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json; charset=utf8",
        "Accept": "application/json",
        "Access-Control-Allow-Origin":"*"
      },
    })
    .then(response => response.json())
    .then(res => {
      if (res.inlineMessage) {
        setMessage(res.inlineMessage)
      } else {
        if (typeof window != "undefined") {
          navigate("/success")
          // window.open(res.redirectUri, "_blank")
          setMessage("File has been opened on new tab")

        }
      }
    })
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
        <h2 className="text-3xl my-1 text-center">Get your copy</h2>
        <p className="text-menu my-1 text-center text-base">
          Fill the form to get your ebook
        </p>
        {message && 
          <div
            className="my-4 text-center"
            dangerouslySetInnerHTML={{ __html: message }}
          />
        }
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
              className="blue-button text-white font-medium lg:mx-0 w-full py-3 px-6 mt-2"
              type="submit"
            >
              Download
            </button>
          </div>
        )}
      </form>
    </div>
  )
}
