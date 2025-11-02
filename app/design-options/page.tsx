"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Zap, Grid3x3, Layers } from "lucide-react"

export default function DesignOptionsPage() {
  const [activeOption, setActiveOption] = useState<number | null>(null)

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <div className="fixed top-20 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex gap-4 justify-center">
            <Button variant={activeOption === 1 ? "default" : "outline"} onClick={() => setActiveOption(1)}>
              Option 1: Ethereal
            </Button>
            <Button variant={activeOption === 2 ? "default" : "outline"} onClick={() => setActiveOption(2)}>
              Option 2: Artistic
            </Button>
            <Button variant={activeOption === 3 ? "default" : "outline"} onClick={() => setActiveOption(3)}>
              Option 3: Brutalist
            </Button>
            <Button variant={activeOption === 4 ? "default" : "outline"} onClick={() => setActiveOption(4)}>
              Option 4: Immersive
            </Button>
          </div>
        </div>
      </div>

      <div className="pt-32">
        {/* Option 1: Ethereal Minimalism */}
        <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
          {/* Ambient gradient background */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 rounded-full blur-3xl animate-pulse" />
            <div
              className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-200 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            />
          </div>

          <div className="relative container mx-auto px-4 py-24">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-light tracking-wider text-slate-600">OPTION 1</span>
            </div>

            <h1 className="text-8xl font-light tracking-tight mb-6 text-slate-900">
              Ethereal
              <br />
              Minimalism
            </h1>

            <p className="text-xl font-light text-slate-600 max-w-2xl mb-12 leading-relaxed">
              Ultra-clean, spacious layouts with subtle gradient mesh backgrounds and frosted glass elements.
            </p>

            {/* Bento Grid Example */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {/* Large card */}
              <div className="md:col-span-2 md:row-span-2 bg-white/40 backdrop-blur-xl rounded-3xl p-12 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-1">
                <h3 className="text-4xl font-light mb-4 text-slate-900">Premium Feature</h3>
                <p className="text-slate-600 font-light leading-relaxed mb-6">
                  Generous white space and floating elements create a sense of calm sophistication.
                </p>
                <Button className="rounded-full px-8 bg-slate-900 hover:bg-slate-800">
                  Explore <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>

              {/* Small cards */}
              <div className="bg-white/40 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="text-xl font-light mb-2 text-slate-900">Glassmorphism</h4>
                <p className="text-sm text-slate-600 font-light">Frosted glass effects</p>
              </div>

              <div className="bg-white/40 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center mb-4">
                  <Layers className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="text-xl font-light mb-2 text-slate-900">Depth</h4>
                <p className="text-sm text-slate-600 font-light">Layered elements</p>
              </div>

              <div className="md:col-span-2 bg-gradient-to-br from-slate-900 to-slate-700 rounded-3xl p-12 text-white shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-1">
                <h3 className="text-3xl font-light mb-4">Magnetic Interactions</h3>
                <p className="text-slate-300 font-light leading-relaxed">
                  Buttons and cards subtly follow your cursor for engaging micro-interactions.
                </p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-sm font-light text-slate-500 tracking-wider">SCROLL FOR MORE OPTIONS</p>
            </div>
          </div>
        </section>

        {/* Option 2: Artistic Fluidity */}
        <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-rose-50 via-amber-50 to-orange-50">
          {/* Organic shapes */}
          <div className="absolute inset-0 opacity-20">
            <svg className="absolute top-0 right-0 w-1/2 h-1/2" viewBox="0 0 200 200">
              <path
                fill="#f97316"
                d="M45.3,-76.2C58.9,-69.3,70.5,-57.7,77.8,-43.8C85.1,-29.9,88.1,-14.9,87.3,-0.5C86.5,13.9,81.9,27.8,74.1,40.3C66.3,52.8,55.3,63.9,42.3,71.1C29.3,78.3,14.7,81.6,-0.5,82.5C-15.7,83.4,-31.4,81.9,-44.9,75.1C-58.4,68.3,-69.7,56.2,-77.2,42.1C-84.7,28,-88.4,14,-87.9,0.2C-87.4,-13.6,-82.7,-27.2,-75.3,-40.1C-67.9,-53,-57.8,-65.2,-44.8,-72.5C-31.8,-79.8,-15.9,-82.2,0.3,-82.7C16.5,-83.2,31.7,-83.1,45.3,-76.2Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>

          <div className="relative container mx-auto px-4 py-24">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-5 h-5 text-orange-600" />
              <span className="text-sm font-semibold tracking-wider text-orange-600">OPTION 2</span>
            </div>

            <h1 className="text-8xl font-bold tracking-tight mb-6 bg-gradient-to-r from-rose-600 via-orange-600 to-amber-600 bg-clip-text text-transparent">
              Artistic
              <br />
              Fluidity
            </h1>

            <p className="text-xl text-slate-700 max-w-2xl mb-12 leading-relaxed">
              Bold, flowing designs with organic shapes and dynamic animations that create memorable experiences.
            </p>

            {/* Flowing cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-orange-400 rounded-[3rem] blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                <div className="relative bg-white rounded-[3rem] p-10 shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                  <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-orange-500 rounded-3xl mb-6 transform group-hover:rotate-12 transition-transform duration-500" />
                  <h3 className="text-3xl font-bold mb-4 text-slate-900">Liquid Animations</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    Elements morph and flow with smooth, organic transitions that feel alive.
                  </p>
                  <Button className="rounded-full bg-gradient-to-r from-rose-600 to-orange-600 hover:from-rose-700 hover:to-orange-700">
                    Experience It
                  </Button>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-yellow-400 rounded-[3rem] blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                <div className="relative bg-white rounded-[3rem] p-10 shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-3xl mb-6 transform group-hover:rotate-12 transition-transform duration-500" />
                  <h3 className="text-3xl font-bold mb-4 text-slate-900">Bold Colors</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    Saturated, vibrant colors used tastefully to create visual impact and energy.
                  </p>
                  <Button className="rounded-full bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700">
                    See More
                  </Button>
                </div>
              </div>
            </div>

            {/* Curved section */}
            <div className="relative bg-gradient-to-r from-rose-600 via-orange-600 to-amber-600 rounded-[4rem] p-16 text-white overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="relative">
                <h3 className="text-5xl font-bold mb-6">Immersive Storytelling</h3>
                <p className="text-xl text-white/90 max-w-3xl leading-relaxed">
                  Horizontal scroll sections, split-screen layouts, and overlapping elements create depth and
                  engagement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Option 3: Refined Brutalism */}
        <section className="min-h-screen relative overflow-hidden bg-white">
          <div className="container mx-auto px-4 py-24">
            <div className="flex items-center gap-2 mb-4">
              <Grid3x3 className="w-5 h-5 text-black" />
              <span className="text-sm font-bold tracking-widest text-black">OPTION 3</span>
            </div>

            <h1 className="text-[10rem] font-black tracking-tighter mb-6 text-black leading-none">
              REFINED
              <br />
              BRUTALISM
            </h1>

            <p className="text-2xl text-black max-w-2xl mb-12 leading-tight font-light">
              Bold, unapologetic typography as the main design element. High contrast. Sharp edges. Intentional
              asymmetry.
            </p>

            {/* Brutalist grid */}
            <div className="grid grid-cols-12 gap-0 mb-12 border-4 border-black">
              <div className="col-span-8 border-r-4 border-black p-12 bg-black text-white">
                <div className="text-[8rem] font-black leading-none mb-4">01</div>
                <h3 className="text-4xl font-black mb-4 tracking-tight">BOLD TYPOGRAPHY</h3>
                <p className="text-lg font-light leading-relaxed">
                  Oversized headings dominate the space. Text becomes a graphic element, rotated and overlapping.
                </p>
              </div>
              <div className="col-span-4 p-8 bg-white">
                <div className="text-6xl font-black mb-4">02</div>
                <h4 className="text-2xl font-black mb-2">STARK</h4>
                <p className="text-sm font-light">High contrast, no subtle grays</p>
              </div>
              <div className="col-span-4 border-t-4 border-r-4 border-black p-8 bg-yellow-400">
                <div className="text-6xl font-black mb-4">03</div>
                <h4 className="text-2xl font-black mb-2">ACCENT</h4>
                <p className="text-sm font-light">One bold color</p>
              </div>
              <div className="col-span-8 border-t-4 border-black p-12 bg-white">
                <h3 className="text-5xl font-black mb-6 tracking-tight">INTENTIONAL ASYMMETRY</h3>
                <p className="text-lg font-light leading-relaxed max-w-xl">
                  Broken grids and elements cut off at edges create tension and visual interest. Nothing is centered
                  unless it needs to be.
                </p>
                <Button className="mt-6 bg-black hover:bg-yellow-400 hover:text-black text-white font-black px-12 py-6 text-lg rounded-none border-4 border-black transition-colors">
                  EXPLORE
                </Button>
              </div>
            </div>

            {/* Full-width element */}
            <div className="relative -mx-4 bg-black text-white p-16 border-y-4 border-black">
              <div className="text-[12rem] font-black leading-none opacity-10 absolute top-0 right-0">BOLD</div>
              <div className="relative">
                <h3 className="text-6xl font-black mb-4">UNAPOLOGETIC DESIGN</h3>
                <p className="text-xl font-light max-w-2xl">
                  Editorial, high-fashion aesthetic. Confident and bold. Not for everyone, and that's the point.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Option 4: Immersive Depth */}
        <section className="min-h-screen relative overflow-hidden bg-slate-950">
          {/* Spotlight effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/50 via-slate-950 to-purple-950/50" />

          <div className="relative container mx-auto px-4 py-24">
            <div className="flex items-center gap-2 mb-4">
              <Layers className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-medium tracking-wider text-blue-400">OPTION 4</span>
            </div>

            <h1 className="text-8xl font-semibold tracking-tight mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Immersive
              <br />
              Depth
            </h1>

            <p className="text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed">
              Dark mode first with layered depth, subtle 3D effects, and glow accents that create a premium tech-forward
              experience.
            </p>

            {/* Elevated cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-2xl p-8 border border-slate-800 shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-blue-500/50">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-white">Glow Effects</h3>
                  <p className="text-slate-400 leading-relaxed">
                    Subtle light sources and gradient borders create depth and focus.
                  </p>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-2xl p-8 border border-slate-800 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:-translate-y-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-purple-500/50">
                    <Layers className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-white">Layered UI</h3>
                  <p className="text-slate-400 leading-relaxed">
                    Multiple planes of content with elevation and perspective.
                  </p>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-rose-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-2xl p-8 border border-slate-800 shadow-2xl hover:shadow-pink-500/20 transition-all duration-500 hover:-translate-y-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-pink-500/50">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-white">Smooth Motion</h3>
                  <p className="text-slate-400 leading-relaxed">
                    Spring animations for natural, polished interactions.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature showcase */}
            <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 border border-slate-700 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

              <div className="relative">
                <h3 className="text-5xl font-semibold mb-6 text-white">Modern SaaS Aesthetic</h3>
                <p className="text-xl text-slate-300 max-w-3xl leading-relaxed mb-8">
                  Card-based design with elevation, spotlight effects that follow your cursor, and smooth spring
                  animations create a polished, professional experience.
                </p>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-blue-500/25">
                  Get Started <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
