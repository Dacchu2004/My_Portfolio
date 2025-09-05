"use client"

import { useEffect, useRef, useState } from "react"
import { Briefcase, GraduationCap, CalendarDays, MapPin } from "lucide-react"

type TimelineItem = {
  title: string
  organization: string
  location?: string
  period: string
  points: string[]
  type: "work" | "education"
}

const experienceItems: TimelineItem[] = [
  {
    title: "Web Developver Internship",
    organization: "EZ Startup Futurio",
    location: "Remote",
    period: "Jul 2025 - Aug 2025",
    type: "work",
    points: [
      "Built responsive UI with React, JavaScript, HTML and Tailwind CSS",
      "Integrated REST APIs and optimized performance and accessibility"
    ],
  },
  {
    title: "Internet of Things(IOT)-Trainee",
    organization: "Samsung Innovation Campus",
    location: "Bengaluru, Karnataka",
    period: "Oct 2024 - Mar 2025",
    type: "work",
    points: [
      "Built an ESP32-based wearable/tag that streams worker ID and sensor data to a Raspberry Pi gateway in real time.",
      "Also worked on some basic projects like blinking LED, temperature sensor, etc."
    ]
  },
]

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="scroll-mt-0 py-12 md:py-20 bg-gray-100 dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full -translate-x-48 -translate-y-48 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-500/10 to-transparent rounded-full translate-x-48 translate-y-48 blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400 rounded-full text-sm font-medium mb-4">
            <Briefcase className="w-4 h-4" />
            <span>Experience</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">Experience</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A quick look at my work and education timeline
          </p>
          <div className="flex justify-center mt-6">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-5xl">
          <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600 opacity-40"></div>

          <div className="space-y-8 sm:space-y-12">
            {experienceItems.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col sm:flex-row gap-4 sm:gap-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Dot */}
                <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 -top-1.5">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 ring-4 ring-white/10"></div>
                </div>

                {/* Card */}
                <div className={`w-full sm:w-[calc(50%-2rem)] ${index % 2 === 0 ? "sm:ml-auto" : "sm:mr-auto"}`}>
                  <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-[2px] shadow-xl">
                    <div className="group relative bg-white dark:bg-gray-800/60 rounded-2xl p-4 sm:p-5 transition-colors">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div className="flex items-center gap-2 text-gray-900 dark:text-white">
                          {item.type === "work" ? (
                            <Briefcase className="w-5 h-5 text-blue-400" />
                          ) : (
                            <GraduationCap className="w-5 h-5 text-purple-400" />
                          )}
                          <h3 className="text-lg sm:text-xl font-bold">{item.title}</h3>
                        </div>
                        <span className="inline-flex items-center gap-2 text-xs sm:text-sm text-blue-600 dark:text-blue-300">
                          <CalendarDays className="w-4 h-4" />
                          {item.period}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 mb-3">
                        <span className="font-semibold text-gray-800 dark:text-white">{item.organization}</span>
                        {item.location && (
                          <span className="inline-flex items-center gap-1 text-gray-500 dark:text-gray-400">
                            <MapPin className="w-4 h-4" /> {item.location}
                          </span>
                        )}
                      </div>

                      <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                        {item.points.map((point, i) => (
                          <li key={i} className="leading-relaxed">
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


