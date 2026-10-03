'use client';

import styles from './Search.module.css';

import HeaderComponent from '@/src/app/Components/HeaderComponent/HeaderComponent';
import SearchMenuComponent from '@/src/app/Components/SearchMenuComponent/SearchMenuComponent';
import SearchResultComponent from '@/src/app/Components/SearchResultComponent/SearchResultComponent';

import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/src/redux/Store';

import { fetchSearcheddGames } from '@/src/app/Services/Games';

import useGames from '@Selectors/useGames';

export default function SearchPage() {
  const dispatch = useDispatch<AppDispatch>();

  const { searchedGames } = useGames();

  const fetchData = (queryString: string = '') => {
    dispatch(fetchSearcheddGames(queryString));
  };

  return (
    <div className="page-details">
      <HeaderComponent />

      <div className="container-main">
        <div className="mt-10">
          <div>
            <div className="section_title weight-600">Discover</div>

            <div className="flex mt-8">
              <div className="hidden lg:block w-1/4">
                <SearchMenuComponent onChange={(data) => fetchData(data)} />
              </div>

              <div className="w-full lg:w-3/4 h-24 lg:ml-8">
                <SearchResultComponent
                  onChange={(data) => fetchData(data)}
                  data={searchedGames?.data}
                  loading={searchedGames?.loading}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
