'use client'
import GWHeader from "@/component/GWHeaderContent";
import { IEventRes } from "@/interface";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation"
import formImage from '../../public/formImage.jpg';
import { useMemo } from "react";
import { useWindowSize } from "./hooks/useWindowSize";
import { globalVariable } from "@/app/global";
import { useTranslation } from "@/app/i18n/client";

export default function GWEventContent(props:{lng:string, event:IEventRes}){
  const {lng, event} = props
  const {innerHeight, innerWidth} = useWindowSize()
  // const {t} = useTranslation(lng)
  // const router = useRouter()

  const imageWidth = useMemo(()=>{
    let width = 0
    if (innerWidth >= 1200 ){
      width =  1200
    } else {
      width = innerWidth
    }
    return width
  },[innerWidth])

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

  const translatedEvent = eventTranslate(lng, event)

  return (
    <div style={{width:'100vw'}}>
    <div style={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', maxWidth: '100vw',}}>
      <div style={{marginTop:90, maxWidth: '100vw',  display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
        <div style={{fontSize: 24, fontWeight: 200, display:'flex', justifyContent:'center'}}>{translatedEvent.date}  |  {translatedEvent.country}</div>
        <div style={{fontSize: innerWidth > globalVariable.smallScreenWidth ? 72 : 36, fontWeight: '500', display:'flex', justifyContent:'center', lineHeight: 1.4, maxWidth: 1080, textAlign:'center'}}>{translatedEvent.name}</div>
        <Image src={translatedEvent.coverImage.data.attributes.url} alt={""} width={imageWidth} height={imageWidth * 0.5625} style={{marginTop:80, objectFit:'cover', maxWidth: '100vw'}}/>
        <div style={{width: 1080,  marginBottom: 200, maxWidth: '100vw', display:'flex', justifyContent:'center', alignItems:'center', marginTop: 50}}>
          <div style={{width: '80%'}}>
          <div dangerouslySetInnerHTML={{__html:translatedEvent.content}} style={{lineHeight: 2}}></div>

          </div>
        </div>
        {/* <GWForm imageSource={formImage} maxWidth={1200}/> */}
      </div>
    </div>
    </div>
  )
}

