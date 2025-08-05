"use client"

import type React from "react"
import { Suspense } from "react"
import { motion, AnimatePresence } from "framer-motion"
import FocusLock from 'react-focus-lock';
import { RemoveScroll } from 'react-remove-scroll';

import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Download,
  Linkedin,
  Facebook,
  Instagram,
  Github,
  Sun,
  Moon,
  ChevronDown,
  Menu,
  X,
  Volume2,
  VolumeX,
} from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useIntersectionObserver } from "../hooks/useIntersectionObserver"
import { Roboto_Mono, Amatic_SC } from "next/font/google"
import { projects, type Project } from "../data/projects"
import { LazyImage } from "../components/lazy-image"
import { LoadingSpinner, ProjectCardSkeleton } from "../components/loading-spinner"
import { EnhancedTimeline } from "../components/enhanced-timeline"
import { ProjectModalsLazy } from "../components/project-modals-lazy"
import { MotionWrapper, MotionStagger } from "../components/motion-wrapper"
import { useSoundEffects } from "../hooks/useSoundEffects"

// Import Google Fonts
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
})

const amaticSC = Amatic_SC({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
})

export default function Portfolio() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isSoundEnabled, setIsSoundEnabled] = useState(true)
  const [selectedCareer, setSelectedCareer] = useState("Developer")
  const [showProjectsModal, setShowProjectsModal] = useState(false)
  const [showProjectDetailModal, setShowProjectDetailModal] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [announcement, setAnnouncement] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Sound effects
  const { playHover, playClick } = useSoundEffects(isSoundEnabled)

  // Refs for focus management
  const skipLinkRef = useRef<HTMLAnchorElement>(null)
  const mainContentRef = useRef<HTMLElement>(null)

  // Intersection observers for different sections
  const heroContent = useIntersectionObserver({ threshold: 0.2 })
  const heroTitle = useIntersectionObserver({ threshold: 0.3 })
  const heroPhoto = useIntersectionObserver({ threshold: 0.2 })
  const aboutSection = useIntersectionObserver({ threshold: 0.2 })
  const workSection = useIntersectionObserver({ threshold: 0.2 })
  const workCards = useIntersectionObserver({ threshold: 0.1 })
  const contactSection = useIntersectionObserver({ threshold: 0.2 })

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDarkMode(true)
      document.documentElement.classList.add("dark")
    } else {
      setIsDarkMode(false)
      document.documentElement.classList.remove("dark")
    }

    // Check for saved sound preference or default to enabled
    const savedSound = localStorage.getItem("soundEnabled")
    if (savedSound !== null) {
      setIsSoundEnabled(savedSound === "true")
    }
  }, [])

  // Scroll detection for sticky navigation
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDarkMode
    setIsDarkMode(newTheme)

    if (newTheme) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
      setAnnouncement("Dark mode enabled")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
      setAnnouncement("Light mode enabled")
    }

    // Clear announcement after 3 seconds
    setTimeout(() => setAnnouncement(""), 3000)
  }

  const toggleSound = () => {
    const newSoundState = !isSoundEnabled
    setIsSoundEnabled(newSoundState)
    localStorage.setItem("soundEnabled", newSoundState.toString())
    setAnnouncement(newSoundState ? "Sound effects enabled" : "Sound effects disabled")

    // Clear announcement after 3 seconds
    setTimeout(() => setAnnouncement(""), 3000)
  }

  const getCareerContent = (career: string) => {
    switch (career) {
      case "Web designer":
        return "I create beautiful and intuitive user interfaces that not only look great but also provide exceptional user experiences. My design philosophy focuses on clean aesthetics, user-centered design principles, and creating digital experiences that users love to interact with."
      case "Developer":
        return "I build robust and scalable web applications using modern technologies and best practices. From frontend frameworks to backend systems, I enjoy solving complex problems and turning ideas into functional, efficient code that makes a real difference. I'm constantly learning new technologies and staying updated with industry trends to deliver cutting-edge solutions."
      case "Teacher":
        return "After graduating the matriculation exam with flying colors, I spent part of my free time tutoring the junior high school students preparing for their exam. That experience taught me how to break complex theories into simpler terms and teach it to others."
      case "Cat lover":
        return "When I'm not coding or designing, you'll find me spending time watching movies, drawing, reading for occasionally in gym😄. But mainly I'd rather spend my feline friends. Cats have taught me  the importance of finding the perfect spot to work from😝."
      default:
        return "I create beautiful and intuitive user interfaces that not only look great but also provide exceptional user experiences. My design philosophy focuses on clean aesthetics, user-centered design principles, and creating digital experiences that users love to interact with."
    }
  }

  const getCareerImage = (career: string) => {
    switch (career) {
      case "Web designer":
        return "/images/about_designer.png"
      case "Developer":
        return "/images/about_web_developer.png"
      case "Teacher":
        return "/images/about_teacher.png"
      case "Cat lover":
        return "/images/about_cat_lover.png"
      default:
        return "/images/about_service.png"
    }
  }

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project)
    setShowProjectsModal(false)
    setShowProjectDetailModal(true)
    setAnnouncement(`Opened ${project.title} project details`)
    playClick()
  }

  const handleBackToProjects = () => {
    setShowProjectDetailModal(false)
    setShowProjectsModal(true)
    setSelectedProject(null)
    setAnnouncement("Returned to projects gallery")
    playClick()
  }

  const handleCloseAllModals = () => {
    setShowProjectsModal(false)
    setShowProjectDetailModal(false)
    setSelectedProject(null)
    setAnnouncement("Closed project modal")
    playClick()
  }

  const handleCareerChange = (career: string) => {
    setSelectedCareer(career)
    setAnnouncement(`Changed role to ${career}`)
    playClick()
  }

  const handleSkipToMain = (e: React.MouseEvent) => {
    e.preventDefault()
    if (mainContentRef.current) {
      mainContentRef.current.focus()
      mainContentRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    setAnnouncement(isMobileMenuOpen ? "Mobile menu closed" : "Mobile menu opened")
    playClick()
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Skip Navigation Link */}
      <a
        ref={skipLinkRef}
        href="#main-content"
        onClick={handleSkipToMain}
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 bg-blue-600 text-white px-4 py-2 rounded font-mono font-bold focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        Skip to main content
      </a>

      {/* Live Region for Announcements */}
      <div aria-live="polite" aria-atomic="true" className="sr-only" role="status">
        {announcement}
      </div>

      {/* Sticky Header with Enhanced Glassmorphism and Framer Motion */}
      <motion.header
        className={`sticky top-0 z-40 flex items-center justify-between px-6 md:px-16 py-4 border-b border-gray-200 dark:border-gray-700 transition-all duration-300 ${
          isScrolled ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg" : "bg-white dark:bg-gray-900"
        }`}
        role="banner"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <motion.div
            className="hidden sm:block w-10 h-10 rounded-full overflow-hidden hover:shadow-lg hover:shadow-gray-300 dark:hover:shadow-gray-700 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
            tabIndex={0}
            role="img"
            aria-label="Thaw Zin Aung profile picture"
            whileHover={{ scale: 1.05, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={playHover}
          >
            <LazyImage src="/images/logo.png" alt="Thaw Zin Aung" className="w-full h-full object-cover" />
          </motion.div>
          <div>
            <h1 className="font-semibold text-black dark:text-white">THAW ZIN AUNG</h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">Web Designer & Developer</p>
          </div>
        </motion.div>

        <motion.nav
          className="hidden md:flex items-center gap-8"
          role="navigation"
          aria-label="Main navigation"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {["HOME", "ABOUT", "WORKS", "CONTACT"].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
            >
              <Link
                href={`#${item.toLowerCase()}`}
                className="text-black dark:text-white hover:text-[#7391c8] dark:hover:text-[#7391c8] transition-all duration-300 hover:[text-shadow:0_0_8px_rgba(115,145,200,0.6)] px-2 py-1 rounded hover:-translate-y-0.5"
                aria-label={`Navigate to ${item.toLowerCase()} section`}
                onMouseEnter={playHover}
                onClick={playClick}
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </motion.nav>

        <div className="flex items-center gap-3">
          {/* Sound Toggle Button */}
          <motion.button
            onClick={() => {
              toggleSound()
              // Play a sound to demonstrate the toggle (only if enabling sound)
              if (!isSoundEnabled) {
                // Use a temporary sound effect hook to play confirmation sound
                setTimeout(() => {
                  const tempAudioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
                  const oscillator = tempAudioContext.createOscillator()
                  const gainNode = tempAudioContext.createGain()

                  oscillator.connect(gainNode)
                  gainNode.connect(tempAudioContext.destination)

                  oscillator.frequency.setValueAtTime(1200, tempAudioContext.currentTime)
                  oscillator.type = "sine"

                  gainNode.gain.setValueAtTime(0, tempAudioContext.currentTime)
                  gainNode.gain.linearRampToValueAtTime(0.1, tempAudioContext.currentTime + 0.01)
                  gainNode.gain.exponentialRampToValueAtTime(0.001, tempAudioContext.currentTime + 0.2)

                  oscillator.start(tempAudioContext.currentTime)
                  oscillator.stop(tempAudioContext.currentTime + 0.2)
                }, 100)
              }
            }}
            className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 hover:shadow-lg hover:shadow-gray-300/30 dark:hover:shadow-gray-600/30"
            aria-label={isSoundEnabled ? "Disable sound effects" : "Enable sound effects"}
            aria-pressed={isSoundEnabled}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onMouseEnter={playHover}
          >
            <AnimatePresence mode="wait">
              {isSoundEnabled ? (
                <motion.div
                  key="sound-on"
                  initial={{ rotate: -360, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 180, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Volume2 className="w-4 h-4 text-gray-700 dark:text-gray-300" aria-hidden="true" />
                </motion.div>
              ) : (
                <motion.div
                  key="sound-off"
                  initial={{ rotate: -360, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 180, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <VolumeX className="w-4 h-4 text-gray-700 dark:text-gray-300" aria-hidden="true" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Theme Toggle Button */}
          <motion.button
            onClick={() => {
              toggleTheme()
              playClick()
            }}
            className="w-8 h-8 bg-[#7391c8] dark:bg-[#5f7ab8] rounded flex items-center justify-center hover:bg-[#5f7ab8] dark:hover:bg-[#4a6ba3] transition-all duration-300 hover:shadow-lg hover:shadow-[#7391c8]/30 dark:hover:shadow-[#5f7ab8]/30"
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            aria-pressed={isDarkMode}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onMouseEnter={playHover}
          >
            <AnimatePresence mode="wait">
              {isDarkMode ? (
                <motion.div
                  key="sun"
                  initial={{ rotate: -360, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 180, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Sun className="w-4 h-4 text-white" aria-hidden="true" />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ rotate: -360, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 180, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Moon className="w-4 h-4 text-white" aria-hidden="true" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={toggleMobileMenu}
            className="md:hidden w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
            aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
            aria-expanded={isMobileMenuOpen}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onMouseEnter={playHover}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-4 h-4 text-black dark:text-white" aria-hidden="true" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-4 h-4 text-black dark:text-white" aria-hidden="true" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <FocusLock>
            <RemoveScroll>
              <motion.div
            className="md:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={toggleMobileMenu}
          >
            <motion.nav
              className={`absolute top-[73px] right-0 w-[80vw] h-[80vh] bg-white dark:bg-gray-900 border-l border-b border-gray-200 dark:border-gray-700 shadow-xl ${
                isScrolled ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md" : ""
              }`}
              role="navigation"
              aria-label="Mobile navigation"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 space-y-4">
                {["HOME", "ABOUT", "WORKS", "CONTACT"].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (index + 1) * 0.1, duration: 0.3 }}
                  >
                    <Link
                      href={`#${item.toLowerCase()}`}
                      onClick={() => {
                        toggleMobileMenu()
                        playClick()
                      }}
                      className="block text-black dark:text-white hover:text-[#7391c8] dark:hover:text-[#7391c8] transition-all duration-300 font-medium hover:[text-shadow:0_0_8px_rgba(115,145,200,0.6)] px-3 py-3 rounded hover:bg-gray-50 dark:hover:bg-gray-800 font-mono focus:outline-none focus:ring-4 focus:ring-blue-300"
                      aria-label={`Navigate to ${item.toLowerCase()} section`}
                      onMouseEnter={playHover}
                    >
                      {item}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.nav>
          </motion.div>
            </RemoveScroll>
          </FocusLock>
        )}
      </AnimatePresence>

      {/* Rest of the component remains the same... */}
      {/* Main Content Container with Dynamic Pixel Art Background */}
      <div
        className="min-h-screen relative overflow-hidden"
        style={{
          background: isDarkMode
            ? "linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #334155 50%, #475569 75%, #64748b 100%)"
            : "linear-gradient(135deg, #e6f3ff 0%, #cce7ff 25%, #b3dbff 50%, #99cfff 75%, #80c3ff 100%)",
        }}
      >
        {/* Enhanced Pixel Art Cloud/Star Shapes with Framer Motion */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {isDarkMode ? (
            // Night Sky with Enhanced Stars and Dark Clouds
            <>
              {/* Enhanced Twinkling Stars */}
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={`star-${i}`}
                  className="absolute bg-white opacity-70"
                  style={{
                    width: Math.random() * 3 + 1 + "px",
                    height: Math.random() * 3 + 1 + "px",
                    top: Math.random() * 80 + "%",
                    left: Math.random() * 100 + "%",
                    boxShadow: "0 0 4px #ffffff",
                  }}
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: Math.random() * 3 + 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: Math.random() * 2,
                  }}
                />
              ))}

              {/* Floating Dark Clouds with Motion */}
              <motion.div
                className="absolute w-96 h-64 opacity-20"
                style={{
                  top: "10%",
                  left: "-5%",
                  background: `
                    radial-gradient(circle at 30% 40%, #1e293b 0%, #1e293b 20%, transparent 21%),
                    radial-gradient(circle at 60% 35%, #334155 0%, #334155 25%, transparent 26%),
                    radial-gradient(circle at 45% 60%, #1e293b 0%, #1e293b 18%, transparent 19%),
                    radial-gradient(circle at 75% 50%, #475569 0%, #475569 22%, transparent 23%)
                  `,
                  filter: "blur(1px)",
                  imageRendering: "pixelated",
                }}
                animate={{
                  x: [0, 30, 0],
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                className="absolute w-80 h-48 opacity-15"
                style={{
                  top: "20%",
                  right: "-8%",
                  background: `
                    radial-gradient(circle at 25% 45%, #334155 0%, #334155 20%, transparent 21%),
                    radial-gradient(circle at 55% 30%, #475569 0%, #475569 28%, transparent 29%),
                    radial-gradient(circle at 70% 65%, #1e293b 0%, #1e293b 15%, transparent 16%)
                  `,
                  filter: "blur(0.5px)",
                  imageRendering: "pixelated",
                }}
                animate={{
                  x: [0, -25, 0],
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 25,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 5,
                }}
              />
            </>
          ) : (
            // Day Sky with Enhanced Light Clouds
            <>
              {/* Enhanced Floating Clouds with Motion */}
              <motion.div
                className="absolute w-96 h-64 opacity-30"
                style={{
                  top: "10%",
                  left: "-5%",
                  background: `
                    radial-gradient(circle at 30% 40%, #ffffff 0%, #ffffff 20%, transparent 21%),
                    radial-gradient(circle at 60% 35%, #ffffff 0%, #ffffff 25%, transparent 26%),
                    radial-gradient(circle at 45% 60%, #ffffff 0%, #ffffff 18%, transparent 19%),
                    radial-gradient(circle at 75% 50%, #ffffff 0%, #ffffff 22%, transparent 23%)
                  `,
                  filter: "blur(1px)",
                  imageRendering: "pixelated",
                }}
                animate={{
                  x: [0, 40, 0],
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 30,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                className="absolute w-32 h-24 opacity-40"
                style={{
                  top: "15%",
                  left: "25%",
                  background: `
                    radial-gradient(circle at 50% 50%, #ffffff 0%, #ffffff 30%, transparent 31%)
                  `,
                  imageRendering: "pixelated",
                }}
                animate={{
                  x: [0, 20, 0],
                  y: [0, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 15,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                className="absolute w-28 h-20 opacity-35"
                style={{
                  top: "45%",
                  right: "30%",
                  background: `
                    radial-gradient(circle at 50% 50%, #f0f8ff 0%, #f0f8ff 25%, transparent 26%)
                  `,
                  imageRendering: "pixelated",
                }}
                animate={{
                  x: [0, -15, 0],
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 18,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 3,
                }}
              />
            </>
          )}
        </div>

        {/* Main Content Container */}
        <div className="relative z-10 py-6 mx-4 sm:mx-6 lg:mx-8">
          <motion.div
            className="max-w-[1100px] mx-auto bg-white dark:bg-gray-900 shadow-lg rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <main ref={mainContentRef} id="main-content" tabIndex={-1} className="focus:outline-none">
              {/* Hero Section with Enhanced Animations */}
              <section
                id="home"
                className="px-4 sm:px-6 lg:px-12 py-16 flex items-center"
                aria-labelledby="hero-heading"
              >
                <div className="w-full">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 items-center">
                    {/* Photo with Enhanced Animation */}
                    <MotionWrapper variant="slideLeft" delay={0.2} className="flex justify-center">
                      <motion.div
                        className="w-60 md:w-80 h-60 md:h-80 flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-blue-300 rounded"
                        tabIndex={0}
                        role="img"
                        aria-label="Illustration of Thaw Zin Aung working with a laptop"
                        whileHover={{
                          scale: 1.05,
                          rotate: [0, -2, 2, 0],
                          transition: { duration: 0.5 },
                        }}
                        whileTap={{ scale: 0.98 }}
                        onMouseEnter={playHover}
                      >
                        <LazyImage
                          src="/images/hero.png"
                          alt="Thaw Zin Aung working with laptop illustration"
                          className="w-full h-full object-contain"
                        />
                      </motion.div>
                    </MotionWrapper>

                    {/* Title with Staggered Animation */}
                    <MotionWrapper
                      variant="slideUp"
                      delay={0.4}
                      className="flex items-center justify-center md:justify-start"
                    >
                      <h2
                        id="hero-heading"
                        className="text-2xl md:text-3xl font-regular text-black dark:text-white text-center md:text-left"
                      >
                        <motion.span
                          className={`${amaticSC.className} text-5xl md:text-7xl font-medium block leading-tight`}
                          initial={{ scale: 0.8 }}
                          whileInView={{
                            opacity: 1,
                            scale: [1, 1.01, 1],
                            scaleX: [1,1.02, 1],
                            rotate: [0, 0.4, -0.2, 0],
                          }}
                          transition={{
                            // delay: 0.5,
                            duration: 3,
                            repeat: Number.POSITIVE_INFINITY,
                          }}
                        >
                          THAW
                          <br />
                          ZIN
                        </motion.span>
                      </h2>
                    </MotionWrapper>

                    {/* Content with Enhanced Animations */}
                    <MotionWrapper variant="slideRight" delay={0.6} className="col-span-2 md:col-span-2">
                      <MotionStagger staggerDelay={0.2}>
                        <MotionWrapper variant="fadeIn">
                          <div className="mb-6">
                            <p className="max-w-[45ch] text-justify">
                              Mingalabar! I'm Thaw, a <span className="text-[#7391c8]">designer</span> and{" "}
                              <span className="text-[#7391c8]">frontend developer</span> who enjoys being at the
                              intersection of business, design and code.
                            </p>
                          </div>
                        </MotionWrapper>

                        <MotionWrapper variant="fadeIn">
                          <div className="space-y-4 text-gray-700 dark:text-gray-300 mb-6">
                            <p className="mb-2 max-w-[45ch] text-justify text-gray-800 dark:text-gray-200">
                              I design and build clean, aesthetics and intuitive user interfaces for <span className="text-[#7391c8]">web</span> and <span className="text-[#7391c8]">mobile experience</span> with a focus on usability and accessibilty.
                            </p>
                          </div>
                        </MotionWrapper>

                        <MotionWrapper variant="scale">
                          <div className="relative inline-block group">
                            <motion.div
                              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 pointer-events-none z-0"
                              aria-hidden="true"
                              animate={{
                                y: [0, -5, 0],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                              }}
                            >
                              <LazyImage src="/images/cat-peek.png" alt="" className="w-14 h-20 object-contain" />
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
                              <Button
                                className="relative z-10 bg-[#7391c8] hover:bg-[#5f7ab8] dark:bg-[#5f7ab8] dark:hover:bg-[#4a6ba3] text-white transition-all duration-350 hover:shadow-lg hover:shadow-[#7391c8]/30 dark:hover:shadow-[#5f7ab8]/30 font-mono focus:outline-none focus:ring-4 focus:ring-blue-300"
                                aria-label="Download Thaw Zin Aung's CV as PDF"
                                onMouseEnter={playHover}
                                onClick={playClick}
                              >
                                <Download className="w-4 h-4 mr-2" aria-hidden="true" />
                                <a
                                  href="/thawzinag_cv.pdf" download="thawzinag_cv"
                                >Download My CV</a>
                              </Button>
                            </motion.div>
                          </div>
                        </MotionWrapper>
                      </MotionStagger>
                    </MotionWrapper>
                  </div>
                </div>
              </section>

              {/* About Me Section with Enhanced Animations */}
              <section
                id="about"
                className="px-4 sm:px-6 lg:px-12 py-16 bg-gray-50 dark:bg-gray-800 min-h-screen flex items-center"
                aria-labelledby="about-heading"
              >
                <div className="w-full">
                  <MotionWrapper variant="slideUp" className="flex items-center gap-3 mb-8">
                    <motion.div
                      className="w-8 h-8 flex items-center justify-center"
                      aria-hidden="true"
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                      onMouseEnter={playHover}
                    >
                      <LazyImage
                        src={isDarkMode ? "/images/star-icon.png" : "/images/sun-icon.png"}
                        alt=""
                        className="w-8 h-8 object-contain"
                      />
                    </motion.div>
                    <h3 id="about-heading" className="text-xl font-semibold text-[#7391c8]">
                      ABOUT ME
                    </h3>
                  </MotionWrapper>

                  <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
                    <MotionWrapper variant="slideLeft" delay={0.2}>
                      <p className="text-sm md:text-base mb-6 text-gray-800 dark:text-gray-200">
                        I worked different roles. I'm a{" "}
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <motion.button
                              className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 inline-flex items-center gap-1 font-medium hover:shadow-md hover:shadow-gray-300 dark:hover:shadow-gray-600 text-sm md:text-base"
                              aria-label={`Current role: ${selectedCareer}. Click to change role selection`}
                              aria-haspopup="listbox"
                              aria-expanded="false"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onMouseEnter={playHover}
                            >
                              <span className="truncate max-w-[120px] md:max-w-none">{selectedCareer}</span>
                              <motion.div
                                animate={{ rotate: 0 }}
                                whileHover={{ rotate: 180 }}
                                transition={{ duration: 0.3 }}
                              >
                                <ChevronDown className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" aria-hidden="true" />
                              </motion.div>
                            </motion.button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent
                            className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-lg w-40"
                            role="listbox"
                            aria-label="Role selection menu"
                          >
                            {["Developer", "Web designer", "Teacher", "Cat lover"].map((role) => (
                              <DropdownMenuItem
                                key={role}
                                onClick={() => handleCareerChange(role)}
                                className="text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-all duration-200 hover:shadow-sm text-sm font-mono focus:outline-none focus:ring-2 focus:ring-blue-300"
                                role="option"
                                aria-selected={selectedCareer === role}
                              >
                                {role}
                              </DropdownMenuItem>
                            ))}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </p>

                      <motion.div
                        className="w-1/2 h-max-50 flex items-center justify-center transition-transform duration-300"
                        key={selectedCareer}
                        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        onMouseEnter={playHover}
                      >
                        <LazyImage
                          src={getCareerImage(selectedCareer) || "/placeholder.svg"}
                          alt={`Illustration representing Thaw Zin Aung as a ${selectedCareer}`}
                          className="w-50 h-50 object-contain transition-all duration-500"
                        />
                      </motion.div>
                    </MotionWrapper>

                    <MotionWrapper variant="slideRight" delay={0.4}>
                      <motion.div
                        key={selectedCareer}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-gray-700 dark:text-gray-300"
                      >
                        <p className="max-w-[45ch] text-justify transition-all duration-300">{getCareerContent(selectedCareer)}</p>
                      </motion.div>
                    </MotionWrapper>
                  </div>

                  {/* Enhanced Timeline Section */}
                  <Suspense fallback={<LoadingSpinner size="lg" />}>
                    <EnhancedTimeline />
                  </Suspense>

                  {/* Learning Journey Section with Enhanced Animations */}
                  <div className="mt-16">
                    <MotionWrapper variant="slideUp" className="flex items-center justify-center gap-3 mb-8">
                      <motion.div
                        className="w-8 h-8 flex items-center justify-center"
                        aria-hidden="true"
                        whileHover={{ scale: 1.2, rotate: 15 }}
                        transition={{ duration: 0.3 }}
                        onMouseEnter={playHover}
                      >
                        <span className="text-2xl">📚</span>
                      </motion.div>
                      <h3 className="text-xl font-medium text-[#7391c8]">My Recent Activities</h3>
                    </MotionWrapper>

                    <MotionStagger className="grid md:grid-cols-2 gap-8" staggerDelay={0.2}>
                      <MotionWrapper variant="scale">
                        <motion.div
                          className="bg-white dark:bg-gray-800 border-4 border-black dark:border-white p-6"
                          style={{ boxShadow: "4px 4px 0px rgba(0,0,0,0.3)" }}
                          whileHover={{
                            scale: 1.02,
                            boxShadow: "6px 6px 0px rgba(0,0,0,0.4)",
                            transition: { duration: 0.2 },
                          }}
                          onMouseEnter={playHover}
                        >
                          <h4 className="font-medium text-base mb-3 text-[#7391c8] tracking-wider flex items-center gap-2">
                            <motion.span
                              animate={{ rotate: [0, 10, -10, 0] }}
                              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
                            >
                              🎯
                            </motion.span>
                            Currently Exploring
                          </h4>
                          <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                            {[
                              "AI/ML integration in web applications",
                              "Advanced React & TypeScript features",
                              "Web accessibility & SEO optimisation",
                            ].map((item, index) => (
                              <motion.li
                                key={index}
                                className="flex items-start gap-2"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.4 }}
                                viewport={{ once: true }}
                              >
                                <span className="text-[#7391c8] mt-1">▶</span>
                                {item}
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      </MotionWrapper>

                      <MotionWrapper variant="scale">
                        <motion.div
                          className="bg-white dark:bg-gray-800 border-4 border-black dark:border-white p-6"
                          style={{ boxShadow: "4px 4px 0px rgba(0,0,0,0.3)" }}
                          whileHover={{
                            scale: 1.02,
                            boxShadow: "6px 6px 0px rgba(0,0,0,0.4)",
                            transition: { duration: 0.2 },
                          }}
                          onMouseEnter={playHover}
                        >
                          <h4 className="font-medium text-base  mb-3 text-[#7391c8] tracking-wider flex items-center gap-2">
                            <motion.span
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatDelay: 2 }}
                            >
                              🏆
                            </motion.span>
                            Recent Achievements
                          </h4>
                          <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                            {[
                              "MSc Business Information Systems (Merit) - 2024",
                              "Completed AI in Retail research project",
                              "Meta Frontend Developer Professional Certificate",
                              "Google UX Designer Certificate",
                            ].map((item, index) => (
                              <motion.li
                                key={index}
                                className="flex items-start gap-2"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.4 }}
                                viewport={{ once: true }}
                              >
                                <span className="text-[#7391c8] mt-1">▶</span>
                                {item}
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      </MotionWrapper>
                    </MotionStagger>
                  </div>
                </div>
              </section>

              {/* Work Section with Enhanced Animations */}
              <section
                id="works"
                className="px-4 sm:px-6 lg:px-12 py-16 min-h-screen flex items-center"
                aria-labelledby="work-heading"
              >
                <div className="w-full">
                  <MotionWrapper variant="slideUp" className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <motion.div
                        className="w-8 h-8 flex items-center justify-center"
                        aria-hidden="true"
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.5 }}
                        onMouseEnter={playHover}
                      >
                        <LazyImage
                          src={isDarkMode ? "/images/star-icon.png" : "/images/sun-icon.png"}
                          alt=""
                          className="w-8 h-8 object-contain"
                        />
                      </motion.div>
                      <h3 id="work-heading" className="text-xl text-[#7391c8] font-semibold">
                        WORKS
                      </h3>
                    </div>
                    <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        onClick={() => {
                          setShowProjectsModal(true)
                          playClick()
                        }}
                        variant="outline"
                        className="text-[#7391c8] border-[#7391c8] bg-transparent hover:bg-[#7391c8] hover:text-white dark:hover:bg-[#7391c8] dark:hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#7391c8]/30"
                        aria-label="Open projects gallery modal"
                        onMouseEnter={playHover}
                      >
                        Explore my work
                      </Button>
                    </motion.div>
                  </MotionWrapper>

                  <MotionWrapper variant="fadeIn" delay={0.2}>
                    <p className="text-gray-700 dark:text-gray-300 mb-8">
                      I do design and build web and mobile experiences with a focus on the user needs.
                    </p>
                  </MotionWrapper>

                  <MotionStagger className="grid md:grid-cols-2 gap-8" staggerDelay={0.3}>
                    <Suspense fallback={<ProjectCardSkeleton />}>
                      <MotionWrapper variant="slideLeft">
                        <motion.div
                          onClick={() => handleProjectClick(projects.find((p) => p.id === "xplore-yangon")!)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault()
                              handleProjectClick(projects.find((p) => p.id === "xplore-yangon")!)
                            }
                          }}
                          className="overflow-hidden bg-white dark:bg-gray-800 border-4 border-black dark:border-white transition-all duration-700 ease-out cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-300"
                          style={{
                            boxShadow: "4px 4px 0px rgba(0,0,0,0.3)",
                          }}
                          tabIndex={0}
                          role="button"
                          aria-label="View Xplore Yangon project details"
                          whileHover={{
                            scale: 1.05,
                            boxShadow: "8px 8px 0px rgba(0,0,0,0.4)",
                            y: -5,
                            transition: { duration: 0.3 },
                          }}
                          whileTap={{ scale: 0.98 }}
                          onMouseEnter={playHover}
                        >
                          <div className="p-0">
                            <div className="h-64 bg-[#daedea] border-b-4 border-black dark:border-white flex items-center justify-center p-4">
                              <LazyImage
                                src={projects.find((p) => p.id === "xplore-yangon")?.image || "/placeholder.svg"}
                                alt="Xplore Yangon project preview"
                                className="w-full h-full object-contain"
                              />
                            </div>
                            <div className="p-6">
                              <h4 className="font-bold text-lg mb-2 text-black dark:text-white font-mono tracking-wider">
                                XPLORE YANGON
                              </h4>
                              <p className="text-gray-600 dark:text-gray-400 text-sm">
                                A mobile app for navigating Yangon.
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      </MotionWrapper>
                    </Suspense>

                    <Suspense fallback={<ProjectCardSkeleton />}>
                      <MotionWrapper variant="slideRight">
                        <motion.div
                          onClick={() => handleProjectClick(projects.find((p) => p.id === "grace-website")!)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault()
                              handleProjectClick(projects.find((p) => p.id === "grace-website")!)
                            }
                          }}
                          className="overflow-hidden bg-white dark:bg-gray-800 border-4 border-black dark:border-white transition-all duration-700 ease-out cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-300"
                          style={{
                            boxShadow: "4px 4px 0px rgba(0,0,0,0.3)",
                          }}
                          tabIndex={0}
                          role="button"
                          aria-label="View Grace Website project details"
                          whileHover={{
                            scale: 1.05,
                            boxShadow: "8px 8px 0px rgba(0,0,0,0.4)",
                            y: -5,
                            transition: { duration: 0.3 },
                          }}
                          whileTap={{ scale: 0.98 }}
                          onMouseEnter={playHover}
                        >
                          <div className="p-0">
                            <div className="h-64 bg-[#f5ecaf] border-b-4 border-black dark:border-white flex items-center justify-center p-4">
                              <LazyImage
                                src={projects.find((p) => p.id === "grace-website")?.image || "/placeholder.svg"}
                                alt="Grace Website project preview"
                                className="w-full h-full object-contain"
                              />
                            </div>
                            <div className="p-6">
                              <h4 className="font-bold text-lg mb-2 text-black dark:text-white font-mono tracking-wider">
                                GRACE WEBSITE
                              </h4>
                              <p className="text-gray-600 dark:text-gray-400 text-sm">
                                E-commerce website for personalised accessories.
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      </MotionWrapper>
                    </Suspense>
                  </MotionStagger>
                </div>
              </section>

              {/* Contact Section with Enhanced Animations */}
              <section
                id="contact"
                className="px-4 sm:px-6 lg:px-12 py-12 bg-gray-50 dark:bg-gray-800 min-h-[50vh] flex items-center"
                aria-labelledby="contact-heading"
              >
                <div className="w-full">
                  <MotionWrapper variant="slideUp" className="flex items-center gap-3 mb-8">
                    <motion.div
                      className="w-8 h-8 flex items-center justify-center"
                      aria-hidden="true"
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                      onMouseEnter={playHover}
                    >
                      <LazyImage
                        src={isDarkMode ? "/images/star-icon.png" : "/images/sun-icon.png"}
                        alt=""
                        className="w-8 h-8 object-contain"
                      />
                    </motion.div>
                    <h3 id="contact-heading" className="text-xl font-semibold text-[#7391c8]">
                      CONTACT ME
                    </h3>
                  </MotionWrapper>

                  <div className="grid md:grid-cols-2 gap-12 items-start">
                    <MotionWrapper variant="slideLeft" delay={0.2}>
                      <motion.div
                        className="w-40 md:w-48 h-auto flex items-center justify-center mx-auto focus:outline-none focus:ring-4 focus:ring-blue-300 rounded"
                        tabIndex={0}
                        role="img"
                        aria-label="Contact illustration of Thaw Zin Aung"
                        whileHover={{
                          scale: 1.05,
                          rotate: [0, -2, 2, 0],
                          transition: { duration: 0.5 },
                        }}
                        whileTap={{ scale: 0.98 }}
                        onMouseEnter={playHover}
                      >
                        <LazyImage
                          src="/images/contact-avatar.png"
                          alt="Thaw Zin Aung contact illustration"
                          className="w-full h-full object-contain"
                        />
                      </motion.div>
                    </MotionWrapper>

                    <MotionWrapper variant="slideRight" delay={0.4}>
                      <MotionStagger className="space-y-4 text-gray-700 dark:text-gray-300" staggerDelay={0.1}>
                        <MotionWrapper variant="fadeIn">
                          <p>This works well for a quick chat in general.</p>
                        </MotionWrapper>
                        <MotionWrapper variant="fadeIn">
                          <a className="text-[#5f7ab8] underline decoration-1" href="https://www.linkedin.com/in/thaw-zin-ag419/">-LinkedIn</a>
                        </MotionWrapper>
                        <MotionWrapper variant="fadeIn">
                          <a className="text-[#5f7ab8] underline decoration-1" href="https://www.facebook.com/thawzin.ag.419">-Facebook</a>
                        </MotionWrapper>
                        <MotionWrapper variant="fadeIn">
                          <p className="max-w-[45ch] text-justify">
                            If you need to discuss your project or anything else, please feel free to email{" "}
                            <motion.a
                              href="mailto:thawzinaung199@gmail.com"
                              className="text-[#7391c8] hover:text-[#5f7ab8] underline focus:outline-none focus:ring-4 focus:ring-blue-300 rounded"
                              aria-label="Send email to thawzinaung199@gmail.com"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.98 }}
                              onMouseEnter={playHover}
                              onClick={playClick}
                            >
                              thawzinaung199@gmail.com
                            </motion.a>{" "}
                            and I will get back to you within a week.
                          </p>
                        </MotionWrapper>
                        <MotionWrapper variant="fadeIn">
                          <p className="max-w-[45ch] text-justify">
                            You want to say hello and say something in mind to share? I love messages like that. I can't
                            wait to hear from you!
                          </p>
                        </MotionWrapper>
                      </MotionStagger>
                    </MotionWrapper>
                  </div>
                </div>
              </section>
            </main>
          </motion.div>
        </div>
      </div>

      {/* Footer with Enhanced Animations */}
      <motion.footer
        className="px-6 py-6 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 transition-colors duration-300 flex items-center"
        role="contentinfo"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto w-full">
          <MotionWrapper variant="slideUp" className="text-center mb-6">
            <motion.div
              className="w-12 h-12 mx-auto mb-4 flex items-center justify-center"
              aria-hidden="true"
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.5 }}
              onMouseEnter={playHover}
            >
              <LazyImage
                src={isDarkMode ? "/images/star-icon.png" : "/images/sun-icon.png"}
                alt=""
                className="w-10 h-10 object-contain"
              />
            </motion.div>
            <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">
              This is the end of my website. If you are interested, feel free to say hi!
            </p>
          </MotionWrapper>

          <MotionStagger
            className="flex justify-center gap-4 md:gap-8 mb-6"
            role="navigation"
            aria-label="Footer navigation"
            staggerDelay={0.1}
          >
            {["HOME", "ABOUT", "CONTACT", "WORKS"].map((item) => (
              <MotionWrapper key={item} variant="slideUp">
                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-[#7391c8] transition-all duration-300 px-2 py-1 rounded text-sm md:text-base font-mono underline decoration-1"
                    aria-label={`Navigate to ${item.toLowerCase()} section`}
                    onMouseEnter={playHover}
                    onClick={playClick}
                  >
                    {item}
                  </Link>
                </motion.div>
              </MotionWrapper>
            ))}
          </MotionStagger>

          <MotionStagger
            className="flex justify-center gap-6"
            role="list"
            aria-label="Social media links"
            staggerDelay={0.1}
          >
            {[
              { href: "https://www.linkedin.com/in/thaw-zin-ag419/", icon: Linkedin, label: "LinkedIn" },
              { href: "https://github.com/ThawZinA", icon: Github, label: "GitHub" },
              { href: "https://www.facebook.com/thawzin.ag.419", icon: Facebook, label: "Facebook" },
              { href: "https://www.instagram.com/__thaw_/", icon: Instagram, label: "Instagram" },
            ].map(({ href, icon: Icon, label }) => (
              <MotionWrapper key={label} variant="scale">
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    y: -2,
                    rotate: [0, -10, 10, 0],
                    transition: { duration: 0.5 },
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link
                    href={href}
                    className="text-gray-600 dark:text-gray-400 hover:text-[#7391c8] dark:hover:text-[#7391c8] transition-all duration-300 hover:[text-shadow:0_0_12px_rgba(115,145,200,0.8)] p-2 rounded-full "
                    aria-label={`Visit ${label} profile (opens in new tab)`}
                    role="listitem"
                    onMouseEnter={playHover}
                    onClick={playClick}
                  >
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </Link>
                </motion.div>
              </MotionWrapper>
            ))}
          </MotionStagger>
          <p className="text-gray-700 text-center dark:text-gray-300 text-[12px]">
            © 2025-present Thaw Zin Aung. All Rights Reserved.
          </p>
        </div>
      </motion.footer>

      {/* Project Modals with Lazy Loading */}
      <ProjectModalsLazy
        showProjectsModal={showProjectsModal}
        showProjectDetailModal={showProjectDetailModal}
        selectedProject={selectedProject}
        onProjectClick={handleProjectClick}
        onBackToProjects={handleBackToProjects}
        onCloseAllModals={handleCloseAllModals}
        onShowProjectsModal={setShowProjectsModal}
      />
    </div>
  )
}
