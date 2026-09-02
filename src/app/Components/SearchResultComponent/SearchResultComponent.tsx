"use client";

import { useState } from "react";
// import Image from "next/image";

import styles from "./SearchResult.module.css";
import CardComponent from "@Components/CardComponent/CardComponent";
import GameCardComponent from "../GameCardComponent/GameCardComponent";
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

      <div className="mt-5 mb-5 text-sm text-[#626262]">26,393 games found</div>

      <GameCardComponent
        data={[
          {
            id: 1,
            name: "test",
            background_image:
              "https://media.rawg.io/media/screenshots/fc1/fc1a3ffd90dd53bd1898134c1b93849f.jpg",
          },
          {
            id: 2,
            name: "test",
            background_image:
              "https://media.rawg.io/media/screenshots/fc1/fc1a3ffd90dd53bd1898134c1b93849f.jpg",
          },
          {
            id: 3,
            name: "test",
            background_image:
              "https://media.rawg.io/media/screenshots/fc1/fc1a3ffd90dd53bd1898134c1b93849f.jpg",
          },
          {
            id: 4,
            name: "test",
            background_image:
              "https://media.rawg.io/media/screenshots/fc1/fc1a3ffd90dd53bd1898134c1b93849f.jpg",
          },
          {
            id: 6,
            name: "test",
            background_image:
              "https://media.rawg.io/media/screenshots/fc1/fc1a3ffd90dd53bd1898134c1b93849f.jpg",
          },
          {
            id: 7,
            name: "test",
            background_image:
              "https://media.rawg.io/media/screenshots/fc1/fc1a3ffd90dd53bd1898134c1b93849f.jpg",
          },
          {
            id: 8,
            name: "test",
            background_image:
              "https://media.rawg.io/media/screenshots/fc1/fc1a3ffd90dd53bd1898134c1b93849f.jpg",
          },
          {
            id: 9,
            name: "test",
            background_image:
              "https://media.rawg.io/media/screenshots/fc1/fc1a3ffd90dd53bd1898134c1b93849f.jpg",
          },
        ]}
        loading={false}
      />
    </div>
  );
}
