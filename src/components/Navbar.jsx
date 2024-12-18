'use client'
import { useEffect, useState } from 'react'
import { Github, Linkedin } from 'lucide-react'

const Navbar = ({ currentSection }) => {
  const [sectionText, setSectionText] = useState('Home')
  const [commandText, setCommandText] = useState('')
  const [isTypingCommand, setIsTypingCommand] = useState(false)
  const baseText = 'sysadmin@Matthew_Piatek_Portfolio'

  useEffect(() => {
    setIsTypingCommand(true)
    setCommandText('')
    let currentIndex = 0
    const command = `cd ${currentSection}`
    
    const typingInterval = setInterval(() => {
      if (currentIndex < command.length) {
        setCommandText(command.slice(0, currentIndex + 1))
        currentIndex++
      } else {
        clearInterval(typingInterval)
        setTimeout(() => {
          setCommandText('')
          setSectionText(currentSection)
          setIsTypingCommand(false)
        }, 100)
      }
    }, 50)

    return () => clearInterval(typingInterval)
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
        fontSize: '16px',
        padding: '48px 48px 48px 96px',
        fontFamily: '"Ubuntu Mono", "DejaVu Sans Mono", "Lucida Console", monospace',
        position: 'relative',
      }}>
        <code>
          {baseText} {sectionText} % {commandText}
        </code>
        <div style={{ position: 'absolute', right: '350px', top: '50%', transform: 'translateY(-50%)', display: 'flex', gap: '4rem' }}>
          <a href="https://github.com/MatthewPiatek21" target="_blank" rel="noopener noreferrer">
            <Github style={{ color: '#ffffff', width: '35px', height: '35px' }} strokeWidth={1} />
          </a>
          <a href="https://www.linkedin.com/in/matthew-piatek-9951591a6/" target="_blank" rel="noopener noreferrer">
            <Linkedin style={{ color: '#ffffff', width: '35px', height: '35px' }} strokeWidth={1} />
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 