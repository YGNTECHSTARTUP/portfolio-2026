"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import index from "swr"

const experiences = [
  {
    id: 1,
    type: "work",
    title: "Backend Developer Intern",
    company: "ISKCON HUBLI",
    status: "Completed 6 months",
    description:
      "I collaborated closely with a Senior Developer to architect and develop a production-grade backend system for a global donation collection platform—ISKCON Hubli Campaigns.",
    skills: ["Database Design", "Razor Pay Integration", "API Development"],
    size: "large",
  },
  {
    id: 2,
    type: "work",
    title: "Industrial Trainee",
    company: "CENTRAL INSTITUTE OF TOOL DESIGN",
    status: "Completed 6 months",
    description:
      "I gained exposure to industry standards in product manufacturing and learned how low-level systems work.",
    skills: ["System Design", "System Programming", "Product Design"],
    size: "medium",
  },
  {
    id: 4,
    type: "club",
    title: "Codeiam Web Development Lead",
    company: "Codeiam",
    status: "Completed 1 year",
    description:
      "Leading the web development chapter of Codeiam, organizing workshops and mentoring students.",
    skills: ["Leadership", "Mentoring", "Web Development"],
    size: "medium",
  },
  {
    id: 3,
    type: "club",
    title: "Technical Head of Web Development",
    company: "GDG AUCE",
    status: "Completed 1 year",
    description:
      "Leading web development initiatives and mentoring students through community programs.",
    skills: ["Next.js", "Tailwind CSS", "TypeScript", "Leadership"],
    size: "large",
  },
  {
    id: 5,
    type: "education",
    title: "B.Tech in Information Technology",
    company: "Andhra University College of Engineering",
    status: "2023 - 2027",
    description:
      "Pursuing a degree in Information Technology with a focus on Networking and Web Development.",
    skills: ["Programming", "Networking", "System Engineering"],
    size: "large",
  },
  {
    id: 6,
    type: "education",
    title: "Diploma in Computer Science",
    company: "AANM & VVRSR Polytechnic College",
    status: "2021 - 2023",
    description:
      "Completed a Diploma in Computer Science with a focus on Networking and Web Development.",
    skills: ["Data Structures", "Algorithms", "Web Development"],
    size: "medium",
  },
]

export function ExperienceEducationGrid() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])

  useEffect(() => {
    experiences.forEach((_, index) => {
      setTimeout(() => {
        setVisibleItems((prev) => [...prev, index])
      }, index * 80)
    })
  }, [])

  const accents = [
    {
      bar: "bg-blue-500/40",
      border: "hover:border-blue-400/60",
      glow: "hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.6)]",
    },
    {
      bar: "bg-green-500/40",
      border: "hover:border-green-400/60",
      glow: "hover:shadow-[0_0_30px_-10px_rgba(34,197,94,0.6)]",
    },
    {
      bar: "bg-teal-400/40",
      border: "hover:border-teal-300/60",
      glow: "hover:shadow-[0_0_30px_-10px_rgba(45,212,191,0.6)]",
    },
    {
      bar: "bg-red-500/40",
      border: "hover:border-red-400/60",
      glow: "hover:shadow-[0_0_30px_-10px_rgba(239,68,68,0.6)]",
    },
    {
      bar: "bg-blue-300/40",
      border: "hover:border-blue-300/60",
      glow: "hover:shadow-[0_0_30px_-10px_rgba(147,197,253,0.6)]",
    },
  ]

  // placeholder to satisfy TS
  // We'll index inline below instead (cleaner)

  return (
    <div
      className="
        grid
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        gap-4 md:gap-6
        auto-rows-fr
        px-4 sm:px-6 lg:px-8
        py-6
        mx-auto
        w-full
        max-w-7xl
      "
    >
      {experiences.map((item, index) => {
        const a = accents[index % accents.length]

        return (
          <div
            key={item.id}
            className={`
              transition-all duration-500
              ${
                item.size === "large"
                  ? "md:col-span-2 lg:col-span-2"
                  : "md:col-span-1 lg:col-span-1"
              }
              ${
                visibleItems.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }
            `}
          >
            <Card
              className={`
                h-full
                flex flex-col
                rounded-lg sm:rounded-xl
                border border-white/20
                bg-white/5
                backdrop-blur-xl
                shadow-lg
                transition-all duration-300
                hover:-translate-y-1
                ${a.border}
                ${a.glow}
              `}
            >
              {/* Accent bar */}
              <div className={`h-1 ${a.bar}`} />

              <div className="flex-1 p-4 sm:p-6 flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <Badge
                    variant="outline"
                    className="capitalize text-xs border-white/30 text-slate-300 bg-white/5"
                  >
                    {item.type}
                  </Badge>
                  <span className="text-xs text-slate-400">{item.status}</span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-50 mb-1">
                  {item.title}
                </h3>

                <p className="text-sm font-semibold text-slate-400 mb-2">
                  {item.company}
                </p>

                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>

                {/* Skills pinned to bottom */}
                <div className="mt-auto pt-4 flex flex-wrap gap-2">
                  {item.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="
                        text-xs sm:text-sm
                        text-slate-300
                        border border-white/20
                        bg-white/5
                        rounded-full
                        px-2.5 py-1
                      "
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        )
      })}
    </div>
  )
}
