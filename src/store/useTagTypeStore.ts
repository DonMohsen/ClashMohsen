import { GameType } from "@/types/data.types";
import { TagType } from "@/types/general.types";
import { create } from "zustand";

type TagTypeStoreType = {
  tagType: TagType;
  setTag: (value: TagType) => void;
};

export const useTagTypeStore = create<TagTypeStoreType>((set, get) => ({
  tagType: TagType.player,
  setTag: (value) => set({ tagType: value }),
}));
