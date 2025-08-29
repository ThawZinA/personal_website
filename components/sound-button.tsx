"use client"

import { motion } from "framer-motion"
import { Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SoundButtonProps {
  isSoundEnabled: boolean
  onToggle: () => void
  className?: string
}

export function SoundButton({ isSoundEnabled, onToggle, className }: SoundButtonProps) {
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <Button
        variant="ghost"
        size="sm"
        onClick={onToggle}
        className={className}
        aria-label={isSoundEnabled ? "Disable sound effects" : "Enable sound effects"}
      >
        {isSoundEnabled ? (
          <Volume2 className="w-4 h-4 text-gray-600 dark:text-gray-400" />
        ) : (
          <VolumeX className="w-4 h-4 text-gray-600 dark:text-gray-400" />
        )}
      </Button>
    </motion.div>
  )
}
