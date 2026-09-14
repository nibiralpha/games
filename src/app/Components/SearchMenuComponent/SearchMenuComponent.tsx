'use client';

// import Image from "next/image";
import { useEffect, useState } from 'react';
import styles from './SearchMenu.module.css';
import { SearchMenu } from '@app-types/Menu';
import { Menus, platform, genre, feature, ChildMenu } from '@Constant/DataTypes';
import { setCategory } from '@/src/redux/SearchSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/src/redux/Store';
import { FilterParentMenu, MenuName } from '@app-types/SearchState';
import useGames from '@Hooks/useGames';

const menus: Menus[] = [
  {
    id: 1,
    name: 'Platform',
    value: 'platform',
    expand: false,
    childMenus: platform,
  },
  {
    id: 2,
    name: 'Genre',
    value: 'genre',
    expand: false,
    childMenus: genre,
  },
  {
    id: 4,
    name: 'Feature',
    value: 'feature',
    expand: false,
    childMenus: feature,
  },
];

export default function SearchMenuComponent() {
  const dispatch = useDispatch<AppDispatch>();
  const { searchedOption } = useGames();

  const [menuList, setMenuList] = useState<Menus[]>(menus);

  const toggleMenu = (menuName: string) => {
    setMenuList((prev) => prev.map((menu) => (menu.name === menuName ? { ...menu, expand: !menu.expand } : menu)));
  };

  const updateToggleStatus = async (childMenu: ChildMenu, menuName: MenuName, status: boolean) => {
    dispatch(
      setCategory({
        parentCategory: menuName,
        childCategory: childMenu,
        status: status,
      }),
    );
  };

  const isChecked = (childMenu: ChildMenu, parentMenu: Menus): boolean => {
    const items = searchedOption[parentMenu.value as FilterParentMenu];

    return items?.some((item) => item.id === childMenu.id && item.isChecked) ?? false;
  };

  const updateUrl = (search: typeof searchedOption) => {
    const params = new URLSearchParams();
    
    const selectedPlatforms = search.platform
      .filter((item) => item.isChecked)
      .map((item) => item.alias)
      .join(',');

    const selectedGenres = search.genre
      .filter((item) => item.isChecked)
      .map((item) => item.alias)
      .join(',');

    const selectedFeatures = search.feature
      .filter((item) => item.isChecked)
      .map((item) => item.alias)
      .join(',');

    if (selectedPlatforms) {
      params.set('platform', selectedPlatforms);
    }

    if (selectedGenres) {
      params.set('genre', selectedGenres);
    }

    if (selectedFeatures) {
      params.set('feature', selectedFeatures);
    }
   
    if (search.search) {
      params.set('search', search.search);
    }

    const queryString = params.toString();

    window.history.replaceState(null, '', queryString ? `?${queryString}` : window.location.pathname);
  };

  useEffect(() => {
    updateUrl(searchedOption);
  }, [searchedOption]);

  return (
    <div className="bg-[#f6f6f6] w-full border border-[#e1e1e1] rounded-lg">
      <div className="p-7 space-y-1">
        {menuList.map((menu) => (
          <div key={menu.id} className="border-b border-[#e1e1e1] last:border-none pb-2 last:pb-0">
            <div
              onClick={() => toggleMenu(menu.name)}
              className="flex justify-between items-center py-3 font-bold cursor-pointer select-none text-black"
            >
              <div>{menu.name}</div>

              {menu.expand === false ? (
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://w3.org"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
                </svg>
              ) : (
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://w3.org"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </div>

            {menu.expand && (
              <div className="pr-2 pb-3 pt-1">
                <div className="space-y-2.5">
                  {menu.childMenus?.map((childMenu) => (
                    <label
                      key={childMenu.id}
                      className="flex w-fit items-center gap-3 cursor-pointer group text-sm font-medium text-[#626262] hover:text-black"
                    >
                      <input
                        type="checkbox"
                        checked={isChecked(childMenu, menu)}
                        onChange={(e) => {
                          updateToggleStatus(childMenu, menu.name as MenuName, e.target.checked);
                        }}
                      />
                      <span>{childMenu.name}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
