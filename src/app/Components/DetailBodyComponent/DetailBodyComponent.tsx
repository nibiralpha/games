'use client';
import React, { useEffect } from 'react';
import styles from './Search.module.css';
import HeaderComponent from '@/src/app/Components/HeaderComponent/HeaderComponent';
import SearchMenuComponent from '@/src/app/Components/SearchMenuComponent/SearchMenuComponent';
import SearchResultComponent from '@/src/app/Components/SearchResultComponent/SearchResultComponent';
import SearchMenuMobileComponent from '@/src/app/Components/SearchMenuComponent/SearchMenuMobileComponent';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/src/redux/Store';
import { fetchSearcheddGames } from '@/src/app/Services/Games';
import Image from 'next/image';
import RatingComponent from '@/src/app/Components/RatingComponent/RatingComponent';
import PlatformComponent from '@Components/PlatformComponent/PlatformComponent';

// import useGames from "@/src/app/Hooks/useGames";

export default function DetailBodyComponent() {
  const dispatch = useDispatch<AppDispatch>();
  // const { searchedGames } = useGames();

  const description = `The third game in a series, it holds nothing back from the player. Open world adventures of the renowned monster slayer Geralt of Rivia are now even on a larger scale. Following the source material more accurately, this time
        Geralt is trying to find the child of the prophecy, Ciri while making a quick coin from various contracts on the
        side. Great attention to the world building above all creates an immersive story, where your decisions will
        shape the world around you.\n\nCD Project Red are infamous for the amount of work they put into their games, and
        it shows, because aside from classic third-person action RPG base game they provided 2 massive DLCs with unique
        questlines and 16 smaller DLCs, containing extra quests and items.\n\nPlayers praise the game for its atmosphere
        and a wide open world that finds the balance between fantasy elements and realistic and believable mechanics,
        and the game deserved numerous awards for every aspect of the game, from music to direction.`;

  const fetchData = () => {
    // dispatch(fetchSearcheddGames());
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="mt-20">
      <div>
        <div className="text-3xl font-semibold">About this Game</div>
        <div className="mt-5 w-[80px] h-[7px] bg-[lab(75_-4.48_-40.84)] rounded-lg"></div>
        <div className="mt-5 w-2/3 mb-10 whitespace-pre-line">{description}</div>
      </div>

      <div className="">
        <div className="flex items-center mb-2">
          <div className="mr-2">
            <Image src={'/platforms.svg'} alt="icon" height={40} width={40} />
          </div>
          <div className="text-xl font-semibold">Platforms</div>
        </div>
        <div className="flex mb-10">
          <div className='mr-3'>
            <PlatformComponent img="/apple.svg" name="PC" alias="pc" />
          </div>
          <div className='mr-3'>
            <PlatformComponent img="/windows.svg" name="PC" alias="pc" />
          </div>
        </div>

         <div className="flex items-center mb-2">
          <div className="mr-2">
            <Image src={'/genra.svg'} alt="icon" height={40} width={40} />
          </div>
          <div className="text-xl font-semibold">Genra</div>
        </div>
        <div className="flex mb-10">
          <div className='mr-3'>
            <PlatformComponent name="Action" alias="action" />
          </div>
          <div className='mr-3'>
            <PlatformComponent name="Adventure" alias="adventure" />
          </div>
        </div>
      </div>
    </div>
  );
}
