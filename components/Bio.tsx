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
        19 y/o developer learning systems from first principles.
        </p>
        <p>
                Student. Full-stack dev.
        </p>

 
  
     
      <br></br>
      <p>
        Mostly work in Rust and TypeScript — my entire toolkit is Rust-powered.
      </p>
      <br/>
      <p>I tinker, ship things, and occasionally shitpost on X.</p>
      <br/>
      <p>Gamer. Music on while coding.</p>
      <p>Learning Mandarin, calisthenics, and Tai Chi.</p>
      <br/>
      <p>Trying to get wings.</p>
    </section>
  );
}
