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
          offsetY={0.5}
          className="absolute inset-0"
        />
      </div>

      <div className="absolute top-10 left-10 z-10 text-white text-4xl font-bold">
        HELLO
      </div>

      {/* About Me 連結 */}
      <a
        href="/about"
        className="absolute z-10 text-white text-xl font-bold
                  hover:underline hover:scale-110 transition-all duration-300"
        style={{ top: "40%", left: "50%"}}
      >
        About Me 
      </a>

      <div className="absolute top-[60%] left-[10%] text-white text-4xl font-semibold">
        HUNG HSIU-LIAN
      </div>


    </main>
  );
}
