import Masonry from "@/components/Masonry";
import Link from "next/link";

const items = [
  { id: "1", img: "/P1.jpg", height: 420 },
  { id: "2", img: "/P12.jpg", height: 650 },
  { id: "3", img: "/P2.jpg", height: 390 },
  { id: "4", img: "/P27.jpg", height: 580 },
  { id: "5", img: "/P8.jpeg", height: 360 },
  { id: "6", img: "/P13.jpg", height: 540 },
  { id: "7", img: "/P18.jpg", height: 380 },
  { id: "8", img: "/P22.jpg", height: 610 },
  { id: "9", img: "/P3.jpg", height: 560 },
  { id: "10", img: "/P5.jpg", height: 500 },
  { id: "11", img: "/P20.jpg", height: 520 },
  { id: "12", img: "/P21.jpg", height: 430 },
  { id: "13", img: "/P17.jpg", height: 400 },
  { id: "14", img: "/P7.jpeg", height: 620 },
  { id: "15", img: "/P19.jpg", height: 500 },
  { id: "16", img: "/P14.jpg", height: 560 },
  { id: "17", img: "/P6.JPG", height: 530 },
  { id: "18", img: "/P15.jpg", height: 570 },
  { id: "19", img: "/P9.JPG", height: 600 },
  { id: "20", img: "/P16.jpg", height: 440 },
];

export default function PortraitPage() {
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
        我喜歡捕捉情緒流動間人們最真實的樣子
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
