"use client";

// import Image from "next/image";

import styles from "./SearchMenu.module.css";
export default function SearchMenuComponent() {
  return (
    <div className="bg-[#f6f6f6]">
      <div className="p-7">
        <div className="flex justify-between items-center border-b py-3 font-bold border-[#e1e1e1]">
          <span>Platform</span>
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
        </div>

        <div className="flex justify-between items-center border-b py-3 font-bold border-[#e1e1e1]">
          <span>Genra</span>
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
        </div>

        <div className="flex justify-between items-center border-b py-3 font-bold border-[#e1e1e1]">
          <span>Release Date</span>
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
        </div>

        <div className="flex justify-between items-center py-3 font-semibold">
          <span>Feature</span>
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
        </div>
      </div>
    </div>
  );
}
