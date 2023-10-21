'use client'
import GWHeader from "@/component/GWHeaderContent";
import Image from "next/image";
import bg from "../../public/event_header.jpg"
import GWEventList from "@/component/GWEventList";
import { IEvent, IEventRes } from "@/interface";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import nodeFetch from "@/nodeFetch";
import { globalVariable } from "@/app/global";
import { useWindowSize } from "./hooks/useWindowSize";


export default function GWEventListContent(props:{dictionary:Record<string, string>, lng:string}){
  const {lng,dictionary} = props
  const {innerWidth} = useWindowSize()
  const t = (text:string) => dictionary[text]
  const [event, setEvent] = useState<IEventRes[]>()
  async function getEventData (){
    const res = await nodeFetch(process.env.BASE_URL+"/api/events?populate=coverImage&populate=coverImagePreview")
  
    return res.json()
  }
  useEffect(()=>{
    const res = getEventData()
    res.then((result) => setEvent(result.data));
  },[])

  // const router = useRouter()
  // const headerData = [
  //   {text: t('About Us'), onClick: () => router.push(`/${lng}/about-us`)},
  //   {text: t('Our Services'), onClick: () => router.push(`/${lng}`)},
  //   {text: t('Articles'), onClick: () => router.push(`articles`)},
  //   {text: t('Event'), onClick: () => router.push(`event`)},
  //   {text: t('Contact us'), onClick: () => router.push(`/${lng}`)},
  // ];
  const isPad = useMemo(() => {
    return innerWidth < globalVariable.middleScreenWidth;
  }, [innerWidth]);
  return (
    <div>
      <div style={{ position: "relative" }}>
        {/* <GWHeader data={headerData} lng={lng} /> */}
        <div
          style={{
            position: "absolute",
            display: "flex",
            top: 0,
            bottom: 20,
            left: 0,
            right: 0,
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontSize: isPad ? 60 : 160,
            fontWeight: "bold",
            background: "rgba(0, 0, 0, 0.2)",
            height:'100%'
          }}
        >
          {t("Event")}
        </div>
        <Image
          src={bg}
          alt=""
          style={{
            width: "100%",
            height: isPad ? 360 : 760,
            objectFit: "cover",
          }}
        />
      </div>
      {event && (
        <GWEventList
          data={event}
          backgroundColor={""}
          title={t("Up coming Event")}
          lng={lng}
        />
      )}
    </div>
  );
}