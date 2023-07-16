import GWEventListContent from "@/component/GWEventListContent";
import nodeFetch from "@/nodeFetch";

// async function getEventData (){
//   const res = await nodeFetch(process.env.BASE_URL+"/api/events?populate=coverImage")

//   return res.json()
// }
export default async function EventListPage({params}:{params: {lng:string}}){
  const {lng} = params
  // const eventDataRes = await getEventData()
  // const eventData = eventDataRes.data
  return (
    <GWEventListContent lng={lng} />
  )
}