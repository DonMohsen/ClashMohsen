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
{data.name}
        <BookmarkToggle data={data} game={GameType.coc} tag={tag} tagType={TagType.clan}  />
    </>
          )
}

export default CocClanHeader