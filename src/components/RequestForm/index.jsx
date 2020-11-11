import React, { useState, useRef } from "react"
import { navigate } from "gatsby"
import { AiFillCheckCircle } from "react-icons/ai"
import { submitForm } from "../../functions/submit-form"
import { useWindowSize, getSrcSet } from "../../hooks/getwidth"
import "./index.scss"

const RequestForm = ({ formFieldGroups, id, data }) => {
  const [form, setform] = useState({})
  const [message, setMessage] = useState(null)
  const imgRef = useRef(null)
  const imgSize = useWindowSize(imgRef)

  const { title, jsx, image, buttonText, features } = data
 
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
    <div className="w-full py-12 lg:py-24">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 p-8 text-white form-left rounded">
          <h1 className="text-3xl lg:text-45xl tracking-subtitle p-2 lg:p-5">{title}</h1>
          <div className="my-6 px-2 lg:px-5" dangerouslySetInnerHTML={{ __html: jsx }} />
          {features && (
            <ul className="my-8 px-2 flex flex-col ">
              {features.map(feature => (
                <li className="flex items-start my-3">
                  <span>
                    <AiFillCheckCircle size={25} fill="#ffffff" />
                  </span>
                  <span className="px-2">{feature}</span>
                </li>
              ))}
            </ul>
          )}
          {image && (
            <div className="my-8 flex justify-center">
              <img
                srcSet={getSrcSet(image, imgSize.width)}
                alt="requestimage"
                ref={imgRef}
              />
            </div>
          )}
        </div>
        <div className="w-full lg:w-1/2 p-8 bg-white form-right">
          <form
            onSubmit={e => {
              e.preventDefault()
              submitFormData()
            }}
            className="flex justify-center flex-col rounded-md"
          >
            {message && (
              <div
                className="my-4 text-center"
                dangerouslySetInnerHTML={{ __html: message }}
              />
            )}
            {!message && (
              <div>
                {formFieldGroups.map(({ fields }) => {
                  return (
                    <div className="flex flex-wrap justify-between">
                      {fields.map(
                        ({
                          label,
                          placeholder,
                          fieldType,
                          required,
                          name,
                          options,
                        }) => (
                          <div
                            className={`flex flex-col my-2 ${
                              fields.length === 1 ? "field-full" : "field-half"
                            }`}
                          >
                            <label className="text-sm">
                              {`${label}${required ? "*" : ""}`}
                            </label>
                            {fieldType === "text" && (
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
                            )}
                            {fieldType === "number" && (
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
                            )}
                            {fieldType === "textarea" && (
                              <textarea
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
                              ></textarea>
                            )}
                            {fieldType === "select" && (
                              /* eslint-disable-next-line */
                              <select
                                placeholder={placeholder}
                                className="border border-field rounded p-2 my-2 font-medium"
                                name={name}
                                required={required}
                                onChange={e =>
                                  setform({
                                    ...form,
                                    [e.target.name]: e.target.value,
                                  })
                                }
                              >
                                {options.map(option => (
                                  <option value={option.value}>
                                    {option.label}
                                  </option>
                                ))}
                              </select>
                            )}
                          </div>
                        )
                      )}
                    </div>
                  )
                })}

                <button
                  className="blue-button text-white font-medium lg:mx-0 py-3 px-6 mt-2"
                  type="submit"
                >
                  {buttonText}
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}

export default RequestForm
