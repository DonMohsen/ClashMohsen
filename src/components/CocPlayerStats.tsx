"use client";

import React from "react";
import { CocPlayerType, GameType } from "@/types/data.types";
import Image from "next/image";
import clsx from "clsx";
import { useBookmarkStore } from "@/store/useBookmarkStore";
import { BookmarkIcon } from "lucide-react";
import { TiPlus } from "react-icons/ti";
import { AnimatePresence, motion } from "framer-motion";
import BookmarkToggle from "./BookmarkToggle";
import ExpBadge from "./ExpBadge";

type Props = {
  player: CocPlayerType;
  playerTag: string;
};

const CocPlayerStats: React.FC<Props> = ({ player, playerTag }) => {
  const game = GameType.coc;
  const players = useBookmarkStore((s) => s.players);

  const addPlayer = useBookmarkStore((s) => s.addPlayer);
  const remove = useBookmarkStore((s) => s.removePlayer);

  const isBookmarked = players.some(
    (p) => p.tag === playerTag && p.game === game
  );

  const handleToggle = () => {
    if (isBookmarked) {
      remove(playerTag, game);
    } else {
      addPlayer(playerTag, game, player);
    }
  };
  const {
    name,
    tag,
    townHallLevel,
    expLevel,
    trophies,
    bestTrophies,
    warStars,
    attackWins,
    defenseWins,
    league,
    clan,
    legendStatistics,
    labels,
    achievements,
    troops,
    spells,
    role

  } = player;

  return (
    <div className="max-w-3xl overflow-x-hidden mx-auto bg-white shadow-xl rounded-b-2xl space-y-6">
      {/* Header */}
      <div className="flex flex-col items-center text-center bg-[#a89b8b]">

        <BookmarkToggle isBookmarked={isBookmarked} onToggle={handleToggle} />
        <div className="flex items-center justify-start px-2 gap-2 w-full ">
    <ExpBadge expLevel={expLevel}/>
    <div className="flex flex-col gap-0 items-start justify-start w-full ">

<h2
  className="text-xl font-ClashBold text-white"
  // style={{ WebkitTextStroke: "0.5px black" }}
>
  {name}
</h2>
        <p className="text-gray-500 text-[12px] font-ClashBold    ">
          {tag}
        </p>
    </div>
        </div>
        <div className="flex items-center justify-start w-full gap-2 px-2 pt-1 font-ClashBold">
     {clan && (
        <div className="flex items-center w-full gap-1 justify-start  ">
          {clan.badgeUrls.small && (
            <Image
              src={clan.badgeUrls.small}
              alt={clan.name}
              width={48}
              height={48}
              className="rounded"
            />
          )}
          <div className="flex items-start justify-center flex-col">
            <p className="text-md font-extrabold text-white font-ClashBold"
              // style={{ WebkitTextStroke: "0.5px black" }}

            >{clan.name}</p>
            <p className="text-sm text-gray-500">
              {role}
            </p>
          </div>
        </div>
      )}
        </div>

        {league?.iconUrls.medium && (
          <Image
            src={league.iconUrls.medium}
            alt={league.name}
            width={64}
            height={64}
            className="mt-2"
          />
        )}
        <p className="mt-1 font-semibold text-blue-600">{league?.name}</p>
      </div>

      {/* Basic Info */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
        <Info title="Town Hall" value={townHallLevel} />
        <Info title="XP Level" value={expLevel} />
        <Info title="Trophies" value={trophies} />
        <Info title="Best Trophies" value={bestTrophies} />
        <Info title="War Stars" value={warStars} />
        <Info title="Attack Wins" value={attackWins} />
        <Info title="Defense Wins" value={defenseWins} />
      </div>

      {/* Clan Info */}
 

      {/* Legend Stats */}
      {legendStatistics?.legendTrophies && (
        <div className="bg-yellow-50 rounded-lg p-4">
          <p className="font-semibold text-yellow-800">🏆 Legend Trophies:</p>
          <p className="text-lg">{legendStatistics.legendTrophies}</p>
        </div>
      )}

      {/* Labels (Player Tags) */}
      {labels.length > 0 && (
        <div>
          <p className="font-medium mb-2">🏷️ Labels:</p>
          <div className="flex flex-wrap gap-2">
            {labels.map((label) => (
              <span
                key={label.id}
                className="bg-gray-100 text-xs px-2 py-1 rounded-full border"
              >
                {label.name}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Achievements Preview */}
      <div>
        <p className="font-medium mb-2">⭐ Top Achievements:</p>
        <ul className="text-sm list-disc list-inside">
          {achievements.slice(0, 3).map((a) => (
            <li key={a.name}>
              {a.name}: {a.value}/{a.target}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Info = ({ title, value }: { title: string; value: number | string }) => (
  <div className="flex flex-col items-center">
    <span className="font-semibold">{value}</span>
    <span className="text-xs text-gray-500">{title}</span>
  </div>
);

export default CocPlayerStats;
