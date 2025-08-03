"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, RefreshCw } from "lucide-react"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-400 via-red-500 to-red-600 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-xl"></div>
            <div className="absolute bottom-32 right-32 w-48 h-48 bg-pink-300 rounded-full blur-2xl"></div>
            <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-orange-300 rounded-full blur-lg"></div>
          </div>

          <motion.div
            className="text-center z-10 px-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Error Message */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 font-mono tracking-wider">500</h1>
              <h2 className="text-2xl md:text-3xl text-white/90 mb-4 font-mono">Something Went Wrong!</h2>
              <p className="text-lg text-white/80 mb-8 font-mono max-w-md mx-auto leading-relaxed">
                An unexpected error occurred. Don't worry, our team has been notified and we're working on fixing it.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
                <Button
                  onClick={reset}
                  className="bg-white hover:bg-gray-100 text-red-600 hover:text-red-700 border-4 border-red-600 hover:border-red-700 font-mono font-bold px-6 py-3 transition-all duration-300 shadow-lg hover:shadow-xl"
                  aria-label="Try again"
                >
                  <RefreshCw className="w-5 h-5 mr-2" aria-hidden="true" />
                  Try Again
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
                <Button
                  asChild
                  variant="outline"
                  className="bg-transparent hover:bg-white/10 text-white hover:text-white border-4 border-white hover:border-white font-mono font-bold px-6 py-3 transition-all duration-300"
                  aria-label="Go back to homepage"
                >
                  <Link href="/">
                    <Home className="w-5 h-5 mr-2" aria-hidden="true" />
                    Back to Home
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Error Details (only in development) */}
            {process.env.NODE_ENV === "development" && (
              <motion.div
                className="mt-8 p-4 bg-black/20 rounded-lg text-left"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <h3 className="text-white font-mono font-bold mb-2">Error Details (Development Only):</h3>
                <pre className="text-white/80 font-mono text-sm overflow-auto">
                  {error.message}
                  {error.digest && `\nDigest: ${error.digest}`}
                </pre>
              </motion.div>
            )}
          </motion.div>
        </div>
      </body>
    </html>
  )
}
