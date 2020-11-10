import React from "react"
import { BsArrowRight } from "react-icons/bs"

const Hero = ({ data }) => {
  const { title, subtitle, buttonText, overviewImage } = data

  return (
    <div className="bg-even py-16">
      <div className="max-w-6xl mx-auto flex flex-wrap px-5">
        <div className="w-full lg:w-1/2">
          <img src={overviewImage?.file?.url} alt="overview" />
        </div>
        <div className="w-full lg:w-1/2 lg:p-5 bg-white">
          <div className="p-4 white-content w-full lg:w-10/12">
            <button className="bg-ebook text-blue bg-blue-200 font-medim py-1 px-3 border-none rounded-sm">
              {buttonText}
            </button>
            <h2 className="block font-bold py-3 text-2xl resource-description">
              {title?.title}
            </h2>
            <p className="font-medium">
              {subtitle?.subtitle}
            </p>
            <button className="flex items-center py-5 outline-none">
              <span className="font-bold text-lightblue pr-1">Explore</span>
              <BsArrowRight size={20} color="#1F76FF" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero