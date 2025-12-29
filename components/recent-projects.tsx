/* eslint-disable react-hooks/set-state-in-effect */
"use client"

import { useEffect, useState } from "react"
import useSWR from "swr"
import { Github, ExternalLink, Code } from "lucide-react"
import { LoaderFour } from "./ui/loader"

export const dynamic = "force-dynamic"

interface Repository {
  name: string
  description: string | null
  html_url: string
  homepage: string
  language: string
  topics: string[]
  created_at: string
  stargazers_count: number
}

interface ProjectData {
  name: string
  description: string | null
  url: string
  home: string
  language: string
  topics: string[]
  created_at: string
  stars: number
}

const fetcher = async (url: string) => {
  const res = await fetch(url)
  if (!res.ok) throw new Error("Failed to fetch")
  return res.json()
}

export function RecentProjects() {
  const [projects, setProjects] = useState<ProjectData[]>([])
  const [loading, setLoading] = useState(true)

  // ✅ FETCH FROM YOUR SERVER (pagination + sorting handled)
  const { data: repoData, error: repoError } = useSWR<Repository[]>(
    "/api/github/repos",
    fetcher,
    {
      revalidateOnFocus: false,
      dedupingInterval: 60_000,
    }
  )

  useEffect(() => {
    if (!repoData) return

    // already sorted by date on server
    const projectData: ProjectData[] = repoData.slice(0, 5).map((repo) => ({
      name: repo.name,
      description: repo.description,
      url: repo.html_url,
      home: repo.homepage,
      language: repo.language,
      topics: repo.topics,
      created_at: repo.created_at,
      stars: repo.stargazers_count,
    }))

    setProjects(projectData)
    setLoading(false)
  }, [repoData])

  if (loading) {
    return (
      <div className="min-w-lg h-full border border-white/60 rounded-xl p-6 flex items-center justify-center bg-transparent">
        <div className="text-center">
          <Code className="w-8 h-8 mx-auto mb-2 opacity-60 text-slate-300" />
          <p className="text-sm text-slate-400">
            <LoaderFour />
          </p>
        </div>
      </div>
    )
  }

  if (repoError || projects.length === 0) {
    return (
      <div className="min-w-lg h-full border border-white/50 rounded-xl p-6 flex items-center justify-center bg-transparent">
        <div className="text-center">
          <Github className="w-8 h-8 mx-auto mb-2 opacity-60 text-slate-300" />
          <p className="text-sm text-slate-400">No projects found</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-w-sm md:min-w-lg h-full border border-white/50 rounded-xl p-6 bg-transparent flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <Github className="w-5 h-5 text-slate-300" />
        <h2 className="text-xl font-bold text-slate-200">
          Latest Repositories
        </h2>
      </div>

      {/* Projects List */}
      <div className="space-y-4 flex-1 overflow-y-auto">
        {projects.map((project, index) => {
          const isLatest = index === 0

          return (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`block p-4 rounded-lg border transition-all duration-300 group ${
                isLatest
                  ? "border-yellow-400/40 hover:border-yellow-400/60 bg-white/5 ring-1 ring-yellow-400/10"
                  : "border-white/30 hover:border-white/20 hover:bg-white/5"
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <h3
                  className={`font-semibold truncate flex-1 ${
                    isLatest
                      ? "bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-400 to-blue-400"
                      : "text-slate-200 group-hover:text-white"
                  }`}
                >
                  {project.name}
                </h3>
                <span className={`${isLatest ? 'text-yellow-400' : 'text-slate-400 hidden'}`}>Currently Working</span>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-slate-200 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {project.description && (
                <p className="text-xs mb-3 text-slate-400 line-clamp-2">
                  {project.description}
                </p>
              )}

              <div className="flex items-center justify-between text-xs">
                {project.language && (
                  <span className="px-2 py-1 rounded bg-white/5 text-slate-300">
                    {project.language}
                  </span>
                )}
                {project.stars > 0 && (
                  <span className="text-slate-400">⭐ {project.stars}</span>
                )}
              </div>
            </a>
          )
        })}
      </div>
    </div>
  )
}
