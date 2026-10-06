'use client';

import Image from 'next/image';
import styles from './Header.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function HeaderComponent() {
  const pathname = usePathname();

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
            <Link
              href="/"
              className={`text-white hover:text-gray-300 transition-colors pb-1 ${
                pathname === '/' ? 'font-semibold border-b-2 border-white' : 'font-medium border-b-2 border-transparent'
              }`}
            >
              Home
            </Link>

            <Link
              href="/search"
              className={`text-white hover:text-gray-300 transition-colors pb-1 ${
                pathname === '/search'
                  ? 'font-semibold border-b-2 border-white'
                  : 'font-medium border-b-2 border-transparent'
              }`}
            >
              Search
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
