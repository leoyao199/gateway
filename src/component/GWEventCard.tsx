"use client";
import Image from "next/image";
import { useWindowSize } from "./hooks/useWindowSize";
import { useMemo } from "react";
import { globalVariable } from "@/app/global";
import GWButton from "./GWButton";
import { useTranslation } from "@/app/i18n/client";
import { GwLanguage, IEvent } from "@/interface";

export interface GWEventCardProps {
  coverImage: string;
  name: string;
  content: string;
  onClick: () => void;
  lng: GwLanguage;
  event: IEvent
}

export default function GWEventCard(props: GWEventCardProps) {
  const {isMobile} = useWindowSize()
  const { t } = useTranslation(props.lng);
  const fixedTitleLength = (title: string, charLength?: number) => {
    let result = title;
    const maxChar = charLength ?? 36;
    if (result.length > maxChar) {
      return result.slice(0, maxChar) + "...";
    } else {
      return result;
    }
  };

  const { innerWidth, innerHeight } = useWindowSize();

  const cardWidth = isMobile ? 317 : 684;
  const cardHeight = 370;

  const fixedTitle = useMemo(() => {
    if (innerWidth > globalVariable.middleLargeScreenWidth) {
      return fixedTitleLength(props.name);
    } else if (innerWidth > globalVariable.middleScreenWidth) {
      return fixedTitleLength(props.name, 50);
    } else {
      return props.name;
    }
  }, [innerWidth]);

  const propertiesDiv = (field:string, value:string, long?:boolean) => {
    return (
      <div style={{ display: "flex" }}>
        <div
          style={{
            width: isMobile? 70 :89,
            display: "flex",
            padding: 9,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "5px 0 0 5px",
            background: "#414042",
            height: long ? undefined: 21
          }}
        >
          <div
            style={{
              fontSize: 14,
              fontWeight: 400,
              lineHeight: 1.4,
              textAlign: "center",
              color: '#FFFFFF'
            }}
          >
            {field}
          </div>
        </div>
        <div
          style={
            long
              ? {
                  padding: "9px 19px",
                  width: isMobile? 245 : 296,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "1px solid #000",
                  borderRadius: "0 5px 5px 0",
                  height: isMobile? 70 : 47
                }
              : {
                  padding: "9px 19px",
                  width : isMobile ? 136:  174,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: 21,
                  border: "1px solid #000",
                  borderRadius: "0 5px 5px 0",
                }
          }
        >
          <div style={{ fontSize: 14, lineHeight: 1.3, fontWeight: 400 }}>
            {value}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        width: cardWidth,
        display: "flex",
        justifyContent: isMobile ? undefined : "space-between",
        flexDirection: isMobile ? "column" : "row",
        alignItems: isMobile ? "center" : undefined,
      }}
    >
      <Image
        src={props.coverImage}
        alt={""}
        width={249}
        height={249}
        style={{ objectFit: "cover", marginBottom: isMobile?  27 : undefined }}
      />
      <div style={{width:isMobile ? 317 :422}}>
        <p
          style={{
            fontSize: isMobile ? 22 :25,
            marginBottom: isMobile ? 9 :5,
            fontWeight: 600,
            height: isMobile ? 54 :60,
            overflow: "hidden",
            width: "100%",
          }}
        >
          {fixedTitle}
        </p>
        <p
          style={{
            
            lineHeight: 1.4,
            fontWeight: 400,
            fontSize: isMobile? 13 : 16,
            marginBottom: isMobile ? 13 :25,
            height: isMobile ? 54 : 66,
            overflow: "hidden",
          }}
        >
          {props.content}
        </p>
        {propertiesDiv(t('Date'), props.event.date)}
        <div style={{marginTop:7}}></div>
        {propertiesDiv(t('Time'), props.event.time?? "")}
        <div style={{marginTop:7}}></div>
        {propertiesDiv(t('Location'), props.lng !== 'en' ? props.event[`${props.lng}_location`] ??"": props.event.location??"", true)}
        <div style={{marginTop:25}}></div>
        <GWButton text={t("More Detail")} onClick={props.onClick} size="l"/>
      </div>
    </div>
  );
}
