import {useMemo} from 'react';
import {useWindowSize} from './hooks/useWindowSize';
import {globalVariable} from '@/app/global';
import GWServiceCard, {GWServiceCardProps} from './GWServiceCard';
import { global } from 'styled-jsx/css';
import GWEventCard, { GWEventCardProps } from './GWEventCard';

export interface GWEventProps {
  data: GWEventCardProps[];
  title: string;
  backgroundColor: string
}

export default function GWEventList(props: GWEventProps) {
  const {innerWidth, innerHeight} = useWindowSize();
  const cardSize = 300;
  
  const containerSizer = useMemo(() => {
    if (innerWidth > globalVariable.largeScreenWidth) {
      return (innerWidth - 1440 + 200) / 2;
    } else if (innerWidth > globalVariable.middleLargeScreenWidth) {
      return 50;
    } else {
      return (innerWidth - cardSize) / 2;
    }
  }, [innerWidth]);

  const height = useMemo(() => {
    const miniHeight = 620
    if (innerWidth > globalVariable.largeScreenWidth) {
      return 760;
    } else if (innerWidth > globalVariable.middleLargeScreenWidth) {
      return miniHeight + (innerWidth - globalVariable.middleScreenWidth) * 0.2;
    } else {
      return '100%';
    }
  }, [innerWidth]);
  
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        height: height,
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
          {props.data.map((props,index) => (
            <div style={{flexBasis: '33.33%', marginBottom: 50, display:'flex', justifyContent:'center'}}>
            <GWEventCard
              key={`GWEventCard_${index}`}
              imageSource={props.imageSource}
              title={props.title}
              content={props.content}
              containerSizer={containerSizer}
              onClick={props.onClick}
              />
              </div>
          ))}
        </div>
      </div>
    </div>
  );
}
