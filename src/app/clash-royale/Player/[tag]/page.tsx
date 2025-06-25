import React from 'react'
import PlayerSearch from '@/components/PlayerSearch'
import { getPlayerByTag } from '@/actions/getPlayerByTag';
import { notFound } from 'next/navigation';
import PlayerStats from '@/components/PlayerStats';
import { GameType } from '@/types/data.types';
import { Metadata } from 'next'

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tag } = await params
  const player = await getPlayerByTag(tag)

  if (!player) return {}

  return {
    title: `${player.name} | Clash Royale Player Stats`,
    description: `Check out detailed stats for ${player.name} in Clash Royale, including trophies, wins, and more.`,
  }
}

type Props = {
  params: Promise<{ tag: string }>;
}

const ClashRoyaleSinglePlayerPage =async ({ params }: Props) => {
    const playerTag = (await params).tag;
  // const player=await getPlayerByTag(playerTag);
    // if (!player) return notFound();

  return (
    <>
      <PlayerStats tag={playerTag} game={GameType.clashroyale} />
    </>
  )
}

export default ClashRoyaleSinglePlayerPage