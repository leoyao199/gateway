import GWEventContent from "@/component/GWEventContent";
import nodeFetch from "@/nodeFetch";

async function  getEvent (id:number){
  const res = await nodeFetch(`${process.env.BASE_URL}/api/events/${id}?populate=coverImage`)
  return res.json()
}

export default async function EventPage({params}:{params: {lng:string, eventId: number}}){
  const {lng, eventId} = params
  const eventRes =  await getEvent(eventId)
  const eventData = eventRes.data
  return (
    <GWEventContent lng={lng} event={eventData}/>
  )
}

