"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import {
  ArrowLeft,
  ArrowRight,
  Moon,
  Sun,
  Volume2,
  VolumeX,
  MessageCircle,
  BookOpen,
  Check,
  Sparkles,
  Download,
  Play,
  Pause,
  ChevronDown,
  ChevronUp,
  Bookmark,
  BookmarkCheck,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { KibiChat } from "@/components/kibi-chat"

export default function MasterclassRoomPage() {
  // State management
  const [isLoaded, setIsLoaded] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true) // Default to dark mode for library feel
  const [practiceCompleted, setPracticeCompleted] = useState(false)
  const [ambientSound, setAmbientSound] = useState(false)
  const [expandedSection, setExpandedSection] = useState<string | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentAudio, setCurrentAudio] = useState<string | null>(null)
  const [savedTeachings, setSavedTeachings] = useState<string[]>([])
  const [completedPractices, setCompletedPractices] = useState<string[]>([])
  const [activeTab, setActiveTab] = useState<"teaching" | "practice" | "wisdom">("teaching")
  const [notes, setNotes] = useState("")

  // Refs
  const containerRef = useRef<HTMLDivElement>(null)
  const audioRef = useRef<HTMLAudioElement>(null)
  const teachingAudioRef = useRef<HTMLAudioElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Deep blue/indigo theme for Masterclass Room
  const theme = {
    primary: "#4B0082", // Indigo
    secondary: "#6A5ACD", // Slate blue
    background: "#F5F5FF", // Very light blue/white
    backgroundDark: "#1A1A2E", // Very dark blue
    accent1: "#483D8B", // Dark slate blue
    accent2: "#7B68EE", // Medium slate blue
    text: "#2E2E5A", // Dark blue
    textDark: "#E6E6FA", // Lavender for dark mode
  }

  // Parallax effect for background elements
  const floatingY = useTransform(scrollYProgress, [0, 1], [0, -50])
  const floatingX = useTransform(scrollYProgress, [0, 1], [0, 20])

  // Teaching content
  const teachings = [
    {
      id: "inner-authority",
      title: "The Law of Inner Authority",
      description: "You are the source of your truth. No one outside you can override what you know inside.",
      audioSrc: "/teaching-inner-authority.mp3",
      duration: "12:34",
    },
    {
      id: "resonant-action",
      title: "Resonant Action",
      description: "Move from alignment, not obligation. True power comes from acting in resonance with your essence.",
      audioSrc: "/teaching-resonant-action.mp3",
      duration: "10:15",
    },
    {
      id: "creative-sovereignty",
      title: "Creative Sovereignty",
      description: "Your creative expression is uniquely yours. Honor it as a sacred channel for your essence.",
      audioSrc: "/teaching-creative-sovereignty.mp3",
      duration: "15:42",
    },
  ]

  // Practice content
  const practices = [
    {
      id: "inner-authority-practice",
      title: "Inner Authority Practice",
      description: "A daily practice to strengthen your connection to your inner knowing.",
      steps: [
        "Before making a decision (big or small), take three deep breaths.",
        "Place a hand on your heart and ask: 'What do I know to be true here?'",
        "Notice your first response without judgment.",
        "Consider: 'If I were fully aligned with my inner authority, what would I choose?'",
      ],
    },
    {
      id: "resonant-action-practice",
      title: "Resonant Action Practice",
      description: "A practice to discern between obligation and resonance.",
      steps: [
        "Identify something you feel you 'should' do.",
        "Close your eyes and imagine doing it. Notice how your body feels.",
        "Now imagine choosing not to do it. Notice how your body feels.",
        "Ask: 'What would be most resonant for me right now?'",
      ],
    },
    {
      id: "creative-sovereignty-practice",
      title: "Creative Sovereignty Practice",
      description: "A practice to honor your unique creative expression.",
      steps: [
        "Set aside 15 minutes for uninterrupted creative expression.",
        "Choose any medium that calls to you (writing, drawing, movement, etc.).",
        "Begin without any plan or expectation. Simply allow what wants to emerge.",
        "When finished, place a hand on your heart and say: 'I honor my creative sovereignty.'",
      ],
    },
  ]

  // Wisdom library content
  const wisdomLibrary = [
    {
      id: "quotes",
      title: "Wisdom Quotes",
      content: [
        "Sovereignty is not separation — it's resonance with your own signal.",
        "The clearer you see yourself, the more aligned your creations become.",
        "Your inner authority is the compass that always points to your truth.",
        "When you move from resonance, effort dissolves into flow.",
        "Your creative expression is as unique as your fingerprint.",
      ],
    },
    {
      id: "koans",
      title: "Contemplative Koans",
      content: [
        "What remains when all external voices fall silent?",
        "How does truth feel in your body?",
        "What would you create if no one would ever see it?",
        "Where does your power come from when no one is watching?",
        "What knows before you know that you know?",
      ],
    },
    {
      id: "mantras",
      title: "Daily Mantras",
      content: [
        "I am the authority of my own experience.",
        "I move from resonance, not obligation.",
        "My creative expression is a sacred offering.",
        "I trust the wisdom of my body.",
        "I honor my unique path and purpose.",
      ],
    },
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

  // Toggle section expansion
  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null)
    } else {
      setExpandedSection(section)
    }
  }

  // Toggle teaching audio
  const toggleTeachingAudio = (audioSrc: string) => {
    if (teachingAudioRef.current) {
      if (isPlaying && currentAudio === audioSrc) {
        teachingAudioRef.current.pause()
        setIsPlaying(false)
      } else {
        teachingAudioRef.current.src = audioSrc
        teachingAudioRef.current.play()
        setIsPlaying(true)
        setCurrentAudio(audioSrc)
      }
    }
  }

  // Toggle saved teaching
  const toggleSavedTeaching = (teachingId: string) => {
    if (savedTeachings.includes(teachingId)) {
      setSavedTeachings(savedTeachings.filter((id) => id !== teachingId))
    } else {
      setSavedTeachings([...savedTeachings, teachingId])
    }
  }

  // Toggle completed practice
  const toggleCompletedPractice = (practiceId: string) => {
    if (completedPractices.includes(practiceId)) {
      setCompletedPractices(completedPractices.filter((id) => id !== practiceId))
    } else {
      setCompletedPractices([...completedPractices, practiceId])
    }
  }

  // Save notes
  const saveNotes = () => {
    // In a real app, you would save this to a database
    console.log("Notes saved:", notes)
    // Show a toast or notification
    alert("Notes saved successfully!")
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
      if (teachingAudioRef.current) teachingAudioRef.current.pause()
    }
  }, [])

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

        {/* Floating elements - books */}
        <motion.div
          className="absolute left-[5%] top-[20%] w-[40vw] h-[40vh] opacity-10"
          style={{ y: floatingY, x: floatingX }}
        >
          <svg viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect
              x="20"
              y="20"
              width="30"
              height="60"
              stroke={isDarkMode ? theme.textDark : theme.text}
              strokeWidth="0.5"
              opacity="0.6"
            />
            <rect
              x="50"
              y="20"
              width="20"
              height="60"
              stroke={isDarkMode ? theme.textDark : theme.text}
              strokeWidth="0.5"
              opacity="0.6"
            />
            <rect
              x="70"
              y="20"
              width="40"
              height="60"
              stroke={isDarkMode ? theme.textDark : theme.text}
              strokeWidth="0.5"
              opacity="0.6"
            />
            <rect
              x="110"
              y="20"
              width="25"
              height="60"
              stroke={isDarkMode ? theme.textDark : theme.text}
              strokeWidth="0.5"
              opacity="0.6"
            />
            <rect
              x="135"
              y="20"
              width="15"
              height="60"
              stroke={isDarkMode ? theme.textDark : theme.text}
              strokeWidth="0.5"
              opacity="0.6"
            />
          </svg>
        </motion.div>

        {/* Animated particles - dust motes */}
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
      <audio ref={audioRef} src="/ambient-library-sound.png" />
      <audio ref={teachingAudioRef} />

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

            <button className="flex items-center gap-1.5 transition-colors duration-300">
              <MessageCircle className="h-4 w-4" />
              <span className="hidden sm:inline">Chat with Kibi</span>
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
                <h1 className="text-5xl md:text-6xl font-light tracking-wide mb-4 relative">The Masterclass Room</h1>
              </div>

              <div className="flex justify-center mb-6">
                <div className="h-1 w-24 rounded-full" style={{ backgroundColor: theme.primary }}></div>
              </div>

              <p className="text-xl md:text-2xl font-light opacity-90 max-w-2xl mx-auto">
                Receive one teaching. Go deeper with it.
              </p>
            </motion.div>

            {/* Interactive Library Visualization */}
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
                  boxShadow: `0 8px 32px ${isDarkMode ? "rgba(0, 0, 0, 0.3)" : "rgba(75, 0, 130, 0.15)"}`,
                  border: `1px solid ${isDarkMode ? `${theme.accent2}50` : `${theme.accent1}50`}`,
                }}
              >
                {/* Library visualization */}
                <div className="w-full h-full flex items-center justify-center relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-[80%] h-[80%]">
                      {/* Bookshelf */}
                      <div
                        className="absolute bottom-0 left-0 right-0 h-[40%]"
                        style={{
                          background: `linear-gradient(to bottom, ${
                            isDarkMode ? theme.accent2 : theme.accent1
                          }20, ${isDarkMode ? theme.accent2 : theme.accent1}30)`,
                          borderTop: `1px solid ${isDarkMode ? theme.accent2 : theme.accent1}50`,
                        }}
                      >
                        {/* Books */}
                        <div className="flex h-[80%] items-end absolute bottom-0 left-0 right-0 px-8">
                          {Array.from({ length: 12 }).map((_, i) => {
                            const width = Math.random() * 30 + 20
                            const height = Math.random() * 30 + 60
                            const color = [
                              theme.primary,
                              theme.secondary,
                              theme.accent1,
                              theme.accent2,
                              isDarkMode ? theme.textDark : theme.text,
                            ][Math.floor(Math.random() * 5)]

                            return (
                              <motion.div
                                key={i}
                                className="h-full mx-1"
                                style={{
                                  width: `${width}px`,
                                  backgroundColor: `${color}${Math.floor(Math.random() * 30 + 20)}`,
                                  border: `1px solid ${color}50`,
                                }}
                                whileHover={{
                                  y: [0, -10, 0],
                                  transition: { duration: 0.5 },
                                }}
                              />
                            )
                          })}
                        </div>
                      </div>

                      {/* Floating book */}
                      <motion.div
                        className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2"
                        animate={{
                          y: [0, -10, 0],
                          rotateZ: [0, 2, 0, -2, 0],
                        }}
                        transition={{
                          duration: 5,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatType: "reverse",
                        }}
                      >
                        <div
                          className="w-40 h-56 relative"
                          style={{
                            background: `linear-gradient(135deg, ${theme.primary}50, ${theme.accent2}50)`,
                            border: `1px solid ${isDarkMode ? theme.accent1 : theme.accent2}`,
                            boxShadow: `0 8px 32px rgba(0, 0, 0, 0.2)`,
                          }}
                        >
                          <div
                            className="absolute inset-2 flex items-center justify-center"
                            style={{
                              border: `1px solid ${isDarkMode ? theme.accent1 : theme.accent2}50`,
                            }}
                          >
                            <div className="text-center">
                              <p className="text-sm font-medium mb-2">THE LAW OF</p>
                              <p className="text-lg font-bold">INNER AUTHORITY</p>
                            </div>
                          </div>
                        </div>

                        {/* Light rays */}
                        <div className="absolute inset-0 pointer-events-none">
                          {Array.from({ length: 8 }).map((_, i) => {
                            const angle = (i * 45 * Math.PI) / 180
                            return (
                              <motion.div
                                key={i}
                                className="absolute left-1/2 top-1/2 h-1 w-40 origin-left"
                                style={{
                                  backgroundColor: `${theme.primary}30`,
                                  transform: `rotate(${i * 45}deg)`,
                                }}
                                animate={{
                                  opacity: [0, 0.5, 0],
                                  width: ["0%", "200%", "0%"],
                                }}
                                transition={{
                                  duration: 3,
                                  repeat: Number.POSITIVE_INFINITY,
                                  repeatType: "mirror",
                                  delay: i * 0.5,
                                }}
                              />
                            )
                          })}
                        </div>
                      </motion.div>
                    </div>
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
                    activeTab === "teaching" && "border-b-2 font-medium",
                  )}
                  style={{
                    borderColor: theme.primary,
                    color:
                      activeTab === "teaching"
                        ? isDarkMode
                          ? theme.textDark
                          : theme.text
                        : isDarkMode
                          ? `${theme.textDark}80`
                          : `${theme.text}80`,
                  }}
                  onClick={() => setActiveTab("teaching")}
                >
                  <BookOpen className="h-4 w-4" />
                  <span>Teachings</span>
                </button>

                <button
                  className={cn(
                    "px-4 py-2 flex items-center gap-2 transition-colors",
                    activeTab === "practice" && "border-b-2 font-medium",
                  )}
                  style={{
                    borderColor: theme.primary,
                    color:
                      activeTab === "practice"
                        ? isDarkMode
                          ? theme.textDark
                          : theme.text
                        : isDarkMode
                          ? `${theme.textDark}80`
                          : `${theme.text}80`,
                  }}
                  onClick={() => setActiveTab("practice")}
                >
                  <Check className="h-4 w-4" />
                  <span>Practices</span>
                </button>

                <button
                  className={cn(
                    "px-4 py-2 flex items-center gap-2 transition-colors",
                    activeTab === "wisdom" && "border-b-2 font-medium",
                  )}
                  style={{
                    borderColor: theme.primary,
                    color:
                      activeTab === "wisdom"
                        ? isDarkMode
                          ? theme.textDark
                          : theme.text
                        : isDarkMode
                          ? `${theme.textDark}80`
                          : `${theme.text}80`,
                  }}
                  onClick={() => setActiveTab("wisdom")}
                >
                  <Sparkles className="h-4 w-4" />
                  <span>Wisdom</span>
                </button>
              </div>
            </div>

            {/* Teaching Tab */}
            {activeTab === "teaching" && (
              <div className="space-y-8">
                {teachings.map((teaching) => (
                  <motion.div
                    key={teaching.id}
                    className="mb-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div
                      className="rounded-xl p-8 backdrop-blur-sm border relative overflow-hidden"
                      style={{
                        borderColor: isDarkMode ? theme.accent2 : theme.accent1,
                        backgroundColor: isDarkMode ? `${theme.backgroundDark}80` : `${theme.background}80`,
                        boxShadow: `0 8px 32px ${isDarkMode ? "rgba(0, 0, 0, 0.3)" : "rgba(75, 0, 130, 0.15)"}`,
                      }}
                    >
                      <div className="relative z-10">
                        <div className="flex justify-between items-start mb-4">
                          <h2 className="text-2xl font-light">{teaching.title}</h2>
                          <button
                            onClick={() => toggleSavedTeaching(teaching.id)}
                            className="p-2 rounded-full transition-colors"
                            style={{
                              backgroundColor: isDarkMode ? `${theme.accent2}30` : `${theme.accent1}30`,
                            }}
                            aria-label={savedTeachings.includes(teaching.id) ? "Remove from saved" : "Save teaching"}
                          >
                            {savedTeachings.includes(teaching.id) ? (
                              <BookmarkCheck className="h-5 w-5" style={{ color: theme.primary }} />
                            ) : (
                              <Bookmark className="h-5 w-5" />
                            )}
                          </button>
                        </div>

                        <div
                          className="p-6 rounded-lg border-l-4 my-6"
                          style={{
                            borderColor: theme.primary,
                            backgroundColor: isDarkMode ? `${theme.backgroundDark}60` : `${theme.background}60`,
                          }}
                        >
                          <p className="text-xl">{teaching.description}</p>
                        </div>

                        <div className="flex justify-between items-center">
                          <button
                            onClick={() => toggleTeachingAudio(teaching.audioSrc)}
                            className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all"
                            style={{
                              backgroundColor:
                                isPlaying && currentAudio === teaching.audioSrc
                                  ? isDarkMode
                                    ? theme.primary
                                    : theme.accent1
                                  : isDarkMode
                                    ? `${theme.accent2}40`
                                    : `${theme.accent1}40`,
                              color:
                                isPlaying && currentAudio === teaching.audioSrc
                                  ? isDarkMode
                                    ? theme.backgroundDark
                                    : theme.background
                                  : isDarkMode
                                    ? theme.textDark
                                    : theme.text,
                            }}
                          >
                            {isPlaying && currentAudio === teaching.audioSrc ? (
                              <>
                                <Pause className="h-4 w-4" />
                                <span>Pause Audio</span>
                              </>
                            ) : (
                              <>
                                <Play className="h-4 w-4" />
                                <span>Listen ({teaching.duration})</span>
                              </>
                            )}
                          </button>

                          <button
                            className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all"
                            style={{
                              backgroundColor: isDarkMode ? `${theme.accent2}40` : `${theme.accent1}40`,
                              color: isDarkMode ? theme.textDark : theme.text,
                            }}
                          >
                            <Download className="h-4 w-4" />
                            <span>Download</span>
                          </button>
                        </div>

                        {/* Notes Section */}
                        <div className="mt-6">
                          <div className="flex justify-between items-center mb-2">
                            <h3 className="text-lg font-medium">Your Notes</h3>
                            <button
                              onClick={saveNotes}
                              className="text-sm px-3 py-1 rounded"
                              style={{
                                backgroundColor: isDarkMode ? `${theme.accent2}40` : `${theme.accent1}40`,
                              }}
                            >
                              Save Notes
                            </button>
                          </div>
                          <textarea
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                            placeholder="Take notes on this teaching..."
                            className="w-full h-24 p-3 rounded-lg text-sm"
                            style={{
                              backgroundColor: isDarkMode ? `${theme.backgroundDark}40` : `${theme.background}40`,
                              borderColor: isDarkMode ? theme.accent2 : theme.accent1,
                              color: isDarkMode ? theme.textDark : theme.text,
                              border: `1px solid ${isDarkMode ? `${theme.accent2}50` : `${theme.accent1}50`}`,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Practice Tab */}
            {activeTab === "practice" && (
              <div className="space-y-8">
                {practices.map((practice) => (
                  <motion.div
                    key={practice.id}
                    className="mb-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div
                      className="rounded-xl p-8 backdrop-blur-sm border relative overflow-hidden"
                      style={{
                        borderColor: isDarkMode ? theme.accent2 : theme.accent1,
                        backgroundColor: isDarkMode ? `${theme.backgroundDark}80` : `${theme.background}80`,
                        boxShadow: `0 8px 32px ${isDarkMode ? "rgba(0, 0, 0, 0.3)" : "rgba(75, 0, 130, 0.15)"}`,
                      }}
                    >
                      <div className="relative z-10">
                        <div className="flex justify-between items-start mb-4">
                          <h2 className="text-2xl font-light">{practice.title}</h2>
                          <button
                            onClick={() => toggleCompletedPractice(practice.id)}
                            className="flex items-center gap-2 px-3 py-1 rounded text-sm"
                            style={{
                              backgroundColor: completedPractices.includes(practice.id)
                                ? isDarkMode
                                  ? theme.primary
                                  : theme.accent1
                                : isDarkMode
                                  ? `${theme.accent2}40`
                                  : `${theme.accent1}40`,
                              color: completedPractices.includes(practice.id)
                                ? isDarkMode
                                  ? theme.backgroundDark
                                  : theme.background
                                : isDarkMode
                                  ? theme.textDark
                                  : theme.text,
                            }}
                          >
                            <Check className="h-4 w-4" />
                            <span>{completedPractices.includes(practice.id) ? "Completed" : "Mark Complete"}</span>
                          </button>
                        </div>

                        <p className="text-lg mb-6">{practice.description}</p>

                        <div
                          className="p-6 rounded-lg"
                          style={{
                            backgroundColor: isDarkMode ? `${theme.accent2}20` : `${theme.accent1}20`,
                          }}
                        >
                          <ol className="list-decimal pl-5 space-y-3">
                            {practice.steps.map((step, index) => (
                              <li key={index} className="text-lg">
                                {step}
                              </li>
                            ))}
                          </ol>
                        </div>

                        {/* Practice Tracker */}
                        <div className="mt-6">
                          <h3 className="text-lg font-medium mb-3">Practice Tracker</h3>
                          <div className="flex gap-2 flex-wrap">
                            {Array.from({ length: 7 }).map((_, i) => (
                              <div
                                key={i}
                                className="w-10 h-10 rounded-full flex items-center justify-center text-sm"
                                style={{
                                  backgroundColor:
                                    i < 3
                                      ? isDarkMode
                                        ? theme.primary
                                        : theme.accent1
                                      : isDarkMode
                                        ? `${theme.accent2}30`
                                        : `${theme.accent1}30`,
                                  color:
                                    i < 3
                                      ? isDarkMode
                                        ? theme.backgroundDark
                                        : theme.background
                                      : isDarkMode
                                        ? theme.textDark
                                        : theme.text,
                                }}
                              >
                                {i < 3 ? <Check className="h-4 w-4" /> : i + 1}
                              </div>
                            ))}
                          </div>
                          <p className="text-sm mt-2 opacity-70">Track your daily practice for a week</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Wisdom Tab */}
            {activeTab === "wisdom" && (
              <div className="space-y-8">
                {wisdomLibrary.map((section) => (
                  <motion.div
                    key={section.id}
                    className="mb-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div
                      className="rounded-xl p-8 backdrop-blur-sm border relative overflow-hidden"
                      style={{
                        borderColor: isDarkMode ? theme.accent2 : theme.accent1,
                        backgroundColor: isDarkMode ? `${theme.backgroundDark}80` : `${theme.background}80`,
                        boxShadow: `0 8px 32px ${isDarkMode ? "rgba(0, 0, 0, 0.3)" : "rgba(75, 0, 130, 0.15)"}`,
                      }}
                    >
                      <div className="relative z-10">
                        <div className="flex justify-between items-center mb-6">
                          <h2 className="text-2xl font-light">{section.title}</h2>
                          <button
                            onClick={() => toggleSection(section.id)}
                            className="p-2 rounded-full transition-colors"
                            style={{
                              backgroundColor: isDarkMode ? `${theme.accent2}30` : `${theme.accent1}30`,
                            }}
                          >
                            {expandedSection === section.id ? (
                              <ChevronUp className="h-5 w-5" />
                            ) : (
                              <ChevronDown className="h-5 w-5" />
                            )}
                          </button>
                        </div>

                        <AnimatePresence>
                          {(expandedSection === section.id || expandedSection === null) && (
                            <motion.div
                              initial={expandedSection !== null ? { height: 0, opacity: 0 } : false}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="space-y-4">
                                {section.content.map((item, index) => (
                                  <div
                                    key={index}
                                    className="p-4 rounded-lg"
                                    style={{
                                      backgroundColor: isDarkMode ? `${theme.accent2}20` : `${theme.accent1}20`,
                                      borderLeft:
                                        index % 2 === 0 ? `3px solid ${theme.primary}` : `3px solid ${theme.secondary}`,
                                    }}
                                  >
                                    <p className="text-lg italic">{item}</p>
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Codex Reminder */}
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
                  borderColor: isDarkMode ? theme.accent2 : theme.accent1,
                  backgroundColor: isDarkMode ? `${theme.backgroundDark}80` : `${theme.background}80`,
                  boxShadow: `0 8px 32px ${isDarkMode ? "rgba(0, 0, 0, 0.3)" : "rgba(75, 0, 130, 0.15)"}`,
                }}
              >
                <div className="relative z-10">
                  <h2 className="text-2xl font-light mb-6">Codex Reminder</h2>

                  <motion.div
                    className="p-8 rounded-lg border relative overflow-hidden text-center"
                    style={{
                      borderColor: theme.primary,
                      backgroundColor: isDarkMode ? `${theme.backgroundDark}60` : `${theme.background}60`,
                    }}
                    whileInView={{
                      boxShadow: [
                        `0 0 0 rgba(75, 0, 130, 0)`,
                        `0 0 30px rgba(75, 0, 130, 0.15)`,
                        `0 0 0 rgba(75, 0, 130, 0)`,
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
                      <p>"Sovereignty is not separation — it's resonance with your own signal."</p>
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
            href="/room/mirror-room"
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
            href="/room/dream-room"
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

      <KibiChat roomContext="masterclass-room" theme={theme} isDarkMode={isDarkMode} />
    </div>
  )
}
