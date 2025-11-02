"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, X } from "lucide-react"
import { useKibiChat } from "@/hooks/use-kibi-chat"
import Image from "next/image"

interface KibiChatProps {
  roomContext?: string
  theme?: {
    primary: string
    secondary: string
    background: string
    backgroundDark: string
    textDark: string
    text: string
  }
  isDarkMode?: boolean
  isOpen?: boolean
  onToggle?: () => void
  accentColor?: string
}

export function KibiChat({
  roomContext = "general",
  theme = {
    primary: "#9370DB",
    secondary: "#B19CD9",
    background: "#F8F5FF",
    backgroundDark: "#1E1A2B",
    textDark: "#E9E4F9",
    text: "#3D3160",
  },
  isDarkMode = false,
  isOpen: externalIsOpen,
  onToggle,
  accentColor = "purple",
}: KibiChatProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(false)
  const [input, setInput] = useState("")
  const { messages, sendMessage, isLoading } = useKibiChat(roomContext)

  const messagesRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Use external state if provided, otherwise use internal state
  const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen
  const setIsOpen = onToggle || setInternalIsOpen

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight
    }
  }, [messages])

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const handleSend = async () => {
    if (!input.trim() || isLoading) return

    const message = input
    setInput("")
    await sendMessage(message)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const handleSuggestedQuestion = async (question: string) => {
    await sendMessage(question)
  }

  // Get theme colors based on accent color
  const getThemeColors = () => {
    switch (accentColor) {
      case "amber":
        return {
          primary: "#F59E0B",
          secondary: "#FCD34D",
          background: "#FFFBEB",
          text: "#92400E",
        }
      case "purple":
      default:
        return {
          primary: "#9370DB",
          secondary: "#B19CD9",
          background: "#F8F5FF",
          text: "#3D3160",
        }
    }
  }

  const colors = getThemeColors()

  // Suggested questions for first-time users
  const suggestedQuestions = [
    "What is my unique creative essence?",
    "How can I align with my highest potential?",
    "What wants to be created through me?",
    "How do I deepen my connection to the field?",
  ]

  const showSuggestions = messages.length <= 1 // Show suggestions if only welcome message or empty

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute bottom-20 right-0 w-80 md:w-96 h-96 rounded-xl overflow-hidden shadow-xl flex flex-col backdrop-blur-md"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.95)",
              border: "1px solid rgba(147, 112, 219, 0.3)",
            }}
          >
            {/* Header */}
            <div
              className="p-4 flex items-center justify-between"
              style={{
                background: `linear-gradient(to right, ${colors.primary}, ${colors.secondary})`,
              }}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Apr%2019%2C%202025%2C%2009_18_27%20AM-0NbxVyqQk2q8KD0ImWmnJSnTvjajfM.png"
                    alt="Kibi"
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                </div>
                <span className="text-white font-medium">Kibi - Your Guide</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-100 transition-colors">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages */}
            <div
              className="flex-grow overflow-y-auto p-4 space-y-4"
              ref={messagesRef}
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.9)",
              }}
            >
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.type === "user" ? "rounded-tr-none" : "rounded-tl-none"
                    }`}
                    style={{
                      backgroundColor:
                        message.type === "user" ? "rgba(147, 112, 219, 0.2)" : "rgba(177, 156, 217, 0.15)",
                      border: `1px solid ${message.type === "user" ? "rgba(147, 112, 219, 0.4)" : "rgba(177, 156, 217, 0.3)"}`,
                      color: "#4C1D95",
                    }}
                  >
                    <p className="text-sm">{message.content}</p>
                  </div>
                </div>
              ))}

              {/* Suggested Questions */}
              {showSuggestions && (
                <div className="space-y-2">
                  <p className="text-xs text-gray-600 font-medium">Suggested questions:</p>
                  {suggestedQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestedQuestion(question)}
                      className="block w-full text-left p-2 rounded-lg text-xs transition-colors"
                      style={{
                        backgroundColor: `${colors.secondary}20`,
                        border: `1px solid ${colors.secondary}30`,
                        color: colors.text,
                      }}
                      disabled={isLoading}
                    >
                      {question}
                    </button>
                  ))}
                </div>
              )}

              {isLoading && (
                <div className="flex justify-start">
                  <div
                    className="max-w-[80%] rounded-lg rounded-tl-none p-3"
                    style={{
                      backgroundColor: `${colors.secondary}30`,
                      border: `1px solid ${colors.secondary}50`,
                    }}
                  >
                    <div className="flex space-x-1">
                      <div
                        className="w-2 h-2 bg-current rounded-full animate-bounce"
                        style={{ animationDelay: "0ms", color: colors.text }}
                      />
                      <div
                        className="w-2 h-2 bg-current rounded-full animate-bounce"
                        style={{ animationDelay: "150ms", color: colors.text }}
                      />
                      <div
                        className="w-2 h-2 bg-current rounded-full animate-bounce"
                        style={{ animationDelay: "300ms", color: colors.text }}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div
              className="p-4 border-t"
              style={{
                borderColor: `${colors.primary}30`,
                backgroundColor: "rgba(255, 255, 255, 0.9)",
              }}
            >
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask Kibi anything..."
                  disabled={isLoading}
                  className="flex-1 px-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-1 disabled:opacity-50 border"
                  style={{
                    backgroundColor: colors.background,
                    borderColor: `${colors.primary}50`,
                    color: colors.text,
                  }}
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="px-4 py-2 rounded-lg disabled:opacity-50 transition-opacity text-white"
                  style={{
                    backgroundColor: colors.primary,
                  }}
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Kibi Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-20 h-20 rounded-full flex items-center justify-center relative"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          background: "rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.9)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
        }}
      >
        {isOpen ? (
          <X className="h-6 w-6 text-gray-700" />
        ) : (
          <>
            {/* Kibi Image */}
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Apr%2019%2C%202025%2C%2009_18_27%20AM-0NbxVyqQk2q8KD0ImWmnJSnTvjajfM.png"
              alt="Kibi"
              width={48}
              height={48}
              className="rounded-full"
            />
            {/* Simple pulsing glow */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                border: "2px solid rgba(147, 112, 219, 0.3)",
              }}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </>
        )}
      </motion.button>
    </div>
  )
}
