import React from "react"
import { BsArrowRight } from "react-icons/bs"
import Illustration from "./../../images/Illustration.png"
import PlaceHold from "./../../images/placehold.png"

export default function Communication() {
  return (
    <>
      <div className="lg:flex flex-warp lg:px-40 py-10 p-10">
        <div className="xl:w-1/2 pt-20 pr-10">
          <span className="block font-bold text-blue-500 text-xl uppercase">
            MULTI-CHANNEL COMMUNICATIONS
          </span>
          <span className="block text-5xl font-bold pt-5">
            Consistent messaging <br /> acroos{" "}
            <span className="text-blue-500">all your channels</span>
          </span>
          <span className="block text-1xl pt-5 text-2xl">
            Seprated they live in Boakmarks right at the coast of the famous
            Semantics, large language ocean Separated they live in Boakmarks
            right.
          </span>
          <div className="flex py-5">
            <span className="font-bold text-blue-500 pr-2">Learn More</span>{" "}
            <BsArrowRight size={28} color="#19B5FE" />
          </div>
        </div>
        <div className="xl:w-1/2 ">
          <img src={Illustration} alt="Altas Logo" className="w-full" />
        </div>
      </div>
      <div className="lg:flex flex-warp lg:px-40 py-10 p-10">
        <div className="xl:w-1/2 ">
          <img src={PlaceHold} alt="Altas Logo" className="w-full" />
        </div>
        <div className="xl:w-1/2 pt-20 pr-10">
          <span className="block font-bold text-blue-500 text-xl uppercase">
            virtual two-way reporting
          </span>
          <span className="block text-5xl font-bold pt-5">
            Collect public reports & feedback {"     "}
            <span className="text-blue-500">in real-time</span>
          </span>
          <span className="block text-1xl pt-5 text-2xl">
            Seprated they live in Boakmarks right at the coast of the famous
            Semantics, large language ocean Separated they live in Boakmarks
            right....
          </span>
          <div className="flex py-5">
            <span className="font-bold text-blue-500 pr-2">
              Learn about our chat
            </span>{" "}
            <BsArrowRight size={28} color="#19B5FE" />
          </div>
        </div>
      </div>
    </>
  )
}
