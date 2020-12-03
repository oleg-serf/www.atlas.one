import React from "react"
import {
  Header,
  Brands,
  Benifits,
  CaseStudies,
  Solutions,
  Industries,
  Pricing,
  GetStart,
  Resources,
  Apply,
} from "../components"
import Layout from "../components/layout"

export default () => {
  return (
    <div>
      <Layout isTransparentHeader>
        {/*  ********************* Header Section  ********************* */}
        <Header />
        {/*   *******************  BRANDS SECTION   *******************  */}
        <Brands isLanding />
        {/*   ***************  CASE STUDIES SECTION  ***************  */}
        <CaseStudies />
        {/* *********************  BENIFITS SECTION  ********************* */}
        <Benifits />
        {/* *********************  SOLUTION SECTION  ********************** */}
        <Solutions />
        {/* ***************** INDUSTRIES SECTION *************  */}
        <Industries />
        {/* PRICING SECTION */}
        <Pricing />
        {/* ************* Apply Section  ************** */}
        <Apply />
        {/* ***********************  RESOURCES SECTION ***************************/}
        <Resources showTitle showThree />
        {/* ***********************  GET STARTED SECTION ***********************  */}
        <GetStart />
        {/* ********************  Footer Section ******************** */}
      </Layout>
    </div>
  )
}