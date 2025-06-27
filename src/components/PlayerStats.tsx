'use client'

import React, { useEffect, useState } from 'react'
import { usePlayerByTag } from '@/hooks/usePlayerByTag'
import { useBookmarkStore } from '@/store/useBookmarkStore'
import ExpBadge from './ExpBadge'
import { BrawlStarsPlayerType, ClashRoyalePlayerType, CocPlayerType, GameType } from '@/types/data.types'
import BookmarkIcon from './Icons/BookmarkIcon'
import ClashRoyaleStats from './ClashRoyaleStats'
import BrawlStarsStats from './BrawlStarsStats'
import CocPlayerStats from './CocPlayerStats'

type PlayerStatsProps = {
  tag: string
  game: GameType
}

const PlayerStats: React.FC<PlayerStatsProps> = ({ tag, game }) => {
  const { data, isLoading, error, isClashRoyalePlayer, isCocPlayer,isBrawlStarsPlayer } = usePlayerByTag(tag, game)
  const [royaleData, setRoyaleData] = useState<ClashRoyalePlayerType | null>(null)
  const [cocData, setCocData] = useState<CocPlayerType | null>(null)
const [brawlData, setBrawlData] = useState<BrawlStarsPlayerType | null>(null)

  // ⛔ avoid setting state during render
  useEffect(() => {
    if (isClashRoyalePlayer && data) {
      setRoyaleData(data as ClashRoyalePlayerType)
    } else if (isCocPlayer && data) {
      setCocData(data as CocPlayerType)
    }  else if (isBrawlStarsPlayer && data) {
    setBrawlData(data as BrawlStarsPlayerType)
  }
  }, [data, isClashRoyalePlayer, isCocPlayer,isBrawlStarsPlayer])
  const players = useBookmarkStore((s) => s.players)
  const addPlayer = useBookmarkStore((s) => s.addPlayer)
  const remove = useBookmarkStore((s) => s.removePlayer)
  const isBookmarked = players.some((p) => p.tag === tag && p.game === game)
  if (isLoading) return <p className="text-gray-500">Loading stats...</p>
  if (error) return <p className="text-red-500">Error: {error.message}</p>
  if (!isLoading && !error && !data) return <p>No data found.</p>

  // const handleToggle = () => {
  //   if (isBookmarked) {
  //     remove(tag, game)
  //   } else {
  //     addPlayer(tag, game, data!)
  //   }
  // }

  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto space-y-4">
      {/* <div onClick={handleToggle} className="cursor-pointer transition-colors">
        <BookmarkIcon
          className={`w-12 h-12 text-blue-500 ${isBookmarked ? 'fill-blue-500' : ''}`}
        />
      </div> */}

      {/* <h2 className="text-2xl font-bold text-center">👤 {data!.name}</h2> */}

      {royaleData && <ClashRoyaleStats data={royaleData}/>}

      {/* {cocData && <CocPlayerStats player={cocData}/>} */}
      {brawlData && <BrawlStarsStats data={brawlData} />}

    </div>
  )
}

export default PlayerStats
