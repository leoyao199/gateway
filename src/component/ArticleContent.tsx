"use client";
import GWHeader from "@/component/GWHeaderContent";
import { IArticleRes, IEventRes } from "@/interface";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import formImage from "../../public/formImage.jpg";
import { CSSProperties, useCallback, useEffect, useMemo, useState } from "react";
import { useWindowSize } from "./hooks/useWindowSize";
import { globalVariable } from "@/app/global";
import { useTranslation } from "@/app/i18n/client";
import nodeFetch from "@/nodeFetch";
import GWArticleCard from "./GWArticleCard/GWArticleCard";
import useEmblaCarousel, { EmblaCarouselType } from "embla-carousel-react";

async function GetArticle(id: number) {
  const res = await nodeFetch(
    `${process.env.BASE_URL}/api/articles/${id}?populate=coverImage&populate=tags`
  );
  const result = await res.json();
  return result;
}

export default function GWArticleContent(props: {
  lng: "vn" | "en";
  id: number;
}) {
  const { lng, id } = props;
  const { innerHeight, innerWidth, isMobile } = useWindowSize();
  const [article, setArticle] = useState<IArticleRes>();
  const { t } = useTranslation(lng);
  const router = useRouter();
  const [pageNumber, setPageNumber] = useState(1);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const s = {
    bottomBarGroup: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      position: isMobile ? "absolute" : undefined,
    } as CSSProperties,
    bottomBarButton: {
      height: isMobile ? 6 : 8,
      width: isMobile ? 6 : 8,
      borderRadius: "50%",
      background: "#D9D9D9",
      marginRight: 11,
    } as CSSProperties,
    slider: {
      flex: "0 0 100%",
      minWidth: 0,
    },
  };


  const onSelect = useCallback((emblaApi:EmblaCarouselType, eventName: string) => {
    const selectedScrollSnap = emblaApi.selectedScrollSnap()
    setPageNumber(selectedScrollSnap+1)
  }, [])

  useEffect(() => {
    const article = GetArticle(id);
    article.then((res) => {
      const data = res.data;
      data.attributes = {
        ...data.attributes,
        relatedArticle: [res.data, res.data, res.data],
      };
      setArticle(data);
    });
  }, []);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", onSelect);
    }
  }, [emblaApi, onSelect])
  

  function onBarButtonClick(nextPageNumber: number) {
    if (!article || !article.attributes.relatedArticle) {
      return;
    }
    if (nextPageNumber < 1) {
      setPageNumber(article.attributes.relatedArticle.length);
      emblaApi &&
        emblaApi.scrollTo(article.attributes.relatedArticle.length - 1);
    } else if (article.attributes.relatedArticle.length >= nextPageNumber) {
      setPageNumber(nextPageNumber);
      emblaApi && emblaApi.scrollTo(nextPageNumber - 1);
    } else {
      setPageNumber(1);
      emblaApi && emblaApi.scrollTo(1);
    }
  }

  const ArticleTranslate = (lng: string, articleRes: IArticleRes) => {
    const IArticle = articleRes.attributes;
    switch (lng) {
      case "vn":
        return {
          ...IArticle,
          title: IArticle.vn_title,
          content: IArticle.vn_content,
          date: IArticle.date,
        };
      default:
        return IArticle;
    }
  };
  if (!article) return <></>;
  const translateArticle = ArticleTranslate(lng, article);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        width: "100vw",
      }}
    >
      <div
        style={{
          marginTop: isMobile ? 27 : 69,
          fontSize: isMobile ? 13 : 16,
          fontWeight: 400,
          lineHeight: 1.4,
          marginBottom: 5,
          width: isMobile ? 319 : 858,
        }}
      >
        {translateArticle.date}
        <div
          style={{
            fontSize: isMobile ? 22 : 35,
            fontWeight: 600,
            marginBottom: isMobile ? 6 : 13,
            maxWidth: isMobile ? 320 : 858,
          }}
        >
          {translateArticle.title}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginBottom: isMobile ? 11 : 20,
            width: isMobile ? 319 : 858,
          }}
        >
          {article.attributes.tags &&
            article.attributes.tags.data.map((tag, index) => (
              <div
                style={{
                  fontSize: isMobile ? 13 : 12,
                  fontWeight: isMobile ? 400 : 300,
                  lineHeight: 1.4,
                  marginRight: isMobile ? 13 : 20,
                }}
                key={`GWTag in ArticleCard${index}`}
              >
                #{tag.attributes[props.lng === "vn" ? "vn_name" : "en_name"]}
              </div>
            ))}
        </div>
        <Image
          src={translateArticle.coverImage.data.attributes.url}
          alt={""}
          width={isMobile ? 319 : 858}
          height={isMobile ? 239 : 510}
          style={{ objectFit: "cover", maxWidth: "100vw", borderRadius: 16 }}
        />
        <div
          style={{
            width: isMobile ? 319 : 858,
            marginBottom: isMobile ? 48 : 114,
            maxWidth: "100vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: isMobile ? 25 : 50,
          }}
        >
          <div
            dangerouslySetInnerHTML={{ __html: translateArticle.content }}
            style={{ lineHeight: 2 }}
          ></div>
        </div>
      </div>
      {article.attributes.relatedArticle && (
        <div>
          <div
            style={{
              fontSize: 35,
              fontWeight: 600,
              width: isMobile ? 319 : 1032,
              marginBottom: 21,
            }}
          >
            {t("More Articles")}
          </div>
          {isMobile ? (
            <div>
              
              <div ref={emblaRef} style={{  overflow: 'hidden'}}>
                <div style={{display:'flex', maxWidth:'100vw'}}> 

                {article.attributes.relatedArticle.map((a, index) => (
                  <div style={s.slider}>
                  <GWArticleCard
                    mobileMode
                    lng={lng}
                    tags={a.attributes.tags}
                    coverImage={
                      a.attributes.coverImagePreview
                      ? a.attributes.coverImagePreview.data.attributes.url
                      : a.attributes.coverImage.data.attributes.url
                    }
                    key={`${index}_article`}
                    title={
                      lng === "vn"
                      ? a.attributes.vn_title
                      : article.attributes.title
                    }
                    description={
                      lng === "vn"
                      ? a.attributes.vn_description
                      : a.attributes.description
                    }
                    onClick={() => router.push(`/${lng}/articles/${a.id}`)}
                    date={a.attributes.date}
                    buttonLabel={t("More Details")}
                    />
                  </div>
                ))}
              </div>
                </div>
                <div style={{display:'flex', justifyContent:'center'}}>
              <div style={s.bottomBarGroup}>
                {article.attributes.relatedArticle.map((d, index) => (
                  <div
                    style={{
                      ...s.bottomBarButton,
                      backgroundColor:
                        index === pageNumber - 1 ? "#FF772A" : "#D9D9D9",
                    }}
                    onClick={() => onBarButtonClick(index + 1)}
                    key={`GWCarousel_bottomBarButton_${index}`}
                  ></div>
                ))}
              </div>
              </div>
              <div style={{height: 20, width: '100vw'}}>
            </div>
            </div>
          ) : (
            <div style={{ display: "flex", width: 1032, flexWrap: "wrap" }}>
              {article.attributes.relatedArticle.map((a, index) => (
                <GWArticleCard
                  mobileMode
                  lng={lng}
                  tags={a.attributes.tags}
                  coverImage={
                    a.attributes.coverImagePreview
                      ? a.attributes.coverImagePreview.data.attributes.url
                      : a.attributes.coverImage.data.attributes.url
                  }
                  key={`${index}_article`}
                  title={
                    lng === "vn"
                      ? a.attributes.vn_title
                      : article.attributes.title
                  }
                  description={
                    lng === "vn"
                      ? a.attributes.vn_description
                      : a.attributes.description
                  }
                  onClick={() => router.push(`/${lng}/articles/${a.id}`)}
                  date={a.attributes.date}
                  buttonLabel={t("More Details")}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
