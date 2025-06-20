"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Download, MapPin, Calendar, Coffee,Activity } from "lucide-react"

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleDownloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement("a")
    link.href = "/resume/CV.pdf" // Path to your resume file in public folder
    link.download = "CV.pdf" // Name for the downloaded file
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const stats = [
    { icon: <Calendar className="w-5 h-5" />, label: "Experience", value: " Fresher" },
    { icon: <MapPin className="w-5 h-5" />, label: "Location", value: "Bengaluru, Karnataka" },
    { icon: <Activity className="w-5 h-5" />, label: "Activity", value: "500+" },
  ]

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-blue-100/30 to-transparent dark:from-blue-900/20 rounded-full -translate-y-36 translate-x-36 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-100/30 to-transparent dark:from-purple-900/20 rounded-full translate-y-48 -translate-x-48 blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-full text-green-600 dark:text-green-400 text-sm font-medium mb-4">
            <Coffee className="w-4 h-4" />
            <span>Get to Know Me</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-6">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
              Me !
            </span>
          </h2>

          <div className="flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
          {/* Profile Image - Slide in from left */}
          <div
            className={`w-full lg:w-1/2 flex justify-center transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="relative group">
              {/* Glowing background */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>

              {/* Profile image container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl transform transition-all duration-500 group-hover:scale-105">
                <Image
                  src="/profile.jpg?height=400&width=400"
                  alt="Dharshan - FullStack Developer"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Floating stats */}
              <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 bg-white dark:bg-gray-800 rounded-2xl p-3 sm:p-4 shadow-xl border border-gray-200 dark:border-gray-700">
                <div className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400">08+</div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Projects</div>
              </div>
            </div>
          </div>

          {/* Content - Slide in from right */}
          <div className="w-full lg:w-1/2">
            <div
              className={`transition-all duration-1000 delay-400 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-gray-800 dark:text-white">
                Full Stack Developer &
                  {" "}
                  ML Enthusiast
              </h3>
            </div>

            <div
              className={`space-y-6 transition-all duration-1000 delay-600 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm an aspiring <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Full Stack developer</span> with a strong foundation in{" "}
                <strong className="text-blue-600 dark:text-blue-400">Frontend technologies</strong>  including HTML, CSS, JavaScript, TypeScript, Tailwind CSS, and React. I've built some modern, responsive web interfaces with clean design and smooth user experiences.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                On the backend, I have intermediate-level experience with{" "}
                <strong className="text-purple-600 dark:text-purple-400">Python and Flask</strong> , which I've used to create{" "}
                <strong className="text-blue-600 dark:text-blue-400">Full Stack projects</strong>. that combine dynamic data with scalable architecture. Currently, I'm expanding my skills by learning<strong className="text-purple-600 dark:text-purple-400"> Java </strong>with the goal of becoming a proficient<strong className="text-blue-600 dark:text-blue-400"> Java Full Stack Developer. </strong>I'm also deeply interested in the world of<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Artificial Intelligence and Machine Learning </span>and actively exploring how to integrate AIML into my future projects.
              </p>
            </div>

            {/* Stats */}
            <div
              className={`grid grid-cols-3 gap-4 my-8 transition-all duration-1000 delay-800 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md">
                  <div className="flex justify-center mb-2 text-blue-600 dark:text-blue-400">{stat.icon}</div>
                  <div className="text-lg font-bold text-gray-800 dark:text-white">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Tech Stack */}
            <div
              className={`transition-all duration-1000 delay-1000 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Core Technologies</h4>
              <div className="flex flex-wrap gap-3 mb-8">
                {[
                    { name: "React", color: "from-cyan-400 to-blue-600" },// React: Cyan & Blue
                    { name: "JavaScript", color: "from-yellow-400 to-yellow-600" },// JavaScript: Bright Yellow
                    { name: "TypeScript", color: "from-blue-500 to-blue-700" },// TypeScript: Deep Blue
                    { name: "Tailwind CSS", color: "from-sky-400 to-teal-500" },// Tailwind: Sky & Teal
                    { name: "Python Flask", color: "from-gray-600 to-gray-800" },// Flask: Dark Grays (Black/White Logo)
                    { name: "PostgreSQL", color: "from-indigo-600 to-blue-900" },// PostgreSQL: Deep Blue / Indigo
                    { name: "Java", color: "from-red-500 to-orange-600" }, // Java: Red to Orange (Oracle style)
                    { name: "AI/ML", color: "from-indigo-500 to-fuchsia-600" }
                  ].map((tech, index) => (
                  <span
                    key={tech.name}
                    className={`px-4 py-2 rounded-full text-white font-medium bg-gradient-to-r ${tech.color} transform transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-default`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>

              {/* CTA Button */}
              <button
                onClick={handleDownloadResume}
                className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105 flex items-center gap-3"
              >
                <span className="relative z-10">Download Resume</span>
                <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
