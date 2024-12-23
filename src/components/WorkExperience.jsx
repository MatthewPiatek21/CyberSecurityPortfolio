'use client'
import { useEffect, useState } from 'react'
import { FaCode, FaCloud, FaServer } from 'react-icons/fa'
import Image from 'next/image'

const ExperienceBlocks = () => {
  const experience = {
    title: "Junior Software Developer Internship",
    institution: "Novum Soft Limited",
    period: "March 2022 - January 2023",
    icon: <FaCode size={24} />,
    achievements: [
      "Reduced deployment times by 30% by configuring virtual machines, databases, and cloud storage across AWS, Azure, and GCP",
      "Improved performance and reduced downtime by 25% using monitoring tools like CloudWatch, Azure Monitor, and Google Cloud Operations",
      "Enhanced team efficiency by 20% through CI/CD practices, configuring environments, and managing version control with Git",
      "Streamlined cloud infrastructure, achieving 98% uptime using AWS CloudFormation, ARM templates, and Google Cloud Deployment Manager",
      "Accelerated software releases and ensured reliable deployments by supporting CI/CD pipelines with AWS Code Pipeline, Azure DevOps, and Google Cloud Build",
      "Launched three client-facing applications using Node.js, React/Angular, and languages like JavaScript, TypeScript, Python, and Java"
    ]
  }

  return (
    <div style={{ marginTop: '4rem' }}>
      <div 
        style={{
          padding: '1.4rem',
          backgroundColor: '#1a1a1a',
          borderRadius: '0.5rem',
          border: '2px solid #8BFFC6',
          transition: 'box-shadow 0.3s ease',
          maxWidth: '900px',
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
          justifyContent: 'space-between',
          marginBottom: '1.4rem'
        }}>
          <div>
            <h3 style={{ 
              color: '#8BFFC6', 
              fontSize: '1.2rem',
              fontWeight: '500',
              marginBottom: '0.3rem',
              fontFamily: 'Poppins, system-ui, sans-serif'
            }}>
              {experience.title}
            </h3>
            <p style={{ 
              color: '#999999', 
              fontSize: '1.1rem',
              marginBottom: '0.5rem',
              fontFamily: 'Poppins, system-ui, sans-serif'
            }}>
              {experience.institution}
            </p>
            <p style={{ 
              color: '#666666', 
              fontSize: '1rem',
              fontFamily: 'Poppins, system-ui, sans-serif'
            }}>
              {experience.period}
            </p>
          </div>
          <div style={{ color: '#8BFFC6' }}>
            {experience.icon}
          </div>
        </div>
        <div style={{ marginTop: '1rem' }}>
          {experience.achievements.map((achievement, index) => (
            <div 
              key={index} 
              style={{
                color: '#999999',
                fontSize: '1rem',
                fontFamily: 'Poppins, system-ui, sans-serif',
                marginBottom: '0.7rem',
                display: 'flex',
                alignItems: 'baseline',
                gap: '1rem'
              }}
            >
              <span style={{ color: '#8BFFC6', fontSize: '1.1rem' }}>•</span>
              {achievement}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const WorkExperience = () => {
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
            EXPERIENCE
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
          Work
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
          My professional work experience in Cybersecurity and Software Development.
        </h2>

        <div style={{
          display: 'flex',
          gap: '4rem',
          alignItems: 'flex-start',
          marginTop: '2rem'
        }}>
          <ExperienceBlocks />

          <div style={{
            position: 'relative',
            width: '600px',
            height: '600px',
            marginLeft: '2rem',
            marginTop: '-4rem'
          }}>
            <Image
              src="/images/coding.svg"
              alt="Coding illustration"
              fill
              style={{ 
                objectFit: 'contain',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkExperience 