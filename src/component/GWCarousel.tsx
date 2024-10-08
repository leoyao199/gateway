"use client";
import { CSSProperties, useCallback, useEffect, useMemo, useState } from "react";
import GWCarouselPage from "./GWCarouselPage";
import useEmblaCarousel from "embla-carousel-react";
import { useWindowSize } from "./hooks/useWindowSize";
import styles from "../style/landing.module.css"
import { GwLanguage } from "@/interface";

class Style {
  content = {
    maxWidth:'100%',
    height: '100%',
    overflow: "hidden",
  };
  bottomBar = {
    height: 23,
    width: this.content.maxWidth,
    display: "flex",
  };
  mobileBottomBarHeight = 26
  createStyleSheet (isMobile: boolean){
    return {
      bg: { display: "flex", justifyContent: "center" },
      content: {
        ...this.content,
        width: isMobile ? "100vw" : this.content.maxWidth,
        height: isMobile ? 285 + this.mobileBottomBarHeight + 240 +60: this.content.height,
        position: isMobile &&'relative'
      } as CSSProperties,
      bottomBar: {
        ...this.bottomBar,
        width: isMobile ? '100vw' : this.content.maxWidth,
        justifyContent: isMobile ? "center" : "flex-end",
      },
      bottomBarGroup: {
        display: "flex",
        alignItems: "center",
        justifyContent:'flex-end',
        position: isMobile ? 'absolute' : undefined,
        top: isMobile ? 285 + this.mobileBottomBarHeight/2 : undefined
      } as CSSProperties,
      bottomBarButton: {
        marginRight: 9,
        height: isMobile ? 6 : 8,
        width: isMobile ? 6 : 8,
        borderRadius: "50%",
        background: "#D9D9D9",
      } as CSSProperties,
      slider: {
        flex: "0 0 100%",
        minWidth: 0,
      },
      sliderContainer: {
        display: "flex",
      } as CSSProperties,
    };
  }
}

export default function GWCarousel(props: GWCarouselProps) {
  const { data } = props;
  const [pageNumber, setPageNumber] = useState(1);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const {isMobile} = useWindowSize()

  const onSelect = useCallback((emblaApi:any, eventName: string) => {
    const selectedScrollSnap = emblaApi.selectedScrollSnap()
    setPageNumber(selectedScrollSnap+1)
  }, [])

  const _s = useMemo(()=>{
    return new Style().createStyleSheet(isMobile)
  },[isMobile])

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", onSelect);
    }
  }, [emblaApi, onSelect])

  function onBarButtonClick(nextPageNumber: number) {
    if (nextPageNumber < 1) {
      setPageNumber(data.length);
      emblaApi&&emblaApi.scrollTo(data.length - 1)
    } else if (data.length >= nextPageNumber) {
      setPageNumber(nextPageNumber);
      emblaApi&&emblaApi.scrollTo(nextPageNumber -1)
    } else {
      setPageNumber(1);
      emblaApi&&emblaApi.scrollTo(1)
    }
  }

  return (
    <div style={_s.bg} className={props.className}>
      <div style={{ ..._s.content }} ref={emblaRef}>
        <div style={_s.sliderContainer}>
          {data.map((data, index) => (
            <div key={`${index}_ slider`} style={_s.slider}>
              <GWCarouselPage
                lng={props.lng}
                key={`GWCarousel_GWCarouselPage_${index}`}
                imageUrl={isMobile ? data.mobileImageUrl : data.imageUrl}
                content={data.content}
              />
            </div>
          ))}
        </div>
        <div
          style={{
            ..._s.bottomBar,
          }}
        >
          <div style={_s.bottomBarGroup}>
            {data.map((d, index) => (
              <div
                style={{
                  ..._s.bottomBarButton,
                  backgroundColor:
                    index === pageNumber - 1 ? "#FF772A" : "#D9D9D9",
                }}
                onClick={() => onBarButtonClick(index + 1)}
                key={`GWCarousel_bottomBarButton_${index}`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export interface GWCarouselProps {
  lng: GwLanguage
  data: {
    imageUrl: string;
    mobileImageUrl: string;
    content: { title: string; content: string };
  }[];
  className?: string
}
