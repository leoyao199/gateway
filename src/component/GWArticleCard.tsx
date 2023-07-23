"use client";
import Image from "next/image";
import { useWindowSize } from "./hooks/useWindowSize";
import { useMemo } from "react";
import { globalVariable } from "@/app/global";
import GWButton from "./GWButton";

export interface GWEventCardProps {
  coverImage: string;
  title: string;
  description: string;
  onClick: () => void;
}

export default function GWArticleCard(props: GWEventCardProps) {
  return (
    <div
      style={{
        maxWidth: 1200,
        width: "100%",
        marginTop: 20,
        marginBottom: 20,
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Image
        src={props.coverImage}
        alt={""}
        width={600}
        height={500}
        style={{marginRight: 30 , objectFit:'cover'}}
      />
      <div style={{marginTop: 30}}>
        <div style={{fontSize: 36}}>{props.title}</div>
        <div style={{fontSize: 20, marginTop: 20, fontWeight: 300}}>{props.description}</div>
      </div>
    </div>
  );
}
