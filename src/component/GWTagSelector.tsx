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
  const {innerWidth} = useWindowSize()
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "90vw",
        maxWidth: 1200,
        flexWrap: "wrap",
        justifyContent:  innerWidth > globalVariable.middleLargeScreenWidth ? 'flex-start' : 'flex-start'
      }}
    >
      {allTag.map((tag, index) => (
        <div
          key={`gw tag ${index}`}
          style={{
            marginRight:
              innerWidth > globalVariable.middleLargeScreenWidth ? 30 : 14,
            marginBottom: 
            innerWidth > globalVariable.middleLargeScreenWidth ? 10 : 5,
          }}
        >
          <GWTag label={tag.label} onClick={tag.onClick} isSelected={selectedTag === tag.label}/>
        </div>
      ))}
    </div>
  );
}