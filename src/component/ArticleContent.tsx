'use client'
import GWHeader from "@/component/GWHeaderContent";
import { IArticleRes, IEventRes } from "@/interface";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation"
import formImage from '../../public/formImage.jpg';
import { useEffect, useMemo, useState } from "react";
import { useWindowSize } from "./hooks/useWindowSize";
import { globalVariable } from "@/app/global";
import { useTranslation } from "@/app/i18n/client";
import nodeFetch from "@/nodeFetch";

async function GetArticle (id:number){
  const res = await nodeFetch(
    `${process.env.BASE_URL}/api/articles/${id}?populate=coverImage`
  ); 
  const result =  await res.json()
  return result
}

export default function GWArticleContent(props:{lng:string, id:number}){
  const {lng, id} = props
  const {innerHeight, innerWidth} = useWindowSize()
  const [article, setArticle] = useState<IArticleRes>()
  useEffect(()=>{
    const article = GetArticle(id)
    article.then((res)=>{
      console.log(res)
      setArticle(res.data);})
  },[])
  // const {t} = useTranslation(lng)
  // const router = useRouter()

  const imageWidth = useMemo(()=>{
    let width = 0
    if (innerWidth >= 1200 ){
      width =  1200
    } else {
      width = innerWidth
    }
    return width
  },[innerWidth])

  const ArticleTranslate = (lng:string, articleRes: IArticleRes) => {
    const IArticle = articleRes.attributes
    switch (lng){
      case 'vn':
        return {
          ...IArticle,
          title: IArticle.vn_title,
          content: IArticle.vn_content,
          date: IArticle.date
        }
      default :
        return IArticle
    }
  }
  if (!article)return <></>
  const translateArticle = ArticleTranslate(lng, article)

  return (
    <div style={{width:'100vw'}}>
    <div style={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', maxWidth: '100vw',}}>
      <div style={{marginTop:90, maxWidth: '100vw',  display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
        <div style={{fontSize: 24, fontWeight: 200, display:'flex', justifyContent:'center'}}>{translateArticle.author} | {translateArticle.date}</div>
        <div style={{fontSize: innerWidth > globalVariable.smallScreenWidth ? 72 : 36, fontWeight: '500', display:'flex', justifyContent:'center', lineHeight: 1.4, maxWidth: 1080, textAlign:'center'}}>{translateArticle.title}</div>
        <Image src={translateArticle.coverImage.data.attributes.url} alt={""} width={imageWidth} height={imageWidth * 0.5625} style={{marginTop:80, objectFit:'cover', maxWidth: '100vw'}}/>
        <div style={{width: 1080,  marginBottom: 200, maxWidth: '100vw', display:'flex', justifyContent:'center', alignItems:'center', marginTop: 50}}>
          <div style={{width: '80%'}}>
          <div dangerouslySetInnerHTML={{__html:translateArticle.content}} style={{lineHeight: 2}}></div>

          </div>
        </div>
        {/* <GWForm imageSource={formImage} maxWidth={1200}/> */}
      </div>
    </div>
    </div>
  )
}

