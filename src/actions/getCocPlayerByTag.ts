import { CocPlayerType } from "@/types/coc.types";
import { cache } from "react";

interface GetPlayerByTagResponse {
  data: CocPlayerType | null;
  status: number;
}

export const getCocPlayerByTag = cache(async (tag: string): Promise<GetPlayerByTagResponse> => {
  const apiToken = process.env.COC_API_KEY;

  if (!apiToken) {
    throw new Error("API token not found");
  }

  try {
    const response = await fetch(`https://cocproxy.royaleapi.dev/v1/players/%23${tag}`, {
      headers: {
        Authorization: `Bearer ${apiToken}`,
      },
      next: {
        revalidate: 300,
      },
    });

    const status = response.status;

    if (!response.ok) {
      return { data: null, status };
    }

    const data: CocPlayerType = await response.json();
    return { data, status };
  } catch (error) {
    console.error("getPlayerByTag error:", error);
    throw new Error("Failed to fetch player data");
  }
});
