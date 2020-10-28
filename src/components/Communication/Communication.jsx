import React from "react"
import { BsArrowRight } from "react-icons/bs"
import Illustration from "./../../images/Illustration.png"
import PlaceHold from "./../../images/placehold.png"

export default function Communication() {
  return (
    <>
      <div className="lg:flex flex-warp container m-auto max-w-6xl py-10 p-5">
        <div className="xl:w-1/2 pt-20 md:pr-10">
          <span className="block font-bold text-blue-500 text-xl uppercase">
            MULTI-CHANNEL COMMUNICATIONS
          </span>
          <span className="block md:text-45xl text-3xl font-bold pt-5">
            Consistent messaging  acroos{" "}
            <span className="text-blue-500">all your channels</span>
          </span>
          <span className="block text-18xl pt-5 md:text-2xl">
            Seprated they live in Boakmarks right at the coast of the famous Semantics, 
            large language ocean Separated they live in Boakmarks right.
          </span>
          <div className="flex py-5">
            <span className="font-bold text-blue-500 pr-2">Learn More</span>{" "}
            <BsArrowRight size={28} color="#19B5FE" />
          </div>
        </div>
        <div className="xl:w-1/2 max-w-2xl m-auto">
          <img src={Illustration} alt="Altas Logo" className="w-full" style={{minWidth: "300px", minHeight: "300px"}}/>
        </div>
      </div>
      <div className="lg:flex flex-warp container m-auto max-w-6xl py-10 p-5">
        <div className="xl:w-1/2 max-w-2xl m-auto">
          <img src={PlaceHold} alt="Altas Logo" className="w-full" style={{minWidth: "300px", minHeight: "300px"}}/>
        </div>
        <div className="xl:w-1/2 pt-20 md:pr-10">
          <span className="block font-bold text-blue-500 text-xl uppercase">
            virtual two-way reporting
          </span>
          <span className="block md:text-45xl text-3xl font-bold pt-5">
          Collect public reports & feedback {" "}
            <span className="text-blue-500">in real-time</span>
          </span>
          <span className="block text-18xl pt-5 md:text-2xl">
            Seprated they live in Boakmarks right at the coast of the famous Semantics, 
            large language ocean Separated they live in Boakmarks right....
          </span>
          <div className="flex py-5">
            <span className="font-bold text-blue-500 pr-2">Learn More</span>{" "}
            <BsArrowRight size={28} color="#19B5FE" />
          </div>
        </div>
      </div>
    </>
  )
}
