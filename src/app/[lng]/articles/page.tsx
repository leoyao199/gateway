import GWArticleListContent from "@/component/GWArticleListContent";

// async function getEventData (){
//   const res = await nodeFetch(process.env.BASE_URL+"/api/events?populate=coverImage")

//   return res.json()
// }
export default async function ArticlesListPage({params}:{params: {lng:string}}){
  const {lng} = params
  // const eventDataRes = await getEventData()
  // const eventData = eventDataRes.data
  return (
    <GWArticleListContent lng={lng} />
  )
}