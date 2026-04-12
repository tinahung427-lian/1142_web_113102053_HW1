"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const navLinkClass =
  "text-center block min-h-[80px] flex items-center justify-center bg-white px-4 py-6 rounded-2xl font-bold text-xl tracking-wide hover:scale-105 transition active:scale-100";

type Props = {
  onNavigate?: () => void;
};

export default function SidebarContent({ onNavigate }: Props) {
  return (
    <>
      <div className="flex justify-center items-center w-full mt-2 lg:mt-4">
        <Link href="/" onClick={onNavigate}>
          <div className="bg-gray-200 w-[100px] h-[100px] rounded-full overflow-hidden flex justify-center items-center">
            <Image
              src="/park.png"
              alt="profile"
              width={80}
              height={80}
              className="w-full h-full object-cover"
            />
          </div>
        </Link>
      </div>

      <div className="text-center mt-3 font-semibold text-lg">洪秀蓮</div>
      <div className="text-center text-gray-600 text-sm mt-2 mb-4">
        吃個花生，好事花生
      </div>

      <div className="flex gap-5 mt-2 mb-4 justify-center">
        <a
          href="https://www.facebook.com/share/1As9AWdQpq/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
          className="size-13 min-h-11 min-w-11 bg-white rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <FaFacebook className="text-2xl text-black" />
        </a>

        <a
          href="https://www.instagram.com/hhliannn_____?igsh=MTduc3N0cnk3OXNzMg%3D%3D&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          className="size-13 min-h-11 min-w-11 bg-white rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <FaInstagram className="text-2xl text-black" />
        </a>

        <a
          href="mailto:tinahung427@email.com"
          target="_blank"
          rel="noopener noreferrer"
          className="size-13 min-h-11 min-w-11 bg-white rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <MdEmail className="text-2xl text-black" />
        </a>
      </div>

      <div className="flex flex-col gap-3 pb-2">
        <Link
          href="/about"
          className={navLinkClass}
          onClick={onNavigate}
        >
          About Me
        </Link>

        <Link
          href="/photography"
          className={navLinkClass}
          onClick={onNavigate}
        >
          Photography
        </Link>

        <Link
          href="/graphic-design"
          className={navLinkClass}
          onClick={onNavigate}
        >
          Graphic Design
        </Link>

        <Link href="/dct" className={navLinkClass} onClick={onNavigate}>
          DCT
        </Link>
        <div className="text-center rounded-2xl min-h-[80px] flex items-center justify-center bg-white px-4 py-6 tracking-wide">
          (◍꒪꒳꒪◍)՞
        </div>
        <div className="text-center rounded-2xl min-h-[80px] flex items-center justify-center bg-white px-4 py-6 tracking-wide">
          (●´⌓`●)
        </div>
      </div>
    </>
  );
}
