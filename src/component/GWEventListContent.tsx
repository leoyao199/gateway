'use client'
import GWHeader from "@/component/GWHeader";
import Image from "next/image";
import bg from "../../public/formImage.jpg"
import GWEventList from "@/component/GWEvent";
import { IEventRes } from "@/interface";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import nodeFetch from "@/nodeFetch";

export default function GWEventListContent(props:{lng:string}){
  const {lng} = props
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
    {text: 'About us', onClick: () => router.push(`/${lng}`)},
    {text: 'Our Services', onClick: () => router.push(`/${lng}`)},
    {text: 'Articles', onClick: () => router.push(`articles`)},
    {text: 'Event', onClick: () => router.push(`event`)},
    {text: 'Contact us', onClick: () => router.push(`/${lng}`)},
  ];

  return (
    <div>
      <GWHeader data={headerData} />
      <Image src={bg} alt="" style={{width:'100%'}}/>
      {eventData && <GWEventList data={eventData} backgroundColor={""} title={"Up coming Event"}/>}
    </div>
  )
}