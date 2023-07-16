'use client'
import Image from "next/image"
import { useWindowSize } from "./hooks/useWindowSize"
import { useMemo } from "react"
import { globalVariable } from "@/app/global"
import GWButton from "./GWButton"

export interface GWEventCardProps {
  coverImage: string,
  name:string,
  content: string,
  containerSizer: number,
  onClick:()=>void
}

export default function GWEventCard(props:GWEventCardProps,){
  const fixedTitleLength = (title:string, charLength?: number) => {
    let result = title
    const maxChar = charLength ?? 36
    if (result.length > maxChar) {
      return result.slice(0, maxChar) + '...'
    } else {
      return result
    }
  }

  const {innerWidth, innerHeight} = useWindowSize()

  const numberOfCardPerRow = 3

  const cardWidth = useMemo(()=>{
    const size = (innerWidth - props.containerSizer)/3 - numberOfCardPerRow * 20
    if (size > 370){
      return 370
    } else if (innerWidth > globalVariable.middleLargeScreenWidth){
      return (innerWidth - props.containerSizer)/3 - numberOfCardPerRow * 20
    } else if (innerWidth > globalVariable.smallScreenWidth){
      return (innerWidth - props.containerSizer)
    }
    else {
      return 320
    }
  },[innerWidth])

  const fixedTitle = useMemo(()=>{
    if (innerWidth > globalVariable.middleLargeScreenWidth){
      return fixedTitleLength(props.name)
    } else 
    if (innerWidth > globalVariable.middleScreenWidth){
      return fixedTitleLength(props.name, 50)
    } else {
      return props.name
    }
  },[innerWidth])

  return (
    <div style={{ width: cardWidth, marginBottom: 20 }}>
      <Image
        src={props.coverImage}
        alt={""}
        width={cardWidth}
        height={cardWidth}
        style={{ objectFit: "cover" }}
      />
      <p
        style={{
          paddingTop: 10,
          fontSize: 36,
          marginBottom: 20,
          fontWeight: "200",
          height: 100,
          overflow: "hidden",
          width: "100%",
        }}
      >
        {fixedTitle}
      </p>
      <p
        style={{
          paddingTop: 10,
          lineHeight: 1.5,
          fontWeight: "200",
          fontSize: innerWidth < globalVariable.smallScreenWidth ? 16 : 20,
          marginBottom: 20,
          height: 150,
          
        }}
      >
        {props.content}
      </p>
        <GWButton text={"Detail"} onClick={props.onClick} />
    </div>
  );
}