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
          <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center gap-2">
            Made with{" "}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-current" />
            </motion.span>{" "}
            by Thaw Zin Aung © {new Date().getFullYear()}
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
