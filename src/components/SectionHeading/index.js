import React from "react"

function SectionHeading({ data, isHero = false }) {
  return (
    <div
      className={isHero ? "flex flex-col items-center text-center lg:block lg:text-left" : ""}
    >
      <h2 className="text-blue uppercase tracking-title text-sm lg:pl-1">
        {data?.title}
      </h2>

      <h2 className="block text-3xl lg:text-45xl max-w-3xl mt-4 sub-title font-bold">
        {data?.description}{" "}
        <h2 className="text-blue inline">
          {data?.featuredSubtitle}
        </h2>
      </h2>
    </div>
  )
}

export default SectionHeading
