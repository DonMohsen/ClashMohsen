import { useGameBadgeStore } from "@/store/useGameBadgeStore";
import { GameType } from "@/types/data.types";
import clsx from "clsx";
import Image from "next/image";
import React from "react";

const GameSelectArea = () => {
  const { game,setGame } = useGameBadgeStore();
  const handleSetGame=(clickedGame:GameType)=>{
    game!==clickedGame&&setGame(clickedGame)
  }
  return (
    <div className="flex items-center justify-center select-none h-[160px]">
      <Image
        alt="king"
        src="/king.png"
        width={200}
        height={200}
        className={clsx(`transition-all duration-100 `,
            game===GameType.clashroyale?'w-[200px] h-[200px]':'w-[100px] h-[100px]'

        )}
        onClick={()=>handleSetGame(GameType.clashroyale)}
      />
       <Image
        alt="king"
        src="/barbarianKing.png"
        width={200}
        height={200}    
className={clsx(`transition-all duration-100 `,
            game===GameType.coc?'w-[200px] h-[200px]':'w-[100px] h-[100px]'

        )}     
                onClick={()=>handleSetGame(GameType.coc)}

        />
       <Image
        alt="king"
        src="/elprimo.png"
        width={200}
        height={200}
className={clsx(`transition-all duration-100 `,
            game===GameType.brawlstars?'w-[200px] h-[200px]':'w-[100px] h-[100px]'

        )}     
                onClick={()=>handleSetGame(GameType.brawlstars)}

      />
    </div>
  );
};

export default GameSelectArea;
