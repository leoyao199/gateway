"use client";
import { color } from "@/app/theme";
import { useWindowSize } from "./hooks/useWindowSize";
import { globalVariable } from "@/app/global";
import { useTranslation } from "../app/i18n/client";
import { languages } from "@/app/i18n/settings";
import { useRouter } from "next/navigation";
export interface GWHeaderProps {
  data: { text: string; onClick: () => void }[];
  lng: string;
}

export default function GWHeader(props: GWHeaderProps) {
  const { t } = useTranslation(props.lng, "header");
  const { innerWidth, innerHeight } = useWindowSize();
  const { data } = props;
  const route = useRouter()

  const headerButton = (text: string, index: number, onClick: () => void) => {
    return (
      <div
        onClick={() => {
          onClick && onClick();
        }}
        style={{
          fontWeight: 600,
          fontSize: isMobile ? 16 : 20,
          marginRight: 10,
          marginLeft: 10,
        }}
        key={`${text}_${index}`}
      >
        <p style={{ fontSize: 16 }}>{text}</p>
      </div>
    );
  };

  const isMobile = innerWidth <= globalVariable.middleScreenWidth;

  return (
    <div
      style={{
        backgroundColor: color.header,
        display: "flex",
        alignItems: "center",
        width: "100%",
        maxWidth: innerWidth,
        // justifyContent: "space-between",
        justifyContent: 'flex-end'
      }}
    >
      <div
        style={{
          height: isMobile ? 120 : 120,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: isMobile ? "center" : "space-between",
          alignContent: isMobile ? "space-between" : "center",
          paddingRight: isMobile ? "10vw" : "5vw",
          paddingLeft: isMobile ? "10vw" : "5vw",
          paddingTop: 10,
          paddingBottom: 10,
        }}
      >
        {data.map((d, index) => headerButton(d.text, index, d.onClick))}
        <div style={{fontWeight: 600,
          fontSize: isMobile ? 16 : 20,
          marginRight: 10,
          marginLeft: 10,}}>
        {languages
          .filter((l) => props.lng !== l)
          .map((l, index) => {
            return (
              <span key={l} onClick={()=>route.push('/'+l)}>
                {l == 'en' ? 'Tiếng Việt' : 'English'}
              </span>
            );
          })}
      </div>
      </div>
    </div>
  );
}
