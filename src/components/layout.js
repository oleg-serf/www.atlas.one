import React, { useEffect, useRef } from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { BsArrowUpShort } from "react-icons/bs"
import SEO from "./seo"
import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"

const Layout = ({ children }) => {
  const button = useRef(null)
  useEffect(() => {
    if (typeof window != "undefined") {
      window.addEventListener("scroll", function () {
        if (button && button.current) {
          if (window.pageYOffset > 400) {
            button.current.classList.add("activeButton")
          } else {
            //remove the background property so it comes transparent again (defined in your css)
            button.current.classList.remove("activeButton")
          }
        }
      })
    }
  }, [])

  return (
    <>
      <SEO />
      <div className="flex flex-col min-h-screen">
        <AnchorLink to="/">
          <div
            ref={button}
            className="fixed scrolltop w-12 h-12 bg-white flex items-center justify-center border opacity-0"
          >
            <BsArrowUpShort size={40} fill="#00AEEF" />
          </div>
        </AnchorLink>
        <div className="fixed w-full z-10 top-0">
          <Navbar />
        </div>
        {children}
        <Footer />
      </div>
    </>
  )
}

export default Layout
