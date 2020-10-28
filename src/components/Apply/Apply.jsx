import React from "react"
import Icon  from "../../images/bullhorn.png"
export default function Brands() {
  return (
    <>
      <div className="text-center py-40 bg-gray-900">
        <div className="container max-w-6xl m-auto">
          <img src={Icon} alt="" className="m-auto"/>
          <span className="block lg:text-6xl font-bold pt-5 text-3xl text-white">
            Free Sponsored Program
          </span>
          <div className="flex justify-center">
            <span className="block text-3xl pt-5 pb-6 max-w-3xl text-white">
              Lorem ipsum dolor sit consectetur adipisicing elit. Id dicta
              officiis ab reprehenderit consequatur ipsa, perspiciatis
              exercitationem, quod reiciendis illum eius natus.
            </span>
          </div>

          <button className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-3 px-8  bg-blue-500 hover:border-transparent">
            Apply
          </button>
        </div>
      </div>
    </>
  )
}
