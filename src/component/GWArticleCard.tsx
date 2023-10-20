"use client";
import Image from "next/image";
import { useWindowSize } from "./hooks/useWindowSize";
import { useMemo } from "react";
import { globalVariable } from "@/app/global";
import GWButton from "./GWButton";
import { ITagRes } from "@/interface";
import GWTag from "./GWTag";

export interface GWArticleCardProps {
  coverImage: string;
  title: string;
  description: string;
  onClick: () => void;
  date: string
  tags?: {data:ITagRes[]}
  lng:'vn'|'en'
}

const paddingHorizontal = 50
export default function GWArticleCard(props: GWArticleCardProps) {
  const {innerWidth, innerHeight} = useWindowSize()
  const imageWidth = useMemo(()=>{
    if (innerWidth > globalVariable.largeScreenWidth){
      return 640
    } 
    if (innerWidth > globalVariable.middleLargeScreenWidth){
      return (innerWidth - paddingHorizontal)/2
    }
    return (
      innerWidth - paddingHorizontal
    )
  },[innerWidth, ])
  return (
    <div
      style={{
        maxWidth: 1200,
        width: "100%",
        marginTop: 20,
        marginBottom: 20,
        display: "flex",
        flexDirection:
          innerWidth > globalVariable.middleLargeScreenWidth ? "row" : "column",
        border: "solid 0.2px rgb(233,233,233, 0.7)",
        justifyContent:'center',
        alignItems:'center'
      }}
      onClick={props.onClick}
    >
      <Image
        src={props.coverImage}
        alt={""}
        width={imageWidth}
        height={(imageWidth * 9) / 16}
        style={{ objectFit: "cover" }}
      />
      <div style={{ marginTop: 30, marginRight: 30, marginLeft: 30 }}>
        <div style={{ height: innerWidth > globalVariable.middleLargeScreenWidth ? 270 : 200 }}>
          <div style={{ fontSize: innerWidth > globalVariable.middleLargeScreenWidth ?30 :24, fontWeight: 500 }}>{props.title}</div>
          <div style={{ fontSize: innerWidth > globalVariable.middleLargeScreenWidth ?20 :16, marginTop: 20, fontWeight: 200 }}>
            {props.description}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          {props.tags &&
            props.tags.data.map((tag, index) => (
              <div style={{ marginRight: 20 }} key={`GWTag in ArticleCard${index}`}>
                <GWTag
                  label={
                    props.lng === "vn"
                      ? tag.attributes.vn_name
                      : tag.attributes.en_name
                  }
                  onClick={() => {}}
                />
              </div>
            ))}
        </div>
        <div style={{ height: 0.5, background: "grey" }}></div>
        <div style={{ fontSize: innerWidth > globalVariable.middleLargeScreenWidth ? 20: 16, fontWeight: 200, marginTop: 5 }}>
          {props.date}
        </div>
      </div>
    </div>
  );
}
