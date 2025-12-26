"use client"

import Image from "next/image"
import { useState } from "react"

interface ProfileCardProps {
  name: string
  title: string
  subtitle: string
  imageUrl: string
  imageAlt?: string
}

export default function ProfileCard({ name, title, subtitle, imageUrl, imageAlt = "Profile" }: ProfileCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="w-full max-w-2xl" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div
        className={`flex items-center gap-6 p-6 rounded-3xl border transition-all duration-300 `}
      >
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <div
            className={`relative w-32 h-32 rounded-2xl overflow-hidden transition-all duration-300 ${
              isHovered ? "grayscale" : "grayscale-0"
            }`}
          >
            <Image src={imageUrl || "/placeholder.svg"} alt={imageAlt} fill className="object-cover" />
          </div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col gap-1">
          <h2 className="font-mono text-2xl font-bold text-white tracking-tight">{name}</h2>
          <p
            className={`text-sm font-bold uppercase tracking-widest transition-colors duration-300 ${
              isHovered ? "text-gray-400" : "text-white"
            }`}
          >
            {title}
          </p>
          <p
            className={`text-xs font-semibold uppercase tracking-widest transition-colors duration-300 ${
              isHovered ? "text-gray-500" : "text-gray-300"
            }`}
          >
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  )
}
