"use client";
import Image from "next/image";
import AboutUs from "../../../../public/about_us_header.png";
import RAEON from "../../../../public/RAEON_icon.png";
import eightA from "../../../../public/8A_icon.png";
import sub1 from "../../../../public/about_us_1.png";
import sub2 from "../../../../public/about_us_2.png";
import sub3 from "../../../../public/image2.jpg";
import { useTranslation } from "@/app/i18n/client";
import GWHeader from "@/component/GWHeaderContent";
import { useRouter } from "next/navigation";
import GWServices from "@/component/GWServices";
import { GWOurPartner } from "@/component/GWOurPartner";
import GWHalfWidthImage from "@/component/GWHalfWidthImage";
import { useWindowSize } from "@/component/hooks/useWindowSize";
import { useMemo } from "react";
import { globalVariable } from "@/app/global";

export default function AboutUsContent({ lng }: { lng: string }) {
  const { t } = useTranslation(lng);
  const router = useRouter();
  const {innerWidth,innerHeight} = useWindowSize()
  const isPad = useMemo(() => {
    return innerWidth < globalVariable.middleScreenWidth;
  }, [innerWidth]);
  const headerData = [
    { text: t("About Us"), onClick: () => router.push(`/${lng}/about-us`) },
    { text: t("Our Services"), onClick: () => router.push(`/${lng}`) },
    { text: t("Articles"), onClick: () => router.push(`articles`) },
    { text: t("Event"), onClick: () => router.push(`event`) },
    { text: t("Contact us"), onClick: () => router.push(`/${lng}`) },
  ];

  return (
    <div>
      {/* <GWHeader data={headerData} lng={lng} /> */}
      <div style={{ position: "relative" }}>
        <Image
          src={AboutUs}
          alt={""}
          style={{ height:isPad ? 360 : 760, width: "100vw", objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            display: "flex",
            top: 0,
            bottom: 20,
            left: 0,
            right: 0,
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontSize: isPad ? 60: 160,
            fontWeight: "bold",
          }}
        >
          {t("About Us")}
        </div>
      </div>
      <div>
        <div
          style={{
            height: "100%",
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            paddingTop: isPad ? 50 : 150,
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              width: "80vw",
              maxWidth: 1200,
              fontSize: isPad ? 18 : 24,
              lineHeight: 1.4,
              fontWeight: 200,
            }}
          >
            {t(
              "At Gateway, we are committed to providing you with the highest level of service and support to help you achieve your immigration goals. Our team of experienced consultants offers a range of services, including visa application assistance and property investment advice. Contact us today to learn more about how we can help you realize your dreams, and open your gateway to global mobility!"
            )}
          </div>
        </div>
        <GWServices
          data={[
            {
              title: t("Local Expertise"),
              content: t(
                "Our founders studied and worked in Australia and Canada, giving us in-depth knowledge of the local immigration markets. Our offices in Vietnam, Melbourne and Calgary serve some of the most popular destinations for immigrants."
              ),
              containerSizer: NaN,
              imageSource: sub1,
            },
            {
              title: t("Transparent Process"),
              content: t(
                "All of our immigration services are provided in partnership with reputable local lawyers. Fees and charges are clearly outlined upfront so clients know exactly what to expect, with no hidden costs."
              ),
              containerSizer: NaN,
              imageSource: sub3,
            },
            {
              title: t("International Perspective"),
              content: t(
                "We collaborate closely with numerous international organisations including law firms, property developers, home builders and local government. This extensive network provides us with a broad international perspective and insight into emerging opportunities for our clients."
              ),
              containerSizer: NaN,
              imageSource: sub2,
            },
          ]}
          title={t("Our Commitment")}
          backgroundColor={"white"}
          width={"100vw"}
        />
        <GWHalfWidthImage
          backgroundColor={"rgb(245, 245, 239)"}
          context={{
            title: "",
            content: t(
              "Raeon International provides one-stop solutions for all property investment needs including property market analysis, project marketing, property management, legal consulting, financial planning, and immigration advice.They aim at offering the finest investment experience and reliable advice to their customers through highly transparent disclosure of real estate information. Being an associate company of FECIL (35:HK), they have an excellent reputation and are leading the market with a sales volume exceeding HK$12B."
              // "Raeon International provides one-stop solutions for all property investment needs including property market analysis, project marketing, property management, legal consulting, financial planning, and immigration advice. Being an associate company of FECIL (35:HK), they have an excellent reputation and are leading the market with a sales volume exceeding HK$12B."
            ),
            onPress: () => {
              router.push("https://www.rae-on.com/en/");
            },
          }}
          imageSource={RAEON}
          buttonText={t("More Details")}
        />
        <GWHalfWidthImage
          backgroundColor={""}
          context={{
            title: "",
            content: t(
              "8A Dạy kèm is a reputable educational center offering tuition in math, English, and science for all levels. Founded by experienced experts in Australia and Vietnam, it aims to provide an international standard learning environment for students' self-development. With passionate teachers, 8A helps children excel academically with the latest teaching methodology and materials, including 80,000 questions and textbooks for bilingual, Cambridge, and US Common programs."
              // "8A Dạy kèm is a reputable educational center that offers tuition classes in math, English and science subjects for students of all levels. Founded by a team of experts with over 30 years of experience in education, both in Australia and Vietnam, 8A aims to provide students with a quality international standard learning environment to enhance their knowledge and self-development. With a team of passionate and dedicated teachers who provide extraordinary learning experiences for students, 8A aspires to help children excel academically and conquer their futures. The tuition center employs the latest teaching methodology and materials, including an exclusive bank of 80,000 questions and textbooks to deliver the best outcomes for students pursuing bilingual,Cambridge and US Common programs."
            ),
            onPress: () => {
              router.push("https://8adaykem.edu.vn/");
            },
          }}
          imageSource={eightA}
          buttonText={t("More Details")}
          mirror
        />
        {/* // title={t("Our Partner")}
        // partners={[
        //   {
        //     image: RAEON,
        //     text: t(
        //       "At Raeon International, their experienced sales agents provide customers with the most reliable overseas real estate information, with a full grasp of the market trend and accurate forecasts of upcoming investment projects. They aim at offering the finest investment experience and reliable advice to their customers through highly transparent disclosure of real estate information. Raeon International provides one-stop solutions for all property investment needs including property market analysis, project marketing, property management, legal consulting, financial planning, and immigration advice. Being an associate company of FECIL (35:HK), they have an excellent reputation and are leading the market with a sales volume exceeding HK$12B."
        //     ),
        //   },
        //   {
        //     image: eightA,
        //     text: t(
        //       "8A Dạy kèm is a reputable educational center that offers tuition classes in math, English and science subjects for students of all levels. Founded by a team of experts with over 30 years of experience in education, both in Australia and Vietnam, 8A aims to provide students with a quality international standard learning environment to enhance their knowledge and self-development. With a team of passionate and dedicated teachers who provide extraordinary learning experiences for students, 8A aspires to help children excel academically and conquer their futures. The tuition center employs the latest teaching methodology and materials, including an exclusive bank of 80,000 questions and textbooks to deliver the best outcomes for students pursuing bilingual,Cambridge and US Common programs."
        //     ),
        //   },
        // ]} */}
      </div>
    </div>
  );
}
