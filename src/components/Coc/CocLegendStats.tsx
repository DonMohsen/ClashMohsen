import Image from "next/image";
import React from "react";
import TrophyIcon from "../Icons/TrophyIcon";
import { CocPlayerType } from "@/types/coc.types";

type CocLegendStatsProps = {
  legendStatistics: Exclude<CocPlayerType["legendStatistics"], undefined>;
};

const CocLegendStats = ({ legendStatistics }: CocLegendStatsProps) => {
  const {
    legendTrophies,
    bestBuilderBaseSeason,
    bestSeason,
    currentSeason,
    previousSeason,
  } = legendStatistics;
  return (
    <div className="flex flex-col relative items-center text-center pt-1 bg-gradient-to-t font-ClashBold from-[#584f86] to-[#a696f5] h-full w-full rounded-[10px] mt-2 pb-5 ">
      <p className="text-white">Legend League Tournament</p>
      <div className="flex max-md:flex-col items-center max-md:justify-center justify-between w-full mt-1 max-md:gap-5 max-md:px-5 ">
        <div className="w-full flex">
          <div className="w-[100px]">
            <div className="relative w-[75px] h-[75px] ">
              <Image
                alt="legend league"
                src="/legend-league.png"
                width={200}
                height={200}
                className="w-full h-full"
              />
              <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-lg font-bold">
                {bestSeason?.rank}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center flex-col w-full">
            <p className="text-[10px] text-white w-full text-left">
              Best: {bestSeason?.id}
            </p>
            <div className="flex flex-col w-full items-start justify-center text-white pl-3 font-ClashRegular gap-2 text-[10px] ">
              <div className="bg-[#39385a] rounded-[6px] w-[55%] flex h-[50%] items-center justify-end relative py-3 pr-2 ">
                <TrophyIcon className="w-8 h-8 -translate-x-4 absolute left-0" />
                <p className="text-[16px]">{bestSeason?.trophies}</p>
              </div>
            </div>
          </div>
        </div>
        {previousSeason ? (
          <div className="w-full flex">
            <div className="w-[100px]">
              <div className="relative w-[75px] h-[75px] ">
                <Image
                  alt="legend league"
                  src="/legend-league.png"
                  width={200}
                  height={200}
                  className="w-full h-full"
                />

                <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-lg font-bold">
                  {previousSeason.rank}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center flex-col w-full">
              <p className="text-[10px] text-white w-full text-left">
                Previous: {previousSeason.id}
              </p>
              <div className="flex flex-col w-full items-start justify-center text-white pl-3 font-ClashRegular gap-2 text-[10px] ">
                <div className="bg-[#39385a] rounded-[6px] w-[55%] flex h-[50%] items-center justify-end relative py-3 pr-2 ">
                  <TrophyIcon className="w-8 h-8 -translate-x-4 absolute left-0" />
                  <p className="text-[16px]">{previousSeason.trophies}</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full flex">
            <div className="w-[100px]">
              <div className="relative w-[75px] h-[75px] ">
                <Image
            
                  alt="legend league"
                  src="/no_league.png"
                  width={200}
                  height={200}
                  className="w-full h-full"
                />
              </div>
            </div>

            <div className="flex items-center justify-center flex-col w-full">
               <p className="text-[10px] text-white w-full text-left">
                Previous:
              </p>
              <div className="flex flex-col w-full items-start justify-center text-white  font-ClashRegular  text-[10px] ">
                <p className="text-[12px]">Did not place</p>
              </div>
            </div>
          </div>
        )}

        <div className="w-full flex flex-col h-full ">
          <div className="flex items-center justify-center flex-col w-full gap-1 h-full">
            <p className="text-[10px] text-white w-full text-left -translate-y-2">
              Legend Trophies
            </p>
            <div className="flex flex-col w-full items-start justify-center text-white pl-3 font-ClashRegular gap-2 text-[10px] ">
              <div className="bg-[#39385a] rounded-[6px] w-[55%] flex  items-center justify-end relative  pr-2 ">
                {/* <TrophyIcon className="w-8 h-8 -translate-x-4 absolute left-0" /> */}
                <Image
                  alt="legend-trophies"
                  src="/legend-trophy.webp"
                  width={200}
                  height={200}
                  className="w-10 h-10 -translate-x-4 absolute left-0"
                />
                <p className="text-[16px]">{legendTrophies}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CocLegendStats;
