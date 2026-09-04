"use client";

import { useState } from "react";
// import Image from "next/image";

import styles from "./SearchResult.module.css";
import CardComponent from "@Components/CardComponent/CardComponent";
import GameCardComponent from "@Components/GameCardComponent/GameCardComponent";
import SearchMenuMobileComponent from "@Components/SearchMenuComponent/SearchMenuMobileComponent";
import { TrendingGameInterface } from "@app-types/Games";

interface Props {
  data: TrendingGameInterface[];
  loading: boolean;
}

export default function SearchResultComponent({
  data,
  loading,
}: Readonly<Props>) {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className={styles.search_component}>
      <div className="search_haed flex items-center">
        <div className="w-full md:w-4/5">
          <input
            type="text"
            name="search"
            className={styles.search_input}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search..."
          />
        </div>
        <div className="hidden lg:block 1/5">
          <div className="ml-2 ascDesc p-2 border border-black w-10 flex justify-center cursor-pointer">
            ↓
          </div>
          {/* ↑ */}
        </div>
      </div>

      {/* MOBILE AND  TAB */}
      <div className="flex lg:hidden mt-4">
        <SearchMenuMobileComponent>
          <div className="flex justify-center items-center border p-2 w-30">
            <svg
              className="w-5 h-5 text-gray-500 mr-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://w3.org"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
              />
            </svg>
            Filters
          </div>
        </SearchMenuMobileComponent>

        <div className="1/5">
          <div className="ml-2 ascDesc p-2 border border-black w-10 flex justify-center cursor-pointer">
            ↓
          </div>
          {/* ↑ */}
        </div>
      </div>
      {/* MOBILE AND TAB END */}

      <div className="mt-5 mb-5 text-sm text-[#626262]">26,393 games found</div>

      {/* {data?.map((game) => ( */}
        <GameCardComponent data={data} loading={loading} />
      {/* ))} */}
    </div>
  );
}
