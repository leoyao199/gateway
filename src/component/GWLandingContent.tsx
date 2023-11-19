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
import services1 from "../../public/our_service/Layer_1.png";
import services2 from "../../public/our_service/Layer_1-1.png";
import services3 from "../../public/our_service/Layer_1-2.png";
import services4 from "../../public/our_service/Layer_1-3.png";
import GWServices from "./GWServices";

export default function GWLandingContent(props: {
  dictionary: Record<string, string>;
  lng: string;
}) {
  const { dictionary } = props;
  const router = useRouter();
  const t = (text: string) => dictionary[text];
  // const { t } = useTranslation(lng);
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
      title: t("Immigration services"),
      containerSizer: NaN,
      content: t(
        "Our visa application services are designed to help you navigate the complex process of applying for a visa. Whether you're a skilled worker, a family member of a Canadian or Australian citizen, or a student, we can help you determine the right visa for your needs and assist you with the application process."
      ),
    },
    {
      imageSource: image2,
      title: t("Property Investment"),
      containerSizer: NaN,
      content: t(
        "We understand that investing in property can be a complex process, which is why we provide comprehensive support and guidance to help you make informed decisions. Our team of experts will help you identify the best investment opportunities based on your goals and budget, and guide you through the buying process."
      ),
    },
    {
      imageSource: image3,
      title: t("Language Enhancement"),
      containerSizer: NaN,
      content: t(
        "At Gateway, we partner with a reputable English language school to provide language enhancement services to our clients. Our services include language courses and assistance with settling into your new environment. We are committed to providing comprehensive support to ensure your immigration journey is a success."
      ),
    },
  ];
  const OurTeamData = [
    {
      imageSource: staff1,
      title: t("Managing Partner"),
      containerSizer: NaN,
      name: t("Francisco Andrade"),
    },
    {
      imageSource: staff2,
      title: t("Senior Partner"),
      containerSizer: NaN,
      name: t("Pedro Fernandes"),
    },
    {
      imageSource: staff3,
      title: t("Partner"),
      containerSizer: NaN,
      name: t("Stella Ornelas"),
    },
    {
      imageSource: staff4,
      title: t("Celine Guajardo"),
      containerSizer: NaN,
      name: t("Lawyer"),
    },
  ];
  const ContactRef = useRef<HTMLDivElement>(null);
  const AboutUsRef = useRef<HTMLDivElement>(null);
  const OurServicesRef = useRef<HTMLDivElement>(null);

  const handleRedirect = (ref: RefObject<HTMLDivElement>) => {
    ref && ref.current && ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      <div style={{ paddingTop: 48 }}></div>
      <GWCarousel data={[{}, {}, {}, {}]} />

      <GWHalfWidthImage
        buttonText={t("More Details")}
        backgroundColor={"rgb(245, 245, 239)"}
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
        />
      </div>
      <div style={{ marginTop: 82 }}>
        <GWServices
          title={t("Why Gateway ?")}
          data={whyGatewayData}
          backgroundColor="white"
        />
      </div>
      <div ref={ContactRef} id={"Contact_Us_div"} style={{marginTop:85, marginBottom: 120}}>
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
