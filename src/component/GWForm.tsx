import Image, { StaticImageData } from "next/image";
import { useWindowSize } from "./hooks/useWindowSize";
import { useEffect, useMemo, useState } from "react";
import { globalVariable } from "@/app/global";
import GWButton from "./GWButton";
import { useTranslation } from "@/app/i18n/client";
import nodeFetch from "@/nodeFetch";

export interface GWFormProps {
  imageSource: StaticImageData;
  maxWidth?: number;
  buttonText: string;
  lng: string;
}

export default function GWForm(props: GWFormProps) {
  const { innerHeight, innerWidth } = useWindowSize();
  const isPad = innerWidth <  globalVariable.middleLargeScreenWidth
  const {t} = useTranslation(props.lng)
  const color = useMemo(()=>{
    return isPad ? "rgba(255, 255, 255, 0.75)" : "white"
  },[innerWidth])

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
    const baseSize = 15;
    // return <GWFormInput label={label} field={column} key={key}/>
    if (type === "checkbox") {
      return (
        <div
          key={key}
          style={{
            marginBottom: 30,
            width: "100%",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <input
            type="checkbox"
            style={{
              height: 20,
              // width: "100%",
              backgroundColor: color,
              border: "none",
              outline: "none",
              boxShadow: "none",
              fontSize:
                // innerWidth > globalVariable.smallScreenWidth
                !isPad
                  ? 2 * baseSize
                  : baseSize,
              color: "#FFFFFF",
            }}
            onChange={(e) => {setResult({ ...result, [column]: e.target.checked })}}
          />
          <div style={{ marginLeft: 10 }}>{label}</div>
        </div>
      );
    }
    if (type === "long") {
      return (
        <div
          key={key}
          style={{
            borderBottom: "0.5px solid grey",
            marginBottom: 30,
            width: "100%",
          }}
        >
          <input
            type="text"
            style={{
              height:
                // innerWidth > globalVariable.smallScreenWidth
                !isPad
                  ? 4 * baseSize
                  : 2 * baseSize,
              width: "100%",
              backgroundColor: 'rgb(255,255,255, 0)',
              border: "none",
              outline: "none",
              boxShadow: "none",
              fontSize:
                !isPad
                  ? 2 * baseSize
                  : baseSize,
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
            borderBottom: "0.5px solid grey",
            marginBottom: 30,
            width: "100%",
          }}
        >
          <div
            style={{
              fontSize:
                !isPad
                  ? 2 * baseSize
                  : baseSize,
              color: "grey",
            }}
          >
            {label}
          </div>
          <textarea
            style={{
              height:
                !isPad
                  ? 8 * baseSize
                  : 4 * baseSize,
              width: "100%",
              backgroundColor: 'rgb(255,255,255, 0)',
              border: "none",
              outline: "none",
              boxShadow: "none",
              fontSize:
                !isPad
                  ? 2 * baseSize
                  : baseSize,
              resize: "none",
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
          borderBottom: "0.5px solid grey",
          marginBottom: 30,
          width: "45%",
        }}
      >
        <input
          type="text"
          style={{
            height:
              !isPad
                ? 4 * baseSize
                : 2 * baseSize,
            width: "100%",
            backgroundColor: 'rgb(255,255,255, 0)',
            border: "none",
            outline: "none",
            boxShadow: "none",
            fontSize:
              !isPad
                ? 2 * baseSize
                : baseSize,
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
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems:'center',
          flexDirection: "row",
          maxWidth: props.maxWidth,
        }}
      >
        <div
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
        </div>
        <Image
          src={props.imageSource}
          height={760}
          // width={innerWidth}
          alt={""}
          style={{
            width: "100vw",
            objectFit: "cover",
            maxWidth: !isPad ? "50%" : "100vw",
            position: !isPad ? undefined : "absolute",
            opacity: !isPad ? undefined : 0.75,
            zIndex: -1,
          }}
        />
      </div>
    </div>
  );
}
