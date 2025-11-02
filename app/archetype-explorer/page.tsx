"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, BookOpen, X, ArrowRight } from "lucide-react"

export default function ArchetypeExplorerPage() {
  const [showIntroModal, setShowIntroModal] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [quizAnswers, setQuizAnswers] = useState<string[]>([])
  const [showResult, setShowResult] = useState(false)
  const [resultArchetype, setResultArchetype] = useState<any>(null)
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [activeSection, setActiveSection] = useState("hero")

  // Refs for sections
  const heroRef = useRef<HTMLElement>(null)
  const quizRef = useRef<HTMLElement>(null)
  const archetypesRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { ref: heroRef, name: "hero" },
        { ref: quizRef, name: "quiz" },
        { ref: archetypesRef, name: "gallery" },
      ]

      for (const section of sections) {
        if (section.ref.current) {
          const rect = section.ref.current.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section.name)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Archetype data
  const archetypes = [
    {
      name: "The Modern Adventurer",
      slug: "modern-adventurer",
      image: "/modern-adventurer.png",
      essence: "Lives by motion, pursues aliveness over success",
      description:
        "For those who choose possibility over predictability and see life as a series of chapters to explore.",
      color: "from-amber-400 to-orange-500",
      keywords: ["Freedom", "Movement", "Experience"],
      category: "Movement",
      scores: { exploration: 3, building: 1, awareness: 1, healing: 0, creating: 2, teaching: 1 },
    },
    {
      name: "The Localist",
      slug: "localist",
      image: "/localist.png",
      essence: "Roots deep, builds community from the ground up",
      description:
        "For those who believe in the power of place and creating meaningful change in their local community.",
      color: "from-green-400 to-emerald-500",
      keywords: ["Community", "Roots", "Local"],
      category: "Community",
      scores: { exploration: 0, building: 3, awareness: 1, healing: 2, creating: 1, teaching: 2 },
    },
    {
      name: "The Boundaryless Creator",
      slug: "boundaryless-creator",
      image: "/boundaryless-creator.png",
      essence: "Creates without limits, blends mediums fearlessly",
      description:
        "For those who refuse to be confined by traditional categories and create across multiple disciplines.",
      color: "from-purple-400 to-pink-500",
      keywords: ["Creativity", "Innovation", "Limitless"],
      category: "Creation",
      scores: { exploration: 2, building: 1, awareness: 1, healing: 0, creating: 3, teaching: 1 },
    },
    {
      name: "The New Storyteller",
      slug: "new-storyteller",
      image: "/new-storyteller.png",
      essence: "Weaves narratives that bridge worlds",
      description:
        "For those who understand that stories shape reality and use narrative to create connection and change.",
      color: "from-blue-400 to-indigo-500",
      keywords: ["Stories", "Connection", "Bridge"],
      category: "Communication",
      scores: { exploration: 1, building: 1, awareness: 2, healing: 1, creating: 2, teaching: 3 },
    },
    {
      name: "The Regenerator",
      slug: "regenerator",
      image: "/regenerator-card.png",
      essence: "Heals what's broken, restores what's lost",
      description: "For those dedicated to healing systems, communities, and environments back to wholeness.",
      color: "from-teal-400 to-green-500",
      keywords: ["Healing", "Restoration", "Renewal"],
      category: "Healing",
      scores: { exploration: 0, building: 2, awareness: 2, healing: 3, creating: 1, teaching: 1 },
    },
    {
      name: "The Creative Collaborator",
      slug: "creative-collaborator",
      image: "/creative-collaborator-card.png",
      essence: "Builds magic through human connection",
      description: "For those who believe the best creations emerge from bringing people together in meaningful ways.",
      color: "from-rose-400 to-red-500",
      keywords: ["Collaboration", "Magic", "Connection"],
      category: "Community",
      scores: { exploration: 1, building: 2, awareness: 1, healing: 1, creating: 2, teaching: 2 },
    },
    {
      name: "The Conscious Technologist",
      slug: "conscious-technologist",
      image: "/conscious-technologist.png",
      essence: "Technology for human flourishing",
      description:
        "For those who see technology as a tool for creating more conscious, connected, and sustainable futures.",
      color: "from-cyan-400 to-blue-500",
      keywords: ["Technology", "Consciousness", "Future"],
      category: "Innovation",
      scores: { exploration: 2, building: 2, awareness: 2, healing: 1, creating: 2, teaching: 1 },
    },
    {
      name: "The Slow-Life Pioneer",
      slug: "slow-life-pioneer",
      image: "/slow-life-pioneer.png",
      essence: "Depth over speed, presence over productivity",
      description: "For those who choose intentional living and find richness in simplicity and mindful presence.",
      color: "from-stone-400 to-amber-500",
      keywords: ["Presence", "Depth", "Mindful"],
      category: "Wisdom",
      scores: { exploration: 0, building: 1, awareness: 3, healing: 2, creating: 1, teaching: 2 },
    },
    {
      name: "The Experiential Alchemist",
      slug: "experiential-alchemist",
      image: "/experiential-alchemist.png",
      essence: "Transforms ordinary moments into magic",
      description: "For those who craft experiences that awaken wonder and transform how people see the world.",
      color: "from-violet-400 to-purple-500",
      keywords: ["Transformation", "Experience", "Magic"],
      category: "Creation",
      scores: { exploration: 2, building: 1, awareness: 2, healing: 1, creating: 3, teaching: 1 },
    },
    {
      name: "The Explorer of Inner Worlds",
      slug: "explorer-inner-worlds",
      image: "/explorer-inner-worlds.png",
      essence: "Maps the territories of consciousness",
      description: "For those who journey inward to understand the depths of human consciousness and wisdom.",
      color: "from-indigo-400 to-blue-500",
      keywords: ["Inner", "Consciousness", "Exploration"],
      category: "Wisdom",
      scores: { exploration: 2, building: 0, awareness: 3, healing: 2, creating: 1, teaching: 2 },
    },
    {
      name: "The Hybrid Visionary",
      slug: "hybrid-visionary",
      image: "/hybrid-visionary.png",
      essence: "Bridges old and new, creates hybrid solutions",
      description: "For those who synthesize ancient wisdom with modern innovation to create solutions for tomorrow.",
      color: "from-emerald-400 to-teal-500",
      keywords: ["Vision", "Bridge", "Innovation"],
      category: "Innovation",
      scores: { exploration: 2, building: 2, awareness: 2, healing: 1, creating: 2, teaching: 2 },
    },
    {
      name: "The Harmonic Human",
      slug: "harmonic-human",
      image: "/harmonic-human-card.png",
      essence: "Lives in harmony with natural rhythms",
      description: "For those who align their lives with natural cycles and find balance between being and doing.",
      color: "from-amber-400 to-yellow-500",
      keywords: ["Harmony", "Natural", "Balance"],
      category: "Wisdom",
      scores: { exploration: 1, building: 1, awareness: 3, healing: 2, creating: 1, teaching: 2 },
    },
  ]

  const quizQuestions = [
    {
      question: "What calls to you most right now?",
      options: [
        { text: "Exploring new places", value: "exploration", gradient: "from-purple-500/20 to-pink-500/20" },
        { text: "Building something meaningful", value: "building", gradient: "from-blue-500/20 to-cyan-500/20" },
        { text: "Deepening self-awareness", value: "awareness", gradient: "from-violet-500/20 to-purple-500/20" },
        { text: "Healing what's broken", value: "healing", gradient: "from-emerald-500/20 to-teal-500/20" },
        { text: "Creating beauty", value: "creating", gradient: "from-pink-500/20 to-rose-500/20" },
        { text: "Teaching and sharing", value: "teaching", gradient: "from-amber-500/20 to-orange-500/20" },
      ],
    },
    {
      question: "How do you prefer to work and create?",
      options: [
        { text: "Solo and focused", value: "creating", gradient: "from-pink-500/20 to-rose-500/20" },
        { text: "With others", value: "building", gradient: "from-blue-500/20 to-cyan-500/20" },
        { text: "Through nature", value: "awareness", gradient: "from-emerald-500/20 to-teal-500/20" },
        { text: "Using technology", value: "exploration", gradient: "from-purple-500/20 to-pink-500/20" },
        { text: "Teaching and sharing", value: "teaching", gradient: "from-amber-500/20 to-orange-500/20" },
        { text: "Designing experiences", value: "creating", gradient: "from-violet-500/20 to-purple-500/20" },
      ],
    },
    {
      question: "What do you value most?",
      options: [
        { text: "Freedom", value: "exploration", gradient: "from-purple-500/20 to-pink-500/20" },
        { text: "Connection", value: "building", gradient: "from-blue-500/20 to-cyan-500/20" },
        { text: "Presence", value: "awareness", gradient: "from-violet-500/20 to-purple-500/20" },
        { text: "Impact", value: "healing", gradient: "from-emerald-500/20 to-teal-500/20" },
        { text: "Truth", value: "teaching", gradient: "from-amber-500/20 to-orange-500/20" },
        { text: "Flow", value: "creating", gradient: "from-pink-500/20 to-rose-500/20" },
      ],
    },
  ]

  const handleAnswerSelect = (value: string) => {
    const newAnswers = [...quizAnswers, value]
    setQuizAnswers(newAnswers)

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // Calculate best match
      const scores: { [key: string]: number } = {}

      archetypes.forEach((archetype) => {
        let score = 0
        newAnswers.forEach((answer) => {
          score += archetype.scores[answer as keyof typeof archetype.scores] || 0
        })
        scores[archetype.slug] = score
      })

      const bestMatch = archetypes.reduce((best, current) => {
        return scores[current.slug] > scores[best.slug] ? current : best
      })

      setResultArchetype(bestMatch)
      setShowResult(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setQuizAnswers([])
    setShowResult(false)
    setResultArchetype(null)
  }

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  const filteredArchetypes =
    selectedCategory === "All" ? archetypes : archetypes.filter((a) => a.category === selectedCategory)

  const categories = ["All", ...Array.from(new Set(archetypes.map((a) => a.category)))]

  return (
    <div className="relative min-h-screen bg-gray-950">
      {/* Soft Background */}
      <div className="fixed inset-0 z-[-1] bg-gray-950">
        {/* Purple/Pink orb - top left */}
        <motion.div
          className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-purple-500 to-pink-500 opacity-20 blur-[120px]"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        {/* Blue/Cyan orb - top right */}
        <motion.div
          className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 opacity-20 blur-[120px]"
          animate={{
            x: [0, -40, 0],
            y: [0, 50, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 2,
          }}
        />
        {/* Orange/Yellow orb - middle */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-orange-500 to-yellow-500 opacity-15 blur-[140px]"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 1,
          }}
        />
      </div>

      {/* Flowing Shapes */}
      <div className="fixed inset-0 z-[-1] overflow-hidden">
        <motion.div
          className="absolute top-[10%] left-[5%] w-[40vw] h-[40vw] rounded-full bg-amber-300/20 blur-[100px]"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute top-[40%] right-[10%] w-[35vw] h-[35vw] rounded-full bg-pink-300/20 blur-[120px]"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 1,
          }}
        />
      </div>

      <motion.div
        className="fixed top-20 left-0 right-0 z-40 bg-gray-900/40 backdrop-blur-xl border-b border-white/10"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-center gap-12">
            {[
              { name: "Discover", ref: heroRef, id: "hero" },
              { name: "Quiz", ref: quizRef, id: "quiz" },
              { name: "Explore", ref: archetypesRef, id: "gallery" },
            ].map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.ref)}
                className={`flex items-center gap-3 transition-all duration-300 cursor-pointer ${
                  activeSection === section.id ? "text-white" : "text-gray-400 hover:text-gray-200"
                }`}
              >
                <div
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeSection === section.id
                      ? "bg-gradient-to-r from-purple-400 to-pink-400 scale-150 shadow-lg shadow-purple-500/50"
                      : "bg-gray-600"
                  }`}
                />
                <span className="hidden md:inline text-sm font-light tracking-wide">{section.name}</span>
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Introduction Modal */}
      {showIntroModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowIntroModal(false)} />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative bg-gray-900/90 backdrop-blur-xl border border-white/10 rounded-3xl p-12 md:p-16 max-w-3xl mx-auto max-h-[80vh] overflow-y-auto shadow-2xl shadow-purple-500/20"
          >
            <button
              onClick={() => setShowIntroModal(false)}
              className="absolute top-8 right-8 text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-tight">
                Why These 12 Archetypes Matter
              </h2>
            </div>

            <div className="space-y-8 text-gray-300 leading-relaxed">
              <p className="text-lg">
                <strong className="text-white font-medium">The world is changing fast</strong> — and many of us are
                asking the same quiet questions:
              </p>

              <div className="border-l-2 border-purple-500 pl-6 py-2">
                <p className="text-gray-200 italic text-lg">
                  "How do I live in a way that actually feels good? What kind of work makes sense for me now? How do I
                  create a life that's aligned with who I really am?"
                </p>
              </div>

              <p className="text-lg">
                <strong className="text-white font-medium">You're not alone.</strong> In a time when old systems are
                falling away, more people than ever are looking for a new way to be — one that feels real, human, and
                grounded in what matters.
              </p>

              <p className="text-lg">
                That's why we created these archetypes. Each one represents a different way people are already choosing
                to live, work, and create today — outside of systems, and on their own terms.
              </p>

              <div className="border border-white/10 rounded-xl p-6 bg-white/5">
                <p className="text-gray-200 text-lg">
                  These are not personality types or spiritual identities. They're practical life paths that show up in
                  the real world — as projects, jobs, choices, relationships, rhythms.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <button
                onClick={() => {
                  setShowIntroModal(false)
                  scrollToSection(quizRef)
                }}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-10 py-4 rounded-full font-light text-base transition-all duration-300 cursor-pointer tracking-wide shadow-lg shadow-purple-500/30"
              >
                Begin Your Journey
              </button>
            </div>
          </motion.div>
        </div>
      )}

      <section ref={heroRef} className="min-h-screen flex items-center justify-center relative pt-40 pb-24">
        <div className="container mx-auto px-6 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-gray-400 font-light tracking-[0.3em] text-xs uppercase">Discover Your Path</span>
            </motion.div>

            <motion.h1
              className="text-6xl md:text-7xl lg:text-8xl font-extralight mb-12 text-white leading-[1.1] tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Before the Job Title,
              <br />
              <span className="font-light italic bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                There Was You
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-16 font-light max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              12 living paths from the Creator Being House — real ways to live, work, and create from the inside out.
            </motion.p>

            <motion.div
              className="flex flex-col items-center gap-6 mb-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button
                onClick={() => scrollToSection(quizRef)}
                className="group bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-12 py-5 rounded-full font-light text-lg transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer tracking-wide shadow-lg shadow-purple-500/30"
              >
                Discover Your Path
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <button
                onClick={() => scrollToSection(archetypesRef)}
                className="text-gray-400 hover:text-white font-light text-base transition-colors duration-300 flex items-center gap-2 cursor-pointer"
              >
                or browse all 12 paths
                <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>

            <motion.button
              onClick={() => setShowIntroModal(true)}
              className="text-gray-400 hover:text-white font-light text-sm transition-colors duration-300 flex items-center gap-2 mx-auto cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <BookOpen className="h-4 w-4" />
              Why these archetypes matter
            </motion.button>
          </div>

          <motion.div
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <ChevronDown className="h-5 w-5 text-gray-600" />
          </motion.div>
        </div>
      </section>

      <div className="relative h-24">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          className="absolute bottom-0 w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            fill="#fafafa"
            fillOpacity="1"
            d="M0,64L60,69.3C120,75,240,85,360,80C480,75,600,53,720,48C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
          ></path>
        </svg>
      </div>

      <section ref={quizRef} className="py-32 relative">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-extralight mb-6 text-white tracking-tight">Find Your Path</h2>
              <p className="text-lg text-gray-300 leading-relaxed font-light">
                Three simple questions to discover which archetype resonates with you right now.
              </p>
            </div>

            {!showResult ? (
              <div className="bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-12 md:p-16 shadow-2xl shadow-purple-500/10">
                <div className="mb-12">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-light text-gray-400 tracking-wider uppercase">
                      Question {currentQuestion + 1} of {quizQuestions.length}
                    </span>
                  </div>
                  <div className="w-full bg-gray-800/50 rounded-full h-1">
                    <motion.div
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-1 rounded-full shadow-lg shadow-purple-500/50"
                      initial={{ width: 0 }}
                      animate={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentQuestion}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-3xl md:text-4xl font-light mb-12 text-white text-center leading-relaxed">
                      {quizQuestions[currentQuestion].question}
                    </h3>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {quizQuestions[currentQuestion].options.map((option) => (
                        <motion.button
                          key={option.text}
                          onClick={() => handleAnswerSelect(option.value)}
                          className={`group relative p-8 rounded-2xl border border-white/10 hover:border-white/30 bg-gradient-to-br ${option.gradient} backdrop-blur-sm transition-all duration-300 text-center cursor-pointer overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-purple-500/20`}
                          whileHover={{ y: -4, scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="relative z-10">
                            <div className="text-sm font-light text-white tracking-wide leading-relaxed">
                              {option.text}
                            </div>
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>

                {currentQuestion > 0 && (
                  <div className="mt-12 text-center">
                    <button
                      onClick={() => {
                        setCurrentQuestion(currentQuestion - 1)
                        setQuizAnswers(quizAnswers.slice(0, -1))
                      }}
                      className="text-gray-400 hover:text-white font-light transition-colors cursor-pointer text-sm tracking-wide"
                    >
                      ← Back
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <motion.div
                className="bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-12 md:p-16 shadow-2xl shadow-purple-500/10"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center">
                  <h3 className="text-3xl font-light text-white mb-12 tracking-tight">Your Path</h3>

                  <div className="flex flex-col md:flex-row items-center gap-12 mb-12">
                    <div className="relative">
                      <img
                        src={resultArchetype?.image || "/placeholder.svg"}
                        alt={resultArchetype?.name}
                        className="w-48 h-64 object-cover rounded-2xl border border-white/10 shadow-2xl"
                        style={{
                          objectPosition: "center 20%",
                        }}
                      />
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-purple-500/20 to-transparent" />
                    </div>
                    <div className="text-center md:text-left flex-1">
                      <h4 className="text-2xl font-light text-white mb-4 tracking-tight">{resultArchetype?.name}</h4>
                      <p className="text-gray-300 text-base mb-6 leading-relaxed italic font-light">
                        "{resultArchetype?.essence}"
                      </p>
                      <p className="text-gray-400 mb-8 leading-relaxed font-light">{resultArchetype?.description}</p>
                      <div className="flex flex-wrap gap-2 mb-8 justify-center md:justify-start">
                        {resultArchetype?.keywords.map((keyword: string) => (
                          <span
                            key={keyword}
                            className="border border-white/20 text-gray-300 px-3 py-1 rounded-full text-xs font-light tracking-wide bg-white/5"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <Link href={`/archetype-explorer/${resultArchetype?.slug}`}>
                          <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full font-light transition-all duration-300 cursor-pointer tracking-wide shadow-lg shadow-purple-500/30">
                            Explore This Path
                          </button>
                        </Link>
                        <button
                          onClick={resetQuiz}
                          className="border border-white/20 hover:border-white/40 text-gray-300 hover:text-white px-8 py-3 rounded-full font-light transition-all duration-300 cursor-pointer tracking-wide bg-white/5"
                        >
                          Retake Quiz
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-white/10 pt-8">
                    <p className="text-gray-400 text-base mb-6 font-light leading-relaxed">
                      This is your starting point. Explore all 12 paths below to see how different archetypes might
                      intersect with your journey.
                    </p>
                    <button
                      onClick={() => scrollToSection(archetypesRef)}
                      className="text-gray-300 hover:text-white font-light transition-colors duration-300 cursor-pointer text-sm tracking-wide"
                    >
                      See All 12 Paths →
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      <div className="relative h-24 transform rotate-180">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          className="absolute bottom-0 w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            fill="#fafafa"
            fillOpacity="1"
            d="M0,64L60,69.3C120,75,240,85,360,80C480,75,600,53,720,48C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
          ></path>
        </svg>
      </div>

      <section ref={archetypesRef} className="py-32 relative">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-5xl md:text-6xl font-extralight mb-8 text-white tracking-tight">
              12 Ways to Live and Work
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed mb-12 font-light">
              Each archetype represents a different way of being in the world. Explore them all to find the ones that
              resonate.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-light transition-all duration-300 cursor-pointer text-sm tracking-wide ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30"
                      : "bg-gray-900/40 text-gray-400 border border-white/10 hover:border-white/30 hover:text-white backdrop-blur-sm"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <AnimatePresence mode="wait">
              {filteredArchetypes.map((archetype, index) => (
                <motion.div
                  key={archetype.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  layout
                  onMouseEnter={() => setHoveredCard(archetype.slug)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <Link href={`/archetype-explorer/${archetype.slug}`}>
                    <div className="group cursor-pointer h-full">
                      <div className="bg-gray-900/40 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500 h-full flex flex-col shadow-lg hover:shadow-2xl hover:shadow-purple-500/20">
                        <div className="relative overflow-hidden h-80">
                          <img
                            src={archetype.image || "/placeholder.svg"}
                            alt={archetype.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            style={{
                              objectPosition: "center 20%",
                            }}
                          />

                          <div className="absolute top-4 left-4">
                            <span className="bg-gray-900/80 backdrop-blur-sm text-gray-300 px-3 py-1 rounded-full text-xs font-light tracking-wide border border-white/10">
                              {archetype.category}
                            </span>
                          </div>

                          <div
                            className={`absolute inset-0 bg-gray-950/90 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300 ${
                              hoveredCard === archetype.slug ? "opacity-100" : "opacity-0"
                            }`}
                          >
                            <div className="text-center text-white">
                              <ArrowRight className="h-6 w-6 mx-auto mb-2" />
                              <p className="text-sm font-light tracking-wide">Explore This Path</p>
                            </div>
                          </div>
                        </div>

                        <div className="p-8 flex-1 flex flex-col">
                          <h3 className="text-xl font-light mb-4 text-white group-hover:text-gray-200 transition-colors duration-300 tracking-tight">
                            {archetype.name}
                          </h3>
                          <p className="text-gray-400 leading-relaxed font-light text-sm mb-6 flex-1">
                            {archetype.description}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {archetype.keywords.map((keyword) => (
                              <span
                                key={keyword}
                                className="border border-white/10 text-gray-400 px-2 py-1 rounded-full text-xs font-light tracking-wide bg-white/5"
                              >
                                {keyword}
                              </span>
                            ))}
                          </div>
                          <div className="text-gray-500 text-sm italic border-t border-white/10 pt-4 font-light">
                            "{archetype.essence}"
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  )
}
