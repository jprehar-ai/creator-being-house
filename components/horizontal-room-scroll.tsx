"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, ArrowLeft, ArrowRightCircle, Lock } from "lucide-react"

type Room = {
  id: string
  name: string
  description: string
  image: string
  color: string
  number: number
  isNext?: boolean
  requiresMembership?: boolean
}

export function HorizontalRoomScroll() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const rooms: Room[] = [
    {
      id: "welcome-room",
      name: "Welcome Room",
      description: "First steps",
      image: "/welcome-room.png",
      color: "from-orange-200 to-orange-100",
      number: 1,
      isNext: true,
      requiresMembership: false,
    },
    {
      id: "creator-being-room",
      name: "Creator Being Room",
      description: "Creative essence",
      image: "/creator-being-room.png",
      color: "from-yellow-200 to-yellow-100",
      number: 2,
      requiresMembership: true,
    },
    {
      id: "mirror-room",
      name: "Mirror Room",
      description: "Self-reflection",
      image: "/mirror-room.png",
      color: "from-purple-200 to-purple-100",
      number: 3,
      requiresMembership: true,
    },
    {
      id: "masterclass-room",
      name: "Masterclass Room",
      description: "Deep wisdom",
      image: "/masterclass-room.png",
      color: "from-blue-200 to-blue-100",
      number: 4,
      requiresMembership: true,
    },
    {
      id: "dream-room",
      name: "Dream Room",
      description: "Imagination",
      image: "/dream-room.png",
      color: "from-pink-200 to-pink-100",
      number: 5,
      requiresMembership: true,
    },
    {
      id: "skins-of-light",
      name: "Skins of Light",
      description: "Transformation",
      image: "/skins-of-light-room.png",
      color: "from-amber-200 to-amber-100",
      number: 6,
      requiresMembership: true,
    },
  ]

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const scrollAmount = direction === "left" ? -container.clientWidth : container.clientWidth
      container.scrollBy({ left: scrollAmount, behavior: "smooth" })

      // Update scroll position for button visibility
      setTimeout(() => {
        if (container) {
          setScrollPosition(container.scrollLeft)
        }
      }, 500)
    }
  }

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      setScrollPosition(scrollContainerRef.current.scrollLeft)
    }
  }

  const canScrollLeft = scrollPosition > 0
  const canScrollRight = scrollContainerRef.current
    ? scrollPosition < scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth - 10
    : true

  return (
    <div className="relative">
      {/* Scroll Buttons */}
      <div className="absolute -left-4 top-1/2 -translate-y-1/2 z-10">
        <motion.button
          onClick={() => scroll("left")}
          className={`rounded-full p-2 bg-white/80 backdrop-blur-sm shadow-md ${
            canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none"
          } transition-opacity duration-300`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Scroll left"
        >
          <ArrowLeft className="h-5 w-5 text-gray-700" />
        </motion.button>
      </div>

      <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-10">
        <motion.button
          onClick={() => scroll("right")}
          className={`rounded-full p-2 bg-white/80 backdrop-blur-sm shadow-md ${
            canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none"
          } transition-opacity duration-300`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Scroll right"
        >
          <ArrowRight className="h-5 w-5 text-gray-700" />
        </motion.button>
      </div>

      {/* Scrollable Container */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-4"
        onScroll={handleScroll}
      >
        {rooms.map((room) => (
          <div key={room.id} className="min-w-[300px] w-[300px] flex-shrink-0 mx-3 first:ml-0 last:mr-0 snap-start">
            <motion.div
              className="creator-card overflow-hidden h-full"
              whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="h-48 relative overflow-hidden rounded-t-2xl">
                <Image src={room.image || "/placeholder.svg"} alt={room.name} fill className="object-cover" />
                <div className={`absolute inset-0 bg-gradient-to-b ${room.color} opacity-30`}></div>
                {room.isNext ? (
                  <div className="next-badge">Next</div>
                ) : (
                  <div className="room-badge">Room {room.number}</div>
                )}

                {/* Lock icon for rooms requiring membership */}
                {room.requiresMembership && (
                  <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm p-1.5 rounded-full shadow-md">
                    <Lock className="h-4 w-4 text-amber-600" />
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl text-gray-800 mb-2 playfair-text">{room.name}</h3>
                <p className="text-gray-600 mb-4 font-quicksand">{room.description}</p>

                {room.requiresMembership ? (
                  <div className="flex justify-between items-center">
                    <Link
                      href={`/room/${room.id}`}
                      className="text-amber-600 font-medium flex items-center gap-1 hover:underline font-quicksand"
                    >
                      Preview Room <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                      href="/membership"
                      className="text-xs text-amber-700 bg-amber-100 px-2 py-1 rounded-full flex items-center gap-1"
                    >
                      <Lock className="h-3 w-3" /> Unlock
                    </Link>
                  </div>
                ) : (
                  <Link
                    href={`/room/${room.id}`}
                    className="text-amber-600 font-medium flex items-center gap-1 hover:underline font-quicksand"
                  >
                    Enter Room <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* View All Rooms Button */}
      <div className="mt-8 text-center">
        <Link href="/house">
          <motion.button
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm border border-amber-500/30 text-gray-800 font-quicksand transition-all"
            whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(255, 165, 0, 0.2)" }}
            whileTap={{ scale: 0.98 }}
          >
            View All Rooms
            <ArrowRightCircle className="h-5 w-5" />
          </motion.button>
        </Link>
      </div>
    </div>
  )
}
