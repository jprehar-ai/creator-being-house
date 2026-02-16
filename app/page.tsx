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
  const containerRef = useRef<HTMLDivElement>(null)

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
    <div className="relative overflow-hidden bg-[#0a0a0f]" ref={containerRef}>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-white/10 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-amber-500 to-orange-600"
          style={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Right Side Navigation */}
      <SectionNavigation sections={sections} activeSection={activeSection} scrollToSection={scrollToSection} />

      {/* Room Detail Modal */}
      <AnimatePresence>
        {selectedRoom !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedRoom(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-900/90 backdrop-blur-xl rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
              style={{
                boxShadow: "0 0 60px rgba(168, 85, 247, 0.3), 0 0 100px rgba(236, 72, 153, 0.2)",
              }}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={rooms[selectedRoom]?.image || "/placeholder.svg"}
                  alt={rooms[selectedRoom]?.name || "Room"}
                  width={800}
                  height={400}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedRoom(null)}
                  className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/20 transition-colors border border-white/20"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {rooms[selectedRoom]?.name}
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg">{rooms[selectedRoom]?.fullDesc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className="fixed inset-0 z-0 transition-all duration-[10000ms]"
        style={{
          background: `linear-gradient(to bottom, 
            rgba(212, 165, 116, 0.15) 0%, 
            rgba(184, 115, 95, 0.12) 25%, 
            rgba(157, 107, 83, 0.1) 50%, 
            rgba(125, 90, 111, 0.08) 75%, 
            rgba(90, 74, 94, 0.05) 100%), 
            ${getBackgroundGradient()}, 
            #0a0a0f`,
        }}
      />

      <div className="fixed inset-0 z-[1] overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-[10%] left-[5%] w-[600px] h-[600px] rounded-full opacity-20 blur-[150px]"
          style={{
            background:
              "radial-gradient(circle, rgba(212, 165, 116, 0.6) 0%, rgba(184, 115, 95, 0.3) 50%, transparent 70%)",
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute top-[40%] right-[10%] w-[700px] h-[700px] rounded-full opacity-20 blur-[160px]"
          style={{
            background:
              "radial-gradient(circle, rgba(157, 107, 83, 0.7) 0%, rgba(125, 90, 111, 0.4) 50%, transparent 70%)",
          }}
          animate={{
            x: [0, -60, 0],
            y: [0, 60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 22,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-[10%] left-[20%] w-[650px] h-[650px] rounded-full opacity-20 blur-[170px]"
          style={{
            background:
              "radial-gradient(circle, rgba(125, 90, 111, 0.6) 0%, rgba(90, 74, 94, 0.3) 50%, transparent 70%)",
          }}
          animate={{
            x: [0, 70, 0],
            y: [0, -30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 24,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute top-[60%] left-[40%] w-[500px] h-[500px] rounded-full opacity-15 blur-[140px]"
          style={{
            background:
              "radial-gradient(circle, rgba(184, 115, 95, 0.5) 0%, rgba(157, 107, 83, 0.2) 50%, transparent 70%)",
          }}
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 0.5,
          }}
        />
      </div>

      {/* 1. HERO SECTION */}
      <section
        className="min-h-screen relative z-[2] flex flex-col justify-center items-center scroll-mt-0 overflow-hidden"
        ref={(el) => (sectionRefs.current[0] = el)}
        id="hero"
      >
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(to right, #d4a574 0%, #b8735f 20%, #9d6b53 40%, #7d5a6f 60%, #5a4a5e 80%, #3d2e40 100%)",
          }}
        />

        <div
          className="absolute inset-0 z-[1] opacity-[0.15]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "200px 200px",
          }}
        />

        <div className="container mx-auto px-6 py-12 md:py-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Left side - Text content */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }}
              animate={isLoaded ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <h1 className="font-sans tracking-tight text-white leading-tight">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-light mb-4">The Art of</div>
                  <div className="text-4xl md:text-5xl lg:text-6xl font-medium pb-3">
                    <motion.span
                      className="bg-clip-text text-transparent bg-gradient-to-r from-orange-300 via-amber-200 to-yellow-300 inline-block"
                      animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                      }}
                      transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      style={{ backgroundSize: "200% 200%" }}
                    >
                      Living in Creation
                    </motion.span>
                  </div>
                </h1>

                <p className="text-lg md:text-xl text-white/90 max-w-xl leading-relaxed font-light">
                  Automation will handle the doing. Humanity must remember the being. This is where that remembering begins.
                </p>
              </motion.div>

              <motion.div
                className="flex flex-wrap gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <Link href="/archetype-explorer">
                  <motion.div
                    className="bg-gradient-to-r from-orange-400 to-amber-500 text-white px-8 py-4 rounded-xl text-lg font-medium shadow-lg border border-white/30"
                    style={{
                      boxShadow: "0 0 30px rgba(212, 165, 116, 0.4), 0 0 60px rgba(184, 115, 95, 0.2)",
                    }}
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 0 40px rgba(212, 165, 116, 0.6), 0 0 80px rgba(184, 115, 95, 0.3)",
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Discover Your Path
                  </motion.div>
                </Link>

                <motion.button
                  onClick={scrollToNextSection}
                  className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl text-lg font-medium border border-white/30"
                  whileHover={{
                    scale: 1.02,
                    backgroundColor: "rgba(255, 255, 255, 0.25)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Explore the House
                </motion.button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={isLoaded ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <Link
                  href="/about"
                  className="text-white/70 hover:text-white transition-colors text-sm font-light underline decoration-1 underline-offset-4"
                >
                  Learn more about our philosophy
                </Link>
              </motion.div>
            </motion.div>

            {/* Right side - House image (larger) */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              animate={isLoaded ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1.2, delay: 0.5 }}
            >
              <motion.div
                className="absolute -inset-16 rounded-full opacity-30 blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle, rgba(212, 165, 116, 0.4) 0%, rgba(184, 115, 95, 0.2) 50%, transparent 70%)",
                }}
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />

              <motion.div
                className="relative z-10"
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/house-icon.png"
                  alt="Creator Being House"
                  width={900}
                  height={900}
                  className="w-full h-auto drop-shadow-2xl"
                  priority
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: scrollPosition > 100 ? 0 : 1 }}
          transition={{ duration: 0.5 }}
          onClick={scrollToNextSection}
        >
          <span className="text-sm text-white/70 mb-2">Explore the House</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
            className="bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-all border border-white/30"
          >
            <ChevronDown className="h-6 w-6 text-white" />
          </motion.div>

          <motion.div
            className="flex flex-col items-center mt-4 space-y-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <motion.div
              className="w-1 h-8 bg-gradient-to-b from-orange-300 to-transparent rounded-full"
              animate={{ scaleY: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
            />
            <motion.div
              className="w-1 h-4 bg-gradient-to-b from-amber-300 to-transparent rounded-full"
              animate={{ scaleY: [0.3, 0.8, 0.3] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "loop", delay: 0.3 }}
            />
          </motion.div>
        </motion.div>
      </section>

      <div className="wave-divider relative z-[2]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <defs>
            <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: "#5a4a5e", stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: "#3d2e40", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "rgba(17, 24, 39, 0.95)", stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <path
            fill="url(#waveGradient1)"
            fillOpacity="1"
            d="M0,64L60,69.3C120,75,240,85,360,80C480,75,600,53,720,48C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
          ></path>
        </svg>
      </div>

      {/* 2. THE HOUSE SECTION - Simplified */}
      <section className="relative z-[2] py-24 scroll-mt-20" ref={(el) => (sectionRefs.current[1] = el)} id="house">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-white mb-6 bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                Six Rooms for Creative Living
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A digital sanctuary designed to support your real, daily life. Each room invites you to shape your world
                from the inside out.
              </p>
            </div>

            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {rooms.map((room, index) => (
                <motion.div
                  key={room.name}
                  className="group bg-gray-900/40 backdrop-blur-xl rounded-xl overflow-hidden cursor-pointer border border-white/10"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -8,
                    boxShadow: "0 0 40px rgba(212, 165, 116, 0.4), 0 0 60px rgba(125, 90, 111, 0.2)",
                    borderColor: "rgba(212, 165, 116, 0.5)",
                  }}
                  onClick={() => setSelectedRoom(index)}
                >
                  <div className="h-32 md:h-40 overflow-hidden relative">
                    <Image
                      src={room.image || "/placeholder.svg"}
                      alt={room.name}
                      width={300}
                      height={200}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-orange-500/20 transition-colors duration-300 flex items-center justify-center">
                      <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Learn more
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-white mb-1">{room.name}</h3>
                    <p className="text-sm text-gray-400">{room.shortDesc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link href="/membership">
                <motion.button
                  className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-xl text-lg font-medium border border-white/20"
                  whileHover={{
                    scale: 1.02,
                    backgroundColor: "rgba(255, 255, 255, 0.15)",
                    boxShadow: "0 0 30px rgba(212, 165, 116, 0.3)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Learn About Membership
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="wave-divider transform rotate-180 relative z-[2]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="rgba(17, 24, 39, 0.8)"
            fillOpacity="1"
            d="M0,64L60,69.3C120,75,240,85,360,80C480,75,600,53,720,48C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
          ></path>
        </svg>
      </div>

      {/* 3. ARCHETYPE EXPLORER SECTION */}
      <section
        className="relative z-[2] py-32 overflow-hidden scroll-mt-20"
        ref={(el) => (sectionRefs.current[2] = el)}
        id="archetypes"
      >
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div
              className="bg-gray-900/40 backdrop-blur-xl rounded-3xl p-12 md:p-16 border border-white/10"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              style={{
                boxShadow: "0 0 60px rgba(212, 165, 116, 0.2), 0 0 100px rgba(125, 90, 111, 0.2)",
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center mb-8"
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl text-white mb-8 leading-tight font-sans bg-gradient-to-r from-amber-400 via-orange-400 to-purple-400 bg-clip-text text-transparent">
                  Discover Your Creative Archetype
                </h2>
              </motion.div>

              <motion.div
                className="mb-12 text-center max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                  What if success wasn't about climbing someone else's ladder, but about building your own beautiful
                  life? Beyond traditional career paths lies a vibrant spectrum of ways to live and create.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-center space-y-6"
              >
                <Link href="/archetype-explorer">
                  <motion.button
                    className="bg-gradient-to-r from-orange-500 via-amber-500 to-purple-500 text-white px-10 py-4 rounded-xl inline-flex items-center gap-3 text-lg font-medium border border-white/20"
                    style={{
                      boxShadow: "0 0 40px rgba(212, 165, 116, 0.3), 0 0 60px rgba(125, 90, 111, 0.2)",
                    }}
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 0 50px rgba(212, 165, 116, 0.5), 0 0 80px rgba(125, 90, 111, 0.3)",
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Take the Quiz
                    <ArrowRight className="h-5 w-5" />
                  </motion.button>
                </Link>

                <p className="text-base text-gray-400">Free • No email required • 2 minutes</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer z-10"
          onClick={scrollToNextSection}
          whileHover={{ scale: 1.05 }}
        >
          <ChevronDown className="h-6 w-6 text-gray-300" />
        </motion.div>
      </section>

      {/* Wave Divider */}
      <div className="wave-divider relative z-[2]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="rgba(17, 24, 39, 0.8)"
            fillOpacity="1"
            d="M0,64L60,69.3C120,75,240,85,360,80C480,75,600,53,720,48C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
          ></path>
        </svg>
      </div>

      <section className="relative z-[2] py-24 scroll-mt-20" ref={(el) => (sectionRefs.current[3] = el)} id="explore">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-white mb-6 bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                Explore More
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Continue your journey with our shop and community
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Shop Card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Link href="/shop">
                  <motion.div
                    className="bg-gray-900/40 backdrop-blur-xl rounded-2xl p-8 border border-white/10 h-full"
                    whileHover={{
                      y: -8,
                      boxShadow: "0 0 40px rgba(249, 115, 22, 0.4), 0 0 60px rgba(236, 72, 153, 0.2)",
                      borderColor: "rgba(249, 115, 22, 0.5)",
                    }}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="bg-gradient-to-br from-orange-500 to-pink-500 p-3 rounded-xl">
                        <ShoppingBag className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                        Shop
                      </h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      Explore tools, resources, and creative offerings designed to support your journey.
                    </p>
                    <div className="flex items-center gap-2 text-orange-400 font-medium">
                      Browse the Shop
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </motion.div>
                </Link>
              </motion.div>

              {/* Community Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Link href="/community">
                  <motion.div
                    className="bg-gray-900/40 backdrop-blur-xl rounded-2xl p-8 border border-white/10 h-full"
                    whileHover={{
                      y: -8,
                      boxShadow: "0 0 40px rgba(212, 165, 116, 0.3), 0 0 60px rgba(125, 90, 111, 0.2)",
                      borderColor: "rgba(212, 165, 116, 0.5)",
                    }}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="bg-gradient-to-br from-amber-500 to-purple-500 p-3 rounded-xl">
                        <Users className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white bg-gradient-to-r from-amber-400 to-purple-400 bg-clip-text text-transparent">
                        Community
                      </h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      Connect with fellow creators, share experiences, and grow together in a supportive space.
                    </p>
                    <div className="flex items-center gap-2 text-amber-400 font-medium">
                      Join the Community
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            </div>

            <motion.div
              className="text-center mt-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-400 mb-4">Membership opening soon</p>
              <Link href="/membership">
                <span className="text-amber-400 hover:text-amber-300 transition-colors text-sm underline decoration-1 underline-offset-4">
                  Join the waitlist
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
