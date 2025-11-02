"use client"

import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export function BackToHomeButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <Link
      href="/"
      onClick={scrollToTop}
      className="inline-flex items-center text-white/80 hover:text-white transition-colors"
    >
      <ChevronLeft className="h-4 w-4 mr-1" />
      Back to Home
    </Link>
  )
}
