import Link from "next/link";
import GridDistortion from "@/components/GridDistortion";
import { Lora } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="relative min-h-dvh w-full overflow-hidden text-white">
      {/* 背景 */}
      <div className="absolute inset-0 min-h-dvh">
        <GridDistortion
          imageSrc="/point.jpg"
          grid={20}
          mouse={0.1}
          strength={0.15}
          relaxation={0.9}
          offsetY={0.3}
        />
      </div>

      {/* 內容層 */}
      <div className="relative z-10 min-h-dvh w-full">
        {/* About Me（中間偏上） */}
        <Link
          href="/about"
          className={`absolute left-1/2 top-[28%] -translate-x-1/2 px-4 py-3 text-center text-3xl font-bold text-balance drop-shadow-lg transition-all duration-300 hover:underline hover:scale-110 active:scale-95 focus-visible:rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/90 sm:top-[32%] sm:text-4xl sm:active:scale-100 md:top-[35%] md:text-5xl lg:text-6xl ${lora.className}`}
        >
          About Me
        </Link>

        {/* 名字（左下） */}
        <div
          className={`absolute bottom-[20%] left-4 max-w-[min(92vw,20rem)] text-xs font-semibold leading-snug sm:bottom-[23%] sm:left-[5%] sm:max-w-none sm:text-sm md:bottom-[25%] md:text-base lg:text-lg xl:text-xl ${lora.className}`}
        >
          <span className="block sm:inline">HUNG HSIU-LIAN</span>{" "}
        </div>

        {/* HELLO（右下） */}
        <div
          className={`absolute right-4 bottom-[12%] max-w-[min(92vw,12rem)] text-right text-sm font-semibold leading-tight sm:right-[5%] sm:bottom-[8%] sm:max-w-none sm:text-base md:text-xl lg:text-2xl ${lora.className}`}
        >
          HELLO
        </div>
      </div>
    </main>
  );
}
