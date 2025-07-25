"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAppContext } from '../context/index';
import { useState, useEffect } from 'react';

export default function Sidebar() {
  const { isSidebarOpen } = useAppContext();
  const pathname = usePathname();
  const [width, setWidth] = useState(0);
  const myWidth = `${width}%`;
  const [color,setColor] = useState("bg-red-600");
  useEffect(() => {
    if(width==0){
      setColor("bg-red-600")
    }
    if (width < 100) {
      setTimeout(() => {
        setWidth((width) => width + 1);
      }, 1);
    }
    else{setColor("bg-white")}
  });
  // Function to check if the current link is active
  const isActive = (href) => pathname === href;

  // Define styles as objects
  const styles = {
    sidebar: `fixed left-0 mt-[56px] top-0 h-full ${isSidebarOpen ? 'w-[240px]' : 'w-[70px] py-1 px-0'
      } bg-white flex flex-col p-4`,
    section: 'mb-6',
    sectionTitle: 'font-bold text-black mb-2',
    navLinkBase: `flex items-center py-2 px-3 mb-2 text-black hover:bg-gray-100 rounded-lg ${isSidebarOpen ? '' : 'flex-col text-[0.6rem] text-black py-4'
      }`, // Base styling for nav links
    activeLink: 'bg-gray-200 text-grey-600 font-bold', // Styling for active links
    icon: 'mr-4 h-6 w-6 text-black',
  };

  return (
    <>
      <div className="fixed h-[2px] w-full bg-neutral-200">
        <div className={`h-[3px] ${color} z-10`} style={{ width: myWidth }}></div>
      </div>
      <aside className={styles.sidebar}>
        {/* Home Section */}
        <div className={styles.section}>
          <Link
            href="/"
            className={`${styles.navLinkBase} ${isActive('/') ? styles.activeLink : ''}`}
            onClick={() => { setWidth(0); }}>
            <span className={isSidebarOpen ? styles.icon : ''}>🏠</span>
            Home
          </Link>

          <Link
            href="/shorts"
            className={`${styles.navLinkBase} ${isActive('/shorts') ? styles.activeLink : ''}`}
            onClick={() => { setWidth(0); }}>
            <span className={isSidebarOpen ? styles.icon : ''}>🎬</span>
            Shorts
          </Link>
          <Link
            href="/subscriptions"
            className={`${styles.navLinkBase} ${isActive('/subscriptions') ? styles.activeLink : ''}`}
            onClick={() => { setWidth(0); }}>
            <span className={isSidebarOpen ? styles.icon : ''}>📜</span>
            Subscriptions
          </Link>
        </div>

        {/* Subscriptions Section */}
        {isSidebarOpen && (
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Subscriptions</h2>
            <Link
              href="/sports"
              className={`${styles.navLinkBase} ${isActive('/sports') ? styles.activeLink : ''}`}
            >
              <span className={styles.icon}>🏅</span> Sports Central
            </Link>
            <Link
              href="/anonymous"
              className={`${styles.navLinkBase} ${isActive('/anonymous') ? styles.activeLink : ''}`}
            >
              <span className={styles.icon}>👤</span> ANONYMOUS
            </Link>
            <Link
              href="/ducky-bhai"
              className={`${styles.navLinkBase} ${isActive('/ducky-bhai') ? styles.activeLink : ''}`}
            >
              <span className={styles.icon}>🦆</span> Ducky Bhai
            </Link>
            <Link
              href="/show-more"
              className={`${styles.navLinkBase} ${isActive('/show-more') ? styles.activeLink : ''}`}
            >
              <span className={styles.icon}>📄</span> Show more
            </Link>
          </div>
        )}

        {/* Explore Section */}
        {isSidebarOpen && (
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Explore</h2>
            <Link
              href="/trending"
              className={`${styles.navLinkBase} ${isActive('/trending') ? styles.activeLink : ''}`}
            >
              <span className={styles.icon}>🔥</span> Trending
            </Link>
            <Link
              href="/music"
              className={`${styles.navLinkBase} ${isActive('/music') ? styles.activeLink : ''}`}
            >
              <span className={styles.icon}>🎵</span> Music
            </Link>
            <Link
              href="/gaming"
              className={`${styles.navLinkBase} ${isActive('/gaming') ? styles.activeLink : ''}`}
            >
              <span className={styles.icon}>🎮</span> Gaming
            </Link>
          </div>
        )}
      </aside></>
  );
}
