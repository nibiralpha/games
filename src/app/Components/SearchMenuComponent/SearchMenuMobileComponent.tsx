'use client';

import React, { useEffect, useState } from 'react';
import { Drawer } from 'vaul';
import { platform, genre, feature, Menus, ChildMenu } from '@Constant/DataTypes';
import { SearchMenu } from '@app-types/Menu';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/src/redux/Store';
import useGames from '@Hooks/useGames';
import { FilterParentMenu, MenuName } from '@app-types/SearchState';
import { hydrateFiltersFromUrl, setCategory } from '@/src/redux/SearchSlice';

interface MobileFilterDrawerProps {
  children: React.ReactNode;
  onChange: (data: string) => void;
}

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
    value: 'genres',
    expand: false,
    childMenus: genre,
  },
  {
    id: 4,
    name: 'Feature',
    value: 'mode',
    expand: false,
    childMenus: feature,
  },
];

export default function SearchMenuMobileComponent({ onChange, children }: MobileFilterDrawerProps) {
  const dispatch = useDispatch<AppDispatch>();
  const { searchedOption } = useGames();

  const [menuList, setMenuList] = useState<Menus[]>(menus);
  const [isReady, setIsReady] = useState(false);

  const toggleMenu = (menuName: string) => {
    setMenuList((prev) => prev.map((menu) => (menu.name === menuName ? { ...menu, expand: !menu.expand } : menu)));
  };

  const updateToggleStatus = (childMenu: ChildMenu, menuName: MenuName, status: boolean) => {
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
      .map((item) => item.id)
      .join(',');

    const selectedGenres = search.genres
      .filter((item) => item.isChecked)
      .map((item) => item.id)
      .join(',');

    const selectedFeatures = search.mode
      .filter((item) => item.isChecked)
      .map((item) => item.alias)
      .join(',');

    if (selectedPlatforms) {
      params.set('platforms', selectedPlatforms);
    }

    if (selectedGenres) {
      params.set('genres', selectedGenres);
    }

    if (selectedFeatures) {
      params.set('mode', selectedFeatures);
    }

    if (search.search) {
      params.set('name', search.search);
    }

    // if (search.orderBy) {
    //   params.set('order', search.orderBy);
    // }

    const queryString = params.toString();

    window.history.replaceState(null, '', queryString ? `?${queryString}` : window.location.pathname);

    const rawQueryString = params.toString();
    const cleanQueryString = decodeURIComponent(rawQueryString);
    // console.log("search string", cleanQueryString);

    onChange(cleanQueryString);
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const urlPlatform = params.get('platforms')?.split(',').filter(Boolean).map(Number) ?? [];
    const urlGenre = params.get('genres')?.split(',').filter(Boolean).map(Number) ?? [];
    const urlMode = params.get('mode')?.split(',').filter(Boolean) ?? [];
    const urlSearchByName = params.get('name') || '';
    const urlOrder = params.get('order') as 'asc' | 'desc' | null;

    dispatch(
      hydrateFiltersFromUrl({
        platform: urlPlatform,
        genres: urlGenre,
        mode: urlMode,
        name: urlSearchByName,
        order: urlOrder || undefined,
      }),
    );

    //keep open the previously selected menu on page refresh
    /* eslint-disable-next-line react-hooks/set-state-in-effect */
    setMenuList((prev) =>
      prev.map((menu) => ({
        ...menu,
        expand:
          (menu.name === 'Platform' && urlPlatform.length > 0) ||
          (menu.name === 'Genre' && urlGenre.length > 0) ||
          (menu.name === 'Feature' && urlMode.length > 0),
      })),
    );
    //end

    setIsReady(true);
  }, [dispatch]);

  useEffect(() => {
    if (!isReady) return;

    updateUrl(searchedOption);
  }, [searchedOption, isReady]);

  return (
    <Drawer.Root dismissible={true}>
      <Drawer.Trigger asChild>{children}</Drawer.Trigger>

      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40 z-50 transition-opacity duration-300" />

        <Drawer.Content className="bg-white flex flex-col rounded-t-[20px] h-[95vh] fixed bottom-0 left-0 right-0 z-50 outline-none shadow-2xl p-6">
          <div className="bg-white flex-1 overflow-y-auto hide-scrollbar">
            <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-gray-300 mb-6" />

            <Drawer.Title className="font-bold text-xl mb-4 text-black">Filter</Drawer.Title>

            {menuList.map((menu) => (
              <div key={menu.id} className="border-b border-[#e1e1e1] last:border-none pb-2 last:pb-0">
                <div
                  onClick={() => toggleMenu(menu.name)}
                  className="flex justify-between items-center py-3 font-bold cursor-pointer select-none text-black"
                >
                  <div>{menu.name}</div>

                  <svg
                    className={`w-4 h-4 transform transition-transform duration-200 ${menu.expand ? 'rotate-90' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://w3.org"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
                  </svg>
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
                            className="w-4 h-4 rounded border-gray-300 bg-white cursor-pointer accent-black focus:ring-0"
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
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
