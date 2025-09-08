"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Menu, X, Sun, Moon, ExternalLink, Github, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { LazyImage } from "../../../components/lazy-image"
import { useSoundEffects } from "../../../hooks/useSoundEffects"
import { SoundButton } from "../../../components/sound-button"
import { projects } from "../../../data/projects"
import { notFound } from "next/navigation"
import { ExternalLinkIcon, GitHubLogoIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons"

interface ProjectPageProps {
  params: {
    id: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isSoundEnabled, setIsSoundEnabled] = useState(true)
  const [activeSection, setActiveSection] = useState("works")

  // Sound effects
  const { playHover, playClick } = useSoundEffects(isSoundEnabled)

  // Unwrap params for Next.js future compatibility
  const { id } = params
  const project = projects.find((p) => p.id === id)

  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDarkMode(true)
      document.documentElement.classList.add("dark")
    }

    // Check for saved sound preference
    const savedSound = localStorage.getItem("soundEnabled")
    if (savedSound !== null) {
      setIsSoundEnabled(savedSound === "true")
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

  const toggleSound = () => {
    const newSoundState = !isSoundEnabled
    setIsSoundEnabled(newSoundState)
    localStorage.setItem("soundEnabled", newSoundState.toString())
    // Don't play click sound here since we're toggling sound
  }

  const navItems = [
    { id: "home", label: "HOME", href: "/" },
    { id: "about", label: "ABOUT", href: "/about" },
    // { id: "works", label: "WORKS", href: "/works" },
  ]

  if (!project) {
    notFound()
  }

  // Get other projects for the "Other Projects" section
  const otherProjects = projects.filter((p) => p.id !== project.id).slice(0, 2)

  // Get all technologies from the project and limit to 5
  const getAllTechnologies = (project: any) => {
    const allTechs = [
      ...(project.technologies?.frontend || []),
      ...(project.technologies?.backend || []),
      ...(project.technologies?.database || []),
      ...(project.technologies?.tools || []),
    ]
    return allTechs.slice(0, 5)
  }

  const getTechBadgeColor = (index: number) => {
    const colors = [
      "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300 border-blue-200 dark:border-blue-800",
      "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300 border-green-200 dark:border-green-800",
      "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300 border-purple-200 dark:border-purple-800",
      "bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-300 border-orange-200 dark:border-orange-800",
      "bg-pink-100 text-pink-800 dark:bg-pink-900/20 dark:text-pink-300 border-pink-200 dark:border-pink-800",
    ]
    return colors[index % colors.length]
  }

  const getTechLogo = (tech: string) => {
    const techLogos: { [key: string]: string } = {
      React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      TypeScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      TailwindCSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      "Framer Motion": "https://www.framer.com/favicon.ico",
      "React Hook Form": "https://react-hook-form.com/favicon.ico",
      Zod: "https://zod.dev/favicon.ico",
      Vercel: "https://assets.vercel.com/image/upload/front/favicon/vercel/favicon.ico",
      ESLint: "https://eslint.org/favicon.ico",
      Prettier: "https://prettier.io/icon.png",
      Figma: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      NodeJS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      "Next.js API Routes": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      Vite: "https://vitejs.dev/logo.svg",
      "CSS Grid": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      MDX: "https://mdxjs.com/favicon.ico",
      Contentlayer: "https://www.contentlayer.dev/favicon.ico",
      PrismJS: "https://prismjs.com/favicon.ico",
      "Fuse.js": "https://fusejs.io/favicon.ico",
      Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      Netlify: "https://www.netlify.com/favicon.ico",
      "Local Storage": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/database/database-original.svg",
      IndexedDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/database/database-original.svg",
      "File System": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/database/database-original.svg",
    }
      
    // Return a default icon if no specific logo is found
    return techLogos[tech] || "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg"
  }

  const technologies = getAllTechnologies(project)

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Navigation - Same as homepage */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
                  <LazyImage src="/images/logo.png" alt="Thaw Zin Aung" className="w-full h-full object-cover" />
                </div>
                <div className="hidden sm:block">
                  <h1 className="font-semibold text-black dark:text-white">THAW ZIN AUNG</h1>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Web Designer & Developer</p>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
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
                onToggle={toggleSound}
                className="w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              />

              {/* Theme Toggle Button */}
              <motion.button
                onClick={toggleTheme}
                className="w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                onMouseEnter={playHover}
                aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {isDarkMode ? <SunIcon className="w-4 h-4 text-yellow-500" /> : <MoonIcon className="w-4 h-4 text-gray-600" />}
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
                        className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#7391c8] hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors"
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

      {/* Main Content */}
      <main className="pt-16">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Back Button */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/">
              <Button
                variant="ghost"
                className="text-gray-600 dark:text-gray-400 hover:text-[#7391c8] p-0"
                onMouseEnter={playHover}
                onClick={playClick}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </motion.div>

          {/* Project Header */}
          <motion.header
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">{project.title}</h1>

            <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-400 mb-8">
              <p className="text-sm text-justify leading-relaxed">{project.longDescription}</p>
            </div>

            {/* Project Meta */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
              
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Category</h3>
                <p className="text-gray-600 dark:text-gray-400">{project.category}</p>
              </div>
              {project.client && (
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Client</h3>
                  <p className="text-gray-600 dark:text-gray-400">{project.client}</p>
                </div>
              )}
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Links</h3>
                <div className="flex gap-3">
                  {project.liveUrl && (
                    <Button
                      size="sm"
                      onClick={() => {
                        playClick()
                        window.open(project.liveUrl, "_blank")
                      }}
                      className="bg-[#7391c8] hover:bg-[#5f7ab8] text-white h-8 px-3 text-xs"
                      onMouseEnter={playHover}
                    >
                      <ExternalLinkIcon className="w-3 h-3 mr-1" />
                      Live Site
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        playClick()
                        window.open(project.githubUrl, "_blank")
                      }}
                      className="h-8 px-3 text-xs border-gray-300 dark:border-gray-600"
                      onMouseEnter={playHover}
                    >
                      <GitHubLogoIcon className="w-3 h-3 mr-1" />
                      Code
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </motion.header>

          {/* Hero Image */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="aspect-video rounded-lg overflow-hidden shadow-2xl">
              <LazyImage src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </div>
          </motion.div>

          {/* Tech Stack */}
          {technologies.length > 0 && (
            <motion.section
              className="mb-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Tech Stack</h2>
              <div className="max-w-none text-gray-600 dark:text-gray-400 mb-6">
                <p className="text-sm text-justify leading-relaxed">
                  {project.technicalDetails}
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <Badge
                    key={tech}
                    className={`px-4 py-2 text-sm font-medium border flex items-center gap-2 ${getTechBadgeColor(index)}`}
                  >
                    <img
                      src={getTechLogo(tech) || "/placeholder.svg"}
                      alt={`${tech} logo`}
                      className="w-4 h-4 object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = "none"
                      }}
                    />
                    {tech}
                  </Badge>
                ))}
              </div>
            </motion.section>
          )}

          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <motion.section
              className="mb-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Key Features</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#7391c8] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600 text-sm dark:text-gray-400 leading-relaxed">{feature}</p>
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Problems and Thought Process */}
          {project.challenges && project.challenges.length > 0 && (
            <motion.section
              className="mb-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Problems and Thought Process</h2>
              <div className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <div key={index} className="prose prose-lg max-w-none text-gray-600 dark:text-gray-400">
                    <p className="text-sm text-justify leading-relaxed">{challenge}</p>
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Solutions */}
          {project.solutions && project.solutions.length > 0 && (
            <motion.section
              className="mb-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Solutions</h2>
              <div className="space-y-4">
                {project.solutions.map((solution, index) => (
                  <div key={index} className="prose prose-lg max-w-none text-gray-600 dark:text-gray-400">
                    <p className="text-sm text-justify leading-relaxed">{solution}</p>
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Lessons Learned */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Lessons Learned</h2>
            <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-400">
              <p className="text-sm text-justify leading-relaxed">
                {project.lessonsLearned}
              </p>
            </div>
          </motion.section>

          {/* Other Projects */}
          {otherProjects.length > 0 && (
            <motion.section
              className="mb-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Other Projects</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {otherProjects.map((otherProject) => (
                  <Link key={otherProject.id} href={`/works/${otherProject.id}`}>
                    <div className="group cursor-pointer" onMouseEnter={playHover} onClick={playClick}>
                      <div className="aspect-video rounded-lg overflow-hidden mb-4 shadow-lg">
                        <LazyImage
                          src={otherProject.image}
                          alt={otherProject.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#7391c8] transition-colors">
                        {otherProject.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{otherProject.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.section>
          )}
        </article>
      </main>
    </div>
  )
}
