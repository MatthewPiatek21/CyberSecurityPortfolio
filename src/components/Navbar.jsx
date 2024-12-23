'use client'
import { useEffect, useState, useRef } from 'react'
import { Github, Linkedin } from 'lucide-react'

const Navbar = ({ currentSection }) => {
  const [sectionText, setSectionText] = useState('~')
  const [commandText, setCommandText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const baseText = 'sysadmin@Matthew_Piatek_Portfolio'
  const typingInterval = useRef(null)

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
        fontSize: '14px',
        padding: '38.4px 38.4px 38.4px 76.8px',
        fontFamily: '"Ubuntu Mono", "DejaVu Sans Mono", "Lucida Console", monospace',
        position: 'relative',
      }}>
        <code>
          {baseText} {sectionText} % {isTyping && commandText}
          {isTyping && <span className="cursor">▋</span>}
        </code>
        <div style={{ 
          position: 'absolute', 
          right: '300px',  // Changed from 350px
          top: '50%', 
          transform: 'translateY(-50%)', 
          display: 'flex', 
          gap: '4rem',
          height: '100%',
          alignItems: 'center'  // Added to center vertically
        }}>
          <a href="https://github.com/MatthewPiatek21" target="_blank" rel="noopener noreferrer">
            <Github style={{ color: '#ffffff', width: '32px', height: '32px' }} strokeWidth={1} />  {/* Increased from 30px */}
          </a>
          <a href="https://www.linkedin.com/in/matthew-piatek-9951591a6/" target="_blank" rel="noopener noreferrer">
            <Linkedin style={{ color: '#ffffff', width: '32px', height: '32px' }} strokeWidth={1} />  {/* Increased from 30px */}
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 