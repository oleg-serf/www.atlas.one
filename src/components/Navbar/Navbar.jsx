import React, { useState, useEffect, useRef } from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineClose } from "react-icons/ai"
import { VscMegaphone } from "react-icons/vsc"
import { useWindowSize, getSrcSet } from "../../hooks/getwidth"
import "./navbar.scss"

export default function Header({ isTransparentHeader = false }) {
  const data = useStaticQuery(graphql`
    query {
      contentfulNavigation {
        logoWhite {
          file {
            url
          }
        }
        logoBlack {
          file {
            url
          }
        }
        menus {
          items {
            name
            path
          }
        }
        buttonText
        buttonBg
        buttonLink
        announcementText {
          announcementText
        }
        showAnnouncement
      }
    }
  `)
  const componentData = data.contentfulNavigation
  const navLinks = componentData.menus.items
  const nav = useRef(null)
  const demoBtn = useRef(null)

  const [isExpanded, toggleExpansion] = useState(false)
  const LogoWhite = `${componentData.logoWhite?.file?.url}`
  const LogoBlack = `${componentData.logoBlack?.file?.url}`
  const [currentLogo, setLogo] = useState(LogoWhite)
  const [isOffset, setIsOffset] = useState(false)

  useEffect(() => {
    if (!isTransparentHeader) {
      if (nav && nav.current) {
        nav.current.classList.add("active")
        setLogo(LogoBlack)
      }
    }

    if (typeof window != "undefined") {
      window.addEventListener("scroll", function () {
        if (nav && nav.current) {
          if (window.pageYOffset > 0) {
            setIsOffset(true)
            nav.current.classList.add("active")
            setLogo(LogoBlack)
          } else {
            setIsOffset(false)
            nav.current.classList.remove("active")
            setLogo(LogoWhite)
          }
        }

        if (!isTransparentHeader) {
          if (nav && nav.current) {
            nav.current.classList.add("active")
            setLogo(LogoBlack)
          }
        }
      })

      window.addEventListener("wheel", function () {
        if(demoBtn && demoBtn.current) demoBtn.current.focus()
      })
    }
    /* eslint-disable-next-line */
  }, [])

  const checkOffset = () => {
    if (typeof window != "undefined") {
      if (window.pageYOffset > 0) {
        setIsOffset(true)
        setLogo(LogoBlack)
      } else {
        setIsOffset(false)
        setLogo(LogoWhite)
      }
    }

    if (!isTransparentHeader) {
      if (nav && nav.current) {
        nav.current.classList.add("active")
        setLogo(LogoBlack)
      }
    }
  }
  const logoRef = useRef(null)
  const logoSize = useWindowSize(logoRef)

  return (
    <React.Fragment>
      {componentData?.showAnnouncement && (
        <div className="w-full hidden lg:flex h-auto py-3 bg-lightblue text-white font-medium items-center justify-center">
          <div className="flex items-center">        
            <VscMegaphone size="20" fill="#ffffff" />
            <span className="ml-2 text-white">
              {componentData.announcementText?.announcementText}
            </span>
          </div>
          <Link to="/request-demo">
            <button className="mx-1" style={{fontFamily: "Gilroy-Bold"}}>Book a demo today!</button>
          </Link>
        </div>
      )}
      <nav
        ref={nav}
        className={`flex nav items-center justify-between absolute w-full z-30 flex-wrap px-0 py-5 lg:px-10 border-b border-gray-700 ${
          isExpanded ? "expanded" : ""
        } ${isOffset ? "active" : ""}`}
      >
        <Link
          className="flex items-center flex-shrink-0 text-white pl-3 lg:pl-0 cursor-pointer lg:w-1/5"
          to="/"
        >
          <img
            className="logo"
            srcSet={ getSrcSet(currentLogo, logoSize.width) }
            alt="Altas Logo"
            ref={logoRef}
          />
        </Link>
        <div className="block lg:hidden">
          {!isExpanded ? (
            <button
              onClick={() => {
                toggleExpansion(!isExpanded)
                setLogo(LogoBlack)
              }}
              className="flex items-center pr-6 py-2 border rounded border-none outline-none hover:text-white hover:border-white focus:outline-none"
            >
              <GiHamburgerMenu
                size={24}
                fill={currentLogo === LogoBlack ? "#000000" : "#ffffff"}
              />
            </button>
          ) : (
            <button
              onClick={() => {
                toggleExpansion(!isExpanded)
                checkOffset()
              }}
              className="flex items-center pr-6 py-2 border rounded border-none outline-none hover:text-white hover:border-white focus:outline-none"
            >
              <AiOutlineClose
                size={24}
                fill={`${currentLogo === LogoBlack ? "#000000" : "#ffffff"}`}
              />
            </button>
          )}
        </div>
        <div
          className={`${
            isExpanded ? `block` : `hidden`
          } w-full block flex-grow lg:flex lg:items-center lg:w-auto p-5 lg:p-0`}
        >
          <div className="lg:inline-flex border-t py-4 lg:py-0 lg:border-0 mt-2 lg:mt-0 lg:flex-row lg:ml-auto lg:w-3/5 w-full lg:items-center items-start flex flex-1 justify-center flex-col lg:h-auto">
            {navLinks.map((item, i) => (
              <AnchorLink
                key={i}
                to={item.path}
                title={item.name}
                className="lg:inline-flex cursor-pointer lg:w-auto w-full font-600 px-3 py-2 rounded items-center justify-center"
                onAnchorLinkClick={() => toggleExpansion(false)}
              />
            ))}
            <div>
              <Link to={componentData.buttonLink}>
                <button className="blue-button text-white font-medium lg:mx-0 w-full lg:hidden py-3 px-6 mt-8 lg:mt-0">
                  {componentData.buttonText}
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden lg:w-1/5 lg:flex justify-end">
          <Link to={componentData.buttonLink}>
            <button className="blue-button text-white font-medium lg:mx-0 w-full lg:w-auto py-3 px-6 mt-8 lg:mt-0" ref={demoBtn}>
              {componentData.buttonText}
            </button>
          </Link>
        </div>
      </nav>
    </React.Fragment>
  )
}
