'use client'

import { useEffect } from 'react'

export default function ScrollTracker() {
  useEffect(() => {
    let maxScroll = 0

    function handleScroll() {
      const scrollPercent = Math.round(
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      )
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent
        // Track scroll milestones
        if (maxScroll === 25 || maxScroll === 50 || maxScroll === 75 || maxScroll === 100) {
          console.log(`[Analytics] Scroll milestone: ${maxScroll}%`)
        }
      }
    }

    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement
      const trackable = target.closest('[data-track]')
      if (trackable) {
        const action = trackable.getAttribute('data-track')
        console.log(`[Analytics] Click: ${action}`)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    document.addEventListener('click', handleClick)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('click', handleClick)
    }
  }, [])

  return null
}
