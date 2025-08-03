"use client"

import { lazy, Suspense } from "react"
import { TimelineLoadingSkeleton } from "./loading-spinner"

const Timeline = lazy(() => import("./timeline").then((module) => ({ default: module.Timeline })))

export function TimelineLazy() {
  return (
    <Suspense fallback={<TimelineLoadingSkeleton />}>
      <Timeline />
    </Suspense>
  )
}
