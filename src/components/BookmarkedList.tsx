import { useBookmarkStore } from '@/store/useBookmarkStore'
import Link from 'next/link'
import React from 'react'
import ExpBadge from './ExpBadge'

const BookmarkedList = () => {
      const players = useBookmarkStore((s) => s.players)
    
  return (
    <div className='font-ClashBold'>
        {players.map((player)=>(
            <Link key={player.tag} href={`/${player.game}/Player/${player.tag}`} className='flex items-center justify-center w-full'>
                <ExpBadge expLevel={player.data.expLevel}/>
                {player.data.name}
                {/* {player.data.expLevel} */}
            </Link>
        ))}
    </div>
  )
}

export default BookmarkedList