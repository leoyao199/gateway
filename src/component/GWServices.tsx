'use client'
import { useEffect, useMemo, useRef, useState } from "react";
import { useWindowSize } from "./hooks/useWindowSize";
import { globalVariable } from "@/app/global";
import GWServiceCard, { GWServiceCardProps } from "./GWServiceCard";
import styles from "../style/landing.module.css"

export interface GWServices {
  data: GWServiceCardProps[];
  title: string;
  backgroundColor: string;
  width?: number | string;
}

export default function GWServices(props: GWServices) {
  const { innerWidth, innerHeight, isMobile } = useWindowSize();
  const divRef = useRef<HTMLDivElement>(null)
  const [show, setShow]=useState(false)
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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: props.backgroundColor,
      }}
      ref={divRef}
    >
      <div
        style={{
          width: isMobile ? "100vw" : 1032,
        }}
      >
        <div
          style={{
            paddingBottom: 36,
            color: "#000",
            textAlign: "center",
            fontSize: isMobile ? 22 : 35,
            fontWeight: 600,
          }}
        >
          {props.title}
        </div>
        {show && <div
          style={{
            display: "flex",
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: isMobile ? "center" : undefined,
          }}
        >
          {props.data.map((props, index) => (
            <div style={{ flexBasis: "33.33%" }} key={`GWServiceCard_in_GWServices_${index}`} className={styles[`scale-up-center-${index}`]}>
              <GWServiceCard
                imageSource={props.imageSource}
                title={props.title}
                content={props.content}
              />
            </div>
          ))}
        </div>}
      </div>
    </div>
  );
}
