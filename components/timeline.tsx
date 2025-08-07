"use client"

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
    description: "Exploring AI/ML integration, advanced React patterns, and cloud architecture.",
    icon: "🚀",
    delay: 0,
  },
  {
    id: "frontend",
    title: "FRONTEND DEV",
    period: "2021-2022",
    description: "Built responsive web UIs using React.",
    icon: "👨‍💻",
    delay: 200,
  },
  {
    id: "designer",
    title: "UI DESIGNER",
    period: "2020-2021",
    description: "Crafted layouts & branding for startups.",
    icon: "🎨",
    delay: 400,
  },
  {
    id: "tutor",
    title: "TUTOR",
    period: "2019-2020",
    description: "Taught basic web development to students.",
    icon: "💻",
    delay: 600,
  },
  {
    id: "student",
    title: "STUDENT",
    period: "2018-2019",
    description: "Learned programming fundamentals & design.",
    icon: "📚",
    delay: 800,
  },
  {
    id: "explorer",
    title: "EXPLORER",
    period: "2017-2018",
    description: "Discovered passion for web technologies.",
    icon: "🔍",
    delay: 1000,
  },
]

export function Timeline() {
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
        // For mobile, calculate based on card width + gap and center alignment
        const cardWidth = 288 // card width (w-72 = 288px) + gap
        const containerCenter = clientWidth / 2
        const scrollCenter = scrollLeft + containerCenter
        const newIndex = Math.round((scrollCenter - 144) / cardWidth) // 144 is half card width
        setCurrentIndex(Math.max(0, Math.min(newIndex, timelineData.length - 1)))
      } else {
        // For desktop, use existing logic
        const cardWidth = 320 // approximate card width + gap
        const newIndex = Math.round(scrollLeft / cardWidth)
        setCurrentIndex(Math.min(newIndex, timelineData.length - 1))
      }
    }
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener("scroll", updateScrollButtons)
      updateScrollButtons() // Initial check

      return () => container.removeEventListener("scroll", updateScrollButtons)
    }
  }, [isMobile])

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      if (isMobile) {
        // For mobile, scroll to center the card
        const cardWidth = 288 // w-72 = 288px
        const gap = 24 // gap-6 = 24px
        const containerWidth = scrollContainerRef.current.clientWidth
        const cardCenter = index * (cardWidth + gap) + cardWidth / 2
        const scrollPosition = cardCenter - containerWidth / 2

        scrollContainerRef.current.scrollTo({
          left: Math.max(0, scrollPosition),
          behavior: "smooth",
        })
      } else {
        // For desktop, use existing logic
        const cardWidth = 320 // card width + gap
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
      {/* Title */}
      <div
        className={`text-center mb-8 transition-all duration-700 ease-out ${
          timeline.isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="text-2xl">🐾</span>
          <h3 className="text-2xl font-bold text-black dark:text-white font-mono">My Work History</h3>
          <span className="text-2xl">🐾</span>
        </div>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Navigation Buttons - Hidden on mobile */}
        <button
          onClick={scrollLeft}
          disabled={!canScrollLeft}
          className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white dark:bg-gray-800 border-4 border-black dark:border-white transition-all duration-200 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 hidden md:block ${
            canScrollLeft
              ? "hover:shadow-[4px_4px_0px_rgba(0,0,0,0.3)] dark:hover:shadow-[4px_4px_0px_rgba(255,255,255,0.3)]"
              : ""
          }`}
          style={{
            boxShadow: canScrollLeft ? "2px 2px 0px rgba(0,0,0,0.3)" : "none",
          }}
        >
          <ChevronLeft className="w-6 h-6 mx-auto text-black dark:text-white" />
        </button>

        <button
          onClick={scrollRight}
          disabled={!canScrollRight}
          className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white dark:bg-gray-800 border-4 border-black dark:border-white transition-all duration-200 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 hidden md:block ${
            canScrollRight
              ? "hover:shadow-[4px_4px_0px_rgba(0,0,0,0.3)] dark:hover:shadow-[4px_4px_0px_rgba(255,255,255,0.3)]"
              : ""
          }`}
          style={{
            boxShadow: canScrollRight ? "2px 2px 0px rgba(0,0,0,0.3)" : "none",
          }}
        >
          <ChevronRight className="w-6 h-6 mx-auto text-black dark:text-white" />
        </button>

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
          <div
            className={`flex pb-4 ${isMobile ? "gap-6" : "gap-6"}`}
            style={{
              width: isMobile ? "max-content" : "max-content",
              paddingLeft: isMobile ? "calc(50vw - 144px)" : "0", // Center first card on mobile
              paddingRight: isMobile ? "calc(50vw - 144px)" : "0", // Center last card on mobile
            }}
          >
            {timelineData.map((item, index) => (
              <div key={item.id} className="flex items-center flex-shrink-0">
                {/* Timeline Card */}
                <div
                  className={`relative bg-white dark:bg-gray-800 border-4 border-black dark:border-white p-6 w-72 h-48 flex flex-col items-center justify-center text-center transition-all duration-700 ease-out hover:scale-105 hover:shadow-[6px_6px_0px_rgba(0,0,0,0.4)] dark:hover:shadow-[6px_6px_0px_rgba(255,255,255,0.4)] cursor-pointer timeline-card ${
                    timeline.isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  } ${
                    isMobile && index === currentIndex
                      ? "scale-105 shadow-[6px_6px_0px_rgba(0,0,0,0.4)] dark:shadow-[6px_6px_0px_rgba(255,255,255,0.4)]"
                      : ""
                  }`}
                  style={{
                    transitionDelay: timeline.isIntersecting ? `${item.delay}ms` : "0ms",
                    boxShadow:
                      isMobile && index === currentIndex
                        ? "6px 6px 0px rgba(0,0,0,0.4)"
                        : "4px 4px 0px rgba(0,0,0,0.3)",
                  }}
                  onClick={() => scrollToIndex(index)}
                >
                  {/* Icon */}
                  <div className="text-4xl mb-3 pixel-art">{item.icon}</div>

                  {/* Title */}
                  <h4 className="font-bold text-lg mb-1 text-black dark:text-white font-mono tracking-wider">
                    {item.title}
                  </h4>

                  {/* Period */}
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 font-mono">{item.period}</p>

                  {/* Description */}
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed font-mono">
                    {item.description}
                  </p>
                </div>

                {/* Connector Dots (except for last item) */}
                {index < timelineData.length - 1 && (
                  <div className="flex items-center mx-4 flex-shrink-0">
                    <div className="flex gap-1">
                      <div className="w-3 h-3 bg-black dark:bg-white border-2 border-black dark:border-white"></div>
                      <div className="w-3 h-3 bg-black dark:bg-white border-2 border-black dark:border-white"></div>
                      <div className="w-3 h-3 bg-black dark:bg-white border-2 border-black dark:border-white"></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicators */}
        <div className="flex justify-center mt-6 gap-2">
          {timelineData.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`w-4 h-4 border-2 border-black dark:border-white transition-all duration-200 hover:scale-125 ${
                index === currentIndex
                  ? "bg-black dark:bg-white"
                  : "bg-white dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-600"
              }`}
              style={{
                boxShadow: index === currentIndex ? "2px 2px 0px rgba(0,0,0,0.3)" : "1px 1px 0px rgba(0,0,0,0.2)",
              }}
              aria-label={`Go to ${timelineData[index].title}`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className={`mt-4 ${isMobile ? "mx-4" : "mx-16"}`}>
          <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 border-2 border-black dark:border-white">
            <div
              className="h-full bg-black dark:bg-white transition-all duration-300"
              style={{
                width: `${((currentIndex + 1) / timelineData.length) * 100}%`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Mobile Instructions */}
      <div className="text-center mt-4 md:hidden">
        <p className="text-sm text-gray-600 dark:text-gray-400 font-mono">← Swipe to explore timeline →</p>
      </div>
    </div>
  )
}
