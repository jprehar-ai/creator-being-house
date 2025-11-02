"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Menu, X } from "lucide-react"

export function MainNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    router.push(href)
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button onClick={() => handleNavClick("/")} className="flex items-center cursor-pointer">
            <span className="text-xl font-medium bg-gradient-to-r from-amber-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              Creator Being
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleNavClick("/")}
              className="text-gray-600 hover:text-gray-800 transition-colors font-medium cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick("/archetype-explorer")}
              className="text-gray-600 hover:text-gray-800 transition-colors font-medium cursor-pointer"
            >
              Discover Your Path
            </button>
            <button
              onClick={() => handleNavClick("/shop")}
              className="text-gray-600 hover:text-gray-800 transition-colors font-medium cursor-pointer"
            >
              Shop
            </button>
            <button
              onClick={() => handleNavClick("/community")}
              className="text-gray-600 hover:text-gray-800 transition-colors font-medium cursor-pointer"
            >
              Community
            </button>

            <button
              onClick={() => handleNavClick("/membership")}
              className="bg-gradient-to-r from-amber-400 to-pink-400 hover:from-amber-500 hover:to-pink-500 text-white px-6 py-2.5 rounded-full font-medium transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
            >
              Join Waitlist
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-800 transition-colors rounded-lg hover:bg-gray-100 cursor-pointer"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200/50 bg-white/95 backdrop-blur-sm">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => handleNavClick("/")}
                className="text-gray-600 hover:text-gray-800 transition-colors font-medium py-2 text-left cursor-pointer"
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick("/archetype-explorer")}
                className="text-gray-600 hover:text-gray-800 transition-colors font-medium py-2 text-left cursor-pointer"
              >
                Discover Your Path
              </button>
              <button
                onClick={() => handleNavClick("/shop")}
                className="text-gray-600 hover:text-gray-800 transition-colors font-medium py-2 text-left cursor-pointer"
              >
                Shop
              </button>
              <button
                onClick={() => handleNavClick("/community")}
                className="text-gray-600 hover:text-gray-800 transition-colors font-medium py-2 text-left cursor-pointer"
              >
                Community
              </button>

              <button
                onClick={() => handleNavClick("/membership")}
                className="bg-gradient-to-r from-amber-400 to-pink-400 hover:from-amber-500 hover:to-pink-500 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 text-center shadow-sm mt-2 cursor-pointer"
              >
                Join Waitlist
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
