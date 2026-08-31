"use client";

import HeaderComponent from "@Components/HeaderComponent/HeaderComponent";
import CardComponent from "@Components/CardComponent/CardComponent";
import ReleaseCalenderComponent from "@Components/ReleaseCalenderComponent/ReleaseCalenderComponent";
import { AppDispatch } from "@redux/Store";
import { useDispatch } from "react-redux";
import useGames from "@Hooks/useGames";
import { useEffect } from "react";
import { fetchTrendingGames } from "@Services/Games";
import { getCurrentMonthObject } from "@Helper/Functions";

export default function HomePage() {
  const dispatch = useDispatch<AppDispatch>();

  const { trendingGames } = useGames();  

  const fetchData = () => {
    dispatch(fetchTrendingGames())
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="">
      <HeaderComponent />

      <div className="container">
        <div className="mt-10">
          <div className="section">
            <div className="section_title weight-600">Trending Games</div>
            <div className="text-sm">See more</div>
          </div>
          <div className="section mt-5">
            <CardComponent data={trendingGames?.list} loading={trendingGames?.loading}/>
          </div>
        </div>
        <div className="mt-10">
          <div className="section">
            <div className="section_title weight-600 capitalize">Out in {getCurrentMonthObject().name}</div>
            <div className="text-sm">See more</div>
          </div>
          <div className="section mt-5">
            <CardComponent data={trendingGames?.list} loading={trendingGames?.loading}/>
          </div>
        </div>
        <div className="mt-10">
          <div className="release_section">
            <div className="section_title weight-600">Release Calendar</div>
            <div className="section_detail">
              Whats new, coming soon, and most anticipated
            </div>
          </div>
          <div className="section mt-5">
            <ReleaseCalenderComponent />
          </div>
        </div>
      </div>
    </div>
  );
}
