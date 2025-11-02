"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  ArrowLeft,
  ArrowRight,
  Moon,
  Sun,
  Volume2,
  VolumeX,
  Sparkles,
  CloudLightning,
  Save,
  Mic,
  MicOff,
  Download,
  PenTool,
  Eraser,
  Trash2,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { KibiChat } from "@/components/kibi-chat"

export default function DreamRoomPage() {
  // State management
  const [isLoaded, setIsLoaded] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true) // Default to dark mode for dreamy feel
  const [dreamText, setDreamText] = useState("")
  const [isRecording, setIsRecording] = useState(false)
  const [recordingTime, setRecordingTime] = useState(0)
  const [ambientSound, setAmbientSound] = useState(false)
  const [activeSection, setActiveSection] = useState<"dream" | "future" | "sketch">("dream")
  const [isDrawing, setIsDrawing] = useState(false)
  const [lastPoint, setLastPoint] = useState({ x: 0, y: 0 })
  const [brushColor, setBrushColor] = useState("#87CEEB")
  const [brushSize, setBrushSize] = useState(5)
  const [brushTool, setBrushTool] = useState<"pen" | "eraser">("pen")
  const [savedDreams, setSavedDreams] = useState<{ date: string; content: string }[]>([])
  const [futureVision, setFutureVision] = useState("")
  const [dreamPrompt, setDreamPrompt] = useState("")
  const [promptTimer, setPromptTimer] = useState(300) // 5 minutes in seconds
  const [isPromptTimerActive, setIsPromptTimerActive] = useState(false)
  const [remainingPromptTime, setRemainingPromptTime] = useState(300)

  // Refs
  const containerRef = useRef<HTMLDivElement>(null)
  const audioRef = useRef<HTMLAudioElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const recordingRef = useRef<MediaRecorder | null>(null)
  const recordingChunksRef = useRef<Blob[]>([])
  const recordingTimerRef = useRef<NodeJS.Timeout | null>(null)
  const promptTimerRef = useRef<NodeJS.Timeout | null>(null)
  const kibiInputRef = useRef<HTMLInputElement>(null)
  const kibiMessagesRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Sky blue/dreamy theme for Dream Room
  const theme = {
    primary: "#87CEEB", // Sky blue
    secondary: "#ADD8E6", // Light blue
    background: "#F0F8FF", // Alice blue
    backgroundDark: "#1A2639", // Dark blue
    accent1: "#B0E0E6", // Powder blue
    accent2: "#6495ED", // Cornflower blue
    text: "#2C3E50", // Dark blue/gray
    textDark: "#E0F7FA", // Very light cyan for dark mode
  }

  // Parallax effect for background elements
  const cloudsY = useTransform(scrollYProgress, [0, 1], [0, -50])
  const starsY = useTransform(scrollYProgress, [0, 1], [0, -30])
  const moonY = useTransform(scrollYProgress, [0, 1], [0, -70])

  // Dream prompts
  const dreamPrompts = [
    "Imagine a world where your deepest passion is the currency of exchange. What does this world look like?",
    "If you could design a perfect day that represents your ideal life, what would it include?",
    "Visualize yourself 5 years from now, living your most aligned life. What do you see, feel, and experience?",
    "Imagine you've been given a gift that represents your unique purpose. What is this gift, and how do you share it?",
    "If you could create a new tradition that celebrates what matters most to you, what would it be?",
  ]

  // Initialize canvas for drawing
  useEffect(() => {
    if (canvasRef.current && activeSection === "sketch") {
      const canvas = canvasRef.current
      const context = canvas.getContext("2d")
      if (context) {
        context.fillStyle = isDarkMode ? theme.backgroundDark : theme.background
        context.fillRect(0, 0, canvas.width, canvas.height)
      }
    }
  }, [activeSection, isDarkMode, theme.background, theme.backgroundDark])

  // Handle drawing
  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!canvasRef.current) return

    setIsDrawing(true)
    const canvas = canvasRef.current
    const rect = canvas.getBoundingClientRect()

    let clientX, clientY

    if ("touches" in e) {
      clientX = e.touches[0].clientX
      clientY = e.touches[0].clientY
    } else {
      clientX = e.clientX
      clientY = e.clientY
    }

    const x = clientX - rect.left
    const y = clientY - rect.top

    setLastPoint({ x, y })
  }

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !canvasRef.current) return

    const canvas = canvasRef.current
    const context = canvas.getContext("2d")
    if (!context) return

    const rect = canvas.getBoundingClientRect()

    let clientX, clientY

    if ("touches" in e) {
      clientX = e.touches[0].clientX
      clientY = e.touches[0].clientY
      e.preventDefault() // Prevent scrolling on touch devices
    } else {
      clientX = e.clientX
      clientY = e.clientY
    }

    const x = clientX - rect.left
    const y = clientY - rect.top

    context.beginPath()
    context.moveTo(lastPoint.x, lastPoint.y)
    context.lineTo(x, y)

    if (brushTool === "pen") {
      context.strokeStyle = brushColor
      context.lineWidth = brushSize
    } else {
      context.strokeStyle = isDarkMode ? theme.backgroundDark : theme.background
      context.lineWidth = brushSize * 2
    }

    context.lineCap = "round"
    context.lineJoin = "round"
    context.stroke()

    setLastPoint({ x, y })
  }

  const endDrawing = () => {
    setIsDrawing(false)
  }

  // Clear canvas
  const clearCanvas = () => {
    if (!canvasRef.current) return
    const canvas = canvasRef.current
    const context = canvas.getContext("2d")
    if (context) {
      context.fillStyle = isDarkMode ? theme.backgroundDark : theme.background
      context.fillRect(0, 0, canvas.width, canvas.height)
    }
  }

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

  // Download dream text
  const downloadDreamText = () => {
    const element = document.createElement("a")
    const file = new Blob([dreamText], { type: "text/plain" })
    element.href = URL.createObjectURL(file)
    element.download = "my-dream-vision.txt"
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  // Download canvas drawing
  const downloadDrawing = () => {
    if (!canvasRef.current) return
    const canvas = canvasRef.current
    const image = canvas.toDataURL("image/png")
    const link = document.createElement("a")
    link.href = image
    link.download = "my-dream-sketch.png"
    link.click()
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
      if (recordingRef.current && recordingRef.current.state === "recording") {
        recordingRef.current.stop()
      }
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
      {/* Background Elements - Parallax */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        {/* Clouds */}
        <motion.div className="absolute left-[10%] top-[20%] w-[40vw] h-[20vh] opacity-10" style={{ y: cloudsY }}>
          <svg viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M30 60 Q40 40 60 50 Q70 30 90 40 Q110 30 120 50 Q140 40 160 60 Q180 50 190 70 Q160 80 130 75 Q100 85 70 75 Q40 80 30 60 Z"
              fill={isDarkMode ? `${theme.textDark}20` : `${theme.text}20`}
            />
          </svg>
        </motion.div>

        {/* Stars */}
        <motion.div className="absolute right-[15%] top-[15%] w-[30vw] h-[30vh] opacity-10" style={{ y: starsY }}>
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                borderRadius: "50%",
                backgroundColor: isDarkMode ? theme.textDark : theme.text,
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </motion.div>

        {/* Moon/Sun */}
        <motion.div className="absolute right-[20%] top-[10%] w-[15vw] h-[15vh] opacity-10" style={{ y: moonY }}>
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="30" stroke={isDarkMode ? theme.textDark : theme.text} strokeWidth="2" />
            {isDarkMode ? (
              <path
                d="M50 20 C30 20 20 35 20 50 C20 70 35 80 50 80 C65 80 80 70 80 50 C80 35 70 20 50 20 Z"
                fill={`${theme.textDark}20`}
              />
            ) : (
              <>
                <circle cx="50" cy="50" r="25" fill={`${theme.text}10`} />
                <path
                  d="M50 20 L50 10 M20 50 L10 50 M50 80 L50 90 M80 50 L90 50 M30 30 L20 20 M70 30 L80 20 M30 70 L20 80 M70 70 L80 80"
                  stroke={theme.text}
                  strokeWidth="1"
                />
              </>
            )}
          </svg>
        </motion.div>
      </div>

      {/* Ambient Sound */}
      <audio ref={audioRef} src="/ambient-dream-sound.png" />

      {/* Fixed Header */}
      <header
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors duration-700"
        style={{
          borderColor: isDarkMode ? theme.accent2 : theme.accent1,
          backgroundColor: isDarkMode ? `${theme.backgroundDark}CC` : `${theme.background}CC`,
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
              className="mb-16 text-center"
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
                <h1 className="text-5xl md:text-6xl font-light tracking-wide mb-4 relative">The Dream Room</h1>
              </div>

              <div className="flex justify-center mb-6">
                <div className="h-1 w-24 rounded-full" style={{ backgroundColor: theme.primary }}></div>
              </div>

              <p className="text-xl md:text-2xl font-light opacity-90 max-w-2xl mx-auto">
                Your imagination builds worlds.
              </p>
            </motion.div>

            {/* Featured Image */}
            <motion.div
              className="mb-16 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
            >
              <div className="relative rounded-xl overflow-hidden aspect-[16/9]">
                <Image
                  src="/sky-blue-dream-room.png"
                  alt="Dream Room - A dreamy sky-like space for imagination"
                  fill
                  className="object-cover"
                  priority
                />

                {/* Floating Elements */}
                <motion.div
                  className="absolute top-1/4 left-1/4 w-8 h-8"
                  style={{ color: theme.primary }}
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 10, 0, -10, 0],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                >
                  <Sparkles />
                </motion.div>

                <motion.div
                  className="absolute bottom-1/3 right-1/4 w-6 h-6"
                  style={{ color: theme.secondary }}
                  animate={{
                    y: [0, 10, 0],
                    rotate: [0, -5, 0, 5, 0],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 6,
                    delay: 1,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                >
                  <CloudLightning />
                </motion.div>
              </div>
            </motion.div>

            {/* Dream Tabs */}
            <div className="mb-8">
              <div className="flex border-b mb-6" style={{ borderColor: isDarkMode ? theme.accent2 : theme.accent1 }}>
                <button
                  className={cn(
                    "px-4 py-2 flex items-center gap-2 transition-colors",
                    activeSection === "dream" && "border-b-2 font-medium",
                  )}
                  style={{
                    borderColor: theme.primary,
                    color:
                      activeSection === "dream"
                        ? isDarkMode
                          ? theme.textDark
                          : theme.text
                        : isDarkMode
                          ? `${theme.textDark}80`
                          : `${theme.text}80`,
                  }}
                  onClick={() => setActiveSection("dream")}
                >
                  <Sparkles className="h-4 w-4" />
                  <span>Dream Prompt</span>
                </button>

                <button
                  className={cn(
                    "px-4 py-2 flex items-center gap-2 transition-colors",
                    activeSection === "future" && "border-b-2 font-medium",
                  )}
                  style={{
                    borderColor: theme.primary,
                    color:
                      activeSection === "future"
                        ? isDarkMode
                          ? theme.textDark
                          : theme.text
                        : isDarkMode
                          ? `${theme.textDark}80`
                          : `${theme.text}80`,
                  }}
                  onClick={() => setActiveSection("future")}
                >
                  <CloudLightning className="h-4 w-4" />
                  <span>Future Self</span>
                </button>

                <button
                  className={cn(
                    "px-4 py-2 flex items-center gap-2 transition-colors",
                    activeSection === "sketch" && "border-b-2 font-medium",
                  )}
                  style={{
                    borderColor: theme.primary,
                    color:
                      activeSection === "sketch"
                        ? isDarkMode
                          ? theme.textDark
                          : theme.text
                        : isDarkMode
                          ? `${theme.textDark}80`
                          : `${theme.text}80`,
                  }}
                  onClick={() => setActiveSection("sketch")}
                >
                  <Mic className="h-4 w-4" />
                  <span>Future Sketch</span>
                </button>
              </div>
            </div>

            {/* Dream Prompt Section */}
            {activeSection === "dream" && (
              <motion.div
                className="mb-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.5 }}
              >
                <div
                  className="rounded-xl p-8 backdrop-blur-sm border relative overflow-hidden"
                  style={{
                    borderColor: isDarkMode ? theme.accent2 : theme.accent1,
                    backgroundColor: isDarkMode ? `${theme.backgroundDark}80` : `${theme.background}80`,
                    boxShadow: `0 8px 32px ${isDarkMode ? "rgba(0, 0, 0, 0.3)" : "rgba(135, 206, 235, 0.15)"}`,
                  }}
                >
                  <div className="relative z-10">
                    <h2 className="text-2xl font-light mb-6">Dream Prompt</h2>

                    <div className="space-y-6 text-lg leading-relaxed opacity-90">
                      <p className="italic text-xl">
                        Close your eyes. Imagine a life that feels light, alive, and aligned.
                        <br />
                        What does it look like? Feel like? Smell like?
                      </p>

                      <div className="mt-8">
                        <textarea
                          value={dreamText}
                          onChange={(e) => setDreamText(e.target.value)}
                          placeholder="Describe your vision here..."
                          className="w-full h-60 p-4 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-1"
                          style={{
                            backgroundColor: isDarkMode ? `${theme.backgroundDark}60` : `${theme.background}60`,
                            borderColor: isDarkMode ? theme.accent2 : theme.accent1,
                            color: isDarkMode ? theme.textDark : theme.text,
                          }}
                        />

                        {dreamText && (
                          <div className="flex justify-end mt-4">
                            <button
                              onClick={downloadDreamText}
                              className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all"
                              style={{
                                backgroundColor: isDarkMode ? `${theme.accent2}40` : `${theme.accent1}40`,
                                color: isDarkMode ? theme.textDark : theme.text,
                              }}
                            >
                              <Save className="h-4 w-4" />
                              <span>Save Vision</span>
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Meet Your Future Self */}
            {activeSection === "future" && (
              <motion.div
                className="mb-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.5 }}
              >
                <div
                  className="rounded-xl p-8 backdrop-blur-sm border relative overflow-hidden"
                  style={{
                    borderColor: isDarkMode ? theme.accent2 : theme.accent1,
                    backgroundColor: isDarkMode ? `${theme.backgroundDark}80` : `${theme.background}80`,
                    boxShadow: `0 8px 32px ${isDarkMode ? "rgba(0, 0, 0, 0.3)" : "rgba(135, 206, 235, 0.15)"}`,
                  }}
                >
                  <div className="relative z-10">
                    <h2 className="text-2xl font-light mb-6">Meet Your Future Self</h2>

                    <div className="flex flex-col md:flex-row gap-8 items-center">
                      <div className="md:w-1/2 space-y-6">
                        <p className="text-lg leading-relaxed">
                          Visualize your future self walking toward you.
                          <br />
                          Ask: <span className="italic">What do you want me to know right now?</span>
                        </p>

                        <div
                          className="p-6 rounded-lg"
                          style={{
                            backgroundColor: isDarkMode ? `${theme.accent2}20` : `${theme.accent1}20`,
                          }}
                        >
                          <p className="mb-4">Guidance for this practice:</p>
                          <ol className="list-decimal pl-5 space-y-3">
                            <li>Close your eyes and take three deep breaths.</li>
                            <li>Imagine yourself 5 years from now, embodying your highest potential.</li>
                            <li>See this future self walking toward you with a message.</li>
                            <li>Listen deeply to what they have to share.</li>
                            <li>When ready, open your eyes and note any insights.</li>
                          </ol>
                        </div>
                      </div>

                      <div className="md:w-1/2 relative">
                        <div
                          className="aspect-square rounded-lg overflow-hidden relative"
                          style={{
                            backgroundColor: isDarkMode ? `${theme.accent2}20` : `${theme.accent1}20`,
                            border: `1px solid ${isDarkMode ? theme.accent2 : theme.accent1}`,
                          }}
                        >
                          <motion.div
                            className="absolute inset-0"
                            animate={{
                              background: [
                                `radial-gradient(circle at center, ${theme.primary}20, transparent 70%)`,
                                `radial-gradient(circle at center, ${theme.primary}30, transparent 70%)`,
                                `radial-gradient(circle at center, ${theme.primary}20, transparent 70%)`,
                              ],
                            }}
                            transition={{
                              duration: 8,
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
                              <svg
                                viewBox="0 0 100 100"
                                width="120"
                                height="120"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <circle
                                  cx="50"
                                  cy="50"
                                  r="40"
                                  stroke={isDarkMode ? theme.primary : theme.accent1}
                                  strokeWidth="2"
                                  opacity="0.6"
                                />
                                <path
                                  d="M30 70 Q50 30 70 70"
                                  stroke={isDarkMode ? theme.primary : theme.accent1}
                                  strokeWidth="2"
                                  fill="none"
                                />
                                <circle
                                  cx="50"
                                  cy="40"
                                  r="10"
                                  stroke={isDarkMode ? theme.primary : theme.accent1}
                                  strokeWidth="2"
                                  fill="none"
                                />
                              </svg>
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Future Sketch Practice */}
            {activeSection === "sketch" && (
              <motion.div
                className="mb-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.5 }}
              >
                <div
                  className="rounded-xl p-8 backdrop-blur-sm border relative overflow-hidden"
                  style={{
                    borderColor: isDarkMode ? theme.accent2 : theme.accent1,
                    backgroundColor: isDarkMode ? `${theme.backgroundDark}80` : `${theme.background}80`,
                    boxShadow: `0 8px 32px ${isDarkMode ? "rgba(0, 0, 0, 0.3)" : "rgba(135, 206, 235, 0.15)"}`,
                  }}
                >
                  <div className="relative z-10">
                    <h2 className="text-2xl font-light mb-6">Future Sketch Practice</h2>

                    <p className="text-lg mb-6">Draw it. Describe it. Voice note it. Let your dream come into form.</p>

                    <div className="space-y-8">
                      {/* Drawing Tool */}
                      <div>
                        <h3 className="text-xl font-light mb-4">Draw Your Vision</h3>
                        <div className="mb-4 flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <label className="text-sm">Brush:</label>
                            <input
                              type="range"
                              min="1"
                              max="20"
                              value={brushSize}
                              onChange={(e) => setBrushSize(Number.parseInt(e.target.value))}
                              className="w-24"
                            />
                          </div>

                          <div className="flex items-center gap-2">
                            <label className="text-sm">Color:</label>
                            <div className="flex gap-2">
                              {[theme.primary, theme.secondary, theme.accent1, theme.accent2, "#FFFFFF", "#000000"].map(
                                (color) => (
                                  <button
                                    key={color}
                                    className={cn("w-6 h-6 rounded-full border", brushColor === color && "ring-2")}
                                    style={{
                                      backgroundColor: color,
                                      borderColor: isDarkMode ? theme.accent2 : theme.accent1,
                                      ringColor: theme.primary,
                                    }}
                                    onClick={() => setBrushColor(color)}
                                  />
                                ),
                              )}
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <label className="text-sm">Tool:</label>
                            <button
                              className={cn("p-1 rounded", brushTool === "pen" && "bg-blue-200")}
                              style={{
                                backgroundColor:
                                  brushTool === "pen"
                                    ? isDarkMode
                                      ? `${theme.accent2}40`
                                      : `${theme.accent1}40`
                                    : "transparent",
                              }}
                              onClick={() => setBrushTool("pen")}
                            >
                              <PenTool className="w-4 h-4" />
                            </button>
                            <button
                              className={cn("p-1 rounded", brushTool === "eraser" && "bg-blue-200")}
                              style={{
                                backgroundColor:
                                  brushTool === "eraser"
                                    ? isDarkMode
                                      ? `${theme.accent2}40`
                                      : `${theme.accent1}40`
                                    : "transparent",
                              }}
                              onClick={() => setBrushTool("eraser")}
                            >
                              <Eraser className="w-4 h-4" />
                            </button>
                          </div>

                          <button
                            onClick={clearCanvas}
                            className="px-3 py-1 text-sm rounded"
                            style={{
                              backgroundColor: isDarkMode ? `${theme.accent2}40` : `${theme.accent1}40`,
                            }}
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        <div
                          className="border rounded-lg overflow-hidden"
                          style={{
                            borderColor: isDarkMode ? theme.accent2 : theme.accent1,
                          }}
                        >
                          <canvas
                            ref={canvasRef}
                            width={800}
                            height={400}
                            className="w-full h-60 touch-none"
                            onMouseDown={startDrawing}
                            onMouseMove={draw}
                            onMouseUp={endDrawing}
                            onMouseLeave={endDrawing}
                            onTouchStart={startDrawing}
                            onTouchMove={draw}
                            onTouchEnd={endDrawing}
                          />
                        </div>

                        <div className="flex justify-end mt-2">
                          <button
                            onClick={downloadDrawing}
                            className="flex items-center gap-2 px-3 py-1 rounded text-sm"
                            style={{
                              backgroundColor: isDarkMode ? `${theme.accent2}40` : `${theme.accent1}40`,
                            }}
                          >
                            <Download className="h-3 w-3" />
                            <span>Save Drawing</span>
                          </button>
                        </div>
                      </div>

                      {/* Voice Recording */}
                      <div>
                        <h3 className="text-xl font-light mb-4">Voice Your Vision</h3>
                        <div
                          className="p-6 rounded-lg flex flex-col items-center justify-center"
                          style={{
                            backgroundColor: isDarkMode ? `${theme.accent2}20` : `${theme.accent1}20`,
                            minHeight: "150px",
                          }}
                        >
                          <button
                            onClick={toggleRecording}
                            className="flex items-center gap-2 px-6 py-3 rounded-full transition-all mb-4"
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
                                <MicOff className="h-5 w-5" />
                                <span>Stop Recording</span>
                              </>
                            ) : (
                              <>
                                <Mic className="h-5 w-5" />
                                <span>Start Recording</span>
                              </>
                            )}
                          </button>

                          {isRecording && (
                            <div className="text-center">
                              <div
                                className="inline-block px-3 py-1 rounded-full text-sm mb-2"
                                style={{
                                  backgroundColor: isDarkMode ? `${theme.accent2}40` : `${theme.accent1}40`,
                                }}
                              >
                                Recording: {formatRecordingTime(recordingTime)}
                              </div>
                              <p className="text-sm opacity-70">Speak your vision into existence...</p>
                            </div>
                          )}
                        </div>
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
                  borderColor: isDarkMode ? theme.accent2 : theme.accent1,
                  backgroundColor: isDarkMode ? `${theme.backgroundDark}80` : `${theme.background}80`,
                  boxShadow: `0 8px 32px ${isDarkMode ? "rgba(0, 0, 0, 0.3)" : "rgba(135, 206, 235, 0.15)"}`,
                }}
              >
                <div className="relative z-10">
                  <h2 className="text-2xl font-light mb-6">Final Whisper</h2>

                  <motion.div
                    className="p-8 rounded-lg border relative overflow-hidden text-center"
                    style={{
                      borderColor: theme.primary,
                      backgroundColor: isDarkMode ? `${theme.backgroundDark}60` : `${theme.background}60`,
                    }}
                    whileInView={{
                      boxShadow: [
                        `0 0 0 rgba(${isDarkMode ? "100, 149, 237" : "135, 206, 235"}, 0)`,
                        `0 0 30px rgba(${isDarkMode ? "100, 149, 237" : "135, 206, 235"}, 0.15)`,
                        `0 0 0 rgba(${isDarkMode ? "100, 149, 237" : "135, 206, 235"}, 0)`,
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
                      <p>"The future is not out there. It's already inside you."</p>
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
          borderColor: isDarkMode ? theme.accent2 : theme.accent1,
          backgroundColor: isDarkMode ? `${theme.backgroundDark}CC` : `${theme.background}CC`,
        }}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link
            href="/room/masterclass-room"
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
            href="/room/skins-of-light"
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
      <KibiChat roomContext="dream-room" theme={theme} isDarkMode={isDarkMode} />
    </div>
  )
}
