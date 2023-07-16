'use client'
import { useEffect, useState } from "react";

export function useWindowSize(){
  const [windowSize, setWindowSize] = useState({innerHeight:0, innerWidth:0})
  function handleResize (){
      return setWindowSize({
        innerHeight: window.innerHeight,
        innerWidth: window.innerWidth
      })
  }
  
  useEffect(()=>{
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  },[])

  return windowSize

}