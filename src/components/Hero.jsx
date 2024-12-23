'use client'
import { useEffect, useState } from 'react'
import TerminalText from './TerminalText'

const Hero = () => {
  const [animationComplete, setAnimationComplete] = useState(false)

  const computerArt = `
     ____________________________
    !\\_________________________/!\\
    !!                         !! \\
    !!                         !!  \\
    !!                         !!  ! 
    !!                         !!  ! 
    !!                         !!  ! 
    !!                         !!  !
    !!                         !!  !
    !!                         !!  /
    !!_________________________!! /
    !/_________________________\\!/
       __\\_________________/__
      !_______________________!
    ________________________
   /oooo  oooo  oooo  oooo /!
  /ooooooooooooooooooooooo/ /
 /ooooooooooooooooooooooo/ /
/_______________________/_/

  `

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
      paddingTop: '2.4vh',
      paddingLeft: '14.4vw',
      minHeight: 'calc(100vh - 77px)',
      width: '100vw',
      position: 'relative',
      left: '50%',
      transform: 'translateX(-50%)'
    }}>
      <div className="flex flex-col gap-0">
        <div style={{ marginLeft: '3vw' }}>
          <h1 className="text-white tracking-tight" 
              style={{ 
                fontSize: '5.2rem',
                fontFamily: 'Poppins, system-ui, sans-serif',
                fontWeight: '700',
                letterSpacing: '-0.02em',
              }}>
            Hello, I'm <span style={{
              color: animationComplete ? '#8BFFC6' : '#ffffff',
              transition: 'color 1s ease-in-out'
            }}>
              Matthew
            </span>
          </h1>
          <h2 className="text-white/90 max-w-lg" 
              style={{ 
                fontSize: '1.8rem',
                fontFamily: 'Poppins, system-ui, sans-serif',
                fontWeight: '400',
                lineHeight: '1.4',
                marginTop: '-52px'
              }}>
            I Specialize in Cyber Security,<br />
            Software Development, and Web Applications
          </h2>
        </div>
        <div style={{
          position: 'absolute',
          left: '77%',
          transform: 'translateX(-50%)',
          marginTop: '-6rem',
          width: 'fit-content',
          position: 'relative'
        }}>
          <pre style={{
            fontFamily: 'monospace',
            whiteSpace: 'pre',
            color: '#8BFFC6',
            fontSize: '33px',
            lineHeight: '1',
            letterSpacing: '0',
            transform: 'scale(0.9)',
            transformOrigin: 'center center',
          }}>
            {computerArt}
          </pre>
          <TerminalText />
        </div>
      </div>
    </div>
  )
}

export default Hero 