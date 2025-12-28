"use client"
import { FloatingNav } from "@/components/ui/floating-navbar"

export default function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Experience",
      link: "#experience",
    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Resonance",
      link: "#resonance",
    },
  ]

  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />

    </div>
  )
}

