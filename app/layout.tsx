import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Thaw Zin Aung - Web Designer & Developer",
  description:
    "Portfolio of Thaw Zin Aung - Web Designer and Frontend Developer specializing in beautiful, responsive websites and user experiences.",
  keywords: ["web designer", "frontend developer", "portfolio", "Thaw Zin Aung", "web development", "UI/UX"],
  authors: [{ name: "Thaw Zin Aung" }],
  creator: "Thaw Zin Aung",
  openGraph: {
    title: "Thaw Zin Aung - Web Designer & Developer",
    description: "Portfolio of Thaw Zin Aung - Web Designer and Frontend Developer",
    url: "https://your-domain.com",
    siteName: "Thaw Zin Aung Portfolio",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Thaw Zin Aung Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thaw Zin Aung - Web Designer & Developer",
    description: "Portfolio of Thaw Zin Aung - Web Designer and Frontend Developer",
    images: ["/images/logo.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#7391c8" }],
  },
  manifest: "/site.webmanifest",
  themeColor: "#7391c8",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
