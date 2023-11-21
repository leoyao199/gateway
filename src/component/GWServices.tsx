'use client'
import { useEffect, useMemo } from "react";
import { useWindowSize } from "./hooks/useWindowSize";
import { globalVariable } from "@/app/global";
import GWServiceCard, { GWServiceCardProps } from "./GWServiceCard";
import { global } from "styled-jsx/css";

export interface GWServices {
  data: GWServiceCardProps[];
  title: string;
  backgroundColor: string;
  width?: number | string;
}

export default function GWServices(props: GWServices) {
  const { innerWidth, innerHeight, isMobile } = useWindowSize();
  useEffect(()=>{console.log(isMobile)},[])
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: props.backgroundColor,
      }}
    >
      <div
        style={{
          width: isMobile ? "100vw" : 1032,
        }}
      >
        <div
          style={{
            paddingBottom: 36,
            color: "#000",
            textAlign: "center",
            fontSize: isMobile ? 22 : 35,
            fontWeight: 600,
          }}
        >
          {props.title}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: isMobile ? "center" : undefined,
          }}
        >
          {props.data.map((props, index) => (
            <div style={{ flexBasis: "33.33%" }} key={`GWServiceCard_${index}`}>
              <GWServiceCard
                imageSource={props.imageSource}
                title={props.title}
                content={props.content}
                // containerSizer={containerSizer}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
