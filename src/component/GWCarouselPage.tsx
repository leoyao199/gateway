import Image from "next/image";
import { CSSProperties, useMemo } from "react"
import GWButton from "./GWButton";
import { useTranslation } from "@/app/i18n/client";
import { useWindowSize } from "./hooks/useWindowSize";

class _style {
  m:boolean
  constructor(isMobile:boolean){
    this.m = isMobile
  }
  height =  591
  mobileImageHeight = 285
  createStyleSheet (){
    return {
      bg: {
        position: "relative",
        width: this.m ? "100vw" : 1032,
        height: this.m ? undefined : this.height,
        display: this.m ? "flex" : undefined,
        justifyContent: this.m && "flex-end",
        alignItems: this.m && "center",
        flexDirection: this.m && "column-reverse",
      } as CSSProperties,

      image: {
        height: this.m ? this.mobileImageHeight : this.height,
        width: 1032,
        style: {
          position: this.m ? undefined : "absolute",
          right: 0,
          width: this.m ? "100vw" : 778,
          objectFit: "cover",
        } as CSSProperties,
      },

      whitePage: {
        height: this.m ? 318 : 436,
        width: this.m ? "100vw" : 408,
        display: "flex",
        justifyContent: this.m && "center",
        alignItems: "center",
        background: "white",
        flexDirection: "column",
        position: this.m ? undefined : "absolute",
        zIndex: 1,
        top: this.m ? this.mobileImageHeight : (this.height - 408) / 2,
      } as CSSProperties,

      title: {
        width: this.m ? 214 : 335,
        marginTop: this.m ? undefined : 57,
        marginBottom: this.m ? 19 : 24,
        height: this.m ? 54 : 84,
        fontWeight: 600,
        fontSize: this.m ? 22 : 35,
        lineHeight: this.m ? undefined : 1.2,
        textAlign: "center",
      } as CSSProperties,

      content: {
        width: this.m ? 314 : 338,
        height: this.m ? 108 : 132,
        fontSize: this.m ? 13 : 16,
        fontWeight: 400,
        lineHeight: 1.375,
        textAlign: "center",
        marginBottom: this.m ? 19 : 26,
      } as CSSProperties,

      divider: {
        height: 0.5,
        width: 379,
        background: "#FFF",
      },

      coverTitle: {
        fontSize: 35,
        fontWidth: "600",
        textAlign: "right",
        lineHeight: 1.2,
        marginBottom: 4,
        maxWidth: 379,
        color: "white",
      } as CSSProperties,

      coverBg: {
        bottom: 38,
        right: 53,
        position: "absolute",
      } as CSSProperties,
    };
  }
}



export default function GWCarouselPage(props: GWCarouselPageProps){
  const {imageUrl , content, } = props
  const {t} = useTranslation()
  const {isMobile} = useWindowSize()

  const _s = useMemo(()=>{
    const styleSheet =  new _style(isMobile).createStyleSheet()
    return styleSheet
  },[isMobile,])
  
  // if (!content ){
  //   return (
  //   <div style={_s.bg}>
  //     <Image src={imageUrl} alt={''} width={isMobile ? 375 : 1032} height={isMobile ? 285 : 591} style={{objectFit:'cover', width: isMobile ? '100vw' : 1032}}/>
  //   </div>
  //   )
  // }
  return (
    <div style={_s.bg}>
      <div style={_s.whitePage}>
        <div style={_s.title}>{content.title}</div>
        <div style={_s.content}>{content.content}</div>
        <GWButton text={t("Contact Us")} onClick={() => {}} size={isMobile ? "l": undefined}/>
      </div>
      <Image src={imageUrl} alt={""} {..._s.image}/>
      {/* <div style={_s.coverBg}>
        <div style={_s.coverTitle}>{coverText.title}</div>
        <div style={_s.divider}></div>
        <div style={_s.coverTitle}>{coverText.subtitle}</div>
      </div> */}
    </div>
  );
} 

export interface GWCarouselPageProps{
  imageUrl: string,
  content: {
    title: string, 
    content: string
  }
  // coverText?: {
  //   title: string,
  //   subtitle: string,
  // }
}

