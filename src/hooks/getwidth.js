const { useState, useEffect } = require("react")

export function useWindowSize(imgRef=null) {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    function handleResize() {
      if(imgRef && imgRef.current){
        setWindowSize({
          width: imgRef.current.clientWidth,
          height: imgRef.current.clientHeight,
        })
      }
      else {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }
    }

    window.addEventListener("resize", handleResize)

    handleResize()

    return () => window.removeEventListener("resize", handleResize)
    /* eslint-disable-next-line */
  }, [])

  return windowSize
}