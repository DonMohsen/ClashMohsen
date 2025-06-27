"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookmarkIcon } from "lucide-react";
import { TiPlus } from "react-icons/ti";

type BookmarkToggleProps = {
  isBookmarked: boolean;
  onToggle: () => void;
};

const BookmarkToggle: React.FC<BookmarkToggleProps> = ({
  isBookmarked,
  onToggle,
}) => {
  return (
    <div className="w-full h-full flex items-center justify-end">
      <motion.div
        onClick={onToggle}
        className="cursor-pointer relative inline-block transition-colors top-0 right-3 max-md:right-1"
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <BookmarkIcon
          className={`text-blue-500 transition-transform duration-300 ${
            isBookmarked
              ? "w-12 max-md:w-9 max-md:h-9 h-12 scale-y-150 fill-blue-500"
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
    </div>
  );
};

export default BookmarkToggle;
