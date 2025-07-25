"use client";
import Image from "next/image";
import Link from 'next/link';
import { useAppContext } from "../context/index";

export default function Home() {
  const { isSidebarOpen } = useAppContext();
  const marginLeftClass = isSidebarOpen ? 'ml-[240px]' : 'ml-[70px]';

  // Sample data for videos with random titles
  const videos = [
    { id: 1, title: "Understanding React Hooks", thumbnail: "/weather.png" },
    { id: 2, title: "10 Tips for JavaScript Developers", thumbnail: "/weather.png" },
    { id: 3, title: "Mastering CSS Grid Layout", thumbnail: "/weather.png" },
    { id: 4, title: "Building Responsive Websites with Tailwind CSS", thumbnail: "/weather.png" },
    { id: 5, title: "Next.js vs React: What’s the Difference?", thumbnail: "/weather.png" },
    { id: 6, title: "How to Fetch Data in React", thumbnail: "/weather.png" },
    { id: 7, title: "Optimizing Performance in Web Apps", thumbnail: "/weather.png" },
    { id: 8, title: "Debugging JavaScript Code Like a Pro", thumbnail: "/weather.png" },
    { id: 9, title: "State Management in React: A Deep Dive", thumbnail: "/weather.png" },
  ];

  return (
    <main className={`${marginLeftClass} p-4 pt-[66px] transition-all duration-300 bg-white text-black flex flex-col`}>

      <div className="grid grid-cols-3 gap-x-6 gap-y-8">
        {videos.map((video) => (
          <div key={video.id} className="rounded-lg">
            <Image
              src={video.thumbnail}
              alt={video.title}
              width={370}
              height={140}
              className="rounded-xl mb-2 w-full"
            />
            <h2 className="text-md font-semibold">{video.title}</h2>
          </div>
        ))}
      </div>
    </main>
  );
}
