import Image, { StaticImageData } from "next/image";
import { useWindowSize } from "./hooks/useWindowSize";
import { useEffect, useMemo, useState } from "react";
import { globalVariable } from "@/app/global";
import { useTranslation } from "@/app/i18n/client";
import nodeFetch from "@/nodeFetch";

export interface GWFormProps {
  buttonText: string;
  lng: string;
  leftText: string;
}

export default function GWForm(props: GWFormProps) {
  const { innerHeight, innerWidth , isMobile} = useWindowSize();
  const isPad = innerWidth < globalVariable.middleLargeScreenWidth;
  const { t } = useTranslation(props.lng);
  const color = useMemo(() => {
    return isPad ? "rgba(255, 255, 255, 0.75)" : "white";
  }, [innerWidth]);

  const [result, setResult] = useState({});

  const questionnaire = [
    { label: t("First Name"), column: "first name" },
    { label: t("Last Name"), column: "last name" },
    { label: t("Country Code"), column: "country code" },
    { label: t("Phone"), column: "phone" },
    { label: t("Email"), column: "email", type: "long" },
    { label: t("Message"), column: "message", type: "textArea" },
    {
      label: t("I want to subscribe to the newsletter"),
      column: "I want to subscribe to the newsletter",
      type: "checkbox",
    },
  ];

  const questionFactory = (
    label: string,
    column: string,
    key: string,
    type?: string
  ) => {
    const fontSize = isMobile ? 13 : 16;
    const fontWeight =  400;
    const lineHeight = isMobile ? 1.4 :1.08;
    const color = "#000";
    const width = isMobile ? 249 : 510;

    if (type === "checkbox") {
      return (
        <div
          key={key}
          style={{
            display: "flex",
            marginBottom: 10,
          }}
        >
          <input
            type="checkbox"
            style={{
              fontSize,
              fontWeight,
              lineHeight,
              color,
              border: "none",
              outline: "none",
              boxShadow: "none",
              borderRadius: 2,
            }}
            onChange={(e) => {
              setResult({ ...result, [column]: e.target.checked });
            }}
          />
          <div style={{ marginLeft: 5, color , fontSize}}>{label}</div>
        </div>
      );
    }
    if (type === "long") {
      return (
        <div
          key={key}
          style={{
            width,
            marginBottom: 10,
            borderBottom: "1px solid #000",
          }}
        >
          <input
            type="text"
            style={{
              width: "100%",
              backgroundColor: "rgb(255,255,255, 0)",
              border: "none",
              outline: "none",
              boxShadow: "none",
              fontSize,
              fontWeight,
              lineHeight,
              color,
              height: 36,
            }}
            placeholder={label}
            onChange={(e) => setResult({ ...result, [column]: e.target.value })}
          />
        </div>
      );
    }
    if (type === "textArea") {
      return (
        <div
          key={key}
          style={{
            borderBottom: "1px solid #000",
            marginBottom: 17,
            width,
            fontSize,
          }}
        >
          <div>{label}</div>
          <textarea
            style={{
              width: "100%",
              backgroundColor: "rgb(255,255,255, 0)",
              border: "none",
              outline: "none",
              boxShadow: "none",
              fontSize,
              fontWeight,
              lineHeight,
              color,
              resize: "none",
              minHeight: 55,
            }}
            onChange={(e) => setResult({ ...result, [column]: e.target.value })}
          />
        </div>
      );
    }
    return (
      <div
        key={key}
        style={{
          borderBottom: "1px solid #000",
          marginBottom: 7,
          width: isMobile ? '100%' : "49%",
        }}
      >
        <input
          type="text"
          style={{
            fontSize,
            fontWeight,
            lineHeight,
            color,
            width: "100%",
            backgroundColor: "rgb(255,255,255, 0)",
            border: "none",
            outline: "none",
            boxShadow: "none",
            height: 37,
          }}
          placeholder={label}
          onChange={(e) => setResult({ ...result, [column]: e.target.value })}
        />
      </div>
    );
  };

  const sendRequest = () => {
    nodeFetch(
      `${process.env.BASE_URL}/api/email`,
      undefined,
      undefined,
      JSON.stringify(result),
      "POST"
    ).then((res) =>
      alert(
        res.status == 200
          ? "Thanks for your subscribe"
          : "Please try again later"
      )
    );
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "center", maxWidth: "100vw" }}
    >
      <div
        style={{
          width: isMobile ? 319 : 1032,
          background: "#FF772A",
          borderRadius: 23,
          height: isMobile ?  571 :368,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: isMobile ? 'column' : 'row'
        }}
      >
        <div
          style={{
            color: `#000`,
            fontSize: isMobile ? 22 : 35,
            fontWeight: 600,
            marginLeft: isMobile? undefined: 58,
            marginRight:isMobile? undefined:  103,
            width: isMobile ? 172: 274,
            marginTop: isMobile ? undefined:32,
            lineHeight: 1.4,
            alignSelf: isMobile ? undefined : 'flex-start',
            marginBottom: isMobile ? 30 : undefined
          }}
        >
          {props.leftText}
        </div>
        <div
          style={{
            width: isMobile ? 249 : 510,
            marginRight: isMobile ? undefined : 87,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: isMobile ? 'center' : "space-between",
            flexDirection: isMobile ?'column' : 'row'
          }}
        >
          {questionnaire.map((data, index) =>
            questionFactory(
              data.label,
              data.column,
              `question_${index}`,
              data.type
            )
          )}
          <div
            style={{
              width: 107,
              height: 40,
              alignSelf: isMobile ? 'center' :"flex-start",
              background: "white",
              borderRadius: 5,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: 16,
              fontWeight: 400,
              lineHeight: 1.4,
              marginTop : isMobile ? 20 : undefined,
            }}
            onClick={sendRequest}
          >
            {t("Send")}
          </div>
        </div>
      </div>
    </div>
  );
}
