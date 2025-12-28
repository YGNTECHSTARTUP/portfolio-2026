/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { cn } from "@/lib/utils"

import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import Image from "next/image"

export interface TimelineItem {
  id: string
  label: string
  date: string
  description: string
  gradientColor: string
  icon: string
  status?: "completed" | "in-progress" | "upcoming"
  statusLabel?: string
  imge:string
}

interface ElementStackTimelineProps {
  title?: string
  subtitle?: string
  items: TimelineItem[]
  gradientStart?: string
  gradientEnd?: string
}

const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  )
}

const TimelineCard = ({
  item,
  hovered,
  onHover,
}: {
  item: TimelineItem
  hovered: boolean
  onHover: (id: string | null) => void
}) => {
  return (
    <div
      onMouseEnter={() => onHover(item.id)}
      onMouseLeave={() => onHover(null)}
      onClick={() => onHover(hovered ? null : item.id)}
      role="button"
      aria-expanded={hovered}
      className="border border-gray-700 group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative h-48 md:h-64 rounded-lg overflow-hidden bg-black cursor-pointer"
    >
      {/* Corner decorations */}
      <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white" />

      <AnimatePresence>
        {/* If an image URL exists, show it and let it fully occupy the card */}
        {hovered && item.imge && item.imge.trim() !== "" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-10 h-full w-full rounded-lg overflow-hidden pointer-events-none"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            {/* Use a relative container so Next/Image `fill` works correctly */}
            <div className="relative h-full w-full">
              <Image src={item.imge} alt={item.label} fill className="object-cover brightness-95" />
              {/* A subtle dark overlay to keep text readable when shown */}
              <div className="absolute inset-0 bg-black/20" />
            </div>
          </motion.div>
        )}

        {/* Fallback gradient when there is no image to show */}
        {hovered && (!item.imge || item.imge.trim() === "") && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full w-full absolute inset-0 rounded-lg"
            style={{
              background: `radial-gradient(circle at 30% 30%, ${item.gradientColor}, rgba(0, 0, 0, 0.5))`,
            }}
          />
        )}
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-20">
        <div className={`text-center transition-transform duration-200 w-full mx-auto flex items-center justify-center ${hovered ? '-translate-y-4 opacity-0' : 'translate-y-0 opacity-100'}`}>
          <Image src={item.icon} alt={item.label} width={250} height={250} />
        </div>
        <h2 className={`text-white text-xl relative z-10 text-center -mt-20 font-bold transition-all duration-200 ${hovered ? 'opacity-100 -translate-y-2' : 'opacity-0 translate-y-2'}`}>
          {item.label}
        </h2>
        {item.statusLabel && (
          <p className={`text-gray-300 text-sm transition duration-200 text-center mt-2 ${hovered ? 'opacity-100' : 'opacity-0'}`}>
            {item.statusLabel}
          </p>
        )}
      </div>
    </div>
  )
}

export function ElementStackTimeline({
  title = "Elemental Resonance",
  subtitle = "Timeline",
  items,
  
}: ElementStackTimelineProps) {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  const getTimelineGradient = () => {
    const colors = items.map((item) => item.gradientColor).join(", ")
    return `linear-gradient(90deg, ${colors})`
  }

  return (
    <div id="resonance" className="w-full bg-black text-white py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-2 text-balance">{title}</h1>
          <p className="text-2xl text-gray-400 text-balance">{subtitle}</p>
        </div>

        {/* Card Stack */}
        <div className="flex justify-center gap-6 mb-12 flex-wrap lg:flex-nowrap">
          {items.map((item) => (
            <div key={item.id} className="flex flex-col items-center gap-4 flex-1 min-w-40">
              <TimelineCard item={item} hovered={hoveredCard === item.id} onHover={setHoveredCard} />

              {/* Bottom Info */}
              <div className="text-center w-full">
                <p className="text-lg font-medium">{item.date}</p>
                {item.status && (
                  <p
                    className={cn(
                      "text-sm mt-1",
                      item.status === "completed" || item.status == "in-progress"
                        ? "text-green-400"
                        : item.status === "upcoming"
                          ? "text-yellow-400"
                          : "text-gray-400",
                    )}
                  >
                    {item.status === "upcoming" ? "Expected" : item.status}
                  </p>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm text-center">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Timeline Bar */}
        <div className="h-2 rounded-full mb-8 shadow-lg" style={{ background: getTimelineGradient() }} />
      </div>
    </div>
  )
}
