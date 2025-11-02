"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MessageSquare } from "lucide-react"

export function KibiGuidance() {
  const [showChat, setShowChat] = useState(false)

  return (
    <Card className="bg-white/10 backdrop-blur-sm border-white/20 overflow-hidden">
      <div className="p-6 flex flex-col md:flex-row items-center gap-6">
        <div className="flex-shrink-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Apr%2019%2C%202025%2C%2009_18_27%20AM-f9T0TRPCgl8ayvRUDRKNmE8yLbm27u.png"
            alt="Kibi"
            width={80}
            height={80}
            className="w-20 h-20"
          />
        </div>

        <div className="flex-grow">
          <h3 className="text-xl font-semibold text-purple-100 mb-2">Kibi's Guidance</h3>
          <p className="text-white/80 mb-4">
            Welcome to the Creator Being House! I'm Kibi, your guide. Where would you like to begin your journey?
          </p>

          <div className="bg-yellow-50/10 border border-yellow-100/20 rounded-lg p-4 mb-4">
            <p className="text-yellow-100 flex items-start">
              <span className="mr-2">→</span>I recommend starting with the Welcome Room to begin your journey.
            </p>
            <Link href="/room/welcome-room" className="text-yellow-200 hover:text-yellow-100 mt-2 inline-block">
              Visit Welcome Room →
            </Link>
          </div>

          <Button
            variant="outline"
            className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            onClick={() => setShowChat(true)}
          >
            <MessageSquare className="h-4 w-4 mr-2" />
            Chat with Kibi
          </Button>
        </div>
      </div>
    </Card>
  )
}
