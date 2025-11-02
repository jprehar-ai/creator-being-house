"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowLeft, Moon, Sun, Volume2, VolumeX, ShoppingBag } from "lucide-react"
import { KibiChat } from "@/components/kibi-chat"

export default function SkinsOfLightPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true) // Default to dark mode for ceremonial feel
  const [ambientSound, setAmbientSound] = useState(false)
  const [intentionText, setIntentionText] = useState("")

  const containerRef = useRef<HTMLDivElement>(null)
  const audioRef = useRef<HTMLAudioElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Gold/ceremonial theme for Skins of Light
  const theme = {
    primary: "#D4AF37", // Gold
    secondary: "#C5B358", // Vegas gold
    background: "#FFF8E7", // Cream
    backgroundDark: "#1A1814", // Very dark brown
    accent1: "#B8860B", // Dark goldenrod
    accent2: "#E6C200", // Golden yellow
    text: "#3A3426", // Dark brown
    textDark: "#F5EFE0", // Light cream
  }

  // Parallax effect for background elements
  const patternsY = useTransform(scrollYProgress, [0, 1], [0, -50])
  const circlesY = useTransform(scrollYProgress, [0, 1], [0, -30])
  const linesY = useTransform(scrollYProgress, [0, 1], [0, -20])

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

        {/* Patterns */}
        <motion.div className="absolute left-0 right-0 top-[10%] w-full h-[30vh] opacity-10" style={{ y: patternsY }}>
          <svg viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10,10 L30,10 L30,30 L10,30 Z"
              stroke={isDarkMode ? theme.textDark : theme.text}
              strokeWidth="0.5"
              opacity="0.6"
            />
            <path
              d="M40,10 L60,10 L60,30 L40,30 Z"
              stroke={isDarkMode ? theme.textDark : theme.text}
              strokeWidth="0.5"
              opacity="0.6"
            />
            <path
              d="M70,10 L90,10 L90,30 L70,30 Z"
              stroke={isDarkMode ? theme.textDark : theme.text}
              strokeWidth="0.5"
              opacity="0.6"
            />
            <path
              d="M100,10 L120,10 L120,30 L100,30 Z"
              stroke={isDarkMode ? theme.textDark : theme.text}
              strokeWidth="0.5"
              opacity="0.6"
            />
            <path
              d="M130,10 L150,10 L150,30 L130,30 Z"
              stroke={isDarkMode ? theme.textDark : theme.text}
              strokeWidth="0.5"
              opacity="0.6"
            />
            <path
              d="M160,10 L180,10 L180,30 L160,30 Z"
              stroke={isDarkMode ? theme.textDark : theme.text}
              strokeWidth="0.5"
              opacity="0.6"
            />
            <path
              d="M10,40 L30,40 L30,60 L10,60 Z"
              stroke={isDarkMode ? theme.textDark : theme.text}
              strokeWidth="0.5"
              opacity="0.6"
            />
            <path
              d="M40,40 L60,40 L60,60 L40,60 Z"
              stroke={isDarkMode ? theme.textDark : theme.text}
              strokeWidth="0.5"
              opacity="0.6"
            />
            <path
              d="M70,40 L90,40 L90,60 L70,60 Z"
              stroke={isDarkMode ? theme.textDark : theme.text}
              strokeWidth="0.5"
              opacity="0.6"
            />
            <path
              d="M100,40 L120,40 L120,60 L100,60 Z"
              stroke={isDarkMode ? theme.textDark : theme.text}
              strokeWidth="0.5"
              opacity="0.6"
            />
            <path
              d="M130,40 L150,40 L150,60 L130,60 Z"
              stroke={isDarkMode ? theme.textDark : theme.text}
              strokeWidth="0.5"
              opacity="0.6"
            />
            <path
              d="M160,40 L180,40 L180,60 L160,60 Z"
              stroke={isDarkMode ? theme.textDark : theme.text}
              strokeWidth="0.5"
              opacity="0.6"
            />
          </svg>
        </motion.div>

        {/* Circles */}
        <motion.div className="absolute right-[10%] top-[20%] w-[30vw] h-[30vh] opacity-10" style={{ y: circlesY }}>
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke={isDarkMode ? theme.textDark : theme.text}
              strokeWidth="0.5"
              opacity="0.6"
            />
            <circle
              cx="50"
              cy="50"
              r="30"
              stroke={isDarkMode ? theme.textDark : theme.text}
              strokeWidth="0.5"
              opacity="0.6"
            />
            <circle
              cx="50"
              cy="50"
              r="20"
              stroke={isDarkMode ? theme.textDark : theme.text}
              strokeWidth="0.5"
              opacity="0.6"
            />
            <circle
              cx="50"
              cy="50"
              r="10"
              stroke={isDarkMode ? theme.textDark : theme.text}
              strokeWidth="0.5"
              opacity="0.6"
            />
          </svg>
        </motion.div>

        {/* Lines */}
        <motion.div className="absolute left-[20%] bottom-[20%] w-[40vw] h-[20vh] opacity-10" style={{ y: linesY }}>
          <svg viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line
              x1="0"
              y1="10"
              x2="200"
              y2="10"
              stroke={isDarkMode ? theme.textDark : theme.text}
              strokeWidth="0.5"
              opacity="0.6"
            />
            <line
              x1="0"
              y1="30"
              x2="200"
              y2="30"
              stroke={isDarkMode ? theme.textDark : theme.text}
              strokeWidth="0.5"
              opacity="0.6"
            />
            <line
              x1="0"
              y1="50"
              x2="200"
              y2="50"
              stroke={isDarkMode ? theme.textDark : theme.text}
              strokeWidth="0.5"
              opacity="0.6"
            />
            <line
              x1="0"
              y1="70"
              x2="200"
              y2="70"
              stroke={isDarkMode ? theme.textDark : theme.text}
              strokeWidth="0.5"
              opacity="0.6"
            />
            <line
              x1="0"
              y1="90"
              x2="200"
              y2="90"
              stroke={isDarkMode ? theme.textDark : theme.text}
              strokeWidth="0.5"
              opacity="0.6"
            />
          </svg>
        </motion.div>

        {/* Animated particles - gold dust */}
        <div className="absolute inset-0">
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                backgroundColor: isDarkMode ? theme.primary : theme.accent1,
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
      <audio ref={audioRef} src="/ambient-ceremonial-sound.png" />

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
                <h1 className="text-5xl md:text-6xl font-light tracking-wide mb-4 relative">Skins of Light</h1>
              </div>

              <div className="flex justify-center mb-6">
                <div className="h-1 w-24 rounded-full" style={{ backgroundColor: theme.primary }}></div>
              </div>

              <p className="text-xl md:text-2xl font-light opacity-90 max-w-2xl mx-auto">Wear your essence.</p>
            </motion.div>

            {/* What Are Skins of Light? */}
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div
                className="rounded-xl p-8 backdrop-blur-sm border relative overflow-hidden"
                style={{
                  borderColor: isDarkMode ? theme.accent2 : theme.accent1,
                  backgroundColor: isDarkMode ? `${theme.backgroundDark}80` : `${theme.background}80`,
                  boxShadow: `0 8px 32px ${isDarkMode ? "rgba(0, 0, 0, 0.3)" : "rgba(184, 134, 11, 0.15)"}`,
                }}
              >
                <div className="relative z-10">
                  <h2 className="text-2xl font-light mb-6">What Are Skins of Light?</h2>

                  <div className="space-y-6 text-lg leading-relaxed">
                    <p>
                      These garments are created as energetic tools. You don't wear them to impress. You wear them to
                      remember.
                    </p>

                    <p>
                      Each Skin of Light is designed with intention, carrying specific frequencies that help you embody
                      different aspects of your essence. They serve as bridges between your physical form and the
                      energetic qualities you wish to express.
                    </p>

                    <p>
                      Unlike conventional clothing that often serves as armor or masks, these pieces invite you to
                      become more fully yourself—to remember and reconnect with your inherent light.
                    </p>
                  </div>

                  <div className="mt-8">
                    <div
                      className="p-6 rounded-lg"
                      style={{
                        backgroundColor: isDarkMode ? `${theme.accent2}20` : `${theme.accent1}20`,
                      }}
                    >
                      <p className="italic text-center">"Clothing can be more than fabric. It can be frequency."</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* This Month's Offering */}
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
                  boxShadow: `0 8px 32px ${isDarkMode ? "rgba(0, 0, 0, 0.3)" : "rgba(184, 134, 11, 0.15)"}`,
                }}
              >
                <div className="relative z-10">
                  <h2 className="text-2xl font-light mb-6">This Month's Offering</h2>

                  <div className="flex flex-col md:flex-row gap-8 items-center">
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
                            {/* Golden Robe Visualization */}
                            <div className="relative">
                              {/* Robe silhouette */}
                              <svg
                                viewBox="0 0 100 150"
                                width="200"
                                height="300"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M50,10 C40,10 30,15 25,25 L25,140 L75,140 L75,25 C70,15 60,10 50,10 Z"
                                  stroke={isDarkMode ? theme.primary : theme.accent1}
                                  strokeWidth="1"
                                  fill={`${theme.primary}30`}
                                />
                                <path
                                  d="M25,40 L20,60 L25,80 M75,40 L80,60 L75,80"
                                  stroke={isDarkMode ? theme.primary : theme.accent1}
                                  strokeWidth="1"
                                />
                                <path
                                  d="M35,140 L35,150 M65,140 L65,150"
                                  stroke={isDarkMode ? theme.primary : theme.accent1}
                                  strokeWidth="1"
                                />
                                <path
                                  d="M40,20 L60,20"
                                  stroke={isDarkMode ? theme.primary : theme.accent1}
                                  strokeWidth="1"
                                />
                                <path
                                  d="M25,60 L75,60"
                                  stroke={isDarkMode ? theme.primary : theme.accent1}
                                  strokeWidth="0.5"
                                  strokeDasharray="2 2"
                                />
                                <path
                                  d="M30,100 L70,100"
                                  stroke={isDarkMode ? theme.primary : theme.accent1}
                                  strokeWidth="0.5"
                                  strokeDasharray="2 2"
                                />

                                {/* Sacred geometry overlay */}
                                <circle
                                  cx="50"
                                  cy="50"
                                  r="15"
                                  stroke={isDarkMode ? theme.primary : theme.accent1}
                                  strokeWidth="0.5"
                                  fill="none"
                                />
                                <circle
                                  cx="50"
                                  cy="50"
                                  r="10"
                                  stroke={isDarkMode ? theme.primary : theme.accent1}
                                  strokeWidth="0.5"
                                  fill="none"
                                />
                                <path
                                  d="M50,35 L50,65 M35,50 L65,50"
                                  stroke={isDarkMode ? theme.primary : theme.accent1}
                                  strokeWidth="0.5"
                                />
                              </svg>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </div>

                    <div className="md:w-1/2 space-y-6">
                      <h3 className="text-2xl font-medium">The Golden Robe</h3>
                      <p className="text-lg">A garment of visibility, warmth, and soul-led leadership.</p>

                      <div
                        className="p-4 rounded-lg"
                        style={{
                          backgroundColor: isDarkMode ? `${theme.accent2}20` : `${theme.accent1}20`,
                        }}
                      >
                        <p className="mb-2 font-medium">Energetic Properties:</p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Activates authentic visibility</li>
                          <li>Enhances warmth and presence</li>
                          <li>Supports soul-aligned leadership</li>
                          <li>Grounds spiritual wisdom into form</li>
                        </ul>
                      </div>

                      <div className="flex justify-center pt-4">
                        <motion.button
                          className="px-6 py-3 rounded-lg flex items-center gap-2"
                          style={{
                            backgroundColor: isDarkMode ? theme.primary : theme.accent1,
                            color: isDarkMode ? theme.backgroundDark : "#fff",
                          }}
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <ShoppingBag className="h-4 w-4" />
                          <span>Purchase (Stripe)</span>
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* How to Wear It */}
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
                  boxShadow: `0 8px 32px ${isDarkMode ? "rgba(0, 0, 0, 0.3)" : "rgba(184, 134, 11, 0.15)"}`,
                }}
              >
                <div className="relative z-10">
                  <h2 className="text-2xl font-light mb-6">How to Wear It</h2>

                  <div className="text-center mb-8">
                    <p className="text-xl leading-relaxed">
                      Before you wear it, pause.
                      <br />
                      Ask: <span className="italic">What energy am I choosing to carry today?</span>
                    </p>
                  </div>

                  <div className="space-y-8">
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                      <div className="md:w-1/4 flex justify-center">
                        <div
                          className="w-16 h-16 rounded-full flex items-center justify-center"
                          style={{
                            backgroundColor: isDarkMode ? `${theme.primary}30` : `${theme.accent1}20`,
                            border: `1px solid ${isDarkMode ? theme.primary : theme.accent1}`,
                          }}
                        >
                          <span className="text-2xl">1</span>
                        </div>
                      </div>
                      <div className="md:w-3/4">
                        <p className="text-lg">
                          Hold the garment in your hands. Feel its texture and weight. Acknowledge it as more than
                          fabric—it's a tool for transformation.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-center">
                      <div className="md:w-1/4 flex justify-center">
                        <div
                          className="w-16 h-16 rounded-full flex items-center justify-center"
                          style={{
                            backgroundColor: isDarkMode ? `${theme.primary}30` : `${theme.accent1}20`,
                            border: `1px solid ${isDarkMode ? theme.primary : theme.accent1}`,
                          }}
                        >
                          <span className="text-2xl">2</span>
                        </div>
                      </div>
                      <div className="md:w-3/4">
                        <p className="text-lg">
                          Set an intention for how you wish to embody its energy. For the Golden Robe, you might focus
                          on visibility, warmth, or leadership.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-center">
                      <div className="md:w-1/4 flex justify-center">
                        <div
                          className="w-16 h-16 rounded-full flex items-center justify-center"
                          style={{
                            backgroundColor: isDarkMode ? `${theme.primary}30` : `${theme.accent1}20`,
                            border: `1px solid ${isDarkMode ? theme.primary : theme.accent1}`,
                          }}
                        >
                          <span className="text-2xl">3</span>
                        </div>
                      </div>
                      <div className="md:w-3/4">
                        <p className="text-lg">
                          As you put it on, imagine the garment activating these qualities within you. Feel them
                          awakening in your body.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <label htmlFor="intentionText" className="block text-sm font-medium mb-2">
                      Set your intention here:
                    </label>
                    <textarea
                      id="intentionText"
                      value={intentionText}
                      onChange={(e) => setIntentionText(e.target.value)}
                      rows={3}
                      className="w-full p-4 rounded-lg"
                      style={{
                        backgroundColor: isDarkMode ? `${theme.backgroundDark}` : `${theme.background}`,
                        border: `1px solid ${isDarkMode ? theme.accent2 : theme.accent1}50`,
                        color: isDarkMode ? theme.textDark : theme.text,
                      }}
                      placeholder="Today, I choose to embody..."
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Closing Note */}
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
                  boxShadow: `0 8px 32px ${isDarkMode ? "rgba(0, 0, 0, 0.3)" : "rgba(184, 134, 11, 0.15)"}`,
                }}
              >
                <div className="relative z-10">
                  <h2 className="text-2xl font-light mb-6">Closing Note</h2>

                  <motion.div
                    className="p-8 rounded-lg border relative overflow-hidden text-center"
                    style={{
                      borderColor: theme.primary,
                      backgroundColor: isDarkMode ? `${theme.backgroundDark}60` : `${theme.background}60`,
                    }}
                    whileInView={{
                      boxShadow: [
                        `0 0 0 rgba(212, 175, 55, 0)`,
                        `0 0 30px rgba(212, 175, 55, 0.15)`,
                        `0 0 0 rgba(212, 175, 55, 0)`,
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
                      <p>
                        "You don't put this on to become someone.
                        <br />
                        You put it on to come home to yourself."
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <KibiChat roomContext="skins-of-light" theme={theme} isDarkMode={isDarkMode} />
    </div>
  )
}
