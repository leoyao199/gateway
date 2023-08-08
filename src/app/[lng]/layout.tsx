import "./globals.css";
import { Inter } from "next/font/google";
import { dir } from "i18next";
import Icon from "../../../public/icon.svg";
import Image from "next/image";
import { GWFooter } from "@/component/GWFooter";
import { color } from "../theme";
import GWHeader from "@/component/GWHeaderContent";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gateway",
  description: "Gateway",
  icons: {
    icon: "/gateway_icon.png",
  },
};
const languages = ["en", "vn"];

export async function generateStaticParams() {
  return languages.map((lng) => (languages.includes(lng) ? { lng } : "en"));
}

export default function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: {
    lng: string;
  };
}) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <link rel="icon" href="/favicon.ico" sizes="any" />

      <body className={inter.className}>
        <GWHeader lng={lng} />
        {children}
      </body>

      <footer>
        <div style={{ height: 20, background: color.header, width: "100vw" }} />
        <GWFooter lng={lng==='vn'? 'vn':'en'} />
        {/* <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            height: 120,
            alignItems: "center",
            flexWrap: "wrap",
            background:'black',
            color: 'white',
            fontFamily: 'Arial',
            // fontSize: 50
            
            // fontWeight: 200
          }}
          >
          <div style={{padding: 10}}></div>
          <div>Email : Info@gateway-vn.com</div>
          <div>Phone : +84-0938547603</div>
          <div style={{maxWidth: '90vw', textAlign: 'center'}}>
          Address : Level 1, 139 Nguyen Duc Canh, Tan Phong, District 7, Ho Chi Minh City
          </div>
        </div> */}
      </footer>
    </html>
  );
}
