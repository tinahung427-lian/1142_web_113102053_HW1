import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image"
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
      <body className="min-h-full flex flex-col">


        <div className="flex h-full">

          {/* 左邊 */}
          <div className="bg-white w-[320px] h-full p-4">


            <div className="flex justify-center items-center w-full">
              <div className="bg-gray-200 w-[80px] h-[80px] rounded-full overflow-hidden flex justify-center items-center">
                <Image src="/cat.png" alt="cat" width={80} height={80} />
              </div>
            </div>


            <div className="text-center">名字</div>
            <div className="text-center">簡介</div>

            <div className="flex gap-3 mt-2">
              <a href="#" className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                📘
              </a>

              <a href="#" className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                📷
              </a>

              <a href="#" className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                ✉️
              </a>
            </div>

            
            <Link href="/about">
              <div className="bg-gray-300 p-[16px] rounded-md">About me</div>
            </Link>

            <Link href="/IT LAB">
              <div className="bg-gray-300 p-[16px] mt-2 rounded-md">IT LAB</div>
            </Link>


            <div className="bg-gray-300 p-[16px] mt-2 rounded-md">Photography</div>
            <div className="bg-gray-300 p-[16px] mt-2 rounded-md">Graphic Design</div>
            <div className="bg-gray-300 p-[16px] mt-2 rounded-md">DCT</div>



          </div>

          {/* 右邊 */}
          <div className="bg-gray-200 w-full h-full">

            {children}

          </div>

        </div>

      </body>
    </html>
  );
}
