"use client";

import { color } from "@/app/theme";
import Image, { StaticImageData } from "next/image";

interface Partners {
  image: string | StaticImageData;
  imageAlt?: string;
  text: string;
}

export interface GWOurPartnerProps {
  backgroundColor?: string;
  title: string;
  partners: Partners[];
}

export function GWOurPartner(props: GWOurPartnerProps) {
  const { backgroundColor, title, partners } = props;
  const partnersDivFactory = (partners: Partners[]) => {
    return partners.map((p, index) => (
      <div style={{ width: "45%",              fontWeight: 200, }} key={`partners_${index}`}>
        <Image src={p.image} alt={p.imageAlt ?? ""} height={180} width={180} />
        <div
          style={{
            backgroundColor: color.header,
            width: 350,
            height: 1,
            marginTop: 30,
            fontWeight: 200,
          }}
        ></div>
        <div
          style={{
            color: "white",
            lineHeight: 1.8,
            fontSize: 18,
            paddingTop: 30,
            fontWeight: 200,
          }}
        >
          {p.text}
        </div>
      </div>
    ));
  };
  return (
    <div
      style={{
        width: "100vw",
        backgroundColor: backgroundColor ?? "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ padding: "80px 50px", maxWidth: 1440 }}>
        <div
          style={{
            color: "white",
            fontSize: 62,
            fontWeight: 200,
            fontFamily: "serif",
          }}
        >
          {" "}
          {title}
        </div>
        <div
          style={{
            marginTop: 50,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          {partnersDivFactory(partners)}
        </div>
      </div>
    </div>
  );
}
