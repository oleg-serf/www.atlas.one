import React, { useEffect, useState } from "react"
import { Link } from "react-scroll"
import { Link as GatsbyLink } from "gatsby"
import {
  FaFacebookSquare,
  FaTwitterSquare,
  // FaInstagram
} from "react-icons/fa"
import Logo from "./../../images/logo.png"
import "./footer.scss"

export default function Footer() {
  const [width, setWidth] = useState(1440)

  useEffect(() => {
    if (typeof window != "undefined") {
      const handleWindowResize = () => setWidth(window.innerWidth)

      window.addEventListener("resize", handleWindowResize)
      return () => window.removeEventListener("resize", handleWindowResize)
    }
  }, [])

  const navLinks = [
    {
      name: "Case Studies",
      path: "case-studies",
    },
    {
      name: "Benefits",
      path: "benifits",
    },
    {
      name: "Solutions",
      path: "solutions",
    },
    {
      name: "Industries",
      path: "industries",
    },
    {
      name: "Pricing",
      path: "pricing",
    },
    {
      name: "Resources",
      path: "resources",
    },
    {
      name: "Contact Us",
      path: "contact-us",
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
                <Link
                  key={i}
                  className="lg:inline-flex cursor-pointer lg:w-auto w-full font-600 px-3 py-2 rounded items-center justify-center"
                  spy={true}
                  smooth={true}
                  offset={width > 767 ? -100 : -50}
                  duration={100}
                  hashSpy={true}
                  to={item.path}
                >
                  <span className="text-menu hover:text-blue">
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>

            <div className="flex">
              {/* <div className="px-2">
                <FaInstagram size={30} color="#fff" />
              </div> */}

              <div className="px-2 social-icon">
                <FaFacebookSquare size={30} />
              </div>

              <div className="px-2 social-icon">
                <FaTwitterSquare size={30} />
              </div>
            </div>
          </div>
        </nav>

        <div className="p-5 grid md:grid-cols-2 sm:grid-cols-1">
          <span className="text-sm text-center md:text-right px-4 text-grey border-gray-400">
            @ 2020 Atlas One. All right reserved.
          </span>
          <div className="text-center md:text-left">
            <GatsbyLink to="/privacy-policy">
              <span className="text-sm px-4 text-grey border-0 md:border-l border-grey-20 hover:text-blue">
                Privacy Policy
              </span>
            </GatsbyLink>
            <GatsbyLink to="/terms-and-condition">
              <span className="text-sm px-4 text-grey border-l border-grey-20 hover:text-blue">
                Terms of Services
              </span>
            </GatsbyLink>
          </div>
        </div>
      </div>
    </div>
  )
}