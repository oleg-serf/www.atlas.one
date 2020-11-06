import React, { useEffect, useRef } from "react"
import { BsArrowUpShort } from "react-icons/bs"
import SEO from "./seo"
import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"

const Layout = ({ children, isTransparentHeader }) => {
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
    <React.Fragment>
      <SEO />
      <div className="app">
        {/* eslint-disable-next-line */}
        <div
          ref={button}
          className="fixed scrolltop w-12 h-12 bg-white flex items-center justify-center border opacity-0 cursor-pointer"
          onClick={()=>window.scrollTo(0,0)}
        >
          <BsArrowUpShort size={40} fill="#00AEEF" />
        </div>
        <div className="fixed w-full z-10 top-0">
          <Navbar isTransparentHeader={isTransparentHeader} />
        </div>
        <div className="main">{children}</div>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default Layout
