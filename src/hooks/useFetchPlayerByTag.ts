// hooks/useFetchPlayerByTag.ts
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { fetchExternalImage } from 'next/dist/server/image-optimizer';

const fetchPlayerByTag = async (tag: string) => {
  if (!tag) return
  
  const response = await fetch(`http://localhost:5000/api/coc/player/${tag}`); // Adjust API endpoint as needed
  return response.json();
};

export const useFetchPlayerByTag = (tag: string) => {
  const{data:player,isLoading,error,refetch}=useQuery<any>({
         queryKey:['playerFetchByTag',tag],
         queryFn: async () => {fetchPlayerByTag(tag)}
     });

  return { player, error, isLoading ,refetch};
};
