import React, { useRef } from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import {
  FaFacebookSquare,
  FaTwitterSquare,
  // FaInstagram
} from "react-icons/fa"
import { useWindowSize, getSrcSet } from "../../hooks/getwidth"
import "./footer.scss"

export default function Footer() {
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

  const logoRef = useRef(null)
  const logoSize = useWindowSize(logoRef)

  return (
    <div className="footer py-10 p-5 lg:px-10">
      <nav className="flex items-center justify-between flex-wrap py-5">
        <div className="flex lg:w-1/5 justify-center flex-shrink-0 text-white">
          <img
            srcSet={ getSrcSet(componentData.logoWhite?.file?.url, logoSize.width) }
            className="logo"
            alt="Altas Logo"
            ref={logoRef}
          />
        </div>

        <div
          className={`${
            true ? 'block' : 'hidden'
          } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
        >
          <div className="lg:inline-flex lg:w-3/5 lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-1 justify-center flex-col lg:h-auto my-8 lg:my-0">
            {navLinks.map((item, i) => (
              <AnchorLink
                key={i}
                to={item.path}
                activeClassName="activeLink"
                className="lg:inline-flex cursor-pointer lg:w-auto w-full font-600 px-3 py-2 rounded items-center justify-center"
              >
                <span className="text-menu hover:text-blue">
                  {item.name}
                </span>
              </AnchorLink>
            ))}
          </div>
        </div>
        <div className="flex lg:w-1/5 justify-center">
          {/* <div className="px-2">
            <FaInstagram size={30} color="#fff" />
          </div> */}
          <a href="https://www.facebook.com/Atlas-One-2021939574684766/" target="_blank" rel="noopener noreferrer">
            <div className="px-2 social-icon">
              <FaFacebookSquare size={30} />
            </div>
          </a>
          <a href="https://twitter.com/atlasoneapp/" target="_blank" rel="noopener noreferrer">
            <div className="px-2 social-icon">
              <FaTwitterSquare size={30} />
            </div>
          </a>
        </div>
      </nav>

      <div className="p-5 grid md:grid-cols-2 sm:grid-cols-1 items-center">
        <span className="text-sm text-center md:text-right px-4 text-grey border-gray-400">
          @ 2020 Atlas One. All right reserved.
        </span>
        <div className="text-center md:text-left">
          <Link to="/privacy">
            <span className="text-sm px-4 text-grey border-0 md:border-l border-grey-20 hover:text-blue">
              Privacy Policy
            </span>
          </Link>
          <Link to="/terms">
            <span className="text-sm px-4 text-grey border-l border-grey-20 hover:text-blue">
              Terms of Services
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}