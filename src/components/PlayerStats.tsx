// components/PlayerStats.tsx
'use client'

import React from 'react'
import { usePlayerByTag } from '@/hooks/usePlayerByTag'
import Image from 'next/image'

type PlayerStatsProps = {
  tag: string
  game:string
}

const PlayerStats: React.FC<PlayerStatsProps> = ({ tag ,game}) => {
  const { data, isLoading, error } = usePlayerByTag(tag,game)

  if (isLoading) return <p className="text-gray-500">Loading stats...</p>
  if (error) return <p className="text-red-500">Error: {error.message}</p>
  if (!data) return <p>No data found.</p>

  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto space-y-4">
      <h2 className="text-2xl font-bold text-center">👤 {data.name}</h2>
      <div className="space-y-2">
<div className="relative w-14 h-14 rounded-[10px] bg-gradient-to-br from-sky-400 to-sky-700 shadow-md flex items-center justify-center
  border border-transparent
  before:absolute before:inset-0 before:rounded-[10px]
  before:border before:border-white/30 before:backdrop-blur-sm before:pointer-events-none before:z-10"
>
  <Image
    alt="xp"
    src="https://cdns3.royaleapi.com/cdn-cgi/image/w=64,h=64/static/img/ui/xp.png"
    width={200}
    height={200}
    className="w-12 h-12 relative z-20"
  />
  <span className="absolute left-1/2 top-1/2 text-[23px] -translate-x-1/2 -translate-y-1/2 text-white font-ClashBold pointer-events-none z-30">
    {data.expLevel}
  </span>
</div>



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
