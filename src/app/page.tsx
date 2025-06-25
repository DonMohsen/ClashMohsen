"use client";
import SearchBar from "@/components/SearchBar";
import GameSelectBadge from "@/components/GameSelectBadge";
import BookmarkedList from "@/components/BookmarkedList";
import Hero from "@/components/Hero";
import GameSelectArea from "@/components/GameSelectArea";

const HomePage = () => {
  return (
    <div className="w-full min-h-screen bg-slate-100 flex flex-col items-center justify-center">
      {/* <Hero/> */}
      {/* <GameSelectBadge /> */}
      <GameSelectArea/>
      <SearchBar />
      <BookmarkedList/>
    </div>
  );
};

export default HomePage;
