"use client"
import ReactQueryProvider from '@/providers/ReactQueryProvider'
import React from 'react'
import { useParams } from 'next/navigation'
import PlayerSearch from '@/components/PlayerSearch'

const PlayerPage = () => {
    const {tag}=useParams();
    console.log(tag);
    
  return (

    <ReactQueryProvider>
        <PlayerSearch tag={tag}/>
    </ReactQueryProvider>
  )
}

export default PlayerPage