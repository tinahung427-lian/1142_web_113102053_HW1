import Image from "next/image";
export default function AboutPage() {
    return (
      <div className="h-full min-h-0 grid grid-rows-[1fr_1fr] gap-3">

        <div className="relative h-full rounded-2xl overflow-hidden">
          <Image src="/portrait.JPG" alt="portrait" fill className="object-cover object-[40%_center]"/>
            {/* 文字 */}
          <div className="absolute bottom-0 left-0 text-white text-5xl font-extrabold tracking-widest">PORTRAIT</div>

        </div>
        
        <div className="relative h-full rounded-2xl overflow-hidden">
          <Image src="/scenery.JPG" alt="scenery" fill className="object-cover"/>
           {/* 文字 */}
           <div className="absolute bottom-0 right-0 text-white text-5xl font-extrabold tracking-widest">SCENERY</div>
        
        </div>
      </div>
    );
  }