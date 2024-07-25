import Image, { StaticImageData } from "next/image";
import GWButton from "./GWButton";
import { useWindowSize } from "./hooks/useWindowSize";
import { globalVariable } from "@/app/global";
import { CSSProperties, useMemo } from "react";
import styles from "../style/landing.module.css"

export interface GWHalfWidthImageCustomContext {
  title: string;
  content: string;
  onPress: () => void;
}

export interface GWHalfWidthImage {
  backgroundColor: string;
  context: GWHalfWidthImageCustomContext;
  imageSource: StaticImageData;
  imageAlt?: string;
  mirror?: boolean;
  buttonText: string;
  imageStyles?: CSSProperties[];
  imageContain?: boolean;
  className?: string
}

class Style {
  image = {
    height: 510,
    width: 510,
  };
  bg = {
    width: 1032,
    display: "flex",
    alignItems: "center",
  };
  textArea = {
    // marginRight: 87,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: this.bg.width - this.image.width,
  } as CSSProperties;
  title = {
    fontWeight: 600,
  } as CSSProperties;
  content = {
    lineHeight: 1.4,
    fontWeight: 400,
    maxHeight: '55%'
  } as CSSProperties;

  createStyleSheet(m: boolean) {
    return {
      image: {
        ...this.image,
        height: m ? 232 : this.image.height,
        width: m ? 232 : this.image.width,
      },
      bg: {
        ...this.bg,
        flexDirection: m ? "column" : "row",
        marginBottom: m ? 31 : undefined,
      } as CSSProperties,
      textArea: {
        ...this.textArea,
        width: m ? "100vw" : this.textArea.width,
      } as CSSProperties,
      title: {
        ...this.title,
        fontSize: m ? 22 : 35,
        marginBottom: m ? 12 : 21,
        marginTop: m ? 11 : undefined,
      } as CSSProperties,
      content: {
        ...this.content,
        height: m ? 108 : 154,
        width: m ? 319 : 336,
        fontSize: m ? 13 : 16,
        marginBottom: m ? 12 : 21,
        textAlign: "center",
      } as CSSProperties,
    };
  }
}

export default function GWHalfWidthImage(props: GWHalfWidthImage) {
  const { isMobile } = useWindowSize();
  const s = useMemo(() => {
    return new Style().createStyleSheet(isMobile);
  }, [isMobile]);

  return (
    <div
    className={props.className}
      style={{
        backgroundColor: props.backgroundColor,
        maxWidth: "100vw",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          ...s.bg,
          flexDirection: isMobile
            ? "column"
            : props.mirror
            ? "row-reverse"
            : "row",
        }}
      >
        {
          <Image
            {...s.image}
            src={props.imageSource}
            alt={props.imageAlt ?? `it's a image of ${props.context.title}`}
            style={{ objectFit: "cover", maxWidth: "100vw" }}
          ></Image>
        }
        <div style={s.textArea}>
          <p style={s.title}>{props.context.title}</p>
          <p style={s.content}>{props.context.content}</p>
          <GWButton text={props.buttonText} onClick={props.context.onPress} size={isMobile ? 'm': 'l'} />
        </div>
      </div>
    </div>
  );
}
