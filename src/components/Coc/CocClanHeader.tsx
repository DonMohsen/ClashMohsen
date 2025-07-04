import { CocClanPick, TagType } from '@/types/general.types';
import React from 'react'
import BookmarkToggle from '../BookmarkToggle';
import { GameType } from '@/types/data.types';
type Props = {
  data: CocClanPick;
  tag:string
};

const CocClanHeader :React.FC<Props>= ({data,tag}) => {
  return (
    <>
    <div className='flex flex-col font-ClashBold text-white'>
        <p>

    {data.name}
        </p>
    <p className='text-[10px] font-SupercellHeadline font-extralight'>

    {data.tag}
    </p>
    </div>
    <div className='absolute -top-2 -right-5 max-sm:-right-3'>

        <BookmarkToggle data={data} game={GameType.coc} tag={tag} tagType={TagType.clan}  />
    </div>
    </>
          )
}

export default CocClanHeader