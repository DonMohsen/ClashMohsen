import React from 'react'
import PlayerSearch from '@/components/PlayerSearch'
import { getPlayerByTag } from '@/actions/getPlayerByTag';
import { notFound } from 'next/navigation';
import PlayerStats from '@/components/PlayerStats';

type Props = {
  params: Promise<{ tag: string }>;
}

const PlayerPage =async ({ params }: Props) => {
    const playerTag = (await params).tag;
  // const player=await getPlayerByTag(playerTag);
    // if (!player) return notFound();

  return (
    <>
    {/* {player&&
    player.name
    } */}
      <PlayerStats tag={playerTag} />
    </>
  )
}

export default PlayerPage
