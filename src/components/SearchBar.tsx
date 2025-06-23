'use client';

import { useGameBadgeStore } from '@/store/useGameBadgeStore';
import { GameType } from '@/types/data.types';
import { useRouter } from 'next/navigation';
import { useState, FormEvent } from 'react';

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
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Enter tag"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border rounded px-3 py-2 text-black"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Search
      </button>
    </form>
  );
}
