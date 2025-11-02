"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { ResonanceCompass } from "@/components/resonance-compass"
import { MembershipPrompt } from "@/components/membership-prompt"
import { MarketplaceSection } from "@/components/marketplace-section"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function RoomPage() {
  const params = useParams()
  const roomId = params.roomId as string
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const rooms = [
    {
      id: "welcome-room",
      name: "Welcome Room",
      description: "First steps + About",
      image: "/welcome-room.png",
      number: 1,
      nextRoom: "creator-being-room",
      content: {
        title: "The Art of Living in Creation",
        sections: [
          {
            heading: "Welcome to Creator Being",
            text: "This is the beginning of your journey into living in creation, moment by moment. Here you will find the tools, wisdom, and community to support your path.",
          },
          {
            heading: "About Creator Being",
            text: "Creator Being is a living portal for humans choosing to live in creation. Our approach combines ancient wisdom with modern practices to help you connect with your creative essence.",
          },
        ],
      },
    },
    {
      id: "creator-being-room",
      name: "Creator Being Room",
      description: "Creative essence & story",
      image: "/creator-being-room.png",
      number: 2,
      nextRoom: "mirror-room",
      content: {
        title: "Your Creative Essence",
        sections: [
          {
            heading: "The Creator Within",
            text: "Discover the innate creative force that resides within you. This room is dedicated to awakening and nurturing your creative essence.",
          },
          {
            heading: "Our Story",
            text: "The Creator Being journey began as a vision to reconnect humans with their natural state of creation and wonder.",
          },
        ],
      },
    },
    {
      id: "mirror-room",
      name: "Mirror Room",
      description: "Resonance Compass & self-reflection tools",
      image: "/mirror-room.png",
      number: 3,
      nextRoom: "masterclass-room",
      content: {
        title: "Reflect & Resonate",
        sections: [
          {
            heading: "The Resonance Compass",
            text: "Use this powerful tool to navigate your inner landscape and find alignment with your true self.",
          },
          {
            heading: "Self-Reflection Practices",
            text: "Explore practices that help you see yourself clearly and compassionately.",
          },
        ],
      },
      hasResonanceCompass: true,
    },
    {
      id: "masterclass-room",
      name: "Masterclass Room",
      description: "Teachings, Codex, wisdom",
      image: "/masterclass-room.png",
      number: 4,
      nextRoom: "dream-room",
      content: {
        title: "Deep Wisdom & Teachings",
        sections: [
          {
            heading: "The Creator Codex",
            text: "Ancient and modern teachings on the art of living in creation, curated for your journey.",
          },
          {
            heading: "Monthly Masterclasses",
            text: "Dive deep into specific aspects of creation with our expert guides and teachers.",
          },
        ],
      },
      memberOnly: true,
    },
    {
      id: "dream-room",
      name: "Dream Room",
      description: "Imagination, future-building",
      image: "/dream-room.png",
      number: 5,
      nextRoom: "skins-of-light",
      content: {
        title: "Imagination & Future-Building",
        sections: [
          {
            heading: "Dream Weaving",
            text: "Learn to consciously weave your dreams into reality through imagination and intention.",
          },
          {
            heading: "Future Self Integration",
            text: "Connect with your future self and bring that wisdom into your present moment.",
          },
        ],
      },
    },
    {
      id: "skins-of-light",
      name: "Skins of Light",
      description: "Sacred clothing & transformation",
      image: "/skins-of-light-room.png",
      number: 6,
      nextRoom: "welcome-room",
      content: {
        title: "Transformation & Sacred Clothing",
        sections: [
          {
            heading: "Skins of Light Collection",
            text: "Explore our collection of sacred clothing designed to support your transformation and expression.",
          },
          {
            heading: "The Art of Transformation",
            text: "Discover how external changes can reflect and amplify internal shifts in consciousness.",
          },
        ],
      },
      hasMarketplace: true,
    },
  ]

  const room = rooms.find((r) => r.id === roomId)

  if (!room) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-white/80">Room not found</p>
      </div>
    )
  }

  const nextRoom = rooms.find((r) => r.id === room.nextRoom)

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="w-full py-6 px-8 flex justify-between items-center">
        <Link
          href="/house"
          className="inline-flex items-center text-white/80 hover:text-white transition-colors gap-1 group"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to House</span>
        </Link>
        <div className="text-white/60 text-sm">Room {room.number} of 6</div>
      </header>

      {/* Room Header */}
      <div className="relative h-64 md:h-80 w-full">
        <Image src={room.image || "/placeholder.svg"} alt={room.name} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <motion.div
            className="container mx-auto px-8 pb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white text-shadow-md font-serif">
              {room.name}
            </h1>
            <p className="text-white/80 text-lg mt-2">{room.description}</p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12 pb-24">
        {room.memberOnly ? (
          <MembershipPrompt />
        ) : (
          <div className="space-y-16">
            {/* Room Content */}
            <motion.div
              className="space-y-10"
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-light text-white font-serif">{room.content.title}</h2>

              <ScrollArea className="w-full whitespace-nowrap pb-4">
                <div className="flex space-x-8">
                  {room.content.sections.map((section, index) => (
                    <div key={index} className="glass-effect rounded-xl p-8 min-w-[350px] md:min-w-[450px] max-w-md">
                      <h3 className="text-xl font-medium text-white mb-4">{section.heading}</h3>
                      <p className="text-white/80 leading-relaxed text-lg whitespace-normal">{section.text}</p>
                    </div>
                  ))}

                  <div className="glass-effect rounded-xl p-6 border-l-4 border-cb-purple min-w-[350px] md:min-w-[450px] max-w-md">
                    <h3 className="text-lg font-medium text-white/90 mb-3">Monthly Content</h3>
                    <p className="text-white/70 italic whitespace-normal">
                      New content for this room will be available on the 1st of each month. Return to deepen your
                      journey.
                    </p>
                  </div>
                </div>
              </ScrollArea>
            </motion.div>

            {/* Resonance Compass */}
            {room.hasResonanceCompass && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <ResonanceCompass />
              </motion.div>
            )}

            {/* Marketplace */}
            {room.hasMarketplace && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <MarketplaceSection />
              </motion.div>
            )}

            {/* Navigation */}
            <motion.div
              className="flex justify-between items-center pt-8"
              initial={{ opacity: 0 }}
              animate={isLoaded ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                href="/house"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-5 py-2.5 rounded-full transition-all btn-hover-effect"
              >
                <ArrowLeft className="h-4 w-4" />
                House
              </Link>

              {nextRoom && (
                <Link
                  href={`/room/${nextRoom.id}`}
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-5 py-2.5 rounded-full transition-all btn-hover-effect group"
                >
                  <span>Next: {nextRoom.name}</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              )}
            </motion.div>
          </div>
        )}
      </div>
    </div>
  )
}
