"use client";
import Image from "next/image";
import AboutUs from "../../../../public/about_us/top.png";
import RAEON from "../../../../public/about_us/RAEON.png";
import eightA from "../../../../public/about_us/eightA.png";
import { useTranslation } from "@/app/i18n/client";
import { useRouter } from "next/navigation";
import GWServices from "@/component/GWServices";
import GWHalfWidthImage from "@/component/GWHalfWidthImage";
import { useWindowSize } from "@/component/hooks/useWindowSize";
import { useMemo } from "react";
import { globalVariable } from "@/app/global";
import cert from "../../../../public/gate-way-certificate.jpg";
import image1 from "../../../../public/image1.jpg";
import image2 from "../../../../public/image2.jpg";
import image3 from "../../../../public/image3.jpg";
import { GWOurPartner } from "@/component/GWOurPartner";

export default function AboutUsContent({ lng }: { lng: string }) {
  const { t } = useTranslation(lng);
  const router = useRouter();
  const { innerWidth, innerHeight, isMobile } = useWindowSize();
  // const isPad = useMemo(() => {
  //   return innerWidth < globalVariable.middleScreenWidth;
  // }, [innerWidth]);

   const whyGatewayData = [
    {
      imageSource: image1,
      title: t("Local Expertise") ?? "",
      content:
        t(
          "Our founders studied and worked in Australia and Canada, giving us in-depth knowledge of the local immigration markets. Our offices in Vietnam, Melbourne and Calgary serve some of the most popular destinations for immigrants."
          ) ?? "",
    },
    {
      imageSource: image2,
      title: t("Transparent Process") ?? "",
      content:
        t(
          "All of our immigration services are provided in partnership with reputable local lawyers. Fees and charges are clearly outlined upfront so clients know exactly what to expect, with no hidden costs."
          ) ?? "",
    },
    {
      imageSource: image3,
      title: t("International Perspective") ?? "",
      content:
        t(
          "We collaborate closely with numerous international organizations including law firms, property developers, home builders and local government. This extensive network provides us with a broad international perspective and insight into emerging opportunities for our clients."
        ) ?? "",
    },
  ];

  return (
    <div>
      <div style={{ width: "100vw", height: isMobile ? 174 : 668, position: "relative" }}>
        <Image
          src={AboutUs}
          alt={""}
          width={0}
          height={isMobile ? 174 : 668}
          style={{
            objectFit: "cover",
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
            marginTop: isMobile ? 24 : 58,
            marginBottom: isMobile ? 19 : 27,
          }}
        >
          {t("About Us")}
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
              "At Gateway, we are committed to providing you with the highest level of service and support to help you achieve your immigration goals. Our team of experienced consultants offers a range of services, including visa application assistance and property investment advice. Contact us today to learn more about how we can help you realize your dreams, and open your gateway to global mobility!"
            )}
          </div>
        </div>
        <div style={{display:'flex', width:'100vw',justifyContent:'center', alignItems:'center'  , height :isMobile? 70: 82}}>
          {isMobile && <div style={{width:33, height:3, background:'#FF772A', marginTop:2}}></div>}
        </div>
        <div >
          <GWServices
            title={t("Why Gateway ?")}
            data={whyGatewayData}
            backgroundColor="white"
          />
        </div>
        <div style={{height: isMobile ? 50 : 58,display:'flex', width:'100vw',justifyContent:'center', alignItems:'center'}}>
        {isMobile && <div style={{width:33, height:3, background:'#FF772A', marginBottom: 20}}></div>}
        </div>
        <GWOurPartner
          title={t("Our Partner")}
        partners={[
          {
            image: RAEON,
            text: t(
              'Raeon International provides one-stop solutions for all property investment needs including property market analysis, project marketing, property management, legal consulting, financial planning, and immigration advice.They aim at offering the finest investment experience and reliable advice to their customers through highly transparent disclosure of real estate information. Being an associate company of FECIL (35:HK), they have an excellent reputation and are leading the market with a sales volume exceeding HK$12B.'
            ),
            buttonText: t("More Details"),
            onPress: () => {
              router.push("https://www.rae-on.com/en/");
            },
          },
          {
            image: eightA,
            text: t("8A Dạy kèm is a reputable educational center offering tuition in math, English, and science for all levels. Founded by experienced experts in Australia and Vietnam, it aims to provide an international standard learning environment for students' self-development. With passionate teachers, 8A helps children excel academically with the latest teaching methodology and materials, including 80,000 questions and textbooks for bilingual, Cambridge, and US Common programs."),
            buttonText: t("More Details"),
            onPress: () => {
              router.push("https://8adaykem.edu.vn/");
            },
          },
        ]}/>
        <div style={{ marginBottom: 102 }}></div>
      </div>
    </div>
  );
}
