import React from "react"
import { AiFillCheckCircle } from "react-icons/ai"
export default function Pricing() {
  return (
    <>
      <div class="p-10 lg:px-40 py-10 bg-gray-200 ">
        <div className="text-center">
          <span className="font-bold text-blue-500 block uppercase">
            Pricing
          </span>

          <span className="font-bold text-4xl">Explore our pricing plans</span>
        </div>

        <div className="flex flex-wrap py-2 mt-20">
          <div class="w-full  lg:w-1/3 md:w-2/4  sm:w-1/1  pb-4 p-2">
            <div className="bg-white w-full h-full rounded p-8">
              <span className="block text-3xl font-bold py-3">Essential</span>

              <div className="flex py-2">
                <AiFillCheckCircle size={40} color="#19B5FE" />
                <span className="text-1xl  pt-2 pl-1">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </div>
              <div className="flex py-2">
                <AiFillCheckCircle size={40} color="#19B5FE" />
                <span className="text-1xl  pt-2 pl-1">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </div>

              <div className="flex py-2">
                <AiFillCheckCircle size={40} color="#19B5FE" />
                <span className="text-1xl  pt-2 pl-1">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </div>

              <div className="flex py-2">
                <AiFillCheckCircle size={40} color="#19B5FE" />
                <span className="text-1xl  pt-2 pl-1">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </div>

              <div className="flex py-2">
                <AiFillCheckCircle size={40} color="#19B5FE" />
                <span className="text-1xl  pt-2 pl-1">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </div>

              <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-3 px-8 border border-blue-500 hover:border-transparent">
                Try Now
              </button>
            </div>
          </div>
          <div class="w-full  lg:w-1/3 md:w-2/4  sm:w-1/1  pb-4 p-2 ">
            <div className="bg-white w-full h-full rounded p-8 shadow-2xl">
              <span className="block text-3xl font-bold py-3">
                Proffessional
              </span>

              <div className="flex py-2">
                <AiFillCheckCircle size={40} color="#19B5FE" />
                <span className="text-1xl  pt-2 pl-1">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </div>

              <div className="flex py-2">
                <AiFillCheckCircle size={40} color="#19B5FE" />
                <span className="text-1xl  pt-2 pl-1">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </div>

              <div className="flex py-2">
                <AiFillCheckCircle size={40} color="#19B5FE" />
                <span className="text-1xl  pt-2 pl-1">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </div>

              <div className="flex py-2">
                <AiFillCheckCircle size={40} color="#19B5FE" />
                <span className="text-1xl  pt-2 pl-1">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </div>

              <div className="flex py-2">
                <AiFillCheckCircle size={40} color="#19B5FE" />
                <span className="text-1xl  pt-2 pl-1">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </div>

              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 border border-blue-700 ">
                Book a demo
              </button>
            </div>
          </div>
          <div class="w-full  lg:w-1/3 md:w-2/4  sm:w-1/1  pb-4 p-2">
            <div className="bg-white w-full h-full rounded p-8">
              <span className="block text-3xl font-bold py-3">Enterprise</span>

              <div className="flex py-2">
                <AiFillCheckCircle size={40} color="#19B5FE" />
                <span className="text-1xl  pt-2 pl-1">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </div>

              <div className="flex py-2">
                <AiFillCheckCircle size={40} color="#19B5FE" />
                <span className="text-1xl  pt-2 pl-1">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </div>

              <div className="flex py-2">
                <AiFillCheckCircle size={40} color="#19B5FE" />
                <span className="text-1xl  pt-2 pl-1">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </div>

              <div className="flex py-2">
                <AiFillCheckCircle size={40} color="#19B5FE" />
                <span className="text-1xl  pt-2 pl-1">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </div>

              <div className="flex py-2">
                <AiFillCheckCircle size={40} color="#19B5FE" />
                <span className="text-1xl  pt-2 pl-1">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </div>

              <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-3 px-8 border border-blue-500 hover:border-transparent">
                Try Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
