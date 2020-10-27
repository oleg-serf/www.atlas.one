import React from "react"
export default function GetStart() {
  return (
    <>
      <div className="text-center py-40 ">
        <span className="block font-bold text-blue-500 text-xl uppercase">
          start today
        </span>
        <span className="block text-5xl font-bold pt-5">
          Ready to get started?
        </span>
        <div className="flex justify-center">
          <span className="block text-1xl pt-5 text-2xl pb-6 max-w-3xl">
            Get the community safe and informed of nearby public safety alerts
            and issues in their cities. Improve communications with your
            community.
          </span>
        </div>

        <button class="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-3 px-8 border bg-blue-500 hover:border-transparent">
          Book a demo
        </button>
      </div>
    </>
  )
}
