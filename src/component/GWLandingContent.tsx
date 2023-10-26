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
import GWServices from "@/component/GWServices";
import GWForm from "@/component/GWForm";
import { RefObject, useRef } from "react";
import { useRouter } from "next/navigation";
import { useTranslation } from "../app/i18n/client";

export default function GWLandingContent(props: {
  dictionary: Record<string, string>;
  lng: string
}) {
  const { dictionary } = props;
  const router = useRouter();
  const t = (text: string) => dictionary[text];
  // const { t } = useTranslation(lng);
  const ourServicesData = [
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

  // const headerData = [
  //   { text: t("About Us"), onClick: () => router.push(`/${lng}/about-us`) },
  //   { text: t("Our Services"), onClick: () => handleRedirect(OurServicesRef) },
  //   { text: t("Articles"), onClick: () => router.push(`/${lng}/articles`) },
  //   { text: t("Event"), onClick: () => router.push(`/${lng}/event`) },
  //   { text: t("Contact us"), onClick: () => handleRedirect(ContactRef) },
  // ];

  return (
    <main>
      <GWFullWidthImage
        // lng = {lng}
        imagePath={bg}
        text={t("Contact us")}
        onClick={() => handleRedirect(ContactRef)}
        title={t("Your Gateway To Global Mobility")}
        content={t(
          "Welcome to Gateway, a leading immigration company based in Vietnam specializing in Canada and Australia immigration. We offer a range of services to help you achieve your dreams of living, working, studying or investing in Canada or Australia."
        )}
        buttonText={t("Contact us")}
      />
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
      <div ref={OurServicesRef} id={"Our_Services_div"}>
        <GWServices
          title={t("Our Services")}
          data={ourServicesData}
          // backgroundColor="rgb(245, 245, 239)"
          backgroundColor="white"
        />
      </div>
      {/* <GWHalfWidthImage
        backgroundColor={"rgb(245, 245, 239)"}
        context={{
          title: t("8A Dạy kèm"),
          content: t(
            "8A Dạy kèm is a respected educational center offering tuition classes in math, English, and science for all levels. Founded by experienced experts in Australia and Vietnam, it provides a quality international standard learning environment for students' knowledge and self-development. With dedicated teachers and the latest teaching methods, 8A aims to help students excel academically and succeed in bilingual, Cambridge, and US Common programs."
          ),
          onPress: () => {
            router.push("https://8adaykem.edu.vn/");
          },
        }}
        imageSource={[kid1, kid2]}
        buttonText={t("More Details")}
      /> */}
      <div ref={ContactRef} id={"Contact_Us_div"}>
        <GWForm
          lng={props.lng}
          imageSource={formImage}
          maxWidth={1440}
          buttonText={t("Contact Us")}
        />
      </div>
    </main>
  );
}
