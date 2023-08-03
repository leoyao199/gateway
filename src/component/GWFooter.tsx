import { useTranslation } from "@/app/i18n/client"
import { GWFooterBase } from "./GWFooterBase"

export const GWFooter =  ({lng}:{lng:string}) => {
  return <GWFooterBase lng={lng} />
}