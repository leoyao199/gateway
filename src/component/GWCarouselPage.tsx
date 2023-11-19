import Image from "next/image";
import { CSSProperties } from "react"
import GWButton from "./GWButton";
import { useTranslation } from "@/app/i18n/client";

class _style {
  height =  591

  bg = {
    position: 'relative',
    width: 1032,
    height: this.height,
  } as CSSProperties

  image = {
    height: this.height,
    width: 778,
    style: {
      position: 'absolute',
      right: 0,
    } as CSSProperties
  } 

  imageTextBox = {
    // fontFamily: "",
    display:'flex'
  } as CSSProperties

  whitePage = {
    height: 436,
    width: 408,
    display: "flex",
    // justifyContent: "space-between",
    alignItems: "center",
    background:'white',
    flexDirection:'column',
    position:'absolute',
    zIndex: 1,
    top: (this.height - 408)/2,

  } as CSSProperties;

  title = {
    marginTop: 57,
    marginBottom: 24,
    // ...this.text,
    height: 84,
    width: 335,
    fontWeight: "600",
    fontSize: 35,
    lineHeight: 1.2,
    textAlign:'center',
    
  } as CSSProperties;

  content = {
    // ...this.text,
    width: 338,
    height: 132,
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 1.375,
    textAlign: "center",
    marginBottom: 26
  } as CSSProperties;

  divider = {
    height: 0.5,
    width: 379,
    background: "#FFF",
  }

  coverTitle = {
    fontSize: 35,
    fontWidth: '600',
    textAlign: 'right',
    lineHeight: 1.2,
    marginBottom: 4,
    maxWidth: 379,
    color:'white'
  } as CSSProperties

  coverBg = {
    bottom:38,
    right: 53,
    position:'absolute',
  } as CSSProperties
}

const _s = new _style()


export default function GWCarouselPage(props: GWCarouselPageProps){
  const {imageUrl , content, coverText} = props
  const {t} = useTranslation()
  return (
    <div style={_s.bg}>
      <div style={_s.whitePage}>
        <div style={_s.title}>{content.title}</div>
        <div style={_s.content}>{content.content}</div>
        <GWButton text={t("Contact Us")} onClick={() => {}} />
      </div>
      <Image src={imageUrl} alt={""} {..._s.image} />
      <div style={_s.coverBg}>
        <div style={_s.coverTitle}>{coverText.title}</div>
        <div style={_s.divider}></div>
        <div style={_s.coverTitle}>{coverText.subtitle}</div>
      </div>
    </div>
  );
} 

export interface GWCarouselPageProps{
  imageUrl: string,
  content: {
    title: string, 
    content: string
  }
  coverText: {
    title: string,
    subtitle: string,
  }
}

