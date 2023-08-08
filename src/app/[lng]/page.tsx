import GWLandingContent from "@/component/GWLandingContent";
import { getDictionary } from "../i18n/get-dictionary";


export default async function Home({params: {lng}}:{params: {lng:'en'|'vn'}}) {
  const dictionary = await getDictionary(lng)
  return (
      <GWLandingContent dictionary={dictionary} />
  );
}