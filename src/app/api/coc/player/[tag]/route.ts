import { NextResponse } from 'next/server';

export async function GET(
  req: Request,
  { params }: { params: { tag: string } }
) {
  const { tag } = params;
  console.log("Here is the tag itself=============",tag);
  
  const apiToken = process.env.COC_API_KEY;

  if (!apiToken) {
    return NextResponse.json({ error: 'API token missing' }, { status: 500 });
  }

  try {
    const encodedTag =`%23${tag}`
    const response = await fetch(`https://cocproxy.royaleapi.dev/v1/players/${encodedTag}`, {
      headers: {
        Authorization: `Bearer ${apiToken}`,
      },
    });

    if (!response.ok) {
      const errText = await response.text();
      return NextResponse.json({ error: errText }, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch player data' }, { status: 500 });
  }
}
