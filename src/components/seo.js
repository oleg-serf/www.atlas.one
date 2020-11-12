import React from "react"
import { Helmet } from "react-helmet"
// import useSiteMetadata from "../hooks/useSiteMetadata"

const SEO = () => {
  // const { title, description } = useSiteMetadata()

  return (
    <Helmet>
      <html lang="en" />
      <meta charSet="utf-8" />
      {/* <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <title>{title}</title> */}

      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <title>
        Atlas One - The all-in-one digital citizen engagement platform
      </title>
      <meta
        name="description"
        content="Atlas One consists of a suite of modern public safety and government communication tools, providing everything your organization needs to effectively communicate with your residents."
      />
      <meta
        name="viewport"
        content="width=device-width,height=device-height,initial-scale=1,maximum-scale=1,minimum-scale=1, user-scalable=0,viewport-fit=cover"
      />
      <link rel="manifest" href="/images/manifest.json" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content="Atlas One" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      <meta name="theme-color" content="#05121D" />
      <meta
        name="msapplication-TileImage"
        content="/images/mstile-144x144.png"
      />
      <meta name="msapplication-TileColor" content="#05121D" />
      <meta name="msapplication-config" content="/images/browserconfig.xml" />
      <link
        rel="apple-touch-icon"
        sizes="48x48"
        href="/images/apple-icon-48x48.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="55x55"
        href="/images/apple-icon-55x55.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="58x58"
        href="/images/apple-icon-58x58.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="80x80"
        href="/images/apple-icon-80x80.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="87x87"
        href="/images/apple-icon-87x87.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="88x88"
        href="/images/apple-icon-88x88.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/images/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/images/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="167x167"
        href="/images/apple-icon-167x167.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="172x172"
        href="/images/apple-icon-172x172.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/images/apple-icon-180x180.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="196x196"
        href="/images/apple-icon-196x196.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/images/android-icon-192x192.png"
      />
      <meta name="application-name" content="Atlas One" />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/images/favicon-16x16.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/images/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/images/favicon-96x96.png"
      />

      <meta property="al:android:package" content="app.atlasone" />
      <meta property="al:android:app_name" content="Atlas One" />
      <meta property="al:ios:app_store_id" content="1509528933" />
      <meta property="al:ios:app_name" content="Atlas One" />
      <meta property="apple-itunes-app" content="app-id=1509528933" />

      {/* <!-- Twitter Meta Data --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@atlasoneapp" />
      <meta name="twitter:creator" content="@atlasoneapp" />
      <meta name="twitter:app:country" content="US" />
      <meta name="twitter:app:name:iphone" content="Atlas One" />
      <meta name="twitter:app:id:iphone" content="1509528933" />
      <meta name="twitter:app:name:googleplay" content="Atlas One" />
      <meta name="twitter:app:id:googleplay" content="app.atlasone" />

      {/* <!-- Open Graph --> */}

      <meta property="og:site_name" content="Atlas One" />
      <meta property="og:image" content="{IMAGE URL}" />
      <meta property="og:type" content="article" />
      <meta property="og:url" content="{ALERT URL}" />
      <meta property="og:title" content="{TITLE}" />
      <meta property="og:description" content="{DESCRIPTION}" />
      <meta property="og:locale" content="en_US" />
      <meta
        property="article:published_time"
        content="{ENTER PUBLISHED TIME}"
      />
      <meta property="article:modified_time" content="{ENTER MODIFIED TIME}" />
      <meta
        property="article:expiration_time"
        content="{ENTER EXPIRATION TIME}"
      />
      <meta
        property="article:author"
        content="https://www.facebook.com/Atlas-One-2021939574684766/"
      />
    </Helmet>
  )
}

export default SEO
