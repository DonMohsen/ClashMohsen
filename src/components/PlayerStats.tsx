// components/PlayerStats.tsx
'use client'

import React from 'react'
import { usePlayerByTag } from '@/hooks/usePlayerByTag'
import { useBookmarkStore } from '@/store/useBookmarkStore'
import ExpBadge from './ExpBadge'
import { GameType } from '@/types/data.types'
import BookmarkIcon from './Icons/BookmarkIcon'

type PlayerStatsProps = {
  tag: string
  game:GameType
}

const PlayerStats: React.FC<PlayerStatsProps> = ({ tag ,game}) => {
  const { data, isLoading, error } = usePlayerByTag(tag,game)
  const addPlayer = useBookmarkStore((s) => s.addPlayer)
    const remove = useBookmarkStore((s) => s.removePlayer)
const players = useBookmarkStore((s) => s.players)
const isBookmarked = players.some(p => p.tag === tag && p.game === game)

      if (isLoading) return <p className="text-gray-500">Loading stats...</p>
  if (error) return <p className="text-red-500">Error: {error.message}</p>
  if (!data) return <p>No data found.</p>
  const handleToggle = () => {
    if (isBookmarked) {
      remove(tag, game)
    } else {
      addPlayer(tag, game, data)
    }
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto space-y-4">
       <div onClick={handleToggle} className="cursor-pointer transition-colors">
      <BookmarkIcon className={`w-12 h-12 text-blue-500 ${isBookmarked ? 'fill-blue-500' : ''}`} />
    </div>
      {/* <button onClick={()=>addPlayer(tag,game,data)}>Add bookmark</button> */}
            {/* <button onClick={()=>remove(tag,game)}>Remove bookmark</button> */}

      <h2 className="text-2xl font-bold text-center">👤 {data.name}</h2>
      <div className="space-y-2">

<ExpBadge expLevel={data.expLevel}/>



        <p><strong>Total Wins:</strong> {data.wins}</p>
        <p><strong>Trophies:</strong> {data.trophies}</p>
        <p><strong>Best Trophies:</strong> {data.bestTrophies}</p>
        <p><strong>Battle Count:</strong> {data.battleCount}</p>
        <p><strong>Three Crown Wins:</strong> {data.threeCrownWins}</p>
        {/* <p><strong>Clan:</strong> {data?.clan?.name ?? 'No clan'}</p> */}
      </div>
    </div>
  )
}

export default PlayerStats
