import React from 'react'
import { getPlayerByTag } from '@/actions/getPlayerByTag';
import { notFound } from 'next/navigation';
import PlayerStats from '@/components/PlayerStats';
import { GameType } from '@/types/data.types';
import CocPlayerStats from '@/components/CocPlayerStats';
import { Metadata } from 'next';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tag } = await params
  const {data:player} = await getPlayerByTag(tag)

  if (!player) return {}

  return {
    title: `${player.name} | Clash of Clans Player Stats`,
    description: `Check out detailed stats for ${player.name} in Clash of Clans, including trophies, wins, and more.`,
  }
}

type Props = {
  params: Promise<{ tag: string }>;
}

const CocSinglePlayerPage =async ({ params }: Props) => {
    const playerTag = (await params).tag;
  const {data:player,status}=await getPlayerByTag(playerTag);
    if (!player&&status===404) return notFound();
    else if(!player){
      return <p>Error!!!!!!!!!</p>
    }

    

  return (
    
      <CocPlayerStats player={player} playerTag={playerTag}/>
    
    
  )
}

export default CocSinglePlayerPage