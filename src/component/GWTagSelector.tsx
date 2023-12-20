'use client'

import { globalVariable } from "@/app/global"
import GWTag from "./GWTag"
import { useWindowSize } from "./hooks/useWindowSize"
import { useMemo } from "react"

interface GWTag {
  label: string, 
  onClick: ()=>void
}

export default function GWTagSelector(props:{allTag:GWTag[], selectedTag: string }){
  const {allTag, selectedTag} = props
  const {isMobile} = useWindowSize()
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width:isMobile ? 319 : 746,
        flexWrap: "wrap",
      }}
    >
      {allTag.map((tag, index) => (
        <div
          key={`gw tag ${index}`}
          style={{
            marginRight: 14,
            marginBottom: 14,
          }}
        >
          <GWTag label={tag.label} onClick={tag.onClick} isSelected={selectedTag === tag.label}/>
        </div>
      ))}
    </div>
  );
}