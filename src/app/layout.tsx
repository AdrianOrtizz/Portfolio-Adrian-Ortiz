import type { Metadata } from "next";
import "./globals.css";

import Background from "@/components/UI/Background";
import Cursor from "@/components/UI/Cursor";
import MusicPlayer from "@/components/UI/MusicPlayer";

export const metadata: Metadata = {
  title: "Adrian Ortiz Portfolio",
  description: "",
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
