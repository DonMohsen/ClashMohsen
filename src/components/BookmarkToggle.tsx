"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookmarkIcon } from "lucide-react";
import { TiPlus } from "react-icons/ti";
import { useBookmarkStore } from "@/store/useBookmarkStore";
import { GameType } from "@/types/data.types";
import { BookmarkedType, TagType } from "@/types/general.types";

type BookmarkToggleProps = {
  // isBookmarked: boolean;
  // onToggle: () => void;
  tag:string
  game:GameType
  data:BookmarkedType
  tagType:TagType
};

const BookmarkToggle: React.FC<BookmarkToggleProps> = ({
tag,
game,
data,
tagType
}) => {

    const bookmarks = useBookmarkStore((s) => s.bookmarks)
  const addBookmark = useBookmarkStore((s) => s.addBookmark)
  const removeBookmark = useBookmarkStore((s) => s.removeBookmark)
  const isBookmarked = bookmarks.some((b) => b.tag === tag && b.game === game)
   const handleToggle = () => {
    if (isBookmarked) {
      removeBookmark(tag, game,tagType)
    } else {
      addBookmark(tag, game, data!,tagType)
    }
  }
  return (
   <motion.div
  onClick={handleToggle}
  className="cursor-pointer relative inline-block transition-colors top-0 right-3 max-md:right-1"
  whileTap={{ scale: 0.8 }}
  transition={{ type: "tween", duration: 0.1 }} // Instant feedback
>
  <BookmarkIcon
    className={`text-yellow-400 transition-transform duration-300 ${
      isBookmarked
        ? "w-12 max-md:w-9 max-md:h-9 h-12 scale-y-150 fill-yellow-400"
        : "w-12 max-md:w-9 max-md:h-9 h-12 scale-y-100 fill-none"
    }`}
    style={{ transformOrigin: "top" }}
  />
  <AnimatePresence>
    {!isBookmarked && (
      <motion.div
        key="plus-icon"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="absolute -bottom-1 -right-2 max-md:-right-1"
      >
        <TiPlus className="text-white w-9 h-9 max-md:w-6 max-md:h-6" />
      </motion.div>
    )}
  </AnimatePresence>
</motion.div>

  );
};

export default BookmarkToggle;
