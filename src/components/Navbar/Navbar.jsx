import React, { useState, useRef, useEffect } from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import LogoWhite from "./../../images/logo.png"
import LogoBlack from "../../images/black-blue.png"
import "./navbar.scss"

export default function Header() {
  const [isExpanded, toggleExpansion] = useState(false)
  const [currentLogo, setLogo] = useState(LogoWhite)
  const navLinks = [
    {
      name: "Case Studies",
      path: "#case-studies",
    },
    {
      name: "Benefits",
      path: "#benifits",
    },
    {
      name: "Solutions",
      path: "#solutions",
    },
    {
      name: "Industries",
      path: "#industries",
    },
    {
      name: "Pricing",
      path: "#pricing",
    },
    {
      name: "Resources",
      path: "#resources",
    },
    {
      name: "Contact Us",
      path: "#contact-us",
    },
  ]

  const nav = useRef(null)

  useEffect(() => {
    if (typeof window != "undefined") {
      window.addEventListener("scroll", function () {
        if (nav) {
          if (window.pageYOffset > 0) {
            nav.current.classList.add("active")
            setLogo(LogoBlack)
          } else {
            //remove the background property so it comes transparent again (defined in your css)
            nav.current.classList.remove("active")
            setLogo(LogoWhite)
          }
        }
      })
    }
  }, [])

  return (
    <nav
      ref={nav}
      className="flex nav items-center justify-between absolute w-full z-30 flex-wrap p-5 lg:px-10 border-b border-gray-700"
    >
      <AnchorLink
        to="/"
        className="flex items-center flex-shrink-0 text-white mr-6"
      >
        <img src={currentLogo} alt="Altas Logo" />
      </AnchorLink>
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
          {navLinks.map((item, i) => (
            <AnchorLink
              key={i}
              to={item.path}
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:bg-gray-900 hover:text-white"
            >
              <span>{item.name}</span>
            </AnchorLink>
          ))}
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
