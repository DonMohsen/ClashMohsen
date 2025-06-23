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
     </div>
  );
};

export default ClashRoyalePlayerPage;
