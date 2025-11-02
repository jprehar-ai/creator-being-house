"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Compass, Send } from "lucide-react"

export function ResonanceCompass() {
  const [selectedState, setSelectedState] = useState("")
  const [question, setQuestion] = useState("")
  const [response, setResponse] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = () => {
    if (!selectedState && !question) return

    setIsLoading(true)

    // Simulate API call to GPT
    setTimeout(() => {
      if (selectedState) {
        const responses = {
          joy: "Your joy is a powerful creative force. Channel this energy into something meaningful today. Remember that joy is not just an emotion but a state of being that can transform your reality.",
          confusion:
            "Confusion is often the precursor to clarity. Sit with your questions without demanding immediate answers. The path will reveal itself when you stop forcing it.",
          sadness:
            "Your sadness carries wisdom. Listen to what it's telling you about what matters most. Allow yourself to feel fully, then gently move toward what brings you alive.",
          curiosity:
            "Your curiosity is the doorway to expansion. Follow it without attachment to outcomes. Each question opens a new possibility in your creative journey.",
          anxiety:
            "Beneath anxiety often lies excitement. Place a hand on your heart and ask: What is trying to emerge? What new creation is asking for my attention?",
          peace:
            "This peaceful state is your natural resonance. Notice how time expands in this space. Create from here and watch how effortlessly things unfold.",
        }
        setResponse(responses[selectedState as keyof typeof responses] || "")
      } else if (question) {
        setResponse(
          "Your question reveals a deep connection to your creative essence. The answer you seek is already emerging within you. Listen to the subtle guidance that appears in moments of stillness.",
        )
      }

      setIsLoading(false)
    }, 1500)
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        <Compass className="h-6 w-6 text-yellow-400" />
        <h2 className="text-2xl font-light text-white font-serif">Resonance Compass</h2>
      </div>

      <div className="glass-effect rounded-xl p-8 space-y-6">
        <p className="text-white/80 text-lg">
          The Resonance Compass helps you navigate your inner landscape and align with your creative essence. Share your
          current state or ask a question to receive guidance.
        </p>

        <div className="space-y-5">
          <div>
            <label htmlFor="emotional-state" className="block text-white mb-2 text-sm">
              What are you feeling right now?
            </label>
            <select
              id="emotional-state"
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:ring-1 focus:ring-white/30"
            >
              <option value="">Select an emotional state...</option>
              <option value="joy">Joy</option>
              <option value="confusion">Confusion</option>
              <option value="sadness">Sadness</option>
              <option value="curiosity">Curiosity</option>
              <option value="anxiety">Anxiety</option>
              <option value="peace">Peace</option>
            </select>
          </div>

          <div className="flex items-center">
            <div className="flex-grow border-t border-white/10"></div>
            <span className="mx-4 text-white/50 text-sm">or</span>
            <div className="flex-grow border-t border-white/10"></div>
          </div>

          <div>
            <label htmlFor="question" className="block text-white mb-2 text-sm">
              Ask a specific question:
            </label>
            <textarea
              id="question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white h-24 focus:outline-none focus:ring-1 focus:ring-white/30"
              placeholder="What is calling for my attention today?"
            ></textarea>
          </div>

          <motion.button
            onClick={handleSubmit}
            disabled={isLoading || (!selectedState && !question)}
            className="inline-flex items-center gap-2 bg-yellow-500/30 hover:bg-yellow-500/40 text-white px-5 py-3 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isLoading ? "Receiving..." : "Receive Guidance"}
            <Send className="h-4 w-4" />
          </motion.button>
        </div>

        {response && (
          <motion.div
            className="mt-6 p-6 bg-yellow-500/20 rounded-lg border border-yellow-500/30"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-white leading-relaxed">{response}</p>
          </motion.div>
        )}
      </div>
    </div>
  )
}
