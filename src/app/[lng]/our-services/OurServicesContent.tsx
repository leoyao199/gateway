"use client";
import Image from "next/image";
import OurServices from "../../../../public/our_services/top.png";
import { useTranslation } from "@/app/i18n/client";
import { useRouter } from "next/navigation";
import { useWindowSize } from "@/component/hooks/useWindowSize";
import { CSSProperties, useEffect, useMemo } from "react";
import { globalVariable } from "@/app/global";
import image1 from "../../../../public/our_services/Immigration.png";
import image2 from "../../../../public/our_services/Property.png";
import image4 from "../../../../public/our_services/Settlement.png";
import { fontSize } from "@/app/theme";

class Style {
  cardListBg = {
    justifyContent: "flex-start",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // height: 1061 * 3/4,
  } as CSSProperties;

  cardFlex = {
    display: "flex",
    width: 598,
    justifyContent: "space-between",
  } as CSSProperties;

  title = {
    color: "#000",
    fontSize: fontSize.subTitle,
    fontWeight: 400,
    lineHeight: 1.4,
    marginBottom: 8
  };

  content = {
    color: "#000",
    fontSize: fontSize.p1,
    fontWeight: 400,
    lineHeight: 1.4,
    // width: 336,
  };
}

const s = new Style()

export default function OurServicesContent({ lng }: { lng: string }) {
  const { t } = useTranslation(lng);
  const router = useRouter();
  const { innerWidth, innerHeight, isMobile } = useWindowSize();

  const isPad = useMemo(() => {
    return innerWidth < globalVariable.middleScreenWidth;
  }, [innerWidth]);

  useEffect(()=>{
    console.log(t("Our visa application services are designed to help you navigate the complex process of applying for a visa. Whether you're a skilled worker, a family member of a Canadian or Australian citizen, or a student, we can help you determine the right visa for your needs and assist you with the application process."))
  })

  const serviceCard = [
    {
      imageSource: image1,
      iconWidth: 77,
      title: t("Immigration services") ?? "",
      content:
        t(
          "Our visa application services are designed to help you navigate the complex process of applying for a visa. Whether you're a skilled worker, a family member of a Canadian or Australian citizen, or a student, we can help you determine the right visa for your needs and assist you with the application process."
        ) ?? "",
    },
    {
      imageSource: image2,
      iconWidth: 91,
      title: t("Property Investment") ?? "",
      content:
        t(
          "We understand that investing in property can be a complex process, which is why we provide comprehensive support and guidance to help you make informed decisions. Our team of experts will help you identify the best investment opportunities based on your goals and budget, and guide you through the buying process."
        ) ?? "",
    },
    {
      imageSource: image4,
      iconWidth: 71,
      title: t("Settlement Services") ?? "",
      content:
        t(
          "With our settlement services, you can have peace of mind that you have a dedicated team of professionals supporting you every step of the way. Our team of local experts brings a wealth of knowledge and experience in assisting individuals and families in their relocation journeys, including orientation, housing guidance, healthcare enrollment, educational support and so on."
        ) ?? "",
    },
  ];

  return (
    <div>
      <div
        style={{
          width: "100vw",
          height: isMobile ? 174 : 668,
          position: "relative",
        }}
      >
        <Image
          src={OurServices}
          alt={""}
          width={0}
          height={0}
          style={{
            objectFit: "cover",
            height: isMobile ? 174 : 668,
            width: "100vw",
          }}
        />
      </div>
      <div>
        <div
          style={{
            color: "#000",
            textAlign: "center",
            fontSize: isMobile ? 22 : 35,
            fontWeight: 600,
            marginTop: isMobile ? 21 : 58,
            marginBottom: isMobile ? 21 : 27,
          }}
        >
          {t("Our Services")}
        </div>
        <div
          style={{ display: "flex", width: "100vw", justifyContent: "center" }}
        >
          <div
            style={{
              textAlign: "center",
              width: isMobile ? 319 : 684,
              fontSize: isMobile ? 13 : 16,
              lineHeight: 1.4,
              fontWeight: 400,
            }}
          >
            {t(
              "At Gateway, we leverage knowledge and experiences from our local experts in immigration consultation, property investment and language enhancement to bring you the absolute one-stop service in immigration. Along with comprehensive settlement service, you are ensured with the smoothest immigration journey."
            )}
          </div>
        </div>
        <div
          style={{
            height: isMobile ? 87 : 58,
            display: "flex",
            width: "100vw",
            justifyContent: "center",
          }}
        >
          {isMobile && (
            <div
              style={{
                width: 33,
                height: 3,
                background: "#FF772A",
                marginTop: 52,
              }}
            ></div>
          )}
        </div>
        <div style={{ ...s.cardListBg}}>
          {serviceCard.map((d, index) => (
            <div
              key={`serviceCard_${index}`}
              style={{
                ...s.cardFlex,
                width: isMobile ? 319 : 598,
                justifyContent:  "space-between",
                marginBottom: isMobile ? 32 : 61
              }}
            >
              <Image src={d.imageSource} alt={d.title} height={isMobile? 74: d.iconWidth}/>
              <div>
                <div style={{...s.title, fontSize: isMobile ?13 :25, width: isMobile ? 138: undefined, fontWeight: isMobile ? 600: 400, height:isMobile ? 24:35, marginBottom:0}}>{d.title}</div>
                <div style={{...s.content,whiteSpace: "pre-wrap", fontSize: isMobile ?13 :16,width: isMobile ? 228 : 472,overflow:"hidden"}}>{
                d.content.split('\n').map((str, index)=>index == 0 ? str:<p style={{lineHeight:1, fontSize: fontSize.p1, padding: '11px 0'}} key={index+"content"}>{str}</p>)}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginBottom: 75 }}></div>
      </div>
    </div>
  );
}


