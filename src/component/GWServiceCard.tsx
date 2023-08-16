import Image, { StaticImageData } from "next/image"
import { useWindowSize } from "./hooks/useWindowSize"
import { useMemo } from "react"
import { globalVariable } from "@/app/global"

export interface GWServiceCardProps {
  imageSource: string |  {default: StaticImageData} | StaticImageData,
  title:string,
  content: string,
  containerSizer: number
}

export default function GWServiceCard(props:GWServiceCardProps){
  const {innerWidth, innerHeight} = useWindowSize()
  const numberOfCardPerRow = 3
  const cardWidth = useMemo(()=>{
    const size = (innerWidth - props.containerSizer)/3 - numberOfCardPerRow * 20
    if (size > 350){
      return 350
    } else if (innerWidth > globalVariable.middleLargeScreenWidth){
      return (innerWidth - props.containerSizer)/3 - numberOfCardPerRow * 20
    } else {
      return 300
    }
  },[innerWidth])

  return (
    <div style={{ width: cardWidth, marginBottom: 20, fontWeight: 200 }}>
      <Image
        src={props.imageSource}
        alt={""}
        width={cardWidth}
        height={(cardWidth * 9) / 16}
        style={{ objectFit: "cover" }}
      />
      <p style={{ paddingTop: 10, fontSize: 24 }}>{props.title}</p>
      <p
        style={{
          paddingTop: 10,
          lineHeight: 1.5,
          fontSize: innerWidth < globalVariable.smallScreenWidth ? 14 : 20,
        }}
      >
        {props.content}
      </p>
    </div>
  );
}