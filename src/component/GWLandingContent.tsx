"use client";
import why_canada from "../../public/why_canada.jpg";
import why_australia from "../../public/why_australia.jpg";
import image1 from "../../public/image1.jpg";
import image2 from "../../public/image2.jpg";
import image3 from "../../public/image3.jpg";
import GWHalfWidthImage from "@/component/GWHalfWidthImage";
import GWServices2 from "@/component/GWServices2";
import GWForm from "@/component/GWForm";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import GWCarousel from "./GWCarousel";
import services1 from "../../public/our_services/Layer_1.png";
import services2 from "../../public/our_services/Layer_1-1.png";
import services3 from "../../public/our_services/Layer_1-2.png";
import services4 from "../../public/our_services/Layer_1-3.png";
import GWServices from "./GWServices";
import { useWindowSize } from "./hooks/useWindowSize";
import nodeFetch from "@/nodeFetch";

export default function GWLandingContent(props: {
  dictionary: Record<string, string>;
  lng: "vn" | "en";
}) {
  const { dictionary } = props;
  const { innerWidth, isMobile } = useWindowSize();
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
  const [carousel, setCarousel] = useState([]);

  async function getCarouselData() {
    const res = await nodeFetch(
      process.env.BASE_URL + "/api/landing?populate=page&populate=page.image"
    );
    return await res.json();
  }

  useEffect(() => {
    getCarouselData().then((res) => {
      try {
        const pageData = res.data.attributes.page.map((data: any) => ({
          imageUrl: data.image.data.attributes.url,
          mobileImageUrl: data.image.data.attributes.formats.medium.url,
          content: {
            title: props.lng === "vn" ? data.vn_title : data.title,
            content: props.lng === "vn" ? data.context : data.context,
          },
        }));
        setCarousel(pageData);
      } catch {}
    });
  }, []);

  return (
    <main>
      {!isMobile && <div style={{ paddingTop: 48 }}></div>}
      {carousel && carousel.length && <GWCarousel
        lng={props.lng}
        data={carousel}
      />}

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
          onClick={() => router.push(`/${props.lng}/our-services`)}
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
          buttonText={t("Contact Us")}
          leftText={t("Contact Us for Consultation")}
        />
      </div>
    </main>
  );
}
