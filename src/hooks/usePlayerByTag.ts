// hooks/usePlayerByTag.ts
'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'

interface PlayerData {
  name: string
  expLevel: number
  wins: number
  [key: string]: any
}

export function usePlayerByTag(tag: string | string[]) {
  const [data, setData] = useState<PlayerData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    if (!tag) return

    setIsLoading(true)
    setError(null)

    axios
      .get(`/api/player/${tag}`)
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => {
        setError(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [tag])

  return { data, isLoading, error }
}
