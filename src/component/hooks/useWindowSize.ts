'use client'
import { globalVariable } from "@/app/global";
import { useEffect, useState } from "react";

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    innerHeight: 0, innerWidth: 0
    , isMobile: true
  })

  useEffect(() => {
    function handleResize() {
      return setWindowSize({
        innerHeight: window.innerHeight,
        innerWidth: window.innerWidth,
        isMobile: window.innerWidth < globalVariable.smallScreenWidth
      })
    }
    window.addEventListener("resize", handleResize)
    handleResize()
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return windowSize

}