import React, { useState } from "react"
import BottomLeft from "./../../images/Rectangle 171.png"

import { IoIosCreate } from "react-icons/io"

import { FaTelegramPlane, FaComments } from "react-icons/fa"
export default function Solutions() {
  return (
    <>
      <div class="flex flex-wrap mb-4 p-10 lg:px-40 bg-gray-100">
        <div class="xl:w-1/1 lg:w-1/2 lg:justify-center">
          <div
            style={{
              position: "relative",
              height: "500px",
              width: "500px",
            }}
          >
            <img
              src={BottomLeft}
              alt="Altas Logo"
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                maxWidth: "300px",
                width: "100%",
              }}
            />
            <img
              src={BottomLeft}
              alt="Altas Logo"
              style={{
                position: "absolute",
                right: 0,
                bottom: 0,
                maxWidth: "300px",
                width: "100%",
              }}
            />
          </div>
        </div>
        <div class="xl:w-1/1 lg:w-1/2">
          <span className="block font-bold text-blue-500">SOLUTIONS</span>
          <span className="block text-5xl font-bold pt-5">
            Tools to help you manage{" "}
            <span className="text-blue-500">
              public communications strategy
            </span>
          </span>
          <span className="block text-2xl pt-5 border-b-2 pb-5">
            Live Two-Way Text Conversations Photo, Video, Audio, Location
            Enabled Modern Ticketing & Management Integrated CRM Profiles
          </span>

          <div className="pt-5">
            <div className="flex py-1">
              <FaTelegramPlane size={28} color="#19B5FE" />{" "}
              <span className="font-bold pl-1 text-xl">
                Multi-channel communications
              </span>
            </div>
            <div className="flex py-1">
              <FaComments size={28} color="#19B5FE" />{" "}
              <span className="font-bold pl-1 text-xl">
                Multi-channel communications
              </span>
            </div>
            <div className="flex py-1">
              <IoIosCreate size={28} color="#19B5FE" />{" "}
              <span className="font-bold pl-1 text-xl">
                Multi-channel communications
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
