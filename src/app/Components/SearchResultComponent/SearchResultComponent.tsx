'use client';

import { useEffect, useRef, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import styles from './SearchResult.module.css';
import GameCardComponent from '@Components/GameCardComponent/GameCardComponent';
import SearchMenuMobileComponent from '@Components/SearchMenuComponent/SearchMenuMobileComponent';
import { SearchedGames } from '@app-types/Games';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/src/redux/Store';
import { hydrateFiltersFromUrl, setSearch } from '@/src/redux/SearchSlice';
import useGames from '@Selectors/useGames';
import { formatWithCommas } from '@Helper/Functions';

interface Props {
  data: SearchedGames;
  loading: boolean;
  onChange: (data: string) => void;

  // Function that loads the next page
  loadMore?: () => void;

  // Whether another page exists
  hasMore?: boolean;
}

export default function SearchResultComponent({ data, loading, onChange }: Readonly<Props>) {
  const dispatch = useDispatch<AppDispatch>();
  const { searchedOption } = useGames();

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [searchValue, setSearchValue] = useState('');

  const searchData = (text: string) => {
    setSearchValue(text);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      dispatch(setSearch({ search: text }));
    }, 1000);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const urlSearch = params.get('name') || '';

    dispatch(
      hydrateFiltersFromUrl({
        name: urlSearch,
      }),
    );

    /* eslint-disable-next-line react-hooks/set-state-in-effect */
    setSearchValue(urlSearch);
  }, [dispatch]);

  return (
    <div className={styles.search_component}>
      {/* SEARCH */}
      <div className="search_haed flex items-center">
        <div className="w-full md:w-4/5">
          <input
            type="text"
            name="search"
            className={styles.search_input}
            value={searchValue}
            onChange={(e) => searchData(e.target.value)}
            placeholder="Search..."
          />
        </div>
      </div>

      {/* MOBILE FILTER */}
      <div className="flex lg:hidden mt-4">
        <SearchMenuMobileComponent
          onChange={(data) => {
            onChange(data);
          }}
        >
          <div className="flex justify-center items-center border p-2 w-30">
            <svg
              className="w-5 h-5 text-gray-500 mr-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
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
      </div>

      <div className="mt-5 mb-5 text-sm text-[#626262]">{formatWithCommas(data?.count)} games found</div>

      {/* INFINITE SCROLL */}
      <InfiniteScroll
        dataLength={data?.list?.length}
        next={() => {
          console.log('NEXT CALLED');
        }}
        hasMore={true}
        loader={<div>Loading...</div>}
        endMessage={<div>No more games</div>}
      >
        <GameCardComponent data={data?.list} loading={loading} />
      </InfiniteScroll>
    </div>
  );
}
