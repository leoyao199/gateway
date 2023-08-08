import { useTranslation } from "@/app/i18n/client"
import { GWFooterBase } from "./GWFooterBase"

export const GWFooter =  ({dictionary, lng}:{dictionary:Record<string,string>, lng:string}) => {
  return <GWFooterBase dictionary={dictionary} lng={lng}/>
}