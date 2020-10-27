import React  from "react"
import HeaderImage from "./../../images/header-placeholder.png"
import Navbar from "./../Navbar/Navbar"
export default function Header() {
  return (
    <>
      <div className="header bg-gray-800 xl:h-screen relative">
        <Navbar />

        <div className="flex">
          <div className="w-1/5 "></div>
          <div className="w-3/5 m-5 text-center mt-8">
            <span className="lg:text-6xl md:text-5xl sm:text-xl font-bold text-white">
              A modern approach to public safety communications
            </span>
            <br />
            <br />
            <span className="mt-2 lg:text-3xl md:text-2xl sm:text-lg lg:mx-1 text-white ">
              We help the leading public safety organizations professionally
              manage a sophisticated public communications strategy, from
              day-to-day operations to crisis response
            </span>
            <br />
            <div className="mt-2">
              <button className="w-40 m-2 bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-3 px-4 border border-blue-500 hover:border-transparent rounded">
                Pricing
              </button>
              <button className="w-40 m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded">
                Book a demo
              </button>
            </div>
            <img src={HeaderImage} alt="Altas Logo" className="m-auto h-auto" />
          </div>
          <div class="w-1/5  h-12"></div>
        </div>
      </div>
    </>
  )
}
