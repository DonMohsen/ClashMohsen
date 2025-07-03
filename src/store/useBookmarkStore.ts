import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import {
  ClashRoyalePlayerType,
  GameType,
  

} from '@/types/data.types'
import { PlayerData } from '@/types/general.types'

export interface StoredPlayer {
  tag: string
  game: GameType
  data: PlayerData
}

interface PlayerStore {
  players: StoredPlayer[]
  isLoading: boolean
  addPlayer: (tag: string, game: GameType, data: PlayerData) => Promise<void>
  removePlayer: (tag: string, game: GameType) => Promise<void>
  getPlayer: (tag: string, game: GameType) => PlayerData | undefined
  setLoading: (loading: boolean) => void
}

export const useBookmarkStore = create<PlayerStore>()(
  persist(
    (set, get) => ({
      players: [],
      isLoading: false,
      setLoading: (loading) => set({ isLoading: loading }),

      addPlayer: async (tag, game, data) => {
        set({ isLoading: true })
        try {
          const exists = get().players.some(
            (p) => p.tag === tag && p.game === game
          )
          if (!exists) {
            set((state) => ({
              players: [...state.players, { tag, game, data }],
            }))
          }
        } finally {
          set({ isLoading: false })
        }
      },

      removePlayer: async (tag, game) => {
        set({ isLoading: true })
        try {
          set((state) => ({
            players: state.players.filter(
              (p) => !(p.tag === tag && p.game === game)
            ),
          }))
        } finally {
          set({ isLoading: false })
        }
      },

      getPlayer: (tag, game) => {
        return get().players.find(
          (p) => p.tag === tag && p.game === game
        )?.data
      },
    }),
    {
      name: 'bookmark-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
)
