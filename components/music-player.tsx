"use client"


import useSWR from "swr"
import Image from "next/image"
import { Music } from "lucide-react"
import { LoaderFour, LoaderOne } from "./ui/loader"

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

interface Repository {
  name: string
  description: string
  html_url: string
  homepage: string
  language: string
  topics: string[]
}


export const dynamic = "force-dynamic";

const fetcher = async (url: string) => {
  const res = await fetch(url)
  if (!res.ok) throw new Error("Failed to fetch")
  return res.json()
}

export function MusicPlayer() {
  // compact player: no mount state required

  // Fetch Last.fm recent tracks
  const { data: musicData, error: musicError } = useSWR<RecentTracksResponse>(
    "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=ygntech&api_key=8621fbab3eabf34ce67b72dfd480b3ec&format=json&limit=2",
    fetcher,
    { revalidateOnFocus: false, dedupingInterval: 60000 },
  )

  // Fetch GitHub repositories
//   const { data: repoData, error: repoError } = useSWR<Repository[]>(
//     "https://api.github.com/users/ygntech/repos?sort=updated&per_page=10",
//     fetcher,
//     { revalidateOnFocus: false, dedupingInterval: 60000 },
//   )

  // Get current track
  const tracks = musicData?.recenttracks?.track
  const currentTrack = Array.isArray(tracks) ? tracks[0] : tracks

  if (!currentTrack) {
    return (
      <div className="max-w-md mx-auto p-2">
        <div className="border border-white/10 rounded-md p-4 text-center text-slate-300">
          <Music className="w-8 h-8 mx-auto mb-2 opacity-60" />
         <LoaderFour/>
        </div>
      </div>
    )
  }

  const isPlaying = currentTrack["@attr"]?.nowplaying || false
  const songName = currentTrack.name
  const artistName = currentTrack.artist["#text"]

  const imageURL = currentTrack.image?.[3]?.["#text"] || currentTrack.image?.[0]?.["#text"]

//   const projectData: ProjectData[] = (repoData || []).map((repo) => ({
//     name: repo.name,
//     description: repo.description,
//     url: repo.html_url,
//     home: repo.homepage,
//     language: repo.language,
//     topics: repo.topics,
//   }))

  return (
    <div className="min-w-sm md:min-w-lg mx-auto p-2">
      <div className={`border rounded-xl p-3 flex items-center gap-4 bg-transparent ${isPlaying ? 'border-yellow-400/50 ring-1 ring-yellow-400/10' : 'border-white/50'}`}>
        {/* Album Art */}
        <div className="relative ">
          <div className={`relative w-20 h-20 rounded-md overflow-hidden ${isPlaying ? 'grayscale-0' : 'grayscale'} opacity-90`}>
            {imageURL ? (
              <Image src={imageURL || "/"} alt={songName} fill className="object-cover" priority />
            ) : (
              <div className="w-full h-full bg-slate-600 flex items-center justify-center">
                <Music className="w-6 h-6 text-slate-400" />
              </div>
            )}
          </div>

          {/* Small playing indicator */}
         
        </div>

        {/* Track Info */}
        <div className="flex-1 text-left">
          <p className="text-xs font-medium text-slate-400 mb-1">
            {isPlaying ? <div className="text-yellow-300">
Jamming...
            </div> : <div className="text-gray-200">
Last Played
            </div>}
          </p>
          <h3 className={`text-lg font-semibold leading-tight ${isPlaying ? 'text-yellow-200' : 'text-slate-200'}`}>{songName}</h3>
          <p className="text-sm text-slate-400">{artistName}</p>

          {isPlaying && (
            <div className="mt-2 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-blue-500" />
              <span className="w-3 h-3 rounded-full bg-green-500" />
              <span className="w-3 h-3 rounded-full bg-teal-400" />
              <span className="w-3 h-3 rounded-full bg-red-500" />
              <span className="w-3 h-3 rounded-full bg-blue-300" />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
