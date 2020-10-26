import React, { useState } from "react"
import Logo from "./../../images/logo.png"
import { FaFacebookSquare, FaTwitterSquare, FaInstagram } from "react-icons/fa"

export default function Footer() {
  const [isExpanded, toggleExpansion] = useState(false)
  const [navLinks, setNavLinks] = useState([
    "Case Studies",
    "Benefits",
    "Solutions",
    "Industries",
    "Pricing",
    "Resources",
    "Contact Us",
  ])
  return (
    <div className="lg:px-40 bg-gray-800 py-10">
      <nav className="flex items-center justify-between flex-wrap p-5 ">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <img src={Logo} alt="Altas Logo" />
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => toggleExpansion(!isExpanded)}
            className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`${
            isExpanded ? `block` : `hidden`
          } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-1 justify-center flex-col lg:h-auto">
            {navLinks.map((v, i) => {
              return (
                <a
                  key={i}
                  href="#"
                  className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
                >
                  <span className="text-white">{v}</span>
                </a>
              )
            })}
          </div>

          <div className="flex">
            <div className="px-2">
              <FaInstagram size={30} color="#fff"/>
            </div>
              
            <div className="px-2">
              <FaFacebookSquare size={30} color="#19B5FE"/>
            </div>
              
            <div className="px-2">
              <FaTwitterSquare size={30} color="#fff"/>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex flex-wrap justify-center">
        <span className="text-xl px-4 text-gray-400 border-r-2 border-gray-400">
          @ 2020 Atlas One. All right reserved. 
        </span>
        <span className="text-xl px-4 text-gray-400 border-r-2 border-gray-400">
          Privacy Policy
        </span>
        <span className="text-xl px-4 text-gray-400 ">
          Terms of Services
        </span>
      </div>
    </div>
  )
}
