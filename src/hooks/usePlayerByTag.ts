'use client'

import { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import { ClashRoyalePlayerType, GameType } from '@/types/data.types'
import { useBookmarkStore } from '@/store/useBookmarkStore'

export function usePlayerByTag(tag: string, game: GameType) {
  const [data, setData] = useState<ClashRoyalePlayerType | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  // Get functions from store
  const addPlayer = useBookmarkStore((s) => s.addPlayer)
  const remove = useBookmarkStore((s) => s.removePlayer)
  const getPlayer = useBookmarkStore((s) => s.getPlayer)

  // We get bookmarked player from store — but only to initialize or sync
  const bookmarkedPlayer = getPlayer(tag, game)

  useEffect(() => {
    if (!tag || !game) {
      setData(null)
      setIsLoading(false)
      return
    }

    // If we already have bookmarked data, start with it
    if (bookmarkedPlayer) {
      setData(bookmarkedPlayer)
      setIsLoading(false)
      setError(null)
      return
    }

    // Otherwise, fetch from API
    setIsLoading(true)
    setError(null)

    axios
      .get<ClashRoyalePlayerType>(`/api/${game}/player/${tag}`)
      .then((res) => {
        setData(res.data)
        // Optionally, add to bookmarks if you want on load
        // addPlayer(tag, game, res.data)
      })
      .catch((err) => {
        setError(err)
        setData(null)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [tag, game, bookmarkedPlayer])

  // Wrap addPlayer and remove to also update local data if needed
  const add = useCallback(() => {
    if (data) addPlayer(tag, game, data)
  }, [addPlayer, data, tag, game])

  const removeAndClear = useCallback(() => {
    remove(tag, game)
    // Optionally clear local data or keep it visible after removal
    // setData(null)
  }, [remove, tag, game])

  return {
    data,
    isLoading,
    error,
    addPlayer: add,
    removePlayer: removeAndClear,
  }
}
