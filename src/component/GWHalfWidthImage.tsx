import Image, { StaticImageData } from "next/image";
import GWButton from "./GWButton";
import { useWindowSize } from "./hooks/useWindowSize";
import { globalVariable } from "@/app/global";
import { CSSProperties, useMemo } from "react";

export interface GWHalfWidthImageCustomContext {
  title: string;
  content: string;
  onPress: () => void;
}

export interface GWHalfWidthImage {
  backgroundColor: string;
  context: GWHalfWidthImageCustomContext;
  imageSource: StaticImageData | StaticImageData[];
  imageAlt?: string;
  mirror?: boolean;
  buttonText: string;
  imageStyles?: CSSProperties[];
  imageContain?: boolean
}

class Style {
  image = {
    height: 510,
    width: 510,
  };
  bg = {
    width: 1032,
    display:'flex',
    alignItems: 'center',
  }
  textArea = {
    // marginRight: 87,
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    height:'100%',
    width: this.bg.width - this.image.width,
  } as CSSProperties
  title = {
    fontSize: 35,
    fontWeight: '600',
    marginBottom: 21
  } as CSSProperties
  content = {
    fontSize: 16,
    lineHeight: 1.4,
    fontWeight: '400',
    marginBottom: 21,
    maxWidth:336,
  } as CSSProperties
}

const s = new Style()

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
    if (Array.isArray(props.imageSource)) {
      if (innerWidth > globalVariable.largeScreenWidth) {
        return 720;
      } else if (innerWidth > globalVariable.smallScreenWidth) {
        return imageWidth;
      } else {
        return innerWidth;
      }
    }
    if (innerWidth > globalVariable.largeScreenWidth) {
      return 720;
    } else if (innerWidth > globalVariable.smallScreenWidth) {
      return imageWidth;
    } else {
      return 480;
    }
  }, [innerWidth, imageWidth]);

  return (
    <div style={{ backgroundColor: props.backgroundColor, maxWidth: "100vw" , display:'flex', justifyContent:'center'}}>
      <div
        style={{
          // display: "flex",
          ...s.bg,
          flexDirection:
            // innerWidth > globalVariable.middleLargeScreenWidth
            //   ? 
              props.mirror
                ? "row-reverse"
                : "row"
              // : "column",
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
              width={300}
              style={
                props.imageStyles && props.imageStyles[0]
                  ? {
                      objectFit: "cover",
                      paddingTop:
                        innerWidth > globalVariable.middleLargeScreenWidth
                          ? imageHeight * 0.2
                          : undefined,
                      marginRight:
                        innerWidth > globalVariable.middleLargeScreenWidth
                          ? 40
                          : undefined,
                      maxWidth: "100vw",
                      ...props.imageStyles[0],
                    }
                  : {
                      objectFit: "cover",
                      paddingTop:
                        innerWidth > globalVariable.middleLargeScreenWidth
                          ? imageHeight * 0.2
                          : undefined,
                      marginRight:
                        innerWidth > globalVariable.middleLargeScreenWidth
                          ? 40
                          : undefined,
                      maxWidth: "100vw",
                    }
              }
            />
            {innerWidth > globalVariable.middleLargeScreenWidth && (
              <div style={{ width: 20 }} />
            )}
            <Image
              src={props.imageSource[1]}
              alt={""}
              height={imageHeight * 0.8}
              width={300}
              style={
                props.imageStyles && props.imageStyles[0]
                  ? {
                      objectFit: "cover",
                      paddingTop:
                        innerWidth > globalVariable.middleLargeScreenWidth
                          ? imageHeight * 0.2
                          : undefined,
                      marginRight:
                        innerWidth > globalVariable.middleLargeScreenWidth
                          ? 40
                          : undefined,
                      maxWidth: "100vw",
                      ...props.imageStyles[1],
                    }
                  : {
                      objectFit: "cover",
                      paddingTop:
                        innerWidth > globalVariable.middleLargeScreenWidth
                          ? imageHeight * 0.2
                          : undefined,
                      marginRight:
                        innerWidth > globalVariable.middleLargeScreenWidth
                          ? 40
                          : undefined,
                      maxWidth: "100vw",
                    }
              }
            />
          </div>
        ) : (
          <Image
            {...s.image}
            src={props.imageSource}
            alt={props.imageAlt ?? `it's a image of ${props.context.title}`}
            style={{ objectFit: "cover", maxWidth: "100vw" }}
          ></Image>
        )}
        <div
          style={s.textArea}
        >
          <p
            style={s.title}
          >
            {props.context.title}
          </p>
          <p
            style={s.content}
          >
            {props.context.content}
          </p>
          <GWButton text={props.buttonText} onClick={props.context.onPress} />
        </div>
      </div>
    </div>
  );
}
