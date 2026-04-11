import Masonry from '@/components/Masonry';

const items = [
    {
      id: "1",
      img: "/S2.JPG",
      height: 350,
    },
    {
      id: "2",
      img: "/S5.JPG",
      height: 600,
    },
    {
      id: "3",
      img: "/S3.JPG",
      height: 600,
    },
    {
        id: "4",
        img: "/S4.JPG",
        height: 550,
      },
      {
        id: "5",
        img: "/S11.JPG",
        height: 350,
      },
      {
        id: "6",
        img: "/S8.JPG",
        height: 250,
      },
      {
        id: "7",
        img: "/S7.JPG",
        height: 550,
      },
      {
        id: "8",
        img: "/S14.JPG",
        height: 550,
      },
      {
        id: "9",
        img: "/S10.JPG",
        height: 400,
      },
      {
        id: "10",
        img: "/S15.JPG",
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
        img: "/S13.JPG",
        height: 300,
      },
      {
        id: "14",
        img: "/S9.JPG",
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
        img: "/S6.JPG",
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
      <main className="h-full min-h-0 overflow-y-auto p-6 pb-40">
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
      </main>
    );
  }

  
  
 