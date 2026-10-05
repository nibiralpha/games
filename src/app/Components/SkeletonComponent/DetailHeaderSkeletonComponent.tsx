"use client";

import React from 'react';
import styles from '../DetailHeaderComponent/DetailHeader.module.css';

export default function DetailHeaderSkeletonComponent() {
  return (
    <div className={`flex mt-8 w-full ${styles.page_detail} relative overflow-hidden`}>
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />

      <div className={`w-1/4 ${styles.image}`}>
        <div className="w-[250px] h-[350px] rounded-lg bg-neutral-800" />
      </div>

      <div className={`w-3/4 mt-5 ${styles.detail_content} flex flex-col`}>
        <div className="h-10 w-1/2 rounded bg-neutral-700/60" />

        <div className="flex flex-wrap items-center gap-2 mt-10">
          <div className="h-9 w-16 rounded-[50px] bg-neutral-700/60" />
          <div className="h-9 w-32 rounded-[50px] bg-neutral-700/60" />
        </div>

        <div className="flex flex-wrap items-center gap-2 mt-4">
          <div className="h-9 w-20 rounded-[50px] bg-neutral-700/60" />
          <div className="h-9 w-24 rounded-[50px] bg-neutral-700/60" />
          <div className="h-9 w-16 rounded-[50px] bg-neutral-700/60" />
        </div>

        <div className="mt-15 flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded bg-neutral-700/60" />
            <div className="h-5 w-48 rounded bg-neutral-700/60" />
          </div>

          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded bg-neutral-700/60" />
            <div className="h-5 w-64 rounded bg-neutral-700/60" />
          </div>
        </div>
      </div>
    </div>
  );
}