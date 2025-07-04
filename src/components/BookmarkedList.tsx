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
import { CocClanType, CocPlayerType } from "@/types/coc.types";
import { CocClanPick, CocPlayerPick, TagType } from "@/types/general.types";

const BookmarkedList = () => {
  const bookmarks = useBookmarkStore((s) => s.bookmarks);
  const isLoading = useBookmarkStore((s) => s.isLoading);
  return (
    <div className="font-ClashBold flex flex-col gap-5">
      {isLoading && (
        <div className="min-h-[300px] animate-pulse bg-slate-400 min-w-[500px]">
          loadinggggggggggggggggggg
        </div>
      )}
      {!bookmarks.length && (
        <p className="py-5 text-center max-sm:text-[12px] text-yellow-500">
          use the golden bookmark option on top of the players profiles, to
          bookmark them!
        </p>
      )}

      {bookmarks.map((bookmark) => {
        const { tag, game, data,tagType } = bookmark;

        return (
          <Link
            key={tag}
            href={`/${game}/${tagType}/${tag}`}
            className={cn(
              "flex items-center gap-2 justify-start w-full "
              // game === GameType.coc ? "bg-green-500" : "bg-black"
            )}
          >
            {/* Shared field */}

            {/* Narrowing by game */}
            {game === GameType.coc && tagType===TagType.player&& (
              <>
              <ExpBadge expLevel={(data as CocPlayerType).expLevel} />
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
                <span>{(data as CocPlayerPick).name}</span>
              </>
            )}
             {game === GameType.coc && tagType===TagType.clan&& (
              <>
              {/* <ExpBadge expLevel={(data as CocPlayerType).expLevel} /> */}
                {/* TypeScript now knows this is CocPlayerType */}
                <Image
                  alt="clan-badge"
                  src={(data as CocClanPick).badgeUrls.small}
                  width={600}
                  height={600}
                  className="w-12 h-12 "
                />
                <Image alt="cwl-league" src={`/${(data as CocClanPick).warLeague.name}.png`} width={200} height={200} className="w-14 h-14"/>
                <span>{(data as CocClanPick).name}</span>
              </>
            )}

            {game === GameType.clashroyale && (
              <>

                            <ExpBadge expLevel={(data as ClashRoyalePlayerType).expLevel} />
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
                              <ExpBadge expLevel={(data as BrawlStarsPlayerType).expLevel} />

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
