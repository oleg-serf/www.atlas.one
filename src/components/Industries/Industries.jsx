import React from "react"
import IndustriesImage from "./../../images/Rectangle 168.png"
import { IoIosAirplane, IoMdSchool } from "react-icons/io"
import { RiGovernmentFill } from "react-icons/ri"
import { AiOutlinePropertySafety, AiFillSecurityScan } from "react-icons/ai"
import { FaPlusSquare } from "react-icons/fa"

export default function Industries() {
  return (
    <>
      <div className="p-10 lg:px-40 py-10 bg-gray-100">
        <span className="font-bold text-blue-500 block uppercase">
          Industries
        </span>

        <span className="font-bold text-4xl">Industries We Serve</span>

        <span className="block text-1xl pt-5 text-2xl">
          Seprated they live in Boakmarks right at the coast of
          <br /> the famous Semantics, large language.
        </span>

        <div className="flex flex-wrap py-2 mt-20">
          <div className="w-full lg:w-1/3 md:w-2/4 sm:w-1/1 pb-4 p-2">
            <div className="shadow-xl flex bg-white p-2 rounded mb-4">
              <div className="w-1/3  bg-indigo-700 rounded mx-2 flex">
                <RiGovernmentFill size={50} className="m-auto" color="#fff" />
              </div>
              <div className="w-2/3">
                <span className="font-bold">Government</span>
                <span className="block">
                  The group of people with the authority to govern a country or state
                </span>
              </div>
            </div>

            <div className="shadow flex bg-white p-2 rounded mb-4">
              <div className="w-1/3  bg-indigo-700 rounded mx-2 flex">
                <AiOutlinePropertySafety
                  size={50}
                  className="m-auto"
                  color="#fff"
                />
              </div>
              <div className="w-2/3">
                <span className="font-bold">Government</span>
                <span className="block">
                  The group of people with the authority to govern a country or
                  state
                </span>
              </div>
            </div>

            <div className="shadow flex bg-white p-2 rounded mb-4">
              <div className="w-1/3  bg-indigo-700 rounded mx-2 flex">
                <IoMdSchool size={50} className="m-auto" color="#fff" />
              </div>
              <div className="w-2/3">
                <span className="font-bold">Government</span>
                <span className="block">
                  The group of people with the authority to govern a country or
                  state
                </span>
              </div>
            </div>
          </div>
          <div className="w-full  lg:w-1/3 md:w-2/4  sm:w-1/1  p-2">
            <div className="shadow flex bg-white p-2 rounded mb-4">
              <div className="w-1/3  bg-indigo-700 rounded mx-2 flex">
                <FaPlusSquare size={50} className="m-auto" color="#fff" />
              </div>
              <div className="w-2/3">
                <span className="font-bold">Government</span>
                <span className="block">
                  The group of people with the authority to govern a country or
                  state
                </span>
              </div>
            </div>

            <div className="shadow flex bg-white p-2 rounded mb-4">
              <div className="w-1/3  bg-indigo-700 rounded mx-2 flex">
                <IoIosAirplane size={50} className="m-auto" color="#fff" />
              </div>
              <div className="w-2/3">
                <span className="font-bold">Government</span>
                <span className="block">
                  The group of people with the authority to govern a country or
                  state
                </span>
              </div>
            </div>

            <div className="shadow flex bg-white p-2 rounded mb-4">
              <div className="w-1/3  bg-indigo-700 rounded mx-2 flex">
                <AiFillSecurityScan size={50} className="m-auto" color="#fff" />
              </div>
              <div className="w-2/3">
                <span className="font-bold">Government</span>
                <span className="block">
                  The group of people with the authority to govern a country or state
                </span>
              </div>
            </div>
          </div>
          <div className="w-full  lg:w-1/3 md:w-2/4  sm:w-1/1  pb-4 p-2">
            <img src={IndustriesImage} alt="Altas Logo" className="w-full" />
          </div>
        </div>
      </div>
    </>
  )
}
