"use client";

import Link from "next/link";
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
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, close]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <div className="lg:hidden shrink-0">
      <header className="relative z-60 flex h-14 items-center justify-between gap-3 rounded-2xl bg-[#d8f3fe] px-3 shadow-sm">
        <Link
          href="/"
          className="min-w-0 truncate font-semibold text-black"
          onClick={close}
        >
          洪秀蓮
        </Link>
        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-xl bg-white text-black shadow-sm transition hover:bg-white/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black/30"
          aria-expanded={open}
          aria-controls="mobile-drawer"
          aria-label={open ? "關閉選單" : "開啟選單"}
          onClick={() => setOpen((v) => !v)}
        >
          <HamburgerIcon open={open} />
        </button>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-black/45 transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
        onClick={close}
      />

      <div
        id="mobile-drawer"
        className={`fixed top-18 right-0 left-0 z-50 max-h-[min(85vh,calc(100dvh-4.5rem-1rem))] overflow-y-auto rounded-b-2xl bg-[#d8f3fe] px-4 pb-6 pt-2 shadow-xl transition-transform duration-300 ease-out lg:hidden ${
          open ? "translate-y-0" : "-translate-y-full pointer-events-none"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="網站選單"
      >
        <SidebarContent onNavigate={close} />
      </div>
    </div>
  );
}
