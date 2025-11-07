'use client'

import { useEffect, useState } from 'react'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

interface CountdownTimerProps {
  targetDate: string
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const target = new Date(targetDate).getTime()
      const difference = target - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  if (!mounted) {
    return null // Évite les erreurs d'hydratation
  }

  return (
    <div className="inline-flex gap-2 items-center">
      {/* Badge Première Édition */}
      <div className="bg-accent-600/10 border border-accent-600/30 px-3 py-1.5 mr-2">
        <span className="text-accent-600 text-[10px] tracking-[0.2em] uppercase font-light">
          Première Édition
        </span>
      </div>

      {/* Compte à rebours */}
      <div className="flex gap-2">
        <TimeUnit value={timeLeft.days} label="j" />
        <span className="text-accent-600/50 text-lg">:</span>
        <TimeUnit value={timeLeft.hours} label="h" />
        <span className="text-accent-600/50 text-lg">:</span>
        <TimeUnit value={timeLeft.minutes} label="m" />
        <span className="text-accent-600/50 text-lg">:</span>
        <TimeUnit value={timeLeft.seconds} label="s" />
      </div>
    </div>
  )
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-black/30 border border-accent-600/20 w-12 h-12 flex items-center justify-center">
        <span className="text-accent-600 text-xl font-light tabular-nums">
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <span className="text-accent-600/60 text-[9px] tracking-wider uppercase mt-1">{label}</span>
    </div>
  )
}
