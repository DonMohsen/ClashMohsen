"use client"
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import React from 'react'

const PlayerSearch = ({tag}:{tag:string|string[]}) => {
    const queryClient=useQueryClient();
    const{data,isLoading,error}=useQuery<any>({
        queryKey:['playerSearchByTag'],
        queryFn: async () => {
            const response = await fetch(`http://localhost:5000/api/coc/player/${tag}`);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json(); // Parse JSON data here
        }
    });
    console.log(data);
    
  return (
    <div>
        <h1>
            {isLoading&&
                        `Hi ...  you are Town Hall 00  Level:...`

            }
            {data&&
            
            `Hi ${data.name} you are Town Hall ${data.townHallLevel} Level:${data.expLevel}`
            }
        </h1>
    </div>
  )
}

export default PlayerSearch