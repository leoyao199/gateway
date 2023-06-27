import { CSSProperties, useMemo } from "react";
import { useWindowSize } from "./hooks/useWindowSize";
import { globalVariable } from "@/app/global";
import GWStaffDirectoryCard, { GWStaffDirectoryCardProps } from "./GWStaffDirectoryCard";

export interface StaffDirectoryProps{
  data:GWStaffDirectoryCardProps[],
  backgroundColor: string,
  title: string,
  titleStyle?: CSSProperties
}

export default function GWStaffDirectory(props:StaffDirectoryProps){
  const {innerWidth, innerHeight} = useWindowSize();
  const cardSize = 300;
  const containerSizer = useMemo(() => {
    if (innerWidth > globalVariable.largeScreenWidth) {
      return (innerWidth - 1440 + 200) / 2;
    } else if (innerWidth > globalVariable.middleLargeScreenWidth) {
      return 50;
    } else {
      return (innerWidth - cardSize) / 2;
    }
  }, [innerWidth]);
  const height = useMemo(() => {
    const miniHeight = 620
    if (innerWidth > globalVariable.largeScreenWidth) {
      return 760;
    } else if (innerWidth > globalVariable.middleLargeScreenWidth) {
      return miniHeight + (innerWidth - globalVariable.middleScreenWidth) * 0.2;
      // } else if ((innerWidth - 200) / 1.5 < miniHeight) {
      // return miniHeight;
    } else {
      return '100%';
    }
  }, [innerWidth]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        height: height,
        backgroundColor: props.backgroundColor,
        padding: '76px 0 76px 0',
      }}>
      <div
        style={{
          width: '100%',
          paddingRight: containerSizer,
          paddingLeft: containerSizer,
        }}>
        <p style={{fontSize: 46, paddingBottom: 30, ...props.titleStyle}}>
          {props.title}
        </p>
        <div
          style={{
            display: 'flex',
            flexDirection:
              innerWidth > globalVariable.middleLargeScreenWidth ? 'row' : 'column',
            justifyContent: 'space-around',
            alignItems:'center'
          }}>
          {props.data.map((props,index) => (
            <GWStaffDirectoryCard
              key={`GWStaffDirectoryCard_${index}`}
              containerSizer={containerSizer}
              imageSource={props.imageSource}
              title={props.title}
              name={props.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}