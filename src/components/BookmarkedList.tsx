"use client";
import { useBookmarkStore } from "@/store/useBookmarkStore";
import Link from "next/link";
import React from "react";
import ExpBadge from "./ExpBadge";
import { cn } from "@/lib/utils";
import {
  BrawlStarsPlayerType,
  ClashRoyalePlayerType,
  GameType,
} from "@/types/data.types";
import Image from "next/image";
import { CocPlayerType } from "@/types/coc.types";

const BookmarkedList = () => {
  const players = useBookmarkStore((s) => s.players);
  const isLoading = useBookmarkStore((s) => s.isLoading);
  return (
    <div className="font-ClashBold flex flex-col gap-5">
      {isLoading && (
        <div className="min-h-[300px] animate-pulse bg-slate-400 min-w-[500px]">
          loadinggggggggggggggggggg
        </div>
      )}
      {!players.length && (
        <p className="py-5 text-center max-sm:text-[12px] text-yellow-500">
          use the golden bookmark option on top of the players profiles, to
          bookmark them!
        </p>
      )}

      {players.map((player) => {
        const { tag, game, data } = player;

        return (
          <Link
            key={tag}
            href={`/${game}/Player/${tag}`}
            className={cn(
              "flex items-center gap-2 justify-start w-full bg-rose-50"
              // game === GameType.coc ? "bg-green-500" : "bg-black"
            )}
          >
            {/* Shared field */}
            <ExpBadge expLevel={data.expLevel} />

            {/* Narrowing by game */}
            {game === GameType.coc && (
              <>
                {/* TypeScript now knows this is CocPlayerType */}
                <Image
                  alt="townhall"
                  src={`/Town_Hall${(data as CocPlayerType).townHallLevel}${
                    (data as CocPlayerType).townHallWeaponLevel
                      ? `-${(data as CocPlayerType).townHallWeaponLevel}`
                      : ""
                  }.webp`}
                  width={600}
                  height={600}
                  className="w-14 h-14 "
                />
                <span>{(data as CocPlayerType).name}</span>
              </>
            )}

            {game === GameType.clashroyale && (
              <>
                {/* ClashRoyalePlayerType */}
                <Image
                  alt="league"
                  src={`/league_${(data as ClashRoyalePlayerType).currentPathOfLegendSeasonResult.leagueNumber}.webp`}
                  width={200}
                  height={200}
                  className="w-14 h-14 "
                  />         
                  
                  <span>{(data as ClashRoyalePlayerType).name}</span>
                       </>
                )}

            {game === GameType.brawlstars && (
              <>
                {/* BrawlStarsPlayerType */}
                <span>{(data as BrawlStarsPlayerType).name}</span>
                <span>Trophies: {(data as BrawlStarsPlayerType).trophies}</span>
              </>
            )}
          </Link>
        );
      })}
    </div>
  );
};

export default BookmarkedList;
