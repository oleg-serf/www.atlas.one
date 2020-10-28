import React from "react"
import BottomLeft from "./../../images/Rectangle 171.png"

import { IoIosCreate } from "react-icons/io"

import { FaTelegramPlane, FaComments } from "react-icons/fa"
export default function Solutions() {
  return (
    <>
      <div className="mb-4 p-10  bg-gray-100">
        <div className="flex flex-wrap container m-auto max-w-6xl">
          <div className="xl:w-1/1 lg:w-1/2 lg:justify-center">
            <div
              className="relative"
              style={{
                position: "relative",
                maxHeight: "500px",
                height: "100%",
                maxWidth: "500px",
                width: "100%",
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
          <div className="xl:w-1/1 lg:w-1/2">
            <h2 className="block font-bold text-blue-500">SOLUTIONS</h2>
            <h2 className="block md:text-45xl text-25xl font-bold pt-5 tracking-tigh">
              Tools to help you manage{" "}
              <span className="text-blue-500">
                public communications strategy
              </span>
            </h2>
            <span className="block md:text-18xl text-lg pt-5 border-b-2 pb-5">
              Atlas One consists of a suite of modern public safety and
              government communication tools, providing everything your
              organization needs
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
                  Virtual two-way reporting
                </span>
              </div>
              <div className="flex py-1">
                <IoIosCreate size={28} color="#19B5FE" />{" "}
                <span className="font-bold pl-1 text-xl">
                  Connect creation and publishing
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
