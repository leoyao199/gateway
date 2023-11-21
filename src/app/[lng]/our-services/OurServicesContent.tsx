"use client";
import Image from "next/image";
import OurServices from "../../../../public/our_services/top.png";
import { useTranslation } from "@/app/i18n/client";
import { useRouter } from "next/navigation";
import { useWindowSize } from "@/component/hooks/useWindowSize";
import { CSSProperties, useMemo } from "react";
import { globalVariable } from "@/app/global";
import image1 from "../../../../public/our_services/Layer_1.png";
import image2 from "../../../../public/our_services/Layer_1-1.png";
import image3 from "../../../../public/our_services/Layer_1-2.png";
import image4 from "../../../../public/our_services/Layer_1-3.png";

class Style {
  cardListBg = {
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: 1061,
  } as CSSProperties;

  cardFlex = {
    display: "flex",
    width: 552,
    justifyContent: "space-between",
  } as CSSProperties;

  title = {
    color: "#000",
    fontSize: 25,
    fontWeight: 400,
    lineHeight: 1.4,
    marginBottom: 8
  };

  content = {
    color: "#000",
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 1.4,
    width: 336,
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

  const serviceCard = [
    {
      imageSource: image1,
      title: t("Immigration services") ?? "",
      content:
        t(
          "Our visa application services are designed to help you navigate the complex process of applying for a visa. Whether you're a skilled worker, a family member of a Canadian or Australian citizen, or a student, we can help you determine the right visa for your needs and assist you with the application process."
        ) ?? "",
    },
    {
      imageSource: image2,
      title: t("Property Investment") ?? "",
      content:
        t(
          "We understand that investing in property can be a complex process, which is why we provide comprehensive support and guidance to help you make informed decisions. Our team of experts will help you identify the best investment opportunities based on your goals and budget, and guide you through the buying process."
        ) ?? "",
    },
    {
      imageSource: image3,
      title: t("Language Enhancement") ?? "",
      content:
        t(
          "At Gateway, we partner with a reputable English language school to provide language enhancement services to our clients. Our services include language courses and assistance with settling into your new environment. We are committed to providing comprehensive support to ensure your immigration journey is a success."
        ) ?? "",
    },
    {
      imageSource: image4,
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
                width: isMobile ? 319 : 552,
                justifyContent:  "space-between",
                marginBottom: isMobile ? 32 : undefined
              }}
            >
              <Image src={d.imageSource} alt={d.title} height={isMobile? 74: undefined}/>
              <div>
                <div style={{...s.title, fontSize: isMobile ?13 :25, width: isMobile ? 138: undefined, fontWeight: isMobile ? 600: 400}}>{d.title}</div>
                <div style={{...s.content, fontSize: isMobile ?13 :16,width: isMobile ? 228 : 336}}>{d.content}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginBottom: 75 }}></div>
      </div>
    </div>
  );
}
