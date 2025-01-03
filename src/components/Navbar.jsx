'use client'
import { useEffect, useState, useRef } from 'react'
import { Github, Linkedin } from 'lucide-react'

const Navbar = ({ currentSection }) => {
  const [scale, setScale] = useState(1)
  const [sectionText, setSectionText] = useState('~')
  const [commandText, setCommandText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const baseText = 'sysadmin@Matthew_Piatek_Portfolio'
  const typingInterval = useRef(null)

  useEffect(() => {
    const handleResize = () => {
      const viewportWidth = window.innerWidth
      if (viewportWidth <= 768) {
        setScale(0.7)
      } else if (viewportWidth <= 1024) {
        setScale(0.85)
      } else {
        setScale(1)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    // Clear any existing interval
    if (typingInterval.current) {
      clearInterval(typingInterval.current)
    }

    setIsTyping(true)
    setCommandText('')
    let fullCommand = `cd ${currentSection}`
    let currentIndex = 0

    // Start typing animation
    typingInterval.current = setInterval(() => {
      if (currentIndex <= fullCommand.length) {
        setCommandText(fullCommand.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval.current)
        // Wait before completing command
        setTimeout(() => {
          setCommandText('')
          setSectionText(currentSection)
          setIsTyping(false)
        }, 100)
      }
    }, 50)

    // Cleanup
    return () => {
      if (typingInterval.current) {
        clearInterval(typingInterval.current)
      }
    }
  }, [currentSection])

  return (
    <nav style={{ 
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1000,
      backgroundColor: '#1a1a1a',
    }}>
      <div style={{ 
        color: '#ffffff',
        fontSize: `${14 * scale}px`,
        padding: `${38.4 * scale}px ${38.4 * scale}px ${38.4 * scale}px ${76.8 * scale}px`,
        fontFamily: '"Ubuntu Mono", "DejaVu Sans Mono", "Lucida Console", monospace',
        position: 'relative',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        minHeight: '77px',
      }}>
        <div style={{ 
          maxWidth: '70%',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        }}>
          <code>
            {baseText} {sectionText} % {isTyping && commandText}
            {isTyping && <span className="cursor">▋</span>}
          </code>
        </div>
        <div style={{ 
          display: 'flex', 
          gap: `${3 * scale}rem`,
          marginLeft: '2rem',
          position: 'absolute',
          right: `${12 * scale}rem`,
          top: '50%',
          transform: 'translateY(-50%)'
        }}>
          <a href="https://github.com/MatthewPiatek21" 
             target="_blank" 
             rel="noopener noreferrer"
             style={{
               display: 'flex',
               alignItems: 'center'
             }}>
            <Github 
              style={{ 
                color: '#ffffff', 
                width: `${28 * scale}px`,
                height: `${28 * scale}px` 
              }} 
              strokeWidth={1} 
            />
          </a>
          <a href="https://www.linkedin.com/in/matthew-piatek-9951591a6/" 
             target="_blank" 
             rel="noopener noreferrer"
             style={{
               display: 'flex',
               alignItems: 'center'
             }}>
            <Linkedin 
              style={{ 
                color: '#ffffff', 
                width: `${28 * scale}px`,
                height: `${28 * scale}px` 
              }} 
              strokeWidth={1} 
            />
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 