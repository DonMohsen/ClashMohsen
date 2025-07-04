"use client";
import { GameType } from "@/types/data.types";
import clsx from "clsx";
import React, { useCallback, useState } from "react";
import ImageKit from "./ImageKit";
import { useGameBadgeStore } from "@/store/useGameBadgeStore";
import { motion, useAnimation } from "framer-motion";
import { ClashIcon } from "./Icons/ClashIcon";
import { RoyaleIcon } from "./Icons/RoyaleIcon";
import BrawlIcon from "./Icons/BrawlIcon";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import Image from "next/image";
import { UserRound } from "lucide-react";
import { toast } from "sonner"; // or "react-hot-toast"
import { useTagTypeStore } from "@/store/useTagTypeStore";
import { TagType } from "@/types/general.types";

const GameCard = ({ game }: { game: GameType }) => {
  const { game: selectedGame, setGame } = useGameBadgeStore();
  const handleSetGame = (
    clickedGame: GameType,
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    selectedGame !== clickedGame && setGame(clickedGame);
  };
  const controls = useAnimation();

  const handleClick = useCallback(() => {
    selectedGame !== game &&
      controls.start({ scale: 0.9, transition: { duration: 0.1 } }).then(() =>
      {
        setTag(TagType.player)
        controls.start({
          scale: 1,
          transition: { type: "spring", stiffness: 400, damping: 20 },
        })
      }
      );

    // Your actual game selection logic can go here
    // handleSetGame(game)
  }, [controls, selectedGame, game]);
  const { setTag, tagType } = useTagTypeStore();
  const sampleTag: Record<GameType, Record<string, string>> = {
    [GameType.coc]: {
      player: "#89YLV9U9Q",
      clan: "#20888UYG",
    },
    [GameType.brawlstars]: {
      player: "#LYOQ2LP",
      club: "#2UJ0G8UQ8",
    },
    [GameType.clashroyale]: {
      player: "#PRUU9GC",
      clan: "#JUJGUG0",
    },
  };

  return (
    <motion.div
      animate={controls}
      {...(selectedGame !== game && {
        whileTap: { scale: 0.95 },
      })}
      onClick={handleClick}
      className={clsx(
        `rounded-[10px] flex flex-col max-sm:flex-row relative h-[300px] w-[200px] max-sm:w-[90%] max-sm:h-[100px] select-none  `,
        selectedGame !== game
          ? "border-black cursor-pointer"
          : selectedGame === GameType.coc
          ? "border-green-500"
          : selectedGame === GameType.brawlstars
          ? "border-yellow-500"
          : selectedGame === GameType.clashroyale
          ? "border-sky-500"
          : "bg-black",
        game === selectedGame ? "border-[5px]" : "border-2"
      )}
    >
      <div className="z-50 max-sm:h-full max-sm:w-full   max-sm:flex max-sm:items-center max-sm:justify-center">
        {game === GameType.coc ? (
          <ClashIcon
            className={clsx(
              `h-12 z-50 text-center w-full`,
              selectedGame === game ? "text-green-500" : "text-black"
            )}
          />
        ) : game === GameType.brawlstars ? (
          <BrawlIcon
            className={clsx(
              `h-12 z-50 text-center w-full`,
              selectedGame === game ? "text-yellow-500" : "text-black"
            )}
          />
        ) : game === GameType.clashroyale ? (
          <RoyaleIcon
            className={clsx(
              `h-12 z-50 text-center w-full`,
              selectedGame === game ? "text-sky-500" : "text-black"
            )}
          />
        ) : (
          <ClashIcon className=" h-10 text-black z-50 text-center w-full" />
        )}
      </div>
      <h1 className="text-black z-50 font-ClashBold text-center w-full max-sm:hidden">
        {game === GameType.coc
          ? "Clash of Clans"
          : game === GameType.clashroyale
          ? "Clash royale"
          : game === GameType.brawlstars
          ? "Brawl Stars"
          : ""}
      </h1>
      {selectedGame !== game ? (
        <p className="z-50 font-ClashBold w-full h-full flex items-center justify-center sm:-rotate-45 text-[24px] max-sm:text-[12px]">
          Tap to select!
        </p>
      ) : (
        <div className="z-50 w-full flex flex-col items-center gap-4 max-sm:gap-1 justify-center h-[50%] max-sm:h-full  max-sm:left-0 min-h-[50%] transition-all duration-500">
          <RadioGroup
            value={tagType}
onValueChange={(value) => {
  if (value === "cr-clan") {
    setTag(TagType.clan);
  } else {
    setTag(value as TagType);
  }
}}
            className="flex flex-col gap-4 z-50 items-start justify-center "
          >
            <div className="flex items-center space-x-2 z-50">
              <RadioGroupItem value="player" id="player" />
              <UserRound className="w-6 h-6" />
              <Label htmlFor="player">Player</Label>
            </div>
            {game === GameType.coc && (
              <div className="flex items-center space-x-2 justify-center">
                <RadioGroupItem value="clan" id="clan" />
                <Image
                  priority={true}
                  alt="clan"
                  src="/clan.png"
                  width={200}
                  height={200}
                  className="w-6 h-6"
                />
                <Label htmlFor="clan">Clan</Label>
              </div>
            )}
            {game === GameType.brawlstars && (
              <div className="flex items-center space-x-2 justify-center">
                <RadioGroupItem value="club" id="club" />
                <Image
                  priority={true}
                  alt="club"
                  src="/club.png"
                  width={200}
                  height={200}
                  className="w-6 h-6"
                />
                <Label htmlFor="club">Club</Label>
              </div>
            )}
            {game === GameType.clashroyale && (
              <div className="flex items-center space-x-2 justify-center">
                <RadioGroupItem value="cr-clan" id="cr-clan" />
                <Image
                  priority={true}
                  alt="clash-royale-clan"
                  src="/clash-royale-clan.png"
                  width={200}
                  height={200}
                  className="w-6 h-6"
                />
                <Label htmlFor="cr-clan">Clan</Label>
              </div>
            )}
          </RadioGroup>
        </div>
      )}
      {selectedGame === game && (
        <div className="z-50 text-center font-ClashBold w-full sm:items-end justify-center sm:pb-10 text-[14px] max-sm:text-[10px] max-sm:flex max-sm:items-center max-sm:justify-center max-sm:h-full">
          <div className=" w-full h-full max-sm:flex max-sm:items-center max-sm:justify-center ">
            <p>
              Now enter a {tagType} Tag like{" "}
              <span
                onClick={() => {
                  navigator.clipboard.writeText(
                    sampleTag[selectedGame][tagType]
                  );
                  toast.success(
                    `${sampleTag[selectedGame][tagType]} Copied to clipboard!`
                  );
                }}
                className={clsx(
                  `cursor-pointer transition-colors`,
                  game === GameType.coc
                    ? "text-green-500 hover:text-green-400"
                    : game === GameType.clashroyale
                    ? "text-sky-500 hover:text-sky-400"
                    : game === GameType.brawlstars
                    ? "text-yellow-500 hover:text-yellow-400"
                    : "text-green-500 hover:text-green-400"
                )}
              >
                {sampleTag[selectedGame][tagType]}
              </span>
            </p>
          </div>
        </div>
      )}
      {/* // inside your component */}
      {selectedGame === game && (
        <motion.div
          className="w-[200px] h-[150px] absolute -top-24 max-sm:w-screen  -translate-x-1/2 z-30 max-sm:hidden"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 20,
          }}
        >
          <ImageKit
            className="w-full h-full "
            alt={`${game} image`}
            path={`Supercell/${
              game === GameType.coc
                ? "barbarian-king.png"
                : game === GameType.clashroyale
                ? "king.webp"
                : game === GameType.brawlstars
                ? "elprimo.webp"
                : "barbarian-king.png"
            }`}
          />
        </motion.div>
      )}

      <div
        className={clsx(
          `absolute w-full h-full rounded-[10px] z-50 bg-transparent`,
          selectedGame === game && "pointer-events-none"
        )}
        onClick={(e) => handleSetGame(game, e)}
      ></div>

      <div
        className={clsx(
          `absolute w-full h-full rounded-[10px]  z-40 bg-white     `
        )}
      ></div>
    </motion.div>
  );
};

export default GameCard;
