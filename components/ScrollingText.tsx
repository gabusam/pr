'use client'

import { useEffect, useRef } from 'react'
import { useIntersectionObserver } from '@/lib/hooks/useIntersectionObserver'
import { trackEvent } from '@/lib/utils/analytics'
import type { ScrollingTextItem } from '@/types'

const SplitText = ({ children, className }: { children: string, className?: string }) => {
  return (
    <span className={className}>
      {children.split('').map((char, i) => (
        <span 
          key={i} 
          className="reveal-char opacity-50 inline-block transition-opacity duration-300"
          data-index={i}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  )
}

export default function ScrollingText() {
  const textRefs = useRef<(HTMLDivElement | null)[]>([])
  const { ref, isVisible } = useIntersectionObserver()

  useEffect(() => {
    if (isVisible) {
      trackEvent('section_view', { section: 'scrolling_text' })
    }
  }, [isVisible])

  useEffect(() => {
    const handleScroll = () => {
      textRefs.current.forEach((textElement) => {
        if (!textElement) return

        const rect = textElement.getBoundingClientRect()
        const elementTop = rect.top
        const elementHeight = rect.height
        const windowHeight = window.innerHeight

        let progress = (windowHeight - elementTop) / (windowHeight + elementHeight)
        progress = Math.min(Math.max(progress, 0), 1)

        const chars = textElement.querySelectorAll('.reveal-char')
        const totalChars = chars.length
        const charsToReveal = Math.floor(progress * totalChars * 1.5)

        chars.forEach((char, charIndex) => {
          if (charIndex <= charsToReveal) {
            ;(char as HTMLElement).style.opacity = '1'
          } else {
            ;(char as HTMLElement).style.opacity = '0.5'
          }
        })

        if (textElement.classList.contains('first-text')) {
          textElement.style.transform = `scale(${0.9 + (progress * 0.1)})`
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div ref={ref} className="max-w-[600px] mx-auto px-4 py-32">
      <div className="space-y-16">
        <div 
          ref={(el) => (textRefs.current[0] = el)}
          className="first-text opacity-50 transition-all duration-700"
        >
          <h2 className="text-[44px] leading-tight font-bold text-center">
            <SplitText>
              Pressing
            </SplitText>
            <span className="inline-flex items-center justify-center bg-blue-600 text-white rounded-full w-14 h-14 mx-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            <SplitText>
              play isn't enough.
            </SplitText>
          </h2>
        </div>

        <div 
          ref={(el) => (textRefs.current[1] = el)}
          className="text-reveal"
        >
          <h2 className="text-[44px] leading-tight font-bold text-center">
            <SplitText>
              Teams are choosing Arcade over video and seeing
            </SplitText>
            <span className="inline-flex items-center justify-center bg-white shadow-md rounded-full px-4 py-2 mx-2">7.2x</span>
            <SplitText>
              higher engagement.
            </SplitText>
          </h2>
        </div>

        <div 
          ref={(el) => (textRefs.current[2] = el)}
          className="text-reveal"
        >
          <h2 className="text-[44px] leading-tight font-bold text-center">
            <SplitText>
              Why? Videos are resource intensive, hard to update
            </SplitText>
            <span className="inline-flex items-center justify-center bg-red-500 text-white rounded-full px-4 py-2 text-sm mx-2">● REC</span>
            <SplitText>
              and passive.
            </SplitText>
          </h2>
        </div>

        <div 
          ref={(el) => (textRefs.current[3] = el)}
          className="text-reveal"
        >
          <h2 className="text-[44px] leading-tight font-bold text-center">
            <SplitText>
              With Arcade, the median time to publish is 6 minutes.
            </SplitText>
            <span className="inline-flex items-center justify-center bg-gray-900 text-white rounded-full w-14 h-14 ml-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            </span>
          </h2>
        </div>

        <div 
          ref={(el) => (textRefs.current[4] = el)}
          className="text-reveal"
        >
          <h2 className="text-[44px] leading-tight font-bold text-center">
            <SplitText>
              Your demo is a live asset that can be updated at any time.
            </SplitText>
          </h2>
        </div>

        <div 
          ref={(el) => (textRefs.current[5] = el)}
          className="text-reveal"
        >
          <h2 className="text-[44px] leading-tight font-bold text-center">
            <SplitText>
              You don't need to be an expert to create something be
            </SplitText>
            <span className="text-blue-600">a</span>
            <SplitText>
              utiful.
            </SplitText>
          </h2>
        </div>
      </div>
    </div>
  )
}