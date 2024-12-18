'use client'
import { useEffect, useState } from 'react'

const Projects = () => {
  const [animationComplete, setAnimationComplete] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div style={{ 
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      paddingLeft: '15vw',
      minHeight: '100vh',
      width: '100vw',
      position: 'relative',
      left: '50%',
      transform: 'translateX(-50%)'
    }}>
      <div className="flex flex-col gap-4">
        <h1 className="text-white tracking-tight" 
            style={{ 
              fontSize: '6rem',
              fontFamily: 'Poppins, system-ui, sans-serif',
              fontWeight: '700',
              letterSpacing: '-0.02em',
            }}>
          Projects
        </h1>
        <h2 className="text-white/90 max-w-lg" 
            style={{ 
              fontSize: '2rem',
              fontFamily: 'Poppins, system-ui, sans-serif',
              fontWeight: '400',
              lineHeight: '1.4',
              marginTop: '-65px',
              opacity: animationComplete ? 1 : 0,
              transform: `translateY(${animationComplete ? '0' : '20px'})`,
              transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out',
            }}>
          Featured Works and Personal Projects
        </h2>
      </div>
    </div>
  )
}

export default Projects 