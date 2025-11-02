"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import {
  ArrowLeft,
  ArrowRight,
  Moon,
  Sun,
  Heart,
  Send,
  Volume2,
  VolumeX,
  Timer,
  Save,
  Mic,
  MicOff,
  PenTool,
  Pause,
  Play,
  RotateCcw,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { KibiChat } from "@/components/kibi-chat"

export default function MirrorRoomPage() {
  // State management
  const [isLoaded, setIsLoaded] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true) // Default to dark mode for evening feel
  const [selectedFeeling, setSelectedFeeling] = useState<string | null>(null)
  const [reflectionResponse, setReflectionResponse] = useState("")
  const [reflectionInput, setReflectionInput] = useState("")
  const [isReflecting, setIsReflecting] = useState(false)
  const [ambientSound, setAmbientSound] = useState(false)
  const [journalEntries, setJournalEntries] = useState<{ date: string; content: string }[]>([])
  const [currentJournalEntry, setCurrentJournalEntry] = useState("")
  const [isRecording, setIsRecording] = useState(false)
  const [recordingTime, setRecordingTime] = useState(0)
  const [meditationTime, setMeditationTime] = useState(300) // 5 minutes in seconds
  const [isMeditating, setIsMeditating] = useState(false)
  const [remainingTime, setRemainingTime] = useState(300)
  const [activeTab, setActiveTab] = useState<"reflect" | "journal" | "meditate">("reflect")
  const [isKibiOpen, setIsKibiOpen] = useState(false)

  // Refs
  const containerRef = useRef<HTMLDivElement>(null)
  const audioRef = useRef<HTMLAudioElement>(null)
  const kibiInputRef = useRef<HTMLInputElement>(null)
  const kibiMessagesRef = useRef<HTMLDivElement>(null)
  const recordingRef = useRef<MediaRecorder | null>(null)
  const recordingChunksRef = useRef<Blob[]>([])
  const recordingTimerRef = useRef<NodeJS.Timeout | null>(null)
  const meditationTimerRef = useRef<NodeJS.Timeout | null>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Purple/lavender theme for Mirror Room
  const theme = {
    primary: "#9370DB", // Medium purple
    secondary: "#B19CD9", // Light purple
    background: "#F8F5FF", // Very light lavender
    backgroundDark: "#1E1A2B", // Dark purple/blue
    accent1: "#A388D8", // Lavender
    accent2: "#7A5DC7", // Deeper purple
    text: "#3D3160", // Dark purple
    textDark: "#E9E4F9", // Light lavender for dark mode
  }

  // Parallax effect for background elements
  const floatingY = useTransform(scrollYProgress, [0, 1], [0, -50])
  const floatingX = useTransform(scrollYProgress, [0, 1], [0, 20])

  // Feelings for the reflection tool
  const feelings = [
    "Peaceful",
    "Anxious",
    "Inspired",
    "Confused",
    "Grateful",
    "Sad",
    "Excited",
    "Overwhelmed",
    "Curious",
    "Frustrated",
  ]

  // Toggle ambient sound
  const toggleAmbientSound = () => {
    if (audioRef.current) {
      if (ambientSound) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setAmbientSound(!ambientSound)
    }
  }

  // Generate reflection response
  const generateReflection = () => {
    setIsReflecting(true)

    // Simulate AI response with a delay
    setTimeout(() => {
      let response = ""

      if (selectedFeeling) {
        // Responses based on feeling
        const responses: Record<string, string> = {
          Peaceful:
            "This sense of peace is a gift. What allowed this state to emerge for you today? How might you create more moments like this?",
          Anxious:
            "Anxiety often carries important messages. What might your anxiety be trying to protect you from? What would help you feel more grounded right now?",
          Inspired:
            "Inspiration is flowing through you. What sparked this feeling? How might you channel this energy into something meaningful?",
          Confused:
            "Confusion is often the precursor to clarity. What aspects feel unclear? Sometimes not knowing is a sacred space of possibility.",
          Grateful:
            "Gratitude opens the heart. What specifically are you grateful for in this moment? How does this gratitude feel in your body?",
          Sad: "Your sadness is welcome here. What needs to be acknowledged or honored? What would feel like gentle support right now?",
          Excited:
            "This excitement is life force moving through you. What are you looking forward to? How can you honor this energy?",
          Overwhelmed:
            "When we're overwhelmed, we need space. What could you release or delegate? What's one small step that would help?",
          Curious:
            "Curiosity is the beginning of discovery. What are you drawn to explore? What questions are alive in you right now?",
          Frustrated:
            "Frustration often points to something important to us. What matters to you in this situation? What would resolution look like?",
        }
        response =
          responses[selectedFeeling] ||
          "Thank you for sharing how you feel. This awareness is the first step in your journey."
      } else if (reflectionInput) {
        // Generate response based on input
        if (reflectionInput.includes("?")) {
          response =
            "That's a powerful question. Sit with it for a moment. The answer may not come immediately, but your willingness to ask opens the door to insight. What's your first intuitive response when you get very quiet?"
        } else if (reflectionInput.toLowerCase().includes("i feel")) {
          response =
            "Thank you for sharing how you feel. Emotions are messengers that help us understand our inner landscape. What might this feeling be trying to tell you about what matters to you right now?"
        } else if (
          reflectionInput.toLowerCase().includes("i want") ||
          reflectionInput.toLowerCase().includes("i need")
        ) {
          response =
            "It takes courage to acknowledge your desires and needs. How aligned is this with your deeper values? What's one small step you could take toward honoring this?"
        } else {
          response =
            "I hear you. Take a moment to sit with what you've shared. What feels most important about this? What wisdom might already be emerging from within you?"
        }
      }

      setReflectionResponse(response)
      setIsReflecting(false)
    }, 1500)
  }

  // Handle voice recording
  const toggleRecording = async () => {
    if (isRecording) {
      // Stop recording
      if (recordingRef.current) {
        recordingRef.current.stop()
      }
      if (recordingTimerRef.current) {
        clearInterval(recordingTimerRef.current)
        recordingTimerRef.current = null
      }
      setIsRecording(false)
    } else {
      // Start recording
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
        const mediaRecorder = new MediaRecorder(stream)
        recordingRef.current = mediaRecorder
        recordingChunksRef.current = []

        mediaRecorder.ondataavailable = (e) => {
          if (e.data.size > 0) {
            recordingChunksRef.current.push(e.data)
          }
        }

        mediaRecorder.onstop = () => {
          // Recording finished
          const audioBlob = new Blob(recordingChunksRef.current, { type: "audio/webm" })
          // Here you could save the recording or play it back
          console.log("Recording finished", audioBlob)

          // In a real app, you might transcribe this and add it to the journal
          const now = new Date()
          setJournalEntries([
            ...journalEntries,
            {
              date: now.toLocaleString(),
              content: `[Voice recording - ${formatRecordingTime(recordingTime)}]`,
            },
          ])
        }

        mediaRecorder.start()
        setIsRecording(true)
        setRecordingTime(0)

        // Start timer
        recordingTimerRef.current = setInterval(() => {
          setRecordingTime((prev) => prev + 1)
        }, 1000)
      } catch (err) {
        console.error("Error accessing microphone:", err)
      }
    }
  }

  // Format recording time
  const formatRecordingTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`
  }

  // Handle meditation timer
  const toggleMeditation = () => {
    if (isMeditating) {
      // Stop meditation
      if (meditationTimerRef.current) {
        clearInterval(meditationTimerRef.current)
        meditationTimerRef.current = null
      }
      setIsMeditating(false)
    } else {
      // Start meditation
      setRemainingTime(meditationTime)
      setIsMeditating(true)

      // Play start sound
      const startSound = new Audio("/meditation-start.mp3")
      startSound.play()

      meditationTimerRef.current = setInterval(() => {
        setRemainingTime((prev) => {
          if (prev <= 1) {
            // Play end sound
            const endSound = new Audio("/meditation-end.mp3")
            endSound.play()

            // Clear interval
            if (meditationTimerRef.current) {
              clearInterval(meditationTimerRef.current)
              meditationTimerRef.current = null
            }
            setIsMeditating(false)
            return 0
          }
          return prev - 1
        })
      }, 1000)
    }
  }

  // Reset meditation timer
  const resetMeditation = () => {
    if (meditationTimerRef.current) {
      clearInterval(meditationTimerRef.current)
      meditationTimerRef.current = null
    }
    setIsMeditating(false)
    setRemainingTime(meditationTime)
  }

  // Format meditation time
  const formatMeditationTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`
  }

  // Save journal entry
  const saveJournalEntry = () => {
    if (!currentJournalEntry.trim()) return

    const now = new Date()
    setJournalEntries([
      ...journalEntries,
      {
        date: now.toLocaleString(),
        content: currentJournalEntry,
      },
    ])
    setCurrentJournalEntry("")
  }

  // Initialize
  useEffect(() => {
    setIsLoaded(true)

    // Preload audio
    if (audioRef.current) {
      audioRef.current.volume = 0.3
      audioRef.current.loop = true
    }

    return () => {
      // Clean up
      if (audioRef.current) audioRef.current.pause()
      if (recordingTimerRef.current) clearInterval(recordingTimerRef.current)
      if (meditationTimerRef.current) clearInterval(meditationTimerRef.current)
      if (recordingRef.current && recordingRef.current.state === "recording") {
        recordingRef.current.stop()
      }
    }
  }, [])

  // Scroll to bottom of Kibi messages when opened
  useEffect(() => {
    if (isKibiOpen && kibiMessagesRef.current) {
      kibiMessagesRef.current.scrollTop = kibiMessagesRef.current.scrollHeight
    }
  }, [isKibiOpen])

  return (
    <div
      className="relative min-h-screen w-full overflow-x-hidden font-serif transition-colors duration-700"
      style={{
        background: isDarkMode ? theme.backgroundDark : theme.background,
        color: isDarkMode ? theme.textDark : theme.text,
      }}
      ref={containerRef}
    >
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        {/* Animated gradient background */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: isDarkMode
              ? `radial-gradient(circle at 30% 30%, ${theme.accent1}30 0%, transparent 60%), 
                 radial-gradient(circle at 70% 70%, ${theme.accent2}30 0%, transparent 60%)`
              : `radial-gradient(circle at 30% 30%, ${theme.accent1}20 0%, transparent 60%), 
                 radial-gradient(circle at 70% 70%, ${theme.accent2}20 0%, transparent 60%)`,
          }}
        />

        {/* Floating elements */}
        <motion.div
          className="absolute left-[5%] top-[20%] w-[40vw] h-[40vh] opacity-10"
          style={{ y: floatingY, x: floatingX }}
        >
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle
              cx="100"
              cy="100"
              r="50"
              stroke={isDarkMode ? theme.textDark : theme.text}
              strokeWidth="0.5"
              opacity="0.3"
            />
            <circle
              cx="100"
              cy="100"
              r="70"
              stroke={isDarkMode ? theme.textDark : theme.text}
              strokeWidth="0.5"
              opacity="0.2"
            />
            <circle
              cx="100"
              cy="100"
              r="90"
              stroke={isDarkMode ? theme.textDark : theme.text}
              strokeWidth="0.5"
              opacity="0.1"
            />
          </svg>
        </motion.div>

        {/* Animated particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                backgroundColor: isDarkMode ? `${theme.accent1}80` : `${theme.accent2}80`,
              }}
              animate={{
                y: [0, Math.random() * -30 - 10],
                opacity: [0, 0.7, 0],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      </div>

      {/* Ambient Sound */}
      <audio ref={audioRef} src="/ambient-evening-sound.png" />

      {/* Fixed Header */}
      <header
        className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md border-b transition-colors duration-700"
        style={{
          borderColor: isDarkMode ? `${theme.accent2}50` : `${theme.accent1}50`,
          backgroundColor: isDarkMode ? `${theme.backgroundDark}90` : `${theme.background}90`,
        }}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/house" className="flex items-center gap-1.5 group transition-colors duration-300">
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to House</span>
          </Link>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleAmbientSound}
              className="p-2 rounded-full transition-colors duration-300 hover:bg-opacity-10 hover:bg-white"
              aria-label={ambientSound ? "Mute ambient sound" : "Play ambient sound"}
            >
              {ambientSound ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
            </button>

            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full transition-colors duration-300 hover:bg-opacity-10 hover:bg-white"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-24 relative z-10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            {/* Hero Section */}
            <motion.div
              className="mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              <div className="relative inline-block">
                <motion.div
                  className="absolute -inset-4 rounded-full opacity-30"
                  style={{ background: `radial-gradient(circle, ${theme.primary} 0%, transparent 70%)` }}
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                />
                <h1 className="text-5xl md:text-6xl font-light tracking-wide mb-4 relative">The Mirror Room</h1>
              </div>

              <div className="flex justify-center mb-6">
                <div className="h-1 w-24 rounded-full" style={{ backgroundColor: theme.primary }}></div>
              </div>

              <p className="text-xl md:text-2xl font-light opacity-90 max-w-2xl mx-auto">
                Check in with your inner world.
              </p>
            </motion.div>

            {/* Interactive Mirror */}
            <motion.div
              className="mb-12 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
            >
              <div
                className="rounded-xl overflow-hidden aspect-[16/9] flex items-center justify-center relative"
                style={{
                  background: `linear-gradient(135deg, ${
                    isDarkMode ? `${theme.accent2}30` : `${theme.accent1}20`
                  } 0%, ${isDarkMode ? `${theme.accent1}20` : `${theme.accent2}10`} 100%)`,
                  boxShadow: `0 8px 32px ${
                    isDarkMode
                      ? "rgba(0, 0, 0, 0.3)"
                      : `rgba(${Number.parseInt(theme.primary.slice(1, 3), 16)}, ${Number.parseInt(
                          theme.primary.slice(3, 5),
                          16,
                        )}, ${Number.parseInt(theme.primary.slice(5, 7), 16)}, 0.15)`
                  }`,
                  border: `1px solid ${isDarkMode ? `${theme.accent2}50` : `${theme.accent1}50`}`,
                }}
              >
                {/* Mirror frame */}
                <div
                  className="w-[80%] h-[80%] rounded-lg relative overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${
                      isDarkMode ? `${theme.accent1}30` : `${theme.accent2}20`
                    } 0%, ${isDarkMode ? `${theme.accent2}20` : `${theme.accent1}10`} 100%)`,
                    border: `1px solid ${isDarkMode ? `${theme.accent1}50` : `${theme.accent2}50`}`,
                    boxShadow: `0 4px 16px ${isDarkMode ? "rgba(0, 0, 0, 0.2)" : "rgba(147, 112, 219, 0.1)"}`,
                  }}
                >
                  {/* Mirror content - reflection prompt */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1, duration: 1 }}
                    >
                      <h3 className="text-2xl md:text-3xl font-light mb-6">What do you see when you look within?</h3>
                      <p className="text-lg opacity-80 max-w-lg mx-auto">
                        This mirror reflects not your outer appearance, but your inner landscape. Take a moment to
                        breathe and connect with what's present for you right now.
                      </p>
                    </motion.div>
                  </div>

                  {/* Animated reflection effect */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    animate={{
                      background: [
                        `linear-gradient(135deg, ${theme.accent1}05 0%, ${theme.accent2}05 100%)`,
                        `linear-gradient(135deg, ${theme.accent2}05 0%, ${theme.accent1}05 100%)`,
                        `linear-gradient(135deg, ${theme.accent1}05 0%, ${theme.accent2}05 100%)`,
                      ],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                  />

                  {/* Animated ripple effect */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                        style={{
                          border: `1px solid ${isDarkMode ? theme.accent1 : theme.accent2}`,
                          opacity: 0.3,
                        }}
                        animate={{
                          width: ["0%", "100%"],
                          height: ["0%", "100%"],
                          opacity: [0.5, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: i * 1.5,
                          ease: "easeOut",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Tabs Navigation */}
            <div className="mb-8">
              <div className="flex border-b mb-6" style={{ borderColor: isDarkMode ? theme.accent2 : theme.accent1 }}>
                <button
                  className={cn(
                    "px-4 py-2 flex items-center gap-2 transition-colors",
                    activeTab === "reflect" && "border-b-2 font-medium",
                  )}
                  style={{
                    borderColor: theme.primary,
                    color:
                      activeTab === "reflect"
                        ? isDarkMode
                          ? theme.textDark
                          : theme.text
                        : isDarkMode
                          ? `${theme.textDark}80`
                          : `${theme.text}80`,
                  }}
                  onClick={() => setActiveTab("reflect")}
                >
                  <Heart className="h-4 w-4" />
                  <span>Reflection</span>
                </button>

                <button
                  className={cn(
                    "px-4 py-2 flex items-center gap-2 transition-colors",
                    activeTab === "journal" && "border-b-2 font-medium",
                  )}
                  style={{
                    borderColor: theme.primary,
                    color:
                      activeTab === "journal"
                        ? isDarkMode
                          ? theme.textDark
                          : theme.text
                        : isDarkMode
                          ? `${theme.textDark}80`
                          : `${theme.text}80`,
                  }}
                  onClick={() => setActiveTab("journal")}
                >
                  <PenTool className="h-4 w-4" />
                  <span>Journal</span>
                </button>

                <button
                  className={cn(
                    "px-4 py-2 flex items-center gap-2 transition-colors",
                    activeTab === "meditate" && "border-b-2 font-medium",
                  )}
                  style={{
                    borderColor: theme.primary,
                    color:
                      activeTab === "meditate"
                        ? isDarkMode
                          ? theme.textDark
                          : theme.text
                        : isDarkMode
                          ? `${theme.textDark}80`
                          : `${theme.text}80`,
                  }}
                  onClick={() => setActiveTab("meditate")}
                >
                  <Timer className="h-4 w-4" />
                  <span>Meditate</span>
                </button>
              </div>
            </div>

            {/* Reflection Tab */}
            {activeTab === "reflect" && (
              <>
                {/* What's Present Section */}
                <motion.div
                  className="mb-12"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div
                    className="rounded-xl p-8 backdrop-blur-sm border relative overflow-hidden"
                    style={{
                      borderColor: isDarkMode ? `${theme.accent2}50` : `${theme.accent1}50`,
                      backgroundColor: isDarkMode ? `${theme.backgroundDark}60` : `${theme.background}60`,
                      boxShadow: `0 8px 32px ${isDarkMode ? "rgba(0, 0, 0, 0.3)" : "rgba(147, 112, 219, 0.15)"}`,
                    }}
                  >
                    <div className="relative z-10">
                      <h2 className="text-2xl font-light mb-6">What's Present?</h2>

                      <div className="space-y-6 text-lg leading-relaxed opacity-90">
                        <p className="italic text-xl">
                          How am I feeling right now?
                          <br />
                          What might that feeling be trying to tell me?
                        </p>

                        <div className="mt-8">
                          <p className="mb-4">Select what resonates with you in this moment:</p>
                          <div className="flex flex-wrap gap-3">
                            {feelings.map((feeling) => (
                              <button
                                key={feeling}
                                className={cn(
                                  "px-4 py-2 rounded-full transition-all",
                                  selectedFeeling === feeling ? "font-medium" : "opacity-70 hover:opacity-100",
                                )}
                                style={{
                                  backgroundColor:
                                    selectedFeeling === feeling
                                      ? isDarkMode
                                        ? theme.primary
                                        : theme.accent1
                                      : isDarkMode
                                        ? `${theme.accent2}40`
                                        : `${theme.accent1}40`,
                                  color:
                                    selectedFeeling === feeling
                                      ? isDarkMode
                                        ? theme.backgroundDark
                                        : theme.background
                                      : isDarkMode
                                        ? theme.textDark
                                        : theme.text,
                                }}
                                onClick={() => setSelectedFeeling(feeling)}
                              >
                                {feeling}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Resonance Reflection Tool */}
                <motion.div
                  className="mb-12"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div
                    className="rounded-xl p-8 backdrop-blur-sm border relative overflow-hidden"
                    style={{
                      borderColor: isDarkMode ? `${theme.accent2}50` : `${theme.accent1}50`,
                      backgroundColor: isDarkMode ? `${theme.backgroundDark}60` : `${theme.background}60`,
                      boxShadow: `0 8px 32px ${isDarkMode ? "rgba(0, 0, 0, 0.3)" : "rgba(147, 112, 219, 0.15)"}`,
                    }}
                  >
                    <div className="relative z-10">
                      <h2 className="text-2xl font-light mb-6">Resonance Reflection Tool</h2>

                      <div className="space-y-6">
                        <p className="text-lg opacity-90">
                          Share what's on your mind, and receive a gentle reflection to support your journey inward.
                        </p>

                        <div className="mt-4">
                          <div className="flex flex-col space-y-4">
                            <textarea
                              value={reflectionInput}
                              onChange={(e) => setReflectionInput(e.target.value)}
                              placeholder="What's on your heart today? What are you curious about?"
                              className="w-full h-32 p-4 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-1"
                              style={{
                                backgroundColor: isDarkMode ? `${theme.backgroundDark}40` : `${theme.background}40`,
                                borderColor: isDarkMode ? theme.accent2 : theme.accent1,
                                color: isDarkMode ? theme.textDark : theme.text,
                              }}
                            />

                            <div className="flex justify-end">
                              <button
                                onClick={generateReflection}
                                disabled={(!selectedFeeling && !reflectionInput) || isReflecting}
                                className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all disabled:opacity-50"
                                style={{
                                  backgroundColor: isDarkMode ? theme.primary : theme.accent1,
                                  color: isDarkMode ? theme.backgroundDark : theme.background,
                                }}
                              >
                                {isReflecting ? "Reflecting..." : "Receive Reflection"}
                                <Send className="h-4 w-4" />
                              </button>
                            </div>
                          </div>

                          <AnimatePresence>
                            {reflectionResponse && (
                              <motion.div
                                initial={{ opacity: 0, y: 10, height: 0 }}
                                animate={{ opacity: 1, y: 0, height: "auto" }}
                                exit={{ opacity: 0, y: -10, height: 0 }}
                                transition={{ duration: 0.5 }}
                                className="mt-6 overflow-hidden"
                              >
                                <div
                                  className="p-6 rounded-lg"
                                  style={{
                                    backgroundColor: isDarkMode ? `${theme.accent2}20` : `${theme.accent1}20`,
                                    borderLeft: `4px solid ${isDarkMode ? theme.primary : theme.accent1}`,
                                  }}
                                >
                                  <p className="italic leading-relaxed">{reflectionResponse}</p>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Mirror Ritual */}
                <motion.div
                  className="mb-12"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div
                    className="rounded-xl p-8 backdrop-blur-sm border relative overflow-hidden"
                    style={{
                      borderColor: isDarkMode ? `${theme.accent2}50` : `${theme.accent1}50`,
                      backgroundColor: isDarkMode ? `${theme.backgroundDark}60` : `${theme.background}60`,
                      boxShadow: `0 8px 32px ${isDarkMode ? "rgba(0, 0, 0, 0.3)" : "rgba(147, 112, 219, 0.15)"}`,
                    }}
                  >
                    <div className="relative z-10">
                      <h2 className="text-2xl font-light mb-6">Mirror Ritual</h2>

                      <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="md:w-1/3 relative">
                          <div
                            className="aspect-[3/4] rounded-lg overflow-hidden relative"
                            style={{
                              backgroundColor: isDarkMode ? `${theme.accent2}20` : `${theme.accent1}20`,
                              border: `1px solid ${isDarkMode ? theme.accent2 : theme.accent1}`,
                            }}
                          >
                            <motion.div
                              className="absolute inset-0"
                              animate={{
                                background: [
                                  `linear-gradient(45deg, ${theme.primary}10, ${theme.secondary}10)`,
                                  `linear-gradient(45deg, ${theme.secondary}10, ${theme.primary}10)`,
                                  `linear-gradient(45deg, ${theme.primary}10, ${theme.secondary}10)`,
                                ],
                              }}
                              transition={{
                                duration: 10,
                                repeat: Number.POSITIVE_INFINITY,
                                repeatType: "reverse",
                              }}
                            />

                            <div className="absolute inset-0 flex items-center justify-center">
                              <motion.div
                                animate={{
                                  scale: [1, 1.05, 1],
                                  opacity: [0.7, 1, 0.7],
                                }}
                                transition={{
                                  duration: 4,
                                  repeat: Number.POSITIVE_INFINITY,
                                  repeatType: "reverse",
                                }}
                              >
                                <Heart
                                  className="h-16 w-16"
                                  style={{ color: isDarkMode ? theme.primary : theme.accent1 }}
                                />
                              </motion.div>
                            </div>
                          </div>
                        </div>

                        <div className="md:w-2/3 space-y-6">
                          <p className="text-lg leading-relaxed">
                            Sit in front of a real mirror.
                            <br />
                            Gently say:
                          </p>

                          <div
                            className="p-6 rounded-lg text-center"
                            style={{
                              backgroundColor: isDarkMode ? `${theme.accent2}20` : `${theme.accent1}20`,
                            }}
                          >
                            <p className="text-xl italic">"I see you. I hear you. I'm here for you."</p>
                          </div>

                          <p className="text-lg opacity-80">
                            Allow yourself to receive these words. Notice what arises without judgment.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </>
            )}

            {/* Journal Tab */}
            {activeTab === "journal" && (
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div
                  className="rounded-xl p-8 backdrop-blur-sm border relative overflow-hidden"
                  style={{
                    borderColor: isDarkMode ? `${theme.accent2}50` : `${theme.accent1}50`,
                    backgroundColor: isDarkMode ? `${theme.backgroundDark}60` : `${theme.background}60`,
                    boxShadow: `0 8px 32px ${isDarkMode ? "rgba(0, 0, 0, 0.3)" : "rgba(147, 112, 219, 0.15)"}`,
                  }}
                >
                  <div className="relative z-10">
                    <h2 className="text-2xl font-light mb-6">Journal Your Journey</h2>

                    <div className="space-y-6">
                      <p className="text-lg opacity-90">
                        Capture your thoughts, insights, and questions. Your journal entries are saved for you to
                        revisit and track your journey.
                      </p>

                      <div className="mt-4">
                        <div className="flex flex-col space-y-4">
                          <textarea
                            value={currentJournalEntry}
                            onChange={(e) => setCurrentJournalEntry(e.target.value)}
                            placeholder="What's emerging for you today? What insights or questions are alive?"
                            className="w-full h-40 p-4 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-1"
                            style={{
                              backgroundColor: isDarkMode ? `${theme.backgroundDark}40` : `${theme.background}40`,
                              borderColor: isDarkMode ? theme.accent2 : theme.accent1,
                              color: isDarkMode ? theme.textDark : theme.text,
                            }}
                          />

                          <div className="flex justify-between">
                            <button
                              onClick={toggleRecording}
                              className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all"
                              style={{
                                backgroundColor: isRecording
                                  ? isDarkMode
                                    ? theme.primary
                                    : theme.accent1
                                  : isDarkMode
                                    ? `${theme.accent2}40`
                                    : `${theme.accent1}40`,
                                color: isRecording
                                  ? isDarkMode
                                    ? theme.backgroundDark
                                    : theme.background
                                  : isDarkMode
                                    ? theme.textDark
                                    : theme.text,
                              }}
                            >
                              {isRecording ? (
                                <>
                                  <MicOff className="h-4 w-4" />
                                  <span>Stop Recording ({formatRecordingTime(recordingTime)})</span>
                                </>
                              ) : (
                                <>
                                  <Mic className="h-4 w-4" />
                                  <span>Voice Journal</span>
                                </>
                              )}
                            </button>

                            <button
                              onClick={saveJournalEntry}
                              disabled={!currentJournalEntry.trim()}
                              className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all disabled:opacity-50"
                              style={{
                                backgroundColor: isDarkMode ? theme.primary : theme.accent1,
                                color: isDarkMode ? theme.backgroundDark : theme.background,
                              }}
                            >
                              <Save className="h-4 w-4" />
                              <span>Save Entry</span>
                            </button>
                          </div>
                        </div>

                        {/* Journal Entries */}
                        {journalEntries.length > 0 && (
                          <div className="mt-8">
                            <h3 className="text-xl font-light mb-4">Your Journal</h3>
                            <div
                              className="space-y-4 max-h-60 overflow-y-auto p-2"
                              style={{
                                scrollbarWidth: "thin",
                                scrollbarColor: `${isDarkMode ? theme.accent2 : theme.accent1} transparent`,
                              }}
                            >
                              {journalEntries.map((entry, index) => (
                                <div
                                  key={index}
                                  className="p-4 rounded-lg"
                                  style={{
                                    backgroundColor: isDarkMode ? `${theme.accent2}20` : `${theme.accent1}20`,
                                    borderLeft: `3px solid ${isDarkMode ? theme.primary : theme.accent1}`,
                                  }}
                                >
                                  <div className="flex justify-between items-start mb-2">
                                    <span className="text-sm opacity-70">{entry.date}</span>
                                  </div>
                                  <p className="whitespace-pre-wrap">{entry.content}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Meditation Tab */}
            {activeTab === "meditate" && (
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div
                  className="rounded-xl p-8 backdrop-blur-sm border relative overflow-hidden"
                  style={{
                    borderColor: isDarkMode ? `${theme.accent2}50` : `${theme.accent1}50`,
                    backgroundColor: isDarkMode ? `${theme.backgroundDark}60` : `${theme.background}60`,
                    boxShadow: `0 8px 32px ${isDarkMode ? "rgba(0, 0, 0, 0.3)" : "rgba(147, 112, 219, 0.15)"}`,
                  }}
                >
                  <div className="relative z-10">
                    <h2 className="text-2xl font-light mb-6">Meditation Timer</h2>

                    <div className="space-y-8">
                      <p className="text-lg opacity-90 text-center">
                        Take a moment to be present. The timer will guide you with gentle sounds at the beginning and
                        end of your practice.
                      </p>

                      <div className="flex flex-col items-center justify-center">
                        {/* Timer Display */}
                        <div
                          className="w-48 h-48 rounded-full flex items-center justify-center mb-8 relative"
                          style={{
                            backgroundColor: isDarkMode ? `${theme.accent2}20` : `${theme.accent1}20`,
                            border: `3px solid ${isDarkMode ? theme.primary : theme.accent1}`,
                          }}
                        >
                          <div className="text-4xl font-light">{formatMeditationTime(remainingTime)}</div>

                          {/* Progress Circle */}
                          <svg className="absolute inset-0 w-full h-full -rotate-90">
                            <circle
                              cx="96"
                              cy="96"
                              r="88"
                              fill="none"
                              stroke={isDarkMode ? `${theme.accent2}30` : `${theme.accent1}30`}
                              strokeWidth="3"
                            />
                            <circle
                              cx="96"
                              cy="96"
                              r="88"
                              fill="none"
                              stroke={isDarkMode ? theme.primary : theme.accent1}
                              strokeWidth="3"
                              strokeDasharray="553"
                              strokeDashoffset={553 * (1 - remainingTime / meditationTime)}
                              strokeLinecap="round"
                              style={{ transition: "stroke-dashoffset 1s linear" }}
                            />
                          </svg>
                        </div>

                        {/* Timer Controls */}
                        <div className="flex gap-4">
                          <button
                            onClick={toggleMeditation}
                            className="flex items-center gap-2 px-6 py-3 rounded-lg transition-all"
                            style={{
                              backgroundColor: isDarkMode ? theme.primary : theme.accent1,
                              color: isDarkMode ? theme.backgroundDark : theme.background,
                            }}
                          >
                            {isMeditating ? (
                              <>
                                <Pause className="h-5 w-5" />
                                <span>Pause</span>
                              </>
                            ) : (
                              <>
                                <Play className="h-5 w-5" />
                                <span>Begin</span>
                              </>
                            )}
                          </button>

                          <button
                            onClick={resetMeditation}
                            className="flex items-center gap-2 px-6 py-3 rounded-lg transition-all"
                            style={{
                              backgroundColor: isDarkMode ? `${theme.accent2}40` : `${theme.accent1}40`,
                              color: isDarkMode ? theme.textDark : theme.text,
                            }}
                          >
                            <RotateCcw className="h-5 w-5" />
                            <span>Reset</span>
                          </button>
                        </div>

                        {/* Timer Duration Selector */}
                        <div className="mt-8 w-full max-w-md">
                          <p className="text-sm mb-2">Meditation Duration:</p>
                          <div className="flex justify-between gap-2">
                            {[1, 3, 5, 10, 15, 20].map((minutes) => (
                              <button
                                key={minutes}
                                onClick={() => {
                                  setMeditationTime(minutes * 60)
                                  setRemainingTime(minutes * 60)
                                }}
                                className={cn(
                                  "px-3 py-1 rounded transition-all text-sm",
                                  meditationTime === minutes * 60 && "font-medium",
                                )}
                                style={{
                                  backgroundColor:
                                    meditationTime === minutes * 60
                                      ? isDarkMode
                                        ? theme.primary
                                        : theme.accent1
                                      : isDarkMode
                                        ? `${theme.accent2}30`
                                        : `${theme.accent1}30`,
                                  color:
                                    meditationTime === minutes * 60
                                      ? isDarkMode
                                        ? theme.backgroundDark
                                        : theme.background
                                      : isDarkMode
                                        ? theme.textDark
                                        : theme.text,
                                }}
                              >
                                {minutes} min
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Meditation Guidance */}
                      <div
                        className="p-6 rounded-lg mt-8"
                        style={{
                          backgroundColor: isDarkMode ? `${theme.accent2}20` : `${theme.accent1}20`,
                        }}
                      >
                        <h3 className="text-lg font-medium mb-3">Simple Meditation Guidance</h3>
                        <ol className="list-decimal pl-5 space-y-2">
                          <li>Find a comfortable position where you can be alert yet relaxed.</li>
                          <li>Close your eyes or soften your gaze.</li>
                          <li>Take three deep breaths, allowing your body to settle.</li>
                          <li>Bring gentle awareness to your breath, without trying to control it.</li>
                          <li>When your mind wanders, gently return your attention to your breath.</li>
                          <li>
                            Remember, the practice is not about stopping thoughts, but noticing when you're distracted
                            and returning to presence.
                          </li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Final Whisper */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div
                className="rounded-xl p-8 backdrop-blur-sm border relative overflow-hidden"
                style={{
                  borderColor: isDarkMode ? `${theme.accent2}50` : `${theme.accent1}50`,
                  backgroundColor: isDarkMode ? `${theme.backgroundDark}60` : `${theme.background}60`,
                  boxShadow: `0 8px 32px ${isDarkMode ? "rgba(0, 0, 0, 0.3)" : "rgba(147, 112, 219, 0.15)"}`,
                }}
              >
                <div className="relative z-10">
                  <h2 className="text-2xl font-light mb-6">Final Whisper</h2>

                  <motion.div
                    className="p-8 rounded-lg border relative overflow-hidden text-center"
                    style={{
                      borderColor: theme.primary,
                      backgroundColor: isDarkMode ? `${theme.backgroundDark}40` : `${theme.background}40`,
                    }}
                    whileInView={{
                      boxShadow: [
                        `0 0 0 rgba(${isDarkMode ? "122, 93, 199" : "147, 112, 219"}, 0)`,
                        `0 0 30px rgba(${isDarkMode ? "122, 93, 199" : "147, 112, 219"}, 0.15)`,
                        `0 0 0 rgba(${isDarkMode ? "122, 93, 199" : "147, 112, 219"}, 0)`,
                      ],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                    viewport={{ once: false, margin: "-100px" }}
                  >
                    <div className="text-2xl md:text-3xl font-light leading-relaxed italic">
                      <p>"The clearer you see yourself, the more aligned your creations become."</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      {/* Fixed Footer */}
      <div
        className="fixed bottom-0 left-0 right-0 z-40 backdrop-blur-md border-t transition-colors duration-700"
        style={{
          borderColor: isDarkMode ? `${theme.accent2}50` : `${theme.accent1}50`,
          backgroundColor: isDarkMode ? `${theme.backgroundDark}90` : `${theme.background}90`,
        }}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link
            href="/room/creator-being-room"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border transition-all"
            style={{
              borderColor: isDarkMode ? theme.accent2 : theme.accent1,
              color: isDarkMode ? theme.textDark : theme.text,
              backgroundColor: isDarkMode ? `${theme.accent2}20` : `${theme.accent1}20`,
            }}
          >
            <ArrowLeft className="h-4 w-4" />
            Previous Room
          </Link>

          <Link
            href="/room/masterclass-room"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border transition-all group"
            style={{
              borderColor: isDarkMode ? theme.accent2 : theme.accent1,
              color: isDarkMode ? theme.textDark : theme.text,
              backgroundColor: isDarkMode ? `${theme.accent2}20` : `${theme.accent1}20`,
            }}
          >
            <span>Next Room</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      <KibiChat roomContext="mirror-room" theme={theme} isDarkMode={isDarkMode} />
    </div>
  )
}
