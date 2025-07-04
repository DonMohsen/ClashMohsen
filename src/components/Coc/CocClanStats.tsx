"use client";
import { CocClanType } from "@/types/coc.types";
import React, { useState } from "react";
import BookmarkToggle from "../BookmarkToggle";
import { GameType } from "@/types/data.types";
import { getCorrectCocClanTag } from "@/lib/format-custom-tag";
import { CocClanPick, TagType } from "@/types/general.types";
import CocClanHeader from "./CocClanHeader";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import TrophyIcon from "../Icons/TrophyIcon";
type Props = {
  clan: CocClanType;
};

const CocClanStats: React.FC<Props> = ({ clan }) => {
  const [selectedStats, setSelectedStats] = useState<"top" | "bottom">("top");
  const cocPicked: CocClanPick = {
    badgeUrls: clan.badgeUrls,
    location: clan.location,
    name: clan.name,
    tag: clan.tag,
    warLeague: clan.warLeague,
  };
  return (
    <div className=" max-w-3xl overflow-x-hidden mx-auto bg-white shadow-xl h-full w-full rounded-b-2xl p-3 flex">
      <div className="w-full h-full flex">
        <div className="w-[120px] h-full flex flex-col">
          <motion.div
            onClick={() => setSelectedStats("top")}
            className={cn(
              "bg-[#7b7d69] rounded-l-[10px] p-2 flex items-center justify-center h-1/2",
              selectedStats === "bottom" &&
                "bg-[#4e5043] border-black/[0.2] mb-[1px] cursor-pointer"
            )}
          >
            <Image
              alt="clan-badge"
              src={clan.badgeUrls.medium}
              width={500}
              height={500}
              className={cn(
                `w-20 h-20 max-sm:w-16 max-sm:h-16`,
                selectedStats === "bottom" && "scale-75"
              )}
            />{" "}
          </motion.div>

          <motion.div
            onClick={() => setSelectedStats("bottom")}
            className={cn(
              "bg-[#7b7d69] rounded-l-[10px] p-2 flex items-center justify-center h-1/2",
              selectedStats === "top" &&
                "bg-[#4e5043] border-black/[0.2] mt-[1px] cursor-pointer"
            )}
          >
            <Image
              alt="clan-statistics"
              src={"/statistics.png"}
              width={500}
              height={500}
              className={cn(
                `w-16 h-16 max-sm:w-16 max-sm:h-16`,
                selectedStats === "top" && "scale-75"
              )}
            />{" "}
          </motion.div>
        </div>
        <div className="flex flex-col w-full min-h-full max-h-full  bg-gradient-to-l h-full from-[#676554] to-[#7b7d69] rounded-r-[10px] max-sm:rounded-b-[10px] p-2 max-sm:min-h-[350px]">
          {/* //!right side stats */}

          <div className="w-full relative">
            <CocClanHeader
              data={cocPicked}
              tag={getCorrectCocClanTag(clan.tag)}
            />
          </div>
          {selectedStats === "top" ? (
            <div className="w-full flex h-full max-sm:flex-col ">
              {/* //!left side of top stats */}
              <div className="w-[50%] max-sm:text-[8px]  max-sm:w-full  font-ClashBold text-[10px] mt-1 flex flex-col items-center justify-between gap-1 text-white sm:border-r-2 border-black/[0.3] sm:pr-3">
                <p>{clan.description}</p>
                <div className=" mb-2 flex gap-4 items-end  justify-start w-full h-full  ">
                  {clan.labels.map((label) => (
                    <Image
                      key={label.id}
                      alt="label"
                      src={label.iconUrls.small}
                      width={200}
                      height={200}
                      className="w-8 h-8"
                    />
                  ))}
                </div>
              </div>
              {/* //!right side of top stats */}
              <div className=" w-[50%] max-sm:text-[8px] max-sm:w-full font-ClashBold text-[10px] mt-1 flex flex-col items-center justify-start gap-1 text-white sm:pl-3 sm:pr-[40px]">
                <div className="w-full border-b-2 border-black/[0.1] flex items-center justify-between ">
                  <p>Clan War League</p>
                  <p>{clan.warLeague.name}</p>
                </div>
                <div className="w-full border-b-2 border-black/[0.1] flex items-center justify-between ">
                  <p className="w-full">Total points:</p>
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center justify-center gap-[2px]">
                      <p>{clan.clanPoints}</p>
                      <TrophyIcon className="w-4 h-4" />
                    </div>
                    <div className="flex items-center justify-center gap-[2px]">
                      <p>{clan.clanBuilderBasePoints}</p>
                      <Image
                        alt="builderbase-trophy"
                        src="/builderbase-trophy.png"
                        width={100}
                        height={100}
                        className="w-4 h-4"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full border-b-2 border-black/[0.1] flex items-center justify-between ">
                  <p>Clan Location</p>
                  {clan.location ? (
                    <p>{clan.location.name}</p>
                  ) : (
                    <p>International</p>
                  )}
                </div>
                <div className="w-full border-b-2 border-black/[0.1] flex items-center justify-between ">
                  <p>Clan Language</p>
                  {clan.chatLanguage ? (
                    <p>{clan.chatLanguage.name}</p>
                  ) : (
                    <p>International</p>
                  )}
                </div>
                <div className="w-full border-b-2 border-black/[0.1] flex items-center justify-between ">
                  <p>Type</p>
                  <p>{clan.type}</p>
                </div>
                <div className="w-full border-b-2 border-black/[0.1] flex items-center justify-between ">
                  <p className="w-full">Required trophies:</p>
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center justify-center gap-[2px]">
                      <p>{clan.requiredTrophies}</p>
                      <TrophyIcon className="w-4 h-4" />
                    </div>
                    <div className="flex items-center justify-center gap-[2px]">
                      <p>{clan.requiredBuilderBaseTrophies}</p>
                      <Image
                        alt="builderbase-trophy"
                        src="/builderbase-trophy.png"
                        width={100}
                        height={100}
                        className="w-4 h-4"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full border-b-2 border-black/[0.1] flex items-center justify-between ">
                  <p>Required Town Hall level:</p>
                  <p>{clan.requiredTownhallLevel}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full flex max-sm:flex-col ">
              {/* //!left side of bottom stats */}
              <div className="w-[60%] max-sm:w-full  font-ClashBold text-[10px] mt-1 flex flex-col items-center justify-center gap-1 text-white sm:border-r-2 border-black/[0.3] sm:pr-3">
                <div className="w-full border-b-2 border-black/[0.1] flex items-center justify-between ">
                  <p>Wars Won</p>
                  <p>{clan.warWins}</p>
                </div>
                <div className="w-full border-b-2 border-black/[0.1] flex items-center justify-between ">
                  <p>War Win Streak</p>
                  <p>{clan.warWinStreak}</p>
                </div>
                <div className="w-full border-b-2 border-black/[0.1] flex items-center justify-between ">
                  <p>Clan Leader</p>
                  <p>
                    {
                      clan.memberList.find((member) => member.role === "leader")
                        ?.name
                    }
                  </p>
                </div>
                <div className="w-full border-b-2 border-black/[0.1] flex items-center justify-between ">
                  <p>War Frequency</p>
                  <p>{clan.warFrequency}</p>
                </div>
                <div className="w-full border-b-2 border-black/[0.1] flex items-center justify-between ">
                  <p>Capital Hall Level</p>
                  <p>{clan.clanCapital.capitalHallLevel}</p>
                </div>
                <div className="w-full  border-black/[0.1] flex items-center justify-between ">
                  <p>Capital Upgrades</p>
                  <p>{clan.clanCapitalPoints}</p>
                </div>
              </div>
              {/* //!right side of bottom stats */}
              <div className="w-[40%] max-sm:w-full font-ClashBold text-[10px] mt-1 flex flex-col items-center justify-start gap-1 text-white sm:pl-3">
                <div className="w-full border-b-2 border-black/[0.1] flex items-center justify-between ">
                  <p>Friendlly Wars Enabled</p>
                  <p>{clan.isFamilyFriendly ? "Yes" : "No"}</p>
                </div>
                <div className="w-full border-b-2 border-black/[0.1] flex items-center justify-between ">
                  <p>Public War Log</p>
                  <p>{clan.isWarLogPublic ? "Yes" : "No"}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CocClanStats;
