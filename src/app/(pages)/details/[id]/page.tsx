'use client';
import React, { useEffect } from 'react';
import styles from './Details.module.css';
import HeaderComponent from '@/src/app/Components/HeaderComponent/HeaderComponent';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/src/redux/Store';
import DetailHeaderComponent from '@/src/app/Components/DetailHeaderComponent/DetailHeaderComponent';
import DetailBodyComponent from '@/src/app/Components/DetailBodyComponent/DetailBodyComponent';
import { useParams } from 'next/navigation'; 
import { fetchGameDetail } from '@/src/app/Services/Games';
import useGames from '@/src/app/Selectors/useGames';

// import useGames from "@/src/app/Hooks/useGames";

export default function DetailsPage() {
  const params = useParams(); 
  const id = Number(params.id);
  
  const dispatch = useDispatch<AppDispatch>();
  const { gamesDetails } = useGames();

  const fetchData = (id: number) => {
    dispatch(fetchGameDetail(id));
  };

  useEffect(() => {
    fetchData(id);
    
  }, []);

  return (
    <div className="page-details">
      <HeaderComponent />
      <div className="container-main">
        <DetailHeaderComponent data={gamesDetails?.data} loading={gamesDetails?.loading}/>
        <DetailBodyComponent data={gamesDetails?.data} loading={gamesDetails?.loading}/>
      </div>
    </div>
  );
}
