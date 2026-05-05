"use client";

import { useLanguage } from "@/hooks/useLanguage";

const LanguageSwitcher = () => {
  const { lang, toggleLang, t } = useLanguage();
  const label = lang === "es" ? "EN" : "ES";

  return (
    <button
      type="button"
      onClick={toggleLang}
      aria-label={t.languageSwitcher.ariaLabel}
      className="fixed top-6 right-6 z-[70] h-11 min-w-[62px] rounded-full border border-white/10 bg-zinc-950/90 px-4 text-sm font-semibold text-zinc-100 shadow-lg shadow-black/30 transition hover:border-primary/30 hover:text-white"
    >
      {label}
    </button>
  );
};

export default LanguageSwitcher;
