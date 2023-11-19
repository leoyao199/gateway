import Image, { StaticImageData } from "next/image"
import { useWindowSize } from "./hooks/useWindowSize"
import { useMemo } from "react"
import { globalVariable } from "@/app/global"

export interface GWServiceCardProps {
  imageSource: string |  {default: StaticImageData} | StaticImageData,
  title:string,
  content: string,
  // containerSizer: number
}

export default function GWServiceCard(props:GWServiceCardProps){
  // const {innerWidth, innerHeight} = useWindowSize()
  // const numberOfCardPerRow = 3
  // const cardWidth = useMemo(()=>{
  //   const size = (innerWidth - props.containerSizer)/3 - numberOfCardPerRow * 20
  //   if (size > 350){
  //     return 350
  //   } else if (innerWidth > globalVariable.middleLargeScreenWidth){
  //     return (innerWidth - props.containerSizer)/3 - numberOfCardPerRow * 20
  //   } else {
  //     return 300
  //   }
  // },[innerWidth])
  const cardWidth = 336

  return (
    <div style={{ width: cardWidth, marginBottom: 20, fontWeight: 200,  }}>
      <Image
        src={props.imageSource}
        alt={""}
        width={336}
        height={264}
        style={{ objectFit: "cover", borderRadius: 19, marginBottom: 18 }}
      />
      <div
        style={{
          color: "#000",
          fontSize: 25,
          fontWeight: 600,
          marginBottom: 18,
        }}
      >
        {props.title}
      </div>
      <div
        style={{
          color: "#000",
          fontSize: 16,
          fontWeight: 400,
          lineHeight: 1.4,
        }}
      >
        {props.content}
      </div>
    </div>
  );
}