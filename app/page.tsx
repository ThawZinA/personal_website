"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GitHubLogoIcon, LinkedInLogoIcon, InstagramLogoIcon, ArrowRightIcon, SunIcon, MoonIcon, DownloadIcon } from "@radix-ui/react-icons"
import { LazyImage } from "../components/lazy-image"
import { Navigation } from "../components/navigation"
import { useSoundEffects } from "../hooks/useSoundEffects"
import { getFeaturedProjects } from "../data/projects"
import { skills, socialLinks } from "@/data/constants"
import { cn } from "@/lib/utils"
import Image from "next/image"

export default function HomePage() {
  const [isSoundEnabled, setIsSoundEnabled] = useState(true)
  const { playHover, playClick } = useSoundEffects(isSoundEnabled)
  
  const featuredProjects = getFeaturedProjects()
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    // Listen for theme changes
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"))
    }
    checkDarkMode()
    const observer = new MutationObserver(checkDarkMode)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const savedSound = localStorage.getItem("soundEnabled")
    if (savedSound !== null) {
      setIsSoundEnabled(savedSound === "true")
    }
  }, [])

  const toggleSound = () => {
    const newSoundState = !isSoundEnabled
    setIsSoundEnabled(newSoundState)
    localStorage.setItem("soundEnabled", newSoundState.toString())
  }

  return (
    <div className="min-h-screen max-w-7xl mx-auto bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navigation isSoundEnabled={isSoundEnabled} onToggleSound={toggleSound} />

      <main>
        {/* Hero Section */}
        <section className="pt-16 dark:bg-gray-800/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
              {/* Hero Content */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="space-y-4 pt-4">
                  <motion.div
                    className="flex max-w-[60%] justify-between items-center rounded"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  > 
                    <span className="text-bold">___________________</span>
                    {socialLinks.map((social) => (
                                      <Link
                                        href={social.href}
                                        key={social.label}
                                        className={`hover:scale-110`}
                                        aria-label={social.label}
                                      >
                                        <social.icon className={`w-4 h-4 ${social.color}`} />
                                      </Link>
                                    ))}
                  </motion.div>

                  <motion.h1
                    className="text-xl md:text-[38px] leading-[1.6] font-bold text-gray-900 dark:text-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    Hi, I'm {" "}
                    <span className="text-[#7391c8] relative">
                      Thaw Zin Aung {" "}
                      <motion.div
                        className="absolute -bottom-2 left-0 right-0 h-1 bg-[#7391c8]/30 rounded-full"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                      />
                    </span>
                  </motion.h1>

                  <motion.p
                    className="text-base pt-6 dark:text-gray-400 italic leading-relaxed max-w-2xl text-justify"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    --a frontend developer and designer crafting modern, accessible web experiences.
                  </motion.p>
                </div>

                <motion.div
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  <Button
                    size="lg"
                    className="bg-[#7391c8] hover:bg-[#5f7ab8] text-white px-8"
                    onMouseEnter={playHover}
                    onClick={() => {
                      playClick()
                      window.open("/thawzinag_cv.pdf", "_blank")
                    }}
                  >
                    <DownloadIcon className="mr-2 w-4 h-4" />
                    Download CV
                  </Button>
                </motion.div>
              </motion.div>

              {/* Hero Image */}
              <motion.div
                className="relative flex justify-center"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative z-10">
                  <LazyImage
                    src="/images/hero.png"
                    alt="Thaw Zin Aung - Web Designer & Developer"
                    className="max-w-[320px] h-auto"
                  />
                </div>
                <motion.div
                  className="absolute -top-4 -right-4 max-w-[350px] h-auto"
                  animate={{
                    y: [0, -10, 0],
                    x: [0, 5, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-12 dark:bg-gray-800/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >  
              <h2 className="text-xl flex items-center md:text-2xl font-bold text-gray-900 dark:text-white mb-8 relative"> {isDarkMode ? <MoonIcon className="block mr-2 text-sky-300"  width="20" height="20"/> : <SunIcon className="block mr-2 text-yellow-400" width="20" height="20" />}{" "}
                Skills & <span className="text-[#7391c8] ml-2">Expertise</span>
                <motion.div
                  className="absolute bg-[#7391c8] -bottom-2 left-0 right-0 h-[2px] rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                 />
              </h2>
              <p className="text-base text-gray-600 dark:text-gray-400 max-w-2xl text-justify">
                Aside from courses included in my degree, I've taken <span className="font-semibold">Joy Of React </span>,<span className="font-semibold">Meta Front-End Developer Professional Certificate</span>, <span className="font-semibold">Google UX Design Professional Certificate</span> to enhance my skills.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              
              {Object.entries(skills).map(([category, skillList], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 capitalize">
                        {category === "frontend" ? "Frontend" : category === "backend" ? "Backend" : category}
                      </h3>
                      <div className="space-y-2">
                        {skillList.map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="mr-2 mb-2 bg-[#7391c8]/10 text-[#7391c8] border border-[#7391c8]/20"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Works Section */}
        <section className="py-12 dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl flex items-center md:text-2xl font-bold text-gray-900 dark:text-white mb-8 relative">
                {isDarkMode ? <MoonIcon className="block mr-2 text-sky-300"  width="20" height="20"/> : <SunIcon className="block mr-2 text-yellow-400" width="20" height="20" />}{" "}
                Featured <span className="text-[#7391c8] ml-2">Works</span>
                <motion.div
                  className="absolute bg-[#7391c8] -bottom-2 left-0 right-0 h-[2px] rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                 />
              </h2>
              <p className="text-base text-gray-600 dark:text-gray-400 max-w-2xl">
                I'd like to stay busy and keep learning, or working on something new. Here are some of my recent works.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {featuredProjects.slice(0, 4).map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link href={`/works/${project.id}`}>
                    <Card
                      className="group cursor-pointer bg-white dark:bg-gray-800 transition-all duration-300  hover:-translate-y-2 h-full"
                      onMouseEnter={playHover}
                      onClick={playClick}
                    >
                      <CardContent className="p-0 h-full flex flex-col">
                        <div className="aspect-video overflow-hidden rounded-t-sm">
                          <LazyImage
                            src={project.image}
                            alt={`${project.title} preview`}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#7391c8] transition-colors">
                            {project.title}
                          </h3>

                          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2 flex-1">
                            {project.description}
                          </p>
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-[#7391c8] text-[#7391c8] hover:bg-[#7391c8] hover:text-white"
                              onMouseEnter={playHover}
                              onClick={playClick}
                            >
                              View Project
                              <ArrowRightIcon className="ml-2 w-4 h-4" />
                            </Button>
                          
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link href="/works">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-[#7391c8] text-[#7391c8] hover:bg-[#7391c8] hover:text-white px-8 group bg-transparent"
                  onMouseEnter={playHover}
                  onClick={playClick}
                >
                  View All Projects
                  <ArrowRightIcon className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div> */}
          </div>
        </section>
      
      {/* Contact Section */}
      <section className="py-12 dark:bg-gray-800/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl flex items-center md:text-2xl font-bold text-gray-900 dark:text-white mb-8 relative">
                {isDarkMode ? <MoonIcon className="block mr-2 text-sky-300"  width="20" height="20"/> : <SunIcon className="block mr-2 text-yellow-400" width="20" height="20" />}{" "}
                Let's <span className="text-[#7391c8] mx-2">Build</span> Something Together
                <motion.div
                        className="absolute bg-[#7391c8] -bottom-2 left-0 right-0 h-[2px] rounded-full"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                      />
              </h2>
              
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <motion.div
                className="col-span-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <p className="text-base text-gray-600 dark:text-gray-400">
                  Feel free to reach out if you are looking for a developer, have a question or just want to connect. I'm always happy for new opportunities, collaborations, and friends.
                </p>
                <Link type="email" href="mailto:thawzinag419@gmail.com" className="font-bold text-[#7391c8] hover:underline transition-all">
                  thawzinag419@gmail.com
                </Link>
                <p className="text-base text-gray-600 dark:text-gray-400 my-6">Aside from github and linkedin, you can find more side of me on instagram.</p>
                 <motion.div
                    className="flex max-w-[60%] justify-between items-center rounded"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  > 
                    <span className="text-bold">___________________</span>
                    {socialLinks.map((social) => (
                                      <Link
                                        href={social.href}
                                        key={social.label}
                                        className={`hover:scale-110`}
                                        aria-label={social.label}
                                      >
                                        <social.icon className={`w-4 h-4 ${social.color}`} />
                                      </Link>
                                    ))}
                  </motion.div>
              </motion.div>
              {/* Masonry photo grid in the last column */}
              <motion.div
                className="col-span-1 hidden md:block"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
              <Image src="/images/masonary_3.jpg" alt="Photo 3" className="object-cover  col-span-2 row-span-1 w-[100%] h-[200px]" width={200} height={180}  />
 
              </motion.div>
              
            </div>
          </div>
        </section>
      </main>           
    </div>
  )
}
