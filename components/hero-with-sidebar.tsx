"use client"


import { RecentProjects } from "./recent-projects"
import { MusicPlayer } from "./music-player"
import Bio from "./Bio"
import { BibleVerse } from "./bible-verse"
// import { TextGenerateEffectDemo } from "./texteffect"

export function HeroWithSidebar() {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 md:p-8">
      {/* Left Side - Text Effect (Full Width on Mobile) */}
      <div className="flex flex-col items-center justify-center">
      <Bio/>
    
      <BibleVerse/>
      </div>

      {/* Right Side - Stacked Components */}
      <div className="flex flex-col gap-6 h-full">
        {/* Top - Recent Projects */}
        <div className="flex-1 min-h-96">
          <RecentProjects />
        </div>

        {/* Bottom - Music Player */}
        <div className="flex-shrink-0">
          <MusicPlayer />
        </div>
      </div>
    </div>
  )
}
