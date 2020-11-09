import React from "react"
import { BsArrowRight } from "react-icons/bs"
import { useWindowSize } from "../../hooks/getwidth"

const ResourceCard = ({ data: { overviewImage, title, type } }) => {
  const windowSize = useWindowSize()

  return (
    <div className="w-full h-full p-5">
      <div className="bg-white resource-box rounded-xl">
        <div>
          <img
            src={`${overviewImage.file?.url}?w=${windowSize.width || 1000}`}
            alt="Altas Logo"
            className="w-full"
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
            <span className="font-bold text-lightblue pr-1">Explore </span>
            <BsArrowRight size={20} color="#1F76FF" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ResourceCard