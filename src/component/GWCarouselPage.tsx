import Image from "next/image";
import { CSSProperties, useMemo } from "react"
import GWButton from "./GWButton";
import { useTranslation } from "@/app/i18n/client";
import { useWindowSize } from "./hooks/useWindowSize";
import { GwLanguage } from "@/interface";

class _style {
  m:boolean
  imageWidth:number
  height: number
  constructor(isMobile:boolean, imageWidth: number){
    this.m = isMobile
    this.imageWidth = imageWidth
    this.height = (this.imageWidth)*1773/2344
  }
  // height =  "calc((100vw - 1032)*591/1032)"
  mobileImageHeight = 285
  createStyleSheet (){
    return {
      bg: {
        position: "relative",
        width: this.m ? "100vw" : this.imageWidth,
        height: this.m ? undefined : this.height,
        display: 'flex',
        justifyContent: this.m ? "flex-end" : 'center',
        alignItems: "center",
        flexDirection: this.m && "column-reverse",
        // maxHeight: 1000,
      } as CSSProperties,

      image: {
        height: this.m ? this.mobileImageHeight : this.height,
        width: this.imageWidth,
        style: {
          alignSelf: "flex-start",
          justifySelf: "flex-start",
          position: this.m ? undefined : "absolute",
          right: 0,
          width: "100vw",
          objectFit: "cover",
          // height:'100%',

          bottom:0
        } as CSSProperties,
        
      },

      whitePageContainer:{
        position:'relative',
        maxWidth: 1440,
        width:'100%',
        height:'100%'
      } as CSSProperties,

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
        top: this.m ? this.mobileImageHeight : (this.height - 436) / 2,
        left: 0
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
  const {imageUrl , content,lng } = props
  const {t} = useTranslation(lng)
  const {isMobile, innerWidth} = useWindowSize()

  const _s = useMemo(()=>{
    const styleSheet =  new _style(isMobile, innerWidth).createStyleSheet()
    return styleSheet
  },[isMobile,innerWidth])
  
  // if (!content ){
  //   return (
  //   <div style={_s.bg}>
  //     <Image src={imageUrl} alt={''} width={isMobile ? 375 : 1032} height={isMobile ? 285 : 591} style={{objectFit:'cover', width: isMobile ? '100vw' : 1032}}/>
  //   </div>
  //   )
  // }
  return (
    <div style={_s.bg}>
      <div style={_s.whitePageContainer}>

      <div style={_s.whitePage}>
        <div style={_s.title}>{content.title}</div>
        <div style={_s.content}>{content.content}</div>
        <GWButton text={t("Contact Us")} onClick={() => {}} size={isMobile ? "l": undefined}/>
      </div>
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
  lng: GwLanguage
  content: {
    title: string, 
    content: string
  }
  // coverText?: {
  //   title: string,
  //   subtitle: string,
  // }
}

