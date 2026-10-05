'use client';
import React, { useEffect } from 'react';
import styles from './DetailHeader.module.css';
import HeaderComponent from '@/src/app/Components/HeaderComponent/HeaderComponent';
import SearchMenuComponent from '@/src/app/Components/SearchMenuComponent/SearchMenuComponent';
import SearchResultComponent from '@/src/app/Components/SearchResultComponent/SearchResultComponent';
import SearchMenuMobileComponent from '@/src/app/Components/SearchMenuComponent/SearchMenuMobileComponent';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/src/redux/Store';
import { fetchSearcheddGames } from '@/src/app/Services/Games';
import Image from 'next/image';
import RatingComponent from '@/src/app/Components/RatingComponent/RatingComponent';
import { Game } from '../../Types/Games';

// import useGames from "@/src/app/Hooks/useGames";

interface Props {
  data: Game;
  loading: boolean;
}

export default function DetailHeaderComponent({ data, loading }: Readonly<Props>) {
  return (
    <div className={`flex mt-8 ${styles.page_detail}`}>
      <div className={`w-1/4 ${styles.image}`}>
        <div className="relative w-[250px] h-[350px] overflow-hidden group">
          <Image src={data?.background_image} alt={'test'} fill />
        </div>
      </div>
      <div className={`w-3/4 mt-5 ${styles.detail_content}`}>
        <div className="text-4xl font-semibold">{data?.name}</div>

        <div className="flex flex-wrap items-center gap-2 rating mt-10">
          <RatingComponent data={data?.rating.toFixed(1)} imgSrc="/star.svg" />
          <RatingComponent data={`Metacritic ${data?.metacritic}`} imgSrc="/metacritics.svg" />
        </div>

        <div className="flex flex-wrap items-center gap-2 rating mt-4">
          {data?.genres.map((genra) => (
            <RatingComponent key={genra.id} data={genra?.name} />
          ))}
        </div>

        <div className="mt-15">
          <div className="flex items-center">
            <div className="">
              <Image src={'/calender.svg'} alt="icon" height={20} width={20} />
            </div>
            <div className="ml-2 flex">
              <div className="mr-2 font-semibold">Released: </div>
              <div>
                {data?.released &&
                  new Date(data.released).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
              </div>
            </div>
          </div>

          <div className="flex mt-2">
            <div className="">
              <Image src={'/user_group.svg'} alt="icon" height={20} width={20} />
            </div>
            <div className="ml-2 flex">
              <div className="mr-2 font-semibold">Developer: </div>
              <div>
                {data?.developers.map((developer) => (
                  <span key={developer.id}> {data?.developers?.map((developer) => developer.name).join(', ')}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
