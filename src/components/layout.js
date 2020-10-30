import React from "react"
import SEO from "./seo"
import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <div className="flex flex-col min-h-screen">
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
