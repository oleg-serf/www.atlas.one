import React, { useState } from "react"
import {
    GoogleLogo,
    EbayLogo,
    CNNLogo,
    CiscoLogo,
    AirbnbLogo,
  } from "../../images/index"
export default function Brands() {

  return (
    <>
      <div className="xl:h-56">  </div>
      <div className="justify-center text-center p-8">
        <p>Trusted over 2300+ companies</p>
        <div className="flex flex-wrap justify-center  p-6">
          <div className="p-5 mx-5">
            <img src={EbayLogo} alt="Ebay Logo" />
          </div>
          <div className="p-5 mx-5">
            <img src={CNNLogo} alt="CNN Logo" />
          </div>
          <div className="p-5 mx-5">
            <img src={GoogleLogo} alt="Google Logo" />
          </div>
          <div className="p-5 mx-5">
            <img src={CiscoLogo} alt="Cisco Logo" />
          </div>
          <div className="p-5 mx-5">
            <img src={AirbnbLogo} alt="Airbnb Logo" />
          </div>
        </div>
      </div>
    </>
  )
}
