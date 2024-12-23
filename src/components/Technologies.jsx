'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

const TechnologyBlocks = () => {
  const technologies = [
    // Column 1
    [
      { name: 'Python', logo: '/images/python.svg' },
      { name: 'Java', logo: '/images/java.svg' },
      { name: 'JavaScript', logo: '/images/JS.svg' },
      { name: 'TypeScript', logo: '/images/TS.svg' },
      { name: 'Git', logo: '/images/git.svg' },
    ],
    // Column 2
    [
      { name: 'React', logo: '/images/react.svg' },
      { name: 'HTML', logo: '/images/html.svg' },
      { name: 'CSS', logo: '/images/CSS.svg' },
      { name: 'SQL', logo: '/images/SQL.svg' },
      { name: 'Linux', logo: '/images/linux.svg' },
    ],
    // Column 3 - Security Tools
    [
      { name: 'Ghidra', logo: '/images/ghidra.svg' },
      { name: 'Wireshark', logo: '/images/wireshark.svg' },
      { name: 'SNORT', logo: '/images/snort.svg' },
      { name: 'Burp Suite', logo: '/images/burp.svg' },
    ]
  ]

  return (
    <div style={{
      marginTop: '2rem',
      display: 'flex',
      gap: '3.2rem',
      alignItems: 'flex-start'
    }}>
      <div style={{
        display: 'flex',
        gap: '1.6rem'
      }}>
        {technologies.map((column, columnIndex) => (
          <div key={columnIndex} style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.9rem'
          }}>
            {column.map((tech, techIndex) => (
              <div
                key={techIndex}
                style={{
                  padding: '0.9rem',
                  width: '230px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.9rem',
                  transition: 'all 0.3s ease',
                }}
              >
                <div style={{
                  width: '52px',
                  height: '52px',
                  position: 'relative'
                }}>
                  <Image
                    src={tech.logo}
                    alt={`${tech.name} logo`}
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <span style={{
                  color: '#999999',
                  fontSize: '1.25rem',
                  fontWeight: '500',
                  fontFamily: 'Poppins, system-ui, sans-serif'
                }}>
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div style={{
        position: 'relative',
        width: '525px',
        height: '525px',
        marginLeft: '1.6rem',
        marginTop: '-4rem'
      }}>
        <Image
          src="/images/code.png"
          alt="Code illustration"
          fill
          style={{ 
            objectFit: 'contain',
          }}
        />
      </div>
    </div>
  )
}

const Technologies = () => {
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
      paddingLeft: '15.5vw',
      paddingTop: '12vh',
      minHeight: '100vh',
      width: '100vw',
      position: 'relative',
      left: '50%',
      transform: 'translateX(-50%)'
    }}>
      <div className="flex flex-col gap-0">
        <div style={{ marginBottom: '0.1rem' }}>
          <span style={{ 
              fontSize: '16px',
              fontFamily: 'Poppins, system-ui, sans-serif',
              fontWeight: '500',
              letterSpacing: '0.1em',
              color: '#999999'
            }}>
            TECHNOLOGIES
          </span>
        </div>
        <h1 className="text-white tracking-tight" 
            style={{ 
              fontSize: '4.8rem',
              fontFamily: 'Poppins, system-ui, sans-serif',
              fontWeight: '700',
              letterSpacing: '-0.02em',
              marginTop: '-0.8rem',
              color: '#8BFFC6'
            }}>
          My Stack
        </h1>
        <h2 style={{ 
              fontSize: '16px',
              fontFamily: 'Poppins, system-ui, sans-serif',
              fontWeight: '400',
              lineHeight: '1.5',
              marginTop: '-52px',
              maxWidth: '650px',
              color: '#999999'
            }}>
          The technologies, tools, and programming languages I use to bring ideas to life.
        </h2>
        <TechnologyBlocks />
      </div>
    </div>
  )
}

export default Technologies 