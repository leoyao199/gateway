"use client";
import { color } from "@/app/theme";
import Image from "next/image";
import icon from "../../public/icon_white.png";
import Link from "next/link";
import { globalVariable } from "@/app/global";
import { useWindowSize } from "./hooks/useWindowSize";

const color1 = "white";
const colorBg = "#414042";
const color2 = "#E9E9E9";

export function GWFooterBase({
  dictionary,
  lng,
}: {
  dictionary: Record<string, string>;
  lng: string;
}) {
  const t = (text: string) => dictionary[text];
  const { innerWidth, isMobile } = useWindowSize();

  function linkFactory(text: string, url?: string) {
    if (url) {
      return (
        <Link
          href={url}
          style={{
            textDecoration: "none",
            height: isMobile ? 17 : undefined,
            width: isMobile ? 100 : undefined,
            marginBottom: isMobile ? 13 : undefined,
          }}
        >
          <div
            style={{
              color: "#FFF",
              fontSize: isMobile ? 12 : 16,
              fontWeight: 400,
              lineHeight: 1.4,
            }}
          >
            {text}
          </div>
        </Link>
      );
    } else {
      return (
        <div
          style={{
            color: "#FFF",
            fontSize: isMobile ? 13 : 16,
            fontWeight: 400,
            lineHeight: 1.4,
          }}
        >
          {text}
        </div>
      );
    }
  }

  return (
    <div style={{ width: "100vw" }}>
      <div style={{ height: isMobile ? 5 : 11, background: color.header }} />
      <div
        style={{
          width: "100vw",
          height: isMobile ? 405 : 259,
          backgroundColor: colorBg,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
            marginTop: 18,
            width: isMobile ? 375 : 1032,
            height: "100%",
          }}
        >
          <div
            style={{
              width: isMobile ? 323 : 466,
              marginRight: isMobile ? 0 : 220,
              display: isMobile ? "flex" : undefined,
              alignItems: "center",
              marginBottom: 12,
            }}
          >
            <Image
              src={icon}
              height={isMobile ? 72 : 150}
              width={isMobile ? 72 : 150}
              alt={"Gateway icon"}
              style={{ backgroundColor: undefined, marginLeft : isMobile ? -10 : undefined }}
            />
            <div
              style={{
                color: "#FFF",
                fontSize: 14,
                fontWeight: 400,
                lineHeight: 1.4,
                height: isMobile ? 36 : undefined,
                width: isMobile ? 134 : undefined,
              }}
            >
              {t("2023 © Gateway.All rights reserved.")}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              justifyContent: isMobile ? "center" : "space-between",
              alignItems: isMobile ? "center" : undefined,
              width: isMobile ? "100vw" : "100%",
            }}
          >
            <div
              style={{
                height: isMobile ? 79 : 172,
                width: isMobile ? 323 : 97,
                display: "flex",
                flexDirection: isMobile ? "row" : "column",
                justifyContent: "space-between",
                flexWrap: isMobile ? "wrap" : undefined,
              }}
            >
              <div
                style={{
                  color: "#fff",
                  fontSize: isMobile ? 13 : 16,
                  fontWeight: 700,
                  lineHeight: isMobile ? 1.4 : undefined,
                }}
              >
                {t("Navigation")}
              </div>

              {linkFactory(t("Home"), `/${lng}`)}
              {linkFactory(t("Our Services"), `/${lng}#Our_Services_div`)}
              {isMobile && (
                <div
                  style={{
                    color: "#fff",
                    fontSize: isMobile ? 13 : 16,
                    fontWeight: 700,
                    lineHeight: isMobile ? 1.4 : undefined,
                    width: 70,
                  }}
                ></div>
              )}
              {linkFactory(t("About Us"), `/${lng}/about-us`)}
              {linkFactory(t("Articles"), `/${lng}/articles`)}
              {isMobile && (
                <div
                  style={{
                    color: "#fff",
                    fontSize: isMobile ? 13 : 16,
                    fontWeight: 700,
                    lineHeight: isMobile ? 1.4 : undefined,
                    width: 70,
                  }}
                ></div>
              )}
              {linkFactory(t("Event"), `/${lng}/event`)}
              {isMobile && (
                <div
                  style={{
                    color: "#fff",
                    fontSize: isMobile ? 13 : 16,
                    fontWeight: 700,
                    lineHeight: isMobile ? 1.4 : undefined,
                    width: 100,
                  }}
                ></div>
              )}
            </div>

            <div
              style={{
                height: isMobile ? 30 : 104,
                width: isMobile ? 323 : 97,
                display: "flex",
                flexDirection: isMobile ? "row" : "column",
                justifyContent: isMobile ? "flex-start" : "space-between",
                marginTop: isMobile ? 25 : 0,
              }}
            >
              <div
                style={{
                  color: "#fff",
                  fontSize: isMobile ? 13 : 16,
                  fontWeight: 700,
                  lineHeight: isMobile ? 1.4 : undefined,
                  marginRight: isMobile ? 38 : 0,
                }}
              >
                {t("Follow Us")}
              </div>
              <div style={{ marginRight: isMobile ? 25 : 0 }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="29"
                  viewBox="0 0 29 29"
                  fill="none"
                >
                  <g clip-path="url(#clip0_52_4)">
                    <path
                      d="M16.7861 28.9998V18.819H20.154C20.3687 17.4109 20.5804 16.0226 20.7956 14.6106H16.7983C16.7892 14.5426 16.7774 14.4947 16.7774 14.4465C16.7766 13.5411 16.7709 12.6357 16.7787 11.7303C16.7874 10.7306 17.291 9.99019 18.1819 9.71603C18.5025 9.61733 18.851 9.59013 19.1886 9.57478C19.6952 9.55197 20.2036 9.56864 20.7111 9.56864C20.7891 9.56864 20.8675 9.56864 20.959 9.56864C20.9642 9.47564 20.9716 9.40502 20.9716 9.3344C20.9725 8.29741 20.9673 7.26087 20.9764 6.22388C20.9782 6.03614 20.9215 5.97955 20.739 5.95499C19.4731 5.78347 18.208 5.63609 16.9264 5.74882C14.4468 5.96683 12.6516 7.6697 12.3397 10.1521C12.2582 10.8004 12.2626 11.4614 12.2513 12.1172C12.2373 12.934 12.2478 13.7512 12.2478 14.5899H8.57634V18.8274H12.2391V28.9906C6.80727 28.3247 0.768199 23.4718 0.0637931 15.9055C-0.707699 7.62188 5.63936 0.385809 13.8492 0.0147055C21.9435 -0.351134 28.9571 6.03921 29.0002 14.5965C29.039 22.3537 23.1349 28.1146 16.7866 28.9998H16.7861Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_52_4">
                      <rect width="29" height="29" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
              >
                <g clip-path="url(#clip0_52_8)">
                  <path
                    d="M13.5907 0C14.1953 0 14.7992 0 15.4037 0C15.4764 0.0158895 15.5485 0.0408587 15.6217 0.0465335C17.8803 0.215075 19.9941 0.863139 21.9201 2.04918C25.6636 4.35372 27.9698 7.66781 28.7776 12.0011C28.8758 12.5272 28.9269 13.0623 29.0001 13.5934V15.406C28.9581 15.751 28.9229 16.0977 28.8724 16.4416C28.2996 20.3351 26.4861 23.5289 23.3812 25.9441C20.1951 28.4223 16.5566 29.3842 12.5611 28.8638C9.14453 28.4189 6.23261 26.9105 3.89796 24.375C0.812918 21.024 -0.431885 17.0505 0.131767 12.5402C0.493345 9.64605 1.68536 7.09635 3.62437 4.91552C5.87671 2.38115 8.67737 0.802419 12.0258 0.219048C12.544 0.128818 13.0685 0.0720701 13.5902 0H13.5907ZM15.7676 21.9093V21.5495C15.7676 20.1059 15.7659 18.6622 15.7687 17.2185C15.7699 16.6902 15.7682 16.1613 15.7914 15.6341C15.8198 14.9946 16.1428 14.5043 16.6548 14.1479C17.6737 13.4391 18.9894 13.8908 19.326 15.0797C19.4373 15.4724 19.4748 15.8969 19.4782 16.3077C19.494 18.072 19.485 19.8369 19.485 21.6012C19.485 21.7011 19.485 21.8009 19.485 21.9014H23.0156C23.0156 21.8004 23.0156 21.7169 23.0156 21.6335C23.0156 19.7177 23.0196 17.8025 23.0116 15.8866C23.0099 15.482 22.9832 15.0751 22.9339 14.6739C22.6779 12.6055 21.4387 11.3059 19.4441 11.0767C18.0006 10.911 16.7785 11.3474 15.9169 12.5845C15.8879 12.6259 15.8493 12.6605 15.7625 12.7564V11.3099H12.2546V21.9099H15.7676V21.9093ZM10.2741 21.9048C10.2798 21.8293 10.286 21.7828 10.286 21.7368C10.286 18.3393 10.2855 14.9412 10.2906 11.5437C10.2906 11.3468 10.2327 11.2844 10.034 11.2861C9.01454 11.2946 7.99509 11.2895 6.97506 11.2912C6.90354 11.2912 6.83145 11.3082 6.7622 11.3173V21.9048H10.2741ZM6.54764 8.01397C6.54991 9.08935 7.37467 9.85431 8.52355 9.8475C9.68094 9.84069 10.5216 9.07062 10.5182 8.02021C10.5153 6.94654 9.69229 6.1759 8.54625 6.1742C7.369 6.17306 6.54537 6.93065 6.54764 8.01397Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_52_8">
                    <rect width="29" height="29" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <div
              style={{
                height: isMobile ? 95 : 172,
                width: isMobile ? 323 : 239,
                display: "flex",
                flexDirection: isMobile ? "row" : "column",
                justifyContent: isMobile ? "flex-start" : "space-between",
                flexWrap: isMobile ? "wrap" : undefined,
                marginTop: isMobile ? 25 : 0,
              }}
            >
              <div
                style={{
                  color: "#fff",
                  fontSize: isMobile ? 13 : 16,
                  fontWeight: 700,
                  lineHeight: isMobile ? 1.4 : undefined,
                  marginRight: isMobile ? 22 : 0,
                }}
              >
                {t("Contact Us")}
              </div>
              <div style={{ marginBottom: isMobile ? 10 : 0 }}>
                {linkFactory("Info@gateway-vn.com")}
              </div>
              <div
                style={{
                  marginLeft: isMobile ? 93 : undefined,
                  marginBottom: isMobile ? 10 : 0,
                }}
              >
                {linkFactory("+852 3689 9122")}
              </div>
              <div
                style={{
                  marginLeft: isMobile ? 93 : undefined,
                  width: 226
                }}
              >
                {linkFactory(
                  t("footer_address")
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
