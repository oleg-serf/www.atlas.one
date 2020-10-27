import React  from "react"
import Profile from "./../../images/profile.png"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
export default function CaseStudies() {

  return (
    <>
      <div class="flex flex-wrap mb-4 p-10 lg:px-40 bg-gray-100">
        <div class="xl:w-1/3 lg:w-1/2 lg:justify-center">
          <img src={Profile} alt="Altas Logo" />
        </div>
        <div class="xl:w-2/3 lg:w-1/2">
          <div className="flex">
            <div className="py-3 font-bold text-blue-500 flex-1">
              CASE STUDIES
            </div>
            <div className="py-3 flex-1">
              <div className="flex justify-end">
                <div className="border-r-2 px-2">
                  <BsArrowLeft size={30} color="grey" />
                </div>
                <div className="px-2">
                  <BsArrowRight size={30} color="#22A7F0" />
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="xl:text-4xl py-10 md:text-3xl">
            “All base UI elements are made using Nested <br /> 
            Symbols and shared styles that are logically connected. 
            Gorgeous, high-quality video sharing on desktop, mobile, tablet. 
            All base UI elements are made using Nested Symbols”
          </div>

          <div>
            <span className="block font-bold">Tom Riddle</span>

            <span>Lead marketing specialist</span>
          </div>
          <br />
          <hr />

          <div className="flex py-3">
            <div className="h-2 w-2 bg-black rounded m-1"></div>
            <div className="h-2 w-2 bg-gray-600 rounded m-1"></div>
            <div className="h-2 w-2 bg-gray-600 rounded m-1"></div>
            <div className="h-2 w-2 bg-gray-600 rounded m-1"></div>
          </div>
        </div>
      </div>
    </>
  )
}
