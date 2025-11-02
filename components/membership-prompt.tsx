"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Sparkles, Lock } from "lucide-react"

export function MembershipPrompt() {
  return (
    <motion.div
      className="glass-effect rounded-xl p-10 text-center max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-500/20 mb-6">
        <Lock className="h-7 w-7 text-yellow-400" />
      </div>

      <h2 className="text-2xl font-light text-white mb-4 font-serif">Creator Being+ Members Only</h2>

      <p className="text-white/80 mb-8 max-w-xl mx-auto text-lg leading-relaxed">
        This room is available exclusively to Creator Being+ members. Join now to access all rooms and receive monthly
        content that supports your journey in living from presence, resonance, and creation.
      </p>

      <Link href="/membership">
        <motion.button
          className="inline-flex items-center gap-2 bg-yellow-500/30 hover:bg-yellow-500/40 text-white px-6 py-3 rounded-lg transition-all"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Sparkles className="h-5 w-5" />
          Join Creator Being+
        </motion.button>
      </Link>
    </motion.div>
  )
}
