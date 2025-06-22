// components/PlayerStats.tsx
'use client'

import React from 'react'
import { usePlayerByTag } from '@/hooks/usePlayerByTag'

type PlayerStatsProps = {
  tag: string | string[]
}

const PlayerStats: React.FC<PlayerStatsProps> = ({ tag }) => {
  const { data, isLoading, error } = usePlayerByTag(tag)

  if (isLoading) return <p className="text-gray-500">Loading stats...</p>
  if (error) return <p className="text-red-500">Error: {error.message}</p>
  if (!data) return <p>No data found.</p>

  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto space-y-4">
      <h2 className="text-2xl font-bold text-center">👤 {data.name}</h2>
      <div className="space-y-2">
        <p><strong>Level:</strong> {data.expLevel}</p>
        <p><strong>Total Wins:</strong> {data.wins}</p>
        <p><strong>Trophies:</strong> {data.trophies}</p>
        <p><strong>Best Trophies:</strong> {data.bestTrophies}</p>
        <p><strong>Battle Count:</strong> {data.battleCount}</p>
        <p><strong>Three Crown Wins:</strong> {data.threeCrownWins}</p>
        <p><strong>Clan:</strong> {data?.clan?.name ?? 'No clan'}</p>
      </div>
    </div>
  )
}

export default PlayerStats
