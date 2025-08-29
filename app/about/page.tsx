"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, Heart, Coffee, Code, Palette, Users } from "lucide-react"
import Link from "next/link"
import { LazyImage } from "../../components/lazy-image"
import { Navigation } from "../../components/navigation"
import { Footer } from "../../components/footer"
import { useSoundEffects } from "../../hooks/useSoundEffects"

export default function AboutPage() {
  const [isSoundEnabled, setIsSoundEnabled] = useState(true)
  const { playHover, playClick } = useSoundEffects(isSoundEnabled)

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

  const skills = {
    frontend: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion"],
    backend: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Supabase", "Firebase"],
    tools: ["Git", "Docker", "Figma", "Adobe XD", "VS Code", "Vercel", "Netlify"],
    design: ["UI/UX Design", "Responsive Design", "Prototyping", "Wireframing", "User Research"],
  }

  const timeline = [
    {
      year: "2024",
      title: "Senior Full Stack Developer",
      company: "Freelance",
      description: "Leading complex web development projects and mentoring junior developers.",
    },
    {
      year: "2023",
      title: "Full Stack Developer",
      company: "Tech Solutions Inc.",
      description: "Developed scalable web applications using modern technologies and best practices.",
    },
    {
      year: "2022",
      title: "Frontend Developer",
      company: "Digital Agency",
      description: "Created responsive and interactive user interfaces for various client projects.",
    },
    {
      year: "2021",
      title: "Junior Web Developer",
      company: "StartupXYZ",
      description: "Started my professional journey building websites and learning industry standards.",
    },
  ]

  const stats = [
    { label: "Projects Completed", value: "50+", icon: Code },
    { label: "Happy Clients", value: "30+", icon: Users },
    { label: "Years Experience", value: "3+", icon: Coffee },
    { label: "Technologies", value: "20+", icon: Palette },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navigation isSoundEnabled={isSoundEnabled} onToggleSound={toggleSound} />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="space-y-4">
                  <motion.h1
                    className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  >
                    About <span className="text-[#7391c8]">Me</span>
                  </motion.h1>

                  <motion.p
                    className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    I'm a passionate web designer and developer with over 3 years of experience creating digital
                    experiences that make a difference. I believe in the power of clean code, beautiful design, and
                    user-centered thinking.
                  </motion.p>

                  <motion.p
                    className="text-gray-600 dark:text-gray-400 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    When I'm not coding, you'll find me exploring new technologies, contributing to open-source
                    projects, or enjoying a good cup of coffee while sketching new ideas. I'm always eager to learn and
                    take on new challenges.
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
                    <Download className="mr-2 w-4 h-4" />
                    Download CV
                  </Button>
                  <Link href="/contact">
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-[#7391c8] text-[#7391c8] hover:bg-[#7391c8] hover:text-white px-8 bg-transparent"
                      onMouseEnter={playHover}
                      onClick={playClick}
                    >
                      Let's Talk
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <LazyImage
                      src="/images/about_web_developer.png"
                      alt="Web Developer"
                      className="w-full rounded-lg shadow-lg"
                    />
                    <LazyImage
                      src="/images/about_designer.png"
                      alt="Designer"
                      className="w-full rounded-lg shadow-lg"
                    />
                  </div>
                  <div className="space-y-4 pt-8">
                    <LazyImage src="/images/about_teacher.png" alt="Teacher" className="w-full rounded-lg shadow-lg" />
                    <LazyImage
                      src="/images/about_cat_lover.png"
                      alt="Cat Lover"
                      className="w-full rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-[#7391c8]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-[#7391c8]" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
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

        {/* Timeline Section */}
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
                My <span className="text-[#7391c8]">Journey</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Here's a timeline of my professional journey and the experiences that shaped me as a developer.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative flex items-center mb-12 last:mb-0"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#7391c8] rounded-full border-4 border-white dark:border-gray-900 z-10"></div>
                  <div className="absolute left-1/2 transform -translate-x-px w-0.5 h-full bg-gray-200 dark:bg-gray-700 -z-10"></div>

                  <div className={`w-5/12 ${index % 2 === 0 ? "pr-8 text-right" : "ml-auto pl-8"}`}>
                    <Card className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
                      <CardContent className="p-6">
                        <div className="text-[#7391c8] font-bold text-lg mb-2">{item.year}</div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                        <div className="text-gray-600 dark:text-gray-400 font-medium mb-3">{item.company}</div>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Personal Touch Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
                Beyond the <span className="text-[#7391c8]">Code</span>
              </h2>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#7391c8]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Coffee className="w-8 h-8 text-[#7391c8]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Coffee Enthusiast</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    I believe the best code is written with a perfect cup of coffee. Always exploring new brewing
                    methods and coffee shops.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#7391c8]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-[#7391c8]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Cat Lover</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Proud cat parent who finds inspiration in the curiosity and independence of feline friends.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#7391c8]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-[#7391c8]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Mentor</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Passionate about sharing knowledge and helping aspiring developers start their coding journey.
                  </p>
                </div>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                I believe that great work comes from passion, curiosity, and continuous learning. When I'm not coding,
                I'm probably reading about the latest web technologies, experimenting with new design trends, or
                planning my next adventure.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Let's Create Something Amazing Together
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                I'm always excited to work on new projects and collaborate with amazing people. Let's discuss how we can
                bring your ideas to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-[#7391c8] hover:bg-[#5f7ab8] text-white px-8"
                    onMouseEnter={playHover}
                    onClick={playClick}
                  >
                    Start a Project
                  </Button>
                </Link>
                <Link href="/works">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-[#7391c8] text-[#7391c8] hover:bg-[#7391c8] hover:text-white px-8 bg-transparent"
                    onMouseEnter={playHover}
                    onClick={playClick}
                  >
                    View My Work
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
