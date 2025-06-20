"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Award } from "lucide-react"

// Certificates array (add more if needed)
const certificates = [
  {
    id: 1,
    title: "React JS",
    image: "/certificates/React.png",
  },
  {
    id: 2,
    title: "Frontend Development",
    image: "/certificates/FED.png",
  },
  {
    id: 3,
    title: "Cyber Security",
    image: "/certificates/CyberSecurity.png",
  },
  {
    id: 4,
    title: "Java Script",
    image: "/certificates/JS Bootcamp.png",
  },
  {
    id: 5,
    title: "AI with Python Internship",
    image: "/certificates/Internship.png",
  },
  {
    id: 6,
    title: "C - Operators",
    image: "/certificates/c-Op.jpg",
  },
  {
    id: 7,
    title: "C - Basics",
    image: "/certificates/c-basics.jpg",
  },
]

export default function Certificates() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  // Auto-rotate certificates
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating && hoveredIndex === null) {
        nextSlide()
      }
    }, 4000)
    return () => clearInterval(interval)
  }, [currentIndex, isAnimating, hoveredIndex])

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    return () => observer.disconnect()
  }, [])

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev + 1) % certificates.length)
    setTimeout(() => setIsAnimating(false), 600)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length)
    setTimeout(() => setIsAnimating(false), 600)
  }

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return
    setIsAnimating(true)
    setCurrentIndex(index)
    setTimeout(() => setIsAnimating(false), 600)
  }

  const getThreeCertificates = () => {
    const prevIndex = (currentIndex - 1 + certificates.length) % certificates.length
    const nextIndex = (currentIndex + 1) % certificates.length
    return [
      { ...certificates[prevIndex], position: 0, index: prevIndex },
      { ...certificates[currentIndex], position: 1, index: currentIndex },
      { ...certificates[nextIndex], position: 2, index: nextIndex },
    ]
  }

  const getCardTransform = (position: number, cardIndex: number) => {
    const isHovered = hoveredIndex === cardIndex
    if (hoveredIndex !== null) {
      if (isHovered) {
        return {
          transform: "translateX(0) translateY(-10px) scale(1.08) rotateY(0deg)",
          zIndex: 50,
          opacity: 1,
        }
      } else {
        const offset = position < hoveredIndex ? -300 : 300
        return {
          transform: `translateX(${offset}px) translateY(20px) scale(0.75) rotateY(${position < hoveredIndex ? 20 : -20}deg)`,
          zIndex: 5,
          opacity: 0.4,
        }
      }
    }
    switch (position) {
      case 0:
        return {
          transform: "translateX(-180px) translateY(0) scale(0.9) rotateY(10deg)",
          zIndex: 15,
          opacity: 0.8,
        }
      case 1:
        return {
          transform: "translateX(0) translateY(0) scale(1) rotateY(0deg)",
          zIndex: 30,
          opacity: 1,
        }
      case 2:
        return {
          transform: "translateX(180px) translateY(0) scale(0.9) rotateY(-10deg)",
          zIndex: 15,
          opacity: 0.8,
        }
      default:
        return {
          transform: "translateX(0) translateY(0) scale(1) rotateY(0deg)",
          zIndex: 20,
          opacity: 1,
        }
    }
  }

  const getCardStyling = (position: number, cardIndex: number) => {
    const isHovered = hoveredIndex === cardIndex
    const isCenter = position === 1
    const isFocused = isHovered || (hoveredIndex === null && isCenter)
    return {
      background: isFocused ? "bg-white/95 dark:bg-gray-900/95" : "bg-white/80 dark:bg-gray-900/80",
      border: isFocused ? "border-blue-300/60 dark:border-blue-600/60" : "border-white/30 dark:border-gray-700/40",
      shadow: isFocused ? "shadow-2xl shadow-blue-500/20" : "shadow-xl",
      hasGradient: isFocused,
    }
  }

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-16 md:py-24 bg-white dark:bg-gray-800 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-100/20 to-transparent dark:from-blue-900/10 rounded-full -translate-x-48 -translate-y-48 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-100/20 to-transparent dark:from-purple-900/10 rounded-full translate-x-48 translate-y-48 blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
            <Award className="w-4 h-4" />
            <span>My Certificates</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">Certifications</span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A showcase of my certified skills and accomplishments
          </p>

          <div className="flex justify-center mt-6">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
          </div>
        </div>

        {/* Certificates Carousel */}
        <div className="relative max-w-7xl mx-auto">
          <div
            className={`transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ perspective: "1500px" }}
          >
            <div
              className="relative h-[480px] flex items-center justify-center px-12 sm:px-16 md:px-20"
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {getThreeCertificates().map((certificate, cardIndex) => {
                const transform = getCardTransform(certificate.position, cardIndex)
                const styling = getCardStyling(certificate.position, cardIndex)
                return (
                  <div
                    key={`${certificate.id}-${certificate.position}`}
                    className="absolute w-full max-w-md cursor-pointer"
                    style={{
                      ...transform,
                      transition: "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    }}
                    onMouseEnter={() => setHoveredIndex(cardIndex)}
                    onClick={() => goToSlide(certificate.index)}
                  >
                    {/* Card */}
                    <div
                      className={`relative backdrop-blur-xl rounded-3xl p-4 md:p-8 border transition-all duration-500 ${styling.background} ${styling.border} ${styling.shadow}`}
                    >
                      {/* Gradient overlay for focused cards */}
                      {styling.hasGradient && (
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10 rounded-3xl"></div>
                      )}
                      <div className="relative z-10 flex flex-col items-center justify-center h-full">
                        <div className="w-full h-64 md:h-80 flex items-center justify-center">
                          <Image
                            src={certificate.image}
                            alt={certificate.title}
                            width={400}
                            height={320}
                            className="object-contain rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
                          />
                        </div>
                        <div className="mt-6 text-center">
                          <h4 className="font-bold text-lg md:text-xl text-gray-800 dark:text-white">
                            {certificate.title}
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            disabled={isAnimating}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-gray-800 dark:text-white hover:bg-blue-600 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed z-50 group md:left-4"
            aria-label="Previous certificate"
          >
            <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
          </button>

          <button
            onClick={nextSlide}
            disabled={isAnimating}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-gray-800 dark:text-white hover:bg-blue-600 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed z-50 group md:right-4"
            aria-label="Next certificate"
          >
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-12 gap-3">
            {certificates.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "w-10 h-3 bg-gradient-to-r from-blue-600 to-purple-600"
                    : "w-3 h-3 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 hover:scale-125"
                }`}
                aria-label={`Go to certificate ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
