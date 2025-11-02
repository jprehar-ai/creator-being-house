"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { ArrowLeft, ArrowRight, Moon, Sun, Sparkles, Timer, Pencil, PenTool, Volume2, VolumeX } from "lucide-react"
import confetti from "canvas-confetti"
import { cn } from "@/lib/utils"
import { KibiChat } from "@/components/kibi-chat"

export default function CreatorBeingRoomPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [creativeResponse, setCreativeResponse] = useState("")
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [showPrompt, setShowPrompt] = useState(false)
  const [timerActive, setTimerActive] = useState(false)
  const [timerSeconds, setTimerSeconds] = useState(300) // 5 minutes
  const [showCompletionMessage, setShowCompletionMessage] = useState(false)
  const [activeTab, setActiveTab] = useState("write") // write, draw, reflect
  const [ambientSound, setAmbientSound] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const audioRef = useRef<HTMLAudioElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Drawing state
  const [isDrawing, setIsDrawing] = useState(false)
  const [lastPoint, setLastPoint] = useState({ x: 0, y: 0 })
  const [brushColor, setBrushColor] = useState("#D4AF37")
  const [brushSize, setBrushSize] = useState(5)

  // Monochromatic golden theme
  const theme = {
    primary: "#D4AF37", // Rich gold
    secondary: "#F5D76E", // Light gold
    background: "#F9F3DC", // Cream
    backgroundDark: "#2C2A1E", // Dark olive/brown
    accent1: "#E6C35C", // Medium gold
    accent2: "#BFA030", // Darker gold
    text: "#5A4E28", // Dark gold/brown
    textDark: "#F9F3DC", // Cream for dark mode
  }

  // Parallax effect for background elements
  const doorY = useTransform(scrollYProgress, [0, 1], [0, -50])
  const easelY = useTransform(scrollYProgress, [0, 1], [0, -30])
  const plantY = useTransform(scrollYProgress, [0, 1], [0, -70])
  const sunY = useTransform(scrollYProgress, [0, 1], [0, -20])

  // Initialize canvas for drawing
  useEffect(() => {
    if (canvasRef.current && activeTab === "draw") {
      const canvas = canvasRef.current
      const context = canvas.getContext("2d")
      if (context) {
        context.fillStyle = isDarkMode ? theme.backgroundDark : theme.background
        context.fillRect(0, 0, canvas.width, canvas.height)
      }
    }
  }, [activeTab, isDarkMode, theme.background, theme.backgroundDark])

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
    context.strokeStyle = brushColor
    context.lineWidth = brushSize
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

  // Timer functionality
  useEffect(() => {
    if (timerActive && timerSeconds > 0) {
      timerRef.current = setInterval(() => {
        setTimerSeconds((prev) => prev - 1)
      }, 1000)
    } else if (timerSeconds === 0) {
      setTimerActive(false)
      setShowCompletionMessage(true)
      // Trigger confetti celebration
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: [theme.primary, theme.secondary, theme.accent1],
      })
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [timerActive, timerSeconds, theme.accent1, theme.primary, theme.secondary])

  // Format timer display
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`
  }

  // Start timer and focus appropriate input
  const startCreativePractice = () => {
    setShowPrompt(true)
    setTimerActive(true)
    setTimeout(() => {
      if (activeTab === "write" && textareaRef.current) {
        textareaRef.current.focus()
      }
    }, 500)
  }

  // Reset timer
  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    setTimerSeconds(300)
    setTimerActive(false)
    setShowCompletionMessage(false)
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
      if (timerRef.current) clearInterval(timerRef.current)
      if (audioRef.current) audioRef.current.pause()
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
        {/* Door */}
        <motion.div className="absolute left-[5%] top-[15%] w-[15vw] h-[40vh] opacity-10" style={{ y: doorY }}>
          <svg viewBox="0 0 100 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 10 H90 V190 H10 Z" stroke={isDarkMode ? theme.textDark : theme.text} strokeWidth="2" />
            <path d="M10 10 A80 80 0 0 1 90 10" stroke={isDarkMode ? theme.textDark : theme.text} strokeWidth="2" />
          </svg>
        </motion.div>

        {/* Easel */}
        <motion.div className="absolute left-[30%] top-[20%] w-[20vw] h-[30vh] opacity-10" style={{ y: easelY }}>
          <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30 10 H70 V80 H30 Z" stroke={isDarkMode ? theme.textDark : theme.text} strokeWidth="2" />
            <path d="M20 120 L50 10 L80 120" stroke={isDarkMode ? theme.textDark : theme.text} strokeWidth="2" />
          </svg>
        </motion.div>

        {/* Plant */}
        <motion.div className="absolute right-[10%] bottom-[10%] w-[15vw] h-[25vh] opacity-10" style={{ y: plantY }}>
          <svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect
              x="35"
              y="120"
              width="30"
              height="30"
              stroke={isDarkMode ? theme.textDark : theme.text}
              strokeWidth="2"
            />
            <path
              d="M50 120 L50 40 M40 60 C30 40 50 20 50 40 M60 70 C70 50 50 30 50 50"
              stroke={isDarkMode ? theme.textDark : theme.text}
              strokeWidth="2"
            />
          </svg>
        </motion.div>

        {/* Sun Window */}
        <motion.div className="absolute right-[20%] top-[10%] w-[15vw] h-[20vh] opacity-10" style={{ y: sunY }}>
          <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 10 H90 V110 H10 Z" stroke={isDarkMode ? theme.textDark : theme.text} strokeWidth="2" />
            <path d="M10 10 A80 80 0 0 1 90 10" stroke={isDarkMode ? theme.textDark : theme.text} strokeWidth="2" />
            <circle cx="50" cy="50" r="15" stroke={isDarkMode ? theme.textDark : theme.text} strokeWidth="2" />
            <path
              d="M50 20 L50 30 M20 50 L30 50 M50 80 L50 70 M80 50 L70 50 M35 35 L25 25 M65 35 L75 25 M35 65 L25 75 M65 65 L75 75"
              stroke={isDarkMode ? theme.textDark : theme.text}
              strokeWidth="2"
            />
          </svg>
        </motion.div>
      </div>

      {/* Ambient Sound */}
      <audio ref={audioRef} src="/ambient-sound-scene.png" />

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
                <h1 className="text-5xl md:text-6xl font-light tracking-wide mb-4 relative">Creator Being Room</h1>
              </div>

              <div className="flex justify-center mb-6">
                <div className="h-1 w-24 rounded-full" style={{ backgroundColor: theme.primary }}></div>
              </div>

              <p className="text-xl md:text-2xl font-light opacity-90 max-w-2xl mx-auto">
                A sacred space for your creative essence to emerge
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
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Creator%20Being%20Room-1mJtZXeMJ1ICDj9y1M260dKpIns2G3.png"
                  alt="Golden creative space with easel, arched doorway, and art supplies"
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
                  <Sparkles />
                </motion.div>
              </div>
            </motion.div>

            {/* Creative Practice Section */}
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <div
                className="rounded-xl p-8 backdrop-blur-sm border relative overflow-hidden"
                style={{
                  borderColor: isDarkMode ? theme.accent2 : theme.accent1,
                  backgroundColor: isDarkMode ? `${theme.backgroundDark}80` : `${theme.background}80`,
                  boxShadow: `0 8px 32px ${isDarkMode ? "rgba(0, 0, 0, 0.3)" : "rgba(212, 175, 55, 0.15)"}`,
                }}
              >
                <div className="relative z-10">
                  <h2 className="text-2xl font-light mb-6">5-Minute Creative Practice</h2>

                  <p className="text-lg mb-8 leading-relaxed opacity-90">
                    Take a moment to connect with your creative essence. No agenda, no outcome—just presence and
                    expression.
                  </p>

                  {!showPrompt && (
                    <motion.button
                      className="px-6 py-3 rounded-lg border transition-all flex items-center gap-2 mx-auto"
                      style={{
                        borderColor: theme.primary,
                        color: isDarkMode ? theme.textDark : theme.text,
                        backgroundColor: isDarkMode ? `${theme.accent2}40` : `${theme.accent1}40`,
                      }}
                      whileHover={{
                        backgroundColor: isDarkMode ? `${theme.accent2}60` : `${theme.accent1}60`,
                        scale: 1.03,
                      }}
                      whileTap={{ scale: 0.98 }}
                      onClick={startCreativePractice}
                    >
                      <Sparkles className="h-4 w-4" style={{ color: theme.primary }} />
                      <span>Begin 5-Minute Practice</span>
                    </motion.button>
                  )}

                  <AnimatePresence>
                    {showPrompt && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                      >
                        {/* Timer and Controls */}
                        <div className="flex justify-between items-center mb-6">
                          <div className="flex items-center gap-2">
                            <div
                              className="px-4 py-2 rounded-full text-lg flex items-center gap-2 font-mono"
                              style={{
                                backgroundColor: isDarkMode ? `${theme.accent2}40` : `${theme.accent1}40`,
                                color: isDarkMode ? theme.textDark : theme.text,
                              }}
                            >
                              <Timer className="h-4 w-4" />
                              <span>{formatTime(timerSeconds)}</span>
                            </div>

                            <button onClick={resetTimer} className="text-sm underline opacity-70 hover:opacity-100">
                              Reset
                            </button>
                          </div>

                          <div
                            className="px-3 py-1 rounded-full text-sm"
                            style={{
                              backgroundColor: theme.primary,
                              color: isDarkMode ? theme.backgroundDark : theme.background,
                            }}
                          >
                            Private Space
                          </div>
                        </div>

                        {/* Creative Tabs */}
                        <div
                          className="flex border-b mb-6"
                          style={{ borderColor: isDarkMode ? theme.accent2 : theme.accent1 }}
                        >
                          <button
                            className={cn(
                              "px-4 py-2 flex items-center gap-2 transition-colors",
                              activeTab === "write" && "border-b-2 font-medium",
                            )}
                            style={{
                              borderColor: theme.primary,
                              color:
                                activeTab === "write"
                                  ? isDarkMode
                                    ? theme.textDark
                                    : theme.text
                                  : isDarkMode
                                    ? `${theme.textDark}80`
                                    : `${theme.text}80`,
                            }}
                            onClick={() => setActiveTab("write")}
                          >
                            <Pencil className="h-4 w-4" />
                            <span>Write</span>
                          </button>

                          <button
                            className={cn(
                              "px-4 py-2 flex items-center gap-2 transition-colors",
                              activeTab === "draw" && "border-b-2 font-medium",
                            )}
                            style={{
                              borderColor: theme.primary,
                              color:
                                activeTab === "draw"
                                  ? isDarkMode
                                    ? theme.textDark
                                    : theme.text
                                  : isDarkMode
                                    ? `${theme.textDark}80`
                                    : `${theme.text}80`,
                            }}
                            onClick={() => setActiveTab("draw")}
                          >
                            <PenTool className="h-4 w-4" />
                            <span>Draw</span>
                          </button>

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
                            <Sparkles className="h-4 w-4" />
                            <span>Reflect</span>
                          </button>
                        </div>

                        {/* Tab Content */}
                        <div className="mb-6">
                          {activeTab === "write" && (
                            <div>
                              <textarea
                                ref={textareaRef}
                                value={creativeResponse}
                                onChange={(e) => setCreativeResponse(e.target.value)}
                                placeholder="Let your thoughts flow freely. What wants to be expressed through you today?"
                                className="w-full h-60 p-4 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-1"
                                style={{
                                  backgroundColor: isDarkMode ? `${theme.backgroundDark}80` : `${theme.background}80`,
                                  borderColor: isDarkMode ? theme.accent2 : theme.accent1,
                                  color: isDarkMode ? theme.textDark : theme.text,
                                }}
                              ></textarea>
                            </div>
                          )}

                          {activeTab === "draw" && (
                            <div>
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
                                    {[
                                      theme.primary,
                                      theme.secondary,
                                      theme.accent1,
                                      theme.accent2,
                                      "#FFFFFF",
                                      "#000000",
                                    ].map((color) => (
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
                                    ))}
                                  </div>
                                </div>

                                <button
                                  onClick={clearCanvas}
                                  className="px-3 py-1 text-sm rounded"
                                  style={{
                                    backgroundColor: isDarkMode ? `${theme.accent2}40` : `${theme.accent1}40`,
                                  }}
                                >
                                  Clear
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
                            </div>
                          )}

                          {activeTab === "reflect" && (
                            <div className="h-60 flex flex-col items-center justify-center text-center p-6">
                              <Sparkles className="h-8 w-8 mb-4" style={{ color: theme.primary }} />
                              <p className="text-xl mb-4">Take a moment to simply be present.</p>
                              <p className="opacity-80 mb-6">Breathe deeply and notice what arises without judgment.</p>
                              <p className="text-sm italic">
                                No need to record anything—just experience this moment fully.
                              </p>
                            </div>
                          )}
                        </div>

                        <p className="text-sm italic opacity-70 text-center">
                          This is your private space. Your creative expressions are not saved or shared.
                        </p>

                        <AnimatePresence>
                          {showCompletionMessage && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.5 }}
                              className="mt-6 p-6 rounded-lg text-center"
                              style={{
                                backgroundColor: isDarkMode ? `${theme.accent2}20` : `${theme.accent1}20`,
                                border: `1px solid ${theme.primary}`,
                              }}
                            >
                              <p className="text-xl mb-2">Practice Complete</p>
                              <p className="opacity-80 mb-4">
                                You've created space for your creative essence to emerge.
                              </p>
                              <button
                                onClick={() => {
                                  resetTimer()
                                  setTimerActive(true)
                                }}
                                className="px-4 py-2 rounded-lg text-sm"
                                style={{
                                  backgroundColor: isDarkMode ? `${theme.accent2}40` : `${theme.accent1}40`,
                                }}
                              >
                                Practice Again
                              </button>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            {/* Wisdom Section */}
            <motion.div
              className="mb-16"
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
                  boxShadow: `0 8px 32px ${isDarkMode ? "rgba(0, 0, 0, 0.3)" : "rgba(212, 175, 55, 0.15)"}`,
                }}
              >
                <div className="relative z-10">
                  <h2 className="text-2xl font-light mb-6">Creative Wisdom</h2>

                  <motion.div
                    className="p-8 rounded-lg border-l-4 my-8 relative overflow-hidden"
                    style={{
                      borderColor: theme.primary,
                      backgroundColor: isDarkMode ? `${theme.backgroundDark}60` : `${theme.background}60`,
                    }}
                    whileInView={{
                      boxShadow: [
                        `0 0 0 rgba(${isDarkMode ? "191, 160, 48" : "212, 175, 55"}, 0)`,
                        `0 0 20px rgba(${isDarkMode ? "191, 160, 48" : "212, 175, 55"}, 0.2)`,
                        `0 0 0 rgba(${isDarkMode ? "191, 160, 48" : "212, 175, 55"}, 0)`,
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                    viewport={{ once: false, margin: "-100px" }}
                  >
                    {/* Quote Marks */}
                    <div className="absolute top-2 left-2 text-4xl opacity-20" style={{ color: theme.primary }}>
                      "
                    </div>
                    <div className="absolute bottom-2 right-4 text-4xl opacity-20" style={{ color: theme.primary }}>
                      "
                    </div>

                    <p className="text-center text-2xl md:text-3xl italic leading-relaxed">
                      Creation doesn't come from doing more.
                      <br />
                      It comes from being more of yourself.
                    </p>
                  </motion.div>

                  <div className="text-lg leading-relaxed opacity-90">
                    <p className="mb-6">
                      What's been asking to come through you lately?
                      <br />
                      Not as a task — but as a feeling, a spark, a quiet pull?
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Remember Section */}
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
                  boxShadow: `0 8px 32px ${isDarkMode ? "rgba(0, 0, 0, 0.3)" : "rgba(212, 175, 55, 0.15)"}`,
                }}
              >
                <div className="relative z-10">
                  <h2 className="text-2xl font-light mb-6">Remember</h2>

                  <motion.div
                    className="p-8 rounded-lg border relative overflow-hidden"
                    style={{
                      borderColor: theme.primary,
                      backgroundColor: isDarkMode ? `${theme.backgroundDark}60` : `${theme.background}60`,
                    }}
                    whileInView={{
                      boxShadow: [
                        `0 0 0 rgba(${isDarkMode ? "191, 160, 48" : "212, 175, 55"}, 0)`,
                        `0 0 30px rgba(${isDarkMode ? "191, 160, 48" : "212, 175, 55"}, 0.15)`,
                        `0 0 0 rgba(${isDarkMode ? "191, 160, 48" : "212, 175, 55"}, 0)`,
                      ],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                    viewport={{ once: false, margin: "-100px" }}
                  >
                    {/* Decorative Elements */}
                    <motion.div
                      className="absolute top-4 right-4 opacity-50"
                      style={{ color: theme.primary }}
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 60,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                    >
                      <Sparkles className="h-6 w-6" />
                    </motion.div>

                    <div className="text-2xl md:text-3xl font-light leading-relaxed">
                      <p className="mb-6">Your creative essence doesn't need permission.</p>
                      <p>It just needs space. This is that space.</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <KibiChat roomContext="creator-being-room" theme={theme} isDarkMode={isDarkMode} />
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
            href="/house"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border transition-all"
            style={{
              borderColor: isDarkMode ? theme.accent2 : theme.accent1,
              color: isDarkMode ? theme.textDark : theme.text,
              backgroundColor: isDarkMode ? `${theme.accent2}20` : `${theme.accent1}20`,
            }}
          >
            <ArrowLeft className="h-4 w-4" />
            House
          </Link>

          <Link
            href="/room/mirror-room"
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
    </div>
  )
}
