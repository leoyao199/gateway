import { globalVariable } from "@/app/global";
import Image, { StaticImageData } from "next/image";
import { useMemo } from "react";
import { useWindowSize } from "./hooks/useWindowSize";
import { color } from "@/app/theme";

export interface GWStaffDirectoryCardProps{
  imageSource: StaticImageData,
  title: string, 
  name: string,
  containerSizer: number
}

export default function GWStaffDirectoryCard(props:GWStaffDirectoryCardProps){
  const {innerWidth, innerHeight} = useWindowSize()
  const numberOfCardPerRow = 4
  const cardWidth = useMemo(()=>{
    const size = (innerWidth - props.containerSizer)/numberOfCardPerRow - numberOfCardPerRow * 20
    if (size > 300){
      return 300
    } else if (innerWidth > globalVariable.largeScreenWidth){
      return (innerWidth - props.containerSizer)/numberOfCardPerRow - numberOfCardPerRow * 20
    } else {
      return 300
    }
  },[innerWidth])

  return (
    <div style={{width: cardWidth, marginBottom: 20}}>
      <Image
        src={props.imageSource}
        alt={''}
        width={cardWidth}
        height={(cardWidth)}
        style={{objectFit: 'cover'}}
      />
      <p style={{paddingTop: 10, fontSize: 24, color:'white'}}>{props.name}</p>
      <p
        style={{
          paddingTop: 10,
          lineHeight: 1.5,
          fontSize: innerWidth < globalVariable.smallScreenWidth ? 14 : 18,
          color: color.header
        }}>
        {props.title}
      </p>
    </div>
  );
}