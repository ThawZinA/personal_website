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
  title: " Thaw | Frontend Developer & Designer",
  description: "Portfolio of Thaw Zin Aung - Full Stack Developer, UI/UX Designer, and Creative Problem Solver",
  keywords: ["Thaw Zin Aung", "Full Stack Developer", "UI/UX Designer", "Web Developer", "Portfolio"],
  authors: [{ name: "Thaw Zin Aung" }],
  creator: "Thaw Zin Aung",
  generator: "Next.js",
  alternates: {
    canonical: "https://thawzinag.dev",
  },
  openGraph: {
    title: "Thaw | Web Developer & Designer",
    description: "Portfolio of Thaw Zin Aung - Web Developer, UI/UX Designer",
    url: "https://thawzinag.dev",
    siteName: "Thaw Zin Portfolio",
    images: [
      {
        url: "https://thawzinag.dev/images/thaw-portfolio-preview.png",
        width: 1200,
        height: 630,
        alt: "Thaw Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thaw | Full Stack Developer & Designer",
    description: "Portfolio of Thaw Zin Aung - Full Stack Developer, UI/UX Designer, and Creative Problem Solver",
    images: ["/images/hero.png"],
  },
   appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Thaw Portfolio",
  },
  //   verification: {
  //   google: "google-site-verification-code",
  // },
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
        <meta name="google-site-verification" content="76GEO_aF8awyo1BXq7N26B606Ggzxc10y6GZSdXE0Ms" />
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
