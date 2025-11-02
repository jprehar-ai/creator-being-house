"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { MessageCircle, Sparkles, ChevronRight, Lock, Unlock, ArrowRight, Compass, Map, Star, Zap } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function HousePage() {
  console.log("[v0] HousePage component rendering")

  const [isLoaded, setIsLoaded] = useState(false)
  const [activeRoom, setActiveRoom] = useState(0)
  const [showKibiTip, setShowKibiTip] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Parallax effect values
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacityParticles = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 0.8, 0.4, 0])

  useEffect(() => {
    console.log("[v0] HousePage mounted, setting isLoaded to true")
    setIsLoaded(true)
  }, [])

  const rooms = [
    {
      id: "welcome-room",
      name: "Welcome Room",
      description: "Begin your journey of self-discovery and creative awakening",
      longDescription:
        "The Welcome Room introduces you to the core concepts of Creator Being and sets the foundation for your transformative journey.",
      image: "/welcome-room.png",
      number: 1,
      isNext: true,
      unlocked: true,
      color: "from-orange-400/20 to-yellow-400/20",
      icon: <Star className="h-5 w-5" />,
      completionPercentage: 0,
    },
    {
      id: "creator-being-room",
      name: "Creator Being Room",
      description: "Explore your creative essence and unlock your potential",
      longDescription:
        "Discover the fundamental principles of being a creator and how to harness your innate creative power.",
      image: "/creator-being-room.png",
      number: 2,
      unlocked: false,
      color: "from-yellow-400/20 to-amber-500/20",
      icon: <Zap className="h-5 w-5" />,
      completionPercentage: 0,
    },
    {
      id: "mirror-room",
      name: "Mirror Room",
      description: "Reflect on your inner self and discover hidden truths",
      longDescription:
        "The Mirror Room offers powerful self-reflection exercises to help you understand your true nature.",
      image: "/mirror-room.png",
      number: 3,
      unlocked: false,
      color: "from-purple-400/20 to-violet-500/20",
      icon: <Compass className="h-5 w-5" />,
      completionPercentage: 0,
    },
    {
      id: "masterclass-room",
      name: "Masterclass Room",
      description: "Gain deep wisdom from advanced creator being teachings",
      longDescription:
        "Access transformative masterclasses that will elevate your understanding and practice to new heights.",
      image: "/masterclass-room.png",
      number: 4,
      unlocked: false,
      color: "from-blue-400/20 to-indigo-500/20",
      icon: <Map className="h-5 w-5" />,
      completionPercentage: 0,
    },
    {
      id: "dream-room",
      name: "Dream Room",
      description: "Harness the power of imagination and manifestation",
      longDescription:
        "Learn to navigate the dream realm and bring your visions into physical reality through conscious creation.",
      image: "/dream-room.png",
      number: 5,
      unlocked: false,
      color: "from-pink-400/20 to-rose-500/20",
      icon: <Star className="h-5 w-5" />,
      completionPercentage: 0,
    },
    {
      id: "skins-of-light",
      name: "Skins of Light",
      description: "Experience profound transformation and embodiment",
      longDescription:
        "The culmination of your journey, where you learn to embody your highest self and radiate your unique light.",
      image: "/skins-of-light-room.png",
      number: 6,
      unlocked: false,
      color: "from-amber-400/20 to-orange-500/20",
      icon: <Sparkles className="h-5 w-5" />,
      completionPercentage: 0,
    },
  ]

  // Ambient particles for background effect
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    size: Math.random() * 8 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }))

  console.log("[v0] HousePage render - isLoaded:", isLoaded, "activeRoom:", activeRoom)

  return (
    <div className="min-h-screen bg-gradient-creator overflow-hidden" ref={containerRef}>
      {console.log("[v0] Rendering house page content")}
      {/* Ambient Background Particles */}
      <motion.div className="fixed inset-0 pointer-events-none z-0" style={{ opacity: opacityParticles }}>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-white/20 backdrop-blur-sm"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pt-24 pb-20">
        {/* Hero Section - Redesigned without gray box and pattern */}
        <motion.div
          className="relative mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-display text-white mb-6 drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              The Creator Being House
            </motion.h1>

            <motion.div
              className="w-24 h-1 bg-amber-400 mx-auto mb-6"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />

            <motion.p
              className="text-lg md:text-xl text-white/90 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Explore the rooms of transformation and unlock your creative potential. Each room offers unique wisdom and
              practices to elevate your consciousness.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link href="/room/welcome-room">
                <motion.button
                  className="px-6 py-3 bg-amber-400 hover:bg-amber-500 text-amber-900 rounded-full font-medium flex items-center gap-2 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Begin Your Journey
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </Link>
              <button className="px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full font-medium flex items-center gap-2 border border-white/20">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Apr%2019%2C%202025%2C%2009_18_27%20AM-f9T0TRPCgl8ayvRUDRKNmE8yLbm27u.png"
                  alt="Kibi"
                  width={20}
                  height={20}
                  className="w-5 h-5 rounded-full"
                />
                Ask Kibi for Guidance
              </button>
            </motion.div>
          </div>

          {/* Decorative elements */}
          <motion.div
            className="absolute -top-20 -right-20 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute -bottom-40 -left-20 w-80 h-80 bg-rose-400/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: 2,
            }}
          />
        </motion.div>

        {/* Your Creator Journey Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-display text-white mb-10 text-center drop-shadow-md">
            Your Creator Journey
          </h2>

          <div className="relative py-8">
            {/* Path Line */}
            <div className="absolute left-0 right-0 top-1/2 h-1 bg-white/20 -translate-y-1/2 rounded-full"></div>

            {/* Active Path Line (grows as user progresses) */}
            <div
              className="absolute left-0 top-1/2 h-1 bg-amber-400 -translate-y-1/2 rounded-full"
              style={{ width: `${(1 / rooms.length) * 100}%` }}
            ></div>

            {/* Room Markers */}
            <div className="flex justify-between relative z-10">
              {rooms.map((room, index) => (
                <motion.div
                  key={room.id}
                  className={`flex flex-col items-center cursor-pointer transition-all duration-300 ${activeRoom === index ? "scale-110" : ""}`}
                  onClick={() => setActiveRoom(index)}
                  whileHover={{ scale: 1.1 }}
                >
                  <motion.div
                    className={`w-14 h-14 rounded-full flex items-center justify-center mb-3 ${
                      room.unlocked ? "bg-amber-400 text-amber-900" : "bg-white/20 backdrop-blur-sm text-white/70"
                    } ${activeRoom === index ? "ring-4 ring-white/30" : ""}`}
                    whileHover={{ y: -5 }}
                  >
                    {room.unlocked ? (
                      <span className="font-bold text-lg">{room.number}</span>
                    ) : (
                      <Lock className="h-5 w-5" />
                    )}
                  </motion.div>
                  <span
                    className={`text-sm font-medium ${
                      activeRoom === index ? "text-white" : "text-white/70"
                    } text-center hidden md:block`}
                  >
                    {room.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Selected Room Details */}
          <motion.div
            className="mt-10 bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 shadow-xl"
            layoutId="selectedRoom"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="md:flex">
              <div className="relative h-60 md:h-auto md:w-2/5">
                <Image
                  src={rooms[activeRoom].image || "/placeholder.svg"}
                  alt={rooms[activeRoom].name}
                  fill
                  className="object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${rooms[activeRoom].color} mix-blend-overlay`}></div>

                {/* Room Number Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-900 rounded-full h-8 w-8 flex items-center justify-center font-bold shadow-md">
                  {rooms[activeRoom].number}
                </div>

                {/* Lock/Unlock Status */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full h-8 w-8 flex items-center justify-center shadow-md">
                  {rooms[activeRoom].unlocked ? (
                    <Unlock className="h-4 w-4 text-green-600" />
                  ) : (
                    <Lock className="h-4 w-4 text-amber-600" />
                  )}
                </div>
              </div>

              <div className="p-6 md:w-3/5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 flex items-center justify-center">
                    {rooms[activeRoom].icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-display text-white">{rooms[activeRoom].name}</h3>
                </div>

                <p className="text-white/80 mb-5">{rooms[activeRoom].longDescription}</p>

                {/* Progress Bar */}
                <div className="w-full bg-white/10 rounded-full h-2 mb-4">
                  <div
                    className="bg-amber-400 h-2 rounded-full"
                    style={{ width: `${rooms[activeRoom].completionPercentage}%` }}
                  ></div>
                </div>

                <div className="flex justify-between items-center text-sm text-white/60 mb-6">
                  <span>{rooms[activeRoom].completionPercentage}% Complete</span>
                  {rooms[activeRoom].unlocked ? (
                    <span className="text-green-400 flex items-center gap-1">
                      <Unlock className="h-3 w-3" /> Unlocked
                    </span>
                  ) : (
                    <span className="text-amber-400 flex items-center gap-1">
                      <Lock className="h-3 w-3" /> Locked
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link href={`/room/${rooms[activeRoom].id}`}>
                    <motion.button
                      className={`px-5 py-2.5 rounded-full font-medium flex items-center gap-2 ${
                        rooms[activeRoom].unlocked
                          ? "bg-amber-400 hover:bg-amber-500 text-amber-900"
                          : "bg-white/10 hover:bg-white/20 text-white"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {rooms[activeRoom].unlocked ? "Enter Room" : "Preview Room"}
                      <ChevronRight className="h-4 w-4" />
                    </motion.button>
                  </Link>

                  {!rooms[activeRoom].unlocked && (
                    <Link href="/membership">
                      <motion.button
                        className="px-5 py-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full font-medium flex items-center gap-2 border border-amber-500/30"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Sparkles className="h-4 w-4 text-amber-400" />
                        Unlock with Membership
                      </motion.button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Room Grid - Enhanced 3D Cards */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-display text-white mb-10 text-center drop-shadow-md">
            Explore All Rooms
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rooms.map((room, index) => (
              <Link key={room.id} href={`/room/${room.id}`}>
                <motion.div
                  className="group relative bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 h-[280px] transform perspective-1000"
                  whileHover={{
                    rotateX: 5,
                    rotateY: 5,
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Room Image with Overlay */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={room.image || "/placeholder.svg"}
                      alt={room.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent`}
                    ></div>
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${room.color} opacity-40 mix-blend-overlay`}
                    ></div>
                  </div>

                  {/* Content */}
                  <div className="absolute inset-0 z-10 p-6 flex flex-col justify-end">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          {room.icon}
                        </div>
                        <h3 className="text-xl font-display text-white group-hover:text-amber-200 transition-colors">
                          {room.name}
                        </h3>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm rounded-full h-6 w-6 flex items-center justify-center">
                        <span className="text-xs font-medium text-white">{room.number}</span>
                      </div>
                    </div>

                    <p className="text-white/80 text-sm mb-4">{room.description}</p>

                    {/* Status Indicator */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        {room.isNext && (
                          <span className="bg-amber-400 text-amber-900 text-xs px-2 py-0.5 rounded-full font-medium">
                            Next
                          </span>
                        )}
                        {!room.unlocked && (
                          <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-0.5 rounded-full font-medium flex items-center gap-1">
                            <Lock className="h-3 w-3" /> Locked
                          </span>
                        )}
                      </div>

                      <motion.div
                        className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-amber-400 transition-colors"
                        whileHover={{ scale: 1.2, rotate: 90 }}
                      >
                        <ArrowRight className="h-4 w-4 text-white group-hover:text-amber-900" />
                      </motion.div>
                    </div>

                    {/* Hover Reveal Glow */}
                    <motion.div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-amber-400/30 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></motion.div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Kibi's Guidance - Enhanced */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 shadow-xl">
            <div className="md:flex">
              <div className="relative md:w-1/3 h-48 md:h-auto">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Apr%2019%2C%202025%2C%2009_18_27%20AM-f9T0TRPCgl8ayvRUDRKNmE8yLbm27u.png"
                  alt="Kibi"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-purple-500/20 mix-blend-overlay"></div>
              </div>

              <div className="p-6 md:w-2/3">
                <h3 className="text-2xl font-display text-white mb-4">Kibi's Guidance</h3>

                <ScrollArea className="h-[200px] pr-4">
                  <div className="space-y-4">
                    <p className="text-white/90">
                      Welcome to the Creator Being House! I'm Kibi, your guide on this transformative journey. Each room
                      in this house represents a different aspect of your creative consciousness.
                    </p>

                    <p className="text-white/90">
                      Begin in the Welcome Room to understand the foundations of Creator Being philosophy. As you
                      progress, you'll unlock deeper rooms that reveal more advanced practices and wisdom.
                    </p>
                  </div>
                </ScrollArea>

                <div className="mt-6 flex flex-wrap gap-3">
                  <button className="px-5 py-2.5 bg-amber-400 hover:bg-amber-500 text-amber-900 rounded-full font-medium flex items-center gap-2">
                    <MessageCircle className="h-4 w-4" />
                    Chat with Kibi
                  </button>

                  <button className="px-5 py-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full font-medium flex items-center gap-2 border border-white/20">
                    View All Guidance
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 z-0">
              <Image src="/golden-robe-geometry.png" alt="Sacred Geometry" fill className="object-cover opacity-40" />
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/40 to-orange-500/40 mix-blend-overlay"></div>
            </div>

            <div className="relative z-10 p-8 md:p-12 md:flex items-center justify-between">
              <div className="md:w-2/3 mb-6 md:mb-0">
                <h3 className="text-2xl md:text-3xl font-display text-white mb-3">
                  Unlock Your Full Creative Potential
                </h3>
                <p className="text-white/90 max-w-xl">
                  Join Creator Being+ to access all rooms and exclusive content. Transform your consciousness and
                  manifest your highest creative vision.
                </p>
              </div>

              <div>
                <Link href="/membership">
                  <motion.button
                    className="px-6 py-3 bg-white text-amber-600 hover:bg-white/90 rounded-full font-medium flex items-center gap-2 shadow-lg"
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Sparkles className="h-4 w-4" />
                    Join Creator Being+
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
