// app/api/player/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const playerTag = '%23PRUU9GC'; // %23 = '#' encoded
  const apiKey = process.env.CLASH_ROYALE_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ error: 'API key not found' }, { status: 500 });
  }

  try {
    const response = await fetch(`https://proxy.royaleapi.dev/v1/players/${playerTag}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
      next: { revalidate: 60 }, // Optional: ISR for 60 seconds
    });

    if (!response.ok) {
      const error = await response.json();
      return NextResponse.json({ error }, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch player data' }, { status: 500 });
  }
}
