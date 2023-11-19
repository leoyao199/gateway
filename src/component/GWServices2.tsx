import {CSSProperties, useMemo} from 'react';
import {useWindowSize} from './hooks/useWindowSize';
import {globalVariable} from '@/app/global';
import GWServiceCard, {GWServiceCardProps} from './GWServiceCard';
import { global } from 'styled-jsx/css';
import Image, { StaticImageData } from 'next/image';
import GWButton from './GWButton';

export interface GWServices {
  data: {text:string, imageSource: StaticImageData}[];
  title: string;
  buttonText: string
}

class Style {
  bg = {
    width: "100vw",
    height: 445,
    background: "#FFF5F1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  } as CSSProperties;

  flexBox = {
    width: 1032,
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 23
  } as CSSProperties;

  cardFlexBox = {
    height: 203,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  } as CSSProperties;

  content = {
    width: 169,
    color: "#000",
    fontSize: 25,
    fontWeight: 600,
  } as CSSProperties;

  title = {
    color: "#000",
    textAlign: "center",
    fontSize: 35,
    fontWeight: 600,
    marginBottom: 47,
  } as CSSProperties;
}

export default function GWServices2(props: GWServices) {
  const s = new Style()
  return (
    <div style={s.bg}>
      <div style={s.title}>{props.title}</div>
      <div style={s.flexBox}>
        {props.data.map((d)=>(
          <div style={s.cardFlexBox}>
            <Image src={d.imageSource} alt={`image of ${d.text}`}/>
            <div style={s.content}>
              {d.text}
            </div>
          </div>
        ))}
      </div>
        <GWButton text={props.buttonText} onClick={()=>{}} style={{width:182, height: 40}} size='l'/>
    </div>
  );
}
