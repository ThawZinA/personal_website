"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ExternalLink, Github } from "lucide-react"
import { LazyImage } from "../components/lazy-image"
import { Navigation } from "../components/navigation"
import { Footer } from "../components/footer"
import { useSoundEffects } from "../hooks/useSoundEffects"
import { getFeaturedProjects } from "../data/projects"
import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"
import { skills } from "@/data/constants"

export default function HomePage() {
  const [isSoundEnabled, setIsSoundEnabled] = useState(true)
  const { playHover, playClick } = useSoundEffects(isSoundEnabled)

  const featuredProjects = getFeaturedProjects()

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
        <section className="pt-16 bg-gray-50 dark:bg-gray-800/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
              {/* Hero Content */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="space-y-4">
                  <motion.div
                    className="flex max-w-[60%] justify-between items-center bg-[#7391c8]/30rounded"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  > 
                    <span className="text-bold">___________________</span>
                    <Link href="https://github.com/ThawZinA" className="mr-4">
                      <GitHubLogoIcon  className="hover:scale-130 transition-transform" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/thaw-zin-ag419/" className="mr-6">
                      <LinkedInLogoIcon className="hover:scale-130 transition-transform" />
                    </Link>
                    <Link href="https://www.instagram.com/__thaw_/" className="mr-4">
                      <InstagramLogoIcon className="hover:scale-130 transition-transform" />
                    </Link>
                  </motion.div>

                  <motion.h1
                    className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    Web Designer &{" "}
                    <span className="text-[#7391c8] relative">
                      Developer
                      <motion.div
                        className="absolute -bottom-2 left-0 right-0 h-1 bg-[#7391c8]/30 rounded-full"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                      />
                    </span>
                  </motion.h1>

                  <motion.p
                    className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    I create beautiful, functional, and user-centered digital experiences. With a passion for clean code
                    and elegant design, I bring ideas to life through modern web technologies.
                  </motion.p>
                </div>

                <motion.div
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  <Link href="/works">
                    <Button
                      size="lg"
                      className="bg-[#7391c8] hover:bg-[#5f7ab8] text-white px-8 group"
                      onMouseEnter={playHover}
                      onClick={playClick}
                    >
                      View My Work
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
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
                    className="max-w-[350px] h-auto rounded-2xl"
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
        <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Skills & <span className="text-[#7391c8]">Expertise</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                I work with a variety of technologies and tools to bring ideas to life. Here's what I'm proficient in.
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
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Featured <span className="text-[#7391c8]">Works</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Here are some of my recent projects that showcase my skills and passion for creating exceptional digital
                experiences.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {featuredProjects.slice(0, 3).map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link href={`/works/${project.id}`}>
                    <Card
                      className="group cursor-pointer bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-[#7391c8] dark:hover:border-[#7391c8] transition-all duration-300 hover:shadow-xl hover:-translate-y-2 h-full"
                      onMouseEnter={playHover}
                      onClick={playClick}
                    >
                      <CardContent className="p-0 h-full flex flex-col">
                        <div className="aspect-video overflow-hidden rounded-t-lg">
                          <LazyImage
                            src={project.image}
                            alt={`${project.title} preview`}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                          <div className="flex items-center justify-between mb-3">
                            <Badge
                              variant="secondary"
                              className="bg-[#7391c8]/10 text-[#7391c8] border border-[#7391c8]/20"
                            >
                              {project.category}
                            </Badge>
                            <Badge
                              variant="secondary"
                              className="text-xs bg-yellow-100 text-yellow-800 border-yellow-200"
                            >
                              Featured
                            </Badge>
                          </div>

                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#7391c8] transition-colors">
                            {project.title}
                          </h3>

                          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2 flex-1">
                            {project.description}
                          </p>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.slice(0, 3).map((tag) => (
                              <Badge
                                key={tag}
                                variant="outline"
                                className="text-xs border-gray-300 dark:border-gray-600"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          <div className="flex items-center justify-between pt-2 border-t border-gray-200 dark:border-gray-700">
                            <div className="flex gap-2">
                              {project.liveUrl && (
                                <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                                  <ExternalLink className="w-3 h-3" />
                                  <span>Live</span>
                                </div>
                              )}
                              {project.githubUrl && (
                                <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                                  <Github className="w-3 h-3" />
                                  <span>Code</span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
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
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
