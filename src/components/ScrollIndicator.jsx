'use client'
import { useEffect, useState } from 'react'

const ScrollIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      const maxHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrolled / maxHeight)
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
    }}>
      {/* Top horizontal line */}
      <div style={{
        position: 'absolute',
        left: '12vw',
        top: '73.9vh',
        width: '27vw',
        height: '3.4px',
        backgroundColor: '#8BFFC6',
      }} />

      {/* Hero section line (down) */}
      <div style={{
        position: 'absolute',
        left: '12vw',
        top: '73.9vh',
        height: '31.5vh',
        width: '3px',
        backgroundColor: '#8BFFC6',
      }} />

      {/* Hero to Introduction connector (right) */}
      <div style={{
        position: 'absolute',
        left: '12vw',
        top: '105vh',
        width: '76vw',
        height: '3px',
        backgroundColor: '#8BFFC6',
      }} />

      {/* Introduction section line (down) */}
      <div style={{
        position: 'absolute',
        right: '12vw',
        top: '105vh',
        height: '105vh',
        width: '3px',
        backgroundColor: '#8BFFC6',
      }} />

      {/* Introduction to Projects connector (left) */}
      <div style={{
        position: 'absolute',
        right: '12vw',
        top: '210vh',
        width: '76vw',
        height: '3px',
        backgroundColor: '#8BFFC6',
      }} />

      {/* Projects section line (down) */}
      <div style={{
        position: 'absolute',
        left: '12vw',
        top: '210vh',
        height: '100vh',
        width: '3px',
        backgroundColor: '#8BFFC6',
      }} />

      {/* Projects to Technologies connector (up) */}
      <div style={{
        position: 'absolute',
        left: '12vw',
        top: '310vh',
        width: '76vw',
        height: '3px',
        backgroundColor: '#8BFFC6',
      }} />

      {/* Technologies section line (down) */}
      <div style={{
        position: 'absolute',
        right: '12vw',
        top: '310vh',
        height: '100vh',
        width: '3px',
        backgroundColor: '#8BFFC6',
      }} />

      {/* Technologies top connector (left) */}
      <div style={{
        position: 'absolute',
        right: '12vw',
        top: '410vh',
        width: '76vw',
        height: '3px',
        backgroundColor: '#8BFFC6',
      }} />

      {/* Final vertical line */}
      <div style={{
        position: 'absolute',
        left: '12vw',
        top: '410vh',
        height: '100vh',
        width: '3px',
        backgroundColor: '#8BFFC6',
      }} />

      {/* Ethernet Cable Head */}
      <div style={{
        position: 'absolute',
        left: '12vw',
        top: '510vh',
        transform: 'translateX(-50%)',
        width: '24px',
        height: '40px',
        backgroundColor: '#1a1a1a',
        border: '2px solid #8BFFC6',
        borderRadius: '2px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        padding: '4px',
        marginTop: '-2px',  // To connect with the line
      }}>
        {/* Ethernet pins */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            style={{
              width: '100%',
              height: '2px',
              backgroundColor: '#8BFFC6',
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default ScrollIndicator 