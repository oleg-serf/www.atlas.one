import React, { useState } from "react"
import Logo from "./../../images/logo.png"

export default function Header() {
  const [isExpanded, toggleExpansion] = useState(false)
  const [navLinks, setNavLinks] = useState([
    "Case Studies", 
    "Benefits", 
    "Solutions", 
    "Industries", 
    "Pricing", 
    "Resources", 
    "Contact Us"
  ]);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-5 lg:px-10 border-b border-gray-700">
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
        {
          navLinks.map((v, i)=> (
            <a
              key={i}
              href="#"
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
            >
              <span className="text-white">{v}</span>
            </a>
          ))
        }         
        </div>
        <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ">
            Book a demo
          </button>{" "}
        </div>
      </div>
    </nav>
  )
}
