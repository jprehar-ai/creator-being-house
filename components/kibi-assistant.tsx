"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { X, Send, ShoppingBag, CreditCard } from "lucide-react"

interface KibiAssistantProps {
  onClose: () => void
}

export function KibiAssistant({ onClose }: KibiAssistantProps) {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello! I'm Kibi, your guide to The Giving Room. How can I help you find the perfect item today?",
    },
  ])
  const [input, setInput] = useState("")

  const handleSendMessage = () => {
    if (!input.trim()) return

    // Add user message
    setMessages((prev) => [...prev, { role: "user", content: input }])

    // Simulate Kibi's response
    setTimeout(() => {
      let response = ""

      if (input.toLowerCase().includes("book")) {
        response =
          "The Creator Being book is a beautiful guide to self-remembrance and multidimensional living. It's available as a physical copy shipped from Mexico City, or as a digital edition you can read online. Would you like to purchase it?"
      } else if (input.toLowerCase().includes("print") || input.toLowerCase().includes("art")) {
        response =
          "Our art prints are portals into different dimensions of consciousness, designed to transform the energy of your space. Each one is printed with care and intention. Would you like to purchase one?"
      } else if (input.toLowerCase().includes("price") || input.toLowerCase().includes("cost")) {
        response =
          "The physical book is $20, the digital PDF is $6, and our art prints are $44 each. You can also contribute any amount you feel called to share."
      } else if (input.toLowerCase().includes("shipping") || input.toLowerCase().includes("delivery")) {
        response =
          "All physical items are shipped from Mexico City with care. Shipping times vary by location, but we typically ship within 3-5 business days."
      } else if (input.toLowerCase().includes("alternative") || input.toLowerCase().includes("exchange")) {
        response =
          "We offer several alternative exchange options: sharing with friends, offering your art or skills, submitting a testimonial, or applying for a gift copy. Which option interests you?"
      } else if (input.toLowerCase().includes("purchase") || input.toLowerCase().includes("buy")) {
        response =
          "Great! You can purchase directly through our secure Stripe checkout. Would you like to buy the physical book ($20), digital PDF ($6), or an art print ($44)?"
      } else {
        response =
          "I'd be happy to help you find something that resonates with you. We have the Creator Being book available in physical and digital formats, as well as beautiful art prints. What are you drawn to today?"
      }

      setMessages((prev) => [...prev, { role: "assistant", content: response }])
    }, 1000)

    // Clear input
    setInput("")
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-md z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 20 }}
        className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-md rounded-2xl max-w-md w-full shadow-2xl border border-white/10 overflow-hidden h-[600px] max-h-[80vh] flex flex-col"
      >
        {/* Header */}
        <div className="p-4 border-b border-white/10 flex justify-between items-center bg-black/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-amber-400/50">
              <Image
                src="/kibi-character.png"
                alt="Kibi"
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-white font-medium">Kibi</h3>
              <p className="text-white/60 text-xs">Giving Room Guide</p>
            </div>
          </div>
          <button onClick={onClose} className="text-white/70 hover:text-white transition-colors" aria-label="Close">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[80%] rounded-2xl p-3 ${
                  message.role === "user" ? "bg-amber-500/20 text-white" : "bg-white/10 text-white"
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Suggestions */}
        <div className="p-3 border-t border-white/10 bg-black/20">
          <div className="flex gap-2 mb-3 overflow-x-auto pb-2">
            <button
              onClick={() => setInput("Tell me about the book")}
              className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-full text-sm whitespace-nowrap flex items-center gap-1.5"
            >
              <ShoppingBag className="h-3.5 w-3.5" />
              About the book
            </button>
            <button
              onClick={() => setInput("I want to buy the printed book")}
              className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-full text-sm whitespace-nowrap flex items-center gap-1.5"
            >
              <CreditCard className="h-3.5 w-3.5" />
              Buy printed book
            </button>
            <button
              onClick={() => setInput("I want the digital PDF")}
              className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-full text-sm whitespace-nowrap flex items-center gap-1.5"
            >
              <CreditCard className="h-3.5 w-3.5" />
              Buy digital PDF
            </button>
            <button
              onClick={() => setInput("Tell me about alternative exchanges")}
              className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-full text-sm whitespace-nowrap"
            >
              Alternative exchanges
            </button>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            <button
              onClick={() => setInput("How much does shipping cost?")}
              className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-full text-sm whitespace-nowrap"
            >
              Shipping info
            </button>
            <button
              onClick={() => setInput("What are the prices?")}
              className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-full text-sm whitespace-nowrap"
            >
              Pricing
            </button>
          </div>
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-white/10 bg-black/30">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
              placeholder="Ask about products..."
              className="flex-1 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            <button
              onClick={handleSendMessage}
              disabled={!input.trim()}
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                input.trim() ? "bg-amber-400 text-amber-900" : "bg-white/10 text-white/50"
              }`}
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
