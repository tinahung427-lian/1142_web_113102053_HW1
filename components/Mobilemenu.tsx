"use client";

import { useCallback, useEffect, useState } from "react";
import SidebarContent from "./SidebarContent";

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <span className="relative block size-5" aria-hidden>
      <span
        className={`absolute left-0 top-1 block h-0.5 w-5 rounded-full bg-black transition-transform duration-200 ${
          open ? "translate-y-1.5 rotate-45" : ""
        }`}
      />
      <span
        className={`absolute left-0 top-1/2 block h-0.5 w-5 -translate-y-1/2 rounded-full bg-black transition-opacity duration-200 ${
          open ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`absolute left-0 bottom-1 block h-0.5 w-5 rounded-full bg-black transition-transform duration-200 ${
          open ? "-translate-y-1.5 -rotate-45" : ""
        }`}
      />
    </span>
  );
}

export default function Mobilemenu() {
  /** 首次進入：全螢幕選單；關閉或點連結後改為漢堡列 */
  const [showIntro, setShowIntro] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const dismissIntro = useCallback(() => setShowIntro(false), []);
  const closeDrawer = useCallback(() => setDrawerOpen(false), []);

  useEffect(() => {
    if (!showIntro && !drawerOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [showIntro, drawerOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (showIntro) dismissIntro();
      else if (drawerOpen) closeDrawer();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [showIntro, drawerOpen, dismissIntro, closeDrawer]);

  return (
    <>
      {showIntro && (
        <div
          className="fixed inset-0 z-200 flex max-h-dvh flex-col bg-[#d8f3fe] lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="網站選單"
        >
          <div
            className="shrink-0 px-3 pb-2 pt-[max(0.75rem,env(safe-area-inset-top,0px))]"
          >
            <div className="flex h-12 items-center justify-between rounded-2xl bg-white px-3 shadow-sm">
              <span className="font-semibold text-black">洪秀蓮</span>
              <button
                type="button"
                onClick={dismissIntro}
                className="inline-flex size-10 items-center justify-center rounded-xl bg-white text-2xl leading-none text-black shadow-sm transition hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black/30"
                aria-label="關閉選單"
              >
                ×
              </button>
            </div>
          </div>
          <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 pb-8">
            <SidebarContent onNavigate={dismissIntro} />
          </div>
        </div>
      )}

      {!showIntro && (
        <div className="sticky top-0 z-100 -mx-4 -mt-4 mb-2 shrink-0 bg-black px-4 pb-2 pt-[max(1rem,env(safe-area-inset-top,0px))] lg:hidden">
          <header className="relative z-60 flex h-14 items-center justify-end rounded-2xl bg-[#d8f3fe] px-2 shadow-sm">
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-xl bg-white text-black shadow-sm transition hover:bg-white/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black/30"
              aria-expanded={drawerOpen}
              aria-controls="mobile-drawer"
              aria-label={drawerOpen ? "關閉選單" : "開啟選單"}
              onClick={() => setDrawerOpen((v) => !v)}
            >
              <HamburgerIcon open={drawerOpen} />
            </button>
          </header>

          <div
            className={`fixed inset-0 z-40 bg-black/45 transition-opacity duration-300 lg:hidden ${
              drawerOpen ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
            aria-hidden={!drawerOpen}
            onClick={closeDrawer}
          />

          <div
            id="mobile-drawer"
            className={`fixed right-0 left-0 z-50 max-h-[min(85vh,calc(100dvh-5rem))] overflow-y-auto rounded-b-2xl bg-[#d8f3fe] px-4 pb-6 pt-2 shadow-xl transition-transform duration-300 ease-out lg:hidden top-[calc(max(1rem,env(safe-area-inset-top,0px))+3.5rem)] ${
              drawerOpen ? "translate-y-0" : "-translate-y-full pointer-events-none"
            }`}
            role="dialog"
            aria-modal="true"
            aria-label="網站選單"
          >
            <SidebarContent onNavigate={closeDrawer} />
          </div>
        </div>
      )}
    </>
  );
}
