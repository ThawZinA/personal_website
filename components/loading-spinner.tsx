"use client"

export function LoadingSpinner({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  }

  return (
    <div className="flex items-center justify-center p-8 bg-gray-50 dark:bg-gray-100 rounded border-2 border-gray-200 dark:border-gray-300">
      <div className="flex flex-col items-center gap-3">
        <div className="relative">
          <div
            className={`${sizeClasses[size]} border-4 border-gray-300 dark:border-gray-400 pixel-spinner`}
            style={{
              borderTopColor: "#7391c8",
              borderRadius: "0",
              boxShadow: "2px 2px 0px rgba(115, 145, 200, 0.3)",
              animation: "pixelSpin 1s linear infinite",
            }}
          />
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              animation: "pixelPulse 1.5s ease-in-out infinite",
            }}
          >
            <div className="w-2 h-2 bg-[#7391c8] border border-gray-400"></div>
          </div>
        </div>
        <div className="flex items-center gap-1 pixel-dots">
          <span className="text-xs font-mono font-bold text-gray-600 dark:text-gray-700">LOADING</span>
          <span className="text-xs font-mono font-bold text-gray-600 dark:text-gray-700">.</span>
          <span className="text-xs font-mono font-bold text-gray-600 dark:text-gray-700">.</span>
          <span className="text-xs font-mono font-bold text-gray-600 dark:text-gray-700">.</span>
        </div>
      </div>
    </div>
  )
}

export function SectionLoadingSkeleton() {
  return (
    <div className="animate-pulse bg-gray-50 dark:bg-gray-100 p-6 rounded border-2 border-gray-200 dark:border-gray-300">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-8 h-8 bg-gray-300 dark:bg-gray-400 border-2 border-gray-400 dark:border-gray-500"></div>
        <div className="h-6 bg-gray-300 dark:bg-gray-400 border-2 border-gray-400 dark:border-gray-500 w-48"></div>
      </div>
      <div className="space-y-4">
        <div className="h-4 bg-gray-300 dark:bg-gray-400 border-2 border-gray-400 dark:border-gray-500 w-full"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-400 border-2 border-gray-400 dark:border-gray-500 w-3/4"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-400 border-2 border-gray-400 dark:border-gray-500 w-1/2"></div>
      </div>
    </div>
  )
}

export function TimelineLoadingSkeleton() {
  return (
    <div className="w-full max-w-6xl mx-auto py-12 bg-gray-50 dark:bg-gray-100 rounded border-2 border-gray-200 dark:border-gray-300">
      <div className="animate-pulse">
        {/* Title skeleton */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="w-8 h-8 bg-gray-300 dark:bg-gray-400 border-2 border-gray-400 dark:border-gray-500"></div>
            <div className="h-8 bg-gray-300 dark:bg-gray-400 border-2 border-gray-400 dark:border-gray-500 w-64"></div>
            <div className="w-8 h-8 bg-gray-300 dark:bg-gray-400 border-2 border-gray-400 dark:border-gray-500"></div>
          </div>
        </div>

        {/* Timeline cards skeleton */}
        <div className="px-16">
          <div className="flex gap-6 pb-4">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="flex items-center flex-shrink-0">
                <div
                  className="bg-gray-300 dark:bg-gray-400 border-4 border-gray-400 dark:border-gray-500 p-6 w-72 h-48"
                  style={{ boxShadow: "4px 4px 0px rgba(0,0,0,0.3)" }}
                >
                  <div className="flex flex-col items-center justify-center text-center h-full space-y-3">
                    <div className="w-12 h-12 bg-gray-400 dark:bg-gray-500 border-2 border-gray-500 dark:border-gray-600"></div>
                    <div className="h-6 bg-gray-400 dark:bg-gray-500 border-2 border-gray-500 dark:border-gray-600 w-32"></div>
                    <div className="h-4 bg-gray-400 dark:bg-gray-500 border-2 border-gray-500 dark:border-gray-600 w-24"></div>
                    <div className="h-4 bg-gray-400 dark:bg-gray-500 border-2 border-gray-500 dark:border-gray-600 w-full"></div>
                  </div>
                </div>
                {index < 2 && (
                  <div className="flex items-center mx-4 flex-shrink-0">
                    <div className="flex gap-1">
                      <div className="w-3 h-3 bg-gray-400 dark:bg-gray-500 border-2 border-gray-500 dark:border-gray-600"></div>
                      <div className="w-3 h-3 bg-gray-400 dark:bg-gray-500 border-2 border-gray-500 dark:border-gray-600"></div>
                      <div className="w-3 h-3 bg-gray-400 dark:bg-gray-500 border-2 border-gray-500 dark:border-gray-600"></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Loading spinner at bottom */}
        <div className="flex justify-center mt-8">
          <div className="relative">
            <div
              className="w-6 h-6 border-4 border-gray-400 dark:border-gray-500 pixel-spinner"
              style={{
                borderTopColor: "#7391c8",
                borderRadius: "0",
                boxShadow: "2px 2px 0px rgba(115, 145, 200, 0.3)",
                animation: "pixelSpin 1s linear infinite",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export function ProjectCardSkeleton() {
  return (
    <div
      className="animate-pulse bg-gray-50 dark:bg-gray-100 border-4 border-gray-300 dark:border-gray-400"
      style={{ boxShadow: "4px 4px 0px rgba(0,0,0,0.3)" }}
    >
      <div className="h-64 bg-gray-300 dark:bg-gray-400 border-b-4 border-gray-400 dark:border-gray-500 flex items-center justify-center">
        <div className="relative">
          <div
            className="w-8 h-8 border-4 border-gray-400 dark:border-gray-500 pixel-spinner"
            style={{
              borderTopColor: "#7391c8",
              borderRadius: "0",
              boxShadow: "2px 2px 0px rgba(115, 145, 200, 0.3)",
              animation: "pixelSpin 1s linear infinite",
            }}
          />
        </div>
      </div>
      <div className="p-6 space-y-3">
        <div className="h-6 bg-gray-300 dark:bg-gray-400 border-2 border-gray-400 dark:border-gray-500 w-3/4"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-400 border-2 border-gray-400 dark:border-gray-500 w-full"></div>
      </div>
    </div>
  )
}
