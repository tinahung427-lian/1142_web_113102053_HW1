import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

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
          <div className="bg-gray-200 w-[320px] h-full p-4 rounded-[30px] overflow-y-auto">
            <div className="flex justify-center items-center w-full mt-2">
              <div className="bg-gray-200 w-[80px] h-[80px] rounded-full overflow-hidden flex justify-center items-center">
                <Image src="/cat.png" alt="cat" width={80} height={80} />
              </div>
            </div>

            <div className="text-center mt-3 font-semibold text-lg">名字</div>
            <div className="text-center text-gray-600 mb-4">簡介</div>

            <div className="flex gap-3 mt-2 mb-4 justify-center">
              <a
                href="#"
                className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center"
              >
                📘
              </a>

              <a
                href="#"
                className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center"
              >
                📷
              </a>

              <a
                href="#"
                className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center"
              >
                ✉️
              </a>
            </div>

            <div className="flex flex-col gap-3">
              <Link href="/about" className="block bg-gray-300 p-8 rounded-2xl">
                About me
              </Link>

              <Link href="/it-lab" className="block bg-gray-300 p-8 rounded-2xl">
                IT LAB
              </Link>

              <Link href="/photography" className="block bg-gray-300 p-8 rounded-2xl">
                Photography
              </Link>

              <Link href="/graphic-design" className="block bg-gray-300 p-8 rounded-2xl">
                Graphic Design
              </Link>

              <Link href="/dct" className="block bg-gray-300 p-8 rounded-2xl">
                DCT
              </Link>
            </div>
          </div>

          {/* 右邊 */}
          <div className="bg-gray-200 flex-1 h-full rounded-[30px] overflow-y-auto p-6">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}