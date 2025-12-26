"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { LoaderFour } from "./ui/loader"
export const dynamic = "force-dynamic";
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

  useEffect(() => {
    const fetchVerse = async () => {
      try {
        setLoading(true)
        const response = await fetch("https://bible-api.com/data/web/random")

        if (!response.ok) {
          throw new Error("Failed to fetch verse")
        }

        const data = await response.json()
        setVerseData(data.random_verse)
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error fetching verse")
      } finally {
        setLoading(false)
      }
    }

    fetchVerse()
  }, [])

  const handleRefresh = async () => {
    try {
      setLoading(true)
      const response = await fetch("https://bible-api.com/data/web/random")

      if (!response.ok) {
        throw new Error("Failed to fetch verse")
      }

      const data = await response.json()
      setVerseData(data)
      setError(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error fetching verse")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="min-w-md w-full max-w-2xl mt-16 p-6 m-10 bg-black text-white border border-white/50">
      {loading && !verseData ? (
        <div className="text-center text-muted-foreground"><LoaderFour/></div>
      ) : error ? (
        <div className="text-center text-destructive">{error}</div>
      ) : verseData ? (
        <div className="space-y-4 text-white">
          {/* Header with book, chapter, and verse */}
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">
              {verseData.book} {verseData.chapter}:{verseData.verse}
            </h2>
            {verseData.version && (
              <span className="text-sm font-medium text-white px-2 py-1 bg-muted rounded">
                {verseData.version}
              </span>
            )}
          </div>

          {/* Verse text */}
          <p className="text-base leading-relaxed italic text-white">&quot;{verseData.text}&quot;</p>

          {/* Refresh button */}
       
        </div>
      ) : null}
    </Card>
  )
}
