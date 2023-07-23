import Image, { StaticImageData } from "next/image";
import React, { useCallback, useEffect, useMemo } from "react";
import { useWindowSize } from "./hooks/useWindowSize";
import { globalVariable } from "@/app/global";
import GWButton from "./GWButton";
import MySVG from "../../public/icon.svg";

interface GWFullWidthImageProps {
  imagePath: StaticImageData;
  text: string;
  onClick: () => void;
  title: string,
  content: string,
  buttonText: string
}

export default function GWFullWidthImage(props: GWFullWidthImageProps) {
  const { innerHeight, innerWidth } = useWindowSize();
  const miniHeight = 620;
  const isMobile = innerWidth <= globalVariable.middleScreenWidth;
  const height = useMemo(() => {
    if (innerWidth > globalVariable.largeScreenWidth) {
      return 760;
    } else if (innerWidth > globalVariable.middleScreenWidth) {
      return miniHeight + (innerWidth - globalVariable.middleScreenWidth) * 0.2;
      // } else if ((innerWidth - 200) / 1.5 < miniHeight) {
      // return miniHeight;
    } else {
      return miniHeight;
    }
  }, [innerWidth]);

  // const leftMargin = useMemo(() => {
  //   const base = 10;
  //   const bigBase = 10;
  //   const largeP = 0.4;
  //   if (innerWidth > globalVariable.largeScreenWidth) {
  //     return bigBase + (innerWidth - globalVariable.largeScreenWidth) * largeP;
  //   } else if (innerWidth > globalVariable.middleScreenWidth) {
  //     return bigBase;
  //   } else if (innerWidth > globalVariable.smallScreenWidth) {
  //     return base + innerWidth * 0.03;
  //   } else {
  //     return base - 10;
  //   }
  // }, [innerWidth]);

  const imageWidth = useMemo(() => {
    if (innerWidth > globalVariable.largeScreenWidth) {
      return 1440;
    } else if (innerWidth > globalVariable.middleLargeScreenWidth) {
      return innerWidth;
    } else if (innerWidth > globalVariable.middleScreenWidth) {
      return globalVariable.middleScreenWidth;
    } else if (innerWidth > globalVariable.smallScreenWidth) {
      return innerWidth;
    } else {
      return innerWidth;
    }
  }, [innerWidth]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          position: "relative",
          height: height,
          width: imageWidth,
        }}
      >
        <Image
          src={props.imagePath.src}
          width={imageWidth}
          height={height}
          alt={""}
          style={{ objectFit: "cover" }}
        ></Image>
        <div
          style={{
            width:'100%',
            display:'flex',
            position: "absolute",
            justifyContent: innerWidth > globalVariable.middleScreenWidth ? 'flex-start' :'center',
            top: innerWidth > globalVariable.middleScreenWidth ? 60 : 30,
            bottom: innerWidth > globalVariable.middleScreenWidth ? 60 : 30,
            left: innerWidth <= 720 ? undefined : "5vw",
          }}
        >
          <div
            style={{
              width:
                innerWidth > globalVariable.largeScreenWidth
                  ? 460
                  : innerWidth > globalVariable.smallScreenWidth
                  ? 420
                  : 300,
              background: "rgba(255,255,255,0.90)",
            }}
          >
            <div
              style={{
                margin: innerWidth > globalVariable.middleScreenWidth ? 40 : 25,
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
                height: `calc(100% - ${
                  (innerWidth > globalVariable.middleScreenWidth ? 40 : 25) * 2
                }px)`,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Image src={MySVG} alt="" height={40} />
                <p style={{ marginLeft: 10 }}>GATEWAY</p>
              </div>
              <h4
                style={{
                  fontWeight: "300",
                  fontSize: (height - 80) / 15,
                }}
              >
                {props.title}
              </h4>
              <div
                style={{
                  fontWeight: "300",
                  lineHeight: 1.7,
                  fontSize: (height - 80) / 35,
                }}
              >
                {props.content}
              </div>
              <GWButton text={props.buttonText} onClick={props.onClick} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
