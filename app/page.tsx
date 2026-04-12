import Link from "next/link";
import GridDistortion from '@/components/GridDistortion';
import { Lora } from 'next/font/google'

const lora = Lora({
  subsets: ['latin'],
})

export default function Home() {
  return (
    <main className="relative w-full min-h-screen overflow-hidden text-white">

      {/* 背景 */}
      <div className="absolute inset-0">
        <GridDistortion
          imageSrc="/point.JPG"
          grid={20}
          mouse={0.1}
          strength={0.15}
          relaxation={0.9}
          offsetY={0.3}
        />
      </div>

      {/* 內容層 */}
      <div className="relative z-10 w-full h-full min-h-screen">

        {/* About Me（中間偏上） */}
        <Link
          href="/about"
          className={`absolute left-1/2 top-[35%] -translate-x-1/2 
                      text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
                      font-bold drop-shadow-lg 
                      hover:underline hover:scale-110 
                      transition-all duration-300 ${lora.className}`}
        >
          About Me
        </Link>

        {/* 名字（左下） */}
        <div
          className={`absolute left-[5%] bottom-[25%] 
                      text-sm sm:text-base md:text-lg lg:text-xl 
                      font-semibold ${lora.className}`}
        >
          HUNG HSIU-LIAN  YAYA
        </div>

        {/* HELLO（右下） */}
        <div
          className={`absolute right-[5%] bottom-[8%] 
                      text-sm sm:text-base md:text-xl lg:text-2xl 
                      font-semibold ${lora.className}`}
        >
          HELLO
        </div>

      </div>
    </main>
  );
}