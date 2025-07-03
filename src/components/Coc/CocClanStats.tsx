import { CocClanType } from '@/types/coc.types';
import React from 'react'
type Props = {
  clan: CocClanType;
};

const CocClanStats:React.FC<Props> = ({clan}) => {
  return (
    <div>
        {clan.name}
    </div>
  )
}

export default CocClanStats