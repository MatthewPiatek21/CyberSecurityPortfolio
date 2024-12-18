'use client'
import { useEffect, useState } from 'react'

const Hero = () => {
  const [text, setText] = useState("Hello, I'm *******")
  const [animationComplete, setAnimationComplete] = useState(false)
  const symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@#$%^&*+_-=|\\:;<>,.?/`"
  const finalWord = "Matthew"

  useEffect(() => {
    let position = 0
    let cycles = 0
    
    const interval = setInterval(() => {
      setText(current => {
        const prefix = "Hello, I'm "
        const currentText = current.slice(prefix.length)
        const newText = currentText.split('').map((char, index) => {
          if (index < position) return finalWord[index]
          if (index === position) return symbols[cycles % symbols.length]
          return '*'
        }).join('')
        
        cycles++
        if (cycles % symbols.length === 0) {
          position++
          if (position >= finalWord.length) {
            clearInterval(interval)
            setText(prefix + finalWord)
            setAnimationComplete(true)
            return prefix + finalWord
          }
        }
        
        return prefix + newText
      })
    }, 5)

    return () => clearInterval(interval)
  }, [])

  return (
    <div style={{ 
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      paddingTop: '3vh',
      paddingLeft: '18vw',
      minHeight: 'calc(100vh - 96px)',
      width: '100vw',
      position: 'relative',
      left: '50%',
      transform: 'translateX(-50%)'
    }}>
      <div className="flex flex-col gap-0">
        <h1 className="text-white tracking-tight" 
            style={{ 
              fontSize: '6rem',
              fontFamily: 'Poppins, system-ui, sans-serif',
              fontWeight: '700',
              letterSpacing: '-0.02em',
            }}>
          Hello, I'm <span style={{
            color: animationComplete ? '#8BFFC6' : '#ffffff',
            transition: 'color 1s ease-in-out'
          }}>
            {text.slice(10)}
          </span>
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
          I Specialize in Cyber Security,<br />
          Develop Software, and Web Applications
        </h2>
      </div>
    </div>
  )
}

export default Hero 