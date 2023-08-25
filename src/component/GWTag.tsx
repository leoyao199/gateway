'use client'
import { useState } from "react";
import { useWindowSize } from "./hooks/useWindowSize";
import { globalVariable } from "@/app/global";

export default function GWTag(props:{label: string, onClick:()=>void, isSelected?: boolean}){
  const {label, onClick, isSelected} = props
  const [color, setColor] = useState('black')
  const {innerWidth} = useWindowSize()
  return (
    <div
      onClick={onClick}
      style={{ background: "white", border: "none", width: "100%" }}
      onMouseEnter={() => setColor("blue")}
      onMouseLeave={() => setColor( "black")}
    >
      <div
        style={{
          color: color,
          fontWeight: 200,
          fontSize:
            innerWidth > globalVariable.middleLargeScreenWidth ? 18 : 16,
          cursor: "default",
        }}
      >
        {label}
      </div>
    </div>
  );
} 