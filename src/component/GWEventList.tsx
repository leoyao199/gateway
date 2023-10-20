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
  title: string;
  backgroundColor: string;
  lng: string
}

export default function GWEventList(props: GWEventProps) {
  const {innerWidth, innerHeight} = useWindowSize();
  const cardSize = 300;
  const router = useRouter()

  const containerSizer = useMemo(() => {
    if (innerWidth > globalVariable.largeScreenWidth) {
      return (innerWidth - 1440 + 200) / 2;
    } else if (innerWidth > globalVariable.middleLargeScreenWidth) {
      return 50;
    } else {
      return (innerWidth - cardSize) / 2;
    }
  }, [innerWidth]);

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
        padding: '76px 0 76px 0'
      }}>
      <div
        style={{
          paddingRight: containerSizer,
          paddingLeft: containerSizer,
        }}>
        <p style={{fontSize:innerWidth > globalVariable.smallScreenWidth? 46 : 40,paddingBottom:30, color: 'grey', fontWeight: '200', marginBottom: 70}}>{props.title}</p>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: innerWidth > globalVariable.middleScreenWidth ? 'row' : 'column',
          }}>
          {props.data.map((eventRes,index) => {
            const event = eventTranslate(props.lng, eventRes)
            return (
            <div style={{flexBasis: '33.33%', marginBottom: 50, display:'flex', justifyContent:'flex-start'}} key={`GWEventCard_${index}`}>
            <GWEventCard
              lng={props.lng}
              coverImage={event.coverImagePreview? event.coverImagePreview.data.attributes.url: event.coverImage.data.attributes.url}
              name={event.name}
              content={event.date + ' | ' + event.country}
              containerSizer={containerSizer}
              onClick={()=>router.push(`event/${eventRes.id}`)}
              />
              </div>
          )})}
        </div>
      </div>
    </div>
  );
}
