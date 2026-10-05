'use client';
import React, { useEffect } from 'react';
import styles from './Details.module.css';
import HeaderComponent from '@/src/app/Components/HeaderComponent/HeaderComponent';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/src/redux/Store';
import DetailHeaderComponent from '@/src/app/Components/DetailHeaderComponent/DetailHeaderComponent';
import DetailBodyComponent from '@/src/app/Components/DetailBodyComponent/DetailBodyComponent';

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
        <DetailBodyComponent />
      </div>
    </div>
  );
}
