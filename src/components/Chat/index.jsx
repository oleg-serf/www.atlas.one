import React from "react"
import { ImPhone } from "react-icons/im"

const Chat = () => {
  return (
    <div className="bg-even">
      <div className="max-w-6xl mx-auto px-5 py-12 lg:py-24">
        <div className="w-full flex flex-wrap justify-center lg:justify-between items-center">
          <div className="flex flex-col items-center text-center lg:block lg:text-left">
            <h2 className="text-blue uppercase tracking-title text-sm">
              Need Help ?
            </h2>
            <h2 className="block text-3xl lg:text-5xl max-w-3xl mt-4 sub-title font-bold">
              Chat with our sales team
            </h2>
          </div>
          <button
            className="blue-button text-white font-medium lg:mx-0 py-3 px-6 mt-4 h-12 flex justify-between items-center"
            onClick={()=>typeof window !== 'undefined' && window.open("tel:8553929377", "_self")}
          >
            <span><ImPhone size={20} fill="#ffffff" /></span>
            <span className="px-2">+1 855-392-9377</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Chat
