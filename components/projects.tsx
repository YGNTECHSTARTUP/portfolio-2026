/* eslint-disable react/jsx-no-undef */
// import Link from "next/link"
// import Image from "next/image"
// import { ArrowRight } from "lucide-react"

// import { Button } from "@/components/ui/button"
import DotGridShader from "@/components/DotGridShader"

import ProjectCard from "@/components/project-card"
import AnimatedHeading from "@/components/animated-heading"
import RevealOnView from "@/components/reveal-on-view"

export default function ProjectPage() {
  const projects = [
    {
      title: " Temple Campaigning ",
      subtitle: "Web App for Temple Donations",
      imageSrc: "/camp.jpg",
      tags: ["Web", "Payment", "Api"],
      href: "https://www.linkedin.com/posts/ygn_missed-chances-harsh-truths-relentless-activity-7329812907288866816-CiS7?utm_source=share&utm_medium=member_desktop&rcm=ACoAADKw2u0Bmhil5w-yGcAdLHqDth7ig7SDHEk",
      priority: true,
      gradientFrom: "#0f172a",
      gradientTo: "#6d28d9",
    },
    {
      title: "YGN TECHSTACK",
      subtitle: "CLI tool & design system",
      imageSrc: "/createygn.png",
      tags: ["Nodejs", "Design System", "Web"],
      href: "https://createygn.vercel.app/",
      priority: true,
      gradientFrom: "#111827",
      gradientTo: "#2563eb",
    },
    {
      title: "Build Bharat Through AI",
      subtitle: "Hackathon Registration Platform",
      imageSrc: "/bbtai.png",
      tags: ["Onboarding_Page", "Info", "Web"],
      href: "https://buildbharatthroughai.in/",
      priority: false,
      gradientFrom: "#0b132b",
      gradientTo: "#5bc0be",
    },
    {
      title: "Genesis Nexus ",
      subtitle: "AI Freelancing Platform ",
      imageSrc: "/genesis-nexus.png",
      tags: ["FreeLancing", "Web App", "AI"],
      href: "https://genesis-nexus-yze6.vercel.app/",
      priority: false,
      gradientFrom: "#0f172a",
      gradientTo: "#10b981",
    },
    {
      title: "Profinati",
      subtitle: "Content Moderation Api",
      imageSrc: "/profinati.png",
      tags: [ "Real-time", "API"],
      href: "https://profinati-ui.vercel.app/",
      priority: false,
      gradientFrom: "#1f2937",
      gradientTo: "#8b5cf6",
    },
    {
      title: "PokeGuess",
      subtitle: "A Simple Pokemon Guessing Game",
      imageSrc: "/pokeguess.png",
      tags: [ "Pokemon API", "Game"],
      href: "https://pokeguess-silk.vercel.app/",
      priority: false,
      gradientFrom: "#0b132b",
      gradientTo: "#10b981",
    },
  ]
 

  return (
    <main className="bg-neutral-950 text-white">
      {/* HERO: full-viewport row. Left is sticky; right scrolls internally. */}
      <section className="px-4 pt-4 pb-16 lg:pb-4">
        <div className="grid h-full grid-cols-1 gap-4 lg:grid-cols-[420px_1fr]">
          {/* LEFT: sticky and full height, no cut off */}
          <aside className="lg:sticky lg:top-4 lg:h-[calc(100svh-2rem)]">
            <RevealOnView
              as="div"
              intensity="hero"
              className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/60 p-6 sm:p-8"
              staggerChildren
            >
              {/* Texture background */}
              <div className="pointer-events-none absolute inset-0 opacity-5 mix-blend-soft-light">
                <DotGridShader />
              </div>
              <div>
                {/* Wordmark */}
                <div className="mb-8 flex items-center gap-2">
                  <div className="text-2xl font-extrabold tracking-tight">YGN</div>
                  <div className="h-2 w-2 rounded-full bg-white/60" aria-hidden="true" />
                </div>

                {/* Headline with intro blur effect */}
                <AnimatedHeading
                  className="text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl"
                  lines={["I design systems", "that scale and endure"]}
                />

                <p className="mt-4 max-w-[42ch] text-lg text-white/70">
               YGN is a systems engineer who builds from first principles. He works primarily in Rust and has hands-on experience designing and shipping full-stack web systems
                </p>

                {/* CTAs */}
                {/* <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Button asChild size="lg" className="rounded-full">
                    <Link href="mailto:brandon@portfolio.dev">
                      Connect with me
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div> */}

                {/* Trusted by */}
                 <div className="mt-4">
                  <p className="mb-3 text-xs font-semibold tracking-widest text-white/50">Tools & Technologies I&apos;VE WORKED </p>
                  <ul className="grid grid-cols-2   font-black text-white/25 sm:grid-cols-3">
                    <li className="text-yellow-500">Rust</li>
                    <li className="text-blue-500">Typescript</li>
                    <li className="text-white">Nextjs</li>
                    <li className="text-blue-400">Tailwindcss</li>

                    <li className="text-orange-500">Honojs</li>
                    <li className="text-yellow-500">DrizzleOrm</li>
                    <li className="text-white">Sql</li>
                    <li className="text-red-500">Redis</li>
                    <li className="text-blue-400">Docker</li>
                     <li className="text-orange-500">Cloudflare</li>
               
                    <li className="text-purple-400">Helix</li>
                         <li className="text-red-500">Git</li>
                        
                    <li className="text-white">Excalidraw</li>
                          <li className="text-orange-500">Figma</li>
                  </ul>
                </div> 
              </div>
            </RevealOnView>
          </aside>

          {/* RIGHT: simplified, no internal card or horizontal carousel */}
          <div className="space-y-4">
            {projects.map((p, idx) => (
              <ProjectCard
                key={p.title}
                title={p.title}
                subtitle={p.subtitle}
                imageSrc={p.imageSrc}
                tags={p.tags}
                href={p.href}
                priority={p.priority}
                gradientFrom={p.gradientFrom}
                gradientTo={p.gradientTo}
                imageContainerClassName="lg:h-full"
                containerClassName="lg:h-[calc(100svh-2rem)]"
                revealDelay={idx * 0.06}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
