import React, { useEffect } from "react"

const Terms = () => {
  useEffect(()=> {
    if (typeof window != "undefined")
      window.open("https://www.atlas.one/terms", "_self")
  })

  return(
    <></>
  );
}

export default Terms