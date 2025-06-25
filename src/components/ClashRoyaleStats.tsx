import { ClashRoyalePlayerType } from '@/types/data.types'
import React from 'react'
import ExpBadge from './ExpBadge'

const ClashRoyaleStats = ({data}:{data:ClashRoyalePlayerType}) => {
  return (

        <div className="space-y-2">
          <ExpBadge expLevel={data.expLevel} />
          <p><strong>Total Wins:</strong> {data.wins}</p>
          <p><strong>Trophies:</strong> {data.trophies}</p>
          <p><strong>Best Trophies:</strong> {data.bestTrophies}</p>
          <p><strong>Battle Count:</strong> {data.battleCount}</p>
          <p><strong>Three Crown Wins:</strong> {data.threeCrownWins}</p>
        </div>  )
}

export default ClashRoyaleStats