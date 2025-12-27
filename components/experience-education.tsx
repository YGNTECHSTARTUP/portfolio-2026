"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    id: 1,
    type: "work",
    title: "Backend Developer Intern",
    company: "ISKCON HUBLI",
    status: "Completed",
    description:
      " I collaborated closely with a Senior Developer to architect and develop a production-grade backend system for a global donation collection platform—ISKCON Hubli Campaigns. The platform enables users worldwide to create and manage fundraising campaigns for temple construction",

    skills: ["Database Design", "Razor Pay Integration", "API Development"],
    size: "large", // spans 2 columns
  },
  {
    id: 2,
    type: "work",
    title: "Industrial Trainee",
    company: "CENTRAL INSTITUTE OF TOOL DESIGN",
    status: "Completed",
    description:
      " I got exposure to industry standards in product manufacturing and learned how low-level systems work. I explored meta-programming, compilers, and the basics of system operations. ",
    skills: ["System Design", "System Programming","Product Deign" ],
    size: "medium",
  },
 
  {
    id: 4,
    type: "club",
    title: "Codeiam Webdevelopment Lead",
    company: "Codeiam",
    status: "Completed",
    description:
      " Leading the web development Chapter of Codeiam, organizing workshops, hackathons, and mentoring students in web technologies.",
    skills: ["Leadership", "Mentoring", "WebDevelopment"],
    size: "medium",
  },
   {
    id: 3,
    type: "club",
    title: "Technical Head Of Web Development",
    company: "GDG AUCE",
    status: "Completed",
    description:
      "Leading Web Dev Project initiatives and mentoring students. Organizing workshops and hackathons for community learning.",
    skills: ["Nextjs", "Tailwind CSS", "Typescript","Leadership"],
    size: "large"
  },
  {
    id: 5,
    type: "education",
    title: "B.Tech in Information Technology",
    company: "Andhra University College of Engineering",
    status: "2023 - 2027",
    description:
      "Pursuing a degree in Information Technology with a focus on Networking and Web Development. Current CGPA: 8.3/10",
    skills: ["Programming", "Networking", "System Engineering"],
    size: "large", // spans 2 columns
  },
  {
    id: 6,
    type: "education",
    title: "Diploma in Computer Science",
    company: "AANM & VVRSR Polytechnic College",
    status: "2021 - 2023",
    description:
      "Pursuing a Diploma in Computer Science with a focus on Networking and Web Development. CGPA: 9.3/10",
    skills: ["Data Structures", "Algorithms", "Web Development"],
    size: "medium", // spans 2 columns
  },
]

export function ExperienceEducationGrid() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])

  useEffect(() => {
    experiences.forEach((_, index) => {
      setTimeout(() => {
        setVisibleItems((prev) => [...prev, index])
      }, index * 100)
    })
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-max mx-auto p-4 ">
      {experiences.map((item, index) => (
        <div
          key={item.id}
          className={`transition-all duration-500 transform ${
            item.size === "large" ? "md:col-span-2" : "md:col-span-1"
          } ${visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <Card className="h-full overflow-hidden border  bg-black shadow-xl hover:shadow-2xl transition-all duration-300 hover-white-on-hover border-white/50 group hover:-translate-y-1 rounded-xl">
            <div className="h-1  from-slate-500 to-slate-400" />

            <div className="p-6">
              {/* Badge for type */}
              <div className="flex items-center gap-2 mb-4">
                <Badge
                  variant="outline"
                  className={`capitalize text-xs font-semibold border ${
                    item.type === "work"
                      ? "border-slate-600 text-slate-300 bg-transparent"
                      : item.type === "club"
                        ? "border-slate-600 text-slate-300 bg-transparent"
                        : "border-slate-600 text-slate-300 bg-transparent"
                  }`}
                >
                  {item.type}
                </Badge>
                <span className="text-xs text-slate-500 font-medium">{item.status}</span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-slate-50 mb-1 group-hover:text-slate-400 transition-colors">
                {item.title}
              </h3>

              {/* Company */}
              <p className="text-sm font-semibold text-slate-400 mb-3">{item.company}</p>

              {/* Description */}
              <p className="text-sm text-slate-400 mb-4 leading-relaxed">{item.description}</p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="inline-block px-2.5 py-1 text-xs font-medium bg-transparent text-slate-300 rounded-full group-hover:bg-transparent group-hover:text-slate-300 group-hover:border group-hover:border-slate-500 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="h-0.5 bg-gradient-to-r from-transparent via-slate-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Card>
        </div>
      ))}
    </div>
  )
}
