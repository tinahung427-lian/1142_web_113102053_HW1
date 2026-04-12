import Link from "next/link";

export default function TaipeiArtPage() {
  return (
    <main className="w-full h-full min-h-0 p-6">
      <div className="relative h-full min-h-0 p-8">
        
        {/* 返回鍵 */}
        <Link
          href="/dct"
          className="absolute top-8 left-8 z-50 bg-white/70 backdrop-blur px-4 py-2 rounded-full text-sm hover:scale-105 transition"
        >
          ← Back
        </Link>

        {/* 主要內容 */}
        <div className="h-full min-h-0 pt-14">
          <div className="h-full w-full max-w-[980px] mx-auto grid grid-cols-[360px_minmax(0,1fr)] grid-rows-[1fr_120px] gap-6">
            
            {/* 左邊手機 */}
            <div className="row-span-2 flex items-center justify-center">
              <div className="w-[280px] aspect-[9/16] rounded-[32px] overflow-hidden shadow-lg bg-black flex items-center justify-center">
                <iframe
                  className="w-[125%] h-[125%] border-0"
                  src="https://embed.figma.com/proto/MtzviBpFOFc2qHswImCtTg/%E5%8F%A4%E5%94%A7?node-id=922-3467&scaling=scale-down&content-scaling=fixed&page-id=922%3A2964&starting-point-node-id=922%3A3467&embed-host=share&show-proto-sidebar=0"
                  allowFullScreen
                />
              </div>
            </div>

            {/* 右上 YouTube */}
            <div className="overflow-hidden rounded-3xl bg-white">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/YT9PQXTaIy0"
                allowFullScreen
              />
            </div>

            {/* 右下簡報 */}
            <a
              href="https://canva.link/4o88pkhpfgyrkm9"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-3xl flex items-center justify-center text-[18px] font-semibold hover:scale-[1.01] transition"
            >
              點擊觀看簡報
            </a>

          </div>
        </div>
      </div>
    </main>
  );
}