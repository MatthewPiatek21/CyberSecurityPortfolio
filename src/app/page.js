'use client'
import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Introduction from '@/components/Introduction'
import WorkExperience from '@/components/WorkExperience'
import Projects from '@/components/Projects'
import Technologies from '@/components/Technologies'
import ScrollIndicator from '@/components/ScrollIndicator'
import Contact from '@/components/Contact'

export default function Home() {
  const [currentSection, setCurrentSection] = useState('Home')

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-50% 0px',  // Trigger when section is half visible
      threshold: 0
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id
          const sectionMap = {
            'home': 'Home',
            'introduction': 'Intro',
            'experience': 'Work_Experience',
            'projects': 'Projects',
            'technologies': 'Technologies',
            'contact': 'Contact'
          }
          setCurrentSection(sectionMap[sectionId])
        }
      })
    }, options)

    const sections = document.querySelectorAll('section')
    sections.forEach(section => observer.observe(section))

    return () => {
      sections.forEach(section => observer.unobserve(section))
    }
  }, [])

  return (
    <div className="relative w-full bg-black">
      <Navbar currentSection={currentSection} />
      <ScrollIndicator />
      <div className="pt-[144px]">
        <section id="home" className="min-h-screen">
          <Hero />
        </section>
        <section id="introduction">
          <Introduction />
        </section>
        <section id="experience">
          <WorkExperience />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="technologies">
          <Technologies />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </div>
  )
} 