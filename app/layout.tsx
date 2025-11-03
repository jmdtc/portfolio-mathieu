import type React from "react"
import type { Metadata } from "next"
import { Instrument_Serif, DM_Sans, Space_Mono } from 'next/font/google'
import clsx from 'clsx'
import "./globals.css"

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-instrument-serif",
  weight: "400"
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

const spaceMono = Space_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-mono",
  weight: ["400", "700"]
})

export const metadata: Metadata = {
  title: "Mathieu Delisle - Full Stack Engineer",
  description: "Full Stack Engineer based in Berlin, Germany. Building neat products with React, TypeScript, and Next.js.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={clsx(instrumentSerif.variable, dmSans.variable, spaceMono.variable)}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
