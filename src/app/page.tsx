'use client';

import Navbar from "./components/Navbar";
import MainPage from "./components/MainPage";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full font-sans flex flex-col bg-gray-900">
        <MainPage />
    </div>
  );
}
