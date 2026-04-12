"use client";

import { useState } from "react";

export default function AboutPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className="h-full min-h-0 overflow-y-auto pr-3">
        <div className="p-6">
          <div className="grid grid-cols-4 gap-6 pb-6">
            
            {/* 1 */}
            <div
              onClick={() => setSelectedImage("/Ai_1.jpg")}
              className="relative aspect-square rounded-3xl overflow-hidden bg-white group cursor-pointer"
            >
              <img
                src="/Ai_1.jpg"
                alt="作品一"
                className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition">
                <p className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg tracking-wide">
                  點擊看完整作品
                </p>
                <p className="absolute bottom-4 left-4 text-white font-semibold text-lg">
                  Illustrator作品
                </p>
              </div>
            </div>

            {/* 2 */}
            <div
              onClick={() => setSelectedImage("/Ai_2.jpg")}
              className="relative aspect-square rounded-3xl overflow-hidden bg-white group cursor-pointer"
            >
              <img
                src="/Ai_2.jpg"
                alt="作品二"
                className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition">
                <p className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg tracking-wide">
                  點擊看完整作品
                </p>
                <p className="absolute bottom-4 left-4 text-white font-semibold text-lg">
                  Illustrator作品
                </p>
              </div>
            </div>

            {/* 3 */}
            <div
              onClick={() => setSelectedImage("/Ai_3.jpg")}
              className="relative aspect-square rounded-3xl overflow-hidden bg-white group cursor-pointer"
            >
              <img
                src="/Ai_3.jpg"
                alt="作品三"
                className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition">
                <p className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg tracking-wide">
                  點擊看完整作品
                </p>
                <p className="absolute bottom-4 left-4 text-white font-semibold text-lg">
                  Illustrator作品
                </p>
              </div>
            </div>

            {/* 4 */}
            <div
              onClick={() => setSelectedImage("/Ai_4.jpg")}
              className="relative aspect-square rounded-3xl overflow-hidden bg-white group cursor-pointer"
            >
              <img
                src="/Ai_4.jpg"
                alt="作品四"
                className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition">
                <p className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg tracking-wide">
                  點擊看完整作品
                </p>
                <p className="absolute bottom-4 left-4 text-white font-semibold text-lg">
                  Illustrator作品
                </p>
              </div>
            </div>

            {/* 5 */}
            <div
              onClick={() => setSelectedImage("/Ps_1.jpg")}
              className="relative aspect-square rounded-3xl overflow-hidden bg-white group cursor-pointer"
            >
              <img
                src="/Ps_1.jpg"
                alt="作品五"
                className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition">
                <p className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg tracking-wide">
                  點擊看完整作品
                </p>
                <p className="absolute bottom-4 left-4 text-white font-semibold text-lg">
                  Photoshop作品
                </p>
              </div>
            </div>

            {/* 6 */}
            <div
              onClick={() => setSelectedImage("/pro_1.JPG")}
              className="relative aspect-square rounded-3xl overflow-hidden bg-white group cursor-pointer"
            >
              <img
                src="/pro_1.JPG"
                alt="作品六"
                className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition">
                <p className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg tracking-wide">
                  點擊看完整作品
                </p>
                <p className="absolute bottom-4 left-4 text-white font-semibold text-lg">
                  Procreate作品
                </p>
              </div>
            </div>

            {/* 7 */}
            <div
              onClick={() => setSelectedImage("/pro_2.JPG")}
              className="relative aspect-square rounded-3xl overflow-hidden bg-white group cursor-pointer"
            >
              <img
                src="/pro_2.JPG"
                alt="作品七"
                className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                <p className="text-white font-semibold text-lg">Procreate作品</p>
              </div>
            </div>

            {/* 8 */}
            <div
              onClick={() => setSelectedImage("/pro_3.JPG")}
              className="relative aspect-square rounded-3xl overflow-hidden bg-white group cursor-pointer"
            >
              <img
                src="/pro_3.JPG"
                alt="作品八"
                className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                <p className="text-white font-semibold text-lg">Procreate作品</p>
              </div>
            </div>

            {/* 9 */}
            <div
              onClick={() => setSelectedImage("/pro_4.JPG")}
              className="relative aspect-square rounded-3xl overflow-hidden bg-white group cursor-pointer"
            >
              <img
                src="/pro_4.JPG"
                alt="作品九"
                className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                <p className="text-white font-semibold text-lg">Procreate作品</p>
              </div>
            </div>

            {/* 10 */}
            <div
              onClick={() => setSelectedImage("/pro_5.JPG")}
              className="relative aspect-square rounded-3xl overflow-hidden bg-white group cursor-pointer"
            >
              <img
                src="/pro_5.JPG"
                alt="作品十"
                className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                <p className="text-white font-semibold text-lg">Procreate作品</p>
              </div>
            </div>

            {/* 11 */}
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-white group cursor-pointer">
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition" />
              <p className="absolute inset-0 flex items-center justify-center text-gray-400 font-semibold group-hover:text-white transition">
                Coming Soon...
              </p>
            </div>

            {/* 12 */}
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-white group cursor-pointer">
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition" />
              <p className="absolute inset-0 flex items-center justify-center text-gray-400 font-semibold group-hover:text-white transition">
                Coming Soon...
              </p>
            </div>

          </div>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[9999] bg-black/70 flex items-center justify-center p-6"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 z-10 w-10 h-10 rounded-full bg-black/70 text-white text-2xl leading-none hover:scale-105 transition"
            >
              ×
            </button>

            <img
              src={selectedImage}
              alt="完整作品"
              className="w-full max-h-[90vh] object-contain rounded-3xl bg-white"
            />
          </div>
        </div>
      )}
    </>
  );
}