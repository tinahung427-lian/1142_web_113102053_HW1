import Masonry from '@/components/Masonry';
import Link from "next/link";

const items = [
    {
      id: "1",
      img: "/S2.JPG",
      height: 350,
    },
    {
      id: "2",
      img: "/S5.jpg",
      height: 600,
    },
    {
      id: "3",
      img: "/S3.jpg",
      height: 600,
    },
    {
        id: "4",
        img: "/S4.JPG",
        height: 550,
      },
      {
        id: "5",
        img: "/S11.jpg",
        height: 350,
      },
      {
        id: "6",
        img: "/S8.jpg",
        height: 250,
      },
      {
        id: "7",
        img: "/S7.jpg",
        height: 550,
      },
      {
        id: "8",
        img: "/S14.jpg",
        height: 550,
      },
      {
        id: "9",
        img: "/S10.JPG",
        height: 400,
      },
      {
        id: "10",
        img: "/S15.jpg",
        height: 400,
      },
      {
        id: "11",
        img: "/S12.JPG",
        height: 500,
      },
      {
        id: "12",
        img: "/S23.JPEG",
        height: 500,
      },
      {
        id: "13",
        img: "/S13.jpg",
        height: 300,
      },
      {
        id: "14",
        img: "/S9.jpg",
        height: 350,
      },
      {
        id: "15",
        img: "/S20.JPG",
        height: 500,
      },
      {
        id: "16",
        img: "/S21.JPG",
        height: 550,
      },
      {
        id: "17",
        img: "/S24.JPEG",
        height: 520,
      },
      {
        id: "18",
        img: "/S6.jpg",
        height: 500,
      },
      {
        id: "19",
        img: "/S16.JPG",
        height: 500,
      },
      {
        id: "20",
        img: "/S18.JPG",
        height: 320,
      },
      {
        id: "21",
        img: "/S22.JPEG",
        height: 320,
      },
      {
        id: "22",
        img: "/S19.JPG",
        height: 320,
      },
];

export default function SceneryPage() {
    return (
      <main className="relative h-full min-h-0 overflow-y-auto p-6">

        <Link
            href="/photography"
            className="absolute top-6 left-6 z-50 bg-white/70 backdrop-blur px-4 py-2 rounded-full text-gray-500 text-sm hover:scale-105 transition"
            >
            ← Back
        </Link>
        
        <div className="mb-6 text-gray-500 text-sm leading-snug text-center tracking-wide">
        透過攝影，記錄生活；透過圖片，傳遞故事<br />
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
        <div className="h-[320px]" />
    
      </main>
    );
  }

  
  
 