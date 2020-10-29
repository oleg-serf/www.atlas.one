import React from "react"
import SEO from "./seo"
import Navbar from "./Navbar/Navbar"
const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <div className="flex flex-col min-h-screen bg-gray-200">
       <Navbar />
        {children}
    
      </div>
    </>
  )
}

export default Layout
