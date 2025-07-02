import React from 'react'
import BookmarkToggle from '../BookmarkToggle'
import ExpBadge from '../ExpBadge'
import Image from 'next/image'
import TrophyIcon from '../Icons/TrophyIcon'
import { CocPlayerType, GameType } from '@/types/data.types'
import { useBookmarkStore } from '@/store/useBookmarkStore'
import { toast } from 'sonner'


const CocPlayerStatsHeader = ({player}:{player:CocPlayerType}) => {
    const{attackWins,bestTrophies,defenseWins,donations,donationsReceived,expLevel,labels,trophies,warStars,tag,name,clan,league,role}=player
      const game = GameType.coc;
  const players = useBookmarkStore((s) => s.players);

  const addPlayer = useBookmarkStore((s) => s.addPlayer);
  const remove = useBookmarkStore((s) => s.removePlayer);

const normalizedTag = (tag.startsWith('#') ? tag.slice(1) : tag).replace(/0/g, 'O');
  
  
  const isBookmarked = players.some(
      (p) => p.tag === normalizedTag && p.game === game
    );
    
    const handleToggle = () => {
    console.log(normalizedTag);
  if (isBookmarked) {
    
    remove(normalizedTag, game);
  toast.success('Removed from bookmark list!', {
  action: {
    label: '×', // Close button text
onClick: (_event: React.MouseEvent<HTMLButtonElement>, toastId?: string | number) => {
  if (toastId) toast.dismiss(toastId);
}
  },
});  } else {
    addPlayer(normalizedTag, game, player);
   toast.success('Added to bookmark list!', {
  action: {
    label: '×', // Close button text
onClick: (_event: React.MouseEvent<HTMLButtonElement>, toastId?: string | number) => {
  if (toastId) toast.dismiss(toastId);
}
  },
});

  }
};

  return (
 <div className="flex flex-col relative items-center text-center pt-1 bg-[#839bde] h-full w-full rounded-[10px] ">
        <div className="absolute top-0 right-0 ">
          <BookmarkToggle isBookmarked={isBookmarked} onToggle={handleToggle} />
        </div>
        <div className="flex  flex-row max-md:flex-col w-full h-full ">
          {/* //! The Left side of header */}
          <div className="w-full  flex flex-col  h-full  ">
            <div className="flex items-center justify-start px-2 gap-2 w-full ">
              <ExpBadge expLevel={expLevel} />
              <div className="flex flex-col gap-0 items-start justify-start w-full ">
                <h2
                  className="text-xl font-ClashBold text-white"
                  // style={{ WebkitTextStroke: "0.5px black" }}
                >
                  {name}
                </h2>

                <p className="text-gray-500 text-[12px] font-ClashBold    ">
                  {tag}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-start w-full gap-2 px-2 pt-1 font-ClashBold">
              {clan ? (
                <div className="flex items-center w-full gap-1 justify-start  ">
                  {clan.badgeUrls.small && (
                    <Image
                      src={clan.badgeUrls.small}
                      alt={clan.name}
                      width={48}
                      height={48}
                      className="rounded"
                    />
                  )}
                  <div className="flex items-start justify-center flex-col">
                    <p
                      className="text-md font-extrabold text-white font-ClashBold"
                      // style={{ WebkitTextStroke: "0.5px black" }}
                    >
                      {clan.name}
                    </p>
                    <p className="text-sm text-gray-500">{role}</p>
                  </div>
                </div>
              ) : (
                <div className="flex items-center w-full gap-1 justify-start  ">
                  <Image
                    src="/no-clan.png"
                    alt="no-clan"
                    width={48}
                    height={48}
                    className="rounded w-20 h-20"
                  />

                  <div className="flex items-start justify-center flex-col">
                    <p
                      className="text-md font-extrabold text-white font-ClashBold"
                      // style={{ WebkitTextStroke: "0.5px black" }}
                    >
                      No clan
                    </p>
                    <p className="text-sm text-gray-500">...</p>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* //! The Right side of header */}

          <div className="w-full px-2 flex items-center flex-col  h-full justify-start font-ClashBold md:border-l pb-5 mb-5">
            {league ? (
              <div className="flex  w-full items-center justify-center">
                {league?.iconUrls.medium && (
                  <Image
                    src={league.iconUrls.medium}
                    alt={league.name}
                    width={100}
                    height={100}
                    className="mt-2 w-[100px] h-[100px] max-md:w-[80px] max-md:h-[80px] z-50"
                  />
                )}
                <div className="flex flex-col items-start w-full h-full  justify-center gap-0">
                  <div className="flex items-center justify-start -translate-x-12 from-slate-900 to-transparent bg-gradient-to-r w-[90%]">
                    <p className="mt-1  text-white text-md max-md:text-sm  translate-x-12">
                      {league?.name}
                    </p>
                  </div>
                  <div className="flex items-center justify-start gap-0 w-[90%] -translate-x-10 bg-gradient-to-r from-purple-900 to-transparent">
                    <TrophyIcon className="w-8 h-8 max-md:w-7 max-md:h-7 translate-x-10" />
                    <p className="text-[20px] max-md:text-sm text-white translate-x-10">
                      {trophies}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex  w-full items-center justify-center">
                <Image
                  src="/no_league.png"
                  alt="no-league"
                  width={100}
                  height={100}
                  className="mt-2 w-[100px] h-[100px] max-md:w-[90px] max-md:h-[90px] z-50"
                />

                <div className="flex flex-col items-start w-full h-full  justify-center gap-0">
                  <div className="flex items-center justify-start -translate-x-12 from-slate-900 to-transparent bg-gradient-to-r w-[90%]">
                    <p className="mt-1  text-white text-md max-md:text-sm  translate-x-12">
                      Unranked
                    </p>
                  </div>
                  <div className="flex items-center justify-start gap-0 w-[90%] -translate-x-10 bg-gradient-to-r from-purple-900 to-transparent">
                    <TrophyIcon className="w-8 h-8 max-md:w-7 max-md:h-7 translate-x-10" />
                    <p className="text-[20px] max-md:text-sm text-white translate-x-10">
                      {trophies}
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="flex flex-row w-full h-full pt-10 max-md:pt-4">
              <div className="flex flex-col w-full items-start justify-center text-white pl-5 font-ClashRegular gap-2 text-[10px] ">
                <p>War Stars Won:</p>
                <div className="bg-[#39385a] rounded-[6px] w-[90%] flex h-[50%] items-center justify-center relative ">
                  <Image
                    alt="war-stars-won"
                    src="/white-star.png"
                    width={200}
                    height={200}
                    className="w-10 h-10 -translate-x-4 absolute left-0"
                  />
                  <p className="text-[20px]">{warStars}</p>
                </div>
              </div>
              <div className="flex flex-col w-full items-start justify-center text-white pl-5 font-ClashRegular gap-2 text-[10px] ">
                <p>All Time Best:</p>

                <div className="bg-[#39385a] rounded-[6px] w-[90%] flex h-[50%] items-center justify-center relative ">
                  <Image
                    alt="war-stars-won"
                    src="/no_league.png"
                    width={200}
                    height={200}
                    className="w-10 h-10 -translate-x-4 absolute left-0"
                  />
                  <p className="text-[20px] flex items-center justify-center gap-1">
                    <TrophyIcon className="w-6 h-6" />
                    {bestTrophies}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" border-t-2 pb-1 pt-[1px] border-[#7589c6] w-full flex items-center justify-center font-ClashRegular text-[10px] max-md:text-[6px] px-2 text-white">
          <div className="flex items-center justify-center w-full">
            <p className="w-full">Troops donated:</p>
            <div className="bg-[#566591] px-4 max-md:px-1 py-[1px] rounded-[4px]">
              {donations}
            </div>
          </div>
          <div className="flex items-center justify-center w-full">
            <p className="w-full">Troops recieved:</p>
            <div className="bg-[#566591] px-4 max-md:px-1 py-[1px] rounded-[4px]">
              {donationsReceived}
            </div>
          </div>
          <div className="flex items-center justify-center w-full">
            <p className="w-full">Attacks Won:</p>
            <div className="bg-[#566591] px-4 max-md:px-1 py-[1px] rounded-[4px]">
              {attackWins}
            </div>
          </div>
          <div className="flex items-center justify-center w-full">
            <p className="w-full">Defence Won:</p>
            <div className="bg-[#566591] px-4 max-md:px-1 py-[1px] rounded-[4px]">
              {defenseWins}
            </div>
          </div>
        </div>
      </div>  )
}

export default CocPlayerStatsHeader