"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface SectionNavigationProps {
  sections: { id: string; label: string; color: string }[]
  activeSection: number
  scrollToSection: (index: number) => void
}

export function SectionNavigation({ sections, activeSection, scrollToSection }: SectionNavigationProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Hide navigation when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
      <motion.div
        className="flex flex-col items-center gap-3 bg-white/30 backdrop-blur-sm py-3 px-2 rounded-full shadow-sm"
        initial={{ opacity: 0, x: 20 }}
        animate={{
          opacity: isVisible ? 1 : 0.5,
          x: 0,
          scale: isVisible ? 1 : 0.95,
        }}
        transition={{ duration: 0.3 }}
      >
        {sections.map((section, index) => (
          <motion.button
            key={section.id}
            onClick={() => scrollToSection(index)}
            className="relative group"
            whileHover={{ scale: 1.2 }}
            title={section.label}
            aria-label={section.label}
          >
            <div
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === index ? `${section.color} scale-125 shadow-lg` : "bg-white/60 group-hover:bg-white"
              }`}
            />

            <div
              className={`absolute left-6 px-2 py-1 text-xs font-medium whitespace-nowrap rounded-md transition-all duration-300 bg-white/80 backdrop-blur-sm shadow-sm ${
                activeSection === index
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
              }`}
            >
              {section.label}
            </div>
          </motion.button>
        ))}
      </motion.div>
    </div>
  )
}
