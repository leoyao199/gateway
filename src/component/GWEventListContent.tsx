"use client";
import GWHeader from "@/component/GWHeaderContent";
import Image from "next/image";
import bg from "../../public/event_header.jpg";
import GWEventList from "@/component/GWEventList";
import { IEvent, IEventRes } from "@/interface";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import nodeFetch from "@/nodeFetch";
import { globalVariable } from "@/app/global";
import { useWindowSize } from "./hooks/useWindowSize";

export default function GWEventListContent(props: {
  dictionary: Record<string, string>;
  lng: string;
}) {
  const { lng, dictionary } = props;
  const { isMobile } = useWindowSize();
  const t = (text: string) => dictionary[text];
  const [upComingEvent, setUpComingEvent] = useState<IEventRes[]>();
  const [previousEvents, setPreviousEvents] = useState<IEventRes[]>();
  const [page, setPage] = useState(1);
  async function getEventData() {
    const upComingEventsRes = await nodeFetch(
      process.env.BASE_URL +
        "/api/events?populate=coverImage&populate=coverImagePreview" +
        "&sort=created_at:asc" +
        `pagination[page]=${page}&pagination[pageSize]=10` +
        "&filters[openForRegistration][$eqi]=" +
        "true"
    );
    const upComingEvents = await upComingEventsRes.json();
    const previousEventsRes = await nodeFetch(
      process.env.BASE_URL +
        "/api/events?populate=coverImage&populate=coverImagePreview" +
        "&sort=created_at:asc" +
        `pagination[page]=${page}&pagination[pageSize]=10` +
        "&filters[openForRegistration][$eqi]=" +
        "false"
    );
    const previousEvents = await previousEventsRes.json();
    console.log({
      upComingEvents: upComingEvents.data,
      previousEvents: previousEvents.data,
    });
    return {
      upComingEvents: upComingEvents.data,
      previousEvents: previousEvents.data,
    };
  }
  useEffect(() => {
    const res = getEventData();
    res.then((result) => {
      setUpComingEvent(result.upComingEvents);
      setPreviousEvents(result.previousEvents);
    });
  }, []);

  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <div
        style={{
          width: isMobile ? 317 : 1440 - 378 - 378,
          color: "#000",
          fontSize: isMobile ? 22 : 35,
          fontWeight: 600,
          marginTop: isMobile ? 26 : 46,
          marginBottom: isMobile ? 17 : 33,
          textAlign: isMobile ? "center" : undefined,
        }}
      >
        {t("Upcoming Events")}
      </div>
      <div
        style={{ width: isMobile ? 317 : 1440 - 378 - 378, marginBottom: 47 }}
      >
        {upComingEvent && upComingEvent.length && (
          <GWEventList data={upComingEvent} backgroundColor={""} lng={lng} />
        )}
      </div>
      {previousEvents && previousEvents.length ? (
        <div
          style={{
            background: "#FFF5F1",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            width: "100vw",
          }}
        >
          <div
            style={{
              width: 1440 - 378 - 378,
              color: "#000",
              fontSize: 35,
              fontWeight: 600,
              marginTop: 36,
              marginBottom: 33,
            }}
          >
            {t("Previous Events")}
          </div>
          <div style={{ width:isMobile? 317: 1440 - 378 - 378 }}>
            <GWEventList data={previousEvents} backgroundColor={""} lng={lng} />
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
