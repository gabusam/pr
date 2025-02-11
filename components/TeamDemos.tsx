'use client'

import { useState, useEffect } from 'react'
import { useIntersectionObserver } from '@/lib/hooks/useIntersectionObserver'
import { trackEvent } from '@/lib/utils/analytics'
import type { TeamDemo } from '@/types'

export default function TeamDemos() {
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(100)
  const { ref, isVisible } = useIntersectionObserver()

  const phrases = [
    'Demos for the team',
    'Demos for the world',
    'Demos for the people'
  ]

  useEffect(() => {
    if (isVisible) {
      trackEvent('section_view', { section: 'team_demos' })
    }
  }, [isVisible])

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % phrases.length
      const fullText = phrases[i]

      setText(current => {
        if (isDeleting) {
          const nextText = fullText.substring(0, current.length - 1)
          if (nextText === 'Demos for ') {
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setTypingSpeed(100)
          }
          return nextText
        } else {
          const nextText = fullText.substring(0, current.length + 1)
          if (nextText === fullText) {
            setTypingSpeed(100)
            setTimeout(() => setIsDeleting(true), 2000)
          }
          return nextText
        }
      })
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum, typingSpeed, phrases])

  return (
    <div ref={ref} className="text-center py-24 px-4">
      <h2 className="text-[56px] leading-tight font-bold text-gray-900 mb-6 min-h-[140px] flex items-center justify-center">
        <span>{text}</span>
        <span className="w-[3px] h-[56px] bg-blue-600 ml-2 animate-[blink_1.06s_steps(2)_infinite]" />
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Arcade makes building, collaborating, and scaling seamless, no matter your team size.
      </p>
    </div>
  )
}