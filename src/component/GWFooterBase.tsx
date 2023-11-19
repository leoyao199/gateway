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
  const { innerWidth } = useWindowSize();

  function linkFactory(text: string, url?: string) {
    if (url) {
      return (
        <Link href={url} style={{ textDecoration: "none" }}>
          <div
            style={{
              color: "#FFF",
              fontSize: 16,
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
            fontSize: 16,
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
    <div
      style={{
        width: "100vw",
        minHeight: 259,
        backgroundColor: colorBg,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          marginTop: 18,
          width: 1032,
        }}
      >
        <div style={{ width: 466, marginRight: 220 }}>
          <Image
            src={icon}
            height={128}
            width={128}
            alt={"Gateway icon"}
            style={{ backgroundColor: undefined, marginBottom: 15 }}
          />
          <div
            style={{
              color: "#FFF",
              fontSize: 14,
              fontWeight: 400,
              lineHeight: 1.4,
            }}
          >
            {t("2023 © copyright All rights reserved.")}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              height: 172,
              width: 97,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                color: "#fff",
                fontSize: 16,
                fontWeight: 700,
              }}
            >
              {t("Navigation")}
            </div>
            {linkFactory(t("Home"), `/${lng}`)}
            {linkFactory(t("Our Services"), `/${lng}#Our_Services_div`)}
            {linkFactory(t("About Us"), `/${lng}/about-us`)}
            {linkFactory(t("Articles"), `/${lng}/articles`)}
            {linkFactory(t("Event"), `/${lng}/event`)}
          </div>

          <div
            style={{
              height: 104,
              width: 97,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                color: "#fff",
                fontSize: 16,
                fontWeight: 700,
              }}
            >
              {t("Follow Us")}
            </div>
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
              height: 172,
              width: 239,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                color: "#fff",
                fontSize: 16,
                fontWeight: 700,
              }}
            >
              {t("Contact Us")}
            </div>
            {linkFactory("Info@gateway-vn.com")}
            {linkFactory("+84-0938547603")}
            {linkFactory(
              "Level 1, 139 Nguyen Duc Canh, Tan Phong, District 7,Ho Chi Minh City"
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
