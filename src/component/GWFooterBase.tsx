'use client'
import { color } from "@/app/theme";
import Image from "next/image";
import icon from "../../public/gateway_icon.png";
import Link from "next/link";
import { useTranslation } from "@/app/i18n/client";

export function GWFooterBase({lng}:{lng:string}) {
  const {t} = useTranslation(lng)
  return (
    <div
      style={{
        width: "100vw",
        height: 700,
        backgroundColor: color.header,
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
          background: "white",
        }}
      />
      <div
        style={{
          paddingTop: 70,
          display: "flex",
          flexDirection: "row",
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
            style={{ backgroundColor: "white", marginBottom: 50 }}
          />
          <div style={{ fontSize: 18 , fontFamily: "Arial", color: "#3A3B40", maxWidth: 200}}>
            {t("2023 © copyright All rights reserved.")}
          </div>
        </div>

        <div style={{}}>
          <div style={{fontSize: 36, fontFamily: "Arial", marginBottom: 45}}>{t("Navigation")}</div>
          <Link href={"/"} style={{ textDecoration: "none", color: "black" }}>
            <div style={{fontSize: 24,  fontFamily: "Arial", color: "#3A3B40", marginBottom: 18}}>{t("Home")}</div>
          </Link>
          <div></div>
          <Link href={"/"} style={{ textDecoration: "none", color: "black" }}>
            <div style={{fontSize: 24,  fontFamily: "Arial", color: "#3A3B40", marginBottom: 18}}>{t("About Us")}</div>
          </Link>
          <Link
            href={"/articles"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <div style={{fontSize: 24,  fontFamily: "Arial", color: "#3A3B40", marginBottom: 18}}>{t("Articles")}</div>
          </Link>
          <Link
            href={"/event"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <div style={{fontSize: 24,  fontFamily: "Arial", color: "#3A3B40", marginBottom: 18}}>{t("Event")}</div>
          </Link>
          <Link href={"/"} style={{ textDecoration: "none", color: "black" }}>
            <div style={{fontSize: 24,  fontFamily: "Arial", color: "#3A3B40", marginBottom: 18}}>{t("Contacts Us")}</div>
          </Link>
        </div>

        <div style={{}}>
          <div style={{fontSize: 36, fontFamily: "Arial", marginBottom: 45}}>{t("Contact Us")}</div>
          <div style={{fontSize: 24,  fontFamily: "Arial", color: "#3A3B40", marginBottom: 18, maxWidth: 300}}>
            {`${t("Address")}: ${t("Level 1, 139 Nguyen Duc Canh, Tan Phong, District 7,Ho Chi Minh City")}`}
          </div>
          <div style={{fontSize: 24,  fontFamily: "Arial", color: "#3A3B40", marginBottom: 18}}>{`${t("Email")}`} : Info@gateway-vn.com</div>
          <div style={{fontSize: 24,  fontFamily: "Arial", color: "#3A3B40", marginBottom: 18}}>
            {`${t("Phone")} : +84-0938547603`}
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
