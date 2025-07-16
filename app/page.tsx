'use client'

import { useEffect } from 'react'
import ProfileCard from '@/components/ProfileCard'
import ExperienceSection from '@/components/ExperienceSection'
import SkillsSection from '@/components/SkillsSection'
import ProjectsSection from '@/components/ProjectsSection'

export default function Home() {
  useEffect(() => {
    // Animación de aparición progresiva
    const sections = document.querySelectorAll('.section')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate')
        }
      })
    }, { threshold: 0.1 })

    sections.forEach(section => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Ondas oceánicas */}
      <div className="ocean-waves">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>

      <div className="container">
        <ProfileCard />
        
        <div className="main-content">
          <ExperienceSection />
          <SkillsSection />
          <ProjectsSection />
        </div>
      </div>
    </>
  )
}