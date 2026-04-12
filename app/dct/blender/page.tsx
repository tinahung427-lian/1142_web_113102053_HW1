import CardCarousel from "@/components/CardCarousel";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex-1 h-full min-h-0 p-6 flex items-center relative">
      
      {/* 返回鍵 */}
      <Link
        href="/dct"
        className="absolute top-6 left-6 z-50 bg-white/70 backdrop-blur px-4 py-2 rounded-full text-sm hover:scale-105 transition"
      >
        ← Back
      </Link>

      <div className="w-full max-w-[980px] mx-auto grid grid-cols-[360px_minmax(0,1fr)] gap-6 mt-6">
        
        <div className="aspect-square">
          <CardCarousel />
        </div>

        <div className="h-full overflow-hidden rounded-3xl bg-white">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/C6FqUTcFT_o"
            allowFullScreen
          />
        </div>

        <a
          href="https://sites.google.com/view/113102053/%E9%A6%96%E9%A0%81?authuser=0"
          target="_blank"
          className="col-span-2 h-[120px] bg-white rounded-3xl flex items-center justify-center"
        >
          點擊觀看作品集 
        </a>

      </div>
    </div>
  );
}