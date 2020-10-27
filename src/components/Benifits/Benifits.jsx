import React  from "react"
import Icon from "./../../images/icon.png"


export default function Benifits() {
  return (
    <>
      <div class="p-10 lg:px-40 py-10">
        <div className="font-bold text-blue-500">BENIFITS</div>

        <span className="block font-bold text-4xl max-w-xl">
          Lorem ipsum dolor sit amet consectetur{" "}
          <span className="text-blue-400">adipiscing elit</span>
        </span>

        <div className="flex flex-wrap py-2 mt-20">
          <div class="w-full  lg:w-1/3 md:w-2/4  sm:w-1/1  pr-10 pb-4 ">
            <img src={Icon} alt="Altas Logo" />
            <span className="block text-3xl font-bold pt-5">
              Real-time{" "}
              <span className="text-blue-500">
                content creation & publishing
              </span>
            </span>
            <span className="text-1xl">
              Create Interactive Safety Guides “No-Code” Drag and Drop App
              Builder Create Guides, Incidents, Events, and Places Publish &
              Update in Real-Time
            </span>
          </div>
          <div class="w-full  lg:w-1/3 md:w-2/4  sm:w-1/1 pr-10  pb-4">
            <img src={Icon} alt="Altas Logo" />
            <span className="block text-3xl font-bold pt-5">
              Two-way{" "}
              <span className="text-blue-500">
                conversations & virtual reporting
              </span>
            </span>
            <span className="text-1xl">
              Live Two-Way Text Conversations Photo, Video, Audio, Location
              Enabled Modern Ticketing & Management Integrated CRM Profiles
            </span>
          </div>
          <div class="w-full lg:w-1/3  md:w-2/4 sm:w-1/1  pr-10 pb-4 ">
            <img src={Icon} alt="Altas Logo" />
            <span className="block text-3xl font-bold pt-5">
              Multi-channel{" "}
              <span className="text-blue-500">messaging & alerts</span>
            </span>
            <span className="text-1xl">
              Mass Notifications, Targeted Geo-Fenced Alerts, Multi-Channel
              Distribution, Rich Multimedia Support and more
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
