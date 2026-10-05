'use client';

import React from 'react';

export default function DetailBodySkeletonComponent() {
  return (
    <div className="mt-20 w-full relative overflow-hidden">
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />

      <div>
        <div className="text-3xl font-semibold">About this Game</div>
        <div className="mt-5 w-[80px] h-[7px] bg-[lab(75_-4.48_-40.84)] rounded-lg opacity-40" />

        <div className="mt-5 w-2/3 mb-10 flex flex-col gap-2">
          <div className="h-4 w-full rounded bg-neutral-700/60" />
          <div className="h-4 w-11/12 rounded bg-neutral-700/60" />
          <div className="h-4 w-4/5 rounded bg-neutral-700/60" />
          <div className="h-4 w-5/6 rounded bg-neutral-700/60" />
        </div>
      </div>

      <div>
        <div className="flex items-center mb-2 gap-2">
          <div className="h-10 w-10 rounded-full bg-neutral-700/60" />
          <div className="h-6 w-28 rounded bg-neutral-700/60" />
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          <div className="h-[52px] w-36 rounded-[10px] bg-neutral-800" />
          <div className="h-[52px] w-28 rounded-[10px] bg-neutral-800" />
          <div className="h-[52px] w-32 rounded-[10px] bg-neutral-800" />
        </div>

        <div className="flex items-center mb-2 gap-2">
          <div className="h-10 w-10 rounded-full bg-neutral-700/60" />
          <div className="h-6 w-28 rounded bg-neutral-700/60" />
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          <div className="h-[52px] w-24 rounded-[10px] bg-neutral-800" />
          <div className="h-[52px] w-28 rounded-[10px] bg-neutral-800" />
          <div className="h-[52px] w-20 rounded-[10px] bg-neutral-800" />
        </div>
      </div>
    </div>
  );
}
