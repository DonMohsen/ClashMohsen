import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { ClashRoyalePlayerType, GameType } from '@/types/data.types'


export interface StoredPlayer {
  tag: string
  game: GameType
  data: ClashRoyalePlayerType
}

interface PlayerStore {
  players: StoredPlayer[]
  addPlayer: (tag: string, game: GameType, data: ClashRoyalePlayerType) => void
  removePlayer: (tag: string, game: GameType) => void
  getPlayer: (tag: string, game: GameType) => ClashRoyalePlayerType | undefined
}

export const useBookmarkStore = create<PlayerStore>()(
  persist(
    (set, get) => ({
      players: [],
      addPlayer: (tag, game, data) => {
        set((state) => {
          const exists = state.players.some(
            (p) => p.tag === tag && p.game === game
          )
          if (exists) return state
          return {
            players: [...state.players, { tag, game, data }],
          }
        })
      },
      removePlayer: (tag, game) => {
        set((state) => ({
          players: state.players.filter(
            (p) => !(p.tag === tag && p.game === game)
          ),
        }))
      },
      getPlayer: (tag, game) => {
        return get().players.find((p) => p.tag === tag && p.game === game)?.data
      },
    }),
    {
      name: 'bookmark-storage',
      storage: createJSONStorage(() => localStorage), // Wrap localStorage here
    }
  )
)
