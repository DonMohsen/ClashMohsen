'use client'

import { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import {
  ClashRoyalePlayerType,
  CocPlayerType,
  GameType,
  PlayerData
} from '@/types/data.types'
import { useBookmarkStore } from '@/store/useBookmarkStore'

// Define a union of both player types

export function usePlayerByTag(tag: string, game: GameType) {
  const [data, setData] = useState<PlayerData | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const addToStore = useBookmarkStore((s) => s.addPlayer)
  const removeFromStore = useBookmarkStore((s) => s.removePlayer)
  const getPlayer = useBookmarkStore((s) => s.getPlayer)

  useEffect(() => {
    if (!tag || !game) return

    const cached = getPlayer(tag, game)
    if (cached) {
      setData(cached)
      setIsLoading(false)
      return
    }

    setIsLoading(true)
    setError(null)

    axios
      .get<PlayerData>(`/api/${game}/player/${tag}`)
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => {
        setError(err)
        setData(null)
      })
      .finally(() => setIsLoading(false))
  }, [tag, game])

  const addPlayer = useCallback(() => {
    if (data) addToStore(tag, game, data)
  }, [data, tag, game, addToStore])

  const removePlayer = useCallback(() => {
    removeFromStore(tag, game)
  }, [tag, game, removeFromStore])

  return {
    data,
    isLoading,
    error,
    addPlayer,
    removePlayer,
    // Bonus: narrowed type guards
    isClashRoyalePlayer: game === GameType.clashroyale,
    isCocPlayer: game === GameType.coc,
    isBrawlStarsPlayer:game ===GameType.brawlstars
  }
}
