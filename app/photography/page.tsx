import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
    return (
      <main className="w-full h-full p-6">
       <div className="h-full min-h-0 grid grid-rows-[1fr_1fr] gap-3">
          

          <Link
            href="/photography/portrait"
            className="relative block h-full rounded-2xl overflow-hidden group">

            <Image src="/portrait.jpg" alt="portrait" fill className="object-cover object-[40%_center]"/>
                {/* 文字 */}
            <div className="absolute -bottom-2.5 -left-1.5 text-white text-7xl font-extrabold tracking-normal">PORTRAIT</div>
          
          </Link>
          

          <Link
            href="/photography/scenery"
            className="relative block h-full rounded-2xl overflow-hidden group">

            <Image src="/scenery.jpg" alt="scenery" fill className="object-cover"/>
              {/* 文字 */}
            <div className="absolute -bottom-2.5 -right-2.5 text-white text-7xl font-extrabold tracking-normal">SCENERY</div>

          </Link>

          
        </div>
      </main>
    );
  }