"use client";

import * as React from "react";
import "./Card.module.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export default function CardComponent() {
  const [ref] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 4,
      spacing: 15,
    },
  });
  return (
    <div ref={ref} className="keen-slider">
      <div className="keen-slider__slide number-slide1">
        <img
          src={"https://images.unsplash.com/photo-1718579044120-34c8a70e8e5a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
          className="h-48 w-full object-cover"
        />
      </div>
      <div className="keen-slider__slide number-slide2">
        <img
          src={"https://images.unsplash.com/photo-1718579044120-34c8a70e8e5a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
          className="h-48 w-full object-cover"
        />
      </div>
      <div className="keen-slider__slide number-slide2">
        <img
          src={"https://images.unsplash.com/photo-1718579044120-34c8a70e8e5a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
          className="h-48 w-full object-cover"
        />
      </div>
      <div className="keen-slider__slide number-slide2">
        <img
          src={"https://images.unsplash.com/photo-1718579044120-34c8a70e8e5a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
          className="h-48 w-full object-cover"
        />
      </div>
      <div className="keen-slider__slide number-slide2">
        <img
          src={"https://images.unsplash.com/photo-1718579044120-34c8a70e8e5a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
        //   alt={`Slide ${index + 1}`}
          className="h-48 w-full object-cover"
        />
      </div>
    </div>
  );
}
