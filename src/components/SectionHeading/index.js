import React from "react"

function SectionHeading({ data }) {
  return (
    <div>
      <h2 className="text-blue uppercase tracking-title text-sm">
        {data?.title}
      </h2>

      <h2 className="block text-3xl lg:text-5xl max-w-3xl mt-4 sub-title font-bold">
        {data?.description}{" "}
        <h2 className="text-blue inline">
          {data?.featuredSubtitle}
        </h2>
      </h2>
    </div>
  )
}

export default SectionHeading
