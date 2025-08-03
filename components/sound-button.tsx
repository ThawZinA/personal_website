"use client"

import { motion } from "framer-motion"
import { useSoundEffects } from "../hooks/useSoundEffects"
import type React from "react"

interface SoundButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  onMouseEnter?: () => void
  disabled?: boolean
  [key: string]: any
}

export function SoundButton({
  children,
  className = "",
  onClick,
  onMouseEnter,
  disabled = false,
  ...props
}: SoundButtonProps) {
  const { playHover, playClick } = useSoundEffects()

  const handleMouseEnter = () => {
    if (!disabled) {
      playHover()
      onMouseEnter?.()
    }
  }

  const handleClick = () => {
    if (!disabled) {
      playClick()
      onClick?.()
    }
  }

  return (
    <motion.button
      className={className}
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
      disabled={disabled}
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      {...props}
    >
      {children}
    </motion.button>
  )
}
