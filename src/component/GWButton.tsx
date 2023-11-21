import { color } from "@/app/theme";
import { CSSProperties } from "react";

export interface GWButtonProps {
  text: string;
  onClick: () => void;
  style?: CSSProperties;
  size?: "l"|"m";
}

export default function GWButton(props: GWButtonProps) {
  return (
    <div
      style={{
        ...props.style,
        backgroundColor: color.header,
        // minHeight: 55,
        height: props.size === "l" ? 40 : 31,
        width: props.size === "l" ? 182 : props.size === "m"  ? 141 :126,
        fontSize: props.size === "l" ? 16 : props.size === "m" ? 13 : 14,
        fontWeight: 400,
        lineHeight: 1.4,
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        // border: 'none',
        cursor: "pointer",
        borderRadius: props.size === "m" ? 3 : 5,
      }}
      onClick={props.onClick}
    >
      {props.text}
    </div>
  );
}
