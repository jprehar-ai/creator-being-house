"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, ChevronDown, X, ShoppingBag, Users } from 'lucide-react'
import { SectionNavigation } from "@/components/section-navigation"

export default function Page() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [timeOfDay, setTimeOfDay] = useState(0)
  const [activeSection, setActiveSection] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [selectedRoom, setSelectedRoom] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)

  // Section refs for navigation
  const sectionRefs = useRef<(HTMLElement | null)[]>([])

  const sections = [
    { id: "hero", label: "Home", color: "bg-amber-400" },
    { id: "house", label: "The House", color: "bg-amber-500" },
    { id: "archetypes", label: "Discover Your Path", color: "bg-indigo-500" },
    { id: "explore", label: "Explore More", color: "bg-purple-500" },
  ]

  const rooms = [
    {
      name: "Rhythm Room",
      image: "/rhythm-room-hero.png",
      shortDesc: "Start your day with clarity",
      fullDesc:
        "The starting point for your day. The Rhythm Room helps you check in with how you're feeling, receive a frequency reading, and reset your energy. It brings you back into your own pace so you can move forward with clarity, instead of reacting from stress or distraction.",
    },
    {
      name: "Mirror Room",
      image: "/mirror-room-hero.png",
      shortDesc: "Reflect and understand patterns",
      fullDesc:
        "A space for honest self-reflection. The Mirror Room helps you understand how your current reality (money, relationships, environment) mirrors your inner world. It's where you begin to spot patterns, shift emotional states, and create change from the inside out.",
    },
    {
      name: "Creator Being Room",
      image: "/creator-being-room-hero.png",
      shortDesc: "Explore your creative direction",
      fullDesc:
        "Where creative direction becomes clear. This room helps you explore your passions, align with what energises you, and build work or projects that reflect who you are. It supports you in creating a path that's self-led, meaningful, and financially alive.",
    },
    {
      name: "Dream Room",
      image: "/dream-room-hero.png",
      shortDesc: "Follow imagination and intuition",
      fullDesc:
        "Where imagination and intuition meet. The Dream Room invites you to track night dreams, explore daydreams, and follow inner signals that often go unnoticed. It helps you receive guidance, spark new ideas, and access future possibilities beyond logic.",
    },
    {
      name: "Masterclass Room",
      image: "/masterclass-room-hero.png",
      shortDesc: "Deepen your understanding",
      fullDesc:
        "A space to deepen your understanding. In the Masterclass Room, you'll learn about the unseen structure of life, from emotional patterns to energetic principles and natural laws. It's for gaining clarity and applying wisdom in real, grounded ways.",
    },
    {
      name: "Skins of Light Room",
      image: "/skins-of-light-hero.png",
      shortDesc: "Align inner and outer expression",
      fullDesc:
        "Expression begins with embodiment. Skins of Light helps you align how you feel on the inside with how you show up physically, through movement, intentional styling, and self-care. When your outer presence matches your inner state, everything flows more naturally.",
    },
  ]

  const getBackgroundGradient = () => {
    if (timeOfDay < 25) {
      const progress = timeOfDay / 25
      return `linear-gradient(135deg, 
        rgba(139, 92, 246, ${0.3 + progress * 0.2}) 0%, 
        rgba(236, 72, 153, ${0.2 + progress * 0.2}) 100%)`
    } else if (timeOfDay < 75) {
      const progress = (timeOfDay - 25) / 50
      return `linear-gradient(135deg, 
        rgba(59, 130, 246, ${0.3 + progress * 0.2}) 0%, 
        rgba(168, 85, 247, ${0.2 + progress * 0.2}) 100%)`
    } else {
      const progress = (timeOfDay - 75) / 25
      return `linear-gradient(135deg, 
        rgba(249, 115, 22, ${0.3 + progress * 0.2}) 0%, 
        rgba(251, 191, 36, ${0.2 + progress * 0.2}) 100%)`
    }
  }

  useEffect(() => {
    setIsLoaded(true)

    const handleScroll = () => {
      const scrollY = window.scrollY
      setScrollPosition(scrollY)

      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const progress = (scrollY / (documentHeight - windowHeight)) * 100
      setScrollProgress(Math.min(progress, 100))

      sectionRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect()
          if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
            setActiveSection(index)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)

    const interval = setInterval(() => {
      setTimeOfDay((prev) => (prev >= 100 ? 0 : prev + 0.5))
    }, 50)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearInterval(interval)
    }
  }, [])

  const scrollToSection = (index: number) => {
    sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToNextSection = () => {
    const nextIndex = Math.min(activeSection + 1, sections.length - 1)
    scrollToSection(nextIndex)
  }

  return (
    <div className="relative overflow-hidden bg-gray-950" ref={containerRef}>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-rose-400 to-purple-500 z-50 origin-left"
        style={{ scaleX: scrollProgress / 100 }}
      />

      {/* Right Side Navigation */}
      <SectionNavigation sections={sections} activeSection={activeSection} scrollToSection={scrollToSection} />

      {/* Room Detail Modal */}
      <AnimatePresence>
        {selectedRoom !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedRoom(null)}
          >
            <motion.div
              className="relative max-w-2xl w-full bg-gray-900 rounded-3xl overflow-hidden border border-white/10"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                boxShadow: "0 0 60px rgba(168, 85, 247, 0.3), 0 0 100px rgba(236, 72, 153, 0.2)",
              }}
            >
              <div className="relative h-64">
                <Image
                  src={rooms[selectedRoom]?.image || ""}
                  alt={rooms[selectedRoom]?.name || ""}
                  fill
                  className="object-cover"
                />
                <button
                  onClick={() => setSelectedRoom(null)}
                  className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/20 transition-colors border border-white/20"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {rooms[selectedRoom]?.name}
                </h3>
                <p className="text-white/70 leading-relaxed">{rooms[selectedRoom]?.fullDesc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Animated Background Gradient */}
      <div
        className="fixed inset-0 z-[-2] transition-all duration-[10000ms]"
        style={{ background: getBackgroundGradient() }}
      />

      {/* Floating Orbs */}
      <div className="fixed inset-0 z-[-1] overflow-hidden">
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.4) 0%, transparent 70%)" }}
          animate={{ x: [0, 100, -50, 0], y: [0, -80, 60, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          initial={{ top: "10%", left: "10%" }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full opacity-15 blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(236,72,153,0.4) 0%, transparent 70%)" }}
          animate={{ x: [0, -70, 80, 0], y: [0, 60, -40, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          initial={{ top: "50%", right: "10%" }}
        />
        <motion.div
          className="absolute w-[350px] h-[350px] rounded-full opacity-15 blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(245,158,11,0.4) 0%, transparent 70%)" }}
          animate={{ x: [0, 50, -60, 0], y: [0, -50, 70, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          initial={{ bottom: "10%", left: "30%" }}
        />
      </div>

      {/* 1. HERO SECTION */}
      <section
        className="min-h-screen relative flex flex-col justify-center items-center scroll-mt-0 overflow-hidden"
        ref={(el) => { sectionRefs.current[0] = el }}
        id="hero"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-950/50 to-gray-950" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <motion.div
              className="text-left"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -30 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
                <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span className="text-sm text-white/70">Welcome to the House</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight">
                <span className="text-white">The Art of </span>
                <br />
                <span className="bg-gradient-to-r from-amber-300 via-rose-400 to-purple-500 bg-clip-text text-transparent">
                  Living in Creation
                </span>
              </h1>

              <p className="text-lg md:text-xl text-white/60 max-w-xl mb-10 leading-relaxed">
                Automation will handle the doing. Humanity must remember the being. This is where that remembering begins.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/archetype-explorer"
                  className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-rose-500 rounded-full text-white font-semibold text-lg hover:shadow-lg hover:shadow-amber-500/25 transition-all"
                >
                  Discover Your Path
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/about"
                  className="group flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 rounded-full text-white font-semibold text-lg hover:bg-white/10 transition-all"
                >
                  Learn more about our philosophy
                </Link>
              </div>
            </motion.div>

            {/* Right side - House image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : 30 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <Image src="/house-icon.png" alt="Creator Being House" fill className="object-contain" priority />
              </div>
            </motion.div>
          </div>
        </div>

        <motion.button
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors"
          animate={{ opacity: scrollPosition > 100 ? 0 : 1 }}
          transition={{ duration: 0.5 }}
          onClick={scrollToNextSection}
        >
          <span className="text-sm">Explore the House</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </motion.button>
      </section>

      {/* Wave Divider */}
      <div className="wave-divider relative">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <defs>
            <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(139, 92, 246, 0.3)" />
              <stop offset="50%" stopColor="rgba(236, 72, 153, 0.2)" />
              <stop offset="100%" stopColor="rgba(245, 158, 11, 0.3)" />
            </linearGradient>
          </defs>
          <path
            fill="url(#waveGradient1)"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,69.3C960,85,1056,107,1152,106.7C1248,107,1344,85,1392,74.7L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>

      {/* 2. THE HOUSE SECTION */}
      <section className="relative py-24 scroll-mt-20" ref={(el) => { sectionRefs.current[1] = el }} id="house">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Six Rooms for Creative Living
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              A digital sanctuary designed to support your real, daily life. Each room invites you to shape your world
              from the inside out.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rooms.map((room, index) => (
              <motion.div
                key={room.name}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedRoom(index)}
              >
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 transition-all duration-500">
                  <div className="relative h-48 overflow-hidden">
                    <Image src={room.image} alt={room.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent" />
                    <div className="absolute bottom-3 right-3 text-xs text-white/60 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
                      Learn more
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-white mb-1">{room.name}</h3>
                    <p className="text-white/50 text-sm">{room.shortDesc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              href="/membership"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all"
            >
              Learn About Membership
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="wave-divider transform rotate-180">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="rgba(17, 24, 39, 0.5)"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,69.3C960,85,1056,107,1152,106.7C1248,107,1344,85,1392,74.7L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>

      {/* 3. ARCHETYPE EXPLORER SECTION */}
      <section
        className="relative py-32 overflow-hidden scroll-mt-20"
        ref={(el) => { sectionRefs.current[2] = el }}
        id="archetypes"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Discover Your Creative Archetype
            </h2>

            <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              What if success wasn't about climbing someone else's ladder, but about building your own beautiful
              life? Beyond traditional career paths lies a vibrant spectrum of ways to live and create.
            </p>

            <Link
              href="/archetype-explorer"
              className="group inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full text-white font-semibold text-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all"
            >
              Take the Quiz
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <p className="text-white/30 text-sm mt-4">{'Free \u2022 No email required \u2022 2 minutes'}</p>
          </motion.div>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="wave-divider">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="rgba(17, 24, 39, 0.8)"
            d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,48C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>

      {/* 4. EXPLORE MORE SECTION */}
      <section className="relative py-24 scroll-mt-20" ref={(el) => { sectionRefs.current[3] = el }} id="explore">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Explore More
            </h2>
            <p className="text-white/60 text-lg">
              Continue your journey with our shop and community
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Shop Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link href="/shop" className="group block">
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 transition-all duration-500 p-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mb-6">
                    <ShoppingBag className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">
                    Shop
                  </h3>
                  <p className="text-white/50 leading-relaxed mb-4">
                    Explore tools, resources, and creative offerings designed to support your journey.
                  </p>
                  <span className="inline-flex items-center gap-2 text-amber-400 font-medium">
                    Browse the Shop <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* Community Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <Link href="/community" className="group block">
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 transition-all duration-500 p-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center mb-6">
                    <Users className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    Community
                  </h3>
                  <p className="text-white/50 leading-relaxed mb-4">
                    Connect with fellow creators, share experiences, and grow together in a supportive space.
                  </p>
                  <span className="inline-flex items-center gap-2 text-purple-400 font-medium">
                    Join the Community <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </motion.div>
          </div>

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-white/30 text-sm mb-4">Membership opening soon</p>
            <Link
              href="/membership"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white/70 text-sm hover:bg-white/10 hover:text-white transition-all"
            >
              Join the waitlist
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
