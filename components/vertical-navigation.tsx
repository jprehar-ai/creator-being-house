"use client"

import { useState, useEffect } from "react"
import { ChevronDown } from "lucide-react"

interface NavigationItem {
  id: string
  label: string
}

interface VerticalNavigationProps {
  items: NavigationItem[]
}

export function VerticalNavigation({ items }: VerticalNavigationProps) {
  const [activeSection, setActiveSection] = useState<string>("")

  useEffect(() => {
    const handleScroll = () => {
      const sections = items.map((item) => document.getElementById(item.id)).filter(Boolean)
      const scrollPosition = window.scrollY + 200

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(items[i].id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [items])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
      <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg p-2 shadow-lg">
        <div className="space-y-1">
          {items.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`block w-full text-left px-3 py-2 text-xs font-medium rounded transition-colors ${
                activeSection === item.id
                  ? "bg-gray-900 text-white"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="mt-2 pt-2 border-t border-gray-200 text-center">
          <ChevronDown className="w-3 h-3 text-gray-400 mx-auto animate-bounce" />
        </div>
      </div>
    </div>
  )
}
