"use client";
import React, { useEffect } from "react";
import styles from "./Search.module.css";
import HeaderComponent from "@/src/app/Components/HeaderComponent/HeaderComponent";
import SearchMenuComponent from "@/src/app/Components/SearchMenuComponent/SearchMenuComponent";
import SearchResultComponent from "@/src/app/Components/SearchResultComponent/SearchResultComponent";
import SearchMenuMobileComponent from "@/src/app/Components/SearchMenuComponent/SearchMenuMobileComponent";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/src/redux/Store";
import { fetchSearcheddGames } from "@/src/app/Services/Games";
import useGames from "@/src/app/Hooks/useGames";

export default function SearchPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { searchedGames } = useGames();

  const fetchData = () => {
    dispatch(fetchSearcheddGames());
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="page-details">
      <HeaderComponent />
      <div className="container-main">
        <div className="mt-10">
          <div className="">
            <div className="section_title weight-600">Discover</div>
            <div className="flex mt-8">
              {/* <div className="w-1/4 h-24 hidden lg:block"><SearchMenuComponent /></div> */}

              {/* Mobile Sidebar Menu */}
              <div className="block md:hidden mt-4">
                {/* <SearchMenuComponent /> */}
              </div>

              {/* Tablet Sidebar Menu */}
              <div className="hidden md:block lg:hidden mt-4">
                {/* <SearchMenuComponent /> */}
              </div>

              {/* Laptop/Desktop Sidebar Menu */}
              <div className="hidden lg:block w-1/4">
                <SearchMenuComponent />
              </div>

              <div className="w-full lg:w-3/4 h-24 lg:ml-8">
                <SearchResultComponent data={searchedGames?.list} loading={searchedGames?.loading} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
