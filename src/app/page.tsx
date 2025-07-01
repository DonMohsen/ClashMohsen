import SearchBar from "@/components/SearchBar";
import BookmarkedList from "@/components/BookmarkedList";
import { GameType } from "@/types/data.types";
import GameCard from "@/components/GameCard";

const HomePage = () => {
  return (
    <div className="w-full min-h-screen bg-slate-100 flex flex-col items-center justify-center overflow-x-hidden">
      {/* <Hero/> */}
      {/* <GameSelectBadge /> */}
      <div className="flex items-center justify-center mt-[100px] gap-4 max-sm:flex-col w-full">
        
        {Object.entries(GameType).map(([key, label]) => (
          <GameCard key={key} game={label} />
        ))}
        </div>
      <SearchBar />
      {/* <GameSelectArea/> */}
      <p className="my-5 font-ClashBold text-center max-sm:text-[14px]">{`for now, we only have the clash of clans UI partially ready!`}</p>
      <BookmarkedList/>
      
 

    </div>
  );
};

export default HomePage;
