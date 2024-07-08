import "./globals.css";
import { Inter } from "next/font/google";
import { dir } from "i18next";
import { GWFooter } from "@/component/GWFooter";
import { color } from "../theme";
import { getDictionary } from "../i18n/get-dictionary";
import GWHeader from "@/component/GWHeader";
import { GwLanguage } from "@/interface";
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
const gwLanguage = ["en", "vn","zh","cn"] as GwLanguage[];
const isGWLanguage = (value: string): value is GwLanguage => {
  return Object.values(gwLanguage).includes(value as GwLanguage);
};
export default async function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: {
    lng: string;
  };
}) {
  const isSupportedLanguage = isGWLanguage(lng)
  let dictionary
  if (isSupportedLanguage){
    dictionary = await getDictionary(lng)
  } else {
    dictionary = await getDictionary('en')
  }
  return (
    <html lang={lng} dir={dir(lng)}>
      <link rel="icon" href="/favicon.ico" sizes="any" />

      <body className={inter.className} style={{padding:0, margin:0,}}>
        <GWHeader lng={lng}dictionary={dictionary} />
        {children}
      </body>
      <footer className={inter.className} >
        <GWFooter dictionary={dictionary} lng={lng} />
      </footer>

    </html>
  );
}
