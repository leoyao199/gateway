"use client";
import GWHeader from "@/component/GWHeaderContent";
import GWEventList from "@/component/GWEventList";
import { GwLanguage, IArticleRes, IEventRes, ITagRes } from "@/interface";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import nodeFetch from "@/nodeFetch";
import GWArticleCard from "./GWArticleCard/GWArticleCard";
import GWTagSelector from "./GWTagSelector";
import { globalVariable } from "@/app/global";
import { useWindowSize } from "./hooks/useWindowSize";

const maxWidth = 746;

export default function GWArticleListContent(props: {
  lng: GwLanguage;
  dictionary: Record<string, string>;
}) {
  const { innerWidth } = useWindowSize();
  const { lng, dictionary } = props;
  const t = (text: string) => dictionary[text];
  const [articlesData, setArticlesData] = useState<IArticleRes[]>();
  const [selectedTag, setSelectedTag] = useState<string>("All Posts");
  const [tags, setTags] = useState<ITagRes[]>([]);
  const [page, setPage] = useState(1);
  const router = useRouter();
  const {isMobile} = useWindowSize()

  async function getArticleData(iSelectedTag:string) {
    const url =
      process.env.BASE_URL +
      "/api/articles?populate=coverImage&populate=coverImagePreview&populate=tags" +
      "&sort=createdAt:desc" +
      `&pagination[page]=${page}&pagination[pageSize]=10`;
    if (iSelectedTag && iSelectedTag !== "All Posts") {
      const res = await nodeFetch(
        url + "&filters[tags][en_name][$in]=" + iSelectedTag
      );
      return res.json();
    }
    const res = await nodeFetch(url);

    return res.json();
  }

  async function getTag() {
    const res = await nodeFetch(process.env.BASE_URL + "/api/tags");
    return res.json();
  }

  useEffect(() => {
    const res = getArticleData(selectedTag);
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
      if (result && result.data) {
        setArticlesData(result.data);
      }
    });
  }, [selectedTag]);

  const tabData = useMemo(() => {
    const result = [
      {
        label: t("All Posts"),
        onClick: () => setSelectedTag("All Posts"),
      },
    ];
    for (let tag of tags) {
      result.push({
        label: tag.attributes[`${lng}_name`]??tag.attributes.en_name,
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
          marginTop: 14,
        }}
      >
        <div
          style={{
            color: "#000",
            fontSize: 35,
            fontWeight: 600,
            marginTop: 46,
            marginBottom: 14,
            width: isMobile ? '100vw' : 746,
            alignSelf: "center",
            textAlign: isMobile ? 'center' : undefined
          }}
        >
          {t("Articles")}
        </div>
        <GWTagSelector allTag={tabData} selectedTag={selectedTag} />
        <div style={{ height: 54 }}></div>
        {articlesData &&
          articlesData.map((article, index) => (
            <GWArticleCard
              lng={lng}
              tags={article.attributes.tags}
              coverImage={
                article.attributes.coverImagePreview.data
                  ? article.attributes.coverImagePreview.data.attributes.url : ''
              }
              key={`${index}_article`}
              title={
                lng === "en"
                  ? article.attributes.title
                  : article.attributes[`${lng}_title`] ?? article.attributes.title
              }
              description={
                lng === "en"
                  ? article.attributes.description
                  : article.attributes[`${lng}_description`] ?? article.attributes.description
              }
              onClick={() => router.push(`/${lng}/articles/${article.id}`)}
              date={article.attributes.date}
              buttonLabel={t("More Details")}
            />
          ))}
      </div>
    </div>
  );
}
