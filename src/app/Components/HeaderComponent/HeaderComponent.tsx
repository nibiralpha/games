'use client';

import Image from 'next/image';
import styles from './Header.module.css';
import Link from 'next/link';

export default function HeaderComponent() {
  return (
    <div className={styles.header}>
      <div className={styles.header_area}>
        <div className="container-main flex items-center justify-between w-full">
          <div className={styles.logo}>
            <Link href="/">
              <Image src="/logo-main.png" alt="Nebula Arcade" width={160} height={60} priority />
            </Link>
          </div>

          <nav className="flex items-center gap-8">
            <Link href="/" className="text-white font-medium hover:text-gray-300 transition-colors font-semibold">
              Home
            </Link>

            <Link href="/search" className="text-white font-light hover:text-gray-300 transition-colors font-semibold">
              Search
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
