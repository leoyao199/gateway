"use client";
import { color } from "@/app/theme";
import { useWindowSize } from "./hooks/useWindowSize";
import { languages } from "@/app/i18n/settings";
import { usePathname, useRouter } from "next/navigation";
import { CSSProperties, useMemo, useState } from "react";
import Image, { StaticImageData } from "next/image";
import en_icon from "../../public/en_icon.png";
// import vn_icon from "../../public/vn_icon.png";
import gatewayHeaderLogo from "../../public/gatewayHeaderLogo.png";
import GWHemBurgerMenu from "./GWHamBurgerMenu";
import vn_icon from "../../public/vn.svg";
class staticStyle {
  m: boolean;
  constructor(isMobile: boolean) {
    this.m = isMobile;
  }

  createStyle() {
    return {
      bg: {
        backgroundColor: color.header,
        width: "100vw",
        height: this.m ? 51 : 108,
      } as CSSProperties,
      whiteBg: {
        width: "100%",
        height: this.m ? 46 : 102,
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
      } as CSSProperties,
      buttonContainer: {
        width: this.m ? 343 : 1032,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      } as CSSProperties,
      headerText: {
        fontWeight: 600,
        fontSize: 18,
        marginRight: 15,
        marginLeft: 15,
        flexDirection: "row",
        display: this.m ? "none" : "flex",
        cursor: "pointer",
      } as CSSProperties,
      icon: {
        height: this.m ? 28 : 66,
        width: this.m ? 92 : 219,
        style: {
          marginLeft: this.m ? 12 : undefined,
        } as CSSProperties,
      },
    };
  }
}

export default function   GWHeaderContent({
  dictionary,
  lng,
}: {
  dictionary: Record<string, string>;
  lng: string;
}) {
  const t = (text: string) => dictionary[text];
  const route = useRouter();
  const { innerWidth, innerHeight, isMobile } = useWindowSize();
  const [showMenu, setShowMenu] = useState(false);
  const pathname = usePathname()

  const data = [
    { text: t("About Us"), onClick: () => {route.push(`/${lng}/about-us`);setShowMenu(false)} },
    {
      text: t("Our Services"),
      onClick: () => {route.push(`/${lng}/our-services`);setShowMenu(false)},
    },
    { text: t("Articles"), onClick: () => {route.push(`/${lng}/articles`);setShowMenu(false)} },
    { text: t("Event"), onClick: () => {route.push(`/${lng}/event`);setShowMenu(false)} },
    {
      text: t("Contact Us"),
      onClick: () => {route.push(`/${lng}/contact-us`);setShowMenu(false)},
    },
  ];

  const s = useMemo(() => {
    const style = new staticStyle(isMobile);
    const styleSheet = style.createStyle();
    return styleSheet;
  }, [isMobile]);

  const headerButton = (
    text: string,
    index: number,
    onClick: () => void,
    icon?: StaticImageData
  ) => {
    return (
      <div
        onClick={() => {
          onClick && onClick();
        }}
        style={s.headerText}
        key={`${text}_${index}`}
      >
        {icon && (
          <Image
            src={icon}
            alt={"change language to " + text}
            style={{ width: 20, height: 20, background: "white" }}
          />
        )}
        {text}
      </div>
    );
  };
  const headerButtonData = useMemo(() => {
    const result: {
      text: string;
      onClick: () => any;
      icon?: StaticImageData;
    }[] = [...data];
    languages
      .filter((l) => lng !== l)
      .map((unSelectedLanguage, index) => {
        result.push({
          text: unSelectedLanguage == "en" ? "En" : "Vn",
          onClick: () => {
            setShowMenu(false);
            const newPath = pathname.replace(`/${unSelectedLanguage == "en" ? "vn" : "en"}/`, `/${unSelectedLanguage == "en" ? "en" : "vn"}/`)
            
            route.push(newPath);
          },
          icon: unSelectedLanguage == "en" ? en_icon : vn_icon,
        });
      });
    return result;
  }, [languages, data, lng]);

  return (
    <div
      style={{
        ...s.bg,
      }}
    >
      <div
        style={{
          ...s.whiteBg,
        }}
      >
        <div style={{ ...s.buttonContainer }}>
          <Image src={gatewayHeaderLogo} alt={""} {...s.icon} onClick={()=>route.push(`/${lng}`)}/>
          {!isMobile && headerButtonData.map((d, index) =>
            headerButton(d.text, index, d.onClick, d.icon)
          )}
          {isMobile &&
            (showMenu ? (
              <svg
                onClick={() => setShowMenu(false)}
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1.41418"
                  width="12"
                  height="2"
                  transform="rotate(45 1.41418 0)"
                  fill="#FF772A"
                />
                <rect
                  x="9.89948"
                  y="1.41422"
                  width="12"
                  height="2"
                  transform="rotate(135 9.89948 1.41422)"
                  fill="#FF772A"
                />
              </svg>
            ) : (
              <svg
                onClick={() => setShowMenu(true)}
                width="12"
                height="10"
                viewBox="0 0 12 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="12" height="2" fill="#FF772A" />
                <rect y="4" width="12" height="2" fill="#FF772A" />
                <rect y="8" width="12" height="2" fill="#FF772A" />
              </svg>
            ))}
        </div>
      </div>
      {<GWHemBurgerMenu data={headerButtonData} visible={showMenu}/>}
    </div>
  );
}
