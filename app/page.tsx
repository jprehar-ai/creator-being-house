"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, ChevronDown, X, ShoppingBag, Users } from "lucide-react"
import { SectionNavigation } from "@/components/section-navigation"

export default function Page() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeSection, setActiveSection] = useState(0)
  const [showArchetypeModal, setShowArchetypeModal] = useState(false)
  const [selectedArchetype, setSelectedArchetype] = useState<number | null>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const sectionRefs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
    }

    const observers = sectionRefs.current.map((ref, index) => {
      if (!ref) return null
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(index)
          }
        },
        { threshold: 0.3 }
      )
      observer.observe(ref)
      return observer
    })

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      observers.forEach((obs) => obs?.disconnect())
    }
  }, [])

  const scrollToSection = (index: number) => {
    sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth" })
  }

  const sections = [
    { id: "hero", label: "Welcome", color: "bg-amber-400" },
    { id: "house", label: "The House", color: "bg-purple-400" },
    { id: "archetypes", label: "Archetypes", color: "bg-rose-400" },
    { id: "explore", label: "Explore", color: "bg-emerald-400" },
  ]

  const archetypes = [
    {
      name: "The Visionary",
      description: "Sees possibilities others miss. Driven by imagination and future thinking.",
      color: "from-violet-500 to-purple-600",
      bgColor: "bg-violet-500/10",
      borderColor: "border-violet-500/30",
      icon: "eye",
      traits: ["Imaginative", "Forward-thinking", "Innovative", "Intuitive"],
    },
    {
      name: "The Alchemist",
      description: "Transforms the ordinary into extraordinary. Masters of synthesis and change.",
      color: "from-amber-500 to-orange-600",
      bgColor: "bg-amber-500/10",
      borderColor: "border-amber-500/30",
      icon: "flask",
      traits: ["Transformative", "Resourceful", "Adaptive", "Creative"],
    },
    {
      name: "The Architect",
      description: "Builds structures that endure. Brings order from chaos with precision.",
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
      icon: "compass",
      traits: ["Strategic", "Methodical", "Precise", "Grounded"],
    },
    {
      name: "The Weaver",
      description: "Connects threads of meaning. Creates tapestries of relationship and story.",
      color: "from-rose-500 to-pink-600",
      bgColor: "bg-rose-500/10",
      borderColor: "border-rose-500/30",
      icon: "link",
      traits: ["Empathetic", "Connective", "Storyteller", "Harmonious"],
    },
    {
      name: "The Guardian",
      description: "Protects what matters most. Holds space for growth and healing.",
      color: "from-emerald-500 to-green-600",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/30",
      icon: "shield",
      traits: ["Protective", "Nurturing", "Steadfast", "Wise"],
    },
    {
      name: "The Catalyst",
      description: "Ignites transformation in others. Sparks movement and breakthrough.",
      color: "from-red-500 to-orange-600",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/30",
      icon: "zap",
      traits: ["Energizing", "Bold", "Inspiring", "Dynamic"],
    },
  ]

  const rooms = [
    {
      name: "The Rhythm Room",
      description: "Find your creative rhythm through music, movement, and sonic exploration.",
      image: "/rhythm-room-hero.png",
      color: "from-purple-600 to-indigo-800",
      href: "/rooms/rhythm",
    },
    {
      name: "The Mirror Room",
      description: "Reflect on your journey. Discover your authentic creative self.",
      image: "/mirror-room-hero.png",
      color: "from-cyan-600 to-blue-800",
      href: "/rooms/mirror",
    },
    {
      name: "The Garden Room",
      description: "Plant seeds of intention. Cultivate ideas in a nurturing space.",
      image: "/garden-room-hero.png",
      color: "from-emerald-600 to-green-800",
      href: "/rooms/garden",
    },
    {
      name: "The Forge Room",
      description: "Shape raw ideas into refined creations through focused effort.",
      image: "/forge-room-hero.png",
      color: "from-orange-600 to-red-800",
      href: "/rooms/forge",
    },
  ]

  return (
    <div className="relative overflow-hidden bg-[#0a0a0f]" ref={containerRef}>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-rose-500 to-purple-600 z-50 origin-left"
        style={{ scaleX: scrollProgress / 100 }}
      />

      {/* Animated Background */}
      <div
        className="absolute inset-0 z-0 transition-all duration-[10000ms]"
        style={{
          background: `radial-gradient(ellipse at 20% 50%, rgba(120, 80, 200, 0.08) 0%, transparent 50%),
                       radial-gradient(ellipse at 80% 20%, rgba(200, 120, 80, 0.06) 0%, transparent 50%),
                       radial-gradient(ellipse at 50% 80%, rgba(80, 200, 150, 0.05) 0%, transparent 50%)`,
        }}
      />

      {/* Floating Orbs */}
      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
        {isLoaded && (
          <>
            <motion.div
              className="absolute w-96 h-96 rounded-full bg-purple-600/5 blur-3xl"
              animate={{
                x: [0, 100, -50, 0],
                y: [0, -80, 60, 0],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
              style={{ top: "10%", left: "10%" }}
            />
            <motion.div
              className="absolute w-80 h-80 rounded-full bg-amber-500/5 blur-3xl"
              animate={{
                x: [0, -70, 80, 0],
                y: [0, 60, -40, 0],
              }}
              transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
              style={{ top: "50%", right: "10%" }}
            />
            <motion.div
              className="absolute w-72 h-72 rounded-full bg-emerald-500/5 blur-3xl"
              animate={{
                x: [0, 50, -60, 0],
                y: [0, -50, 70, 0],
              }}
              transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
              style={{ bottom: "10%", left: "30%" }}
            />
          </>
        )}
      </div>

      {/* Section Navigation */}
      <SectionNavigation sections={sections} activeSection={activeSection} scrollToSection={scrollToSection} />

      {/* Hero Section */}
      <section
        className="min-h-screen relative z-[2] flex flex-col justify-center items-center scroll-mt-0 overflow-hidden"
        ref={(el) => {
          sectionRefs.current[0] = el
        }}
        id="hero"
      >
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
              <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-sm text-white/70">A Living Space for Creator Beings</span>
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <span className="text-white">Welcome to the</span>
            <br />
            <span className="bg-gradient-to-r from-amber-300 via-rose-400 to-purple-500 bg-clip-text text-transparent">
              Creator Being House
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            A sanctuary where creativity meets consciousness. Explore rooms designed to awaken your unique creative
            archetype and connect with a community of fellow creators.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <Link
              href="/discover"
              className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-rose-500 rounded-full text-white font-semibold text-lg hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300"
            >
              Discover Your Path
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/shop"
              className="group flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 rounded-full text-white font-semibold text-lg hover:bg-white/10 transition-all duration-300"
            >
              <ShoppingBag className="w-5 h-5" />
              Visit Shop
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-white/30" />
        </motion.div>
      </section>

      {/* Wave Divider 1 */}
      <div className="wave-divider relative z-[2]">
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

      {/* House Section */}
      <section
        className="relative z-[2] py-24 scroll-mt-20"
        ref={(el) => {
          sectionRefs.current[1] = el
        }}
        id="house"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Explore the{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">House</span>
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Each room is a unique space designed to nurture different aspects of your creative spirit.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rooms.map((room, index) => (
              <motion.div
                key={room.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <Link href={room.href} className="group block">
                  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 transition-all duration-500">
                    <div className={`h-48 bg-gradient-to-br ${room.color} relative overflow-hidden`}>
                      <Image
                        src={room.image}
                        alt={room.name}
                        fill
                        className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                        {room.name}
                      </h3>
                      <p className="text-white/50 text-sm leading-relaxed">{room.description}</p>
                      <div className="mt-4 flex items-center gap-2 text-amber-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        Enter Room <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wave Divider 2 */}
      <div className="wave-divider transform rotate-180 relative z-[2]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="rgba(17, 24, 39, 0.5)"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,69.3C960,85,1056,107,1152,106.7C1248,107,1344,85,1392,74.7L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>

      {/* Archetypes Section */}
      <section
        className="relative z-[2] py-32 overflow-hidden scroll-mt-20"
        ref={(el) => {
          sectionRefs.current[2] = el
        }}
        id="archetypes"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Discover Your{" "}
              <span className="bg-gradient-to-r from-rose-400 to-amber-400 bg-clip-text text-transparent">
                Archetype
              </span>
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Every creator embodies a unique archetype. Which one resonates with your creative spirit?
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {archetypes.map((archetype, index) => (
              <motion.button
                key={archetype.name}
                className={`text-left p-6 rounded-2xl border ${archetype.borderColor} ${archetype.bgColor} backdrop-blur-sm hover:scale-[1.02] transition-all duration-300`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => {
                  setSelectedArchetype(index)
                  setShowArchetypeModal(true)
                }}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${archetype.color} flex items-center justify-center mb-4`}>
                  <span className="text-white text-xl font-bold">{archetype.name[4]}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{archetype.name}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-4">{archetype.description}</p>
                <div className="flex flex-wrap gap-2">
                  {archetype.traits.map((trait) => (
                    <span
                      key={trait}
                      className="px-2 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-white/60"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Wave Divider 3 */}
      <div className="wave-divider relative z-[2]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="rgba(17, 24, 39, 0.8)"
            d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,48C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>

      {/* Explore Section */}
      <section
        className="relative z-[2] py-24 scroll-mt-20"
        ref={(el) => {
          sectionRefs.current[3] = el
        }}
        id="explore"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Begin?
              </span>
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Join a growing community of creator beings who are discovering their authentic creative selves and
              building meaningful connections.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/community"
                className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full text-white font-semibold text-lg hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300"
              >
                <Users className="w-5 h-5" />
                Join Community
              </Link>
              <Link
                href="/discover"
                className="group flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 rounded-full text-white font-semibold text-lg hover:bg-white/10 transition-all duration-300"
              >
                Take the Quiz
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer spacer */}
      <div className="relative z-[2] h-20" />

      {/* Archetype Modal */}
      <AnimatePresence>
        {showArchetypeModal && selectedArchetype !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setShowArchetypeModal(false)} />
            <motion.div
              className="relative max-w-lg w-full bg-gray-900 border border-white/10 rounded-3xl p-8 overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
            >
              <button
                onClick={() => setShowArchetypeModal(false)}
                className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>

              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${archetypes[selectedArchetype].color} flex items-center justify-center mb-6`}
              >
                <span className="text-white text-2xl font-bold">
                  {archetypes[selectedArchetype].name[4]}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">{archetypes[selectedArchetype].name}</h3>
              <p className="text-white/60 leading-relaxed mb-6">{archetypes[selectedArchetype].description}</p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-white/40 uppercase tracking-wider mb-3">Core Traits</h4>
                <div className="flex flex-wrap gap-2">
                  {archetypes[selectedArchetype].traits.map((trait) => (
                    <span
                      key={trait}
                      className={`px-3 py-1.5 text-sm rounded-full ${archetypes[selectedArchetype].bgColor} ${archetypes[selectedArchetype].borderColor} border text-white/80`}
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href="/discover"
                className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${archetypes[selectedArchetype].color} rounded-full text-white font-semibold hover:shadow-lg transition-all duration-300`}
                onClick={() => setShowArchetypeModal(false)}
              >
                Discover Your Archetype
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
