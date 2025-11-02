"use client"

import { Card } from "@/components/ui/card"

export function JourneyPath() {
  const rooms = [
    { id: 1, name: "Welcome Room" },
    { id: 2, name: "Creator Being Room" },
    { id: 3, name: "Mirror Room" },
    { id: 4, name: "Masterclass Room" },
    { id: 5, name: "Dream Room" },
    { id: 6, name: "Skins of Light" },
  ]

  return (
    <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6">
      <h3 className="text-xl font-semibold text-white mb-4">Your Journey Path</h3>

      <div className="flex flex-wrap justify-between items-center gap-4">
        {rooms.map((room) => (
          <div key={room.id} className="flex flex-col items-center">
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center border-2 
              ${room.id === 1 ? "bg-white/20 border-white" : "bg-white/5 border-white/20"}`}
            >
              <span className="text-white font-medium">{room.id}</span>
            </div>
            <p className="text-white/80 text-sm mt-2 text-center max-w-[100px]">{room.name}</p>
          </div>
        ))}
      </div>
    </Card>
  )
}
