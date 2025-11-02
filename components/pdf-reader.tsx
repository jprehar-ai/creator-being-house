"use client"

import { motion } from "framer-motion"
import { X } from "lucide-react"

interface PdfReaderProps {
  onClose: () => void
}

export function PdfReader({ onClose }: PdfReaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-black/80 rounded-xl w-full max-w-5xl h-[80vh] relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black/50 rounded-full p-2 text-white/80 hover:text-white"
        >
          <X className="h-6 w-6" />
        </button>
        <iframe
          src="https://heyzine.com/flip-book/028f7ebf35.html#page/1"
          className="w-full h-full rounded-xl"
          title="Creator Being Book Preview"
        ></iframe>
      </motion.div>
    </motion.div>
  )
}
