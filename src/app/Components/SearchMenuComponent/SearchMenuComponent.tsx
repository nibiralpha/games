'use client';

// import Image from "next/image";
// import { useEffect, useState } from 'react';
import styles from './SearchMenu.module.css';

import { MenuName } from '@app-types/SearchState';
import useSearchFilters from '@Hooks/useSearchFilters';

interface SearchMenuComponentProps {
  onChange: (data: string) => void;
}

export default function SearchMenuComponent({ onChange }: SearchMenuComponentProps) {
  const { menuList, toggleMenu, updateToggleStatus, isChecked } = useSearchFilters(onChange);

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

              {menu.expand ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              )}
            </div>

            {menu.expand && (
              <div className="pr-2 pb-3 pt-1">
                <div className="space-y-2.5">
                  {menu.childMenus?.map((childMenu) => (
                    <label
                      key={childMenu.id}
                      className="flex w-fit items-center gap-3 cursor-pointer group text-sm font-medium text-[#626262]"
                    >
                      <input
                        type="checkbox"
                        checked={isChecked(childMenu, menu)}
                        onChange={(e) => updateToggleStatus(childMenu, menu.name as MenuName, e.target.checked)}
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
