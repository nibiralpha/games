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
import DetailHeaderComponent from '@/src/app/Components/DetailHeaderComponent/DetailHeaderComponent';

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
        <DetailHeaderComponent />
      </div>
    </div>
  );
}
