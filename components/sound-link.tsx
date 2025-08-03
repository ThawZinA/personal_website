"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useSoundEffects } from "../hooks/useSoundEffects"
import type React from "react"

interface SoundLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
  [key: string]: any
}

export function SoundLink({ href, children, className = "", onClick, ...props }: SoundLinkProps) {
  const { playHover, playClick } = useSoundEffects()

  const handleMouseEnter = () => {
    playHover()
  }

  const handleClick = () => {
    playClick()
    onClick?.()
  }

  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      <Link href={href} className={className} onMouseEnter={handleMouseEnter} onClick={handleClick} {...props}>
        {children}
      </Link>
    </motion.div>
  )
}
