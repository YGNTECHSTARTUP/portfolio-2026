/* eslint-disable react-hooks/set-state-in-effect */
"use client"

import { useEffect, useState } from "react"
import useSWR from "swr"
import { Github, ExternalLink, Code } from "lucide-react"
import { LoaderFour } from "./ui/loader";
export const dynamic = "force-dynamic";
interface Repository {
  name: string
  description: string
  html_url: string
  homepage: string
  language: string
  topics: string[]
  created_at: string
  stargazers_count: number
}

interface ProjectData {
  name: string
  description: string
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

  // Fetch GitHub repositories
  const { data: repoData, error: repoError } = useSWR<Repository[]>(
    "https://api.github.com/users/YGNTECHSTARTUP/repos",
    fetcher,
    { revalidateOnFocus: false, dedupingInterval: 60000 },
  )

  useEffect(() => {
    if (repoData) {
      // Sort by creation date (newest first)
      const sorted = [...repoData].sort((a, b) => {
        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      })

      // Map to ProjectData and take top 5
      const projectData: ProjectData[] = sorted.slice(0, 5).map((repo) => ({
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
    }
  }, [repoData])

  if (loading) {
    return (
      <div className="min-w-lg h-full border border-white/60 rounded-xl p-6 flex items-center justify-center bg-transparent">
        <div className="text-center">
          <Code className="w-8 h-8 mx-auto mb-2 opacity-60 text-slate-300" />
          <p className="text-sm text-slate-400"><LoaderFour/></p>
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
        <h2 className="text-xl font-bold text-slate-200">Latest Repositories</h2>
      </div>

      {/* Projects List */}
      <div className="space-y-4 flex-1 overflow-y-auto">
        {projects.map((project, index) => {
          const isLatest = index === 0;
          return (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`block p-4 rounded-lg border transition-all duration-300 group ${isLatest ? 'border-yellow-400/40 hover:border-yellow-400/60 bg-white/5 ring-1 ring-yellow-400/10' : 'border-white/30 hover:border-white/20 hover:bg-white/5'}`}
            >
              {/* Project Name */}
              <div className="flex items-start justify-between mb-2">
                <h3 className={`font-semibold ${isLatest ? 'bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-400 to-blue-400' : 'text-slate-200 group-hover:text-white'} transition-colors truncate flex-1`}>
                  {project.name}
                </h3>
                <div className="flex items-center gap-2">
                  {isLatest && <span className="text-xs font-medium text-yellow-400">Currently Working</span>}
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-slate-200 flex-shrink-0 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>

              {/* Description */}
              {project.description && (
                <p className={`text-xs mb-3 line-clamp-2 ${isLatest ? 'text-slate-300' : 'text-slate-400'}`}>{project.description}</p>
              )}

              {/* Metadata */}
              <div className="flex items-center justify-between gap-2 text-xs">
                {project.language && (
                  <span className={`px-2 py-1 rounded ${isLatest ? 'text-yellow-400 bg-white/5 font-medium' : 'bg-white/5 text-slate-300'}`}>{project.language}</span>
                )}
                {project.stars > 0 && (
                  <span className="text-slate-400 flex items-center gap-1">
                    ⭐ {project.stars}
                  </span>
                )}
              </div>

              {/* Latest color chips */}
              {isLatest && (
                <div className="mt-3 flex items-center gap-2">
                   <span className="w-3 h-3 rounded-full bg-blue-500" />
                     <span className="w-3 h-3 rounded-full bg-green-500" />
                       <span className="w-3 h-3 rounded-full bg-teal-400" />
                
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                    <span className="w-3 h-3 rounded-full bg-blue-300" />
                 
              
                
             
                 
                
       
                </div>
                
              )}

              {/* Topics */}
              {project.topics && project.topics.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1">
                  {project.topics.slice(0, 2).map((topic, idx) => (
                    <span key={idx} className={`px-2 py-0.5 rounded-full ${isLatest ? 'bg-white/10 text-slate-100' : 'bg-white/10 text-slate-300'} text-xs`}>
                      #{topic}
                    </span>
                  ))}
                </div>
              )}
            </a>
          )
        })}
      </div>
    </div>
  )
}
