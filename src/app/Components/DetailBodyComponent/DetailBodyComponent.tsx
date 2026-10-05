'use client';
import React, { useEffect } from 'react';
import styles from './DetailBody.module.css';

import Image from 'next/image';
import PlatformComponent from '@Components/PlatformComponent/PlatformComponent';
import { Game } from '@app-types/Games';
import DetailBodySkeletonComponent from '../SkeletonComponent/DetailBodySkeletonComponent';
interface Props {
  data: Game;
  loading: boolean;
}
export default function DetailBodyComponent({ data, loading }: Readonly<Props>) {
  if (loading) {
    return <DetailBodySkeletonComponent />;
  }

  return (
    <div className="mt-20">
      <div>
        <div className="text-3xl font-semibold">About this Game</div>
        <div className="mt-5 w-[80px] h-[7px] bg-[lab(75_-4.48_-40.84)] rounded-lg"></div>
        <div className={`${styles.desc} ${'mt-5 w-2/3 mb-10 whitespace-pre-line'}`}>{data?.description_raw}</div>
      </div>

      <div className="">
        <div className="flex items-center mb-2">
          <div className="mr-2">
            <Image src={'/platforms.svg'} alt="icon" height={40} width={40} />
          </div>
          <div className="text-xl font-semibold">Platforms</div>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {data?.platforms?.map((platform) => (
            <PlatformComponent
              key={platform.platform.id}
              img="/windows.svg"
              name={platform.platform.name}
              alias={platform.platform.name}
            />
          ))}
        </div>

        <div className="flex items-center mb-2">
          <div className="mr-2">
            <Image src={'/genra.svg'} alt="icon" height={40} width={40} />
          </div>
          <div className="text-xl font-semibold">Genra</div>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {data?.genres?.map((genra) => (
            <PlatformComponent key={genra.id} name={genra.name} alias={genra.name} />
          ))}
        </div>
      </div>
    </div>
  );
}
