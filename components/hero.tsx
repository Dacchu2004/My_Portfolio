"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { ChevronDown } from "lucide-react"

export default function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger animations after component mounts
    setIsVisible(true)

    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollY = window.scrollY
        const elements = parallaxRef.current.querySelectorAll(".parallax-text")

        elements.forEach((el, index) => {
          const htmlEl = el as HTMLElement
          const speed = (index + 1) * 0.15
          const yPos = -(scrollY * speed)
          htmlEl.style.transform = `translate3d(0, ${yPos}px, 0)`
        })
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const createRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget
    const ripple = document.createElement("span")
    const rect = button.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    const x = e.clientX - rect.left - size / 2
    const y = e.clientY - rect.top - size / 2

    ripple.style.width = ripple.style.height = `${size}px`
    ripple.style.left = `${x}px`
    ripple.style.top = `${y}px`
    ripple.classList.add("absolute", "rounded-full", "bg-white/30", "pointer-events-none")
    ripple.style.animation = "ripple-expand 0.6s linear"

    button.appendChild(ripple)
    setTimeout(() => ripple.remove(), 600)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop
      window.scrollTo({
        top: offsetTop - 90,
        behavior: "smooth",
      })
    }
  }

  const scrollToNext = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-gray-900"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-indigo-50/60 to-purple-50/80 dark:from-gray-900 dark:via-blue-900/10 dark:to-purple-900/10">
        <div
          className="absolute inset-0 opacity-20 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`,
          }}
        />
      </div>

      {/* Fixed Parallax background elements with better visibility and sizing */}
      <div ref={parallaxRef} className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* FS- Top Left */}
        <div
          className="parallax-text absolute font-black select-none text-blue-600/[0.06] dark:text-blue-400/[0.065]"
          style={{
            fontSize: "clamp(3rem, 8vw, 6rem)",
            top: "8%",
            left: "5%",
            lineHeight: "0.9",
            whiteSpace: "nowrap",
            transform: "rotate(-5deg)",
          }}
        >
          FULLSTACK
        </div>

        {/* Frontend - Top Right */}
        <div
          className="parallax-text absolute font-black select-none text-purple-600/[0.06] dark:text-purple-400/[0.065]"
          style={{
            fontSize: "clamp(3rem, 8vw, 6rem)",
            top: "15%",
            right: "5%",
            lineHeight: "0.9",
            whiteSpace: "nowrap",
            transform: "rotate(5deg)",
          }}
        >
          FRONTEND
        </div>

        {/* JAVA - Middle Left */}
        <div
          className="parallax-text absolute font-black select-none text-pink-600/[0.06] dark:text-pink-400/[0.065]"
          style={{
            fontSize: "clamp(2.5rem, 7vw, 5rem)",
            top: "45%",
            left: "5%",
            lineHeight: "0.9",
            whiteSpace: "nowrap",
            transform: "rotate(-3deg)",
          }}
        >
          JAVA
        </div>

        {/* FLASK - Bottom Right */}
        <div
          className="parallax-text absolute font-black select-none text-indigo-600/[0.06] dark:text-indigo-400/[0.065]"
          style={{
            fontSize: "clamp(2rem, 6vw, 5rem)",
            top: "80%",
            right: "8%",
            lineHeight: "0.6",
            whiteSpace: "nowrap",
            transform: "rotate(3deg)",
          }}
        >
          FLASK
        </div>

        {/* REACT - Bottom Left */}
        <div
          className="parallax-text absolute font-black select-none text-cyan-600/[0.06] dark:text-cyan-400/[0.065]"
          style={{
            fontSize: "clamp(2rem, 6vw, 4rem)",
            top: "80%",
            left: "10%",
            lineHeight: "0.9",
            whiteSpace: "nowrap",
            transform: "rotate(-8deg)",
          }}
        >
          REACT
        </div>

        {/* TYPESCRIPT- Middle Right */}
        <div
          className="parallax-text absolute font-black select-none text-emerald-600/[0.06] dark:text-emerald-400/[0.065]"
          style={{
            fontSize: "clamp(2rem, 6vw, 4rem)",
            top: "55%",
            right: "10%",
            lineHeight: "0.9",
            whiteSpace: "nowrap",
            transform: "rotate(8deg)",
          }}
        >
          TYPESCRIPT
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 sm:px-8 max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 sm:mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400">
              Dharshan.S
            </span>
          </h1>
        </div>

        <div
          className={`transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 dark:text-gray-200 mb-3 sm:mb-4 font-light">
            Full Stack Developer
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
            Frontend Developer | ML Enthuciast | Java Developer<br />
            Crafting impressive digital experiences with modern web technologies and innovative solutions
          </p>
        </div>

        <div
          className={`transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center mb-12 sm:mb-16 px-4`}
        >
          <button
            onClick={(e) => {
              createRipple(e)
              scrollToSection("projects")
            }}
            className="relative overflow-hidden group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base"
          >
            <span className="relative z-10">View My Work</span>
          </button>

          <button
            onClick={(e) => {
              createRipple(e)
              scrollToSection("contact")
            }}
            className="relative overflow-hidden group bg-transparent border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
          >
            <span className="relative z-10">Get In Touch</span>
          </button>
        </div>

        <button
          onClick={scrollToNext}
          className={`transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} animate-bounce inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 dark:bg-gray-800/50 backdrop-blur-sm border border-white/30 dark:border-gray-700 hover:bg-white/30 dark:hover:bg-gray-700/50 transition-all duration-300`}
          aria-label="Scroll to next section"
        >
          <ChevronDown className="w-6 h-6 text-gray-700 dark:text-gray-300" />
        </button>
      </div>
    </section>
  )
}
