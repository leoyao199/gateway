import Image, { StaticImageData } from "next/image";
import { useWindowSize } from "./hooks/useWindowSize";
import { useMemo, useState } from "react";
import { globalVariable } from "@/app/global";
import GWButton from "./GWButton";
import { useTranslation } from "@/app/i18n/client";

export interface GWFormProps {
  imageSource: StaticImageData;
  maxWidth?: number;
  buttonText: string
  // lng: string;
}

const color = "white";

export default function GWForm(props: GWFormProps) {
  const { innerHeight, innerWidth } = useWindowSize();
  // const { t } = useTranslation(props.lng);
  const imgHeight = useMemo(() => {
    if (innerWidth > globalVariable.smallScreenWidth) {
      return 640;
    } else {
      return innerWidth;
    }
  }, [innerWidth]);
  const [result, setResult] = useState({});

  const questionnaire = [
    { label: "First Name", column: "first name" },
    { label: "Last Name", column: "last name" },
    { label: "Country Code", column: "country code" },
    { label: "Phone", column: "phone" },
    { label: "Email", column: "email", type: "long" },
    { label: "Message", column: "message", type: "textArea" },
    {
      label: "I want to subscribe to the newsletter",
      column: "subscribe",
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
                innerWidth > globalVariable.smallScreenWidth
                  ? 2 * baseSize
                  : baseSize,
              color: "#FFFFFF",
            }}
            onChange={(e) => setResult({ ...result, [column]: e.target.value })}
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
                innerWidth > globalVariable.smallScreenWidth
                  ? 4 * baseSize
                  : 2 * baseSize,
              width: "100%",
              backgroundColor: color,
              border: "none",
              outline: "none",
              boxShadow: "none",
              fontSize:
                innerWidth > globalVariable.smallScreenWidth
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
                innerWidth > globalVariable.smallScreenWidth
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
                innerWidth > globalVariable.smallScreenWidth
                  ? 8 * baseSize
                  : 4 * baseSize,
              width: "100%",
              backgroundColor: color,
              border: "none",
              outline: "none",
              boxShadow: "none",
              fontSize:
                innerWidth > globalVariable.smallScreenWidth
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
              innerWidth > globalVariable.smallScreenWidth
                ? 4 * baseSize
                : 2 * baseSize,
            width: "100%",
            backgroundColor: color,
            border: "none",
            outline: "none",
            boxShadow: "none",
            fontSize:
              innerWidth > globalVariable.smallScreenWidth
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
    // const data =
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          width: "100%",
          // position: "relative",
          display: "flex",
          justifyContent: "center",
          flexDirection:
            innerWidth > globalVariable.largeScreenWidth ? "row" : "column",
          maxWidth: props.maxWidth,
        }}
      >
        <div
          style={{
            paddingRight:
              innerWidth > globalVariable.largeScreenWidth ? 200 : undefined,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: innerWidth > globalVariable.largeScreenWidth ? undefined :"50px 0"
          }}
        >
          <div
            style={{
              backgroundColor: color,
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
                width: innerWidth > globalVariable.largeScreenWidth ? "100%" : 500,
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
                <GWButton text={"Contact Us"} onClick={sendRequest} />
              </div>
            </div>
          </div>
        </div>
        <Image
          src={props.imageSource}
          height={760}
          width={innerWidth}
          alt={""}
          style={{
            objectFit: "cover",
            maxWidth: innerWidth > globalVariable.largeScreenWidth ? "50%" : "100vw",
          }}
        />
      </div>
    </div>
  );
}
