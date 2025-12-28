"use client"


import { RecentProjects } from "./recent-projects"
import { MusicPlayer } from "./music-player"
import Bio from "./Bio"
import { BibleVerse } from "./bible-verse"
// import { TextGenerateEffectDemo } from "./texteffect"

export function HeroWithSidebar() {
  return (
    <div id="about" className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 p-4 sm:p-6 md:p-8 items-start">
      {/* Left Side - Text Effect (Full Width on Mobile) */}
      <div className="flex flex-col items-start md:items-center justify-center space-y-6 w-full">
        <div className="w-full max-w-2xl">
          <Bio/>
          <div className="mt-6">
            <BibleVerse/>
          </div>
        </div>
      </div>

      {/* Right Side - Stacked Components */}
      <div className="flex flex-col gap-6 h-full w-full">
        {/* Top - Recent Projects */}
        <div className="flex-1 min-h-56 md:min-h-96 order-2 md:order-1">
          <RecentProjects />
        </div>

        {/* Bottom - Music Player */}
        <div className="shrink-0 order-1 md:order-2">
          <MusicPlayer />
        </div>
      </div>
    </div>
  )
}
