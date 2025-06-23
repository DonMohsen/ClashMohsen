'use client';

import { useGameBadgeStore } from '@/store/useGameBadgeStore';
import { GameType } from '@/types/data.types';
import { useRouter } from 'next/navigation';
import { useState, FormEvent } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Search } from 'lucide-react';

export default function SearchBar() {
  const{game}=useGameBadgeStore()
  const [input, setInput] = useState('');
  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim().toUpperCase();
    if (trimmed) {
      router.push(`/${game}/Player/${encodeURIComponent(trimmed)}`);
    }
  };
// console.log("Logged Game==========>",game);

  return (

      <div className='   w-full flex items-center justify-center flex-col font-ClashBold select-none '>
          <form  
          className='mt-5 flex items-center justify-center relative w-[40%]'
    onSubmit={handleSubmit} >

          <Input
          type='text'
          value={input}
          onChange={(e) => setInput(e.target.value.toUpperCase())}
          placeholder='PRUU9GC'
          className='w-full border-2 border-blue-400 pl-10 rounded-xl placeholder:text-black placeholder:opacity-40 cursor-auto text-black'/>
            <Button
            className='text-white font-light text-xs absolute right-0 bg-blue-400 hover:bg-blue-200 rounded-xl border-none w-[20%] '
            ><Search /></Button>
            <span className='text-xl absolute left-4 text-black'>#</span>
          </form>
            {/* <Button className='w-[40%] mt-5 bg-purple-600 hover:bg-purple-400 rounded-xl'>
            Login/Signup
            </Button> */}
        </div>
    
  );
}
