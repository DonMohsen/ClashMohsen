'use client'

import React from 'react'
import { usePlayerByTag } from '@/hooks/usePlayerByTag'
import { notFound } from 'next/navigation'
import { GameType } from '@/types/data.types'

const PlayerSearch = ({ tag,game }: { tag: string,game:GameType }) => {
  const { data, isLoading, error } = usePlayerByTag(tag,game)
    if (!data) return notFound();

  return (
    <div>
      <h1>
        {isLoading && `Hi ...  you are level 00  with ... wins!!`}
        {error && `Oops! ${error.message}`}
        {data && `Hi ${data.name} you are level ${data.expLevel} with ${data.wins} wins!!`}
      </h1>
    </div>
  )
}

export default PlayerSearch
