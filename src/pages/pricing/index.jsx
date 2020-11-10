import React from "react"
import { Layout, Brands } from "../../components"

const RequestPage = ({ data }) => {
  
  return (
    <Layout isTransparentHeader={false}>
      <div className="flex items-center">
        <div className="px-5 max-w-6xl mx-auto w-full mt-20">
          <div className="w-full py-12 bg-even" style={{minHeight: "70vh"}}>
            
          </div>
        </div>
      </div>
      <Brands />
    </Layout>
  )
}

export default RequestPage