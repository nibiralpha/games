"use client";

import styles from "./Card.module.css";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { GameSectionsState } from "@app-types/Games";
import { formatGameReleaseDate } from "@Helper/Functions";
import ReleaseCalendarSkeleton from "@Components/SkeletonComponent/ReleaseCalendarSkeleton";

interface Props {
  data: GameSectionsState;
  loading: boolean;
}

export default function ReleaseCalenderComponent({
  data,
  loading,
}: Readonly<Props>) {
  
  if (loading || !data) {
    return <ReleaseCalendarSkeleton />
  }

  return (
    <div className="w-full max-w-6xl mb-30">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* New release */}
        <div>
          <h2 className="font-semibold">New Releases</h2>
          <p className="text-xs text-gray-400 mb-5">Last 60 days</p>

          {data.last60Days?.slice(0, 10).map((game) => (
            <div key={game?.id} className="mb-5">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-[100px] h-[100px] relative rounded-lg overflow-hidden group bg-neutral-800">
                  <Image
                    src={game?.background_image || "/no-img.png"}
                    width={100}
                    height={100}
                    alt={game?.name || "Game thumbnail"}
                    className="cursor-pointer object-cover w-full h-full transform transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>
                <div className="mt-1">
                  <div className="text-sm font-semibold cursor-pointer">{game?.name}</div>
                  <div className="text-sm text-[#9c9c9c] cursor-pointer">
                    {formatGameReleaseDate(game?.date)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coming soon */}
        <div>
          <h2 className="font-semibold">Coming Soon</h2>
          <p className="text-xs text-gray-400 mb-5">Next 60 days</p>

          {data.next60Days?.slice(0, 10).map((game) => (
            <div key={game?.id} className="mb-5">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-[100px] h-[100px] relative rounded-lg overflow-hidden group bg-neutral-800">
                  <Image
                    src={game?.background_image || "/no-img.png"}
                    width={100}
                    height={100}
                    alt={game?.name || "Game thumbnail"}
                    className="cursor-pointer object-cover w-full h-full transform transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>
                <div className="mt-1">
                  <div className="text-sm font-semibold cursor-pointer">{game?.name}</div>
                  <div className="text-sm text-[#9c9c9c] cursor-pointer">
                    {formatGameReleaseDate(game?.date)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Most anticipated */}
        <div>
          <h2 className="font-semibold">Most Anticipated</h2>
          <p className="text-xs text-gray-400 mb-5">By community hype</p>

          {data.mostAnticipated?.slice(0, 10).map((game) => (
            <div key={game?.id} className="mb-5">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-[100px] h-[100px] relative rounded-lg overflow-hidden group bg-neutral-800">
                  <Image
                    src={game?.background_image || "/no-img.png"}
                    width={100}
                    height={100}
                    alt={game?.name || "Game thumbnail"}
                    className="cursor-pointer object-cover w-full h-full transform transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>
                <div className="mt-1">
                  <div className="text-sm font-semibold cursor-pointer">{game?.name}</div>
                  <div className="text-sm text-[#9c9c9c] cursor-pointer">
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
