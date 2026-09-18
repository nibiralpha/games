'use client';

// import React, { useEffect, useState } from 'react';
import { Drawer } from 'vaul';
import { MenuName } from '@app-types/SearchState';
import useSearchFilters from '@Hooks/useSearchFilters';

interface MobileFilterDrawerProps {
  children: React.ReactNode;
  onChange: (data: string) => void;
}

export default function SearchMenuMobileComponent({ onChange, children }: MobileFilterDrawerProps) {
  const { menuList, toggleMenu, updateToggleStatus, isChecked } = useSearchFilters(onChange);

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
