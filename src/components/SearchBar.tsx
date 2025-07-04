"use client";

import { useGameBadgeStore } from "@/store/useGameBadgeStore";
import { GameType } from "@/types/data.types";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, FormEvent } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import GameSelectBadge from "./GameSelectBadge";
import clsx from "clsx";
import { getCorrectCocClanTag, getCorrectCocPlayerTag } from "@/lib/format-custom-tag";
import { useTagTypeStore } from "@/store/useTagTypeStore";
import { TagType } from "@/types/general.types";

const SEARCH_KEY = "recentSearches"; // key for localStorage

export default function SearchBar() {
  const { game } = useGameBadgeStore();
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const{tagType}=useTagTypeStore()
  // Load saved searches from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(SEARCH_KEY);
    if (saved) {
      setSuggestions(JSON.parse(saved));
    }
  }, []);

  const saveSearch = (tag: string) => {
    const existing = JSON.parse(localStorage.getItem(SEARCH_KEY) || "[]");
    const updated = [tag, ...existing.filter((t: string) => t !== tag)].slice(
      0,
      10
    ); // Max 10
    localStorage.setItem(SEARCH_KEY, JSON.stringify(updated));
    setSuggestions(updated);
  };

    const cocAndClashRoyalePlayerUrl=`/${game}/${TagType.player}/${getCorrectCocPlayerTag(input)}`;
    const cocAndClashRoyaleClanUrl=`/${game}/${TagType.clan}/${getCorrectCocClanTag(input)}`;
    const dynamicUrl=tagType===TagType.clan?cocAndClashRoyaleClanUrl:cocAndClashRoyalePlayerUrl;
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim().toUpperCase();
    if (trimmed) {
      saveSearch(trimmed);
      router.push(dynamicUrl);
    }
  };
  const handleSuggestionClick = (tag: string) => {
    setInput(tag);
    saveSearch(tag);
    router.push(`/${game}/player/${getCorrectCocPlayerTag(tag)}`);
    setShowSuggestions(false);
  };

  const filteredSuggestions = suggestions.filter(
    (s) => s.startsWith(input.toUpperCase()) && s !== input.toUpperCase()
  );

  return (
    <div className="w-full flex items-center justify-center flex-col font-ClashBold select-none max-sm:px-[5%] md:px-[40%]">
      <form
        className="mt-5 flex items-center justify-center relative w-full"
        onSubmit={handleSubmit}
        onBlur={() => setTimeout(() => setShowSuggestions(false), 100)} // hide after click
      >
        <Input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value.toUpperCase());
            setShowSuggestions(true);
          }}
          placeholder={`${game===GameType.clashroyale?'Clash Royale':game===GameType.coc?'Clash of Clans':'Brawl Stars'} Tag`}
          className={clsx(`w-full border-2 pl-10 rounded-xl placeholder:text-black placeholder:opacity-40 cursor-auto text-black`,
            game===GameType.coc?'border-green-400':
                        game===GameType.clashroyale?'border-sky-400':
            game===GameType.brawlstars?'border-yellow-400':
            'border-black'

          )}
        />
        <Button className={clsx(`text-white font-light text-xs absolute right-0  rounded-xl border-none w-[30%]`,
          game===GameType.coc?'bg-green-400 hover:bg-green-200':
                    game===GameType.clashroyale?'bg-sky-400 hover:bg-sky-200':
          game===GameType.brawlstars?'bg-yellow-400 hover:bg-yellow-200':
            'bg-black'
        )}>
          <Search />
        </Button>
        {/* <GameSelectBadge/> */}
        <span className="text-xl absolute left-6 text-black">#</span>

        {showSuggestions && filteredSuggestions.length > 0 && (
          <motion.ul
            className="absolute top-full mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg z-50"
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
          >
            {filteredSuggestions.map((s) => (
              <li
                key={s}
                onClick={() => handleSuggestionClick(s)}
                className="px-4 py-2 cursor-pointer hover:bg-blue-100"
              >
                #{s}
              </li>
            ))}
          </motion.ul>
        )}
      </form>
    </div>
  );
}
