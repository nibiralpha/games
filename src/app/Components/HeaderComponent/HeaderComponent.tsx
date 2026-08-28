"use client";

import Image from "next/image";

import styles from "./Header.module.css";
export default function HeaderComponent() {
  return (
    <div className={styles.header}>
      <div className={styles.header_area}>
        <div className="container">
          <div className={styles.logo}>
            <Image
              src="/logo-main.png"
              alt="Nebula Arcade"
              width={160}
              height={60}
              priority
            />
          </div>
        </div>
        {/* <div className={styles.app_name}>Games Hub</div> */}
      </div>
    </div>
  );
}
