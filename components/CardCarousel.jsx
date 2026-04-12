"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CardCarousel() {
  const images = ["/ble.jpg", "/f.png", "/s.png", "/t.png"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2500);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <Link
      href="/dct/blender"
      className="relative block h-full w-full overflow-hidden rounded-3xl"
    >
      <img
        src={images[index]}
        alt="Blender work"
        className="absolute inset-0 h-full w-full object-cover"
      />
    </Link>
  );
}