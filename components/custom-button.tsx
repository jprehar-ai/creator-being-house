"use client"

import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import type { ReactNode } from "react"

interface CustomButtonProps {
  href?: string
  onClick?: () => void
  children: ReactNode
  variant: "pink-yellow" | "purple-pink" | "join"
  icon?: "arrow" | "sparkle" | "none"
  className?: string
}

export function CustomButton({ href, onClick, children, variant, icon = "none", className = "" }: CustomButtonProps) {
  const getGradientClass = () => {
    switch (variant) {
      case "pink-yellow":
        return "bg-gradient-to-r from-[#ffcc00] to-[#ffaa00] text-[#664d00]" // Darker gold
      case "purple-pink":
        return "bg-gradient-to-r from-[#ffcc00] to-[#ff9500] text-[#664d00]" // Darker gold
      case "join":
        return "bg-gradient-to-r from-[#ffcc00] to-[#ffaa00] text-[#664d00]" // Darker gold
      default:
        return "bg-gradient-to-r from-[#ffcc00] to-[#ffaa00] text-[#664d00]" // Darker gold
    }
  }

  const getIcon = () => {
    switch (icon) {
      case "arrow":
        return <ArrowRight className="h-5 w-5" />
      case "sparkle":
        return <Sparkles className="h-5 w-5" />
      default:
        return null
    }
  }

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const buttonContent = (
    <div
      className={`px-6 py-3 rounded-full font-medium flex items-center gap-2 transition-all hover:shadow-lg hover:-translate-y-0.5 ${getGradientClass()} ${className}`}
    >
      {children}
      {getIcon()}
    </div>
  )

  if (href) {
    return (
      <Link href={href} onClick={handleLinkClick}>
        {buttonContent}
      </Link>
    )
  }

  return <button onClick={onClick}>{buttonContent}</button>
}
