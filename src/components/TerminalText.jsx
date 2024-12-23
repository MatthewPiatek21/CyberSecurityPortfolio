'use client'
import { useEffect, useState } from 'react'

const TerminalText = () => {
  const [lines, setLines] = useState([''])
  const [currentLine, setCurrentLine] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)
  const [isTyping, setIsTyping] = useState(false)

  const textLines = [
    '> Welcome to my portfolio!',
    '> Take a look around'
  ]

  // Handle typing animation
  useEffect(() => {
    // Initial delay before typing starts
    const startDelay = setTimeout(() => {
      setIsTyping(true)
    }, 1000)

    return () => clearTimeout(startDelay)
  }, [])

  // Handle the typing animation
  useEffect(() => {
    if (!isTyping) return
    if (currentLine >= textLines.length) return

    const typeNextChar = () => {
      if (currentIndex < textLines[currentLine].length) {
        setLines(prev => {
          const newLines = [...prev]
          newLines[currentLine] = textLines[currentLine].slice(0, currentIndex + 1)
          return newLines
        })
        setCurrentIndex(prev => prev + 1)
      } else {
        if (currentLine < textLines.length - 1) {
          setTimeout(() => {
            setCurrentLine(prev => prev + 1)
            setCurrentIndex(0)
            setLines(prev => [...prev, ''])
          }, 500)
        }
      }
    }

    const typingTimeout = setTimeout(typeNextChar, 50)
    return () => clearTimeout(typingTimeout)
  }, [currentIndex, currentLine, isTyping])

  // Handle cursor blinking
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <div style={{
      position: 'absolute',
      top: '140px',
      left: '155px',
      fontFamily: 'monospace',
      fontSize: '16px',
      color: '#8BFFC6',
      whiteSpace: 'pre',
      lineHeight: '1.5',
      maxWidth: '180px'
    }}>
      {lines.map((line, i) => (
        <div key={i}>
          {line}
          {i === currentLine && (
            currentLine === textLines.length - 1 || 
            currentIndex < textLines[currentLine].length
          ) && showCursor && '_'}
        </div>
      ))}
    </div>
  )
}

export default TerminalText 