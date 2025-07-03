import React from 'react'
import { notFound } from 'next/navigation';
import PlayerStats from '@/components/PlayerStats';
import { GameType } from '@/types/data.types';
import CocPlayerStats from '@/components/Coc/CocPlayerStats';
import { Metadata } from 'next';
import { getCocPlayerByTag } from '@/actions/getCocPlayerByTag';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tag } = await params
  const {data:player} = await getCocPlayerByTag(tag)

  if (!player) return {}

  return {
    title: `${player.name} | Clash of Clans`,
    description: `Check out detailed stats for ${player.name} in Clash of Clans, including trophies, wins, and more.`,
  }
}

type Props = {
  params: Promise<{ tag: string }>;
}

const CocSinglePlayerPage =async ({ params }: Props) => {
    const playerTag = (await params).tag;
  const {data:player,status}=await getCocPlayerByTag(playerTag);
    if (!player&&status===404) return notFound();
    else if(!player){
      return <p>Error!!!!!!!!!</p>
    }

    

  return (
    
      <CocPlayerStats player={player}/>
    
    
  )
}

export default CocSinglePlayerPage