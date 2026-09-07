"use client";

// import Image from "next/image";
import { useState } from "react";
import styles from "./SearchMenu.module.css";
import { SearchMenu } from "@app-types/Menu";
import { Menus, FilterItem } from "@Constant/DataTypes";
import { setSearch } from "@/src/redux/SearchSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/src/redux/Store";
import { FilterCategory } from "@app-types/SearchState";

const menus: Menus[] = [
  {
    id: 1,
    name: "Platform",
    value: "platform",
    expand: false,
    childMenus: [],
  },
  {
    id: 2,
    name: "Genre",
    value: "genre",
    expand: false,
    childMenus: [],
  },
  {
    id: 4,
    name: "Feature",
    value: "feature",
    expand: false,
    childMenus: [],
  },
];

export default function SearchMenuComponent() {
  const [menuList, setMenuList] = useState<SearchMenu[]>(menus);
  const dispatch = useDispatch<AppDispatch>();

  const toggleMenu = (menuName: string) => {
    setMenuList((prev) =>
      prev.map((menu) =>
        menu.name === menuName ? { ...menu, expand: !menu.expand } : menu,
      ),
    );
  };

  const updateToggleStatus = (
    childMenu: FilterItem,
    menuName: FilterCategory,
    status: boolean,
  ) => {
    dispatch(
      setSearch({
        parentCategory: menuName, 
        childCategory: childMenu,
        status: status,
      }),
    );
  };

  return (
    <div className="bg-[#f6f6f6] w-full border border-[#e1e1e1] rounded-lg">
      <div className="p-7 space-y-1">
        {menuList.map((menu) => (
          <div
            key={menu.id}
            className="border-b border-[#e1e1e1] last:border-none pb-2 last:pb-0"
          >
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
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  ></path>
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
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              )}
            </div>

            {menu.expand && (
              <div className="pr-2 pb-3 pt-1">
                <div className="space-y-2.5">
                  {menu.childMenus?.map((childMenu, index) => (
                    <label
                      key={childMenu.id}
                      className="flex w-fit items-center gap-3 cursor-pointer group text-sm font-medium text-[#626262] hover:text-black"
                    >
                      <input
                        type="checkbox"
                        onChange={(e) => {
                          // console.log(`${childMenu}, ${menu.name}`);
                          updateToggleStatus(
                            childMenu,
                            menu.name as FilterCategory,
                            e.target.checked,
                          );
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
    </div>
  );
}
