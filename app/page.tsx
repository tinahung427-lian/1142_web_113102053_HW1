import Image from "next/image";
import Link from "next/link";
import GridDistortion from '@/components/GridDistortion';

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

      <div className="absolute top-[80%] left-[80%] text-white text-2xl font-semibold">
        HELLO
      </div>

      {/* About Me 連結 */}
      <a
        href="/about"
        className="absolute z-10 text-white text-5xl font-bold
                  hover:underline hover:scale-110 transition-all duration-300"
        style={{ top: "30%", left: "38%"}}
      >
        About Me 
      </a>

      <div className="absolute top-[65%] left-[5%] text-white text-xl font-semibold">
        HUNG HSIU-LIAN 
      </div>


    </main>
  );
}
