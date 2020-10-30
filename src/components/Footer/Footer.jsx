import React from "react"
import { Link } from "gatsby"
import { FaFacebookSquare, FaTwitterSquare, FaInstagram } from "react-icons/fa"
import Logo from "./../../images/logo.png"

export default function Footer() {
  const navLinks = [
    "Case Studies",
    "Benefits",
    "Solutions",
    "Industries",
    "Pricing",
    "Resources",
    "Contact Us",
  ]

  return (
    <div className="footer py-10">
      <div className="container m-auto">
        <nav className="flex items-center justify-between flex-wrap p-5 ">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <img src={Logo} alt="Altas Logo" />
          </div>

          <div
            className={`${
              true ? `block` : `hidden`
            } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
          >
            <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-1 justify-center flex-col lg:h-auto">
              {navLinks.map((v, i) => (
                <Link
                  key={i}
                  to="#"
                  className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
                >
                  <span className="text-white">{v}</span>
                </Link>
              ))}
            </div>

            <div className="flex">
              <div className="px-2">
                <FaInstagram size={30} color="#fff" />
              </div>

              <div className="px-2">
                <FaFacebookSquare size={30} color="#19B5FE" />
              </div>

              <div className="px-2">
                <FaTwitterSquare size={30} color="#fff" />
              </div>
            </div>
          </div>
        </nav>

        <div className="flex flex-wrap justify-center">
          <span className="text-xl px-4 text-gray-400 border-r-2 border-gray-400">
            @ 2020 Atlas One. All right reserved.
          </span>
          <Link to="/privacy-policy">
            <span className="text-xl px-4 text-gray-400 border-r-2 border-gray-400">
              Privacy Policy
            </span>
          </Link>
          <Link to="/privacy-policy">
            <span className="text-xl px-4 text-gray-400">
              Terms of Services
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}