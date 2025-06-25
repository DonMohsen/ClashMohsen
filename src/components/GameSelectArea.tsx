import { useGameBadgeStore } from "@/store/useGameBadgeStore";
import { GameType } from "@/types/data.types";
import clsx from "clsx";
import React from "react";
import ImageKit from "./ImageKit";

const GameSelectArea = () => {
  const { game, setGame } = useGameBadgeStore();
  const handleSetGame = (clickedGame: GameType) => {
    game !== clickedGame && setGame(clickedGame);
  };
  return (
    <div className="flex items-center justify-center select-none h-[160px]">
  
      <div onClick={() => handleSetGame(GameType.clashroyale)}>
        <ImageKit
         className={clsx(
            `transition-all duration-100 `,
            game===GameType.clashroyale?'w-[200px] h-[200px]':'w-[100px] h-[100px]'
          )}
          alt="king"
          path="Supercell/king.png"
          
          // w={300}
          // h={300}
        />
      </div>
          <div onClick={() => handleSetGame(GameType.coc)}>
        <ImageKit
        className={clsx(
            `transition-all duration-100 `,
            game===GameType.coc?'w-[200px] h-[200px]':'w-[100px] h-[100px]'
          )}
          alt="king"
          path="Supercell/barbarian-king.png"
          // 
          // h={300}
          // w={300}
        />
      </div>
      <div onClick={() => handleSetGame(GameType.brawlstars)}>
        <ImageKit
          alt="king"
          path={`Supercell/elprimo.png`}
          // w={300}
          // h={300}
          className={clsx(
            `transition-all duration-10 `,
            game===GameType.brawlstars?'w-[200px] h-[200px]':'w-[100px] h-[100px]'
          )}
          // onClick={()=>handleSetGame(GameType.brawlstars)}
        />
      </div>
    </div>
  );
};

export default GameSelectArea;
