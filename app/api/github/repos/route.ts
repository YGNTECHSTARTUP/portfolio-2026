import { NextResponse } from "next/server"
import { getAllRepos } from "@/lib/github" // your updated function

export async function GET() {
  try {
    const repos = await getAllRepos("YGNTECHSTARTUP")

    return NextResponse.json(repos, {
      headers: {
        "Cache-Control": "s-maxage=600, stale-while-revalidate",
      },
    })
  } catch (e) {
    return NextResponse.json(
      { error: "Failed to fetch repos" },
      { status: 500 }
    )
  }
}
