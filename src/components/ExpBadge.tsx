import Image from 'next/image'
import React from 'react'

const ExpBadge = ({expLevel}:{expLevel:number}) => {
  return (
<div className="relative w-14 h-14 rounded-[10px] bg-gradient-to-br from-sky-400 to-sky-700 shadow-md flex items-center justify-center
  border border-transparent
  before:absolute before:inset-0 before:rounded-[10px]
  before:border before:border-white/30 before:backdrop-blur-sm before:pointer-events-none before:z-10"
>
  <Image
    alt="xp"
    src="https://cdns3.royaleapi.com/cdn-cgi/image/w=64,h=64/static/img/ui/xp.png"
    width={200}
    height={200}
    className="w-12 h-12 relative z-20"
  />
  <span className="absolute left-1/2 top-1/2 text-[23px] -translate-x-1/2 -translate-y-1/2 text-white font-ClashBold pointer-events-none z-30">
    {expLevel}
  </span>
</div>  )
}

export default ExpBadge