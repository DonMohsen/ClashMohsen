"use client";
import SearchBar from "@/components/SearchBar";
import GameSelectBadge from "@/components/GameSelectBadge";
import BookmarkedList from "@/components/BookmarkedList";
import Hero from "@/components/Hero";
import GameSelectArea from "@/components/GameSelectArea";
import { GameType } from "@/types/data.types";
import GameCard from "@/components/GameCard";

const HomePage = () => {
  return (
    <div className="w-full min-h-screen bg-slate-100 flex flex-col items-center justify-center">
      {/* <Hero/> */}
      {/* <GameSelectBadge /> */}
      <div className="flex items-center justify-center mt-[100px] gap-4">
        
        {Object.entries(GameType).map(([key, label]) => (
          <GameCard key={key} game={label} />
        ))}
        </div>
      <SearchBar />
      {/* <GameSelectArea/> */}
      <BookmarkedList/>
    </div>
  );
};

export default HomePage;
