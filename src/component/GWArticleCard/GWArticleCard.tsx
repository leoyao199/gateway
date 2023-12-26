"use client";
import Image from "next/image";
import { useWindowSize } from "../hooks/useWindowSize";
import { CSSProperties, useMemo } from "react";
import { globalVariable } from "@/app/global";
import GWButton from "../GWButton";
import { ITagRes } from "@/interface";
import GWTag from "../GWTag";
import "./style.css";

export interface GWArticleCardProps {
  coverImage: string;
  title: string;
  description: string;
  onClick: () => void;
  date: string;
  tags?: { data: ITagRes[] };
  lng: "vn" | "en";
  buttonLabel: string;
  mobileMode?: boolean;
}
const styles = {
  title: {
    width: "335px",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2,
    overflow: "hidden",
    fontSize: "25px",
    fontWeight: "600",
    marginBottom: "10px",
  } as CSSProperties,
  description: {
    width: "335px",
    height: "104px",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 5,
    overflow: "hidden",
  } as CSSProperties,
  tag: {
    marginRight: "20px",
  } as CSSProperties,
  mobile: {
    title: {
      width: "319px",
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: 2,
      overflow: "hidden",
      fontSize: "22px",
      fontWeight: "600",
      marginBottom: "5px",
    } as CSSProperties,
    description: {
      width: "319px",
      height: "36px",
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: 2,
      overflow: "hidden",
      fontSize: "13px",
      lineHeight: "140%",
      fontWeight: "400",
      marginBottom: "18px",
    } as CSSProperties,
    tag: {
      fontSize: "12px",
      fontWeight: "400",
      lineHeight: "140%",
      marginRight: "20px",
    } as CSSProperties,
  },
};

export default function GWArticleCard(props: GWArticleCardProps) {
  const window = useWindowSize();
  const isMobile = useMemo(() => {
    if (props.mobileMode !== undefined) {
      return props.mobileMode;
    } else {
      return window.isMobile;
    }
  }, [window]);
  return (
    <div
      style={{
        marginBottom: 30,
        display: "flex",
        flexDirection:
          !isMobile ? "row" : "column",
        justifyContent: "center",
        alignItems: "center",
        width: 336
        
      }}
      onClick={props.onClick}
    >
      <Image
        src={props.coverImage}
        alt={""}
        width={336}
        height={252}
        style={{ objectFit: "cover", borderRadius: 16 }}
      />
      <div style={{ marginLeft: 13 }}>
        <div style={{ width: 335 }}>
          <div
            style={{
              fontSize: 16,
              fontWeight: 400,
              lineHeight: 1.4,
              marginBottom: 5,
              marginTop: isMobile ? 18 : undefined,
            }}
          >
            {props.date}
          </div>
          <div style={isMobile ? styles.mobile.title : styles.title}>
            {props.title}

          </div>
          <div
            style={isMobile ? styles.mobile.description : styles.description}
          >
            {props.description}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row", marginBottom: 8 }}>
          {props.tags &&
            props.tags.data.map((tag, index) => (
              <div
                style={isMobile ? styles.mobile.tag : styles.tag}
                key={`GWTag in ArticleCard${index}`}
              >
                #{tag.attributes[props.lng === "vn" ? "vn_name" : "en_name"]}
              </div>
            ))}
        </div>
        <GWButton
          text={props.buttonLabel}
          onClick={props.onClick}
          size={isMobile ? "a" : "l"}
        />
      </div>
    </div>
  );
}
