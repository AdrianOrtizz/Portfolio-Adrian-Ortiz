import type { Metadata } from "next";
import "./globals.css";

import Background from "@/components/UI/Background";
import Cursor from "@/components/UI/Cursor";
import MusicPlayer from "@/components/UI/MusicPlayer";

export const metadata: Metadata = {
  metadataBase: new URL("https://adrianortiz.vercel.app/"),
  title: "Adrian Ortiz | Full Stack Developer & Problem Solver",
  description:
    "Portfolio profesional de Adrian Ortiz, Full Stack Developer especializado en transformar necesidades de negocio en soluciones técnicas robustas con enfoque en performance y UX.",
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
      },
    ],
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark" style={{ colorScheme: "dark" }}>
      <body className="bg-[#050505] antialiased selection:bg-primary/30 min-h-screen flex flex-col">
        <Background />
        <Cursor />
        <MusicPlayer />
        <div className="relative z-10 flex-1 flex flex-col">{children}</div>
      </body>
    </html>
  );
}
