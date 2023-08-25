import { getDictionary } from "@/app/i18n/get-dictionary";
import GWArticleListContent from "@/component/GWArticleListContent";

// async function getEventData (){
//   const res = await nodeFetch(process.env.BASE_URL+"/api/events?populate=coverImage")

//   return res.json()
// }
export default async function ArticlesListPage({params}:{params: {lng:'en'|'vn'}}){
  const {lng} = params
  const dictionary = await getDictionary(lng)
  return (
    <GWArticleListContent lng={lng} dictionary={dictionary}/>
  )
}