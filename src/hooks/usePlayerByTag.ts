'use client'

import { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import {
  ClashRoyalePlayerType,
  GameType,
} from '@/types/data.types'
import { useBookmarkStore } from '@/store/useBookmarkStore'
import { BookmarkedType } from '@/types/general.types'

// Define a union of both player types

export function usePlayerByTag(tag: string, game: GameType) {
  const [data, setData] = useState<BookmarkedType | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const addBookmark = useBookmarkStore((s) => s.addBookmark)
  const removeBookmark = useBookmarkStore((s) => s.removeBookmark)
  const getBookmark = useBookmarkStore((s) => s.getBookmark)

  useEffect(() => {
    if (!tag || !game) return

    const cached = getBookmark(tag, game)
    if (cached) {
      setData(cached)
      setIsLoading(false)
      return
    }

    setIsLoading(true)
    setError(null)

    axios
      .get<BookmarkedType>(`/api/${game}/player/${tag}`)
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => {
        setError(err)
        setData(null)
      })
      .finally(() => setIsLoading(false))
  }, [tag, game,getBookmark])

  const addPlayer = useCallback(() => {
    if (data) addBookmark(tag, game, data)
  }, [data, tag, game, addBookmark])

  const removePlayer = useCallback(() => {
    removeBookmark(tag, game)
  }, [tag, game, removeBookmark])

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
