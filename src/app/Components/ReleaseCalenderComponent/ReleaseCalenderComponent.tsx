"use client";

import * as React from "react";
import styles from "./Card.module.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";

export default function ReleaseCalenderComponent() {
  return (
    <div className="w-full max-w-6xl mx-auto mb-30">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="">
          <h2 className="font-semibold">New Releases</h2>
          <p className="text-xs text-gray-400 mb-5">Last 60 days</p>

          <div className="mb-5">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Image
                  src="/co7n02.jpg"
                  width="100"
                  height="100"
                  alt="Author profile picture"
                />
              </div>
              <div className="mt-1">
                <div className="text-sm font-semibold">Cyberpunk Frontier</div>
                <div className="text-sm">July 10</div>
              </div>
            </div>
          </div>
          <div className="mb-5">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Image
                  src="/co7n02.jpg"
                  width="100"
                  height="100"
                  alt="Author profile picture"
                />
              </div>
              <div className="mt-1">
                <div className="text-sm font-semibold">Cyberpunk Frontier</div>
                <div className="text-sm">July 10</div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <h2 className="font-semibold">Coming Soon</h2>
          <p className="text-xs text-gray-400 mb-5">Last 60 days</p>

          <div className="mb-5">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Image
                  src="/co7n02.jpg"
                  width="100"
                  height="100"
                  alt="Author profile picture"
                />
              </div>
              <div className="mt-1">
                <div className="text-sm font-semibold">Cyberpunk Frontier</div>
                <div className="text-sm">July 10</div>
              </div>
            </div>
          </div>
          <div className="mb-5">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Image
                  src="/co7n02.jpg"
                  width="100"
                  height="100"
                  alt="Author profile picture"
                />
              </div>
              <div className="mt-1">
                <div className="text-sm font-semibold">Cyberpunk Frontier</div>
                <div className="text-sm">July 10</div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <h2 className="font-semibold">Most Anticipated</h2>
          <p className="text-xs text-gray-400 mb-5">Last 60 days</p>
          
          <div className="mb-5">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Image
                  src="/co7n02.jpg"
                  width="100"
                  height="100"
                  alt="Author profile picture"
                />
              </div>
              <div className="mt-1">
                <div className="text-sm font-semibold">Cyberpunk Frontier</div>
                <div className="text-sm">July 10</div>
              </div>
            </div>
          </div>
          <div className="mb-5">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Image
                  src="/co7n02.jpg"
                  width="100"
                  height="100"
                  alt="Author profile picture"
                />
              </div>
              <div className="mt-1">
                <div className="text-sm font-semibold">Cyberpunk Frontier</div>
                <div className="text-sm">July 10</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
