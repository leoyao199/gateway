"use client";
import GWHeader from "@/component/GWHeaderContent";
import GWEventList from "@/component/GWEventList";
import { IArticleRes, IEventRes } from "@/interface";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import nodeFetch from "@/nodeFetch";
import GWArticleCard from "./GWArticleCard";

export default function GWArticleListContent(props: { lng: string }) {
  const { lng } = props;
  const [articlesData, setArticlesData] = useState<IArticleRes[]>();
  async function getArticleData() {
    const res = await nodeFetch(
      process.env.BASE_URL + "/api/articles?populate=coverImage"
    );

    return res.json();
  }
  useEffect(() => {
    const res = getArticleData();
    res.then((result) => {
      setArticlesData(result.data);
      console.log(result.data);
    });
  }, []);
  const router = useRouter();
  // const headerData = [
  //   { text: "About Us", onClick: () => router.push(`/${lng}`) },
  //   { text: "Our Services", onClick: () => router.push(`/${lng}`) },
  //   { text: "Articles", onClick: () => router.push(`articles`) },
  //   { text: "Event", onClick: () => router.push(`event`) },
  //   { text: "Contact us", onClick: () => router.push(`/${lng}`) },
  // ];

  return (
    <div>
      {/* <GWHeader data={headerData} lng={lng} /> */}
      <div
        style={{
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {articlesData &&
          articlesData.map((article, index) => (
            <GWArticleCard
              coverImage={article.attributes.coverImage.data.attributes.url}
              key={`${index}_article`}
              title={article.attributes.title}
              description={article.attributes.description}
              onClick={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
          ))}
      </div>
    </div>
  );
}
