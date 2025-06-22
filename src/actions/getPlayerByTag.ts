export async function getPlayerByTag(tag: string) {
  const apiToken = process.env.CLASH_ROYALE_API_KEY;

  if (!apiToken) {
    throw new Error('API token not found');
  }

  try {
    const encodedTag = encodeURIComponent(`#${tag}`);
    const response = await fetch(`https://proxy.royaleapi.dev/v1/players/${encodedTag}`, {
      headers: {
        Authorization: `Bearer ${apiToken}`,
      },
      cache: 'no-store', // no caching (SSR)
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`API error: ${error}`);
    }

    return await response.json();
  } catch (error) {
    console.error("getPlayerByTag error:", error);
    throw new Error('Failed to fetch player data');
  }
}
