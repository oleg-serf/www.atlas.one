import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Swiper from 'react-id-swiper'
import SwiperCore, { EffectFade } from 'swiper'
import "./Industries.scss"

export default function Industries() {
  const [swiper, setSwiper] = useState(null);

  const params = {
    slidesPerView: 1,
    effect : "fade",
    slidesPerGroup: 1,
    fadeEffect: {
      crossFade: true
    },
    speed : 1000,
    loop : true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    spaceBetween: 30,
    runCallbacksOnInit: true,
    onInit: (swiper) => {     
      setSwiper(swiper)
    }    
  }

  SwiperCore.use([EffectFade])
  useEffect(()=>{
    setInterval(()=>{
      if(swiper && swiper.params)
      swiper.slideNext(1000)
    },10000)
  })

  const data = useStaticQuery(graphql`
    query {
      allContentfulIndustries {
        edges {
          node {
            title
            subTitle
            images {
              file {
                url
              }
            }
            description {
              description
            }
            industries {
              title
              iconBg
              description
            }
            icons {
              file {
                url
              }
            }
          }
        }
      }
    }
  `)
  
  const contentData = data.allContentfulIndustries.edges[0].node
  const images = contentData.images.map(v => v.file?.url)
  
  return (
    <div className="bg-even px-5 py-24" id="industries">
      <div className="container max-w-6xl m-auto">
        <h2 className="text-blue block uppercase">
          {contentData.title}
        </h2>
        <h2 className="lg:text-45xl text-25xl">
          {contentData.subTitle}
        </h2>
        <span className="block text-18xl font-medium pt-5 max-w-2xl">
          {contentData.description.description}
        </span>
        <div className="flex flex-wrap mt-20">
          <div className="w-full flex flex-wrap justify-between lg:w-2/3 py-1">
            {contentData.industries.map((v,i) => (
              /* eslint-disable-next-line */
              <div
                className="shadow-base flex items-center bg-white rounded my-2 industry-box p-3 cursor-pointer"
                onClick={()=>{
                  if(swiper && swiper.params){
                    swiper.slideTo(i,1000)
                  }
                }}
              >
                <div
                  className="box rounded-md flex items-center justify-center"
                  style={{
                    backgroundColor: v.iconBg,
                    verticalAlign: "middle",
                  }}
                >
                  <img src={contentData.icons[i]?.file?.url} alt="icons" />
                </div>
                <div className="w-2/3 pl-4">
                  <span className="font-600 text-lg">
                    {v.title}
                  </span>
                  <span className="block pt-1 font-medium text-grey text-16xl md:text-md">
                    {v.description}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full lg:w-1/3 px-2 flex">            
            <Swiper {...params} ref={node => {if (node) setSwiper(node.swiper)}}>
              {images.map(image=>(
                <div className="bg-even h-full">
                  <img
                    src={image}
                    alt="Altas Logo"
                    className={`w-full h-full  rounded p-4 `}
                  />
                </div>
              ))}
            </Swiper>
        </div>
      </div>
      </div>
    </div>
  )
}
