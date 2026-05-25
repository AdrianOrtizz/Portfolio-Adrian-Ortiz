"use client";

import Link from "next/link";
import { Ghost } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="flex h-screen flex-col items-center justify-center px-4 text-center">
      <div className="flex flex-col items-center space-y-6 z-20">
        <div className="relative">
          <Ghost size={72} className="text-zinc-400 animate-bounce" />
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
          </span>
        </div>

        <div className="space-y-2">
          <h2 className="text-4xl font-bold tracking-tighter text-zinc-100 sm:text-5xl">
            404
          </h2>
          <p className="text-lg text-zinc-400">{t.notFound.description}</p>
        </div>

        <Link
          href="/"
          className="mt-4 inline-flex items-center justify-center rounded-full border border-white/10 bg-zinc-950/90 px-6 py-3 text-sm font-semibold text-zinc-100 shadow-lg shadow-black/30 transition hover:border-primary/30 hover:text-white"
        >
          {t.notFound.backButton}
        </Link>
      </div>
    </div>
  );
}
