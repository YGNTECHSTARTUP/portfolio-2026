
import Image from "next/image"
// import { PixelatedCanvas } from "./ui/pixelated-canvas"
import { ElementStackTimeline, TimelineItem } from "./elements-stack-timeline"
import ProfileCard from "./profile-card"


import { HeroWithSidebar } from "./hero-with-sidebar"
import ProjectPage from "./projects"

import { ExperienceEducationGrid } from "./experience-education"

import ScrollController from "./ScrollWheel"

const timelineItems: TimelineItem[] = [
  {
    id: "Hydro",
    label: "Hydro",
    date: "Jan 2026",
    description: "Distributed Systems",
    gradientColor: "#0066ff",
    icon: "/hydro.jpg",
    status: "in-progress",
    imge:"/hydroimge.jpeg"
  },
  {
    id: "Dendro",
    label: "Dendro",
    date: "May 2026",
    description: "Database",
    gradientColor: "#00cc00",
    icon: "/dendro.jpg",
    status: "upcoming",
    imge:"/dendroimg.jpeg"
  },
  {
    id: "Anemo",
    label: "Anemo",
    date: "Sep 2026",
    description: "TBA",
    gradientColor: "#54DCB4",
    icon: "/anemo.jpg",
    status: "upcoming",
    imge:""
  },
  {
    id: "Pyro",
    label: "Pyro",
    date: "Dec 2026",
    description: "TBA",
    gradientColor: "#cc0000",
    icon: "/pyro.jpg",
    status: "upcoming",
    imge:""
  },
  {
    id: "Cryo",
    label: "Cryo",
    date: "April 2027",
    description: "TBA",
    gradientColor: "#D4F1F8",
    icon: "/cryo.jpg",
    status: "upcoming",
    imge:""
  },
]
export default function Portfolio() {
  

  return (
    <div
      className="bg-black font-mono relative"
    
      style={{ cursor: "url(/skull-cursor.png) 16 16, auto" }}
    >
      {/* <style jsx>{`
  * {
    cursor: url(/skull-cursor.png) 16 16, auto !important;
  }
  @keyframes float1 {
    0%, 100% { transform: translateY(0px) rotate(12deg); }
    50% { transform: translateY(-10px) rotate(12deg); }
  }
  @keyframes float2 {
    0%, 100% { transform: translateY(0px) rotate(-6deg); }
    50% { transform: translateY(-15px) rotate(-6deg); }
  }
  @keyframes float3 {
    0%, 100% { transform: translateY(0px) rotate(3deg); }
    50% { transform: translateY(-8px) rotate(3deg); }
  }
  @keyframes float4 {
    0%, 100% { transform: translateY(0px) rotate(-12deg); }
    50% { transform: translateY(-12px) rotate(-12deg); }
  }
  @keyframes float5 {
    0%, 100% { transform: translateY(0px) rotate(8deg); }
    50% { transform: translateY(-14px) rotate(8deg); }
  }
  @keyframes float6 {
    0%, 100% { transform: translateY(0px) rotate(-10deg); }
    50% { transform: translateY(-9px) rotate(-10deg); }
  }
  @keyframes slideInLeft {
    from {
      transform: translateX(-100px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes slideInRight {
    from {
      transform: translateX(100px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes slideInUp {
    from {
      transform: translateY(50px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  .animate-slide-left {
    animation: slideInLeft 0.8s ease-out forwards;
  }
  .animate-slide-right {
    animation: slideInRight 0.8s ease-out forwards;
  }
  .animate-slide-up {
    animation: slideInUp 0.6s ease-out forwards;
  }
  .animate-hidden {
    opacity: 0;
    transform: translateX(-100px);
  }
`}</style> */}

      {/* Scroll Wheel - Fixed Position */}
      {/* <div className="md:fixed bottom-8 right-8 z-50">
        <div
          className="cursor-pointer hover:scale-110 transition-transform duration-200"
          onClick={handleWheelClick}
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
            className="opacity-70 hover:opacity-100 transition-opacity duration-200"
          />
        </div>
      </div> */}
      {/* <style jsx>{`
  * {
    cursor: url(/skull-cursor.png) 16 16, auto !important;
  }

  @keyframes float1 {
    0%, 100% { transform: translateY(0px) rotate(12deg); }
    50% { transform: translateY(-10px) rotate(12deg); }
  }
  @keyframes float2 {
    0%, 100% { transform: translateY(0px) rotate(-6deg); }
    50% { transform: translateY(-15px) rotate(-6deg); }
  }
  @keyframes float3 {
    0%, 100% { transform: translateY(0px) rotate(3deg); }
    50% { transform: translateY(-8px) rotate(3deg); }
  }
  @keyframes float4 {
    0%, 100% { transform: translateY(0px) rotate(-12deg); }
    50% { transform: translateY(-12px) rotate(-12deg); }
  }
  @keyframes float5 {
    0%, 100% { transform: translateY(0px) rotate(8deg); }
    50% { transform: translateY(-14px) rotate(8deg); }
  }
  @keyframes float6 {
    0%, 100% { transform: translateY(0px) rotate(-10deg); }
    50% { transform: translateY(-9px) rotate(-10deg); }
  }

  @keyframes slideInLeft {
    from { transform: translateX(-100px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  @keyframes slideInRight {
    from { transform: translateX(100px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  @keyframes slideInUp {
    from { transform: translateY(50px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  .animate-slide-left {
    animation: slideInLeft 0.8s ease-out forwards;
  }
  .animate-slide-right {
    animation: slideInRight 0.8s ease-out forwards;
  }
  .animate-slide-up {
    animation: slideInUp 0.6s ease-out forwards;
  }
  .animate-hidden {
    opacity: 0;
    transform: translateX(-100px);
  }
`}</style> */}

{/* Scroll Wheel — hidden on mobile, visible on md+ */}
{/* <div className=" fixed bottom-8 md:right-8 z-50">
  <div
    className="cursor-pointer hover:scale-110 transition-transform duration-200"
    onClick={handleWheelClick}
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
      className="opacity-70 hover:opacity-100 transition-opacity duration-200"
    />
  </div>
</div> */}
 <main className="relative overflow-x-hidden">
      {/* Your page content */}
      <ScrollController/>
    </main>


      {/* Audio Elements */}
      {/* <audio ref={clickSoundRef} preload="auto">
        <source src="/click-sound.wav" type="audio/wav" />
      </audio>
      <audio ref={citySfxRef} preload="auto">
        <source src="/street-sfx.mp3" type="audio/mpeg" />
      </audio> */}

      {/* Mac OS Style Menu Bar */}
    

      {/* First Section - Main Portfolio */}
      <div className="p-8 min-h-screen flex flex-col items-center justify-center relative">
        {/* Static Banner */}
       <div className="w-full max-w-2xl">
        <ProfileCard name="Gagan Yarramsetty" title="System Engineer | Rustacean🦀" subtitle="YGN | Xiao" imageUrl="/ban.jpeg" />
      </div>
         {/* <div className="mx-auto mt-8 absolute right-0 bottom-0 ">
      <PixelatedCanvas
        src="https://assets.aceternity.com/manu-red.png"
        width={400}
        height={500}
        cellSize={3}
        dotScale={0.9}
        shape="square"
        backgroundColor="#000000"
        dropoutStrength={0.4}
        interactive
        distortionStrength={3}
        distortionRadius={80}
        distortionMode="swirl"
        followSpeed={0.2}
        jitterStrength={4}
        jitterSpeed={4}
        sampleAverage
        tintColor="#FFFFFF"
        tintStrength={0.2}
       
      />
    </div> */}

        {/* Overlapping Images */}
        <div className="relative w-[600px] h-[500px]">
          <div
            className="absolute top-16 right-0 z-20 mx-28 my-4 opacity-50 opacity-40"
            style={{ animation: "float2 4s ease-in-out infinite" }}
          >
            <Image
              src="/dendroimg.jpeg"
              alt="Glitch art"
              width={250}
              height={250}
              className="rounded border-2 border-gray-600"
            />
          </div>
          <div
            className="absolute bottom-16 left-8 z-30 mx-14 opacity-35"
            style={{ animation: "float3 5s ease-in-out infinite" }}
          >
            <Image
              src="/g2.jpeg"
              alt="Studio microphone"
              width={220}
              height={220}
              className="rounded border-2 border-gray-600"
            />
          </div>
          <div
            className="absolute bottom-0 right-12 z-40 mx-11 my-32 opacity-70"
            style={{ animation: "float4 7s ease-in-out infinite" }}
          >
            <Image
              src="/hydroimge.jpeg"
              alt="Dog on beach"
              width={200}
              height={200}
              className="rounded border-2 border-gray-600"
            />
          </div>
          <div
            className="absolute top-32 left-0 z-25 mx-14 my-px py-0 px-1 opacity-50 "
            style={{ animation: "float5 5.5s ease-in-out infinite" }}
          >
            <Image
              src="/g1.jpeg"
              alt="Portrait with caduceus"
              width={240}
              height={240}
              className="rounded border-2 border-gray-600"
            />
          </div>
          <div
            className="absolute bottom-8 right-48 z-35 py-px my-1 px-0 mx-1.5 opacity-45"
            style={{ animation: "float6 4.5s ease-in-out infinite" }}
          >
            <Image
              src="/g3.jpeg"
              alt="Lit candle"
              width={190}
              height={190}
              className="rounded border-2 border-gray-600"
            />
          </div>
        </div>
      </div>

<HeroWithSidebar/>
      {/* Third Section - Projects */}
      <div>
          <div id="experience" className="max-w-6xl mx-auto">
        <div className="mb-2">
          <h1 className="text-4xl font-bold text-slate-50 mb-2">Experience & Education</h1>
          <p className="text-slate-400 text-lg">Building my professional journey</p>
        </div>
        <ExperienceEducationGrid />
      </div>
       {/* <ExperienceEducationGrid/> */}
        <ProjectPage/>
     <ElementStackTimeline items={timelineItems} />
      </div>


      {/* Fourth Section - Contact */}
      
    </div>
  )
}
