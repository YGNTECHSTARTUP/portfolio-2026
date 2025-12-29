"use client"

import useSWR from "swr"
import Image from "next/image"
import { Music } from "lucide-react"
import { LoaderFour } from "./ui/loader"

export const dynamic = "force-dynamic"

interface Track {
  "@attr"?: { nowplaying: boolean }
  name: string
  artist: { "#text": string }
  url: string
  image: Array<{ "#text": string }>
}

interface RecentTracksResponse {
  recenttracks: {
    track: Track | Track[]
  }
}

const fetcher = async (url: string) => {
  const res = await fetch(url)
  if (!res.ok) throw new Error("Failed to fetch")
  return res.json()
}

export function MusicPlayer() {
  const { data: musicData } = useSWR<RecentTracksResponse>(
    "/api/music/recent",
    fetcher,
    {
      revalidateOnFocus: false,
      dedupingInterval: 60_000,
    }
  )

  const tracks = musicData?.recenttracks?.track
  const currentTrack = Array.isArray(tracks) ? tracks[0] : tracks

  if (!currentTrack) {
    return (
      <div className="max-w-md mx-auto p-2">
        <div className="border border-white/10 rounded-md p-4 text-center text-slate-300">
          <Music className="w-8 h-8 mx-auto mb-2 opacity-60" />
          <LoaderFour />
        </div>
      </div>
    )
  }

  const isPlaying = currentTrack["@attr"]?.nowplaying || false
  const songName = currentTrack.name
  const artistName = currentTrack.artist["#text"]
  const imageURL =
    currentTrack.image?.[3]?.["#text"] ||
    currentTrack.image?.[0]?.["#text"]

  return (
    <div className="min-w-sm md:min-w-lg mx-auto p-2">
      <div
        className={`border rounded-xl p-3 flex items-center gap-4 bg-transparent ${
          isPlaying
            ? "border-yellow-400/50 ring-1 ring-yellow-400/10"
            : "border-white/50"
        }`}
      >
        {/* Album Art */}
        <div className="relative w-20 h-20 rounded-md overflow-hidden">
          {imageURL ? (
            <Image
              src={imageURL}
              alt={songName}
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div className="w-full h-full bg-slate-600 flex items-center justify-center">
              <Music className="w-6 h-6 text-slate-400" />
            </div>
          )}
        </div>

        {/* Track Info */}
        <div className="flex-1">
          <p className="text-xs mb-1">
            {isPlaying ? (
              <span className="text-yellow-300">Jamming…</span>
            ) : (
              <span className="text-gray-200">Last Played</span>
            )}
          </p>
          <h3 className="text-lg font-semibold text-slate-200">
            {songName}
          </h3>
          <p className="text-sm text-slate-400">{artistName}</p>
        </div>
      </div>
    </div>
  )
}
