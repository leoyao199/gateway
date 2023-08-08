import { useTranslation } from "@/app/i18n/client"
import { GWFooterBase } from "./GWFooterBase"

export const GWFooter =  ({dictionary}:{dictionary:Record<string,string>}) => {
  return <GWFooterBase dictionary={dictionary} />
}