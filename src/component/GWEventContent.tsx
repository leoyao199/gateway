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
  const {t} = useTranslation(lng)
  const router = useRouter()

  const headerData = [
    {text: t('About Us'), onClick: () => router.push(`/${lng}`)},
    {text: t('Our Services'), onClick: () => router.push(`/${lng}`)},
    {text: t('Articles'), onClick: () => router.push(`/${lng}/articles`)},
    {text: t('Event'), onClick: () => router.push(`/${lng}/event`)},
    {text: t('Contact us'), onClick: () => router.push(`/${lng}`)},
  ];

  const imageWidth = useMemo(()=>{
    let width = 0
    if (innerWidth >= 1200 ){
      width =  1200
    } else {
      width = innerWidth
    }
    return width
  },[innerWidth])


  return (
    <div style={{width:'100vw'}}>

      <GWHeader data={headerData} lng={lng}/>
    <div style={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', maxWidth: '100vw',}}>
      <div style={{marginTop:90, maxWidth: '100vw',  display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
        <div style={{fontSize: 24, fontWeight: 200, display:'flex', justifyContent:'center'}}>{event.attributes.date}  |  {event.attributes.country}</div>
        <div style={{fontSize: innerWidth > globalVariable.smallScreenWidth ? 72 : 36, fontWeight: '500', display:'flex', justifyContent:'center', lineHeight: 1.4, maxWidth: 1080, textAlign:'center'}}>{event.attributes.name}</div>
        <Image src={event.attributes.coverImage.data.attributes.url} alt={""} width={imageWidth} height={imageWidth * 0.5625} style={{marginTop:80, objectFit:'cover', maxWidth: '100vw'}}/>
        <div style={{width: 1080,  marginBottom: 200, maxWidth: '100vw', display:'flex', justifyContent:'center', alignItems:'center', marginTop: 50}}>
          <div style={{width: '80%'}}>
          <div dangerouslySetInnerHTML={{__html:event.attributes.content}} style={{lineHeight: 2}}></div>

          </div>
        </div>
        {/* <GWForm imageSource={formImage} maxWidth={1200}/> */}
      </div>
    </div>
    </div>
  )
}

