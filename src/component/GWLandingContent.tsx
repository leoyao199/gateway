"use client";
import bg from "../../public/index_1.png";
import why_canada from "../../public/why_canada.jpg";
import why_australia from "../../public/why_australia.jpg";
import image1 from "../../public/image1.jpg";
import image2 from "../../public/image2.jpg";
import image3 from "../../public/image3.jpg";
import kid1 from "../../public/kid1.jpg";
import kid2 from "../../public/kid2.jpg";
import staff1 from "../../public/staff1.jpg";
import staff2 from "../../public/staff2.jpg";
import staff3 from "../../public/staff3.jpg";
import staff4 from "../../public/staff4.jpg";
import formImage from "../../public/formImage.jpg";
import GWHeader from "@/component/GWHeaderContent";
import GWFullWidthImage from "@/component/GWFullWidthImage";
import GWHalfWidthImage from "@/component/GWHalfWidthImage";
import GWServices2 from "@/component/GWServices2";
import GWForm from "@/component/GWForm";
import { RefObject, useRef } from "react";
import { useRouter } from "next/navigation";
import { useTranslation } from "../app/i18n/client";
import GWCarousel from "./GWCarousel";
import services1 from "../../public/our_services/Layer_1.png";
import services2 from "../../public/our_services/Layer_1-1.png";
import services3 from "../../public/our_services/Layer_1-2.png";
import services4 from "../../public/our_services/Layer_1-3.png";
import GWServices from "./GWServices";
import { useWindowSize } from "./hooks/useWindowSize";
import { globalVariable } from "@/app/global";

export default function GWLandingContent(props: {
  dictionary: Record<string, string>;
  lng: string;
}) {
  const { dictionary } = props;
  const {innerWidth, isMobile} = useWindowSize()
  const router = useRouter();
  const t = (text: string) => dictionary[text];
  const ourServicesData = [
    {
      imageSource: services1,
      text: t("Immigration services"),
    },
    {
      imageSource: services2,
      text: t("Property Investment"),
    },
    {
      imageSource: services3,
      text: t("Language Enhancement"),
    },
    {
      imageSource: services4,
      text: t("Settlement Services"),
    },
  ];
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
  const ContactRef = useRef<HTMLDivElement>(null);
  const OurServicesRef = useRef<HTMLDivElement>(null);
  
  return (
    <main>
      {!isMobile && <div style={{ paddingTop: 48 }}></div>}
      <GWCarousel
        data={[
          {
            imageUrl:
              "https://gate-way.s3.ap-southeast-1.amazonaws.com/Group_32_9ebde1cf57.png",
            mobileImageUrl:
              'https://gate-way.s3.ap-southeast-1.amazonaws.com/Hero_USA_EB_3_1_c1d7fa50eb.png'  ,
            content: {
              title: t('Your Gateway To Global Mobility'),
              content: t('Welcome to Gateway, a leading immigration company based in Vietnam specializing in Canada and Australia immigration. We offer a range of services to help you achieve your dreams of living, working, studying or investing in Canada or Australia.')
            }
          },
          {
            imageUrl:
              "https://gate-way.s3.ap-southeast-1.amazonaws.com/Group_35_4aee1af3fd.png",
            mobileImageUrl:
              'https://gate-way.s3.ap-southeast-1.amazonaws.com/Hero_USA_EB_3_2_df4b090a97.png',
              content: {
                title: t('Your Gateway To Global Mobility'),
                content: t('Welcome to Gateway, a leading immigration company based in Vietnam specializing in Canada and Australia immigration. We offer a range of services to help you achieve your dreams of living, working, studying or investing in Canada or Australia.')
              }
          },
          {
            imageUrl:
              "https://gate-way.s3.ap-southeast-1.amazonaws.com/Group_34_1bac76d6da.png",
              mobileImageUrl:
              'https://gate-way.s3.ap-southeast-1.amazonaws.com/Hero_USA_EB_3_4_c51f4d3703.png',
              content: {
                title: t('Your Gateway To Global Mobility'),
                content: t('Welcome to Gateway, a leading immigration company based in Vietnam specializing in Canada and Australia immigration. We offer a range of services to help you achieve your dreams of living, working, studying or investing in Canada or Australia.')
              }
          },
          {
            imageUrl:
              "https://gate-way.s3.ap-southeast-1.amazonaws.com/Group_34_1bac76d6da.png",
              mobileImageUrl:
              'https://gate-way.s3.ap-southeast-1.amazonaws.com/Hero_USA_EB_3_3_6485781bb3.png',
              content: {
                title: t('Your Gateway To Global Mobility'),
                content: t('Welcome to Gateway, a leading immigration company based in Vietnam specializing in Canada and Australia immigration. We offer a range of services to help you achieve your dreams of living, working, studying or investing in Canada or Australia.')
              }
          },
        ]}
      />

      <GWHalfWidthImage
        buttonText={t("More Details")}
        backgroundColor={"#FFFFFF"}
        context={{
          title: t("#Why Canada?"),
          content: t(
            "Canada is consistently ranked as one of the best countries in the world to live in. It offers a high standard of living, with excellent healthcare, education, and social services. Canadians enjoy a strong sense of community, safety, and personal freedom."
          ),
          onPress: () => {},
        }}
        imageSource={why_canada}
      />
      <GWHalfWidthImage
        buttonText={t("More Details")}
        backgroundColor={"#FFFFFF"}
        context={{
          title: t("#Why Australia?"),
          content: t(
            "Australia is a country of stunning natural beauty, from its pristine beaches to its vast outback, tropical rainforests, and diverse wildlife. The country is home to the Great Barrier Reef, Uluru, the Whitsunday Islands, and many other natural wonders that attract visitors from all over the world."
          ),
          onPress: () => {},
        }}
        imageSource={why_australia}
        mirror
      />
      <div
        ref={OurServicesRef}
        id={"Our_Services_div"}
        style={{ marginTop: 86 }}
      >
        <GWServices2
          title={t("Our Services")}
          data={ourServicesData}
          buttonText={t("More Details")}
          onClick={()=>router.push(`/${props.lng}/our-services`)}
        />
      </div>
      <div style={{ marginTop: isMobile ? 0 : 82 }}>
        <GWServices
          title={t("Why Gateway ?")}
          data={whyGatewayData}
          backgroundColor="white"
        />
      </div>
      <div
        ref={ContactRef}
        id={"Contact_Us_div"}
        style={{ marginTop: 85, marginBottom: 120 }}
      >
        <GWForm
          lng={props.lng}
          imageSource={formImage}
          maxWidth={1440}
          buttonText={t("Contact Us")}
          leftText={t("Contact Us for Consultation")}
        />
      </div>
    </main>
  );
}

