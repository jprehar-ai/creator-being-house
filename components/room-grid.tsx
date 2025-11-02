"use client"

import Link from "next/link"
import Image from "next/image"
import { Card } from "@/components/ui/card"

export function RoomGrid() {
  const rooms = [
    {
      id: "welcome-room",
      name: "Welcome Room",
      description: "First steps",
      image: "/welcome-room.png",
      number: 1,
      isNext: true,
    },
    {
      id: "creator-being-room",
      name: "Creator Being Room",
      description: "Creative essence",
      image: "/creator-being-room.png",
      number: 2,
      isNext: false,
    },
    {
      id: "mirror-room",
      name: "Mirror Room",
      description: "Self-reflection",
      image: "/mirror-room.png",
      number: 3,
      isNext: false,
    },
    {
      id: "masterclass-room",
      name: "Masterclass Room",
      description: "Deep wisdom",
      image: "/masterclass-room.png",
      number: 4,
      isNext: false,
    },
    {
      id: "dream-room",
      name: "Dream Room",
      description: "Imagination",
      image: "/dream-room.png",
      number: 5,
      isNext: false,
    },
    {
      id: "skins-of-light",
      name: "Skins of Light",
      description: "Transformation",
      image: "/skins-of-light-room.png",
      number: 6,
      isNext: false,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {rooms.map((room) => (
        <Link key={room.id} href={`/room/${room.id}`}>
          <Card className="room-card bg-white/10 backdrop-blur-sm border-white/20 overflow-hidden h-full">
            <div className="relative h-48 w-full">
              <Image src={room.image || "/placeholder.svg"} alt={room.name} fill className="object-cover" />
              {room.isNext && (
                <div className="absolute top-2 right-2 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-md text-xs font-medium">
                  Next
                </div>
              )}
            </div>
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold text-white">{room.name}</h3>
                <span className="text-white/60 text-sm">Room {room.number}</span>
              </div>
              <p className="text-white/80">{room.description}</p>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  )
}
