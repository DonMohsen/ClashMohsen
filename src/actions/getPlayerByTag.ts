import { cache } from 'react';

export const getPlayerByTag = cache(async (tag: string) => {
  
  const apiToken = process.env.COC_API_KEY;
  
  if (!apiToken) {
    throw new Error('API token not found');
  }
  
  try {
    const response = await fetch(`https://cocproxy.royaleapi.dev/v1/players/%23${tag}`, {
      headers: {
        Authorization: `Bearer ${apiToken}`,
      },
      next: {
        revalidate: 300, // ISR
      },
    });
    
    const status = response.status;
    console.log(`statussssssssss`,status);

    if (!response.ok) {
      // You might still want to parse the body for error message here if needed
      return { data: null, status };
    }

    const data = await response.json();
    return { data, status };
  } catch (error) {
    console.error("getPlayerByTag error:", error);
    throw new Error('Failed to fetch player data');
  }
});
