"use client"

import type React from "react"
import { MainNavigation } from "@/components/main-navigation"
import Link from "next/link"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      <MainNavigation />
      <main className="pt-16 relative">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-xl font-medium bg-gradient-to-r from-amber-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                  Creator Being
                </span>
              </div>
              <p className="text-gray-600 text-sm">A living philosophy for shaping life from the inside out.</p>
            </div>

            {/* Explore */}
            <div>
              <h3 className="font-medium text-gray-800 mb-4">Explore</h3>
              <div className="space-y-2">
                <Link
                  href="/"
                  onClick={scrollToTop}
                  className="block text-gray-600 hover:text-gray-800 text-sm transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/archetype-explorer"
                  onClick={scrollToTop}
                  className="block text-gray-600 hover:text-gray-800 text-sm transition-colors"
                >
                  Take the Quiz
                </Link>
                <Link
                  href="/shop"
                  onClick={scrollToTop}
                  className="block text-gray-600 hover:text-gray-800 text-sm transition-colors"
                >
                  Shop
                </Link>
                <Link
                  href="/community"
                  onClick={scrollToTop}
                  className="block text-gray-600 hover:text-gray-800 text-sm transition-colors"
                >
                  Community
                </Link>
                <Link
                  href="/about"
                  onClick={scrollToTop}
                  className="block text-gray-600 hover:text-gray-800 text-sm transition-colors"
                >
                  About
                </Link>
              </div>
            </div>

            {/* Connect */}
            <div>
              <h3 className="font-medium text-gray-800 mb-4">Connect</h3>
              <div className="space-y-2">
                <Link
                  href="/membership"
                  onClick={scrollToTop}
                  className="block text-gray-600 hover:text-gray-800 text-sm transition-colors"
                >
                  Join Waitlist
                </Link>
                <a
                  href="https://workisdead.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-600 hover:text-gray-800 text-sm transition-colors"
                >
                  Work Is Dead
                </a>
                <Link
                  href="/contact"
                  onClick={scrollToTop}
                  className="block text-gray-600 hover:text-gray-800 text-sm transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-medium text-gray-800 mb-4">Legal</h3>
              <div className="space-y-2">
                <Link
                  href="/privacy"
                  onClick={scrollToTop}
                  className="block text-gray-600 hover:text-gray-800 text-sm transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  onClick={scrollToTop}
                  className="block text-gray-600 hover:text-gray-800 text-sm transition-colors"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-8 pt-8 text-center">
            <p className="text-gray-500 text-sm">© 2025 Creator Being. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
