import type React from "react";
import type { Metadata } from "next";
import { Gelasio, Archivo, Space_Mono } from "next/font/google";
import clsx from "clsx";
import "./globals.css";
import { PostHogProvider } from "./components/PostHogProvider";

const gelasio = Gelasio({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-gelasio",
  weight: ["400", "700"],
});

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-archivo",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-mono",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Mathieu Delisle - Full Stack Engineer",
  description:
    "Full Stack Engineer based in Berlin, Germany. Building neat products with React, TypeScript, and Next.js.",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={clsx(gelasio.variable, archivo.variable, spaceMono.variable)}
    >
      <body className="font-sans antialiased">
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  );
}
