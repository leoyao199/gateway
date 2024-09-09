import GWLandingContent from "@/component/GWLandingContent";
import { getDictionary } from "../i18n/get-dictionary";
import nodeFetch from "@/nodeFetch";
import { GwLanguage } from "@/interface";


export default async function Home({params: {lng}}:{params: {lng:GwLanguage}}) {
  const dictionary = await getDictionary(lng)
  async function getCarouselData() {
    const res = await nodeFetch(
      process.env.BASE_URL + "/api/landing?populate=page&populate=page.image"
    );
    return await res.json();
  }

  const carouselData = await getCarouselData().then((res) => {
        const pageData = res.data.attributes.page.map((data: any) => ({
          imageUrl: lng === "en" ?  data.image.data.attributes.url : (data[`${lng}_image`] ?? data.image).data.attributes.url ,
          mobileImageUrl: lng === "en" ?  data.image.data.attributes.formats.medium.url : (data[`${lng}_image`] ?? data.image).data.attributes.formats.medium.url,
          content: {
            title: lng === "en" ?  data.title : data[`${lng}_title`] ?? data.title,
            content: lng === "en" ?  data.context : data[`${lng}_context`] ?? data.context,
          },
        }));
        return (pageData);
    });

  return (
      <GWLandingContent dictionary={dictionary} lng={lng} carousel={carouselData}/>
  );
}