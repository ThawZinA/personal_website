import type React from "react"
import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Grace Thaw | Full Stack Developer & Designer",
  description: "Portfolio of Grace Thaw - Full Stack Developer, UI/UX Designer, and Creative Problem Solver",
  keywords: ["Grace Thaw", "Full Stack Developer", "UI/UX Designer", "Web Developer", "Portfolio"],
  authors: [{ name: "Grace Thaw" }],
  creator: "Grace Thaw",
  openGraph: {
    title: "Grace Thaw | Full Stack Developer & Designer",
    description: "Portfolio of Grace Thaw - Full Stack Developer, UI/UX Designer, and Creative Problem Solver",
    url: "https://gracethaw.com",
    siteName: "Grace Thaw Portfolio",
    images: [
      {
        url: "/images/grace-website-preview.png",
        width: 1200,
        height: 630,
        alt: "Grace Thaw Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grace Thaw | Full Stack Developer & Designer",
    description: "Portfolio of Grace Thaw - Full Stack Developer, UI/UX Designer, and Creative Problem Solver",
    images: ["/images/grace-website-preview.png"],
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
  verification: {
    google: "your-google-verification-code",
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
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={roboto.className}>
        <Suspense fallback={null}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
