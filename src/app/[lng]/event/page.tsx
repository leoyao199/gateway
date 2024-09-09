import { getDictionary } from "@/app/i18n/get-dictionary";
import GWEventListContent from "@/component/GWEventListContent";
import { GwLanguage } from "@/interface";

export default async function EventListPage({params}:{params: {lng:GwLanguage}}){
  const {lng} = params
  const dictionary = await getDictionary(lng)
  return (
    <div>
      <GWEventListContent lng={lng} dictionary={dictionary} />
    </div>
  )
}