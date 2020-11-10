import React from "react"
import { Link } from "gatsby"
import { Layout } from "../../components"
import Check from "../../images/check.png"

const Success = ({ data }) => {
  return (
    <Layout isTransparentHeader={false}>
      <div className=" h-full ">
        <div className="px-5 max-w-6xl mx-auto w-full mt-20">
          <div className="w-full min-h-screen flex items-center justify-center flex-col">
            <h1 className="text-black text-2xl lg:text-5xl my-2">
              We will be in touch
            </h1>
            <p className="text-md my-4 text-center">
              Thank you for your interest in Atlas One. <br />
              A member of our team will be in touch with you shortly.
            </p>
            <img className="my-8" src={Check} alt="logo" />
            <p className="text-md my-4">
              In the meantime, check out our resources!
            </p>
            <Link to="/resources">
              <button className="blue-button hover:text-white font-semibold mt-4 py-3 px-8 border border-blue-500 w-full lg:w-auto">
                Go to Resources
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Success