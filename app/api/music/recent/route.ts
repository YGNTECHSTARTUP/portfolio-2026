import { NextResponse } from "next/server"

export const dynamic = "force-dynamic"

const LASTFM_API_KEY = process.env.LASTFM_API_KEY
const USERNAME = "ygntech"

export async function GET() {
  try {
    const res = await fetch(
      `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${USERNAME}&api_key=${LASTFM_API_KEY}&format=json&limit=2`,
      {
        cache: "no-store",
      }
    )

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch music data" },
        { status: 500 }
      )
    }

    const data = await res.json()

    return NextResponse.json(data)
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
