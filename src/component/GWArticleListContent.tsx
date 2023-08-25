"use client";
import GWHeader from "@/component/GWHeaderContent";
import GWEventList from "@/component/GWEventList";
import { IArticleRes, IEventRes, ITagRes } from "@/interface";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import nodeFetch from "@/nodeFetch";
import GWArticleCard from "./GWArticleCard";
import GWTagSelector from "./GWTagSelector";
import { globalVariable } from "@/app/global";

export default function GWArticleListContent(props: {
  lng: "en" | "vn";
  dictionary: Record<string, string>;
}) {
  const { lng, dictionary } = props;
  const t = (text: string) => dictionary[text];
  const [articlesData, setArticlesData] = useState<IArticleRes[]>();
  const [selectedTag, setSelectedTag] = useState<string>("All Posts");
  const [tags, setTags] = useState<ITagRes[]>([]);
  const router = useRouter();
  async function getArticleData(ISelectedTag?: string) {
    if (selectedTag && selectedTag !== "All Posts"){
      const res = await nodeFetch(
        process.env.BASE_URL + "/api/articles?populate=tags&populate=coverImage&filters[tags][en_name][$in]="+selectedTag
      );
      return res.json();
    }
    const res = await nodeFetch(
      process.env.BASE_URL + "/api/articles?populate=coverImage&populate=tags"
    );

    return res.json();
  }

  async function getTag() {
    const res = await nodeFetch(process.env.BASE_URL + "/api/tags");
    return res.json();
  }

  useEffect(() => {
    const res = getArticleData();
    res.then((result) => {
      setArticlesData(result.data);
    });
    const resTag = getTag();
    resTag.then((result) => {
      if (result.data) {
        setTags(result.data);
      }
    });
  }, []);

  useEffect(() => {
    const res = getArticleData(selectedTag);
    res.then((result) => {
      if (result&&result.data){
        setArticlesData(result.data);
      }
    });
  },[selectedTag])

  const tabData = useMemo(() => {
    const result = [
      {
        label: t("All Posts"),
        onClick: () =>
          selectedTag === "All Posts" ? undefined : setSelectedTag("All Posts"),
      },
    ];
    for (let tag of tags) {
      result.push({
        label: tag.attributes[lng === "vn" ? "vn_name" : "en_name"],
        onClick: () => {
          selectedTag != tag.attributes.en_name
            ? setSelectedTag(tag.attributes.en_name)
            : setSelectedTag("ALL Posts");
        },
      });
    }
    return result;
  }, [tags]);

  return (
    <div>
      <div
        style={{
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          paddingTop:
            innerWidth > globalVariable.middleLargeScreenWidth ? 30 : 20,
        }}
      >
        <GWTagSelector allTag={tabData} selectedTag={selectedTag} />
        {articlesData &&
          articlesData.map((article, index) => (
            <GWArticleCard
              lng={lng}
              tags={article.attributes.tags}
              coverImage={article.attributes.coverImage.data.attributes.url}
              key={`${index}_article`}
              title={
                lng === "vn"
                  ? article.attributes.vn_title
                  : article.attributes.title
              }
              description={
                lng === "vn"
                  ? article.attributes.vn_description
                  : article.attributes.description
              }
              onClick={() => router.push(`/${lng}/articles/${article.id}`)}
              date={article.attributes.date}
            />
          ))}
      </div>
    </div>
  );
}
