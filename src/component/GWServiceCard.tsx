'useClient'
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
  const {innerWidth, innerHeight, isMobile} = useWindowSize()
  const cardWidth = 336

  return (
    <div
      style={{
        width: isMobile ? 375 : cardWidth,
        marginBottom: isMobile ? 32 : 20,
        fontWeight: 200,
        display: isMobile ? "flex" : undefined,
        alignItems: isMobile ? "center" : undefined,
        flexDirection: isMobile ?  "column" : undefined,
      }}
    >
      <Image
        src={props.imageSource}
        alt={""}
        width={336}
        height={264}
        style={{
          objectFit: "cover",
          borderRadius: 19,
          marginBottom: isMobile ? 16 : 18,
        }}
      />
      <div
        style={{
          color: "#000",
          fontSize: isMobile ? 22 : 25,
          fontWeight: 600,
          marginBottom: isMobile ? 16 : 18,
          textAlign: isMobile ? "center" : undefined,
        }}
      >
        {props.title}
      </div>
      <div
        style={{
          color: "#000",
          fontSize: isMobile ? 13 : 16,
          fontWeight: 400,
          lineHeight: 1.4,
          width: 310,
          textAlign: isMobile ? "center" : undefined,
        }}
      >
        {props.content}
      </div>
    </div>
  );
}