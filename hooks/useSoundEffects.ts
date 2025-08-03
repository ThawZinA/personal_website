"use client"

import { useCallback, useRef } from "react"

export function useSoundEffects(soundEnabled = true) {
  const audioContextRef = useRef<AudioContext | null>(null)

  const createBeep = useCallback(
    (frequency: number, duration: number, volume = 0.1) => {
      if (!soundEnabled) return // Don't play sound if disabled

      try {
        if (!audioContextRef.current) {
          audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)()
        }

        const audioContext = audioContextRef.current
        const oscillator = audioContext.createOscillator()
        const gainNode = audioContext.createGain()

        oscillator.connect(gainNode)
        gainNode.connect(audioContext.destination)

        oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime)
        oscillator.type = "sine"

        gainNode.gain.setValueAtTime(0, audioContext.currentTime)
        gainNode.gain.linearRampToValueAtTime(volume, audioContext.currentTime + 0.01)
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + duration)

        oscillator.start(audioContext.currentTime)
        oscillator.stop(audioContext.currentTime + duration)
      } catch (error) {
        // Silently fail if audio context is not supported
        console.warn("Audio context not supported:", error)
      }
    },
    [soundEnabled],
  )

  const playHover = useCallback(() => {
    createBeep(800, 0.1, 0.05)
  }, [createBeep])

  const playClick = useCallback(() => {
    createBeep(1000, 0.15, 0.08)
  }, [createBeep])

  const playSuccess = useCallback(() => {
    createBeep(1200, 0.2, 0.1)
  }, [createBeep])

  const playError = useCallback(() => {
    createBeep(400, 0.3, 0.1)
  }, [createBeep])

  return {
    playHover,
    playClick,
    playSuccess,
    playError,
  }
}
