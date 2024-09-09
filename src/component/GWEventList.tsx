"use client";
import { useEffect, useMemo } from "react";
import { useWindowSize } from "./hooks/useWindowSize";
import { globalVariable } from "@/app/global";
import GWServiceCard, { GWServiceCardProps } from "./GWServiceCard";
import { global } from "styled-jsx/css";
import GWEventCard, { GWEventCardProps } from "./GWEventCard";
import { GwLanguage, IEventRes } from "@/interface";
import { useRouter } from "next/navigation";

export interface GWEventProps {
  data: IEventRes[];
  backgroundColor: string;
  lng: GwLanguage;
}

export default function GWEventList(props: GWEventProps) {
  const { innerWidth, innerHeight, isMobile } = useWindowSize();
  const cardSize = 300;
  const router = useRouter();

  const eventTranslate = (lng:GwLanguage, eventRes: IEventRes) => {
    const event = eventRes.attributes
    switch (lng){
      case 'en':
        return event
      default :
        return {
          ...event,
          name: event[`${lng}_name`] ?? event.name,
          content: event[`${lng}_content`] ?? event.content,
          country: event[`${lng}_country`] ?? event.country,
          date: event[`${lng}_country`] ?? event.date
        }
    }
  }

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
          display: "flex",
          flexDirection: "column",
        }}
      >
        {props.data.map((eventRes, index) => {
          const event = eventTranslate(props.lng, eventRes);
          return (
            <div style={{ marginBottom: isMobile ? 38 : 50 }} key={`${index}_GW EVENT CARD`}>
              <GWEventCard
                event={event}
                lng={props.lng}
                coverImage={
                  event.coverImagePreview.data
                    ? event.coverImagePreview.data.attributes.url
                    : ''
                }
                name={event.name}
                content={event.date + " | " + event.country}
                onClick={() => router.push(`event/${eventRes.id}`)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
