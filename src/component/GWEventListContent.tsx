'use client'
import GWHeader from "@/component/GWHeader";
import Image from "next/image";
import bg from "../../public/formImage.jpg"
import GWEventList from "@/component/GWEvent";
import { IEventRes } from "@/interface";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import nodeFetch from "@/nodeFetch";
import { useTranslation } from "react-i18next";

export default function GWEventListContent(props:{lng:string}){
  const {lng} = props
  const { t } = useTranslation(lng)
  const [eventData, setEventData] = useState<IEventRes[]>()
  async function getEventData (){
    const res = await nodeFetch(process.env.BASE_URL+"/api/events?populate=coverImage")
  
    return res.json()
  }
  useEffect(()=>{
    const res = getEventData()
    res.then((result) => setEventData(result.data));
  },[])

  const router = useRouter()
  const headerData = [
    {text: t('About Us'), onClick: () => router.push(`/${lng}/about-us`)},
    {text: t('Our Services'), onClick: () => router.push(`/${lng}`)},
    {text: t('Articles'), onClick: () => router.push(`articles`)},
    {text: t('Event'), onClick: () => router.push(`event`)},
    {text: t('Contact us'), onClick: () => router.push(`/${lng}`)},
  ];

  return (
    <div>
      <GWHeader data={headerData} lng={lng} />
      <Image src={bg} alt="" style={{width:'100%', height: 700}}/>
      {eventData && <GWEventList data={eventData} backgroundColor={""} title={t("Up coming Event")}/>}
    </div>
  )
}