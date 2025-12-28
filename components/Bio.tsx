import { Press_Start_2P } from "next/font/google";

const pressStart = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
});

export default function Bio() {
  return (
    <section
      className={`${pressStart.className} max-w-2xl  text-lg leading-normal tracking-tight text-neutral-200`}
    >
        <h1 className="text-4xl underline ">About Me</h1>
        <br/>
    
     <p>
        19 y/o <span className="text-yellow-400">developer
          </span> learning systems from <span className="text-red-500">
            first principles.
            </span>
        </p>
        <p>
                Student. <span className="text-blue-500">
                  Full-stack dev.
                  </span>
        </p>

 
  
     
      <br></br>
      <p>
        Mostly work in <span className="text-yellow-400">
          Rust 
          </span> and <span className="text-blue-400">
            TypeScript
            </span> — my entire toolkit is <span className="text-red-500">Rust-powered.</span>
      </p>
      <br/>
      <p>I <span className="text-teal-400">
        tinker,
        </span> ship things, and occasionally shitpost on <span className="text-yellow-500">X.</span></p>
      <br/>
      <p>Gamer. <span className="text-blue-500">Music on while coding.</span></p>
      <p>Learning <span className="text-green-500">calisthenics</span>, Mandarin and <span className="text-teal-400">Tai Chi.</span></p>
      <br/>
      <p>Trying to get <span className="text-yellow-400">wings.</span></p>
    </section>
  );
}
