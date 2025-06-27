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
import TrophyIcon from "./Icons/TrophyIcon";

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
    role,
    donations,
    donationsReceived,

  } = player;

  return (
    <div className="max-w-3xl overflow-x-hidden mx-auto bg-white shadow-xl h-full w-full rounded-b-2xl space-y-6 p-3">
      {/* Header */}
      <div className="flex flex-col relative items-center text-center pt-1 bg-[#839bde] h-full w-full rounded-[10px] ">
        <div className="absolute top-0 right-0 ">
          <BookmarkToggle isBookmarked={isBookmarked} onToggle={handleToggle} />
        </div>
        <div className="flex  flex-row max-md:flex-col w-full h-full ">
          {/* //! The Left side of header */}
          <div className="w-full  flex flex-col  h-full  ">
            <div className="flex items-center justify-start px-2 gap-2 w-full ">
              <ExpBadge expLevel={expLevel} />
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
                    <p
                      className="text-md font-extrabold text-white font-ClashBold"
                      // style={{ WebkitTextStroke: "0.5px black" }}
                    >
                      {clan.name}
                    </p>
                    <p className="text-sm text-gray-500">{role}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* //! The Right side of header */}

          <div className="w-full px-2 flex items-center flex-col  h-full justify-start font-ClashBold border-l pb-5 mb-5">
            <div className="flex  w-full items-center justify-center">
              {league?.iconUrls.medium && (
                <Image
                  src={league.iconUrls.medium}
                  alt={league.name}
                  width={100}
                  height={100}
                  className="mt-2 w-[100px] h-[100px] max-md:w-[80px] max-md:h-[80px] z-50"
                />
              )}
              <div className="flex flex-col items-start w-full h-full  justify-center gap-0">
                <div className="flex items-center justify-start -translate-x-12 from-slate-900 to-transparent bg-gradient-to-r w-[90%]">

                <p className="mt-1  text-white text-md max-md:text-sm  translate-x-12">
                  {league?.name}
                </p>
                </div>
                <div className="flex items-center justify-start gap-0 w-[90%] -translate-x-10 bg-gradient-to-r from-purple-900 to-transparent">
  <TrophyIcon className="w-8 h-8 max-md:w-7 max-md:h-7 translate-x-10" />
  <p className="text-[20px] max-md:text-sm text-white translate-x-10">{trophies}</p>
</div>

              </div>
            </div>
            <div className="flex flex-row w-full h-full pt-10 max-md:pt-4">
              <div className="flex flex-col w-full items-start justify-center text-white pl-5 font-ClashRegular gap-2 text-[10px] ">
                <p>War Stars Won:</p>
                <div className="bg-[#39385a] rounded-[6px] w-[90%] flex h-[50%] items-center justify-center relative ">
                  <Image
                    alt="war-stars-won"
                    src="/white-star.png"
                    width={200}
                    height={200}
                    className="w-10 h-10 -translate-x-4 absolute left-0"
                  />
                  <p className="text-[20px]">

                  {warStars}
                  </p>
                </div>
              </div>
                <div className="flex flex-col w-full items-start justify-center text-white pl-5 font-ClashRegular gap-2 text-[10px] ">
                <p>All Time Best:</p>
                {league?.iconUrls.small&&
                
                <div className="bg-[#39385a] rounded-[6px] w-[90%] flex h-[50%] items-center justify-center relative ">
                  <Image
                    alt="war-stars-won"
                    src={league.iconUrls.small}
                    width={200}
                    height={200}
                    className="w-10 h-10 -translate-x-4 absolute left-0"
                    />
                  <p className="text-[20px]">

                  {bestTrophies}
                  </p>
                </div>
                  }
              </div>
            </div>
          </div>
        </div>
        <div className=" border-t-2 pb-1 pt-[1px] border-[#7589c6] w-full flex items-center justify-center font-ClashRegular text-[10px] max-md:text-[6px] px-2 text-white">
          <div className="flex items-center justify-center w-full"><p className="w-full">Troops donated:</p><div className="bg-[#566591] px-4 max-md:px-1 py-[1px] rounded-[4px]">{donations}</div></div>
          <div className="flex items-center justify-center w-full"><p className="w-full">Troops recieved:</p><div className="bg-[#566591] px-4 max-md:px-1 py-[1px] rounded-[4px]">{donationsReceived}</div></div>
          <div className="flex items-center justify-center w-full"><p className="w-full">Attacks Won:</p><div className="bg-[#566591] px-4 max-md:px-1 py-[1px] rounded-[4px]">{attackWins}</div></div>
          <div className="flex items-center justify-center w-full"><p className="w-full">Defence Won:</p><div className="bg-[#566591] px-4 max-md:px-1 py-[1px] rounded-[4px]">{defenseWins}</div></div>
        </div>
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
