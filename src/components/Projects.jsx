'use client'
import { useEffect, useState } from 'react'
import { FaGithub, FaLaptopCode, FaGlobe } from 'react-icons/fa'
import Image from 'next/image'

const ProjectCard = ({ name, description, image, source_code_link, tags }) => {
  useEffect(() => {
    const shineKeyframes = `
      @keyframes tagShine {
        0% { background-position: 200% center; }
        100% { background-position: -200% center; }
      }
    `;
    const style = document.createElement('style');
    style.textContent = shineKeyframes;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div
      style={{
        backgroundColor: '#1a1a1a',
        padding: '1.4rem',
        borderRadius: '0.75rem',
        width: '400px',
        border: '2px solid #8BFFC6',
        transition: 'all 0.3s ease',
        position: 'relative'
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'scale(1.05)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'scale(1)'
      }}
    >
      <div style={{ position: 'relative', width: '100%', height: '250px' }}>
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            style={{ 
              objectFit: 'cover',
              borderRadius: '1rem'
            }}
          />
        ) : (
          <div style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#1a1a1a',
            borderRadius: '1rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: '2px solid #8BFFC6',
          }}>
            <span style={{
              color: '#8BFFC6',
              fontSize: '1.6rem',
              fontWeight: '700',
              fontFamily: 'Poppins, system-ui, sans-serif',
              textAlign: 'center'
            }}>
              You're Already Here!
            </span>
          </div>
        )}

        <div style={{
          position: 'absolute',
          inset: '0',
          display: 'flex',
          justifyContent: 'flex-end',
          margin: '0.75rem'
        }}>
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            style={{
              background: 'linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%)',
              width: '3rem',
              height: '3rem',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
              transition: 'transform 0.6s ease-in-out',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'rotateY(360deg)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'rotateY(0deg)'
            }}
          >
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'linear-gradient(45deg, transparent 40%, rgba(139, 255, 198, 0.2) 50%, transparent 60%)',
              backgroundSize: '200% 200%',
              animation: 'shine 3s infinite'
            }} />
            <FaGithub color="#8BFFC6" size={25} style={{ position: 'relative', zIndex: 1 }} />
          </div>
        </div>
      </div>

      <div style={{ marginTop: '1.2rem' }}>
        <h3 style={{ 
          color: '#8BFFC6',
          fontSize: '1.25rem',
          fontWeight: '700',
          fontFamily: 'Poppins, system-ui, sans-serif'
        }}>
          {name}
        </h3>
        <p style={{ 
          marginTop: '0.5rem',
          color: '#999999',
          fontSize: '0.9rem',
          fontFamily: 'Poppins, system-ui, sans-serif',
          lineHeight: '1.6'
        }}>
          {description}
        </p>
      </div>

      <div style={{ 
        marginTop: '1rem',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.5rem'
      }}>
        {tags.map((tag) => {
          const tagColors = {
            python: '#4B8BBE',      // Python blue
            pyqt6: '#41CD52',       // Qt green
            security: '#FF3E00',     // Security red
            react: '#61DAFB',       // React blue
            javascript: '#F7DF1E',   // JavaScript yellow
            typescript: '#3178C6',   // TypeScript blue
            node: '#339933',        // Node.js green
            express: '#000000',     // Express black
            mongodb: '#47A248',     // MongoDB green
            sql: '#00758F',         // SQL blue
            html: '#E34F26',        // HTML orange
            css: '#1572B6',         // CSS blue
            tailwind: '#06B6D4'     // Tailwind cyan
          };

          return (
            <span
              key={tag.name}
              style={{
                color: tagColors[tag.name.toLowerCase()] || '#8BFFC6',
                fontSize: '0.9rem',
                fontFamily: 'Poppins, system-ui, sans-serif',
                fontWeight: '600',
                padding: '0.25rem 0',
              }}
            >
              #{tag.name}
            </span>
          );
        })}
      </div>
    </div>
  )
}

const ProjectBlocks = () => {
  const projects = [
    {
      name: "AntiVirus Scanner",
      description: "Cross-platform antivirus solution with real-time file scanning and threat detection capabilities. Features memory-efficient scanning algorithms and secure file quarantine system.",
      tags: [
        { name: "python" },
        { name: "pyqt6" },
        { name: "security" }
      ],
      image: "/images/antivirus.jpeg",
      source_code_link: "https://github.com/MatthewPiatek21/AntiVirusLite.git",
    },
    {
      name: "Portfolio Website",
      description: "Modern portfolio showcasing my projects and skills, built with Next.js and TailwindCSS. Features responsive design, smooth animations, and interactive elements.",
      tags: [
        { name: "react" },
        { name: "javascript" },
      ],
      source_code_link: "https://github.com/MatthewPiatek21/CyberSecurityPortfolio.git",
    }
  ]

  return (
    <div style={{ 
      marginTop: '3rem',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '1.6rem',
      justifyContent: 'flex-start'
    }}>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  )
}

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
            PROJECTS
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
          My Projects
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
          Showcasing my technical projects with a focus on Cybersecurity and Software Development.
        </h2>

        <ProjectBlocks />
      </div>
    </div>
  )
}

export default Projects 