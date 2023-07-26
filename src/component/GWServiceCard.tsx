import Image, { StaticImageData } from "next/image"
import { useWindowSize } from "./hooks/useWindowSize"
import { useMemo } from "react"
import { globalVariable } from "@/app/global"

export const MAX_SERVICE_CARD_WIDTH = 544
const CARD_MARGIN = 20
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
    console.log({size})
    if (size > MAX_SERVICE_CARD_WIDTH){
      return 500 - CARD_MARGIN * 2
    // } else if (innerWidth > globalVariable.middleLargeScreenWidth){
    //   return (innerWidth - props.containerSizer)/3 - numberOfCardPerRow * 20
    } else {
      return innerWidth - CARD_MARGIN * 2
    }
  },[innerWidth])

  return (
    <div style={{width: cardWidth, marginBottom: 20, background:'#f9f9f9', height: 900}}>
      <Image
        src={props.imageSource}
        alt={''}
        width={cardWidth}
        height={(cardWidth) *0.75}
        style={{objectFit: 'cover'}}
      />
      <p style={{paddingTop: 10, fontSize: 36, marginTop: 30, fontWeight: 500, textAlign:'center', marginBottom: 30}}>{props.title}</p>
      <p
        style={{
          paddingTop: 10,
          lineHeight: 1.5,
          fontSize: innerWidth < globalVariable.smallScreenWidth ? 16 : 20,
          fontWeight: 200,
          marginRight: 30, 
          marginLeft: 30
        }}>
        {props.content}
      </p>
    </div>
  );
}