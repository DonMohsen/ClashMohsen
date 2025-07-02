"use client";

import React from "react";
import { CocPlayerType, GameType } from "@/types/data.types";
import Image from "next/image";
import clsx from "clsx";
import { useBookmarkStore } from "@/store/useBookmarkStore";
import { BookmarkIcon } from "lucide-react";
import { TiPlus } from "react-icons/ti";
import { AnimatePresence, motion } from "framer-motion";
import BookmarkToggle from "../BookmarkToggle";
import ExpBadge from "../ExpBadge";
import TrophyIcon from "../Icons/TrophyIcon";
import CocLegendStats from "./CocLegendStats";
import CocPlayerStatsHeader from "./CocPlayerStatsHeader";
import CocPlayerStatsTroops from "./CocPlayerStatsTroops";

type Props = {
  player: CocPlayerType;
};

const CocPlayerStats: React.FC<Props> = ({ player }) => {
  return (
    <div className="max-w-3xl overflow-x-hidden mx-auto bg-white shadow-xl h-full w-full rounded-b-2xl  p-3">
      {/* Header */}
      
      <CocPlayerStatsHeader player={player} />
      {player.legendStatistics && (
        <CocLegendStats legendStatistics={player.legendStatistics} />
      )}
      <CocPlayerStatsTroops heroEquipment={player.heroEquipment} heroes={player.heroes} spells={player.spells} townHallLevel={player.townHallLevel} troops={player.troops}  townHallWeaponLevel={player.townHallWeaponLevel} />
    </div>
  );
};

export default CocPlayerStats;
