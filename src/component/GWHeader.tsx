'use client'
import { color } from "@/app/theme";
import { useWindowSize } from "./hooks/useWindowSize";
import { globalVariable } from '@/app/global';

export interface GWHeaderProps {
  data : {text: string, onClick:()=>void}[]
}

export default function GWHeader(props:GWHeaderProps){
  const {innerWidth, innerHeight} = useWindowSize()
  const {data} = props
  
  const headerButton = (text:string, index:number,onClick:()=>void) => {
    return (
      <div
        onClick={()=>{onClick && onClick(); console.log(text)}}
        style={{fontWeight: 600, fontSize: isMobile ? 16 : 20, marginRight: 10, marginLeft: 10, }}
        key={`${text}_${index}`}>
        <p style={{fontSize:16}}>{text}</p>
      </div>
    );
  }

  const isMobile  = innerWidth <= globalVariable.middleScreenWidth 

  return (
    <div
      style={{
        backgroundColor: color.header,
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        maxWidth: innerWidth,
        justifyContent: 'flex-end',
      }}>
      <div
        style={{
          height: isMobile? 70 : 40,
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: isMobile ? 'center' : 'space-between',
          alignContent: isMobile ? 'space-between' : 'center',
          paddingRight: isMobile ? '10vw' : '5vw',
          paddingLeft: isMobile ? '10vw' : '5vw',
          paddingTop: 10,
          paddingBottom:10
        }}>
        {data.map((d, index) => headerButton(d.text, index, d.onClick))}
      </div>
    </div>
  );
}