import CardCarousel from "@/components/CardCarousel";
import Link from "next/link";

export default function Page() {
  return (
    <div className="relative flex min-h-0 flex-1 flex-col items-center overflow-y-auto p-4 pt-14 md:p-6 md:pt-16">
      <Link
        href="/dct"
        className="absolute top-4 left-4 z-50 rounded-full bg-white/70 px-3 py-2 text-sm backdrop-blur transition hover:scale-105 md:top-6 md:left-6 md:px-4"
      >
        ← Back
      </Link>

      <div className="mt-2 grid w-full max-w-[980px] grid-cols-1 gap-4 md:gap-6 lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)] lg:items-stretch">
        <div className="aspect-square w-full max-w-[360px] justify-self-center lg:max-w-none lg:justify-self-stretch">
          <CardCarousel />
        </div>

        <div className="aspect-video min-h-[200px] w-full overflow-hidden rounded-3xl bg-white lg:aspect-auto lg:h-full lg:min-h-[360px]">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/C6FqUTcFT_o"
            title="Blender 專案影片"
            allowFullScreen
          />
        </div>

        <a
          href="https://sites.google.com/view/113102053/%E9%A6%96%E9%A0%81?authuser=0"
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-full flex h-24 items-center justify-center rounded-3xl bg-white text-center transition hover:bg-white/90 sm:h-[120px]"
        >
          點擊觀看作品集
        </a>
      </div>
    </div>
  );
}
