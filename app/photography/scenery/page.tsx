import Masonry from "@/components/Masonry";
import Link from "next/link";

const items = [
  { id: "1", img: "/S2.jpg", height: 350 },
  { id: "2", img: "/S5.jpg", height: 600 },
  { id: "3", img: "/S3.jpg", height: 600 },
  { id: "4", img: "/S4.jpg", height: 550 },
  { id: "5", img: "/S11.jpg", height: 350 },
  { id: "6", img: "/S8.jpg", height: 250 },
  { id: "7", img: "/S7.jpg", height: 550 },
  { id: "8", img: "/S14.jpg", height: 550 },
  { id: "9", img: "/S10.jpg", height: 400 },
  { id: "10", img: "/S15.jpg", height: 400 },
  { id: "11", img: "/S12.jpg", height: 500 },
  { id: "12", img: "/S23.jpeg", height: 500 },
  { id: "13", img: "/S13.jpg", height: 300 },
  { id: "14", img: "/S9.jpg", height: 350 },
  { id: "15", img: "/S20.jpg", height: 500 },
  { id: "16", img: "/S21.jpg", height: 550 },
  { id: "17", img: "/S24.jpeg", height: 520 },
  { id: "18", img: "/S6.jpg", height: 500 },
  { id: "19", img: "/S16.jpg", height: 500 },
  { id: "20", img: "/S18.jpg", height: 320 },
  { id: "21", img: "/S22.jpeg", height: 320 },
  { id: "22", img: "/S19.jpg", height: 320 },
];

export default function SceneryPage() {
  return (
    <main className="relative h-full min-h-0 overflow-y-auto p-4 pt-14 md:p-6 md:pt-16">
      <Link
        href="/photography"
        className="absolute top-4 left-4 z-50 rounded-full bg-white/70 px-3 py-2 text-sm text-gray-500 backdrop-blur transition hover:scale-105 md:top-6 md:left-6 md:px-4"
      >
        ← Back
      </Link>

      <div className="mx-auto mb-4 max-w-2xl px-1 text-center text-sm leading-snug tracking-wide text-balance text-gray-500 md:mb-6">
        透過攝影，記錄生活；透過圖片，傳遞故事
        <br />
        我喜歡光影的變化帶出不同的情緒與氛圍
      </div>

      <Masonry
        items={items}
        ease="power3.out"
        duration={0.6}
        stagger={0.05}
        animateFrom="bottom"
        scaleOnHover
        hoverScale={0.95}
        blurToFocus
        colorShiftOnHover={false}
      />
      <div className="h-24 sm:h-32 md:h-48 lg:h-[320px]" />
    </main>
  );
}
