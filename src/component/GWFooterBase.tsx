"use client";
import { color } from "@/app/theme";
import Image from "next/image";
import icon from "../../public/icon_white.png";
import Link from "next/link";
import { useTranslation } from "@/app/i18n/client";
import { globalVariable } from "@/app/global";
import { useWindowSize } from "./hooks/useWindowSize";

const color1 = "white";
const colorBg = "#414042";
const color2 = "#E9E9E9";

export function GWFooterBase({ dictionary, lng }: { dictionary: Record<string, string>, lng:string }) {
  const t = (text:string) => dictionary[text]
  const {innerWidth} = useWindowSize()
  return (
    <div
      style={{
        width: "100vw",
        minHeight: 700,
        // backgroundColor: color.header,
        backgroundColor: colorBg,
        padding: "70px 50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div style={{}}></div>
      <div
        style={{
          width: "calc(100vw - 100px)",
          maxWidth: 1440,
          height: 1,
          // background: "white",
        }}
      />
      <div
        style={{
          paddingTop: 70,
          display: "flex",
          flexDirection: innerWidth > globalVariable.middleScreenWidth ? "row" : "column",
          justifyContent: "space-between",
          width: "calc(100vw - 100px)",
          maxWidth: 1440,
        }}
      >
        <div>
          <Image
            src={icon}
            height={180}
            width={180}
            alt={"Gateway icon"}
            style={{ backgroundColor: undefined, marginBottom: 50 }}
          />
          <div
            style={{
              fontSize: 18,
              fontFamily: "Arial",
              color: color2,
              maxWidth: 200,
            }}
          >
            {t("2023 © copyright All rights reserved.")}
          </div>
        </div>

        <div style={{}}>
          <div
            style={{
              fontSize: 36,
              fontFamily: "Arial",
              marginBottom: 45,
              color: color1,
              marginTop: innerWidth < globalVariable.middleScreenWidth ? 20 : 0
            }}
          >
            {t("Contact Us")}
          </div>
          <div
            style={{
              fontSize: 24,
              fontFamily: "Arial",
              color: color2,
              marginBottom: 18,
            }}
          >
            {`${t("Email")}`} : Info@gateway-vn.com
          </div>
          <div
            style={{
              fontSize: 24,
              fontFamily: "Arial",
              color: color2,
              marginBottom: 18,
            }}
          >
            {`${t("Phone")} : +84-0938547603`}
            <br />
          </div>
        </div>

        <div style={{}}>
          <div
            style={{
              fontSize: 36,
              fontFamily: "Arial",
              marginBottom: 45,
              color: color1,
              marginTop: innerWidth < globalVariable.middleScreenWidth ? 20 : 0
            }}
          >
            {t("Navigation")}
          </div>
          <Link href={"/"+lng} style={{ textDecoration: "none", color: "black" }}>
            <div
              style={{
                fontSize: 24,
                fontFamily: "Arial",
                color: color2,
                marginBottom: 18,
              }}
            >
              {t("Home")}
            </div>
          </Link>
          <div></div>
          <Link href={`/${lng}/about-us`} style={{ textDecoration: "none", color: "black" }}>
            <div
              style={{
                fontSize: 24,
                fontFamily: "Arial",
                color: color2,
                marginBottom: 18,
              }}
            >
              {t("About Us")}
            </div>
          </Link>
          <Link
            href={`/${lng}/articles`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <div
              style={{
                fontSize: 24,
                fontFamily: "Arial",
                color: color2,
                marginBottom: 18,
              }}
            >
              {t("Articles")}
            </div>
          </Link>
          <Link
            href={`/${lng}/event`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <div
              style={{
                fontSize: 24,
                fontFamily: "Arial",
                color: color2,
                marginBottom: 18,
              }}
            >
              {t("Event")}
            </div>
          </Link>
          <Link href={"/"} style={{ textDecoration: "none", color: "black" }}>
            <div
              style={{
                fontSize: 24,
                fontFamily: "Arial",
                color: color1,
                marginBottom: 18,
              }}
            >
              {t("Contacts Us")}
            </div>
          </Link>
        </div>

        <div style={{              fontSize: 36,
              fontFamily: "Arial",
              marginBottom: 45,
              color: color1,}}>
        <div
            style={{
              fontSize: 36,
              fontFamily: "Arial",
              marginBottom: 45,
              color: color1,
              marginTop: innerWidth < globalVariable.middleScreenWidth ? 20 : 0
            }}
          >
            {`${t("Officers")}`}
          </div>
          <div
            style={{
              fontSize: 24,
              fontFamily: "Arial",
              color: color2,
              marginBottom: 18,
              maxWidth: 300,
            }}
          >
            {`${t(
              "Level 1, 139 Nguyen Duc Canh, Tan Phong, District 7,Ho Chi Minh City"
            )}`}
          </div>
          <div
            style={{
              fontSize: 24,
              fontFamily: "Arial",
              color: color2,
              marginBottom: 18,
              maxWidth: 300,
            }}
          >
            Melbourne, Australia Suite 1, Level 2m 34 Queen Street, Melbourne,
            Victoria, Australia 3000
          </div>
          <div
            style={{
              fontSize: 24,
              fontFamily: "Arial",
              color: color2,
              marginBottom: 18,
              maxWidth: 300,
            }}
          >
            Brisbane, Australia Leve1, 16 McDougall Street, Milton, QLD, 4064
          </div>
        </div>


      </div>
    </div>
  );
}
