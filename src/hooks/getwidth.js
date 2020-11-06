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

export function getSrcSet(src, width) {
  const ratioArry = [1, 1.5, 2, 3]

  let srcSet = ""
  ratioArry.forEach(ratio => srcSet += `${src}?w=${width * ratio} ${ratio}x, `)

  return srcSet
}