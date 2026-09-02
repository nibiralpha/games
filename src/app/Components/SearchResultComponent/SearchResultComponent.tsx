"use client";

import { useState } from "react";
// import Image from "next/image";

import styles from "./SearchResult.module.css";
export default function SearchResultComponent() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className={styles.search_component}>
      <div className="search_haed flex items-center">
        <div className="w-4/5">
          <input
            type="text"
            name="search"
            className={styles.search_input}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search..."
          />
        </div>
        <div className="1/5">
          <div className="ml-2 ascDesc p-2 border border-black w-10 flex justify-center cursor-pointer">
            ↓
          </div>
          {/* ↑ */}
        </div>
      </div>

      <div className="mt-5 text-sm text-[#626262]">26,393 games found</div>
    </div>
  );
}
