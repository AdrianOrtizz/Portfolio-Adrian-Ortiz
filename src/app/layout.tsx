import type { Metadata } from "next";
import "./globals.css";

import Background from "@/components/UI/Background";
import Cursor from "@/components/UI/Cursor";

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
    <html lang="en">
      <body className={`antialiased relative`}>
        <Cursor />
        <Background />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
