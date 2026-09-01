"use client";

import * as React from "react";

export default function CardSkeletonComponent() {
  const placeholders = Array.from({ length: 4 });

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[10px] sm:gap-[12px] md:gap-[15px]">
      {placeholders.map((_, index) => (
        <div
          key={index}
          className="relative h-48 w-full rounded-lg bg-neutral-800 overflow-hidden"
        >
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          
          <div className="absolute bottom-0 left-0 w-full p-4 flex flex-col gap-2">
            <div className="h-5 w-2/3 rounded bg-neutral-700/60" />
          </div>
        </div>
      ))}
    </div>
  );
}