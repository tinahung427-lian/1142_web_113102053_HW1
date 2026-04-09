import Image from "next/image";
import Link from "next/link";
import GridDistortion from "@/components/GridDistortion";

export default function Home() {
  return (

    <main className="relative w-full h-full overflow-hidden">

       {/* 圖片 */}
       <div className="absolute inset-0 z-0">
        <img
          src="/page.JPG" alt="hero" className="block w-full h-full object-cover"/>
      </div>

        {/* 背景動畫 */}
        <div className="absolute inset-0 z-10 opacity-30 pointer-events-none">
          <GridDistortion />
        </div>
          

    </main>
  );
}
