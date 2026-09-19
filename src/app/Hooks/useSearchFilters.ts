import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { hydrateFiltersFromUrl, setCategory } from '@/src/redux/SearchSlice';
import { AppDispatch } from '@/src/redux/Store';
import { Menus, platform, genre, feature, ChildMenu } from '@Constant/DataTypes';
import { FilterParentMenu, MenuName } from '@app-types/SearchState';
import useGames from '@Selectors/useGames';

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

export default function useSearchFilters(onChange: (data: string) => void) {
  const dispatch = useDispatch<AppDispatch>();
  const { searchedOption } = useGames();

  const [menuList, setMenuList] = useState<Menus[]>(menus);
  const [isReady, setIsReady] = useState(false);

  const toggleMenu = (menuName: string) => {
    setMenuList((prev) =>
      prev.map((menu) =>
        menu.name === menuName
          ? {
              ...menu,
              expand: !menu.expand,
            }
          : menu,
      ),
    );
  };

  const updateToggleStatus = (childMenu: ChildMenu, menuName: MenuName, status: boolean) => {
    dispatch(
      setCategory({
        parentCategory: menuName,
        childCategory: childMenu,
        status,
      }),
    );
  };

  const isChecked = (childMenu: ChildMenu, parentMenu: Menus) => {
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

    const queryString = params.toString();

    // const newUrl = queryString ? `${window.location.pathname}?${queryString}` : window.location.pathname;

    // window.history.replaceState(null, '', newUrl);

    // onChange(decodeURIComponent(queryString));

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
    const urlSearch = params.get('name') ?? '';
    const urlOrder = params.get('order') as 'asc' | 'desc' | null;

    dispatch(
      hydrateFiltersFromUrl({
        platform: urlPlatform,
        genres: urlGenre,
        mode: urlMode,
        name: urlSearch,
        order: urlOrder ?? undefined,
      }),
    );

    // keep open the previously selected menu on page refresh
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

    setIsReady(true);
  }, [dispatch]);

  useEffect(() => {
    if (!isReady) return;

    updateUrl(searchedOption);
  }, [searchedOption, isReady]);

  return {
    setMenuList,
    menuList,
    toggleMenu,
    updateToggleStatus,
    isChecked,
  };
}
