"use client"

import { motion } from "framer-motion"
import { useIntersectionObserver } from "../hooks/useIntersectionObserver"
import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface TimelineItem {
  id: string
  title: string
  period: string
  description: string
  icon: string
  delay: number
}

const timelineData: TimelineItem[] = [
  {
    id: "current-learning",
    title: "CONTINUOUS LEARNING",
    period: "2024-Present",
    description: "Exploring AI integration, advanced React patterns, and web accessibility.",
    icon: "🚀",
    delay: 0,
  },
  {
    id: "frontend",
    title: "FRONTEND DEV",
    period: "2018-2022",
    description: "Built responsive web UIs using JS & React.",
    icon: "👨‍💻",
    delay: 200,
  },
  {
    id: "designer",
    title: "UI DESIGNER",
    period: "2019-2019",
    description: "Crafted layouts & branding for startups.",
    icon: "🎨",
    delay: 400,
  },
  {
    id: "tutor",
    title: "TUTOR",
    period: "2012-2018",
    description: "Tutoring students for matriculation exam.",
    icon: "💻",
    delay: 600,
  },
  {
    id: "student",
    title: "STUDENT",
    period: "2015-2019",
    description: "Learned programming fundamentals & design.",
    icon: "🔍",
    delay: 800,
  }
]

export function EnhancedTimeline() {
  const timeline = useIntersectionObserver({ threshold: 0.2 })
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const updateScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)

      // Update current index based on scroll position
      if (isMobile) {
        const cardWidth = 288
        const containerCenter = clientWidth / 2
        const scrollCenter = scrollLeft + containerCenter
        const newIndex = Math.round((scrollCenter - 144) / cardWidth)
        setCurrentIndex(Math.max(0, Math.min(newIndex, timelineData.length - 1)))
      } else {
        const cardWidth = 320
        const newIndex = Math.round(scrollLeft / cardWidth)
        setCurrentIndex(Math.min(newIndex, timelineData.length - 1))
      }
    }
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener("scroll", updateScrollButtons)
      updateScrollButtons()

      return () => container.removeEventListener("scroll", updateScrollButtons)
    }
  }, [isMobile])

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      if (isMobile) {
        const cardWidth = 288
        const gap = 24
        const containerWidth = scrollContainerRef.current.clientWidth
        const cardCenter = index * (cardWidth + gap) + cardWidth / 2
        const scrollPosition = cardCenter - containerWidth / 2

        scrollContainerRef.current.scrollTo({
          left: Math.max(0, scrollPosition),
          behavior: "smooth",
        })
      } else {
        const cardWidth = 320
        const scrollPosition = index * cardWidth
        scrollContainerRef.current.scrollTo({
          left: scrollPosition,
          behavior: "smooth",
        })
      }
    }
  }

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      if (isMobile) {
        scrollToIndex(Math.max(0, currentIndex - 1))
      } else {
        const cardWidth = 320
        scrollContainerRef.current.scrollBy({
          left: -cardWidth,
          behavior: "smooth",
        })
      }
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      if (isMobile) {
        scrollToIndex(Math.min(timelineData.length - 1, currentIndex + 1))
      } else {
        const cardWidth = 320
        scrollContainerRef.current.scrollBy({
          left: cardWidth,
          behavior: "smooth",
        })
      }
    }
  }

  return (
    <div ref={timeline.ref} className="w-full max-w-6xl mx-auto py-12">
      {/* Title with enhanced animation */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <motion.div
          className="flex items-center justify-center gap-2 mb-2"
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.span
            className="text-2xl"
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatDelay: 3,
            }}
          >
            🐾
          </motion.span>
          <h3 className="text-xl font-medium text-[#7391c8]">My Work History</h3>
          <motion.span
            className="text-xl"
            animate={{
              rotate: [0, -10, 10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatDelay: 3,
              delay: 0.5,
            }}
          >
            🐾
          </motion.span>
        </motion.div>
      </motion.div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Navigation Buttons with enhanced hover effects */}
        <motion.button
          onClick={scrollLeft}
          disabled={!canScrollLeft}
          className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white dark:bg-gray-800 border-4 border-black dark:border-white transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hidden md:block`}
          style={{
            boxShadow: canScrollLeft ? "2px 2px 0px rgba(0,0,0,0.3)" : "none",
          }}
          whileHover={
            canScrollLeft
              ? {
                  scale: 1.1,
                  boxShadow: "4px 4px 0px rgba(0,0,0,0.3)",
                }
              : {}
          }
          whileTap={canScrollLeft ? { scale: 0.95 } : {}}
        >
          <ChevronLeft className="w-6 h-6 mx-auto text-black dark:text-white" />
        </motion.button>

        <motion.button
          onClick={scrollRight}
          disabled={!canScrollRight}
          className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white dark:bg-gray-800 border-4 border-black dark:border-white transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hidden md:block`}
          style={{
            boxShadow: canScrollRight ? "2px 2px 0px rgba(0,0,0,0.3)" : "none",
          }}
          whileHover={
            canScrollRight
              ? {
                  scale: 1.1,
                  boxShadow: "4px 4px 0px rgba(0,0,0,0.3)",
                }
              : {}
          }
          whileTap={canScrollRight ? { scale: 0.95 } : {}}
        >
          <ChevronRight className="w-6 h-6 mx-auto text-black dark:text-white" />
        </motion.button>

        {/* Scrollable Timeline */}
        <div
          ref={scrollContainerRef}
          className={`overflow-x-auto scrollbar-hide py-4 ${
            isMobile ? "px-4 timeline-scroll-mobile" : "px-16 timeline-scroll-desktop"
          }`}
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <motion.div
            className={`flex pb-4 ${isMobile ? "gap-6" : "gap-6"}`}
            style={{
              width: isMobile ? "max-content" : "max-content",
              paddingLeft: isMobile ? "calc(50vw - 144px)" : "0",
              paddingRight: isMobile ? "calc(50vw - 144px)" : "0",
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            {timelineData.map((item, index) => (
              <div key={item.id} className="flex items-center flex-shrink-0">
                {/* Timeline Card with enhanced animations */}
                <motion.div
                  className={`relative bg-white dark:bg-gray-800 border-4 border-black dark:border-white p-18 w-80 h-48 flex flex-col items-center justify-center text-center cursor-pointer timeline-card ${
                    isMobile && index === currentIndex
                      ? "scale-105 shadow-[6px_6px_0px_rgba(0,0,0,0.4)] dark:shadow-[6px_6px_0px_rgba(255,255,255,0.4)]"
                      : ""
                  }`}
                  style={{
                    boxShadow:
                      isMobile && index === currentIndex
                        ? "6px 6px 0px rgba(0,0,0,0.4)"
                        : "4px 4px 0px rgba(0,0,0,0.3)",
                  }}
                  onClick={() => scrollToIndex(index)}
                  variants={{
                    hidden: { opacity: 0, y: 50, scale: 0.8 },
                    visible: { opacity: 1, y: 0, scale: 1 },
                  }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "6px 6px 0px rgba(0,0,0,0.4)",
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{
                    duration: 0.6,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  {/* Icon with bounce animation */}
                  <motion.div
                    className="text-4xl mb-3 pixel-art"
                    whileHover={{
                      scale: 1.2,
                      rotate: [0, -10, 10, 0],
                      transition: { duration: 0.25 },
                    }}
                  >
                    {item.icon}
                  </motion.div>

                  {/* Title */}
                  <motion.h4
                    className="font-bold text-sm mb-1 text-black dark:text-white tracking-wider"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {item.title}
                  </motion.h4>

                  {/* Period */}
                  <motion.p
                    className="text-sm text-gray-600 dark:text-gray-400 mb-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {item.period}
                  </motion.p>

                  {/* Description */}
                  <motion.p
                    className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {item.description}
                  </motion.p>
                </motion.div>

                {/* Connector Dots with stagger animation */}
                {index < timelineData.length - 1 && (
                  <motion.div
                    className="flex items-center mx-4 flex-shrink-0"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.5, duration: 0.3 }}
                  >
                    <div className="flex gap-1">
                      {[0, 1, 2].map((dotIndex) => (
                        <motion.div
                          key={dotIndex}
                          className="w-3 h-3 bg-black dark:bg-white border-2 border-black dark:border-white"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{
                            delay: index * 0.1 + 0.6 + dotIndex * 0.1,
                            duration: 0.2,
                          }}
                          whileHover={{ scale: 1.2 }}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicators with enhanced animations */}
        <motion.div
          className="flex justify-center mt-6 gap-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          {timelineData.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`w-4 h-4 border-2 border-black dark:border-white transition-all duration-200 ${
                index === currentIndex
                  ? "bg-black dark:bg-white"
                  : "bg-white dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-600"
              }`}
              style={{
                boxShadow: index === currentIndex ? "2px 2px 0px rgba(0,0,0,0.3)" : "1px 1px 0px rgba(0,0,0,0.2)",
              }}
              aria-label={`Go to ${timelineData[index].title}`}
              whileHover={{ scale: 1.25 }}
              whileTap={{ scale: 0.9 }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: index * 0.05 + 0.9 }}
            />
          ))}
        </motion.div>

        {/* Progress Bar with smooth animation */}
        <div className={`mt-4 ${isMobile ? "mx-4" : "mx-16"}`}>
          <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 border-2 border-black dark:border-white">
            <motion.div
              className="h-full bg-black dark:bg-white"
              initial={{ width: "0%" }}
              animate={{ width: `${((currentIndex + 1) / timelineData.length) * 100}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </div>
        </div>
      </div>

      {/* Mobile Instructions with fade animation */}
      <motion.div
        className="text-center mt-4 md:hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <p className="text-sm text-gray-600 dark:text-gray-400">← Swipe to explore timeline →</p>
      </motion.div>
    </div>
  )
}
