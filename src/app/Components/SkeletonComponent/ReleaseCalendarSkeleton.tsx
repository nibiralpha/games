"use client";

import * as React from "react";

export default function ReleaseCalendarSkeleton() {
  // Create an array list containing 10 slots to mimic the sliced payload rows
  const skeletonRows = Array.from({ length: 10 });

  return (
    <div className="w-full max-w-6xl mx-auto mb-30 select-none pointer-events-none">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div>
          <div className="h-6 w-32 rounded bg-neutral-800 mb-2" />
          <div className="h-4 w-20 rounded bg-neutral-800/60 mb-5" />

          {skeletonRows.map((_, idx) => (
            <div key={`col1-skel-${idx}`} className="mb-5 flex gap-4">
              <div className="flex-shrink-0 w-[100px] h-[100px] relative rounded-lg overflow-hidden bg-neutral-800">
                <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              </div>
              <div className="mt-1 flex-1 flex flex-col gap-2">
                <div className="relative h-4 w-4/5 rounded bg-neutral-800 overflow-hidden">
                  <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </div>
                <div className="relative h-4 w-1/2 rounded bg-neutral-800/50 overflow-hidden">
                  <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <div className="h-6 w-32 rounded bg-neutral-800 mb-2" />
          <div className="h-4 w-20 rounded bg-neutral-800/60 mb-5" />

          {skeletonRows.map((_, idx) => (
            <div key={`col2-skel-${idx}`} className="mb-5 flex gap-4">
              <div className="flex-shrink-0 w-[100px] h-[100px] relative rounded-lg overflow-hidden bg-neutral-800">
                <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              </div>
              <div className="mt-1 flex-1 flex flex-col gap-2">
                <div className="relative h-4 w-4/5 rounded bg-neutral-800 overflow-hidden">
                  <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </div>
                <div className="relative h-4 w-1/3 rounded bg-neutral-800/50 overflow-hidden">
                  <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <div className="h-6 w-36 rounded bg-neutral-800 mb-2" />
          <div className="h-4 w-28 rounded bg-neutral-800/60 mb-5" />

          {skeletonRows.map((_, idx) => (
            <div key={`col3-skel-${idx}`} className="mb-5 flex gap-4">
              <div className="flex-shrink-0 w-[100px] h-[100px] relative rounded-lg overflow-hidden bg-neutral-800">
                <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              </div>
              <div className="mt-1 flex-1 flex flex-col gap-2">
                <div className="relative h-4 w-3/4 rounded bg-neutral-800 overflow-hidden">
                  <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </div>
                <div className="relative h-4 w-1/2 rounded bg-neutral-800/50 overflow-hidden">
                  <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}