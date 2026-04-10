import Image from "next/image";
import Link from "next/link";
import GridDistortion from '@/components/GridDistortion';
import { Lora } from 'next/font/google'

const lora = Lora({
  subsets: ['latin'],
})

export default function Home() {
  return (

    <main className="relative w-full h-screen min-h-0 overflow-hidden">

    
      <div className="relative w-full h-full">

        <GridDistortion
          imageSrc="/point.JPG"
          grid={20}
          mouse={0.1}
          strength={0.15}
          relaxation={0.9}
          offsetY={0.3}
          className="absolute inset-0"
        />
      </div>

      <div className={`absolute top-[80%] left-[83%] text-white text-2xl font-semibold ${lora.className}`}>
        HELLO
      </div>

      {/* About Me 連結 */}
      <a
        href="/about"
        className={`absolute z-10 text-white text-5xl font-bold drop-shadow-lg
                  hover:underline hover:scale-110 transition-all duration-300 ${lora.className}`}
        style={{ top: "30%", left: "38%"}}
      >
        About Me 
      </a>

      <div className={`absolute top-[65%] left-[5%] text-white text-xl font-semibold ${lora.className}`}>
        HUNG HSIU-LIAN 
      </div>


    </main>
  );
}
