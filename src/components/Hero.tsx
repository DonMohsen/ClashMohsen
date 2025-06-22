"use client"
import React, { useEffect, useState } from 'react'
import HeroPhoto from "@/public/hero-photo.webp"
import Image from 'next/image'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Search } from 'lucide-react'
const Hero = () => {  
    const [tag, setTag] = useState("p");

    const handleFetchPlayerByTag=async(e: React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault();
    if (tag) {
      console.log(tag);
      
    }

  }
  return (
    <div className='relative  w-full h-screen bg-black z-0 flex items-center justify-center flex-row max-lg:flex-col md:px-[100px]'>
      <div className=' flex-col w-full h-1/2  rounded-[40px] '>
        <h1 className='mt-10 font-SupercellHeadline text-7xl flex items-start justify-center w-full text-white font-extrabold '>
          Clash <span className='text-purple-600'> API</span>
        </h1>
        <div className='font-SupercellTextMedium text-md flex items-start justify-center   text-white font-extrabold mt-10 w-full'>
          <h2 className='max-w-[300px] text-center font-extralight '>

          Enter Your Tag to Get Your Data And Share It EVERYWHERE! Or Even Better...Sign In!!!
          </h2>
          
        </div>
        <div className='   w-full flex items-center justify-center flex-col font-SupercellTextMedium '>
          <form  
          className='mt-5 flex items-center justify-center relative w-[40%]'
          onSubmit={handleFetchPlayerByTag}>
          <Input
          value={tag}
          onChange={(e)=>setTag(e.target.value.toUpperCase())}
          placeholder='PRUU9GC'
          className='w-full border-2 border-blue-400 pl-10 rounded-xl placeholder:text-white placeholder:opacity-40 cursor-auto text-white'/>
            <Button
            className='text-white font-light text-xs absolute right-0 bg-blue-400 hover:bg-blue-200 rounded-xl border-none w-[20%] '
            ><Search /></Button>
            <span className='text-xl absolute left-4 text-white'>#</span>
          </form>
            <Button className='w-[40%] mt-5 bg-purple-600 hover:bg-purple-400 rounded-xl'>
            Login/Signup
            </Button>
        </div>
      </div>
      <div className='flex items-center justify-center w-full h-1/2 relative'>
      <Image
          src={HeroPhoto}
          alt="Hero Image"
          className="object-cover w-full h-full absolute"
        />
        <div className='absolute w-full h-full z-50 cloudImage'>

        </div>
      </div>
    </div>
  )
}

export default Hero