"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-gray-600/60 dark:text-gray-400 flex items-center justify-center gap-2">
            &copy; {new Date().getFullYear()}. All rights reserved. Made with{" "}
            <Heart className="w-4 h-4 text-[#5f7ab8] animate-pulse" /> by Thaw Zin Aung.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
