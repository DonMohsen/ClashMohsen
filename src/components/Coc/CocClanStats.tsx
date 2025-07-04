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
  };
  return (
    <div className=" max-w-3xl overflow-x-hidden mx-auto bg-white shadow-xl h-full w-full rounded-b-2xl  p-3 flex">
      <div className="w-[120px] transition-all duration-500 ">
        <motion.div
          onClick={() => setSelectedStats("top")}
          className={cn(
            "bg-[#7b7d69] rounded-l-[10px] p-2 flex items-center justify-center ",
            selectedStats === "bottom" &&
              " bg-[#4e5043] border-2 border-black/[0.2] sm:ml-2 mb-[1px] cursor-pointer"
          )}
        >
          <Image
            alt="clan-badge"
            src={clan.badgeUrls.medium}
            width={500}
            height={500}
            className={cn(
              `w-20 h-20 max-sm:w-16 max-sm:h-16`,
              selectedStats === "bottom" && "scale-90"
            )}
          />
        </motion.div>
        <motion.div
          className={cn(
            "bg-[#7b7d69] rounded-l-[10px] p-2 flex items-center justify-center pointer ",
            selectedStats === "top" && " bg-[#4e5043] border-2  border-black/[0.2] sm:ml-2 mt-[1px] cursor-pointer"
          )}
          onClick={() => setSelectedStats("bottom")}
        >
          <Image
            alt="clan-statistics"
            src={"/statistics.png"}
            width={500}
            height={500}
            className={cn(
              `w-20 h-20 max-sm:w-16 max-sm:h-16`,
              selectedStats === "top" && "scale-90"
            )}
          />
        </motion.div>
      </div>
      <div className="flex w-full bg-gradient-to-l from-[#676554] to-[#7b7d69] rounded-r-[10px]">
        {/* //!left side selection */}
        {/* //!left side stats */}

        <div className="w-full ">
          <CocClanHeader
            data={cocPicked}
            tag={getCorrectCocClanTag(clan.tag)}
          />
        </div>
      </div>
    </div>
  );
};

export default CocClanStats;
