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

// import useGames from "@/src/app/Hooks/useGames";

export default function SearchPage() {
  const dispatch = useDispatch<AppDispatch>();
  // const { searchedGames } = useGames();

  const fetchData = () => {
    // dispatch(fetchSearcheddGames());
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="page-details">
      <HeaderComponent />
      <div className="container-main">
        <div className="flex mt-8">
          <div className="w-1/4">
            <div className="relative w-[250px] h-[350px] overflow-hidden group">
              <Image
                src={'/co7n02.jpg'}
                alt={'test'}
                fill
                // width={300}
                // height={1}
                // sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                // className="object-cover transform transition-transform duration-500 ease-out group-hover:scale-110"
              />
            </div>
          </div>
          <div className="w-3/4 mt-5">
            <div className="text-4xl font-semibold">Witcher 3: The wild hunt</div>
            <div className="flex items-center gap-2 rating mt-10 w-max">
              <RatingComponent data="4.5" imgSrc="/star.svg" />
              <RatingComponent data="Metacritic 92" imgSrc="/metacritics.svg" />
            </div>
            <div className="flex items-center gap-2 rating mt-4 w-max">
              <RatingComponent data="Action" />
              <RatingComponent data="RPG" />
              <RatingComponent data="Open World" />
              <RatingComponent data="Fantasy" />
            </div>
            <div className="mt-15">
              <div className="flex items-center">
                <div className="">
                  <Image src={'/calender.svg'} alt="icon" height={20} width={20} />
                </div>
                <div className="ml-2 flex">
                  <div className='mr-2 font-semibold'>Released: </div>
                  <div> May 18, 2015</div>
                </div>
              </div>

              <div className="flex mt-2">
                <div className="">
                  <Image src={'/user_group.svg'} alt="icon" height={20} width={20} />
                </div>
                <div className="ml-2 flex">
                  <div className='mr-2 font-semibold'>Developer: </div>
                  <div> CD PROJECT RED</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
