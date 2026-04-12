import Image from "next/image";
import Link from "next/link";

export default function PhotographyPage() {
  return (
    <main className="flex h-full min-h-0 w-full flex-col p-4 md:p-6">
      <div className="grid min-h-[min(55dvh,480px)] flex-1 grid-rows-2 gap-3 md:min-h-0 md:gap-4 lg:h-full">
        <Link
          href="/photography/portrait"
          className="group relative block h-full min-h-0 overflow-hidden rounded-2xl"
        >
          <Image
            src="/portrait.jpg"
            alt="Portrait 人像攝影"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-[40%_center]"
            priority
          />
          <div className="absolute bottom-2 left-2 z-10 text-4xl font-extrabold tracking-normal text-white drop-shadow-md sm:bottom-3 sm:left-3 sm:text-5xl md:bottom-4 md:left-4 md:text-6xl lg:text-7xl">
            PORTRAIT
          </div>
        </Link>

        <Link
          href="/photography/scenery"
          className="group relative block h-full min-h-0 overflow-hidden rounded-2xl"
        >
          <Image
            src="/scenery.jpg"
            alt="Scenery 風景攝影"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute bottom-2 right-2 z-10 text-right text-4xl font-extrabold tracking-normal text-white drop-shadow-md sm:bottom-3 sm:right-3 sm:text-5xl md:bottom-4 md:right-4 md:text-6xl lg:text-7xl">
            SCENERY
          </div>
        </Link>
      </div>
    </main>
  );
}
