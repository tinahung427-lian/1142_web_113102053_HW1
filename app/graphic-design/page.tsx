"use client";

import { useState } from "react";

type WorkCard =
  | {
      kind: "work";
      fullSrc: string;
      thumbSrc: string;
      alt: string;
      label: string;
      /** 多數 Ai/Ps 用；Procreate 7–10 用 bottom */
      overlay: "hero" | "bottom";
    }
  | { kind: "soon" };

const WORKS: WorkCard[] = [
  {
    kind: "work",
    fullSrc: "/Ai_1.jpg",
    thumbSrc: "/Ai_1.jpg",
    alt: "作品一",
    label: "Illustrator作品",
    overlay: "hero",
  },
  {
    kind: "work",
    fullSrc: "/Ai_2.jpg",
    thumbSrc: "/Ai_2.jpg",
    alt: "作品二",
    label: "Illustrator作品",
    overlay: "hero",
  },
  {
    kind: "work",
    fullSrc: "/Ai_3.jpg",
    thumbSrc: "/Ai_3.jpg",
    alt: "作品三",
    label: "Illustrator作品",
    overlay: "hero",
  },
  {
    kind: "work",
    fullSrc: "/Ai_4.jpg",
    thumbSrc: "/Ai_4.jpg",
    alt: "作品四",
    label: "Illustrator作品",
    overlay: "hero",
  },
  {
    kind: "work",
    fullSrc: "/Ps_1.jpg",
    thumbSrc: "/Ps_1.jpg",
    alt: "作品五",
    label: "Photoshop作品",
    overlay: "hero",
  },
  {
    kind: "work",
    fullSrc: "/pro_1.JPG",
    thumbSrc: "/pro_1.jpg",
    alt: "作品六",
    label: "Procreate作品",
    overlay: "hero",
  },
  {
    kind: "work",
    fullSrc: "/pro_2.JPG",
    thumbSrc: "/pro_2.jpg",
    alt: "作品七",
    label: "Procreate作品",
    overlay: "bottom",
  },
  {
    kind: "work",
    fullSrc: "/pro_3.JPG",
    thumbSrc: "/pro_3.jpg",
    alt: "作品八",
    label: "Procreate作品",
    overlay: "bottom",
  },
  {
    kind: "work",
    fullSrc: "/pro_4.JPG",
    thumbSrc: "/pro_4.jpg",
    alt: "作品九",
    label: "Procreate作品",
    overlay: "bottom",
  },
  {
    kind: "work",
    fullSrc: "/pro_5.JPG",
    thumbSrc: "/pro_5.jpg",
    alt: "作品十",
    label: "Procreate作品",
    overlay: "bottom",
  },
  { kind: "soon" },
  { kind: "soon" },
];

export default function GraphicDesignPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className="h-full min-h-0 overflow-x-hidden overflow-y-auto">
        <div className="p-4 md:p-6">
          <div className="grid grid-cols-1 gap-4 pb-6 sm:grid-cols-2 sm:gap-4 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
            {WORKS.map((item, i) =>
              item.kind === "soon" ? (
                <div
                  key={`soon-${i}`}
                  className="group relative aspect-square cursor-default overflow-hidden rounded-3xl bg-white"
                >
                  <div className="absolute inset-0 bg-black/30 opacity-0 transition group-hover:opacity-100" />
                  <p className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-gray-400 transition group-hover:text-white sm:text-base">
                    Coming Soon...
                  </p>
                </div>
              ) : (
                <button
                  key={item.fullSrc}
                  type="button"
                  onClick={() => setSelectedImage(item.fullSrc)}
                  className="group relative aspect-square cursor-pointer overflow-hidden rounded-3xl border-0 bg-transparent p-0 text-left touch-manipulation"
                >
                  <img
                    src={item.thumbSrc}
                    alt={item.alt}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
                  />
                  {item.overlay === "hero" ? (
                    <div className="absolute inset-0 bg-black/30 opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100">
                      <p className="absolute inset-0 flex items-center justify-center px-2 text-center text-sm font-bold tracking-wide text-white sm:text-base md:text-lg">
                        點擊看完整作品
                      </p>
                      <p className="absolute bottom-2 left-2 text-sm font-semibold text-white sm:bottom-4 sm:left-4 sm:text-base md:text-lg">
                        {item.label}
                      </p>
                    </div>
                  ) : (
                    <div className="absolute inset-0 flex items-end bg-black/30 p-3 opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100 sm:p-4">
                      <p className="text-sm font-semibold text-white sm:text-base md:text-lg">
                        {item.label}
                      </p>
                    </div>
                  )}
                </button>
              )
            )}
          </div>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-9999 flex items-center justify-center bg-black/70 p-4 md:p-6"
          onClick={() => setSelectedImage(null)}
          role="presentation"
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="作品預覽"
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute top-1 right-1 z-10 flex size-10 items-center justify-center rounded-full bg-black/70 text-2xl leading-none text-white transition hover:scale-105 sm:top-3 sm:right-3"
              aria-label="關閉"
            >
              ×
            </button>

            <img
              src={selectedImage}
              alt="完整作品"
              className="w-full max-h-[85dvh] rounded-3xl bg-white object-contain sm:max-h-[90vh]"
            />
          </div>
        </div>
      )}
    </>
  );
}
