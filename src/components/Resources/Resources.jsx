import React from "react"
import { BsArrowRight } from "react-icons/bs"
import BlogImage from "./../../images/blog.png"

export default function Resources() {
  return (
      <div className="p-4 py-10 bg-gray-100">
        <div className="container m-auto max-w-6xl ">

        <span className="font-bold text-blue-500 block uppercase">
          Recourses
        </span>

        <span className="font-bold text-4xl">
          Explore our useful <span className="text-blue-500">resourses</span>
        </span>

        <span className="block text-1xl pt-5 text-xl">
          Separated they live in Bookmarks right at the cost of the famous Semantics
          <br /> large language ocean Separated they live in Bookmarks right.
        </span>

        <div className="flex flex-wrap py-2 mt-20">
          <div className="w-full lg:w-1/3 md:w-2/4 sm:w-1/1 pb-4 p-8">
            <div className="bg-white w-full h-full rounded">
              <div className="pb-5">
                <img src={BlogImage} alt="Altas Logo" />
              </div>
              <div className="px-2">
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-8 border border-blue-500 hover:border-transparent">
                  Try Now
                </button>

                <span className="block font-bold py-3 text-2xl">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </span>

                <div className="flex py-5">
                  <span className="font-bold text-blue-500 pr-1">Explore</span>{" "}
                  <BsArrowRight size={28} color="#19B5FE" />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/3 md:w-2/4 sm:w-1/1 pb-4 p-8">
            <div className="bg-white w-full h-full rounded">
              <div className="pb-5">
                <img src={BlogImage} alt="Altas Logo" />
              </div>
              <div className="px-2">
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-8 border border-blue-500 hover:border-transparent">
                  Try Now
                </button>

                <span className="block font-bold py-3 text-2xl">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </span>

                <div className="flex py-5">
                  <span className="font-bold text-blue-500 pr-1">Explore</span>{" "}
                  <BsArrowRight size={28} color="#19B5FE" />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/3 md:w-2/4 sm:w-1/1 pb-4 p-8">
            <div className="bg-white w-full h-full rounded">
              <div className="pb-5">
                <img src={BlogImage} alt="Altas Logo" />
              </div>
              <div className="px-2">
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-8 border border-blue-500 hover:border-transparent">
                  Try Now
                </button>

                <span className="block font-bold py-3 text-2xl">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </span>

                <div className="flex py-5">
                  <span className="font-bold text-blue-500 pr-1">Explore</span>{" "}
                  <BsArrowRight size={28} color="#19B5FE" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
