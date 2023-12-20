"use client";

import { color } from "@/app/theme";
import Image, { StaticImageData } from "next/image";
import GWButton from "./GWButton";
import { useWindowSize } from "./hooks/useWindowSize";

interface Partners {
  image: string | StaticImageData;
  imageAlt?: string;
  text: string;
  buttonText: string;
  onPress: () => void;
}

export interface GWOurPartnerProps {
  backgroundColor?: string;
  title: string;
  partners: Partners[];
}

export function GWOurPartner(props: GWOurPartnerProps) {
  const { backgroundColor, title, partners } = props;
  const {isMobile} = useWindowSize()
  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: isMobile ? "column" : "row",
      }}
    >
      <div style={{ width: isMobile ? "100vw" : 1032 }}>
        <div
          style={{
            color: "#000",
            textAlign: "center",
            fontSize: isMobile ? 22 : 35,
            fontWeight: 600,
            marginBottom: isMobile ? 22 : 39,
          }}
        >
          {title}
        </div>
        <div>
          {partners.map((p, index) => (
            <div
              key={`partners_${index}`}
              style={{
                display: "flex",
                marginBottom: 39,
                flexDirection: isMobile ? "column" : "row",
              }}
            >
              <div
                style={{
                  width: isMobile ? "100vw" : 435,
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                  flexDirection: isMobile ? "column" : "row",
                }}
              >
                <Image
                  src={p.image}
                  alt={p.imageAlt ?? ""}
                  height={isMobile ? 86 : undefined}
                  // width={isMobile ? 186 : undefined}
                />
              </div>
              <div
                style={{
                  display:isMobile ?  "flex" : undefined,
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: 'column',
                  marginTop: isMobile ? 23 : undefined,
                }}
              >
                <div
                  style={{
                    width: isMobile ? 318 : 597,
                    fontSize: isMobile ? 13 : 16,
                    fontWeight: 400,
                    lineHeight: 1.4,
                    marginBottom: 28,
                    textAlign: isMobile ? "center" : undefined,
                  }}
                >
                  {p.text}
                </div>
                <GWButton text={p.buttonText} onClick={p.onPress} size="l" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
