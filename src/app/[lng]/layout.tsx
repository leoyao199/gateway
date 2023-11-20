import "./globals.css";
import { Inter } from "next/font/google";
import { dir } from "i18next";
import { GWFooter } from "@/component/GWFooter";
import { color } from "../theme";
import { getDictionary } from "../i18n/get-dictionary";
import GWHeader from "@/component/GWHeader";
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

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

export default async function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: {
    lng: string;
  };
}) {
  const dictionary = await getDictionary(lng === 'vn' ? 'vn': 'en')
  return (
    <html lang={lng} dir={dir(lng)}>
      <link rel="icon" href="/favicon.ico" sizes="any" />

      <body className={inter.className} style={{padding:0, margin:0}}>
        <GWHeader lng={lng}dictionary={dictionary} />
        {/* {children} */}
      </body>

      <div className={inter.className}>
        <GWFooter dictionary={dictionary} lng={lng} />
      </div>
    </html>
  );
}
