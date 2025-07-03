"use client";

import React from "react";
import CocLegendStats from "./CocLegendStats";
import CocPlayerStatsHeader from "./CocPlayerStatsHeader";
import CocPlayerStatsTroops from "./CocPlayerStatsTroops";
import { CocPlayerType } from "@/types/coc.types";

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
      <CocPlayerStatsTroops
        heroEquipment={player.heroEquipment}
        heroes={player.heroes}
        spells={player.spells}
        townHallLevel={player.townHallLevel}
        troops={player.troops}
        townHallWeaponLevel={player.townHallWeaponLevel}
      />
    </div>
  );
};

export default CocPlayerStats;
