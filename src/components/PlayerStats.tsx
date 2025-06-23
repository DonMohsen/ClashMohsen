// components/PlayerStats.tsx
'use client'

import React from 'react'
import { usePlayerByTag } from '@/hooks/usePlayerByTag'
import Image from 'next/image'
import { useBookmarkStore } from '@/store/useBookmarkStore'
import ExpBadge from './ExpBadge'

type PlayerStatsProps = {
  tag: string
  game:string
}

const PlayerStats: React.FC<PlayerStatsProps> = ({ tag ,game}) => {
  const { data, isLoading, error } = usePlayerByTag(tag,game)
  const addPlayer = useBookmarkStore((s) => s.addPlayer)
    const remove = useBookmarkStore((s) => s.removePlayer)

  if (isLoading) return <p className="text-gray-500">Loading stats...</p>
  if (error) return <p className="text-red-500">Error: {error.message}</p>
  if (!data) return <p>No data found.</p>

  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto space-y-4">
      <button onClick={()=>addPlayer(tag,game,data)}>Add bookmark</button>
            <button onClick={()=>remove(tag,game)}>Remove bookmark</button>

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
