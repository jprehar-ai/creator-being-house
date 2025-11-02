"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Home, Info, MessageCircle, Sparkles } from "lucide-react"

interface HouseHeaderProps {
  showWaveText?: boolean
  waveText?: string
}

export function HouseHeader({ showWaveText = false, waveText = "House" }: HouseHeaderProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Function to create wave text with staggered animation
  const WaveText = ({ text }: { text: string }) => {
    return (
      <span className="wave-text-container">
        {text.split("").map((char, index) => (
          <span key={index} style={{ animationDelay: `${index * 0.05}s` }}>
            {char}
          </span>
        ))}
      </span>
    )
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/30 backdrop-blur-lg py-3 shadow-lg border-b border-white/10"
          : "bg-transparent backdrop-blur-sm py-6"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link
          href="/"
          onClick={scrollToTop}
          className="text-white hover:text-gray-200 transition-colors playfair-text text-xl drop-shadow-md"
        >
          <WaveText text="Creator Being" />
        </Link>

        <div className="flex items-center space-x-4">
          <Link
            href="/"
            onClick={scrollToTop}
            className="text-white/80 hover:text-white transition-colors hidden sm:flex items-center gap-1"
          >
            <Home className="h-4 w-4" />
            <span className="text-sm">Home</span>
          </Link>
          <Link
            href="/about"
            onClick={scrollToTop}
            className="text-white/80 hover:text-white transition-colors hidden sm:flex items-center gap-1"
          >
            <Info className="h-4 w-4" />
            <span className="text-sm">About</span>
          </Link>
          <button className="text-white/80 hover:text-white transition-colors hidden sm:flex items-center gap-1">
            <MessageCircle className="h-4 w-4" />
            <span className="text-sm">Chat with Kibi</span>
          </button>
          <Link href="/membership" onClick={scrollToTop}>
            <button className="bg-amber-400 hover:bg-amber-500 text-amber-900 px-3 py-1.5 rounded-full text-sm font-medium flex items-center gap-1">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Join Creator Being+</span>
            </button>
          </Link>
        </div>
      </div>
    </motion.header>
  )
}
