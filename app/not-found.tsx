"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft } from "lucide-react"
import { useSoundEffects } from "../hooks/useSoundEffects"
import { useEffect, useState } from "react"

export default function NotFound() {
  const [isSoundEnabled, setIsSoundEnabled] = useState(true)
  const { playHover, playClick } = useSoundEffects(isSoundEnabled)

  useEffect(() => {
    // Check for saved sound preference
    const savedSound = localStorage.getItem("soundEnabled")
    if (savedSound !== null) {
      setIsSoundEnabled(savedSound === "true")
    }
  }, [])

  return (
    <div
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/404-background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Subtle overlay for better text readability while preserving the beautiful purple design */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Additional subtle floating elements that complement the existing cat and curves */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-24 h-24 bg-white rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-purple-200 rounded-full blur-2xl"></div>
      </div>

      <motion.div
        className="text-center z-10 px-4 max-w-2xl mx-auto relative"
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
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 font-mono tracking-wider drop-shadow-2xl">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl text-white/95 mb-4 font-mono drop-shadow-lg">Oops! Page Not Found</h2>
          <p className="text-lg text-white/90 mb-8 font-mono max-w-md mx-auto leading-relaxed drop-shadow-md">
            Looks like this page wandered off like a curious cat! The page you're looking for doesn't exist or has been
            moved.
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
              asChild
              className="bg-white hover:bg-gray-100 text-purple-600 hover:text-purple-700 border-4 border-white hover:border-gray-200 font-mono font-bold px-6 py-3 transition-all duration-300 shadow-2xl hover:shadow-3xl backdrop-blur-sm"
              onMouseEnter={playHover}
              onClick={playClick}
            >
              <Link href="/" aria-label="Go back to homepage">
                <Home className="w-5 h-5 mr-2" aria-hidden="true" />
                Back to Home
              </Link>
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
            <Button
              onClick={() => {
                playClick()
                window.history.back()
              }}
              variant="outline"
              className="bg-white/20 hover:bg-white/30 text-white hover:text-white border-4 border-white hover:border-white font-mono font-bold px-6 py-3 transition-all duration-300 backdrop-blur-sm shadow-xl"
              onMouseEnter={playHover}
              aria-label="Go back to previous page"
            >
              <ArrowLeft className="w-5 h-5 mr-2" aria-hidden="true" />
              Go Back
            </Button>
          </motion.div>
        </motion.div>

        {/* Subtle floating elements that complement the cat theme */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-3 h-3 bg-white rounded-full opacity-60 shadow-lg"
          animate={{
            y: [0, -15, 0],
            opacity: [0.6, 0.9, 0.6],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-2 h-2 bg-purple-200 rounded-full opacity-70 shadow-md"
          animate={{
            y: [0, -10, 0],
            x: [0, 8, 0],
            opacity: [0.7, 1, 0.7],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-white rounded-full opacity-80 shadow-sm"
          animate={{
            y: [0, -8, 0],
            opacity: [0.8, 1, 0.8],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 0.8,
          }}
        />

        {/* Gentle twinkling elements that work with the purple aesthetic */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`twinkle-${i}`}
            className="absolute bg-white rounded-full opacity-50 shadow-sm"
            style={{
              width: Math.random() * 2 + 1 + "px",
              height: Math.random() * 2 + 1 + "px",
              top: Math.random() * 70 + 15 + "%",
              left: Math.random() * 70 + 15 + "%",
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 3,
            }}
          />
        ))}

        {/* Cat-themed floating paw prints */}
        <motion.div
          className="absolute top-1/5 right-1/3 text-white/30 text-lg"
          animate={{
            y: [0, -12, 0],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          🐾
        </motion.div>
        <motion.div
          className="absolute bottom-1/4 right-1/4 text-white/25 text-sm"
          animate={{
            y: [0, -8, 0],
            opacity: [0.25, 0.5, 0.25],
            rotate: [0, -3, 3, 0],
          }}
          transition={{
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 3.5,
          }}
        >
          🐾
        </motion.div>
      </motion.div>
    </div>
  )
}
