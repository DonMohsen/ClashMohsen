'use client'

import { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import { ClashRoyalePlayerType, GameType } from '@/types/data.types'
import { useBookmarkStore } from '@/store/useBookmarkStore'

export function usePlayerByTag(tag: string, game: GameType) {
  const [data, setData] = useState<ClashRoyalePlayerType | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  // Grab store actions
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
      .get<ClashRoyalePlayerType>(`/api/${game}/player/${tag}`)
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
    // don't clear local `data` – keep showing even after removal
  }, [tag, game, removeFromStore])

  return {
    data,
    isLoading,
    error,
    addPlayer,
    removePlayer,
  }
}
