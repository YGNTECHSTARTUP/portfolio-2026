"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export default function ScrollController() {
  const [wheelRotation, setWheelRotation] = useState(0)
  const clickSoundRef = useRef<HTMLAudioElement>(null)

  /* ---------- Wheel Scroll Hijack ---------- */
  useEffect(() => {
  const SCROLL_MULTIPLIER = 2.2// ← increases scroll coverage

  const handleWheel = (e: WheelEvent) => {
    e.preventDefault()

    const delta = e.deltaY * SCROLL_MULTIPLIER

    setWheelRotation((prev) => prev + delta * 0.2)

    window.scrollBy({
      top: delta,
      left: 0,
    })
  }

  window.addEventListener("wheel", handleWheel, { passive: false })
  return () => window.removeEventListener("wheel", handleWheel)
}, [])


  /* ---------- Click SFX ---------- */
  const handlePageClick = () => {
    if (!clickSoundRef.current) return
    clickSoundRef.current.currentTime = 0
    clickSoundRef.current.volume = 0.5
    clickSoundRef.current.play().catch(() => {})
  }

  /* ---------- Scroll Wheel Click ---------- */
  const handleWheelClick = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    })
    setWheelRotation((prev) => prev + 360)
  }

  return (
    <>
    
      {/* overlay container */}
      <div
        onClick={handlePageClick}
        className="
          pointer-events-none
          fixed
          inset-0
          z-50
        "
      >
        {/* Scroll Wheel — DESKTOP ONLY */}
        <div
          className="
            pointer-events-auto
            hidden
            md:flex
            fixed
            bottom-8
            right-8
            select-none
          "
        >
          <button
            onClick={handleWheelClick}
            className="hover:scale-110 transition-transform duration-200"
            style={{
              transform: `rotate(${wheelRotation}deg)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            <Image
              src="/scroll-wheel.png"
              alt="Scroll wheel"
              width={80}
              height={80}
              className="opacity-70 hover:opacity-100"
              priority
            />
          </button>
        </div>
      </div>
    </>
  )
}
