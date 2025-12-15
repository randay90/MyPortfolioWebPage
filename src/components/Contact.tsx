import React, { useState, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

export default function Contact(): React.ReactElement {
  const [currentSlide, setCurrentSlide] = useState(0)

  const artImages = [
    {
      id: 1,
      src: '/images/ai-art/ai-art-1.jpg',
      alt: 'The New Modern Man - GQ Magazine Style',
      title: 'The New Modern Man',
    },
    {
      id: 2,
      src: '/images/ai-art/ai-art-2.jpg',
      alt: 'The New Face of Style - GQ Magazine Style',
      title: 'The New Face of Style',
    },
    {
      id: 3,
      src: '/images/ai-art/ai-art-3.jpg',
      alt: 'Modern Gentleman - GQ Magazine Style',
      title: 'Modern Gentleman',
    },
    {
      id: 4,
      src: '/images/ai-art/ai-art-4.jpg',
      alt: 'The Velvet Revolution - GQ Magazine Style',
      title: 'The Velvet Revolution',
    },
    {
      id: 5,
      src: '/images/ai-art/ai-art-5.jpg',
      alt: 'Style Secrets for Men - GQ Magazine Style',
      title: 'Style Secrets for Men',
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % artImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [artImages.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + artImages.length) % artImages.length)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % artImages.length)
  }

  return (
    <section id="contact" className="section section-dark">
      <div className="container ai-art-container">
        <h2 className="section-title">AI Art Playground</h2>
        <p className="section-subtitle">
          Having fun with generative AI to explore creative possibilities and design concepts
        </p>

        <div className="carousel-wrapper">
          <div className="carousel-main">
            {artImages.map((image, index) => (
              <div
                key={image.id}
                className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
              >
                <img src={image.src} alt={image.alt} className="carousel-image" />
                <div className="carousel-title">{image.title}</div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button className="carousel-button prev-button" onClick={prevSlide} aria-label="Previous slide">
            <FaChevronLeft />
          </button>
          <button className="carousel-button next-button" onClick={nextSlide} aria-label="Next slide">
            <FaChevronRight />
          </button>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {artImages.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="ai-art-description">
          <p>
            These AI-generated artworks showcase my passion for creative exploration and design aesthetics.
            By leveraging cutting-edge generative AI tools, I enjoy experimenting with visual concepts,
            color palettes, and composition to push creative boundaries and stay current with emerging technologies.
          </p>
        </div>
      </div>
    </section>
  )
}
