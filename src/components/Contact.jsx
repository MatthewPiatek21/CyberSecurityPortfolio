'use client'
import { useEffect, useState } from 'react'
import { FaEnvelope } from 'react-icons/fa'

const Contact = () => {
  const [animationComplete, setAnimationComplete] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const contactMethod = {
    title: 'Email',
    value: 'matthewpiatekdev@gmail.com',
    icon: <FaEnvelope size={24} />,
    link: 'mailto:matthewpiatekdev@gmail.com'
  }

  return (
    <div style={{ 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      width: '100%',
      marginTop: '-10vh',
      position: 'relative'
    }}>
      <div className="flex flex-col gap-0 items-center" 
           style={{ 
             marginTop: '-15vh',
             width: '100%',
             maxWidth: '1200px',
             display: 'flex',
             flexDirection: 'column',
             alignItems: 'center'
           }}>
        <div style={{ marginBottom: '0.1rem', textAlign: 'center' }}>
          <span style={{ 
              fontSize: '16px',
              fontFamily: 'Poppins, system-ui, sans-serif',
              fontWeight: '500',
              letterSpacing: '0.1em',
              color: '#999999'
            }}>
            CONTACT ME
          </span>
        </div>
        <h1 className="text-white tracking-tight text-center" 
            style={{ 
              fontSize: '4.8rem',
              fontFamily: 'Poppins, system-ui, sans-serif',
              fontWeight: '700',
              letterSpacing: '-0.02em',
              marginTop: '-0.8rem',
              color: '#8BFFC6'
            }}>
          Get In Touch
        </h1>
        <h2 style={{ 
              fontSize: '16px',
              fontFamily: 'Poppins, system-ui, sans-serif',
              fontWeight: '400',
              lineHeight: '1.5',
              marginTop: '-52px',
              maxWidth: '650px',
              color: '#999999',
              textAlign: 'center'
            }}>
          Feel free to reach out through my email, or click the GitHub and LinkedIn links at the top of the page!
        </h2>

        <div style={{ marginTop: '4rem', width: '100%', maxWidth: '600px', display: 'flex', justifyContent: 'center' }}>
          <div 
            style={{
              padding: '2rem',
              backgroundColor: '#1a1a1a',
              borderRadius: '0.5rem',
              border: '2px solid #8BFFC6',
              width: '100%'
            }}
          >
            <div style={{ 
              display: 'flex', 
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div>
                <h3 style={{ 
                  color: '#8BFFC6', 
                  fontSize: '1.5rem', 
                  fontWeight: '500',
                  marginBottom: '0.5rem',
                  fontFamily: 'Poppins, system-ui, sans-serif'
                }}>
                  {contactMethod.title}
                </h3>
                <p style={{ 
                  color: '#999999', 
                  fontSize: '1.25rem',
                  fontFamily: 'Poppins, system-ui, sans-serif'
                }}>
                  {contactMethod.value}
                </p>
              </div>
              <div style={{ color: '#8BFFC6' }}>
                {contactMethod.icon}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact 