import { getDictionary } from "@/app/i18n/get-dictionary";
import GWEventListContent from "@/component/GWEventListContent";

export default async function EventListPage({params}:{params: {lng:string}}){
  const {lng} = params
  const dictionary = await getDictionary(lng === 'vn' ? 'vn': 'en')
  return (
    <div>
      <GWEventListContent lng={lng} dictionary={dictionary} />
    </div>
  )
}