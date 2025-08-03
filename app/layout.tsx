import type React from "react"
import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import "./globals.css"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"

const roboto = Roboto({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Thaw Zin Aung - Web Designer & Developer",
  description:
    "Personal portfolio of Thaw Zin Aung, a web designer and frontend developer specializing in modern web technologies and user experience design.",
  keywords: "web developer, web designer, frontend developer, React, Next.js, TypeScript, portfolio",
  authors: [{ name: "Thaw Zin Aung" }],
  creator: "Thaw Zin Aung",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thawzinaung.dev",
    title: "Thaw Zin Aung - Web Designer & Developer",
    description:
      "Personal portfolio of Thaw Zin Aung, a web designer and frontend developer specializing in modern web technologies and user experience design.",
    siteName: "Thaw Zin Aung Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thaw Zin Aung - Web Designer & Developer",
    description:
      "Personal portfolio of Thaw Zin Aung, a web designer and frontend developer specializing in modern web technologies and user experience design.",
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
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={roboto.className}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
