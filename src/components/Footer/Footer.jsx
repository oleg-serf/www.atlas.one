import React from "react"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagram
} from "react-icons/fa"
import Logo from "./../../images/logo.png"
import "./footer.scss"

export default function Footer() {
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
            <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-1 justify-center flex-col lg:h-auto my-8 lg:my-0">
              {navLinks.map((item, i) => (
                <AnchorLink
                  key={i}
                  to={item.path}
                  className="lg:inline-flex lg:w-auto w-full font-600 px-3 py-2 rounded items-center justify-center"
                  activeClassName="activeLink"
                >
                  <span className="text-white hover:text-blue">
                    {item.name}
                  </span>
                </AnchorLink>
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

        <div className="flex flex-wrap lg:justify-center p-5">
          <span className="text-md px-4 text-gray-400 border-r-2 border-gray-400">
            @ 2020 Atlas One. All right reserved.
          </span>
          <Link to="/privacy-policy">
            <span className="text-md px-4 text-gray-400 border-r-2 border-gray-400 hover:text-blue">
              Privacy Policy
            </span>
          </Link>
          <Link to="/privacy-policy">
            <span className="text-md px-4 text-gray-400 hover:text-blue">
              Terms of Services
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}