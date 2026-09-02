"use client";
import React, { useEffect } from "react";
import styles from "./Details.module.css";
import HeaderComponent from "@/src/app/Components/HeaderComponent/HeaderComponent";
import SearchMenuComponent from "@/src/app/Components/SearchMenuComponent/SearchMenuComponent";
import SearchResultComponent from "@/src/app/Components/SearchResultComponent/SearchResultComponent";

export default function DetailsPage() {
  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <div className="page-details">
      <HeaderComponent />
      <div className="container-main">
        <div className="mt-10">
          <div className="">
            <div className="section_title weight-600">Discover</div>
            <div className="flex mt-8">
              <div className="w-1/4 h-24 hidden lg:block"><SearchMenuComponent /></div>
              <div className="w-full lg:w-3/4 h-24 lg:ml-8"><SearchResultComponent /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
