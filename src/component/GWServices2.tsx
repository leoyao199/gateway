import {CSSProperties, useEffect, useMemo, useRef, useState} from 'react';
import {useWindowSize} from './hooks/useWindowSize';
import {globalVariable} from '@/app/global';
import GWServiceCard, {GWServiceCardProps} from './GWServiceCard';
import { global } from 'styled-jsx/css';
import Image, { StaticImageData } from 'next/image';
import GWButton from './GWButton';
import styles from "../style/landing.module.css"
export interface GWServices {
  data: {text:string, imageSource: StaticImageData}[];
  title: string;
  buttonText: string
  onClick: ()=> void
}

class Style {
  bg = {
    width: "100vw",
    background: "#FFF5F1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  } as CSSProperties;

  flexBox = {
    width: 1032 * 0.75,
    maxWidth: '100vw',
    display: "flex",
    justifyContent: "space-between",
  } as CSSProperties;

  cardFlexBox = {
    display: "flex",
    flexDirection: "column",
  } as CSSProperties;

  content = {
    color: "#000",
    fontWeight: 600,
  } as CSSProperties;

  title = {
    color: "#000",
    textAlign: "center",
    fontWeight: 600,
  } as CSSProperties;

  createStyleSheet(m:boolean){
    return {
      bg: { ...this.bg, height: m ? 486 : 445 },
      flexBox: {
        ...this.flexBox,
        flexWrap: m ? "wrap" : undefined,
        maxWidth: m ? 206 : undefined,
        marginBottom: m ? 0 :23
      } as CSSProperties,
      cardFlexBox: {
        ...this.cardFlexBox,
        height: m?150:  203,
        justifyContent: m ? undefined : "space-between",
        alignItems: m &&'center'
      } as CSSProperties,
      content: {
        ...this.content,
        width: m ? 95 : 169,
        fontSize: m ? 13 : 25,
        textAlign: m && 'center'
      } as CSSProperties,
      title: {
        ...this.title,
        fontSize: m ? 22 : 35,
        marginBottom: m ? 32 : 47,
      } as CSSProperties,
      image: {
        height: m ? 74 : 150,
        width: m ? 74 : undefined,
      },
    };
  }
}

export default function GWServices2(props: GWServices) {
  const {isMobile} = useWindowSize()
  const [show, setShow]=useState(false)
  const divRef = useRef<HTMLDivElement>(null)
  const s = useMemo(()=>{
    return new Style().createStyleSheet(isMobile)
  },[isMobile])

  useEffect(()=>{
    const option  = {  root: null,
      rootMargin: "0px 0px 0px 0px",
      threshold: 0.1,}
    const observer = new IntersectionObserver((entries) => {
      entries.map((e) => {
        if (e.isIntersecting) {
          if (!show){
            setShow(true)
            divRef.current && observer.unobserve(divRef.current)
          }
        }
      });
    }, option);
    divRef.current && observer.observe(divRef.current)
    return ()=>{divRef.current && observer.unobserve(divRef.current)}
  },[divRef])

  return (
    <div style={s.bg}  ref={divRef}>
      <div style={s.title}>{props.title}</div>
      {show && <div style={s.flexBox}>
        {props.data.map((d, index)=>(
          <div style={s.cardFlexBox} key={`GWServices2_card_${index}`} className={styles[`fade-in-${index}`]}>
            <Image src={d.imageSource} alt={`image of ${d.text}`}{...s.image}/>
            <div style={s.content}>
              {d.text}
            </div>
          </div>
        ))}
      </div>}
        <GWButton text={props.buttonText} onClick={props.onClick} size={isMobile ? 'm': 'l'}/>
    </div>
  );
}
