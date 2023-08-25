import GWArticleContent from "@/component/ArticleContent"

export default function ArticlesPage ({params}:{params: {lng:'en'|'vn', id:number}}){
  const {id, lng} = params
  return (
    <GWArticleContent lng={lng} id={id}/>
  )
}