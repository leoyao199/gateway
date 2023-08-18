import { getDictionary } from "@/app/i18n/get-dictionary";
import GWEventListContent from "@/component/GWEventListContent";
import nodeFetch from "@/nodeFetch";

// async function getEventData (){
//   try{

//     const res = await nodeFetch(process.env.BASE_URL+"/api/events?populate=coverImage")
//     if(!res.ok){
//       throw new Error('Failed to fetch data')
//     }
//     console.log(res)
//     return res.json()
//   } catch (e){
//      console.log(e)
//   }
// }
export default async function EventListPage({params}:{params: {lng:string}}){
  const {lng} = params
  // const res = await getEventData()
  const dictionary = await getDictionary(lng === 'vn' ? 'vn': 'en')
  // const eventDataRes = await getEventData()
  // const eventData = eventDataRes.data
  return (
    <div>
      <GWEventListContent lng={lng} dictionary={dictionary} />
    </div>
  )
}