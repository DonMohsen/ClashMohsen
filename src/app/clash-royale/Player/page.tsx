"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ClashIcon } from "@/components/Icons/ClashIcon";
import { RoyaleIcon } from "@/components/Icons/RoyaleIcon";
import SearchBar from "@/components/SearchBar";
import clsx from "clsx";
import { GameType } from "@/types/data.types";

const ClashRoyalePlayerPage = () => {
  const [game, setGame] = useState<GameType>(GameType.coc);

  const toggleGame = () => {
    setGame((prev) => (prev === GameType.coc ? GameType.clashroyale : GameType.coc));
  };

  return (
    <div className="w-full min-h-screen bg-slate-100 flex flex-col items-center justify-center">
      <div
        className={clsx(`w-14 h-14 bg-gradient-to-br  rounded-xl cursor-pointer shadow-md 
        border-green-700 flex items-center justify-center overflow-hidden`,
          game===GameType.coc?' from-green-500 to-green-400':'from-sky-500 to-sky-400'
        )
        }
        onClick={toggleGame}
      >
        <AnimatePresence mode="wait">
          {game === GameType.coc ? (
            <motion.div
              key="coc"
              initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.5, rotate: 45 }}
              transition={{ duration: 0.1, ease: "easeInOut" }}
              className="w-8 h-8 flex items-center justify-center"
            >
              <ClashIcon className="w-full h-full text-white stroke-[2.5]" />
            </motion.div>
          ) : (
            <motion.div
              key="royale"
              initial={{ opacity: 0, scale: 0.5, rotate: 45 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.5, rotate: -45 }}
              transition={{ duration: 0.1, ease: "easeInOut" }}
              className="w-12 h-12 flex items-center justify-center"
            >
              <RoyaleIcon className="w-full h-full text-white stroke-[1.5] scale-[1.3]" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <SearchBar game={game} />
    </div>
  );
};

export default ClashRoyalePlayerPage;
