import Link from "next/link";

export default function TaipeiArtPage() {
  return (
    <main className="flex h-full min-h-0 w-full flex-col overflow-y-auto p-4 pt-14 md:p-6 md:pt-16">
      <div className="relative mx-auto w-full max-w-[980px] min-h-0 flex-1">
        <Link
          href="/dct"
          className="absolute top-0 left-0 z-50 rounded-full bg-white/70 px-3 py-2 text-sm backdrop-blur transition hover:scale-105 md:px-4"
        >
          ← Back
        </Link>

        <div
          className="mt-10 grid w-full auto-rows-auto grid-cols-1 gap-4 md:mt-12 md:gap-6 lg:mt-0 lg:h-full lg:min-h-[min(560px,85vh)] lg:grid-cols-[360px_minmax(0,1fr)] lg:grid-rows-[minmax(0,1fr)_120px] lg:gap-6"
        >
          {/* 左：Figma 手機框 */}
          <div className="flex items-center justify-center lg:row-span-2 lg:row-start-1 lg:col-start-1 lg:self-stretch">
            <div className="flex w-full max-w-[280px] items-center justify-center overflow-hidden rounded-[32px] bg-black shadow-lg aspect-9/16">
              <iframe
                className="h-[125%] w-[125%] border-0"
                src="https://embed.figma.com/proto/MtzviBpFOFc2qHswImCtTg/%E5%8F%A4%E5%94%A7?node-id=922-3467&scaling=scale-down&content-scaling=fixed&page-id=922%3A2964&starting-point-node-id=922%3A3467&embed-host=share&show-proto-sidebar=0"
                title="Figma 互動原型"
                allowFullScreen
              />
            </div>
          </div>

          {/* 右上：YouTube */}
          <div className="aspect-video min-h-[200px] w-full overflow-hidden rounded-3xl bg-white lg:col-start-2 lg:row-start-1 lg:aspect-auto lg:h-full lg:min-h-[240px]">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/YT9PQXTaIy0"
              title="台北有藝事專案介紹"
              allowFullScreen
            />
          </div>

          {/* 右下：簡報 */}
          <a
            href="https://canva.link/4o88pkhpfgyrkm9"
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[96px] items-center justify-center rounded-3xl bg-white text-base font-semibold transition hover:scale-[1.01] lg:col-start-2 lg:row-start-2 lg:min-h-[120px] lg:text-[18px]"
          >
            點擊觀看簡報
          </a>
        </div>
      </div>
    </main>
  );
}
