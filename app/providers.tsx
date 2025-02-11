'use client'

import { ThemeProvider } from 'next-themes'
import { ReactNode, useEffect, useRef } from 'react'

export function Providers({ children }: { children: ReactNode }) {
  const observerRef = useRef<MutationObserver | null>(null)

  useEffect(() => {
    // Clean up any existing observer
    if (observerRef.current) {
      observerRef.current.disconnect()
    }

    // Create new observer
    observerRef.current = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type !== 'attributes') return

        const node = mutation.target as HTMLElement
        const attributeName = mutation.attributeName

        // Handle Grammarly attributes
        if (attributeName?.startsWith('data-gr-')) {
          requestAnimationFrame(() => {
            node.removeAttribute(attributeName)
          })
        }
      })
    })

    // Start observing
    if (document.body) {
      observerRef.current.observe(document.body, {
        attributes: true,
        subtree: true,
        attributeFilter: [
          'data-gr-ext-installed',
          'data-new-gr-c-s-check-loaded',
          'data-gramm',
          'data-gramm_editor',
          'data-gr-id'
        ]
      })
    }

    // Cleanup
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
        observerRef.current = null
      }
    }
  }, [])

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      {children}
    </ThemeProvider>
  )
}