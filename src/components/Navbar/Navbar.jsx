import React, { useState, useEffect, useRef } from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { graphql, Link, useStaticQuery } from "gatsby"
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineClose } from "react-icons/ai"
import { useWindowSize, getSrcSet } from "../../hooks/getwidth"
import AnnoucementIcon from "../../images/annoucement-icon.png"
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

  const [isExpanded, toggleExpansion] = useState(false)
  const LogoWhite = `${componentData.logoWhite?.file?.url}`
  const LogoBlack = `${componentData.logoBlack?.file?.url}`
  const [currentLogo, setLogo] = useState(LogoWhite)
  const [isOffset, setIsOffset] = useState(false)

  /* eslint-disable-next-line */
  const [width, setWidth] = useState(1440)

  useEffect(() => {
    if (!isTransparentHeader) {
      if (nav && nav.current) {
        nav.current.classList.add("active")
        setLogo(LogoBlack)
      }
    }

    if (typeof window != "undefined") {
      const handleWindowResize = () => setWidth(window.innerWidth)

      window.addEventListener("resize", handleWindowResize())

      window.addEventListener("scroll", function () {
        if (nav && nav.current) {
          if (window.pageYOffset > 0) {
            setIsOffset(true)
            nav.current.classList.add("active")
            setLogo(LogoBlack)
          } else {
            //remove the background property so it comes transparent again (defined in your css)
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

      return () => window.removeEventListener("resize", handleWindowResize)
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
            <img src={AnnoucementIcon} alt="Annoucement Icon" />
            <span className="ml-2 text-white">
              {componentData.announcementText?.announcementText}
            </span>
          </div>
          <button className="mx-1">Book a demo today!</button>
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
              <button className="blue-button text-white font-medium lg:mx-0 w-full lg:hidden py-3 px-6 mt-8 lg:mt-0">
                Book a demo
              </button>
            </div>
          </div>
        </div>
        <div className="hidden lg:w-1/5 lg:flex justify-end">
          <button className="blue-button text-white font-medium lg:mx-0 w-full lg:w-auto py-3 px-6 mt-8 lg:mt-0">
            Book a demo
          </button>
        </div>
      </nav>
    </React.Fragment>
  )
}
