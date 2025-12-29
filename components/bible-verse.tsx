/* eslint-disable react-hooks/set-state-in-effect */
"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { LoaderFour } from "./ui/loader"

export const dynamic = "force-dynamic"

interface BibleVerse {
  book: string
  chapter: number
  verse: number
  text: string
  version?: string
}

export function BibleVerse() {
  const [verseData, setVerseData] = useState<BibleVerse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchVerse = async () => {
    try {
      setLoading(true)
      const res = await fetch("/api/bible/random")

      if (!res.ok) {
        throw new Error("Failed to fetch verse")
      }

      const data = await res.json()
      setVerseData(data)
      setError(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error fetching verse")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchVerse()
  }, [])

  return (
    <Card className="max-w-xl md:max-w-2xl mt-2 md:mt-16 p-4 md:p-6 bg-black text-white border border-white/50 rounded-lg">
      {loading && !verseData ? (
        <div className="text-center text-muted-foreground">
          <LoaderFour />
        </div>
      ) : error ? (
        <div className="text-center text-destructive">{error}</div>
      ) : verseData ? (
        <div className="space-y-4">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <h2 className="text-lg md:text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-400 to-blue-400">
              {verseData.book} {verseData.chapter}:{verseData.verse}
            </h2>

            {verseData.version && (
              <span className="text-xs sm:text-sm font-medium text-yellow-400 px-2 py-1 bg-yellow-400/5 rounded">
                {verseData.version}
              </span>
            )}
          </div>

          {/* Verse text */}
          <p className="text-base leading-relaxed italic text-slate-200">
            &quot;{verseData.text}&quot;
          </p>

          {/* Color accents */}
          <div className="mt-4 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-blue-500" />
            <span className="w-3 h-3 rounded-full bg-green-500" />
            <span className="w-3 h-3 rounded-full bg-teal-400" />
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-blue-300" />
          </div>
        </div>
      ) : null}
    </Card>
  )
}
