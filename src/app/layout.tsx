// @ts-ignore
import "./globals.css";
import type { Metadata } from "next";

import Background from "@/components/UI/Background";
import Cursor from "@/components/UI/Cursor";
import LanguageSwitcher from "@/components/UI/LanguageSwitcher";
import MusicPlayer from "@/components/UI/MusicPlayer";

import { Analytics } from "@vercel/analytics/next";
import { LanguageProvider } from "@/hooks/useLanguage";

export const metadata: Metadata = {
  metadataBase: new URL("https://adrianortiz.vercel.app/"),
  title: {
    default: "Adrian Ortiz | Full Stack Developer & Problem Solver",
    template: "%s | Adrian Ortiz Portfolio",
  },
  description:
    "Portfolio profesional de Adrian Ortiz, Full Stack Developer especializado en transformar necesidades de negocio en soluciones técnicas robustas con enfoque en performance y UX.",
  applicationName: "Adrian Ortiz Portfolio",
  authors: [{ name: "Adrian Ortiz", url: "https://adrianortiz.vercel.app" }],
  keywords: [
    "Adrian Ortiz",
    "Full Stack Developer",
    "portfolio",
    "Desarrollador web",
    "React",
    "Next.js",
    "Node.js",
    "UX",
    "Performance",
  ],
  alternates: {
    canonical: "https://adrianortiz.vercel.app/",
    languages: {
      "es-AR": "https://adrianortiz.vercel.app/",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Adrian Ortiz | Full Stack Developer",
    description: "Problem Solver enfocado en soluciones técnicas robustas.",
    url: "https://adrianortiz.vercel.app/",
    siteName: "Adrian Ortiz Portfolio",
    images: [
      {
        url: "/hero-image.png",
        width: 1200,
        height: 630,
        alt: "Portfolio de Adrian Ortiz",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adrian Ortiz | Full Stack Developer",
    description:
      "Portfolio profesional de Adrian Ortiz con foco en performance, UX y soluciones técnicas escalables.",
    images: ["/hero-image.png"],
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#050505" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark" style={{ colorScheme: "dark" }}>
      <body className="bg-[#050505] antialiased selection:bg-primary/30 min-h-screen flex flex-col">
        <LanguageProvider>
          <LanguageSwitcher />
          <Background />
          <Cursor />
          <MusicPlayer />
          <div className="relative z-10 flex-1 flex flex-col overflow-x-hidden w-full">
            {children}
            <Analytics />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
