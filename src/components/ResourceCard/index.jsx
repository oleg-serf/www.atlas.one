import React, { useRef } from "react"
import { BsArrowRight } from "react-icons/bs"
import { useWindowSize, getSrcSet } from "../../hooks/getwidth"

const ResourceCard = ({
  data: { overviewImage, title, type, callToActionText }
}) => {
  const imgRef = useRef(null)
  const imgSize = useWindowSize(imgRef)

  return (
    <div className="w-full h-full py-5 lg:p-3">
      <div className="bg-white resource-box rounded-xl">
        <div>
          <img
            srcSet={getSrcSet(overviewImage.file?.url, imgSize.width)}
            alt="Altas Logo"
            className="w-full"
            ref={imgRef}
          />
        </div>
        <div className="p-4 white-content">
          <div className="flex flex-wrap ">
            {type.types?.map(item => (
              <button className="bg-ebook text-blue bg-blue-200 font-medim py-1 px-3 border-none rounded-sm mr-2 mt-2">
                {item}
              </button>
            ))}
          </div>
          <h2 className="block font-bold py-3 text-xl resource-description">
            {title.title}
          </h2>
          <button className="flex items-center py-5 outline-none">
            <span className="font-bold text-lightblue pr-1">
              {callToActionText} 
            </span>
            <BsArrowRight size={20} color="#1F76FF" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ResourceCard