"use client";
import { CSSProperties, useCallback, useEffect, useState } from "react";
import GWCarouselPage, { GWCarouselPageProps } from "./GWCarouselPage";
import useEmblaCarousel, { EmblaCarouselType } from "embla-carousel-react";

class Style {
  bg = { display: "flex", justifyContent: "center" };
  content = {
    maxWidth: 1032,
    height: 614,
    overflow: "hidden",
  };
  bottomBar = {
    height: 23,
    width: this.content.maxWidth,
    display: "flex",
    justifyContent: "flex-end",
  };
  bottomBarGroup = {
    display: "flex",
    alignItems: "center",
  };
  bottomBarButton = {
    height: 8,
    width: 8,
    borderRadius: "50%",
    background: "#D9D9D9",
    marginRight: 17,
  };
  slider = {
    flex: "0 0 100%",
    minWidth: 0,
  };
  sliderContainer = {
    display: "flex",
  };
}
const _s = new Style();

export default function GWCarousel(props: GWCarouselProps) {
  const { data } = props;
  const [pageNumber, setPageNumber] = useState(1);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const onSelect = useCallback((emblaApi:EmblaCarouselType, eventName: string) => {
    const selectedScrollSnap = emblaApi.selectedScrollSnap()
    setPageNumber(selectedScrollSnap+1)
  }, [])

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
    <div style={_s.bg}>
      <div style={{ ..._s.content }} ref={emblaRef}>
        <div style={_s.sliderContainer}>
          {data.map((data, index) => (
            <div key={`${index}_ slider`} style={_s.slider}>
              <GWCarouselPage
                key={`GWCarousel_GWCarouselPage_${index}`}
                imageUrl={
                  data.imageUrl
                }
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
  // data: GWCarouselPageProps[];
  data: any[];
}
