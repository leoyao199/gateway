'use client'
import { useState } from "react";
import { useWindowSize } from "./hooks/useWindowSize";
import { globalVariable } from "@/app/global";

export default function GWTag(props:{label: string, onClick:()=>void, isSelected?: boolean}){
  const {label, onClick, isSelected} = props
  return (
    <div
      onClick={onClick}
      style={{ background: isSelected ? "#FF772A" : undefined, borderRadius: 5, width: "100%", borderWidth: isSelected ? 0 : 1, borderStyle:'solid' }}
    >
      <div
        style={{
          fontWeight: 400,
          fontSize: 16,
          lineHeight: 1.4,
          cursor: "default",
          padding: '9px 19px',
        }}
      >
        {label}
      </div>
    </div>
  );
} 