"use client";
import React, { useEffect } from "react";
import styles from "./Details.module.css";
import HeaderComponent from "@/src/app/Components/HeaderComponent/HeaderComponent";
import SearchMenuComponent from "@/src/app/Components/SearchMenuComponent/SearchMenuComponent";

export default function DetailsPage() {
  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <div className="page-details">
      <HeaderComponent />
      <div className="container">
        <div className="mt-10">
          <div className="">
            <div className="section_title weight-600">Discover</div>
            <div className="flex mt-8">
              <div className="w-1/4 h-24 bg-[#f6f6f6]"><SearchMenuComponent /></div>
              <div className="w-3/4 h-24">Second Div (75%)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
