"use client"

import { useState } from "react"

interface Message {
  type: "user" | "kibi"
  content: string
}

export function useKibiChat(roomContext = "general") {
  const [messages, setMessages] = useState<Message[]>([
    {
      type: "kibi",
      content: "Hi! I'm Kibi, your guide. How can I help you today?",
    },
  ])
  const [isLoading, setIsLoading] = useState(false)

  const sendMessage = async (userMessage: string) => {
    if (!userMessage.trim()) return

    // Add user message immediately
    const newMessages = [...messages, { type: "user" as const, content: userMessage }]
    setMessages(newMessages)
    setIsLoading(true)

    try {
      // Prepare messages for API (convert to OpenAI format)
      const apiMessages = newMessages.map((msg) => ({
        role: msg.type === "user" ? ("user" as const) : ("assistant" as const),
        content: msg.content,
      }))

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: apiMessages,
          roomContext,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to get response")
      }

      const data = await response.json()

      // Add Kibi's response
      setMessages([...newMessages, { type: "kibi", content: data.response }])
    } catch (error) {
      console.error("Error sending message:", error)
      // Fallback response
      setMessages([
        ...newMessages,
        {
          type: "kibi",
          content: "I'm having trouble connecting right now. Please try again in a moment.",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return {
    messages,
    sendMessage,
    isLoading,
  }
}
