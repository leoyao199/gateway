import Image, { StaticImageData } from "next/image";
import GWButton from "./GWButton";
import { useWindowSize } from "./hooks/useWindowSize";
import { globalVariable } from "@/app/global";
import { useMemo } from "react";
import { GWHalfWidthImageCustomContext } from "./GWHalfWidthImage";

const CARD_HEIGHT = 760;

export interface GWImageWithTextProps {
  backgroundColor: string;
  context: GWHalfWidthImageCustomContext;
  imageSource: string | { default: StaticImageData } | StaticImageData;
  // | StaticImageData[];
  imageAlt?: string;
  mirror?: boolean;
  buttonText: string;
}

export default function GWImageWithText(props: GWImageWithTextProps) {
  const { innerHeight, innerWidth } = useWindowSize();

  // const imageWidth = useMemo(() => {
  //   if (innerWidth > globalVariable.largeScreenWidth) {
  //     return 720;
  //   } else if (innerWidth > globalVariable.middleLargeScreenWidth) {
  //     return innerWidth / 2;
  //   } else if (innerWidth > globalVariable.middleScreenWidth) {
  //     return globalVariable.middleScreenWidth;
  //   } else if (innerWidth > globalVariable.smallScreenWidth) {
  //     return innerWidth;
  //   } else {
  //     return innerWidth;
  //   }
  // }, [innerWidth]);

  // const imageHeight = useMemo(() => {
  //   if (innerWidth > globalVariable.largeScreenWidth) {
  //     return 720;
  //   } else if (innerWidth > globalVariable.smallScreenWidth) {
  //     return imageWidth;
  //   } else {
  //     return 480;
  //   }
  // }, [innerWidth, imageWidth]);

  return (
    <div style={{ backgroundColor: props.backgroundColor }}>
      <div
        style={{
          display: "flex",
          flexDirection:
            innerWidth > globalVariable.middleLargeScreenWidth
              ? props.mirror
                ? "row-reverse"
                : "row"
              : "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          width={innerWidth / 2}
          height={CARD_HEIGHT}
          src={props.imageSource}
          alt={props.imageAlt ?? ""}
          style={{ objectFit: "cover" }}
        ></Image>
        <div
          style={{
            width: innerWidth / 2,
            // padding: "5vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            // height: CARD_HEIGHT,
            // innerWidth > globalVariable.middleLargeScreenWidth
            //   ? innerWidth
            //   : innerWidth > globalVariable.smallScreenWidth
            //   ? 400
            //   : 350,
          }}
        >
          <p
            style={{
              fontSize: innerWidth > globalVariable.smallScreenWidth ? 48 : 26,
              fontWeight: "400",
              width:
                innerWidth > globalVariable.smallScreenWidth ? 700 : "100%",
              marginBottom: 20,
              textAlign: 'center'
            }}
          >
            {props.context.title}
          </p>
          <p
            style={{
              width:
              innerWidth > globalVariable.smallScreenWidth ? 700 : "100%",
            marginBottom: 20,
            textAlign: 'center',
              fontSize: innerWidth > globalVariable.smallScreenWidth ? 20 : 14,
              lineHeight: 1.5,
              fontWeight: "300",
              // marginBottom: 20,
            }}
          >
            {props.context.content}
          </p>
          <GWButton text={props.buttonText} onClick={() => {}} />
        </div>
      </div>
    </div>
  );
}
