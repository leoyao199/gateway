"use client";
import { color } from "@/app/theme";
import { useWindowSize } from "./hooks/useWindowSize";
import { globalVariable } from "@/app/global";
import { useTranslation } from "../app/i18n/client";
import { languages } from "@/app/i18n/settings";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import Icon from "../../public/gateway_icon.png"
import Image, { StaticImageData } from "next/image";
import en_icon from "../../public/en_icon.png"
import vn_icon from "../../public/vn_icon.png"
export interface GWHeaderProps {
  data: { text: string; onClick: () => void;icon?: string|StaticImageData }[];
  lng: string;
}

export default function GWHeader(props: GWHeaderProps) {
  const { t } = useTranslation(props.lng, "header");
  const { innerWidth, innerHeight } = useWindowSize();
  const { data, lng } = props;
  const route = useRouter()

  const headerButton = (text: string, index: number, onClick: () => void, icon?: string|StaticImageData) => {
    return (
      <div
        onClick={() => {
          onClick && onClick();
        }}
        style={{
          fontWeight: 300,
          fontSize: isMobile ? 16 : 20,
          marginRight: 15,
          marginLeft: 15,
          flexDirection:'row',
          display:'flex'
        }}
        key={`${text}_${index}`}
      >
        {icon && <Image src={icon} alt={'change language to '+text} style={{width:20, height:20, background:"white  "}}/>}
        <p style={{ fontSize: 18 }}>{text}</p>
      </div>
    );
  };

  const isMobile = innerWidth <= globalVariable.middleScreenWidth;

  const headerButtonData = useMemo(()=>{
    const result = [...data]
    languages
      .filter((l) => lng !== l)
      .map((unSelectedLanguage, index) => {
        result.push (
            { text: unSelectedLanguage == 'en' ? 'En' : 'Vn', onClick:()=>route.push('/'+unSelectedLanguage), icon: unSelectedLanguage == 'en' ? en_icon:vn_icon}
        );
      })
      return result
  },[languages,data, lng])

  return (
    <div
      style={{
        backgroundColor: color.header,
        display: "flex",
        alignItems: "center",
        width: "100%",
        maxWidth: innerWidth,
        justifyContent: "space-between",
        // justifyContent: 'flex-end'
      }}
    >
      {/* <Image src={Icon} alt={""} style={{height: 100, width:100, background: "rgba(255,255,255,0.70)", marginLeft: 100, }}/> */}
      <div
        style={{
          height: 100,
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
        {headerButtonData.map((d, index) => headerButton(d.text, index, d.onClick, d.icon))}
        {/* <div style={{fontWeight: 600,
          fontSize: isMobile ? 16 : 20,
          marginRight: 10,
          marginLeft: 10,
          }}>
        {languages
          .filter((l) => props.lng !== l)
          .map((l, index) => {
            return (
              
              <div key={l} onClick={()=>route.push('/'+l)}>
                {l == 'vn' ? 'English' : 'Vietnamese'}
              </div>
            );
          })}
      </div> */}
      </div>
    </div>
  );
}
