"use client";

import * as React from "react";
import styles from "./Card.module.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { TrendingGameInterface } from "@app-types//Games";
import CardSkeletonComponent from "@/src/app/Components/SkeletonComponent/CardSkeletonComponent";

interface Props {
  data: TrendingGameInterface[];
  loading: boolean;
}

export default function CardComponent({ data, loading }: Readonly<Props>) {
  const [ref] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 1,
      spacing: 10,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2, spacing: 12 },
      },
      "(min-width: 768px)": {
        slides: { perView: 3, spacing: 15 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 4, spacing: 15 },
      },
    },
  });

  if (loading || !data) {
    return <CardSkeletonComponent />;
  }

  return (
    <div ref={ref} className="keen-slider">
      {data.map((game, index) => (
        <div
          key={game.id}
          className={`keen-slider__slide relative h-48 w-full rounded-lg overflow-hidden group cursor-pointer ${styles.cardImage}`}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10 flex flex-col justify-end p-4">
            <span className="relative z-10 text-white font-semibold text-lg drop-shadow-md">
              {game.name || "GTA 5"}
            </span>
          </div>

          <Image
            src={game?.background_image}
            alt={game?.name || `Slide ${index + 1}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
            className="object-cover transform transition-transform duration-500 ease-out group-hover:scale-110"
          />
        </div>
      ))}
    </div>
  );
}
