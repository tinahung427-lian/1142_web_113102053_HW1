import Image from "next/image";
export default function AboutPage() {
    return (
      <main className="w-full h-full p-6">
       <div className="h-full min-h-0 grid grid-rows-[1fr_1fr] gap-3">

          <div className="relative h-full rounded-2xl overflow-hidden">
            <Image src="/portrait.JPG" alt="portrait" fill className="object-cover object-[40%_center]"/>
              {/* 文字 */}
            <div className="absolute -bottom-2.5 -left-1.5 text-white text-7xl font-extrabold tracking-normal">PORTRAIT</div>

          </div>
          
          <div className="relative h-full rounded-2xl overflow-hidden">
            <Image src="/scenery.JPG" alt="scenery" fill className="object-cover"/>
            {/* 文字 */}
            <div className="absolute -bottom-2.5 -right-2.5 text-white text-7xl font-extrabold tracking-normal">SCENERY</div>
          
          </div>
        </div>
      </main>
    );
  }