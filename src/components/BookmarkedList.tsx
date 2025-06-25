import { useBookmarkStore } from '@/store/useBookmarkStore'
import Link from 'next/link'
import React from 'react'
import ExpBadge from './ExpBadge'

const BookmarkedList = () => {
      const players = useBookmarkStore((s) => s.players)
      const isLoading = useBookmarkStore((s) => s.isLoading)
  return (
    <div className='font-ClashBold'>
        {isLoading&&
        <div className='min-h-[300px] animate-pulse bg-slate-400 min-w-[500px]'>
loadinggggggggggggggggggg
        </div>
        }
        {players.map((player)=>(
            <Link key={player.tag} href={`/${player.game}/Player/${player.tag}`} className='flex items-center gap-2 justify-start w-full'>
                <ExpBadge expLevel={player.data.expLevel}/>
                {player.data.name}
                {/* {player.data.expLevel} */}
            </Link>
        ))}
    </div>
  )
}

export default BookmarkedList