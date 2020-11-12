import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default () => {
  return (
    <Layout>
      <div className="flex flex-col justify-center main404 bg-even">
        <div className="px-5 max-w-6xl mx-auto flex flex-wrap mt-20 items-center w-full">
          <div className="w-full py-12 h-full text-center">
            <h1 className="text-3xl lg:text-5xl sub-title mt-5">
              404 Not Found
            </h1>
            <h2 className="text-xl lg:text-3xl mt-5">
              The page you were looking for doesn't exist !
            </h2>
            <Link to="/">
              <button className="blue-button text-white font-medium lg:mx-0 py-3 px-6 mt-8">
                Go to home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
