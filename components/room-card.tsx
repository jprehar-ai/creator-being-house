"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

interface RoomCardProps {
  room: {
    id: string
    name: string
    description: string
    image: string
    number: number
  }
}

export function RoomCard({ room }: RoomCardProps) {
  return (
    <Link href={`/room/${room.id}`}>
      <motion.div
        className="room-card glass-effect rounded-xl overflow-hidden h-full relative"
        whileHover={{
          y: -8,
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
          transition: { duration: 0.3 },
        }}
      >
        <motion.div
          className="absolute inset-0 bg-white/5"
          initial={{ opacity: 0 }}
          whileHover={{
            opacity: 1,
            background: "radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)",
          }}
          transition={{ duration: 0.5 }}
        />

        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={room.image || "/placeholder.svg"}
            alt={room.name}
            fill
            className="object-cover transition-transform duration-700"
            style={{ transform: "scale(1.01)" }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
            whileHover={{ opacity: 0.4 }}
            transition={{ duration: 0.3 }}
          />
          <div className="absolute top-3 right-3 bg-white/10 backdrop-blur-sm text-white/90 px-2 py-1 rounded-full text-xs">
            Room {room.number}
          </div>
        </div>

        <div className="p-5 relative z-10">
          <h3 className="text-xl font-medium text-white mb-2">{room.name}</h3>
          <p className="text-white/70">{room.description}</p>
        </div>
      </motion.div>
    </Link>
  )
}
