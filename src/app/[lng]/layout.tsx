import "./globals.css";
import { Inter } from "next/font/google";
import { dir } from "i18next";
import Icon from "../../../public/icon.svg"
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gateway",
  description: "Gateway",
  icons: {
    icon: '/icon.svg',
  },
};
const languages = ["en", "vn"];

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
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
      <body className={inter.className}>{children}</body>
      <footer>
        <div
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
          {/* <Image src={Icon} alt="" height={80} /> */}
          <div style={{padding: 10}}></div>
          <div>Email : Info@gateway-vn.com</div>
          <div>Phone : +84-0938547603</div>
          <div style={{maxWidth: '90vw', textAlign: 'center'}}>
            Address : Level 1, 139 Nguyen Duc Canh, Tan Phong, District 7, Ho Chi Minh City
          </div>
        </div>
      </footer>
    </html>
  );
}
