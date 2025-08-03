"use client"

import { useState, useRef, useEffect } from "react"

interface LazyImageProps {
  src: string
  alt: string
  className?: string
  placeholder?: string
  onLoad?: () => void
  onError?: () => void
}

export function LazyImage({
  src,
  alt,
  className = "",
  placeholder = "/placeholder.svg?height=200&width=200&text=Loading...",
  onLoad,
  onError,
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const [hasError, setHasError] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: "50px" },
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleLoad = () => {
    setIsLoaded(true)
    onLoad?.()
  }

  const handleError = () => {
    setHasError(true)
    onError?.()
  }

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      {/* Placeholder/Loading state */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gray-50 dark:bg-gray-100 flex items-center justify-center border-2 border-gray-200 dark:border-gray-300">
          <div className="flex flex-col items-center gap-3">
            {/* Pixel art spinning loader */}
            <div className="relative">
              <div
                className="w-8 h-8 border-4 border-gray-300 dark:border-gray-400 animate-spin pixel-spinner"
                style={{
                  borderTopColor: "#7391c8",
                  borderRadius: "0",
                  boxShadow: "2px 2px 0px rgba(115, 145, 200, 0.3)",
                  animation: "pixelSpin 1s linear infinite",
                }}
              />
              {/* Center dot */}
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  animation: "pixelPulse 1.5s ease-in-out infinite",
                }}
              >
                <div className="w-2 h-2 bg-[#7391c8] border border-gray-400"></div>
              </div>
            </div>
            <span className="text-xs font-mono text-gray-500 dark:text-gray-600 font-bold tracking-wider">
              LOADING...
            </span>
          </div>
        </div>
      )}

      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 bg-gray-50 dark:bg-gray-100 flex items-center justify-center border-2 border-red-300">
          <div className="flex flex-col items-center gap-2">
            <div className="w-8 h-8 bg-red-500 border-2 border-red-700 flex items-center justify-center">
              <span className="text-white font-bold text-xs">✕</span>
            </div>
            <span className="text-xs font-mono text-red-600 font-bold tracking-wider">ERROR</span>
          </div>
        </div>
      )}

      {/* Actual image */}
      {isInView && (
        <img
          src={src || "/placeholder.svg"}
          alt={alt}
          className={`transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"} ${className}`}
          onLoad={handleLoad}
          onError={handleError}
          loading="lazy"
        />
      )}
    </div>
  )
}
