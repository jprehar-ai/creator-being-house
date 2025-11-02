"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence, useInView, useScroll, useTransform } from "framer-motion"
import {
  ArrowLeft,
  ArrowRight,
  MessageCircle,
  Clock,
  Heart,
  Sparkles,
  Moon,
  Compass,
  Eye,
  Wind,
  Sun,
  X,
} from "lucide-react"
import { KibiChat } from "@/components/kibi-chat"

export default function WelcomeRoomPage() {
  const [currentTime, setCurrentTime] = useState("")
  const [selectedFeeling, setSelectedFeeling] = useState<string | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [showWelcomeModal, setShowWelcomeModal] = useState(false)
  const [hasEnteredDoor, setHasEnteredDoor] = useState(false)
  const [expandedSection, setExpandedSection] = useState<string | null>(null)
  const [activeFlow, setActiveFlow] = useState<string | null>(null)

  // Refs for sections
  const containerRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const teachingRef = useRef<HTMLDivElement>(null)
  const compassRef = useRef<HTMLDivElement>(null)
  const roomsRef = useRef<HTMLDivElement>(null)

  // Scroll animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start", "end"],
  })

  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const backgroundY = useTransform(scrollYProgress, [0, 0.3], [0, -100])

  useEffect(() => {
    setIsLoaded(true)
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(
        now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
      )
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  const feelings = [
    {
      name: "Curious",
      icon: Eye,
      suggestion: "Studio",
      practice: "Follow your questions without attachment. Notice what draws your attention right now.",
      reflection: "Your curiosity is the doorway to expansion. Let it guide you gently.",
      color: "#8B7355", // Warm earth brown
      bgColor: "rgba(248, 246, 243, 0.9)",
      borderColor: "#A68B5B",
    },
    {
      name: "Peaceful",
      icon: Moon,
      suggestion: "Mirror Room",
      practice: "Take three deep breaths and feel your feet on the ground.",
      reflection: "This peaceful state is your natural resonance. Notice how time expands here.",
      color: "#6B8E7F", // Sage green (water/earth)
      bgColor: "rgba(245, 248, 246, 0.9)",
      borderColor: "#7FA08F",
    },
    {
      name: "Tender",
      icon: Heart,
      suggestion: "Mirror Room",
      practice: "Place a hand on your heart and listen to what it's telling you.",
      reflection: "Hold this tenderness gently. What is it telling you about what matters most?",
      color: "#A0826D", // Clay/terracotta
      bgColor: "rgba(249, 247, 245, 0.9)",
      borderColor: "#B8967D",
    },
    {
      name: "Creative",
      icon: Sparkles,
      suggestion: "Studio",
      practice: "Ask yourself: What small thing wants to be made through me today?",
      reflection: "This creative energy is seeking expression. Trust what wants to emerge.",
      color: "#7A8471", // Moss green
      bgColor: "rgba(246, 248, 246, 0.9)",
      borderColor: "#8A9481",
    },
    {
      name: "Anxious",
      icon: Wind,
      suggestion: "Mirror Room",
      practice: "Ground yourself: 5 things you see, 4 you hear, 3 you feel.",
      reflection: "Beneath anxiety often lies excitement. Place a hand on your heart and breathe.",
      color: "#8C8B89", // Soft stone gray
      bgColor: "rgba(248, 248, 247, 0.9)",
      borderColor: "#9C9B99",
    },
    {
      name: "Unclear",
      icon: Compass,
      suggestion: "Source Room",
      practice: "It's okay not to know. Just breathe and be present.",
      reflection: "Uncertainty is the doorway to possibility. Sit with the not-knowing.",
      color: "#9B8B73", // Warm taupe
      bgColor: "rgba(249, 247, 244, 0.9)",
      borderColor: "#AB9B83",
    },
  ]

  const rooms = [
    {
      name: "Mirror Room",
      description: "Return to your essence",
      longDescription: "A space for reflection, where you can reconnect with your true self and inner wisdom.",
      icon: Moon,
      color: "#6B8E7F", // Sage green
      bgColor: "rgba(245, 248, 246, 0.9)",
      href: "/room/mirror-room",
      image: "/mirror-room.png",
    },
    {
      name: "Studio",
      description: "Create something new",
      longDescription: "A sanctuary for your creative expression, where inspiration flows and ideas take form.",
      icon: Sparkles,
      color: "#8B7355", // Warm earth
      bgColor: "rgba(248, 246, 243, 0.9)",
      href: "/room/creator-being-room",
      image: "/creator-being-room.png",
    },
    {
      name: "Source Room",
      description: "Open to a wider field",
      longDescription: "Connect with the greater field of consciousness and expand your awareness beyond the personal.",
      icon: Sun,
      color: "#A0826D", // Clay
      bgColor: "rgba(249, 247, 245, 0.9)",
      href: "/room/masterclass-room",
      image: "/masterclass-room.png",
    },
  ]

  const handleEnterDoor = () => {
    setShowWelcomeModal(true)
    setHasEnteredDoor(true)
  }

  const handleCloseWelcome = () => {
    setShowWelcomeModal(false)
  }

  const scrollToCompass = () => {
    compassRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  // Hero Section
  const HeroSection = () => {
    const isInView = useInView(heroRef, { once: true })

    return (
      <section ref={heroRef} className="min-h-screen relative flex items-center overflow-hidden">
        {/* Background gradient - earth tones */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-stone-100/40 via-amber-50/30 to-emerald-50/30 z-0"
          style={{ opacity: backgroundOpacity, y: backgroundY }}
        />

        {/* Organic shapes - earth elements */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96  bg-stone-200/20 blur-3xl"
            animate={{
              scale: [1, 1.05, 1],
              x: [0, 10, 0],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-80 h-80  bg-emerald-200/15 blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              x: [0, -15, 0],
              y: [0, 15, 0],
            }}
            transition={{
              duration: 18,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        </div>

        <div className="container mx-auto max-w-6xl px-4 relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <motion.div
              className="flex items-center gap-2 text-stone-600 bg-white/80 backdrop-blur-sm px-3 py-1  shadow-sm border border-stone-200"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Clock className="w-4 h-4" />
              <span className="text-sm font-medium">{currentTime}</span>
              <span className="text-gray-400">•</span>
              <span className="text-sm text-stone-600 font-medium">Always Open</span>
            </motion.div>
          </div>

          {hasEnteredDoor && (
            <motion.div
              className="flex items-center gap-3 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <button
                onClick={scrollToCompass}
                className="flex items-center gap-2 text-blue-600 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-full shadow-sm border border-blue-200 transition-all duration-300 hover:shadow-md"
              >
                <Compass className="w-4 h-4" />
                <span className="text-sm font-medium">Try Frequency Alignment Tool</span>
              </button>
            </motion.div>
          )}

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <motion.h1
                className="text-6xl md:text-7xl lg:text-8xl font-light text-gray-900 mb-8 leading-[0.9] tracking-tight"
                style={{ fontFamily: "Georgia, serif" }}
                animate={{
                  opacity: [0.9, 1, 0.9],
                }}
                transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
              >
                Welcome
                <span className="block text-stone-600 font-normal mt-2">Home</span>
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light max-w-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Your sanctuary awaits. Step through when you're ready.
              </motion.p>
            </motion.div>

            <motion.div
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.5 }}
            >
              <div className="relative w-full max-w-md">
                {/* Interactive doorway - updated design */}
                <motion.button
                  onClick={handleEnterDoor}
                  className="relative w-full h-full group cursor-pointer"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/welcome-room-terracotta.png"
                    alt="Welcome Room Door"
                    width={500}
                    height={500}
                    className="shadow-lg transition-all duration-500 group-hover:shadow-2xl"
                  />

                  {/* Hover overlay - soft and welcoming */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-100/60 via-stone-100/40 to-emerald-100/60 opacity-0 group-hover:opacity-100 transition-all duration-700 flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-sm px-8 py-4 rounded-2xl shadow-xl border border-amber-200/50 transform scale-95 group-hover:scale-100 transition-all duration-500">
                      <span className="text-stone-700 font-light tracking-wide text-lg">Step inside</span>
                    </div>
                  </div>

                  {/* Subtle border on hover */}
                  <motion.div className="absolute inset-0 border-2 border-stone-400/0 group-hover:border-stone-400/30 transition-colors duration-500" />

                  {/* Pulsing indicator for emphasis - more subtle */}
                  {!hasEnteredDoor && (
                    <motion.div
                      className="absolute inset-0 border border-stone-400/40"
                      animate={{
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                      }}
                    />
                  )}
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Scroll indicator - only show after entering */}
          {hasEnteredDoor && (
            <motion.div
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <motion.div
                animate={{
                  y: [0, 10, 0],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              >
                <p className="text-stone-600 mb-2 text-sm font-light">Scroll to continue</p>
                <div className="w-0.5 h-10 bg-gradient-to-b from-stone-600 to-transparent mx-auto"></div>
              </motion.div>
            </motion.div>
          )}
        </div>
      </section>
    )
  }

  // Welcome Modal - Softer and more immersive
  const WelcomeModal = () => (
    <AnimatePresence>
      {showWelcomeModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-gradient-to-br from-black/40 via-stone-900/50 to-amber-900/40 backdrop-blur-xl z-50 flex items-center justify-center p-4"
          onClick={handleCloseWelcome}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Main welcome box - soft and organic */}
            <div className="relative bg-gradient-to-br from-white/95 via-amber-50/90 to-stone-50/95 backdrop-blur-sm rounded-3xl shadow-2xl border border-amber-200/30 overflow-hidden">
              {/* Gentle background elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-100/20 via-transparent to-emerald-100/20"></div>
              <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-amber-200/20 blur-3xl"></div>
              <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-emerald-200/20 blur-3xl"></div>

              {/* Close button - gentle */}
              <button
                onClick={handleCloseWelcome}
                className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center text-stone-400 hover:text-stone-600 hover:bg-white/50 transition-all duration-300 z-20"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Content */}
              <div className="relative z-10 p-12 md:p-16">
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.h2
                    className="text-4xl md:text-5xl font-light text-gray-800 mb-8 leading-tight"
                    style={{ fontFamily: "Georgia, serif" }}
                    animate={{
                      opacity: [0.9, 1, 0.9],
                    }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                  >
                    Welcome
                    <span className="block text-amber-700 font-normal mt-2">Home</span>
                  </motion.h2>

                  <div className="max-w-xl mx-auto mb-10">
                    <motion.p
                      className="text-lg md:text-xl text-gray-700 leading-relaxed font-light mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      You've found your way to a gentle space where you can breathe, feel, and simply be.
                    </motion.p>
                    <motion.p
                      className="text-lg text-gray-600 leading-relaxed font-light"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      This is where your natural rhythm lives, where creation flows from presence, and where every
                      feeling is welcome.
                    </motion.p>
                  </div>

                  {/* Soft continue button */}
                  <motion.button
                    onClick={handleCloseWelcome}
                    className="group relative px-12 py-4 bg-gradient-to-r from-amber-400/80 to-stone-400/80 text-white font-light text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                  >
                    {/* Gentle shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    <span className="relative">Take me home</span>
                  </motion.button>
                </motion.div>
              </div>

              {/* Soft border glow */}
              <div className="absolute inset-0 rounded-3xl border border-amber-300/20 pointer-events-none"></div>
              <motion.div
                className="absolute inset-0 rounded-3xl border border-amber-400/30 pointer-events-none"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )

  // Teaching Section - Simplified with straight corners
  const TeachingSection = () => {
    const isInView = useInView(teachingRef, { once: true })
    const [activeFlow, setActiveFlow] = useState<string | null>(null)

    const flows = [
      {
        id: "frequency",
        title: "Living from Frequency",
        content: `To live in creation is to understand that your reality is shaped not by your effort, but by your energy. Everything begins with frequency. Every thought, feeling, and internal state carries a vibrational signature that determines what you experience, how you perceive, and what unfolds around you.

When your energy is calm, open, and aligned, life flows out from you in harmony. When it's scattered or contracted, your experience reflects that same dissonance. This is not metaphorical. This is the architecture of the field, and you are the tuning fork.`,
        color: "#8B7355",
      },
      {
        id: "creation",
        title: "The Art of Creation",
        content: `Living in creation means becoming aware of your state and choosing to adjust it - not from force, but from intention. You are not reacting to the world around you. You are setting the tone from within.

Creation is not something you push toward. It's something you open to, by aligning with the energy of what you desire now. When you understand this, you stop seeking change from the outside and start creating from the inside.`,
        color: "#6B8E7F",
      },
    ]

    // Only show if user has entered the door
    if (!hasEnteredDoor) return null

    return (
      <section ref={teachingRef} className="py-24 px-4 relative overflow-hidden">
        {/* Natural background */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-50/50 via-emerald-50/30 to-amber-50/40 z-0"></div>

        <motion.div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-16">
            <motion.h2
              className="text-5xl md:text-6xl font-light text-gray-800 mb-8"
              style={{ fontFamily: "Georgia, serif" }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              The Art of Living in
              <span className="block text-stone-600 font-normal mt-1">Creation</span>
            </motion.h2>
          </div>

          {/* Simple sections */}
          <div className="space-y-8">
            {flows.map((flow, index) => (
              <motion.div
                key={flow.id}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
              >
                {/* Simple card */}
                <div className="relative bg-white/80 backdrop-blur-sm shadow-lg border border-white/40 overflow-hidden">
                  {/* Content */}
                  <div className="relative bg-white/90 backdrop-blur-sm m-0.5">
                    {/* Header - always visible */}
                    <button
                      onClick={() => setActiveFlow(activeFlow === flow.id ? null : flow.id)}
                      className="w-full p-6 md:p-8 text-left flex items-center justify-between hover:bg-white/40 transition-all duration-300"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-3 h-3" style={{ backgroundColor: flow.color }}></div>
                        <h3
                          className="text-2xl md:text-3xl font-light text-gray-800"
                          style={{ fontFamily: "Georgia, serif" }}
                        >
                          {flow.title}
                        </h3>
                      </div>
                      <motion.div
                        animate={{ rotate: activeFlow === flow.id ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="ml-4"
                      >
                        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </motion.div>
                    </button>

                    {/* Expandable content */}
                    <AnimatePresence>
                      {activeFlow === flow.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 md:px-8 pb-6 md:pb-8">
                            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                              {flow.content.split("\n\n").map((paragraph, pIndex) => (
                                <p key={pIndex} className="font-light">
                                  {paragraph}
                                </p>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    )
  }

  // Resonance Compass - Dedicated Section with Introduction
  const ResonanceCompassSection = () => {
    const isInView = useInView(compassRef, { once: true })
    const [currentFeeling, setCurrentFeeling] = useState<string | null>(null)
    const [desiredFeeling, setDesiredFeeling] = useState<string | null>(null)
    const [compassRotation, setCompassRotation] = useState(0)
    const [isCalibrating, setIsCalibrating] = useState(false)
    const [showGuidance, setShowGuidance] = useState(false)
    const [guidance, setGuidance] = useState<string>("")
    const [isLoadingGuidance, setIsLoadingGuidance] = useState(false)
    const [compassStep, setCompassStep] = useState<"select" | "choose" | "calibrate" | "guidance">("select")

    const compassFeelings = [
      { name: "Joy", angle: 0, color: "#F59E0B" },
      { name: "Peace", angle: 45, color: "#10B981" },
      { name: "Curiosity", angle: 90, color: "#3B82F6" },
      { name: "Clarity", angle: 135, color: "#8B5CF6" },
      { name: "Love", angle: 180, color: "#EC4899" },
      { name: "Courage", angle: 225, color: "#EF4444" },
      { name: "Gratitude", angle: 270, color: "#F97316" },
      { name: "Flow", angle: 315, color: "#06B6D4" },
    ]

    const currentStates = [
      { name: "Anxious" },
      { name: "Confused" },
      { name: "Tired" },
      { name: "Frustrated" },
      { name: "Scattered" },
      { name: "Heavy" },
      { name: "Stuck" },
      { name: "Overwhelmed" },
      { name: "Neutral" },
      { name: "Okay" },
    ]

    const handleCurrentFeelingSelect = (feeling: string) => {
      setCurrentFeeling(feeling)
      setCompassStep("choose")
    }

    const handleDesiredFeelingSelect = (feeling: string) => {
      setDesiredFeeling(feeling)
      const targetFeeling = compassFeelings.find((f) => f.name === feeling)
      if (targetFeeling) {
        // Add a smooth spinning animation
        setCompassRotation(targetFeeling.angle)
      }
      setCompassStep("calibrate")
    }

    const handleCalibrate = async () => {
      if (!currentFeeling || !desiredFeeling) return

      setIsCalibrating(true)
      setIsLoadingGuidance(true)

      try {
        // Simulate API call to ChatGPT
        const prompt = `I'm feeling ${currentFeeling.toLowerCase()} and want to shift to feeling ${desiredFeeling.toLowerCase()}. Please provide a brief, practical guidance (2-3 sentences) for this emotional frequency shift. Focus on actionable steps I can take right now.`

        // Simulate API response
        await new Promise((resolve) => setTimeout(resolve, 2000))

        const mockResponses = {
          [`${currentFeeling}-${desiredFeeling}`]: `To shift from ${currentFeeling.toLowerCase()} to ${desiredFeeling.toLowerCase()}, start by taking three deep breaths and placing your hand on your heart. ${getSpecificGuidance(currentFeeling, desiredFeeling)} Remember, this shift happens gently - trust the process and be patient with yourself.`,
        }

        const response =
          mockResponses[`${currentFeeling}-${desiredFeeling}`] || getSpecificGuidance(currentFeeling, desiredFeeling)
        setGuidance(response)
      } catch (error) {
        setGuidance("Trust your inner knowing. The shift is already beginning within you.")
      } finally {
        setIsCalibrating(false)
        setIsLoadingGuidance(false)
        setShowGuidance(true)
        setCompassStep("guidance")
      }
    }

    const getSpecificGuidance = (current: string, desired: string) => {
      const guidanceMap: Record<string, Record<string, string>> = {
        Anxious: {
          Peace:
            "Ground yourself by feeling your feet on the floor and naming 5 things you can see around you. Let your breath slow naturally as you soften your shoulders.",
          Joy: "Find one small thing that brings you delight right now - maybe the warmth of sunlight or a favorite song. Let that feeling expand gently through your body.",
          Clarity:
            "Ask yourself: What's the one thing that truly matters in this moment? Let everything else fade into the background.",
        },
        Confused: {
          Clarity:
            "Stop trying to figure it out with your mind. Place your hand on your heart and ask your body what it knows. Listen to the first thing that comes up.",
          Peace:
            "It's okay not to know right now. Rest in the space between questions and trust that clarity will emerge when it's ready.",
          Curiosity:
            "What if confusion is just the beginning of discovery? Ask yourself: What wants to be explored here?",
        },
        Tired: {
          Flow: "Move your body gently - stretch, sway, or take a short walk. Let energy circulate rather than forcing it.",
          Peace: "Honor your need for rest. True productivity comes from restoration, not pushing through exhaustion.",
          Joy: "What would feel nourishing right now? Follow that impulse, even if it's just for a few minutes.",
        },
        Frustrated: {
          Courage: "Channel this energy into action. What wants to change? Take one small step toward that shift.",
          Peace: "This feeling has information for you. What is it trying to tell you about what matters most?",
          Flow: "Where can you soften? What would ease look like in this situation?",
        },
      }

      return (
        guidanceMap[current]?.[desired] ||
        `To move from ${current.toLowerCase()} to ${desired.toLowerCase()}, start by acknowledging where you are without judgment. Then gently invite the energy of ${desired.toLowerCase()} into your awareness.`
      )
    }

    const resetCompass = () => {
      setCurrentFeeling(null)
      setDesiredFeeling(null)
      setShowGuidance(false)
      setGuidance("")
      setCompassRotation(0)
      setCompassStep("select")
    }

    // Only show if user has entered the door
    if (!hasEnteredDoor) return null

    return (
      <section ref={compassRef} className="py-0 relative">
        {/* Full-width separator */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent mb-16"></div>

        {/* App Container */}
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-30">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)`,
              }}
            ></div>
          </div>

          <motion.div
            className="container mx-auto max-w-7xl px-4 py-16 relative z-10"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
          >
            {/* App Header */}
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-white/40 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Compass className="w-4 h-4 text-white" />
                </div>
                <span className="text-slate-700 font-medium">Resonance Compass</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>

              <h2
                className="text-4xl md:text-5xl font-light text-slate-800 mb-4"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Frequency Alignment Tool
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Navigate your inner landscape and consciously shift your energetic frequency
              </p>
            </motion.div>

            {/* Main App Interface */}
            <motion.div
              className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
            >
              {/* Progress Bar */}
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-1">
                <div className="bg-white/20 rounded-full h-2 overflow-hidden">
                  <motion.div
                    className="h-full bg-white rounded-full"
                    initial={{ width: "25%" }}
                    animate={{
                      width:
                        compassStep === "select"
                          ? "25%"
                          : compassStep === "choose"
                            ? "50%"
                            : compassStep === "calibrate"
                              ? "75%"
                              : "100%",
                    }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-0 min-h-[600px]">
                {/* Left Panel - Controls */}
                <div className="p-8 lg:p-12 space-y-8 bg-gradient-to-br from-white to-slate-50">
                  {/* Step 1: Current State */}
                  <AnimatePresence mode="wait">
                    {compassStep === "select" && (
                      <motion.div
                        key="select"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                      >
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                            1
                          </div>
                          <h3 className="text-2xl font-light text-slate-800">How are you feeling?</h3>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          {currentStates.map((state) => (
                            <motion.button
                              key={state.name}
                              onClick={() => handleCurrentFeelingSelect(state.name)}
                              className="p-4 bg-white rounded-xl border-2 border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 text-left group"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <div className="flex items-center gap-3">
                                <div className="w-3 h-3 bg-slate-400 rounded-full"></div>
                                <span className="font-medium text-slate-700 group-hover:text-blue-600">
                                  {state.name}
                                </span>
                              </div>
                            </motion.button>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {compassStep === "choose" && (
                      <motion.div
                        key="choose"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                      >
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">
                            2
                          </div>
                          <h3 className="text-2xl font-light text-slate-800">Choose your direction</h3>
                        </div>

                        <div className="bg-blue-50 rounded-xl p-4 mb-6">
                          <div className="flex items-center gap-3">
                            <span className="text-slate-600">
                              Currently feeling: <strong>{currentFeeling}</strong>
                            </span>
                          </div>
                        </div>

                        <p className="text-slate-600 mb-4">
                          Click a feeling on the compass to set your desired direction →
                        </p>

                        {desiredFeeling && (
                          <motion.div
                            className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-4"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                          >
                            <div className="flex items-center gap-3">
                              <span className="text-slate-700">
                                Moving toward: <strong>{desiredFeeling}</strong>
                              </span>
                            </div>
                          </motion.div>
                        )}
                      </motion.div>
                    )}

                    {compassStep === "calibrate" && (
                      <motion.div
                        key="calibrate"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                      >
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
                            3
                          </div>
                          <h3 className="text-2xl font-light text-slate-800">Align your frequency</h3>
                        </div>

                        <div className="space-y-4">
                          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div
                                  className="w-3 h-3 rounded-full"
                                  style={{
                                    backgroundColor:
                                      currentStates.find((s) => s.name === currentFeeling)?.color || "#6B7280",
                                  }}
                                ></div>
                                <span className="text-slate-600">{currentFeeling}</span>
                              </div>
                              <div className="text-slate-400">→</div>
                              <div className="flex items-center gap-3">
                                <div
                                  className="w-3 h-3 rounded-full"
                                  style={{
                                    backgroundColor: compassFeelings.find((f) => f.name === desiredFeeling)?.color,
                                  }}
                                ></div>
                                <span className="text-slate-700 font-medium">{desiredFeeling}</span>
                              </div>
                            </div>
                          </div>

                          <motion.button
                            onClick={handleCalibrate}
                            disabled={isCalibrating}
                            className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-xl shadow-lg disabled:opacity-50 transition-all duration-300 relative overflow-hidden"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            {isCalibrating && (
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-pulse"></div>
                            )}
                            <span className="relative flex items-center justify-center gap-2">
                              {isCalibrating ? (
                                <>
                                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                  Calibrating Frequency...
                                </>
                              ) : (
                                <>
                                  <Compass className="w-4 h-4" />
                                  Calibrate Compass
                                </>
                              )}
                            </span>
                          </motion.button>
                        </div>
                      </motion.div>
                    )}

                    {compassStep === "guidance" && (
                      <motion.div
                        key="guidance"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                      >
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-500 text-white rounded-full flex items-center justify-center">
                            <Sparkles className="w-5 h-5" />
                          </div>
                          <h3 className="text-2xl font-light text-slate-800">Your Frequency Shift</h3>
                        </div>

                        <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 border border-green-200">
                          <div className="flex items-center gap-2 mb-4">
                            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                            <span className="text-green-700 font-medium">Compass Aligned</span>
                          </div>

                          <p className="text-slate-700 leading-relaxed text-lg mb-4">{guidance}</p>

                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2 text-slate-500">
                              <Compass className="w-4 h-4" />
                              <span>
                                Frequency: {currentFeeling} → {desiredFeeling}
                              </span>
                            </div>
                          </div>
                        </div>

                        <button
                          onClick={resetCompass}
                          className="w-full py-3 text-slate-600 hover:text-slate-800 transition-colors border border-slate-200 rounded-xl hover:bg-slate-50"
                        >
                          Start New Alignment
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Right Panel - Compass */}
                <div className="bg-gradient-to-br from-slate-100 to-blue-100 p-8 lg:p-12 flex items-center justify-center relative overflow-hidden">
                  {/* Background Elements */}
                  <div className="absolute inset-0">
                    <motion.div
                      className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-300/20 rounded-full blur-xl"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                      }}
                    />
                    <motion.div
                      className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-300/20 rounded-full blur-xl"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.5, 0.2],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                        delay: 1,
                      }}
                    />
                  </div>

                  {/* New Modern Compass Design */}
                  <div className="relative w-96 h-96">
                    {/* Main compass circle */}
                    <div className="absolute inset-0 rounded-full bg-white shadow-xl border border-gray-200">
                      {/* Outer ring with feeling positions */}
                      <div className="absolute inset-4 rounded-full border-2 border-gray-100">
                        {compassFeelings.map((feeling, index) => {
                          const angle = feeling.angle
                          const isSelected = desiredFeeling === feeling.name

                          // Calculate position for the indicator dot
                          const radius = 170 // Distance from center
                          const x = Math.cos(((angle - 90) * Math.PI) / 180) * radius
                          const y = Math.sin(((angle - 90) * Math.PI) / 180) * radius

                          return (
                            <motion.div
                              key={feeling.name}
                              className="absolute w-4 h-4 rounded-full"
                              style={{
                                left: `calc(50% + ${x}px)`,
                                top: `calc(50% + ${y}px)`,
                                transform: "translate(-50%, -50%)",
                                backgroundColor: isSelected ? feeling.color : "#E5E7EB",
                              }}
                              animate={{
                                scale: isSelected ? [1, 1.3, 1] : 1,
                                boxShadow: isSelected
                                  ? [
                                      `0 0 0px ${feeling.color}`,
                                      `0 0 20px ${feeling.color}`,
                                      `0 0 0px ${feeling.color}`,
                                    ]
                                  : "0 0 0px transparent",
                              }}
                              transition={{
                                duration: isSelected ? 1.5 : 0.3,
                                repeat: isSelected ? Number.POSITIVE_INFINITY : 0,
                                repeatType: "reverse",
                              }}
                            />
                          )
                        })}
                      </div>

                      {/* Center circle with animated selection indicator */}
                      <div className="absolute inset-16 rounded-full bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 flex items-center justify-center">
                        {desiredFeeling ? (
                          <motion.div
                            className="text-center"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                          >
                            <motion.div
                              className="w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center text-white text-2xl font-bold shadow-lg"
                              style={{
                                backgroundColor: compassFeelings.find((f) => f.name === desiredFeeling)?.color,
                              }}
                              animate={{
                                scale: [1, 1.1, 1],
                                rotate: [0, 5, -5, 0],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Number.POSITIVE_INFINITY,
                                repeatType: "reverse",
                              }}
                            >
                              {desiredFeeling.charAt(0)}
                            </motion.div>
                            <p className="text-sm font-medium text-gray-700">{desiredFeeling}</p>
                          </motion.div>
                        ) : (
                          <div className="text-center text-gray-400">
                            <div className="w-12 h-12 rounded-full bg-gray-200 mx-auto mb-2 flex items-center justify-center">
                              <Compass className="w-6 h-6" />
                            </div>
                            <p className="text-xs">Select a feeling</p>
                          </div>
                        )}
                      </div>

                      {/* Animated connection line */}
                      {desiredFeeling && (
                        <motion.div
                          className="absolute inset-0 pointer-events-none"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5 }}
                        >
                          {(() => {
                            const targetFeeling = compassFeelings.find((f) => f.name === desiredFeeling)
                            if (!targetFeeling) return null

                            const angle = targetFeeling.angle
                            const startRadius = 80
                            const endRadius = 170

                            const startX = Math.cos(((angle - 90) * Math.PI) / 180) * startRadius
                            const startY = Math.sin(((angle - 90) * Math.PI) / 180) * startRadius
                            const endX = Math.cos(((angle - 90) * Math.PI) / 180) * endRadius
                            const endY = Math.sin(((angle - 90) * Math.PI) / 180) * endRadius

                            return (
                              <motion.svg
                                className="absolute inset-0 w-full h-full"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 1, ease: "easeInOut" }}
                              >
                                <motion.line
                                  x1={`calc(50% + ${startX}px)`}
                                  y1={`calc(50% + ${startY}px)`}
                                  x2={`calc(50% + ${endX}px)`}
                                  y2={`calc(50% + ${endY}px)`}
                                  stroke={targetFeeling.color}
                                  strokeWidth="3"
                                  strokeLinecap="round"
                                  style={{
                                    filter: `drop-shadow(0 0 6px ${targetFeeling.color})`,
                                  }}
                                />
                              </motion.svg>
                            )
                          })()}
                        </motion.div>
                      )}

                      {/* Calibrating effect */}
                      {isCalibrating && (
                        <>
                          <motion.div
                            className="absolute inset-0 rounded-full border-4 border-blue-400"
                            animate={{
                              scale: [1, 1.05, 1],
                              opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                              duration: 1,
                              repeat: 2,
                              repeatType: "reverse",
                            }}
                          />
                          <motion.div
                            className="absolute inset-2 rounded-full border-2 border-purple-400"
                            animate={{
                              rotate: [0, 360],
                            }}
                            transition={{
                              duration: 2,
                              repeat: 3,
                              ease: "linear",
                            }}
                          />
                        </>
                      )}
                    </div>

                    {/* Feeling labels positioned OUTSIDE the compass circle */}
                    <div className="absolute inset-0 z-50">
                      {compassFeelings.map((feeling, index) => {
                        const isSelected = desiredFeeling === feeling.name
                        const angle = feeling.angle
                        const radius = 220
                        const x = Math.cos(((angle - 90) * Math.PI) / 180) * radius
                        const y = Math.sin(((angle - 90) * Math.PI) / 180) * radius

                        return (
                          <button
                            key={feeling.name}
                            onClick={() => handleDesiredFeelingSelect(feeling.name)}
                            disabled={compassStep === "select"}
                            className={`absolute text-lg font-medium transition-all duration-300 px-4 py-2 rounded-lg whitespace-nowrap z-50 ${
                              isSelected
                                ? "text-white scale-110 font-semibold shadow-lg"
                                : "text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:shadow-sm"
                            } ${compassStep === "select" ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:scale-105"}`}
                            style={{
                              left: `calc(50% + ${x}px)`,
                              top: `calc(50% + ${y}px)`,
                              transform: "translate(-50%, -50%)",
                              zIndex: 60,
                              backgroundColor: isSelected ? feeling.color : undefined,
                            }}
                          >
                            {feeling.name}
                          </button>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom separator */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent mt-16"></div>
      </section>
    )
  }

  // Room Cards Section - Enhanced with earth tones
  const RoomCardsSection = () => {
    const isInView = useInView(roomsRef, { once: true })
    const { scrollYProgress } = useScroll({
      target: roomsRef,
      offset: ["start end", "end start"],
    })

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
    const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100])

    // Only show if user has entered the door
    if (!hasEnteredDoor) return null

    return (
      <section ref={roomsRef} className="py-24 px-4 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/40 to-amber-50/40 z-0"></div>

        {/* Organic flowing shapes */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <motion.div
            className="absolute top-1/3 right-1/4 w-[600px] h-[600px]  bg-emerald-200/15 blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              x: [0, -30, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px]  bg-amber-200/15 blur-3xl"
            animate={{
              scale: [1, 1.15, 1],
              x: [0, 20, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 25,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        </div>

        <motion.div className="container mx-auto max-w-6xl relative z-10" style={{ opacity, y }}>
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-light text-gray-900 mb-6"
              style={{ fontFamily: "Georgia, serif" }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Your House
              <span className="block text-stone-600 font-normal mt-1">Awaits</span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-700 font-light max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Each room holds a different energy. Let your feeling lead you to the space that resonates most right now.
            </motion.p>
          </div>

          {/* Enhanced room cards */}
          <div className="grid md:grid-cols-3 gap-10">
            {rooms.map((room, index) => {
              const IconComponent = room.icon
              return (
                <motion.div
                  key={room.name}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.7 + index * 0.2 }}
                  className="group"
                >
                  <Link href={room.href} className="block h-full">
                    <motion.div
                      className="h-full bg-white/90 backdrop-blur-sm  overflow-hidden shadow-xl border border-white/40 transition-all duration-500"
                      whileHover={{
                        y: -12,
                        boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      {/* Room image with overlay */}
                      <div className="relative h-64 overflow-hidden">
                        {room.image ? (
                          <>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 z-10"></div>
                            <Image
                              src={room.image || "/placeholder.svg"}
                              alt={room.name}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Glowing effect on hover */}
                            <motion.div className="absolute inset-0 bg-gradient-to-t from-transparent to-white opacity-0 group-hover:opacity-20 transition-opacity duration-700 z-20" />
                          </>
                        ) : (
                          <div className="w-full h-full" style={{ backgroundColor: room.bgColor }}></div>
                        )}

                        {/* Room icon overlay */}
                        <motion.div
                          className="absolute top-4 right-4 z-20"
                          animate={{ y: [0, -5, 0] }}
                          transition={{
                            duration: 3,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatType: "reverse",
                            delay: index * 0.5,
                          }}
                        >
                          <div
                            className="w-12 h-12  flex items-center justify-center bg-white/90 backdrop-blur-sm shadow-lg border-2"
                            style={{ borderColor: room.color, color: room.color }}
                          >
                            <IconComponent className="w-6 h-6" />
                          </div>
                        </motion.div>

                        {/* Room name overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                          <h3 className="text-2xl font-medium text-white drop-shadow-md">{room.name}</h3>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">{room.longDescription}</p>

                        <motion.div
                          className="inline-flex items-center gap-2 py-3 px-5  text-white text-sm font-medium"
                          style={{ backgroundColor: room.color }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span>Enter Room</span>
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </motion.div>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              )
            })}
          </div>

          {/* This House is Alive quote */}
          <motion.div
            className="mt-24 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            <div className="bg-white/90 backdrop-blur-sm  p-10 shadow-xl border border-white/40 text-center relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute -top-20 -right-20 w-40 h-40  bg-emerald-100/50 blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40  bg-stone-100/50 blur-3xl"></div>

              <h3
                className="text-3xl md:text-4xl font-light text-gray-900 mb-8"
                style={{ fontFamily: "Georgia, serif" }}
              >
                This House is
                <span className="block text-stone-600 font-normal mt-1">Alive</span>
              </h3>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  This is not a static space. It breathes with you. It meets you in each moment and mirrors your
                  intention.
                </p>
                <p>
                  Every room holds a different invitation. Every choice is a creative act. You are both the visitor and
                  the artist of this experience.
                </p>
              </div>

              <motion.div
                className="mt-10 p-8 bg-gradient-to-r from-stone-500 to-emerald-500  relative overflow-hidden"
                animate={{
                  boxShadow: [
                    "0 10px 30px rgba(139, 115, 85, 0.2)",
                    "0 10px 30px rgba(139, 115, 85, 0.4)",
                    "0 10px 30px rgba(139, 115, 85, 0.2)",
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              >
                {/* Light rays */}
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={`ray-${i}`}
                      className="absolute top-1/2 left-1/2 h-1 bg-white/20 origin-left"
                      style={{
                        width: "200%",
                        transform: `translate(-50%, -50%) rotate(${i * 36}deg)`,
                      }}
                      animate={{
                        opacity: [0.1, 0.3, 0.1],
                      }}
                      transition={{
                        duration: 3,
                        delay: i * 0.5,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                      }}
                    />
                  ))}
                </div>

                <p
                  className="text-2xl font-light text-white italic relative z-10"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  "Welcome home to yourself."
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Kibi component - Updated with earth tones */}
          <motion.div
            className="mt-24 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <div className="bg-white/90 backdrop-blur-sm  p-8 shadow-xl border border-white/40 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute -top-20 -left-20 w-40 h-40  bg-stone-100/30 blur-3xl"></div>
              <div className="absolute -bottom-20 -right-20 w-40 h-40  bg-emerald-100/30 blur-3xl"></div>

              <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                <motion.div
                  className="w-24 h-24  bg-gradient-to-br from-stone-500 to-emerald-500 flex items-center justify-center shadow-lg relative"
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(139, 115, 85, 0.2)",
                      "0 0 40px rgba(139, 115, 85, 0.4)",
                      "0 0 20px rgba(139, 115, 85, 0.2)",
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                >
                  <MessageCircle className="w-12 h-12 text-white" />

                  {/* Pulsing circles */}
                  {[1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="absolute inset-0  border-2 border-white/30"
                      animate={{
                        scale: [1, 1.2 + i * 0.2],
                        opacity: [0.8, 0],
                      }}
                      transition={{
                        duration: 2,
                        delay: i * 0.5,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "loop",
                      }}
                    />
                  ))}
                </motion.div>

                <div className="flex-1 text-center md:text-left">
                  <h3
                    className="text-2xl md:text-3xl font-light text-gray-900 mb-4"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    Kibi
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Kibi is here if you need to speak something out loud. A question, a feeling, or a thread you want to
                    follow. This space listens.
                  </p>

                  <KibiChat
                    roomContext="welcome-room"
                    theme={{
                      primary: "#8B7355",
                      secondary: "#A68B5B",
                      background: "#F8F6F3",
                      backgroundDark: "#2C2A1E",
                      textDark: "#F9F3DC",
                      text: "#5A4E28",
                    }}
                    isDarkMode={false}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    )
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-white">
      {/* Fixed Header */}
      <header className="sticky top-0 z-50 bg-white backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link
            href="/house"
            className="flex items-center gap-2 group transition-all duration-300 text-gray-700 hover:text-stone-600"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="font-medium">Back to House</span>
          </Link>

          <h1 className="text-lg font-medium text-gray-800">Welcome Room</h1>

          <div className="flex items-center gap-4">
            <KibiChat
              roomContext="welcome-room"
              theme={{
                primary: "#8B7355",
                secondary: "#A68B5B",
                background: "#F8F6F3",
                backgroundDark: "#2C2A1E",
                textDark: "#F9F3DC",
                text: "#5A4E28",
              }}
              isDarkMode={false}
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <HeroSection />
        <TeachingSection />
        <ResonanceCompassSection />
        <RoomCardsSection />
      </main>

      {/* Welcome Modal */}
      <WelcomeModal />
    </div>
  )
}
