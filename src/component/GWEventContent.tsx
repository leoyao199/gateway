'use client'
import GWHeader from "@/component/GWHeaderContent";
import { IEventRes } from "@/interface";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation"
import formImage from '../../public/formImage.jpg';
import { useEffect, useMemo } from "react";
import { useWindowSize } from "./hooks/useWindowSize";
import { globalVariable } from "@/app/global";
import { useTranslation } from "@/app/i18n/client";
import GWForm from "./GWForm";

export default function GWEventContent(props:{lng:string, event:IEventRes}){
  const {lng, event} = props

  const {innerHeight, innerWidth, isMobile} = useWindowSize()
  const {t} = useTranslation(lng)

  const eventTranslate = (lng:string, eventRes: IEventRes) => {
    const event = eventRes.attributes
    switch (lng){
      case 'vn':
        return {
          ...event,
          name: event.vn_name,
          content: event.vn_content,
          country: event.vn_country,
          date: event.vn_date
        }
      default :
        return event
    }
  }

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

  const translatedEvent = eventTranslate(lng, event)

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        width: "100vw",
      }}
    >
      <div
        style={{
          marginTop: isMobile ? 20 : 73,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          width: isMobile ? 317 : 1032,
        }}
      >
        <div
          style={{
            fontSize: isMobile ? 13 : 16,
            fontWeight: 400,
            lineHeight: 1.4,
            marginBottom: 5,
            width: isMobile ? 317 : 1032,
          }}
        >
          {translatedEvent.openForRegistration
            ? t("Upcoming Events")
            : t("Previous Events")}
        </div>
        <div
          style={{
            fontSize: isMobile ? 22 : 35,
            fontWeight: 600,
            width: isMobile? 317: 1032,
            marginBottom: 20,
          }}
        >
          {translatedEvent.name}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            width: isMobile ? 317 : 1032,
            marginBottom: 56
          }}
        >
          <Image
            src={translatedEvent.coverImage.data.attributes.url}
            alt={""}
            width={isMobile ? 249 : 407}
            height={isMobile ? 249 : 407}
            style={{ objectFit: "cover", borderRadius: 16, margin: isMobile ? '0 0 20px 0' : '0 30px 0 0 ', alignSelf:isMobile? 'center':undefined }}
          />
          <div>
            {propertiesDiv(t("Date"), translatedEvent.date)}
            <div style={{ marginTop: 7 }}></div>
            {propertiesDiv(t("Time"), translatedEvent.time ?? "")}
            <div style={{ marginTop: 7 }}></div>
            {propertiesDiv(
              t("Location"),
              props.lng === "vn"
                ? translatedEvent.vn_location ?? ""
                : translatedEvent.location ?? "",
              true
            )}
            <div style={{ marginTop: isMobile ? 7 : 16 }}></div>
            <div
              dangerouslySetInnerHTML={{ __html: translatedEvent.content }}
              style={{ lineHeight: 2 }}
            ></div>
          </div>
        </div>
        <GWForm
          lng={props.lng}
          buttonText={t("Contact Us")}
          leftText={t("Contact Us for Consultation")}
        />
        <div style={{marginTop:isMobile ? 41:79}}></div>
      </div>
    </div>
  );
}

