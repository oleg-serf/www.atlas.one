import React, { useEffect, useState, useRef } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import Swiper from "react-id-swiper"
import SwiperCore, { EffectFade } from "swiper"

export default function CaseStudies() {
  const [index, setIndex] = useState(0)
  const swiper1 = useRef(null)
  const swiper2 = useRef(null)

  const params = {
    slidesPerView: 1,
    speed: 1000,
    loop: true,
    touchRatio: 0,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    spaceBetween: 30,
    runCallbacksOnInit: true,
    onSlideChange: swiper => {
      setIndex(swiper.realIndex)
    },
  }

  SwiperCore.use([EffectFade])
  useEffect(() => {
    setInterval(() => {
      if (swiper1.current && swiper1.current.swiper) {
        swiper1.current.swiper.slideNext(1000)
        swiper2.current.swiper.slideNext(1000)
        setIndex(swiper1.current.swiper.realIndex)
      }
    }, 10000)
  }, [])

  const data = useStaticQuery(graphql`
    query {
      allContentfulCaseStudies {
        edges {
          node {
            title
            caseStudies {
              author
              comment
              position
            }
            images {
              fixed {
                srcSet
              }
            }
          }
        }
      }
    }
  `)

  const detail = data.allContentfulCaseStudies.edges[0].node.caseStudies
  const images = data.allContentfulCaseStudies.edges[0].node.images

  const slideRight = () => {
    if (swiper1.current && swiper1.current.swiper) {
      swiper1.current.swiper.slideNext(1000)
      swiper2.current.swiper.slideNext(1000)
      setIndex(swiper1.current.swiper.realIndex)
    }
  }

  const slideLeft = () => {
    if (swiper1.current && swiper1.current.swiper) {
      swiper1.current.swiper.slidePrev(1000)
      swiper2.current.swiper.slidePrev(1000)
      setIndex(swiper1.current.swiper.realIndex)
    }
  }

  return (
    <div className="py-24 bg-even relative" id="case-studies">
      <div className="max-w-6xl container mx-auto">
        <div className="flex flex-wrap-reverse mb-4 px-5 w-full">
          <div className="xl:w-1/3 lg:w-1/2 lg:justify-center">
            <Swiper
              effect="fade"
              fadeEffect={{
                crossFade: true,
              }}
              {...params}
              ref = {swiper2}
            >
              {images.map((image, i) => (
                <img
                  srcSet={image.fixed.srcSet}
                  alt="Altas Logo"
                  className="rounded-lg h-full"
                  key={i}
                />
              ))}
            </Swiper>
          </div>
          <div className="w-full xl:w-2/3 lg:w-1/2 lg:pl-16 mb-8 lg:mb-0">
            <div className="flex w-full">
              <h2 className="py-3 font-bold text-blue flex-1 uppercase tracking-title text-sm">
                {data.allContentfulCaseStudies.edges[0].node.title}
              </h2>
              <div className="py-3 flex-1">
                <div className="flex justify-end">
                  {/* eslint-disable-next-line */}
                  <div
                    className="border-r-2 px-2 cursor-pointer"
                    onClick={slideLeft}
                  >
                    <BsArrowLeft size={20} color={"#22A7F0"} />
                  </div>
                  {/* eslint-disable-next-line */}
                  <div className="px-2 cursor-pointer" onClick={slideRight}>
                    <BsArrowRight size={20} color={"#22A7F0"} />
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <Swiper
              {...params}
              ref = {swiper1}
            >
              {detail.map((edge, index) => (
                <div className="w-full" key={index}>
                  <div className="font-bold md:text-3xl py-10 text-xl">
                    {edge.comment}
                  </div>
                  <div className="flex">
                    <hr className="w-8 mx-0 my-auto border border-black" />
                    <span className="block md:text-xl pl-3" style={{fontFamily: "Gilroy-Bold"}}>
                      {edge.author}
                    </span>
                  </div>
                  <span className="text-16xl pl-11" style={{color: "#809AA9"}}>
                    {edge.position}
                  </span>
                </div>
              ))}
            </Swiper>
            <br />
            <div className="absolute lg:relative right-0 left-0 pagination-dots">
              <hr />
              <div className="flex justify-center lg:justify-start pt-5">
                {detail.map((item, i) => (
                  /* eslint-disable-next-line */
                  <div
                    className={`h-2 w-2 cursor-pointer border rounded-full m-1 ${
                      index === i ? "bg-lightblue" : "bg-white"
                    }`}
                    onClick={async () => {
                      if (swiper1.current && swiper1.current.swiper) {
                        await swiper1.current.swiper.slideTo(i + 1, 1000)
                        await swiper2.current.swiper.slideTo(i + 1, 1000)
                        setIndex(i)
                      }
                    }}
                    key={i}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
