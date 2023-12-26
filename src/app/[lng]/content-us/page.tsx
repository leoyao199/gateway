'use client'

import { useTranslation } from "@/app/i18n/client"
import GWForm from "@/component/GWForm"
import { useWindowSize } from "@/component/hooks/useWindowSize"




export default function OurServicesPage ({params: {lng}}:{params: {lng:string}}){
  const {t } = useTranslation(lng)
  const {isMobile} = useWindowSize()
  return (
    <main style={{display:'flex', alignItems:'center', flexDirection:'column', minHeight:isMobile ? undefined :`calc(100vh - 358px)`}}>
      <div style={{width: isMobile ? 317:906, fontSize:isMobile ? 13 :16, fontWeight: 400, lineHeight: 1.4, marginTop: isMobile? 29:108, marginBottom: isMobile? 29 : 35}}>{t('Have a question about our services or want more information? Contact us and we\'ll be happy to help in any way we can.')}</div>
      <GWForm
          lng={lng}
          buttonText={t("Contact Us")}
          leftText={t("Contact Us for Consultation")}
        />
      <div style={{marginTop:isMobile? 29:103}}></div>
    </main>
  )
}