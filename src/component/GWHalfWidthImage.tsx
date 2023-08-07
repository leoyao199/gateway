import Image, { StaticImageData } from "next/image";
import GWButton from "./GWButton";
import { useWindowSize } from "./hooks/useWindowSize";
import { globalVariable } from "@/app/global";
import { useMemo } from "react";

export interface GWHalfWidthImageCustomContext {
  title: string;
  content: string;
  onPress: () => void;
}

export interface GWHalfWidthImage {
  backgroundColor: string;
  context: GWHalfWidthImageCustomContext;
  imageSource:
    | string
    | { default: StaticImageData }
    | StaticImageData
    | StaticImageData[];
  imageAlt?: string;
  mirror?: boolean;
  buttonText: string;
}

export default function GWHalfWidthImage(props: GWHalfWidthImage) {
  const { innerHeight, innerWidth } = useWindowSize();

  const imageWidth = useMemo(() => {
    if (innerWidth > globalVariable.largeScreenWidth) {
      return 720;
    } else if (innerWidth > globalVariable.middleLargeScreenWidth) {
      return innerWidth / 2;
    } else if (innerWidth > globalVariable.middleScreenWidth) {
      return globalVariable.middleScreenWidth;
    } else if (innerWidth > globalVariable.smallScreenWidth) {
      return innerWidth;
    } else {
      return innerWidth;
    }
  }, [innerWidth]);

  const imageHeight = useMemo(() => {
    if (innerWidth > globalVariable.largeScreenWidth) {
      return 720;
    } else if (innerWidth > globalVariable.smallScreenWidth) {
      return imageWidth;
    } else {
      return 480;
    }
  }, [innerWidth, imageWidth]);

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
        {Array.isArray(props.imageSource) ? (
          <div
            style={{
              // width: innerWidth,
              // height: imageHeight,
              display: "flex",
              flexDirection:
                innerWidth > globalVariable.middleLargeScreenWidth
                  ? "row"
                  : "column",
            }}
          >
            <Image
              src={props.imageSource[0]}
              alt={""}
              height={imageHeight * 0.8}
              style={{
                objectFit: "cover",
                paddingTop:
                  innerWidth > globalVariable.middleLargeScreenWidth
                    ? imageHeight * 0.2
                    : undefined,
                marginRight:
                  innerWidth > globalVariable.middleLargeScreenWidth
                    ? 40
                    : undefined,
              }}
            />
            {innerWidth > globalVariable.middleLargeScreenWidth && <div style={{ width: 20 }} />}
            <Image
              src={props.imageSource[1]}
              alt={""}
              height={imageHeight * 0.8}
              style={{
                objectFit: "cover",
                paddingBottom:
                  innerWidth < globalVariable.middleLargeScreenWidth
                    ? imageHeight * 0.2
                    : undefined,
                marginLeft:
                  innerWidth < globalVariable.middleLargeScreenWidth
                    ? 40
                    : undefined,
              }}
            />
          </div>
        ) : (
          <Image
            width={imageWidth}
            height={imageHeight}
            src={props.imageSource}
            alt={props.imageAlt ?? ""}
            style={{ objectFit: "cover" }}
          ></Image>
        )}
        <div
          style={{
            width: imageWidth,
            padding: "5vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "center",
            height:
              innerWidth > globalVariable.middleLargeScreenWidth
                ? imageHeight
                : innerWidth > globalVariable.smallScreenWidth
                ? 400
                : 350,
          }}
        >
          <p
            style={{
              fontSize: innerWidth > globalVariable.smallScreenWidth ? 36 : 26,
              fontWeight: "400",
              width: "100%",
              marginBottom: 20,
            }}
          >
            {props.context.title}
          </p>
          <p
            style={{
              fontSize: innerWidth > globalVariable.smallScreenWidth ? 20 : 14,
              lineHeight: 1.5,
              fontWeight: "300",
              marginBottom: 20,
            }}
          >
            {props.context.content}
          </p>
          <GWButton text={props.buttonText} onClick={props.context.onPress} />
        </div>
      </div>
    </div>
  );
}
