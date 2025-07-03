import React from 'react'
import { notFound } from 'next/navigation';
import PlayerStats from '@/components/PlayerStats';
import { GameType } from '@/types/data.types';
import CocPlayerStats from '@/components/Coc/CocPlayerStats';
import { Metadata } from 'next';
import { getCocClanByTag } from '@/actions/getCocClanByTag';
import CocClanStats from '@/components/Coc/CocClanStats';
type Props = {
  params: Promise<{ tag: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tag } = await params
  const {data:clan} = await getCocClanByTag(tag)

  if (!clan) return {}

  return {
    title: `${clan.name} | Clash of Clans`,
    description: `Check out detailed stats for clan ${clan.name} in Clash of Clans!`,
  }
}


const CocSingleClanPage =async ({ params }: Props) => {
    const clanTag = (await params).tag;
  const {data:clan,status}=await getCocClanByTag(clanTag);
    if (!clan&&status===404) return notFound();
    else if(!clan){
      return <p>Error!!!!!!!!!</p>
    }

    

  return (
    
      <CocClanStats clan={clan}/>
        
    
  )
}

export default CocSingleClanPage