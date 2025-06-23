import { GameType } from '@/types/data.types';
import { create } from 'zustand';

type GameSelectBadgeType = {
  game: GameType;
  toggleGame: () => void;
  setGame: (value: GameType) => void;
};

export const useGameBadgeStore = create<GameSelectBadgeType>((set, get) => ({
  game: GameType.coc,

  toggleGame: () => {
    const current = get().game;
    const newGame = current === GameType.clashroyale ? GameType.coc : GameType.clashroyale;
    set({ game: newGame });
  },

  setGame: (value) => set({ game: value }),
}));
