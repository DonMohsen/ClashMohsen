import Image from 'next/image';
import React from 'react'
type Props = {
  name: string;
  level?: number;
  maxLevel?: number;
  village?: string;
};

const CocTroopIcon = ({ name, level, maxLevel, village }: Props) => {
  const isUnlocked = level !== undefined;
  const isMaxLevel = level !== undefined && maxLevel !== undefined && level === maxLevel;

  return (
    <div className="relative w-10 h-10 border border-black/40 rounded overflow-hidden">
      <Image
        alt={name}
        src={`/${name}.png`}
        width={40}
        height={40}
        className={`w-full h-full object-contain ${!isUnlocked ? "grayscale opacity-40" : ""}`}
      />
      {isUnlocked && (
        <div className={`absolute left-[2px] bottom-[2px]  text-white text-[10px] w-4 h-4 rounded flex items-center justify-center ${isMaxLevel?'bg-[#e9aa54]':'bg-black'}`}>
          {level}
        </div>
      )}
    </div>
  );
};

export default CocTroopIcon 