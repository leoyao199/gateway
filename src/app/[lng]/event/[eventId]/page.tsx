"use client";
import GWEventContent from "@/component/GWEventContent";
import { GwLanguage } from "@/interface";
import nodeFetch from "@/nodeFetch";
import { useEffect, useState } from "react";

async function getEvent(id: number) {
  const res = await nodeFetch(
    `${process.env.BASE_URL}/api/events/${id}?populate=coverImage`
  );
  return res.json();
}

export default function EventPage({
  params,
}: {
  params: { lng: GwLanguage; eventId: number };
}) {
  const { lng, eventId } = params;
  const [event, setEvent] = useState();
  useEffect(() => {
    getEvent(eventId).then((res) => {
      setEvent(res.data)});
  }, []);
  // const eventRes =  await getEvent(eventId)
  // const eventData = eventRes.data
  if (event) {
    return <GWEventContent lng={lng} event={event} />;
  } else {
    return <></>
  }
}
