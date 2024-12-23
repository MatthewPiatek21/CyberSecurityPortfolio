'use client'
import { useEffect, useState } from 'react'
import { FaGraduationCap, FaShieldAlt, FaChartLine } from 'react-icons/fa'
import { IoRibbonSharp } from 'react-icons/io5'

const EducationBlocks = () => {
  const education = [
    {
      title: "Bachelor's of Computer Science",
      institution: "DePaul University",
      period: "September 2019 - June 2023",
      icon: <FaGraduationCap size={24} />
    },
    {
      title: "Minor in Data Science",
      institution: "DePaul University",
      period: "2019 - 2023",
      icon: <FaChartLine size={24} />
    },
    {
      title: "Cyber Security Bootcamp",
      institution: "Northwestern University",
      period: "September 2024 - March 2025",
      icon: <FaShieldAlt size={24} />
    },
    {
      title: "Security+ Certificate",
      institution: "CompTIA",
      period: "Expected 2025",
      icon: <IoRibbonSharp size={24} />
    },
    {
      title: "Network+ Certificate",
      institution: "CompTIA",
      period: "Expected 2025",
      icon: <IoRibbonSharp size={24} />
    }
  ]

  return (
    <div style={{ 
      marginTop: '4rem',
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '1.2rem',
      maxWidth: '800px'
    }}>
      {education.map((item, index) => (
        <div 
          key={index}
          style={{
            padding: '1.2rem',
            backgroundColor: '#1a1a1a',
            borderRadius: '0.5rem',
            border: '2px solid #8BFFC6',
            transition: 'box-shadow 0.3s ease',
            maxWidth: '380px',
            boxShadow: '0 0 0 0 rgba(139, 255, 198, 0)'
          }}
          onMouseEnter={e => {
            e.currentTarget.style.boxShadow = '0 0 30px 0 rgba(139, 255, 198, 0.5)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.boxShadow = '0 0 0 0 rgba(139, 255, 198, 0)'
          }}
        >
          <div style={{ 
            display: 'flex', 
            alignItems: 'flex-start',
            justifyContent: 'space-between'
          }}>
            <div>
              <h3 style={{ 
                color: '#8BFFC6', 
                fontSize: '1.1rem',
                fontWeight: '500',
                marginBottom: '0.2rem',
                fontFamily: 'Poppins, system-ui, sans-serif'
              }}>
                {item.title}
              </h3>
              <p style={{ 
                color: '#999999', 
                fontSize: '1rem',
                marginBottom: '0.4rem',
                fontFamily: 'Poppins, system-ui, sans-serif'
              }}>
                {item.institution}
              </p>
              <p style={{ 
                color: '#666666', 
                fontSize: '0.9rem',
                fontFamily: 'Poppins, system-ui, sans-serif'
              }}>
                {item.period}
              </p>
            </div>
            <div style={{ color: '#8BFFC6' }}>
              {item.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

const Introduction = () => {
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
            INTRODUCTION
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
          Overview
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
          Passionate Cybersecurity Professional focused on defensive programming and threat detection. With expertise in security tools and secure development, I bring safety to innovation while building robust solutions.
        </h2>

        <EducationBlocks />
      </div>
    </div>
  )
}

export default Introduction 