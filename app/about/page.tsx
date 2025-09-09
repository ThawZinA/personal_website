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
import { timeline } from "@/data/constants"

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

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navigation isSoundEnabled={isSoundEnabled} onToggleSound={toggleSound} />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-12">
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
                    className="text-xl md:text-[38px] leading-[1.6] font-bold text-gray-900 dark:text-white leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  >
                    About <span className="text-[#7391c8]">Me</span>
                  </motion.h1>

                  <motion.p
                    className="text-base text-justify text-gray-600 dark:text-gray-400 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    An introvert and a minimalist who just happened to fall in love with web design and frontend development. Initially a medical student, I started my journey into IT in 2015.
                  </motion.p>
                  <motion.p
                    className="text-base text-justify text-gray-600 dark:text-gray-400 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    I started designing and building websites in 2016. I never stoped learning how to make clean, responsive and user-friendly digital experience. I believe in the power of clean code, beautiful design, and user-centered thinking.
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
                      className="w-full rounded-xs shadow-sm"
                    />
                    <LazyImage
                      src="/images/about_designer.png"
                      alt="Designer"
                      className="w-full rounded-xs shadow-xs"
                    />
                  </div>
                  <div className="space-y-4 pt-8">
                    <LazyImage src="/images/about_teacher.png" alt="Teacher" className="w-full rounded-xs shadow-lg" />
                    <LazyImage
                      src="/images/about_cat_lover.png"
                      alt="Cat Lover"
                      className="w-full rounded-sx shadow-md"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        

        {/* Timeline Section */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
                          className="mb-16"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6 }}
                          viewport={{ once: true }}
                        >
                          <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-8 relative">
                           My <span className="text-[#7391c8] mx-2">Journey</span>
                            <motion.div
                                    className="absolute bg-[#7391c8] -bottom-2 left-0 right-0 h-[2px] rounded-full"
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ delay: 0.8, duration: 0.6 }}
                                  />
                          </h2>
                          
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
        <section className="py-20 dark:bg-gray-800/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="max-w-4xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                          className="mb-16"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6 }}
                          viewport={{ once: true }}
                        >
                          <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-8 relative">
                           Beyond the <span className="text-[#7391c8] mx-2">Code</span>
                            <motion.div
                                    className="absolute bg-[#7391c8] -bottom-2 left-0 right-0 h-[2px] rounded-full"
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ delay: 0.8, duration: 0.6 }}
                                  />
                          </h2>
                          
            </motion.div>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-justify">
                  <div className="w-16 h-16 bg-[#7391c8]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Coffee className="w-8 h-8 text-[#7391c8]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Tea Lover</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    I believe the best code is written with a perfect cup of coffee. Always exploring new brewing
                    methods and coffee shops.
                  </p>
                </div>
                <div className="text-justify">
                  <div className="w-16 h-16 bg-[#7391c8]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-[#7391c8]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Cat Lover</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Proud cat parent who finds inspiration in the curiosity and independence of feline friends.
                  </p>
                </div>
                <div className="text-justify">
                  <div className="w-16 h-16 bg-[#7391c8]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-[#7391c8]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Mentor</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Passionate about sharing knowledge and helping aspiring developers start their coding journey.
                  </p>
                </div>
              </div>
              
            </motion.div>
          </div>
        </section>

      </main>
    </div>
  )
}
