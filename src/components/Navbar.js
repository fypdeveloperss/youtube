"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useAppContext } from '../context/index';

const styles = {
  header: 'bg-white fixed w-full text-black px-[16px] py-0 top-0',
  container: 'w-full flex justify-between items-center',
  navLinks: 'hover:text-gray-400',
  searchInput: 'border border-neutral-300 w-[100px] sm:w-full h-full rounded-l-full px-4 py-2 outline-none focus:border-blue-500 dark:bg-neutral dark:border-neutral-500 dark:focus:border-neutral-500 dark:text-neutral-300',
  searchIcon: 'border border-neutral-300 ml-[-20px] px-5 pt-[5px] pb-[5px] sm:py-2 border-l-0 rounded-r-full hover:bg-neutral-100 dark:border-neutral-500 hover:dark:bg-neutral-100',
  accountIcon: 'inline-block h-7 w-7 rounded-full ring-2 ring-white'
};

export default function Navbar() {

  const { toggleSidebar } = useAppContext();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className="flex items-center space-x-4">
          <button onClick={toggleSidebar}><Image src="/burger.png" alt="burger" width={20} height={20} /></button>
          <Image src="/youtube-logo.png" alt="Logo" width={102} height={22} /> {/* Replace with your logo */}
        </div>
        <div className="flex items-center space-x-0">
          <input
            type="text"
            placeholder="Search"
            className={styles.searchInput}
          />
          <button className={styles.searchIcon}><Image src="/search-icon.png" alt="Logo" width={24} height={34} /></button>
        </div>
        <div className="flex items-center space-x-0">
          <button><Image className={styles.accountIcon} src="/weather.png" alt="Logo" width={30} height={54} /></button>
        </div>
      </div>
    
    </header>
  );
}