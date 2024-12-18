'use client'
import { useEffect, useState } from 'react'

const ScrollIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    let frameId
    const handleScroll = () => {
      if (frameId) {
        cancelAnimationFrame(frameId)
      }

      frameId = requestAnimationFrame(() => {
        const scrolled = window.scrollY
        const maxHeight = document.documentElement.scrollHeight - window.innerHeight
        const progress = (scrolled / maxHeight)
        setScrollProgress(progress * 100)
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (frameId) {
        cancelAnimationFrame(frameId)
      }
    }
  }, [])

  return (
    <div style={{
      position: 'fixed',
      left: '12vw',
      top: '10vh',
      height: '80vh',
      width: '3px',
      backgroundColor: '#8BFFC6',
      zIndex: 9999,
    }}>
      <div style={{
        position: 'absolute',
        top: `${scrollProgress}%`,
        left: '-6px',
        width: '15px',
        height: '15px',
        backgroundColor: '#8BFFC6',
        borderRadius: '50%',
        boxShadow: '0 0 20px rgba(139, 255, 198, 1)',
      }} />
    </div>
  )
}

export default ScrollIndicator 