import Image, { StaticImageData } from "next/image";
import { CSSProperties, useEffect } from "react";

class staticStyle {
  constructor() {}

  createStyle() {
    return {
      bg: {
        position: "fixed",
        background: "#FF772A",
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      } as CSSProperties,
      flexBox: {
        display: "flex",
        alignContent: "center",
        flexDirection: "column",
      } as CSSProperties,
      textBox: {
        color: "#000",
        textAlign: "center",
        alignItems:'center',
        display:'flex',
        justifyContent:'center',
        fontSize: 22,
        fontWeight: 600,
        lineHeight: 1.45,
        height: 32,
        marginBottom: 21,
        width:'100%'
      } as CSSProperties,
    }
  }
}

const s = new staticStyle().createStyle();

export default function GWHemBurgerMenu(props: {
  data: {
    text: string;
    onClick: () => void;
    paddingBottom?: number;
    icon?: StaticImageData;
  }[];
  visible: boolean;
}) {

  return (
    <div style={{ ...s.bg, display: props.visible ? "flex" : "none" }}>
      <div style={s.flexBox}>
        {props.data.map((d, index) => (
          <div
            key={`hamBurgerMenu_button_${index}`}
            style={{ ...s.textBox, paddingBottom: d.paddingBottom, fontSize: d.icon ? 16 : 22 }}
            onClick={d.onClick}
          >
            {d.icon && (
              <Image
                src={d.icon}
                alt={"change language to " + d.text}
                style={{
                  width: 30,
                  height: 30,
                  marginRight: 7,
                }}
              />
            )}
            <div>{d.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
