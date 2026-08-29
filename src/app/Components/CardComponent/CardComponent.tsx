"use client";

import * as React from "react";
import styles from "./Card.module.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";

export default function CardComponent() {
  const [ref] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 1,
      spacing: 10,
    },
    breakpoints: {
      // Tablets
      "(min-width: 640px)": {
        slides: { perView: 2, spacing: 12 },
      },
      // Medium screens
      "(min-width: 768px)": {
        slides: { perView: 3, spacing: 15 },
      },
      // Large screens/Desktops
      "(min-width: 1024px)": {
        slides: { perView: 4, spacing: 15 },
      },
    },
  });

  const imageUrls = Array(6).fill(
    "https://images.unsplash.com/photo-1718579044120-34c8a70e8e5a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0",
  );

  return (
    <div ref={ref} className="keen-slider">
      {imageUrls.map((url, index) => (
        <div
          key={index}
          className={`keen-slider__slide relative h-48 w-full ${styles.cardImage}`}
        >
          <Image
            src={url}
            alt={`Slide ${index + 1}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
