"use client"

import type React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp, ArrowRight, Play, Pause, Check, Share2, Gift, Sparkles, X, Mail } from 'lucide-react'
import { useState, useEffect } from "react"
import Image from "next/image"

export default function MembershipPage() {
  const [expandedRoom, setExpandedRoom] = useState<number | null>(null)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [isTypewriterPlaying, setIsTypewriterPlaying] = useState(false)
  const [typewriterText, setTypewriterText] = useState("")
  const [selectedPlan, setSelectedPlan] = useState<"monthly" | "annual">("monthly")
  const [showWaitlistModal, setShowWaitlistModal] = useState(false)
  const [email, setEmail] = useState("")

  const fullText =
    "The Creator Being House is a daily rhythm for your inner world. It's made of six interactive rooms that support your energy, emotion, and expression. One helps you reset. One rewrites your thoughts. One brings your ideas to life. The others hold your dreams, your learning, and how you want to feel in your body each day. Whether you stay for five minutes or dive deep, the House adapts to you — steady, flexible, and designed to help you live in tune with your own inner frequency. You create through your vibration — and the House was built to help you remember how. How to tune into your internal state, shape your reality from the inside out, and move through life as the creator you already are."

  // Typewriter effect
  useEffect(() => {
    if (isTypewriterPlaying) {
      let i = 0
      const timer = setInterval(() => {
        if (i < fullText.length) {
          setTypewriterText(fullText.slice(0, i + 1))
          i++
        } else {
          clearInterval(timer)
          setIsTypewriterPlaying(false)
        }
      }, 30)
      return () => clearInterval(timer)
    }
  }, [isTypewriterPlaying, fullText])

  const rooms = [
    {
      name: "Rhythm Room",
      keyword: "Reset",
      image: "/rhythm-room-hero.png",
      shortDesc: "5-minute daily energy reset",
      fullDesc:
        "Your body's rhythm speaks before your mind does. When you tune into your pulse and breath, you return to the truth of how you actually feel. When your day feels scattered, heavy, or out of sync, this is your go-to space to realign.",
      monthlyValue: [
        "5-minute daily check-ins with your heartbeat & breath",
        "See your energy levels in real-time with visual feedback",
        "Track your patterns automatically over weeks & months",
        "Set monthly goals and get progress updates",
      ],
    },
    {
      name: "Mirror Room",
      keyword: "Reflect",
      image: "/mirror-room-hero.png",
      shortDesc: "Transform negative thoughts instantly",
      fullDesc:
        "Life can only change when you see yourself clearly. Your outer reality is a reflection of your inner state. When you're stuck in old patterns or spirals of self-doubt, this room helps you see it clearly and flip the script.",
      monthlyValue: [
        "Talk or type your thoughts, get instant story insights",
        "Transform negative thoughts into empowering ones",
        "Save your best scripts to read when you need them",
        "See which thoughts come up most often each week",
        "Get monthly check-ins with action steps",
      ],
    },
    {
      name: "Creator Being Room",
      keyword: "Create",
      image: "/creator-being-room-hero.png",
      shortDesc: "Unlock your creative gifts",
      fullDesc:
        "Your gifts are not random, they are the exact medicine you came here to circulate into the world. When you feel the pull to create but don't know where to start, this room helps you name what you carry inside.",
      monthlyValue: [
        "Take a quiz to discover your creative strengths",
        "Try one small creative experiment each day",
        "Complete fun mini-projects every week",
        "Map how your creativity can become income monthly",
        "See all your creations organized at year-end",
      ],
    },
    {
      name: "Dream Room",
      keyword: "Explore",
      image: "/dream-room-hero.png",
      shortDesc: "Decode dreams & inner guidance",
      fullDesc:
        "Dreams are not illusions, they are maps from your deeper intelligence, guiding you beyond logic. Your space for exploring both night dreams and daydreams, with tools to understand what your inner world is telling you.",
      monthlyValue: [
        "Simple tools to remember and record your dreams",
        "Learn what your dream symbols might mean",
        "Practice becoming aware while you dream",
        "Use daydreams to spark new ideas and directions",
        "Notice how your inner world guides your choices",
      ],
    },
    {
      name: "Masterclass Room",
      keyword: "Learn",
      image: "/masterclass-room-hero.png",
      shortDesc: "Monthly depth teachings",
      fullDesc:
        "Wisdom is not learned, it's remembered and embodied, so it lives through you in real time. When you're ready to grow in a way that actually resonates, this room gives you depth, not just information.",
      monthlyValue: [
        "Get chapters each month on life-changing topics",
        "Ask questions and get personalized answers from Kibi",
        "Check in mid-month to go deeper on what interests you",
        "Try creative exercises to apply what you're learning",
        "Keep all teachings forever in your personal library",
      ],
    },
    {
      name: "Skins of Light Room",
      keyword: "Embody",
      image: "/skins-of-light-hero.png",
      shortDesc: "Dress from your inner state",
      fullDesc:
        "How you arrive in the world is a frequency and when your inner and outer align, life flows with you. Get dressed vibrationally, from the inside out. Each day starts with: how does your heart want to arrive in the world?",
      monthlyValue: [
        "Choose how you want to feel each morning",
        "Get colors, textures, and small rituals to match your mood",
        "Learn simple breathing and posture techniques",
        "Track what makes you feel most like yourself",
        "Discover your signature style and energy each month",
      ],
    },
  ]

  const faqs = [
    {
      question: "How much time do I need each day?",
      answer:
        "As little as 5 minutes, or as much as your heart desires. The House adapts to your rhythm, not the other way around.",
    },
    {
      question: "What if I'm not creative?",
      answer:
        "Creativity isn't just art—it's how you solve problems, express yourself, and bring new possibilities to life. The House helps you discover your unique creative essence.",
    },
    {
      question: "Can I cancel anytime?",
      answer:
        "Yes, absolutely. You can pause or cancel whenever you need to. We want you here because it feels like home, not because you're stuck.",
    },
    {
      question: "What makes founding members special?",
      answer:
        "As a founding member, you'll help shape the House as it grows. Your voice matters in creating something truly special, and you'll get exclusive benefits when we reach 100 members.",
    },
  ]

  const toggleRoom = (index: number) => {
    setExpandedRoom(expandedRoom === index ? null : index)
  }

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  const startTypewriter = () => {
    setTypewriterText("")
    setIsTypewriterPlaying(true)
  }

  const getMailtoUrl = () => {
    const subject = encodeURIComponent("Waitlist: Creator Being House Membership")
    const body = encodeURIComponent(
      `Hi Jem,\n\nI'd like to join the waitlist for the Creator Being House!\n\nMy email: ${email || "[Your Email]"}\nSelected Plan: ${selectedPlan === "monthly" ? "Monthly ($30/month)" : "Annual ($288/year)"}\n\nLooking forward to hearing from you!\n\nBest,\n[Your Name]`
    )
    
    return `mailto:jem@creatorbeing.co?subject=${subject}&body=${body}`
  }

  return (
    <div className="relative overflow-hidden bg-gray-950 min-h-screen">
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(236, 72, 153, 0.4) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
          animate={{
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-[550px] h-[550px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
          animate={{
            x: [0, 40, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 22,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <section className="relative py-32 overflow-hidden z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-12"
            >
              <div className="flex justify-center">
                <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl text-purple-300 px-6 py-3 rounded-full text-sm font-medium border border-white/10 shadow-[0_0_30px_rgba(168,85,247,0.3)]">
                  <Sparkles className="h-4 w-4" />
                  Join the Creator Being House
                </div>
              </div>

              <div className="space-y-6">
                <h1 className="text-5xl md:text-7xl font-light text-white leading-tight">
                  One Home.{" "}
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent font-medium">
                    Six Rooms.
                  </span>
                  <br />
                  Everything You Need.
                </h1>

                <p className="text-xl md:text-2xl text-gray-300 font-light max-w-5xl mx-auto leading-relaxed">
                  The Creator Being House is more than a membership. It's a{" "}
                  <span className="text-purple-400 font-medium">rhythm</span>, a{" "}
                  <span className="text-pink-400 font-medium">mirror</span>, a{" "}
                  <span className="text-orange-400 font-medium">creative partner</span>, and a{" "}
                  <span className="text-blue-400 font-medium">space to rest in your own truth</span> — all in one place.
                </p>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => document.getElementById("founding-member")?.scrollIntoView({ behavior: "smooth" })}
                  className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 text-white px-12 py-4 rounded-full font-medium transition-all text-xl inline-flex items-center gap-3 shadow-[0_0_40px_rgba(168,85,247,0.5)] hover:shadow-[0_0_60px_rgba(168,85,247,0.7)]"
                >
                  Join the House
                  <ArrowRight className="h-6 w-6" />
                </button>
              </div>

              {/* Scroll Down Arrow */}
              <div className="pt-16">
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  className="flex justify-center"
                >
                  <button
                    onClick={() => document.getElementById("founding-member")?.scrollIntoView({ behavior: "smooth" })}
                    className="text-gray-500 hover:text-gray-300 transition-colors"
                  >
                    <ChevronDown className="h-8 w-8" />
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="founding-member" className="relative py-24 z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
            >
              {/* Left Column - Founding Member Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl md:text-5xl font-light bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                    Be a Founding Member
                  </h2>
                  <p className="text-xl text-gray-300 leading-relaxed mb-8">
                    You're among the first to discover this creative sanctuary
                  </p>
                  <p className="text-lg text-gray-400 leading-relaxed">
                    As a founding member, you'll help shape the House as it grows and evolves. Your voice matters in
                    creating something truly special.
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-[0_0_30px_rgba(168,85,247,0.2)]">
                  <div className="flex items-start gap-4 mb-6">
                    <Share2 className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-medium text-white mb-3">Help Us Reach 100 Members</h3>
                      <p className="text-gray-300 leading-relaxed mb-4">
                        Share the House with friends who might find their home here too. When we reach 100 founding
                        members, everyone gets exclusive founding member content and benefits.
                      </p>
                      <div className="flex items-center gap-2 text-purple-300">
                        <Gift className="h-5 w-5" />
                        <span className="font-medium">Exclusive founding member benefits</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-medium text-white">Choose Your Plan</h3>
                  <p className="text-purple-400 font-medium">Launching Soon</p>
                </div>

                {/* Monthly Plan */}
                <div
                  className={`p-6 rounded-2xl border-2 cursor-pointer transition-all backdrop-blur-xl ${
                    selectedPlan === "monthly"
                      ? "border-purple-500 bg-white/10 shadow-[0_0_30px_rgba(168,85,247,0.4)]"
                      : "border-white/10 hover:border-white/20 bg-white/5"
                  }`}
                  onClick={() => setSelectedPlan("monthly")}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xl font-medium text-white mb-1">Monthly</h4>
                      <p className="text-gray-400">Perfect for trying it out</p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-light text-white">$30</div>
                      <div className="text-gray-400 text-sm">per month</div>
                    </div>
                  </div>
                </div>

                {/* Annual Plan */}
                <div
                  className={`p-6 rounded-2xl border-2 cursor-pointer transition-all relative backdrop-blur-xl ${
                    selectedPlan === "annual"
                      ? "border-purple-500 bg-white/10 shadow-[0_0_30px_rgba(168,85,247,0.4)]"
                      : "border-white/10 hover:border-white/20 bg-white/5"
                  }`}
                  onClick={() => setSelectedPlan("annual")}
                >
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-white text-sm px-3 py-1 rounded-full font-medium shadow-[0_0_20px_rgba(34,197,94,0.4)]">
                      Save 20%
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xl font-medium text-white mb-1">Annual</h4>
                      <p className="text-gray-400">Best value for committed creators</p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-light text-white">$288</div>
                      <div className="text-gray-400 text-sm">per year</div>
                      <div className="text-green-400 text-sm font-medium">Save $72</div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setShowWaitlistModal(true)}
                  className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 text-white px-8 py-4 rounded-2xl font-medium transition-all text-xl inline-flex items-center justify-center gap-3 shadow-[0_0_40px_rgba(168,85,247,0.5)]"
                >
                  <Mail className="h-5 w-5" />
                  Join the Waitlist
                </button>

                <p className="text-center text-gray-500 text-sm">Be the first to know when we launch</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="relative py-24 z-10">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-6xl mx-auto text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6">
                How It Works
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Discover your daily rhythm for creative living and vibrational alignment
              </p>

              <button
                onClick={startTypewriter}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-full font-medium hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] transition-all text-lg mb-8"
              >
                {isTypewriterPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                {isTypewriterPlaying ? "Playing..." : "Start the Story"}
              </button>
            </div>

            <div className="bg-gray-900/80 backdrop-blur-xl rounded-3xl p-12 text-left font-mono text-green-400 min-h-[500px] relative overflow-hidden shadow-[0_0_60px_rgba(34,197,94,0.3)] border border-green-500/20">
              {/* Terminal Header */}
              <div className="absolute top-6 left-6 flex gap-3">
                <div className="w-4 h-4 bg-red-500 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
                <div className="w-4 h-4 bg-yellow-500 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.5)]"></div>
                <div className="w-4 h-4 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
              </div>

              <div className="absolute top-6 right-6 text-gray-500 text-sm font-sans">creator-being-house.story</div>

              {/* Terminal Content */}
              <div className="mt-16 text-lg leading-relaxed">
                <div className="text-gray-500 mb-4 font-sans text-sm">$ node reveal-story.js</div>
                <div className="text-green-300 mb-6">Initializing Creator Being House story...</div>

                {/* Typewriter Text */}
                <div className="text-white text-xl leading-relaxed font-light">
                  {typewriterText}
                  {isTypewriterPlaying && (
                    <span className="animate-pulse text-green-400 font-bold shadow-[0_0_15px_rgba(34,197,94,0.7)]">
                      |
                    </span>
                  )}
                </div>

                {/* Completion Message */}
                {!isTypewriterPlaying && typewriterText.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-8 pt-6 border-t border-gray-700"
                  >
                    <div className="text-green-300 mb-4">Story complete ✓</div>
                    <div className="text-gray-400 text-sm font-sans">
                      Ready to begin your journey?
                      <button
                        onClick={() => document.getElementById("rooms")?.scrollIntoView({ behavior: "smooth" })}
                        className="text-green-400 hover:text-green-300 ml-2 underline"
                      >
                        Explore the rooms below →
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Progress Bar */}
                {isTypewriterPlaying && (
                  <div className="mt-8 pt-6 border-t border-gray-700">
                    <div className="flex items-center gap-4">
                      <div className="text-gray-400 text-sm font-sans">Progress:</div>
                      <div className="flex-1 bg-gray-800 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-green-400 to-blue-400 h-2 rounded-full transition-all duration-100"
                          style={{ width: `${(typewriterText.length / fullText.length) * 100}%` }}
                        />
                      </div>
                      <div className="text-gray-400 text-sm font-sans">
                        {Math.round((typewriterText.length / fullText.length) * 100)}%
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="rooms" className="relative py-24 overflow-hidden z-10">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent mb-6">
                Six Rooms, One Practice
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Each room supports a different aspect of your creative life. Click to see what you'll experience.
              </p>
            </div>

            <div className="space-y-6">
              {rooms.map((room, index) => (
                <motion.div
                  key={room.name}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:shadow-[0_0_40px_rgba(168,85,247,0.3)] transition-all duration-500"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <button
                    onClick={() => toggleRoom(index)}
                    className="w-full p-8 text-left hover:bg-white/5 transition-all duration-300 flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-inset rounded-2xl"
                  >
                    <div className="flex items-center gap-6 flex-1">
                      <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 ring-2 ring-white/10">
                        <Image
                          src={room.image || "/placeholder.svg"}
                          alt={room.name}
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="text-2xl font-medium text-white">{room.name}</h3>
                          <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                            {room.keyword}
                          </span>
                        </div>
                        <p className="text-gray-300 text-lg mb-2">{room.shortDesc}</p>
                        <p className="text-gray-400">{room.fullDesc}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right text-sm text-gray-400">
                        {expandedRoom === index ? "Hide details" : "See what's included"}
                      </div>
                      {expandedRoom === index ? (
                        <ChevronUp className="h-6 w-6 text-gray-400" />
                      ) : (
                        <ChevronDown className="h-6 w-6 text-gray-400" />
                      )}
                    </div>
                  </button>

                  <AnimatePresence>
                    {expandedRoom === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 pb-8">
                          <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10">
                            <h4 className="text-lg font-medium text-white mb-4">What You'll Experience Each Month:</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {room.monthlyValue.map((value, valueIndex) => (
                                <motion.div
                                  key={valueIndex}
                                  className="flex items-start gap-3"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: valueIndex * 0.1 }}
                                >
                                  <Check className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                                  <p className="text-gray-300 leading-relaxed">{value}</p>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative py-24 z-10">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Quick Questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 text-left hover:bg-white/5 transition-all duration-300 flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-inset"
                  >
                    <h3 className="text-lg font-medium text-white pr-4 leading-relaxed">{faq.question}</h3>
                    {expandedFaq === index ? (
                      <ChevronUp className="h-5 w-5 text-gray-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                    )}
                  </button>

                  <AnimatePresence>
                    {expandedFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6">
                          <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-10 border border-white/10 shadow-[0_0_40px_rgba(168,85,247,0.2)]">
                <h3 className="text-2xl font-medium text-white mb-4">Ready to Begin?</h3>
                <p className="text-gray-300 mb-8">Join as a founding member and help shape the House as it grows.</p>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 text-white px-12 py-4 rounded-xl font-medium transition-all text-lg inline-flex items-center gap-3 shadow-[0_0_40px_rgba(168,85,247,0.5)]"
                >
                  Become a Founding Member
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {showWaitlistModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowWaitlistModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-900/90 backdrop-blur-xl rounded-3xl p-8 max-w-md w-full shadow-[0_0_60px_rgba(168,85,247,0.4)] border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-medium text-white">Join the Waitlist</h3>
                  <button
                    onClick={() => setShowWaitlistModal(false)}
                    className="text-gray-400 hover:text-gray-200 transition-colors"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  Click the button below to send an email to join the waitlist. We'll get back to you soon!
                </p>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Email (Optional)
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-500"
                    />
                    <p className="text-xs text-gray-500 mt-1">We'll include this in the email for you</p>
                  </div>

                  <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-4">
                    <p className="text-sm text-gray-300">
                      <span className="font-medium text-white">Selected Plan:</span>{" "}
                      {selectedPlan === "monthly" ? "Monthly ($30/month)" : "Annual ($288/year)"}
                    </p>
                  </div>

                  <a
                    href={getMailtoUrl()}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-xl font-medium transition-all inline-flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(168,85,247,0.4)]"
                  >
                    <Mail className="h-5 w-5" />
                    Send Email to Join
                  </a>
                </div>

                <p className="text-xs text-gray-500 text-center mt-4">
                  This will open your email client with a pre-filled message
                </p>
              </>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
