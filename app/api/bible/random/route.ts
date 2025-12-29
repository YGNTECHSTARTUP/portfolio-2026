import { NextResponse } from "next/server"

export const dynamic = "force-dynamic"

export async function GET() {
  try {
    const res = await fetch("https://bible-api.com/data/web/random", {
      cache: "no-store",
    })

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch verse" },
        { status: 500 }
      )
    }

    const data = await res.json()

    // Normalize response shape
    return NextResponse.json(data.random_verse)
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
