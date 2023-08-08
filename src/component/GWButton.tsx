import { color } from "@/app/theme"

export interface GWButtonProps {
  text: string, 
  onClick: ()=>void
}

export default function GWButton (props:GWButtonProps){
  return (
    <div
      style={{
        backgroundColor: color.header,
        minHeight: 55,
        height: 55,
        width: 200,
        fontSize: 16,
        fontWeight: 700,
        alignItems: 'center',
        justifyContent: 'center',
        display:'flex',
        border: 'none'
      }}
        onClick={props.onClick}
      >
      {props.text}
    </div>
  );
}