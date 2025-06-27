import Image from 'next/image'
import React from 'react'

const ExpBadge = ({expLevel}:{expLevel:number}) => {
  return (
<div className='relative'
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