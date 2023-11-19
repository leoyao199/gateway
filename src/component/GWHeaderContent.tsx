"use client";
import { color } from "@/app/theme";
import { useWindowSize } from "./hooks/useWindowSize";
import { globalVariable } from "@/app/global";
import { useTranslation } from "../app/i18n/client";
import { languages } from "@/app/i18n/settings";
import { useRouter } from "next/navigation";
import { CSSProperties, useMemo } from "react";
import Icon from "../../public/gateway_icon.png";
import Image, { StaticImageData } from "next/image";
import en_icon from "../../public/en_icon.png";
import vn_icon from "../../public/vn_icon.png";
import gatewayHeaderLogo from "../../public/gatewayHeaderLogo.png";
class staticStyle {
  height = 108;
  bg = {
    backgroundColor: color.header,
    width: "100vw",
    height: this.height,
  } as CSSProperties;
  whiteBg = {
    width: "100%",
    height: this.height - 6,
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
  } as CSSProperties;
  buttonContainer = {
    width: 1032,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

  } as CSSProperties;
}

export default function GWHeaderContent({ dictionary,lng }: { dictionary: Record<string,string>,lng:string }) {
  // const { t } = useTranslation(lng);
  const s = new staticStyle()
  const t = (text:string) => dictionary[text]
  const route = useRouter();
  const data = useMemo(() => {
    // const isIndex = true;
    // if (isIndex) {
      return [
        { text: t("About Us"), onClick: () => route.push(`/${lng}/about-us`) },
        { text: t("Our Services"), onClick: () => route.push(`/${lng}#Our_Services_div`) },
        { text: t("Articles"), onClick: () => route.push(`/${lng}/articles`) },
        { text: t("Event"), onClick: () => route.push(`/${lng}/event`) },
        { text: t("Contact us"), onClick: () => route.push(`/${lng}#Contact_Us_div`) },
      ];
    // }
  }, []);
  const { innerWidth, innerHeight } = useWindowSize();
  // const { data, lng } = props;

  const headerButton = (
    text: string,
    index: number,
    onClick: () => void,
    icon?: string | StaticImageData
  ) => {
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
          flexDirection: "row",
          display: "flex",
          cursor: "pointer",
        }}
        key={`${text}_${index}`}
      >
        {icon && (
          <Image
            src={icon}
            alt={"change language to " + text}
            style={{ width: 20, height: 20, background: "white" }}
          />
        )}
        <p style={{ fontSize: 18, 
          fontFamily: "inter" 
          }}>{text}</p>
      </div>
    );
  };

  const isMobile = innerWidth <= globalVariable.middleScreenWidth;

  const headerButtonData = useMemo(() => {
    const result: {
      text: string;
      onClick: () => any;
      icon?: StaticImageData;
    }[] = [...data];
    languages
      .filter((l) => lng !== l)
      .map((unSelectedLanguage, index) => {
        result.push({
          text: unSelectedLanguage == "en" ? "En" : "Vn",
          onClick: () => route.push("/" + unSelectedLanguage),
          icon: unSelectedLanguage == "en" ? en_icon : vn_icon,
        });
      });
    return result;
  }, [languages, data, lng]);

  return (
    <div
      style={{
        ...s.bg
      }}
    >
      <div
        style={{
          ...s.whiteBg,
          // display: "flex",
          // flexWrap: "wrap",
          // justifyContent: isMobile ? "center" : "space-between",
          // alignContent: isMobile ? "space-between" : "center",
          // paddingRight: isMobile ? "10vw" : "5vw",
          // paddingLeft: isMobile ? "10vw" : "5vw",
          // paddingTop: 10,
          // paddingBottom: 10,
          // backgroundColor: 'white'
        }}
      >
        <div style={{...s.buttonContainer}}>

        <Image src={gatewayHeaderLogo} alt={""} width={219} height={66}/>
        {headerButtonData.map((d, index) =>
          headerButton(d.text, index, d.onClick, d.icon)
          )}
          </div>
      </div>
    </div>
  );
}
