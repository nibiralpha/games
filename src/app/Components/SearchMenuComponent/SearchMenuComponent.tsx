"use client";

// import Image from "next/image";
import { useState } from "react";
import styles from "./SearchMenu.module.css";

interface SearchMenu {
  id: number;
  name: string;
  value: string;
  expand: boolean;
}

const menus: SearchMenu[] = [
  { id: 1, name: "Platform", value: "platform", expand: false },
  { id: 2, name: "Genra", value: "genra", expand: false },
  { id: 4, name: "Feature", value: "feature", expand: false },
  { id: 3, name: "Release Date", value: "release_date", expand: false },
];
export default function SearchMenuComponent() {
  const [menuList, setMenuList] = useState<SearchMenu[]>(menus);

  const toggleMenu = (menuName: string) => {
    setMenuList((prev) =>
      prev.map((menu) =>
        menu.name === menuName ? { ...menu, expand: !menu.expand } : menu,
      ),
    );
  };

  console.log(menuList);

  return (
    <div className="bg-[#f6f6f6]">
      <div className="p-7">
        {menuList.map((menu) => (
          <div
            key={menu.id}
            onClick={() => toggleMenu(menu.name)}
            className="flex justify-between items-center border-b py-3 font-bold border-[#e1e1e1] cursor-pointer"
          >
            <span>{menu.name}</span>
            {menu.expand == false ? (
              <svg
                className="w-4 h-4 text-[#a9a9a9]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://w3.org"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-4 h-4 text-[#a9a9a9]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://w3.org"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
