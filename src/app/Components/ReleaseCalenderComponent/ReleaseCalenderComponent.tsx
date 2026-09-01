"use client";

import * as React from "react";
import styles from "./Card.module.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import {
  GameSectionsState,
  LastNextAnticipatedInterface,
} from "@app-types/Games";
import { formatGameReleaseDate } from "@Helper/Functions";

interface Props {
  data: GameSectionsState;
  loading: boolean;
}

export default function ReleaseCalenderComponent({
  data,
  loading,
}: Readonly<Props>) {
  return (
    <div className="w-full max-w-6xl mx-auto mb-30">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="">
          <h2 className="font-semibold">New Releases</h2>
          <p className="text-xs text-gray-400 mb-5">Last 60 days</p>

          {data?.last60Days?.slice(0, 10).map((game) => (
            <div key={game?.id} className="mb-5">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Image
                    src={game?.background_image || "/no-img.png"}
                    width="100"
                    height="100"
                    alt="Author profile picture"
                  />
                </div>
                <div className="mt-1">
                  <div className="text-sm font-semibold">{game?.name}</div>
                  <div className="text-sm">
                    {formatGameReleaseDate(game?.date)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="">
          <h2 className="font-semibold">Coming Soon</h2>
          <p className="text-xs text-gray-400 mb-5">Next 60 days</p>

          {data?.next60Days?.slice(0, 10).map((game) => (
            <div key={game?.id} className="mb-5">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Image
                    src={game?.background_image || "/no-img.png"}
                    width="100"
                    height="100"
                    alt="Author profile picture"
                  />
                </div>
                <div className="mt-1">
                  <div className="text-sm font-semibold">{game?.name}</div>
                  <div className="text-sm">
                    {formatGameReleaseDate(game?.date)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="">
          <h2 className="font-semibold">Most Anticipated</h2>
          <p className="text-xs text-gray-400 mb-5">By community hype</p>

          {data?.mostAnticipated?.slice(0, 10).map((game) => (
            <div key={game?.id} className="mb-5">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Image
                    src={game?.background_image || "/no-img.png"}
                    width="100"
                    height="100"
                    alt="Author profile picture"
                  />
                </div>
                <div className="mt-1">
                  <div className="text-sm font-semibold">{game?.name}</div>
                  <div className="text-sm">
                    {formatGameReleaseDate(game?.date)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
