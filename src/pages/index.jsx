import React from "react"
import {
  Header,
  Navbar,
  Brands,
  Footer,
  Benifits,
  CaseStudies,
  Solutions,
  Industries,
  Pricing,
  GetStart,
  Resources,
  Communication,
  ContentCreation,
  Reporting,
  Apply,
} from "../components"

export default () => {
  return (
    <div>
      <div className="fixed w-full z-10 top-0">
        <Navbar />
      </div>
      {/*  ********************* Header Section  ********************* */}
      <Header />
      {/*   *******************  BRANDS SECTION   *******************  */}
      <Brands />
      {/* ***************  CASE STUDIES SECTION  ***************  */}
      <CaseStudies />
      {/* *********************  BENIFITS SECTION  ********************* */}
      <Benifits />
      {/* *********************  SOLUTION SECTION  ********************** */}
      <Solutions />
      {/********************* COMMUNICATION SECTION *********************/}
      <Communication />
      {/********************* Reporting SECTION *********************/}
      <Reporting />
      {/* ContentCreation Section */}
      <ContentCreation />
      {/* ***************** INDUSTRIES SECTION *************  */}
      <Industries />
      {/* PRICING SECTION */}
      <Pricing />
      {/* ************* Apply Section  ************** */}
      <Apply />
      {/* ***********************  RESOURCES SECTION ***************************/}
      <Resources />
      {/* ***********************  GET STARTED SECTION ***********************  */}
      <GetStart />
      {/* ********************  Footer Section ******************** */}
      <Footer />
    </div>
  )
}
