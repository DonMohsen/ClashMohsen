// stores/usePlayerStore.ts
import { ClashRoyalePlayerType } from '@/types/data.types'
import { create } from 'zustand'

type Game = 'clash-royale' | string

export interface StoredPlayer {
  tag: string
  game: Game
  data: ClashRoyalePlayerType
}

interface PlayerStore {
  players: StoredPlayer[]
  addPlayer: (tag: string, game: Game, data: ClashRoyalePlayerType) => void
  removePlayer: (tag: string, game: Game) => void
  getPlayer: (tag: string, game: Game) => ClashRoyalePlayerType | undefined
}

export const useBookmarkStore = create<PlayerStore>((set, get) => ({
  players: [],
  addPlayer: (tag, game, data) => {
    set((state) => {
      const exists = state.players.some(
        (p) => p.tag === tag && p.game === game
      )
      if (exists) return state // avoid duplicates
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
}))
