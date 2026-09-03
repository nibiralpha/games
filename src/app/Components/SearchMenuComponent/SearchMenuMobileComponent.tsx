"use client";

import React, { useState } from "react";
import { Drawer } from "vaul";
import { SearchMenu } from "@app-types/Menu";

interface MobileFilterDrawerProps {
  children: React.ReactNode;
}

const menus: SearchMenu[] = [
  {
    id: 1,
    name: "Platform",
    value: "platform",
    expand: false,
    childmenus: [{ id: 1, name: "Playstation" }],
  },
  {
    id: 2,
    name: "Genre",
    value: "genre",
    expand: false,
    childmenus: [{ id: 1, name: "Action" }],
  },
  {
    id: 4,
    name: "Feature",
    value: "feature",
    expand: false,
    childmenus: [
      { id: 1, name: "Multiplayer" },
      { id: 2, name: "Singleplayer" },
    ],
  },
  {
    id: 3,
    name: "Release Date",
    value: "release_date",
    expand: false,
    childmenus: [
      { id: 1, name: "2012" },
      { id: 2, name: "2020" },
    ],
  },
];

export default function SearchMenuMobileComponent({
  children,
}: MobileFilterDrawerProps) {
  const [menuList, setMenuList] = useState<SearchMenu[]>(menus);

  const toggleMenu = (menuName: string) => {
    setMenuList((prev) =>
      prev.map((menu) =>
        menu.name === menuName ? { ...menu, expand: !menu.expand } : menu,
      ),
    );
  };

  return (
    <Drawer.Root dismissible={true}>
      <Drawer.Trigger asChild>{children}</Drawer.Trigger>

      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40 z-50 transition-opacity duration-300" />

        <Drawer.Content className="bg-white flex flex-col rounded-t-[20px] h-[95vh] fixed bottom-0 left-0 right-0 z-50 outline-none shadow-2xl p-6">
          <div className="bg-white flex-1">
            <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-gray-300 mb-6" />

            <Drawer.Title className="font-bold text-xl mb-4 text-black">
              Filter
            </Drawer.Title>

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
                      {menu.childmenus?.map((childMenu, index) => (
                        <label
                          key={childMenu.id}
                          className="flex w-fit items-center gap-3 cursor-pointer group text-sm font-medium text-[#626262] hover:text-black"
                        >
                          <input
                            type="checkbox"
                            onChange={() =>
                              console.log(`${childMenu}, ${menu.name}`)
                            }
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
