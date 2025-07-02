import { CocPlayerType, Hero } from "@/types/data.types";
import React from "react";
import ImageKit from "../ImageKit";
import Image from "next/image";
import CocTroopIcon from "./CocTroopIcon";
import { normalTroopNames } from "@/constants/coc/cocNormalTroopNames";
import { darkTroopNames } from "@/constants/coc/cocDarkTroopsNames";
import { cocHomeHeroes } from "@/constants/coc/cocHeroesNames";
import { darkSpellNames, normalSpellNames } from "@/constants/coc/cocSpellsNames";
import { petNames } from "@/constants/coc/petsNames";
type Props = Pick<
  CocPlayerType,
  | "troops"
  | "townHallLevel"
  | "townHallWeaponLevel"
  | "spells"
  | "heroes"
  | "heroEquipment"
>;
type Troop = CocPlayerType["troops"][number];
type DisplayTroop = {
  name: string;
  level?: number;
  maxLevel?: number;
  village?: string;
};

const CocPlayerStatsTroops = ({
  troops,
  spells,
  townHallLevel,
  townHallWeaponLevel,
  heroEquipment,
  heroes,
}: Props) => {
  console.log(`/Supercell/Town_Hall${townHallLevel}-${townHallWeaponLevel}`);
 const getNormalTroops = (troops: Troop[]): DisplayTroop[] => {
  return normalTroopNames.map((name) => {
    const troop = troops.find((t) => t.name === name && t.village === "home");
    return {
      name,
      level: troop?.level,
      maxLevel: troop?.maxLevel,
      village: troop?.village,
    };
  });
};

 const getDarkTroops = (troops: Troop[]): DisplayTroop[] => {
  return darkTroopNames.map((name) => {
    const troop = troops.find((t) => t.name === name && t.village === "home");
    return {
      name,
      level: troop?.level,
      maxLevel: troop?.maxLevel,
      village: troop?.village,
    };
  });
};
const getHeroes= (heroes: Hero[]): DisplayTroop[] => {
  return cocHomeHeroes.map((name) => {
    const troop = heroes.find((t) => t.name === name && t.village === "home");
    return {
      name,
      level: troop?.level,
      maxLevel: troop?.maxLevel,
      village: troop?.village,
    };
  });
};


 const getPetTroops =  (troops: Troop[]): DisplayTroop[] => {
  return petNames.map((name) => {
    const match = troops.find(
      (t) => t.name === name && t.village === "home"
    );

    return match || { name }; // fallback if not unlocked
  });
};

  return (
    <div className="flex flex-col relative items-center text-center pt-1 bg-gradient-to-t font-ClashBold min-h-[300px] from-[#6a7798] to-[#8c96b1] h-full w-full rounded-[10px] mt-2 pb-5 ">
      {/* //!townhall and troops................................................................................................... */}
      <div className="w-full h-full flex flex-row max-sm:flex-col min-w-full min-h-full">
        {/* TownHall */}
        <div className="w-[35%] max-sm:w-[70%] h-full ml-2 flex px-10 items-center justify-center max-sm:mx-auto ">
          <Image
            alt="townhall"
            src={`/Town_Hall${townHallLevel}${townHallWeaponLevel?`-${townHallWeaponLevel}`:''}.webp`}
            width={200}
            height={200}
            className="w-full h-full "
          />
        </div>
        {/* Troops */}
    {/* Troops */}
<div className="w-[65%] max-sm:w-full h-full rounded-[6px] bg-[#606a8d] sm:mx-2 pb-4 mt-2 flex flex-col items-start justify-center">
  <p className="p-2 text-white text-[14px]">Troops</p>

  {/* Normal Troops */}
  <div className="flex flex-wrap gap-[6px] px-2">
    {getNormalTroops(troops).map((troop) => (
      <CocTroopIcon
        key={troop.name}
        name={troop.name}
        level={troop.level}
        maxLevel={troop.maxLevel}
        village={troop.village}
      />
    ))}
  </div>

  {/* Dark Troops */}
  <div className="flex flex-wrap gap-[6px] px-2 mt-[6px]">
    {getDarkTroops(troops).map((troop) => (
      <CocTroopIcon
        key={troop.name}
        name={troop.name}
        level={troop.level}
        maxLevel={troop.maxLevel}
        village={troop.village}
      />
    ))}
  </div>
</div>
      </div>

      {/* //!Heroes, spells, pets, siege Machines................................................................................... */}

      <div className="w-full h-full flex flex-row max-sm:flex-col sm:pl-2">
        <div className="w-[35%] flex flex-col h-full max-sm:w-full">
          <div className="w-full   h-full rounded-[6px] bg-[#606a8d] sm:mx-0 pb-4 mt-2 flex flex-col items-start justify-center">
            <p className="p-2 text-white text-[14px]">Heroes</p>
            <div className="flex flex-wrap gap-[6px] px-1">
              {getHeroes(heroes)
                .map((hero) => (
                  <CocTroopIcon
                    key={hero.name}
                    level={hero.level}
                    maxLevel={hero.maxLevel}
                    name={hero.name}
                    village={hero.village}
                  />
                ))}
            </div>
          </div>
          <div className="w-full max-sm:w-full  h-full rounded-[6px] bg-[#606a8d] sm:mx-0 pb-4 mt-2 flex flex-col items-start justify-center">
            <p className="p-2 text-white text-[14px]">Heroes</p>
            <div className="flex flex-wrap gap-[6px] px-1">
            {getPetTroops(troops).map((troop) => (
    <CocTroopIcon
      key={troop.name}
      level={troop.level}
      maxLevel={troop.maxLevel}
      name={troop.name}
      village={troop.village}
    />
  ))}

              
              
            </div>
          </div>
        </div>
                <div className="w-[63%] flex flex-col h-full max-sm:w-full">

        <div className="w-full   h-full rounded-[6px] bg-[#606a8d] sm:mx-2 pb-4 mt-2 flex flex-col items-start justify-center">
          <p className="p-2 text-white text-[14px]">Spells</p>
          <div className="flex flex-wrap gap-[6px] px-2">
          {normalSpellNames.map((name) => {
    const spell = spells.find((s) => s.name === name && s.village === "home");
    return (
      <CocTroopIcon
        key={name}
        name={name}
        level={spell?.level}
        maxLevel={spell?.maxLevel}
        village={spell?.village}
      />
    );
  })}
  {darkSpellNames.map((name) => {
    const spell = spells.find((s) => s.name === name && s.village === "home");
    return (
      <CocTroopIcon
        key={name}
        name={name}
        level={spell?.level}
        maxLevel={spell?.maxLevel}
        village={spell?.village}
      />
    );
  })}
            
          </div>
        </div>
           <div className="w-full max-sm:w-full  h-full rounded-[6px] bg-[#606a8d] sm:mx-2 pb-4 mt-2 flex flex-col items-start justify-center">
          <p className="p-2 text-white text-[14px]">Spells</p>
          <div className="flex flex-wrap gap-[6px] px-2">
            {spells.map((spell) => (
              <CocTroopIcon
                key={spell.name}
                level={spell.level}
                maxLevel={spell.maxLevel}
                name={spell.name}
                village={spell.village}
              />
            ))}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default CocPlayerStatsTroops;
