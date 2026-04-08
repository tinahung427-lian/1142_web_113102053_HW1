import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "洪秀蓮的個人履歷",
  description: "洪秀蓮的個人履歷",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen bg-black p-6">
        <div className="flex gap-6 h-[calc(100vh-48px)]">
          {/* 左邊 */}
          <div className="bg-[#d8f3fe] w-[320px] h-full p-4 rounded-l-[30px] rounded-r-none overflow-y-auto">
            <div className="flex justify-center items-center w-full mt-4">
              <div className="bg-gray-200 w-[100px] h-[100px] rounded-full overflow-hidden flex justify-center items-center">
                <Image src="/park.PNG" alt="profile" width={80} height={80} className="w-full h-full object-cover"/>
              </div>
            </div>

            <div className="text-center mt-3 font-semibold text-lg">洪秀蓮</div>
            <div className="text-center text-gray-600 text-sm mt-2 mb-4">吃個花生，好事花生</div>

            <div className="flex gap-5 mt-2 mb-4 justify-center">
              <a
                href="#"
                className="w-13 h-13 bg-white rounded-full flex items-center justify-center"
              >
                <FaFacebook className="text-2xl text-black" />
              </a>

              <a
                href="#"
                className="w-13 h-13 bg-white rounded-full flex items-center justify-center"
              >
                <FaInstagram className="text-2xl text-black"/>
              </a>

              <a
                href="#"
                className="w-13 h-13 bg-white rounded-full flex items-center justify-center"
              >
                <MdEmail className="text-2xl text-black"/>
              </a>
            </div>

            <div className="flex flex-col gap-3">
              <Link href="/about" className="text-center block bg-white p-7 rounded-2xl font-bold text-xl tracking-wide hover:scale-105 transition">
                About Me
              </Link>

              <Link href="/it-lab" className="text-center block bg-white p-7 rounded-2xl font-bold text-xl tracking-wide hover:scale-105 transition">
                IT LAB
              </Link>

              <Link href="/photography" className="text-center block bg-white p-7 rounded-2xl font-bold text-xl tracking-wide hover:scale-105 transition">
                Photography
              </Link>

              <Link href="/graphic-design" className="text-center block bg-white p-7 rounded-2xl font-bold text-xl tracking-wide hover:scale-105 transition">
                Graphic Design
              </Link>

              <Link href="/dct" className="text-center block bg-white p-7 rounded-2xl font-bold text-xl tracking-wide hover:scale-105 transition">
                DCT
              </Link>
            </div>
          </div>

          {/* 右邊 */}
          <div className="bg-gray-200 flex-1 h-full rounded-l-[30px] rounded-r-none overflow-y-auto p-6">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}