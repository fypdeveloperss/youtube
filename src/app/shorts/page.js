"use client";
import Image from "next/image";
import { useAppContext } from "../../context/index";
import { useState } from "react";

export default function Shorts() {
  const { isSidebarOpen } = useAppContext();
  const marginLeftClass = isSidebarOpen ? 'ml-[240px]' : 'ml-[70px]';

  // Example video data
  const video = {
    id: 1,
    title: "Can I get the traditional chicken",
    thumbnail: "/shorts-thumbnail.png",
    channelName: "@shelbyscanada",
    likeCount: "120K",
    commentCount: "1.2K",
  };

  return (
    <main className={`${marginLeftClass} transition-all duration-300 bg-white text-black flex flex-col items-center p-4 pt-[66px]`}>
      {/* Video Player Section */}
      <div className="relative w-full max-w-[480px] h-[80vh] bg-gray-200 rounded-lg overflow-hidden">
        <Image
          src={video.thumbnail}
          alt={video.title}
          fill
          className="object-cover"
        />
        {/* Play button overlay */}
        <div className="absolute top-2 left-2 bg-black text-white p-2 rounded-full">
          <button>▶</button>
        </div>
        {/* Mute/Unmute button */}
        <div className="absolute top-2 right-2 bg-black text-white p-2 rounded-full">
          <button>🔊</button>
        </div>
      </div>

      {/* Video Info */}
      <div className="w-full max-w-[480px] mt-4">
        <h1 className="text-lg font-bold">{video.title}</h1>
        <p className="text-sm text-gray-500">{video.channelName}</p>
      </div>

      {/* Interaction Buttons */}
      <div className="w-full max-w-[480px] flex justify-between items-center mt-2">
        <button className="flex items-center space-x-2">
          <span>👍</span>
          <span>{video.likeCount}</span>
        </button>
        <button className="flex items-center space-x-2">
          <span>💬</span>
          <span>{video.commentCount}</span>
        </button>
        <button className="flex items-center space-x-2">
          <span>↪️</span>
          <span>Share</span>
        </button>
        <button className="bg-orange-500 text-white py-1 px-3 rounded-md">
          Subscribe
        </button>
      </div>
    </main>
  );
}
