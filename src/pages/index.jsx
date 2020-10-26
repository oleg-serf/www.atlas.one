import React from "react"
import { Navbar, Brands, Footer } from "../components"
import { IoIosAirplane, IoMdSchool, IoIosCreate } from "react-icons/io"
import { RiGovernmentFill } from "react-icons/ri"
import { BsArrowRight } from "react-icons/bs"
import {
  AiOutlinePropertySafety,
  AiFillSecurityScan,
  AiFillCheckCircle,
  AiOutlineArrowRight,
} from "react-icons/ai"
import { FaPlusSquare, FaTelegramPlane, FaComments } from "react-icons/fa"
import HeaderImage from "./../images/header-placeholder.png"
import Icon from "./../images/icon.png"
import Profile from "./../images/profile.png"
import IndustriesImage from "./../images/Rectangle 168.png"
import Illustration from "./../images/Illustration.png"
import PlaceHold from "./../images/placehold.png"
import ContentCreation from "./../images/contentcreation.png"
import BottomLeft from "./../images/Rectangle 171.png"
import BlogImage from "./../images/blog.png"

export default () => {
  return (
    <div>
      {/* Header Section */}
      <div className="header bg-gray-800 xl:h-screen relative">
        <Navbar />

        <div className="flex">
          <div className="w-1/5 "></div>
          <div className="w-3/5 m-5 text-center mt-8">
            <span className="lg:text-6xl md:text-5xl sm:text-xl font-bold text-white">
              A modern approach to public safety communications
            </span>
            <br />
            <br />
            <span className="mt-2 lg:text-3xl md:text-2xl sm:text-lg lg:mx-1 text-white ">
              We help the leading public safety organizations professionally
              manage a sophisticated public communications strategy, from
              day-to-day operations to crisis response
            </span>
            <br />
            <div className="mt-2">
              <button className="w-40 m-2 bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-3 px-4 border border-blue-500 hover:border-transparent rounded">
                Pricing
              </button>
              <button className="w-40 m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded">
                Book a demo
              </button>
            </div>
            <img src={HeaderImage} alt="Altas Logo" className="m-auto h-auto" />
          </div>
          <div class="w-1/5  h-12"></div>
        </div>
      </div>
      {/* Brands */}
      <Brands />

      {/*  */}
      <div className="flex flex-wrap mb-4 p-10 lg:px-40 bg-gray-100">
        <div className="xl:w-1/3 lg:w-1/2 lg:justify-center">
          <img src={Profile} alt="Altas Logo" />
        </div>
        <div className="xl:w-2/3 lg:w-1/2">
          <div className="flex">
            <div className="py-3 font-bold text-blue-500 flex-1">
              CASE STUDIES
            </div>
            <div className="py-3 flex-1"> CASE STUDIES</div>
          </div>
          <hr />
          <div className="xl:text-4xl py-10 md:text-3xl">
            “All base UI elements are made using Nested <br /> Symbols and
            shared styles that are logically connected. Gorgeous, high-quality
            video sharing on desktop, mobile, tablet. All base UI elements are
            made using Nested Symbols”
          </div>

          <div>
            <span>Tom Riddle</span>
            <br />
            <span>Lead marketing specialist</span>
          </div>
          <br />
          <hr />

          <div className="flex py-3">
            <div className="h-2 w-2 bg-black rounded m-1"></div>
            <div className="h-2 w-2 bg-gray-600 rounded m-1"></div>
            <div className="h-2 w-2 bg-gray-600 rounded m-1"></div>
            <div className="h-2 w-2 bg-gray-600 rounded m-1"></div>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="p-10 lg:px-40 py-10">
        <div className="font-bold text-blue-500">BENIFITS</div>

        <span className="font-bold text-4xl">
          Lorem ipsum dolor sit amet
          <br /> consectetur{" "}
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
          <div className="w-full lg:w-1/3  md:w-2/4 sm:w-1/1  pr-10 pb-4 ">
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

      <div className="flex flex-warp lg:px-40 py-10">
        <div className="xl:w-1/2 pr-10 pb-4">
          <img src={BottomLeft} alt="Altas Logo" />
          {/* <div className="relative h-screen">
          <img src={TopRight} alt="Altas Logo" className="absolute bottom-0 right-0"/>
          </div> */}
        </div>
        <div className="xl:w-1/2 pr-10 pb-4">
          <span className="block font-bold text-blue-500">SOLUTIONS</span>
          <span className="block text-3xl font-bold pt-5">
            Tools to help you manage{" "}
            <span className="text-blue-500">
              public communications strategy
            </span>
          </span>

          <span className="block text-1xl pt-5 border-b-2 pb-5">
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

      <div className="lg:flex flex-warp lg:px-40 py-10 p-10">
        <div className="xl:w-1/2 pt-20 pr-10">
          <span className="block font-bold text-blue-500 text-xl uppercase">
            MULTI-CHANNEL COMMUNICATIONS
          </span>
          <span className="block text-5xl font-bold pt-5">
            Consistent messaging <br /> acroos{" "}
            <span className="text-blue-500">all your channels</span>
          </span>
          <span className="block text-1xl pt-5 text-2xl">
            Seprated they live in Boakmarks right at the coast of the famous
            Semantics, large language ocean Separated they live in Boakmarks
            right.
          </span>
          <div className="flex py-5">
            <span className="font-bold text-blue-500 pr-2">Learn More</span>{" "}
            <BsArrowRight size={28} color="#19B5FE" />
          </div>
        </div>
        <div className="xl:w-1/2 ">
          <img src={Illustration} alt="Altas Logo" className="w-full" />
        </div>
      </div>

      <div className="lg:flex flex-warp lg:px-40 py-10 p-10">
        <div className="xl:w-1/2 ">
          <img src={PlaceHold} alt="Altas Logo" className="w-full" />
        </div>
        <div className="xl:w-1/2 pt-20 pr-10">
          <span className="block font-bold text-blue-500 text-xl uppercase">
            virtual two-way reporting
          </span>
          <span className="block text-5xl font-bold pt-5">
            Collect public reports & <br /> feedback{" "}
            <span className="text-blue-500">in real-time</span>
          </span>
          <span className="block text-1xl pt-5 text-2xl">
            Seprated they live in Boakmarks right at the coast of the famous
            Semantics, large language ocean Separated they live in Boakmarks
            right....
          </span>
          <div className="flex py-5">
            <span className="font-bold text-blue-500 pr-2">
              {" "}
              Learn about our chat
            </span>{" "}
            <BsArrowRight size={28} color="#19B5FE" />
          </div>
        </div>
      </div>

      <div className="lg:flex flex-warp lg:px-40 py-10 p-10">
        <div className="xl:w-1/2 pt-15 pr-10">
          <span className="block font-bold text-blue-500 text-xl uppercase">
            Content creation & publishing
          </span>
          <span className="block text-5xl font-bold pt-5">
            Produce Actionable
            <br />{" "}
            <span className="text-blue-500">safety guides & content</span>
          </span>
          <span className="block text-1xl pt-5 text-2xl">
            Seprated they live in Boakmarks right at the coast of the famous
            Semantics, large language ocean Separated they live in Boakmarks
            right{" "}
          </span>
          <div className="flex py-5">
            <span className="font-bold text-blue-500 pr-2">Learn More</span>{" "}
            <BsArrowRight size={28} color="#19B5FE" />
          </div>
        </div>
        <div className="xl:w-1/2 ">
          <img src={ContentCreation} alt="Altas Logo" className="w-full" />
        </div>
      </div>

      <div class="p-10 lg:px-40 py-10 bg-gray-100">
        <span className="font-bold text-blue-500 block uppercase">
          Industries
        </span>

        <span className="font-bold text-4xl">Industries We Serve</span>

        <span className="block text-1xl pt-5 text-2xl">
          Seprated they live in Boakmarks right at the coast of
          <br /> the famous Semantics, large language.
        </span>

        <div className="flex flex-wrap py-2 mt-20">
          <div class="w-full lg:w-1/3 md:w-2/4 sm:w-1/1 pb-4 p-2">
            <div className="shadow-xl flex bg-white p-2 rounded mb-4">
              <div className="w-1/3 bg-indigo-700 rounded mx-2 flex">
                <RiGovernmentFill size={50} className="m-auto" color="#fff" />
              </div>
              <div className="w-2/3">
                <span className="font-bold">Government</span>
                <span className="block">
                  The group of people with the authority to govern a country or
                  state
                </span>
              </div>
            </div>

            <div className="shadow flex bg-white p-2 rounded mb-4">
              <div className="w-1/3 bg-indigo-700 rounded mx-2 flex">
                <AiOutlinePropertySafety
                  size={50}
                  className="m-auto"
                  color="#fff"
                />
              </div>
              <div className="w-2/3">
                <span className="font-bold">Government</span>
                <span className="block">
                  The group of people with the authority to govern a country or
                  state
                </span>
              </div>
            </div>

            <div className="shadow flex bg-white p-2 rounded mb-4">
              <div className="w-1/3 bg-indigo-700 rounded mx-2 flex">
                <IoMdSchool size={50} className="m-auto" color="#fff" />
              </div>
              <div className="w-2/3">
                <span className="font-bold">Government</span>
                <span className="block">
                  The group of people with the authority to govern a country or
                  state
                </span>
              </div>
            </div>
          </div>
          <div class="w-full  lg:w-1/3 md:w-2/4  sm:w-1/1  p-2">
            <div className="shadow flex bg-white p-2 rounded mb-4">
              <div className="w-1/3 bg-indigo-700 rounded mx-2 flex">
                <FaPlusSquare size={50} className="m-auto" color="#fff" />
              </div>
              <div className="w-2/3">
                <span className="font-bold">Government</span>
                <span className="block">
                  The group of people with the authority to govern a country or
                  state
                </span>
              </div>
            </div>

            <div className="shadow flex bg-white p-2 rounded mb-4">
              <div className="w-1/3 bg-indigo-700 rounded mx-2 flex">
                <IoIosAirplane size={50} className="m-auto" color="#fff" />
              </div>
              <div className="w-2/3">
                <span className="font-bold">Government</span>
                <span className="block">
                  The group of people with the authority to govern a country or
                  state
                </span>
              </div>
            </div>

            <div className="shadow flex bg-white p-2 rounded mb-4">
              <div className="w-1/3 bg-indigo-700 rounded mx-2 flex">
                <AiFillSecurityScan size={50} className="m-auto" color="#fff" />
              </div>
              <div className="w-2/3">
                <span className="font-bold">Government</span>
                <span className="block">
                  The group of people with the authority to govern a country or
                  state
                </span>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-1/3 md:w-2/4 sm:w-1/1 pb-4 p-2">
            <img src={IndustriesImage} alt="Altas Logo" className="w-full" />
          </div>
        </div>
      </div>

      <div class="p-10 lg:px-40 py-10 bg-gray-200 ">
        <div className="text-center">
          <span className="font-bold text-blue-500 block uppercase">
            Pricing
          </span>

          <span className="font-bold text-4xl">Explore our pricing plans</span>
        </div>

        <div className="flex flex-wrap py-2 mt-20">
          <div class="w-full lg:w-1/3 md:w-2/4 sm:w-1/1 pb-4 p-2">
            <div className="bg-white w-full h-full rounded p-8">
              <span className="block text-3xl font-bold py-3">Essential</span>

              <div className="flex py-2">
                <AiFillCheckCircle size={40} color="#19B5FE" />
                <span className="text-1xl pt-2 pl-1">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </div>
              <div className="flex py-2">
                <AiFillCheckCircle size={40} color="#19B5FE" />
                <span className="text-1xl pt-2 pl-1">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </div>

              <div className="flex py-2">
                <AiFillCheckCircle size={40} color="#19B5FE" />
                <span className="text-1xl pt-2 pl-1">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </div>

              <div className="flex py-2">
                <AiFillCheckCircle size={40} color="#19B5FE" />
                <span className="text-1xl pt-2 pl-1">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </div>

              <div className="flex py-2">
                <AiFillCheckCircle size={40} color="#19B5FE" />
                <span className="text-1xl pt-2 pl-1">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </div>

              <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-3 px-8 border border-blue-500 hover:border-transparent">
                Try Now
              </button>
            </div>
          </div>
          <div class="w-full lg:w-1/3 md:w-2/4 sm:w-1/1 pb-4 p-2 ">
            <div className="bg-white w-full h-full rounded p-8 shadow-2xl">
              <span className="block text-3xl font-bold py-3">
                Proffessional
              </span>

              <div className="flex py-2">
                <AiFillCheckCircle size={40} color="#19B5FE" />
                <span className="text-1xl  pt-2 pl-1">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </div>

              <div className="flex py-2">
                <AiFillCheckCircle size={40} color="#19B5FE" />
                <span className="text-1xl pt-2 pl-1">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </div>

              <div className="flex py-2">
                <AiFillCheckCircle size={40} color="#19B5FE" />
                <span className="text-1xl  pt-2 pl-1">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </div>

              <div className="flex py-2">
                <AiFillCheckCircle size={40} color="#19B5FE" />
                <span className="text-1xl pt-2 pl-1">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </div>

              <div className="flex py-2">
                <AiFillCheckCircle size={40} color="#19B5FE" />
                <span className="text-1xl pt-2 pl-1">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </div>

              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 border border-blue-700 ">
                Book a demo
              </button>
            </div>
          </div>
          <div class="w-full lg:w-1/3 md:w-2/4 sm:w-1/1 pb-4 p-2">
            <div className="bg-white w-full h-full rounded p-8">
              <span className="block text-3xl font-bold py-3">Enterprise</span>

              <div className="flex py-2">
                <AiFillCheckCircle size={40} color="#19B5FE" />
                <span className="text-1xl pt-2 pl-1">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </div>

              <div className="flex py-2">
                <AiFillCheckCircle size={40} color="#19B5FE" />
                <span className="text-1xl  pt-2 pl-1">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </div>

              <div className="flex py-2">
                <AiFillCheckCircle size={40} color="#19B5FE" />
                <span className="text-1xl pt-2 pl-1">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </div>

              <div className="flex py-2">
                <AiFillCheckCircle size={40} color="#19B5FE" />
                <span className="text-1xl  pt-2 pl-1">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </div>

              <div className="flex py-2">
                <AiFillCheckCircle size={40} color="#19B5FE" />
                <span className="text-1xl  pt-2 pl-1">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </div>

              <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-3 px-8 border border-blue-500 hover:border-transparent">
                Try Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* *************************** */}

      <div className="text-center py-40 bg-gray-300">
        <span className="block font-bold text-blue-500 text-xl uppercase">
          start today
        </span>
        <span className="block text-5xl font-bold pt-5">
          Free Sponsored Program
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

      {/* *********************** */}

      <div class="p-10 lg:px-40 py-10 bg-gray-100">
        <span className="font-bold text-blue-500 block uppercase">
          Recourses
        </span>

        <span className="font-bold text-4xl">
          Explore our useful <span className="text-blue-500">resourses</span>
        </span>

        <span className="block text-1xl pt-5 text-xl">
          Separated they live in Bookmarks right at the cost of the famous
          Semantics
          <br /> large language ocean Separated they live in Bookmarks right.
        </span>

        <div className="flex flex-wrap py-2 mt-20">
          <div class="w-full  lg:w-1/3 md:w-2/4  sm:w-1/1  pb-4 p-8">
            <div className="bg-white w-full h-full rounded">
              <div className="pb-5">
                <img src={BlogImage} alt="Altas Logo" />
              </div>
              <div className="px-2">
                <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-8 border border-blue-500 hover:border-transparent">
                  Try Now
                </button>

                <span className="block font-bold py-3 text-2xl">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </span>

                <div className="flex py-5">
                  <span className="font-bold text-blue-500 pr-1">Explore</span>{" "}
                  <BsArrowRight size={28} color="#19B5FE" />
                </div>
              </div>
            </div>
          </div>

          <div class="w-full  lg:w-1/3 md:w-2/4  sm:w-1/1  pb-4 p-8">
            <div className="bg-white w-full h-full rounded">
              <div className="pb-5">
                <img src={BlogImage} alt="Altas Logo" />
              </div>
              <div className="px-2">
                <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-8 border border-blue-500 hover:border-transparent">
                  Try Now
                </button>

                <span className="block font-bold py-3 text-2xl">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </span>

                <div className="flex py-5">
                  <span className="font-bold text-blue-500 pr-1">Explore</span>{" "}
                  <BsArrowRight size={28} color="#19B5FE" />
                </div>
              </div>
            </div>
          </div>

          <div class="w-full  lg:w-1/3 md:w-2/4  sm:w-1/1  pb-4 p-8">
            <div className="bg-white w-full h-full rounded">
              <div className="pb-5">
                <img src={BlogImage} alt="Altas Logo" />
              </div>
              <div className="px-2">
                <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-8 border border-blue-500 hover:border-transparent">
                  Try Now
                </button>

                <span className="block font-bold py-3 text-2xl">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </span>

                <div className="flex py-5">
                  <span className="font-bold text-blue-500 pr-1">Explore</span>{" "}
                  <BsArrowRight size={28} color="#19B5FE" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* *************************** */}

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

      {/* Footer Section */}
      <Footer />
    </div>
    // <Layout></Layout>
  )
}
