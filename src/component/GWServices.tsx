import { useMemo } from "react";
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
  const { innerWidth, innerHeight } = useWindowSize();
  const cardSize = 300;
  // const containerSizer = useMemo(() => {
  //   if (innerWidth > globalVariable.largeScreenWidth) {
  //     return (innerWidth - 1440 + 200) / 2;
  //   } else if (innerWidth > globalVariable.middleLargeScreenWidth) {
  //     return 50;
  //   } else {
  //     return (innerWidth - cardSize) / 2;
  //   }
  // }, [innerWidth]);

  // const height = useMemo(() => {
  //   const miniHeight = 620;
  //   if (innerWidth > globalVariable.largeScreenWidth) {
  //     return 760;
  //   } else if (innerWidth > globalVariable.middleLargeScreenWidth) {
  //     return miniHeight + (innerWidth - globalVariable.middleScreenWidth) * 0.2;
  //     // } else if ((innerWidth - 200) / 1.5 < miniHeight) {
  //     // return miniHeight;
  //   } else {
  //     return "100%";
  //   }
  // }, [innerWidth]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: props.backgroundColor,
        // height: height,
        // padding: "76px 0 76px 0",

      }}
    >
      <div
        style={{
          width: 1032,
        }}
      >
        <div
          style={{
            paddingBottom: 36,
            color: "#000",
            textAlign: "center",
            fontSize: 35,
            fontWeight: 600,
          }}
        >
          {props.title}
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection:
              innerWidth > globalVariable.middleScreenWidth ? "row" : "column",
            // justifyContent: 'space-around',
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
