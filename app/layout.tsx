import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Menu from "@/components/Menu";
import Mobilemenu from "@/components/Mobilemenu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
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
      <body className="flex min-h-screen flex-col gap-4 bg-black p-4 lg:gap-6 lg:p-6">
        <Mobilemenu />

        <div className="flex min-h-0 flex-1 flex-col gap-4 lg:h-[calc(100vh-48px)] lg:flex-row lg:gap-6">
          <Menu interClassName={inter.className} />

          <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-[20px] bg-[#d8f3fe] lg:h-full">
            {/* 手機：預留頂部空間，避免內容白塊與固定圓鈕連成一條「選單列」視覺 */}
            <div className="min-h-0 flex-1 max-lg:pt-[calc(env(safe-area-inset-top,0px)+4.75rem)] lg:pt-0">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
