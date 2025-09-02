"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Sun, Moon } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LazyImage } from "./lazy-image"
import { SoundButton } from "./sound-button"
import { useSoundEffects } from "../hooks/useSoundEffects"

interface NavigationProps {
  isSoundEnabled: boolean
  onToggleSound: () => void
}

export function Navigation({ isSoundEnabled, onToggleSound }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const pathname = usePathname()

  const { playHover, playClick } = useSoundEffects(isSoundEnabled)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDarkMode(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDarkMode
    setIsDarkMode(newTheme)
    localStorage.setItem("theme", newTheme ? "dark" : "light")

    if (newTheme) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
    playClick()
  }

  const navItems = [
    { id: "home", label: "HOME", href: "/" },
    { id: "about", label: "ABOUT", href: "/about" },
    { id: "works", label: "WORKS", href: "/works" },
    { id: "contact", label: "CONTACT", href: "/contact" },
  ]

  const getActiveSection = () => {
    if (pathname === "/") return "home"
    if (pathname === "/about") return "about"
    if (pathname.startsWith("/works")) return "works"
    if (pathname === "/contact") return "contact"
    return ""
  }

  const activeSection = getActiveSection()

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-12 lg:px-16">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <motion.div
              className="flex items-center gap-3 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={playHover}
              onClick={playClick}
            >
              <div className="w-10 h-10 rounded-full overflow-hidden">
                {/* <LazyImage src="/images/logo.png" alt="Thaw Zin Aung" className="w-full h-full object-cover" /> */}
                <img src="/images/logo.png" alt="Thaw Zin Aung" className="w-full h-full object-cover" />
              </div>
              <div className="hidden sm:block">
                <h1 className="font-semibold text-black dark:text-white">THAW ZIN AUNG</h1>
                <p className="text-xs text-gray-600 dark:text-gray-400">Web Designer & Developer</p>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 md:space-x-12">
            {navItems.map((item) => (
              <div key={item.id}>
                <Link href={item.href}>
                  <motion.button
                    className={`text-sm font-medium transition-colors hover:text-[#7391c8] ${
                      activeSection === item.id ? "text-[#7391c8]" : "text-gray-700 dark:text-gray-300"
                    }`}
                    whileHover={{ y: -2 }}
                    onMouseEnter={playHover}
                    onClick={playClick}
                  >
                    {item.label}
                  </motion.button>
                </Link>
              </div>
            ))}
          </div>

          {/* Theme & Sound Controls */}
          <div className="flex items-center gap-2">
            {/* Sound Toggle Button */}
            <SoundButton
              isSoundEnabled={isSoundEnabled}
              onToggle={onToggleSound}
              className="w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            />

            {/* Theme Toggle Button */}
            <motion.button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
              onMouseEnter={playHover}
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-yellow-500" /> : <Moon className="w-4 h-4 text-gray-600" />}
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => {
                setIsMenuOpen(!isMenuOpen)
                playClick()
              }}
              className="md:hidden w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onMouseEnter={playHover}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <div key={item.id}>
                  <Link href={item.href}>
                    <motion.button
                      className={`block w-full text-left px-3 py-2 text-sm font-medium hover:text-[#7391c8] hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors ${
                        activeSection === item.id ? "text-[#7391c8]" : "text-gray-700 dark:text-gray-300"
                      }`}
                      whileHover={{ x: 4 }}
                      onMouseEnter={playHover}
                      onClick={() => {
                        playClick()
                        setIsMenuOpen(false)
                      }}
                    >
                      {item.label}
                    </motion.button>
                  </Link>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
