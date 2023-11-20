"use client";

import { color } from "@/app/theme";
import Image, { StaticImageData } from "next/image";
import GWButton from "./GWButton";

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
  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ width: 1032 }}>
        <div
          style={{
            color: "#000",
            textAlign: "center",
            fontSize: 35,
            fontWeight: 600,
            marginBottom: 39,
          }}
        >
          {title}
        </div>

        <div>
          {partners.map((p) => (
            <div style={{ display: "flex", marginBottom: 39 }}>
              <div
                style={{
                  width: 435,
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <Image src={p.image} alt={p.imageAlt ?? ""} />
              </div>
              <div>
                <div
                  style={{
                    width: 597,
                    fontSize: 16,
                    fontWeight: 400,
                    lineHeight: 1.4,
                    marginBottom: 28,
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
