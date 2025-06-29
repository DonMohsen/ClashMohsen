import { GameType } from "@/types/data.types";
import clsx from "clsx";
import React, { useCallback, useState } from "react";
import ImageKit from "./ImageKit";
import { useGameBadgeStore } from "@/store/useGameBadgeStore";
import { motion, useAnimation } from "framer-motion";
import { ClashIcon } from "./Icons/ClashIcon";
import { RoyaleIcon } from "./Icons/RoyaleIcon";
import BrawlIcon from "./Icons/BrawlIcon";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import Image from "next/image";
import { UserRound } from "lucide-react";

const GameCard = ({ game }: { game: GameType }) => {
  const { game: selectedGame, setGame } = useGameBadgeStore();
  const handleSetGame = (clickedGame: GameType,e:React.MouseEvent<HTMLDivElement, MouseEvent>
) => {
    selectedGame !== clickedGame && setGame(clickedGame);
  };
  const controls = useAnimation();

  const handleClick = useCallback(() => {
    selectedGame!==game&&
    controls
      .start({ scale: 0.9, transition: { duration: 0.1 } })
      .then(() =>
        controls.start({
          scale: 1,
          transition: { type: "spring", stiffness: 400, damping: 20 },
        })
      );

    // Your actual game selection logic can go here
    // handleSetGame(game)
  }, [controls,selectedGame]);
  const [searchMode, setSearchMode] = useState<"player" | "clan">("player");
 const sampleTag: Record<
  GameType,
  { player: string; clan: string }
> = {
  [GameType.coc]: {
    player: "#89YLV9U9Q",
    clan: "#LUCL908C",
  },
  [GameType.clashroyale]: {
    player: "#PRUU9GC",
    clan: "#CRCLN42",
  },
  [GameType.brawlstars]: {
    player: "#PQ9J2C88",
    clan: "#BSCLB123",
  },
};
  return (
    <motion.div
      animate={controls}
  {...(selectedGame !== game && {
    whileTap: { scale: 0.95 },
  })}      onClick={handleClick}
      className={clsx(
        `rounded-[10px] flex flex-col relative h-[300px] w-[200px] max-sm:w-screen `,
        selectedGame !== game && "border-black cursor-pointer",
        selectedGame === GameType.coc
          ? "border-green-500"
          : selectedGame === GameType.brawlstars
          ? "border-yellow-500"
          : selectedGame === GameType.clashroyale
          ? "border-sky-500"
          : "bg-black",
        game === selectedGame ? "border-[5px]" : "border-2"
      )}
    >
      <div className="z-50">
        {game === GameType.coc ? (
          <ClashIcon
            className={clsx(
              `h-12 z-50 text-center w-full`,
              selectedGame === game ? "text-green-500" : "text-black"
            )}
          />
        ) : game === GameType.brawlstars ? (
          <BrawlIcon
            className={clsx(
              `h-12 z-50 text-center w-full`,
              selectedGame === game ? "text-yellow-500" : "text-black"
            )}
          />
        ) : game === GameType.clashroyale ? (
          <RoyaleIcon
            className={clsx(
              `h-12 z-50 text-center w-full`,
              selectedGame === game ? "text-sky-500" : "text-black"
            )}
          />
        ) : (
          <ClashIcon className=" h-10 text-black z-50 text-center w-full" />
        )}
      </div>
      <h1 className="text-black z-50 font-ClashBold text-center w-full">
        {game === GameType.coc
          ? "Clash of Clans"
          : game === GameType.clashroyale
          ? "Clash royale"
          : game === GameType.brawlstars
          ? "Brawl Stars"
          : ""}
      </h1>
   {selectedGame !== game ? (
  <p className="z-50 font-ClashBold w-full h-full flex items-center justify-center">
    Tap to select!
  </p>
) : (
  <div className="z-50 w-full flex flex-col items-center gap-4 justify-center h-full transition-all duration-500">
    <RadioGroup
      value={searchMode}
      onValueChange={(value: "player" | "clan") => setSearchMode(value as "player" | "clan")}
      className="flex flex-col gap-4 z-50 items-start justify-center "
    >
      <div className="flex items-center space-x-2 z-50">
        <RadioGroupItem value="player" id="player" />
        <UserRound className="w-6 h-6" />
        <Label htmlFor="player">Player</Label>
      </div>
      <div className="flex items-center space-x-2 justify-center">
        <RadioGroupItem value="clan" id="clan" />
        <Image alt="clan" src="/clan.png" width={200} height={200} className="w-6 h-6"/>
        <Label htmlFor="clan">Clan</Label>
      </div>
    </RadioGroup>
  </div>
)}
{selectedGame===game&&
<p className="z-50 text-center font-ClashBold w-full items-end justify-center pb-10">
  Now enter a {searchMode} Tag like{" "}
  <span
    onClick={() => {
      navigator.clipboard.writeText(sampleTag[selectedGame][searchMode]);
    }}
    className={clsx(`cursor-pointer hover:text-green-500 transition-colors`,)}
  >
    {sampleTag[selectedGame][searchMode]}
  </span>
</p>


}
      {/* // inside your component */}
      {selectedGame === game && (
        <motion.div
          className="w-[200px] h-[150px] absolute -top-24 max-sm:w-screen  -translate-x-1/2 z-30"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 20,
          }}
        >
          <ImageKit
            className="w-full h-full "
            alt={`${game} image`}
            path={`Supercell/${
              game === GameType.coc
                ? "barbarian-king.png"
                : game === GameType.clashroyale
                ? "king.webp"
                : game === GameType.brawlstars
                ? "elprimo.webp"
                : "barbarian-king.png"
            }`}
          />
        </motion.div>
      )}

   <div
  className={clsx(
    `absolute w-full h-full rounded-[10px] z-50 bg-transparent`,
    selectedGame === game && "pointer-events-none"
  )}
  onClick={(e) => handleSetGame(game, e)}
></div>

      <div
        className={clsx(
          `absolute w-full h-full rounded-[10px]  z-40 bg-white     `
        )}
      ></div>
    </motion.div>
  );
};

export default GameCard;
