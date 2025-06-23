import { useBookmarkStore } from '@/store/useBookmarkStore'
import Link from 'next/link'
import React from 'react'

const BookmarkedList = () => {
      const players = useBookmarkStore((s) => s.players)
    
  return (
    <div>
        {players.map((player)=>(
            <Link href={`/${player.game}/Player/${player.tag}`} className='flex items-center justify-center w-full'>
                {player.data.name}
                {player.tag}
            </Link>
        ))}
    </div>
  )
}

export default BookmarkedList