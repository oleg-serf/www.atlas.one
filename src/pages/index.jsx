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
  Communication,
  ContentCreation,
  Reporting,
  Apply,
} from "../components"
import Layout from "../components/layout"

export default () => {
  return (
    <div>
      <Layout>
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
      </Layout>
    </div>
  )
}
