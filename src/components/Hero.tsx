import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

export default function Hero(): React.ReactElement {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <img
          src="/images/profile.jpg"
          alt="Randy - Site Reliability Engineer"
          className="hero-image"
        />
        <div>
          <h1>
            Hi, I'm <span style={{ color: 'var(--highlight-color)' }}>Randy Davis</span>
          </h1>
          <p className="hero-subtitle">
            Research Application Developer & Site Reliability Engineer
          </p>
          <p className="hero-description">
            I specialize in building robust full-stack applications and optimizing data infrastructure.
            From pioneering solutions to successful production deployments, I leverage C#, Python, React/TypeScript,
            and DevOps practices to drive innovation and reliability across the entire product lifecycle.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">
              View My Work <FaArrowRight />
            </button>
            <a href="https://www.linkedin.com/in/thedadshow/" className="btn-secondary">Get In Touch</a>
          </div>
        </div>
      </div>
    </section>
  )
}
