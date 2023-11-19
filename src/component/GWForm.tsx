import Image, { StaticImageData } from "next/image";
import { useWindowSize } from "./hooks/useWindowSize";
import { useEffect, useMemo, useState } from "react";
import { globalVariable } from "@/app/global";
import { useTranslation } from "@/app/i18n/client";
import nodeFetch from "@/nodeFetch";

export interface GWFormProps {
  imageSource: StaticImageData;
  maxWidth?: number;
  buttonText: string;
  lng: string;
  leftText: string;
}

export default function GWForm(props: GWFormProps) {
  const { innerHeight, innerWidth } = useWindowSize();
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
    const fontSize = 16;
    const fontWeight = 400;
    const lineHeight = 1.08;
    const color = "#000";
    const width = 510;

    if (type === "checkbox") {
      return (
        <div
          key={key}
          style={{
            width,
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
          <div style={{ marginLeft: 5, color }}>{label}</div>
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
          width: "49%",
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
          width: 1032,
          background: "#FF772A",
          borderRadius: 23,
          height: 368,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            color: `#000`,
            fontSize: 35,
            fontWeight: 600,
            marginLeft: 58,
            marginRight: 103,
            width: 274,
            marginTop: 32,
            lineHeight: 1.4,
            alignSelf: 'flex-start'
          }}
        >
          {props.leftText}
        </div>
        <div
          style={{
            width: 510,
            marginRight: 87,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
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
              alignSelf: "flex-start",
              background: "white",
              borderRadius: 5,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: 16,
              fontWeight: 400,
              lineHeight: 1.4,
            }}
            onClick={sendRequest}
          >
            {t("Send")}
          </div>
        </div>
        {/* <div
          style={{
            paddingRight: !isPad ? 200 : undefined,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: !isPad ? undefined : "50px 0",
          }}
        >
          <div
            style={{
              backgroundColor: color,
              width: !isPad ? "100%" : "100vw",
              display: !isPad ? undefined : "flex",
              alignItems: "center",
              flexDirection: "column",
              paddingBottom: !isPad ? undefined : 20,
            }}
          >
            <div style={{ fontSize: 40, marginBottom: 50, marginTop: 30 }}>
              {props.buttonText}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                width:
                  innerWidth > globalVariable.largeScreenWidth
                    ? "100%"
                    : !isPad
                    ? 500
                    : "90vw",
                justifyContent: "space-between",
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
              <div style={{ display: "flex", justifyContent: "center" }}>
                <GWButton text={t("Contact Us")} onClick={sendRequest} />
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
