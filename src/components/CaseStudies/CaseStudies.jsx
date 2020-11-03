import React, { useEffect, useState, useRef } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Swiper from "react-id-swiper"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"

export default function CaseStudies() {
  const [index, setIndex] = useState(0)
  const [swiper, setSwiper] = useState(null);

  const params = {
    slidesPerView: 1,
    speed : 1000,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    spaceBetween: 30,
    autoplay: true,
    runCallbacksOnInit: true,
    onInit: swiper => {
      setSwiper(swiper)
    }
  }
 
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(autoPlayer, 10000);
    return() => clearInterval(intervalRef.current);
  })

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
 
  const autoPlayer = () => {
    if(swiper) {
      swiper.slideNext(1000)
      if(index < detail.length - 1) setIndex(index+1)
    }
  }
  const clearPlayer = (i) => {
    if(swiper && swiper.params){
      swiper.slideTo(i,1000)
      setIndex(i)
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(autoPlayer, 10000);
    }
  }

  const slideRight = () => {
    if(index < detail.length - 1)
    {
      clearPlayer(index + 1);
    }
  }
  const slideLeft = () => {
    if(index > 0){
      clearPlayer(index - 1);
    }
  }
  
  return (
    <div className="py-12 md:py-24 bg-even" id="case-studies">
      <div className="max-w-6xl container mx-auto">
        <Swiper {...params} ref={node => {if (node) setSwiper(node.swiper)}}> 
          {detail.map((edge,index) => (
            <div className="flex flex-wrap-reverse mb-4 px-5 w-full">
              <div className="xl:w-1/3 lg:w-1/2 lg:justify-center">
                <img
                  srcSet={images[index].fixed.srcSet}
                  alt="Altas Logo"
                  className="rounded-lg h-full"
                />
              </div>
              <div className="xl:w-2/3 lg:w-1/2 lg:pl-16 mb-8 lg:mb-0">
                <div className="flex">
                  <h2 className="py-3 font-bold text-blue flex-1 uppercase">
                    {data.allContentfulCaseStudies.edges[0].node.title}
                  </h2>
                  <div className="py-3 flex-1">
                    <div className="flex justify-end">
                      <div className="border-r-2 px-2 cursor-pointer">
                        <BsArrowLeft
                          size={30}
                          color={index === 0 ? "grey" : "#22A7F0"}
                          onClick={slideLeft}
                        />
                      </div>
                      <div className="px-2 cursor-pointer">
                        <BsArrowRight
                          size={30}
                          color={index + 1 === detail.length ? "grey" : "#22A7F0"}
                          onClick={slideRight}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div>
                  <div className="font-bold md:text-3xl py-10 text-xl">
                    {edge.comment}
                  </div>
                  <div>
                    <span className="block font-bold md:text-xl">
                      {edge.author}
                    </span>
                    <span className="text-16xl" style={{color: "#809AA9"}}>
                      {edge.position}
                    </span>
                  </div>
                </div>
                <br />
                <hr />
                <div className="flex py-3">
                  {detail.map((item,i)=>(
                    /* eslint-disable-next-line */
                    <div
                      className={`h-2 w-2 cursor-pointer border rounded-full m-1 ${
                        index === i ? "bg-lightblue" : "bg-white"
                      }`}
                      onClick={()=>{ clearPlayer(i) }}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
