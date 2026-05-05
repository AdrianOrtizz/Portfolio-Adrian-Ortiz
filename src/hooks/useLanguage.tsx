"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  getExperienceData,
  getProjectsData,
  getTranslations,
  type Experience,
  type Language,
  type Project,
  type Translations,
} from "@/i18n/translations";

type LanguageContextType = {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: Translations;
  projects: Project[];
  experience: Experience[];
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

const STORAGE_KEY = "portfolio-lang";

const getInitialLanguage = (): Language => {
  if (typeof window === "undefined") return "es";
  const stored = window.localStorage.getItem(STORAGE_KEY) as Language | null;
  if (stored === "es" || stored === "en") return stored;
  return window.navigator.language.startsWith("en") ? "en" : "es";
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>("es");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Language | null;
    const initial =
      stored === "es" || stored === "en"
        ? stored
        : window.navigator.language.startsWith("en")
          ? "en"
          : "es";

    setLang(initial);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      window.localStorage.setItem(STORAGE_KEY, lang);
      document.documentElement.lang = lang;
    }
  }, [lang, mounted]);

  const t = useMemo(() => getTranslations(lang), [lang]);
  const projects = useMemo(() => getProjectsData(lang), [lang]);
  const experience = useMemo(() => getExperienceData(lang), [lang]);

  const toggleLang = () =>
    setLang((current) => (current === "es" ? "en" : "es"));

  return (
    <LanguageContext.Provider
      value={{ lang, setLang, toggleLang, t, projects, experience }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
