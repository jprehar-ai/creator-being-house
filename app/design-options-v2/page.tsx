"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function DesignOptionsV2Page() {
  const [activeOption, setActiveOption] = useState<number | null>(null)

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <div className="fixed top-20 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/community">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Community
              </Button>
            </Link>
            <div className="flex gap-2">
              <Button variant={activeOption === 1 ? "default" : "outline"} size="sm" onClick={() => setActiveOption(1)}>
                Option 5
              </Button>
              <Button variant={activeOption === 2 ? "default" : "outline"} size="sm" onClick={() => setActiveOption(2)}>
                Option 6
              </Button>
              <Button variant={activeOption === 3 ? "default" : "outline"} size="sm" onClick={() => setActiveOption(3)}>
                Option 7
              </Button>
              <Button variant={activeOption === 4 ? "default" : "outline"} size="sm" onClick={() => setActiveOption(4)}>
                Option 8
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Option 5: Dreamy Gradient Flow */}
      <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
        {/* Floating gradient blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-pink-300/40 via-purple-300/40 to-blue-300/40 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-blue-300/30 via-indigo-300/30 to-purple-300/30 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-purple-200/20 via-pink-200/20 to-orange-200/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-32">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/40 shadow-lg mb-6">
                <span className="text-sm font-medium bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Option 5
                </span>
              </div>
              <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Dreamy Gradient Flow
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Soft gradient meshes, blurred shapes, and flowing layouts create a dreamy, sophisticated aesthetic
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="group p-8 rounded-3xl bg-white/60 backdrop-blur-md border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-400 to-purple-400 mb-6 shadow-lg" />
                <h3 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Soft Gradients
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Multi-color gradient meshes blend seamlessly, creating depth and visual interest
                </p>
              </div>

              <div className="group p-8 rounded-3xl bg-white/60 backdrop-blur-md border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-400 to-blue-400 mb-6 shadow-lg" />
                <h3 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Frosted Glass
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Backdrop blur creates elegant frosted glass effects over gradient backgrounds
                </p>
              </div>

              <div className="group p-8 rounded-3xl bg-white/60 backdrop-blur-md border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-400 mb-6 shadow-lg" />
                <h3 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Rounded Everything
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Generous border radius on all elements creates a soft, approachable feel
                </p>
              </div>

              <div className="group p-8 rounded-3xl bg-white/60 backdrop-blur-md border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-400 to-pink-400 mb-6 shadow-lg" />
                <h3 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
                  Gentle Motion
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Smooth animations and transitions create a calming, premium experience
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <button className="px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                Experience the Flow
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Option 6: Organic Morphism */}
      <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-amber-50 via-rose-50 to-orange-50">
        {/* Organic blob shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute top-10 left-0 w-[600px] h-[600px] opacity-30" viewBox="0 0 200 200">
            <path
              fill="url(#blob1)"
              d="M47.1,-57.8C59.9,-49.1,68.4,-33.3,71.8,-16.2C75.2,0.9,73.5,19.3,65.3,34.4C57.1,49.5,42.4,61.3,26.3,66.8C10.2,72.3,-7.3,71.5,-23.5,66.2C-39.7,60.9,-54.6,51.1,-63.4,37.2C-72.2,23.3,-74.9,5.3,-72.1,-11.8C-69.3,-28.9,-61,-45.1,-48.6,-53.9C-36.2,-62.7,-18.1,-64.1,-0.5,-63.4C17.1,-62.7,34.3,-66.5,47.1,-57.8Z"
              transform="translate(100 100)"
            />
            <defs>
              <linearGradient id="blob1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fbbf24" />
                <stop offset="100%" stopColor="#fb923c" />
              </linearGradient>
            </defs>
          </svg>

          <svg className="absolute bottom-0 right-0 w-[500px] h-[500px] opacity-30" viewBox="0 0 200 200">
            <path
              fill="url(#blob2)"
              d="M41.3,-54.5C51.7,-45.5,57.1,-30.9,60.8,-16.1C64.5,-1.3,66.5,13.7,62.3,27.3C58.1,40.9,47.7,53.1,34.9,60.1C22.1,67.1,6.9,68.9,-8.7,68.3C-24.3,67.7,-40.3,64.7,-51.5,56.3C-62.7,47.9,-69.1,34.1,-70.8,19.5C-72.5,4.9,-69.5,-10.5,-63.3,-24.1C-57.1,-37.7,-47.7,-49.5,-36.3,-58.2C-24.9,-66.9,-11.5,-72.5,2.1,-75.2C15.7,-77.9,30.9,-63.5,41.3,-54.5Z"
              transform="translate(100 100)"
            />
            <defs>
              <linearGradient id="blob2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fb923c" />
                <stop offset="100%" stopColor="#f87171" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-32">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-block px-8 py-3 rounded-full bg-white/70 backdrop-blur-sm shadow-lg mb-6">
                <span className="text-sm font-medium bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600 bg-clip-text text-transparent">
                  Option 6
                </span>
              </div>
              <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600 bg-clip-text text-transparent">
                Organic Morphism
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Blob shapes, soft shadows, and natural curves create a warm, human-centered design
              </p>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="px-8 py-4 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 border border-amber-200 shadow-md">
                <span className="font-medium text-amber-900">Organic Shapes</span>
              </div>
              <div className="px-8 py-4 rounded-full bg-gradient-to-r from-orange-100 to-rose-100 border border-orange-200 shadow-md">
                <span className="font-medium text-orange-900">Soft Shadows</span>
              </div>
              <div className="px-8 py-4 rounded-full bg-gradient-to-r from-rose-100 to-pink-100 border border-rose-200 shadow-md">
                <span className="font-medium text-rose-900">Warm Colors</span>
              </div>
              <div className="px-8 py-4 rounded-full bg-gradient-to-r from-pink-100 to-amber-100 border border-pink-200 shadow-md">
                <span className="font-medium text-pink-900">Natural Flow</span>
              </div>
            </div>

            {/* Content Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-200/50 to-rose-200/50 rounded-[3rem] blur-2xl" />
              <div className="relative p-12 rounded-[3rem] bg-white/80 backdrop-blur-sm shadow-2xl">
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">
                  Soft & Approachable
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Every element feels touchable and human. Organic shapes and muted gradients create a sophisticated yet
                  warm aesthetic that invites exploration and connection.
                </p>
                <button className="px-10 py-5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  Explore the Organic
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Option 7: Ambient Glow */}
      <section className="min-h-screen relative overflow-hidden bg-gray-950">
        {/* Glowing orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-[150px]" />
          <div className="absolute bottom-20 right-20 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[150px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-pink-500/20 rounded-full blur-[150px]" />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-32">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl mb-6">
                <span className="text-sm font-medium bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  Option 7
                </span>
              </div>
              <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Ambient Glow
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Vibrant glows on dark backgrounds create a sophisticated, modern aesthetic
              </p>
            </div>

            {/* Glowing Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 mb-4 shadow-lg shadow-purple-500/50" />
                  <h3 className="text-xl font-semibold text-white mb-2">Vibrant Glows</h3>
                  <p className="text-gray-400 text-sm">Colorful halos create depth and atmosphere</p>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 mb-4 shadow-lg shadow-blue-500/50" />
                  <h3 className="text-xl font-semibold text-white mb-2">Dark Elegance</h3>
                  <p className="text-gray-400 text-sm">Sophisticated contrast with light accents</p>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-orange-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-orange-500 mb-4 shadow-lg shadow-pink-500/50" />
                  <h3 className="text-xl font-semibold text-white mb-2">Ambient Light</h3>
                  <p className="text-gray-400 text-sm">Soft light sources create atmosphere</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full blur-xl" />
                <button className="relative px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white font-semibold shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105">
                  Enter the Glow
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Option 8: Soft Maximalism */}
      <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-rose-100 via-violet-100 to-teal-100">
        {/* Layered gradient shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-rose-400/30 via-fuchsia-400/30 to-violet-400/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-gradient-to-br from-teal-400/30 via-cyan-400/30 to-blue-400/30 rounded-full blur-3xl" />
          <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-gradient-to-br from-violet-400/20 via-purple-400/20 to-pink-400/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-32">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="mb-16">
              <div className="inline-block px-8 py-3 rounded-3xl bg-white/70 backdrop-blur-md border border-white/50 shadow-xl mb-8">
                <span className="text-sm font-medium bg-gradient-to-r from-rose-600 via-violet-600 to-teal-600 bg-clip-text text-transparent">
                  Option 8
                </span>
              </div>
              <h1 className="text-8xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-rose-600 via-fuchsia-600 to-violet-600 bg-clip-text text-transparent">
                  Soft
                </span>
                <br />
                <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                  Maximalism
                </span>
              </h1>
              <p className="text-2xl text-gray-700 max-w-2xl leading-relaxed">
                Bold gradients with soft edges. Artistic composition meets functional design.
              </p>
            </div>

            {/* Artistic Grid */}
            <div className="grid md:grid-cols-12 gap-6 mb-12">
              <div className="md:col-span-7 p-10 rounded-[2.5rem] bg-gradient-to-br from-rose-400 via-fuchsia-400 to-violet-400 text-white shadow-2xl">
                <h2 className="text-5xl font-bold mb-4">Bold Colors</h2>
                <p className="text-xl text-white/90 leading-relaxed">
                  Rich, saturated gradients create visual impact while soft edges maintain sophistication
                </p>
              </div>

              <div className="md:col-span-5 p-10 rounded-[2.5rem] bg-gradient-to-br from-teal-400 via-cyan-400 to-blue-400 text-white shadow-2xl">
                <div className="text-7xl font-bold mb-4">∞</div>
                <h3 className="text-2xl font-bold">Endless Creativity</h3>
              </div>

              <div className="md:col-span-5 p-10 rounded-[2.5rem] bg-gradient-to-br from-violet-400 via-purple-400 to-pink-400 text-white shadow-2xl">
                <div className="text-7xl font-bold mb-4">✦</div>
                <h3 className="text-2xl font-bold">Artistic Flair</h3>
              </div>

              <div className="md:col-span-7 p-10 rounded-[2.5rem] bg-gradient-to-br from-orange-400 via-rose-400 to-pink-400 text-white shadow-2xl">
                <h2 className="text-5xl font-bold mb-4">Soft Edges</h2>
                <p className="text-xl text-white/90 leading-relaxed">
                  Generous border radius and smooth transitions keep the bold aesthetic approachable
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <button className="px-12 py-6 rounded-full bg-gradient-to-r from-rose-500 via-violet-500 to-teal-500 text-white text-lg font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
                Embrace the Bold
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
