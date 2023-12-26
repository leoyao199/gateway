'use client'
import {useEffect, useMemo} from 'react';
import {useWindowSize} from './hooks/useWindowSize';
import {globalVariable} from '@/app/global';
import GWServiceCard, {GWServiceCardProps} from './GWServiceCard';
import { global } from 'styled-jsx/css';
import GWEventCard, { GWEventCardProps } from './GWEventCard';
import { IEventRes } from '@/interface';
import { useRouter } from 'next/navigation';

export interface GWEventProps {
  data: IEventRes[];
  backgroundColor: string;
  lng: string
}

export default function GWEventList(props: GWEventProps) {
  const {innerWidth, innerHeight, isMobile} = useWindowSize();
  const cardSize = 300;
  const router = useRouter()

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
  
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: props.backgroundColor,
      }}>
        <div
          style={{
            display: 'flex',
            flexDirection:  'column',
          }}>
          {props.data.map((eventRes,index) => {
            const event = eventTranslate(props.lng, eventRes)
            return (
              <div style={{marginBottom:isMobile? 38: 50}}>
            <GWEventCard
              event={event}
              lng={props.lng}
              coverImage={event.coverImagePreview? event.coverImagePreview.data.attributes.url: event.coverImage.data.attributes.url}
              name={event.name}
              content={event.date + ' | ' + event.country}
              onClick={()=>router.push(`event/${eventRes.id}`)}
              />
              </div>
              
          )})}
        </div>
    </div>
  );
}
