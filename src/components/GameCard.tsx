import { GameType } from "@/types/data.types";
import clsx from "clsx";
import React, { useCallback } from "react";
import ImageKit from "./ImageKit";
import { useGameBadgeStore } from "@/store/useGameBadgeStore";
import { motion, useAnimation } from "framer-motion";

const GameCard = ({ game }: { game: GameType }) => {
    const { game:selectedGame, setGame } = useGameBadgeStore();
   const handleSetGame = (clickedGame: GameType) => {
      selectedGame !== clickedGame && setGame(clickedGame);
    };
      const controls = useAnimation();

  const handleClick = useCallback(() => {
    controls
      .start({ scale: 0.9, transition: { duration: 0.1 } })
      .then(() =>
        controls.start({ scale: 1, transition: { type: "spring", stiffness: 400, damping: 20 } })
      );

    // Your actual game selection logic can go here
    // handleSetGame(game)
  }, [controls]);
  return (
     <motion.div
      animate={controls}
      onClick={handleClick}
      className={clsx(
        `rounded-[10px] flex relative h-[300px] w-[200px] max-sm:w-screen bg-black cursor-pointer`,
        game === GameType.coc
          ? "border-green-500"
          : game === GameType.brawlstars
          ? "border-yellow-500"
          : game === GameType.clashroyale
          ? "border-sky-500"
          : "bg-black"
      )}
    >

// inside your component
{selectedGame === game && (
  <motion.div
    className="w-[200px] h-[150px] absolute -top-24 max-sm:w-screen  -translate-x-1/2 z-40"
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

<div className="absolute w-full h-full rounded-[10px] bg-red-800 z-50 "

  onClick={() => handleSetGame(game)}
>

</div>

    </motion.div>
  );
};

export default GameCard;
