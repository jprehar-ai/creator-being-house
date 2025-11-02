"use client"

import { useEffect, useRef } from "react"

export default function AboutPage() {
  const orb1Ref = useRef<HTMLDivElement>(null)
  const orb2Ref = useRef<HTMLDivElement>(null)
  const orb3Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const animateOrbs = () => {
      const time = Date.now() * 0.0001

      if (orb1Ref.current) {
        const x = Math.sin(time) * 100
        const y = Math.cos(time * 0.8) * 100
        orb1Ref.current.style.transform = `translate(${x}px, ${y}px)`
      }

      if (orb2Ref.current) {
        const x = Math.cos(time * 0.7) * 120
        const y = Math.sin(time * 0.9) * 80
        orb2Ref.current.style.transform = `translate(${x}px, ${y}px)`
      }

      if (orb3Ref.current) {
        const x = Math.sin(time * 0.6) * 90
        const y = Math.cos(time) * 110
        orb3Ref.current.style.transform = `translate(${x}px, ${y}px)`
      }

      requestAnimationFrame(animateOrbs)
    }

    animateOrbs()
  }, [])

  return (
    <div className="min-h-screen bg-gray-950 relative overflow-hidden">
      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          ref={orb1Ref}
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-30 blur-[120px]"
          style={{
            background: "radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, transparent 70%)",
          }}
        />
        <div
          ref={orb2Ref}
          className="absolute top-1/2 right-1/4 w-[500px] h-[500px] rounded-full opacity-25 blur-[100px]"
          style={{
            background: "radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)",
          }}
        />
        <div
          ref={orb3Ref}
          className="absolute bottom-1/4 left-1/2 w-[550px] h-[550px] rounded-full opacity-20 blur-[110px]"
          style={{
            background: "radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Philosophy Badge */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 shadow-[0_0_30px_rgba(168,85,247,0.3)]">
              <span className="text-purple-300 text-sm font-medium tracking-wider">✦ PHILOSOPHY ✦</span>
            </div>
          </div>

          {/* Main Heading */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              What Is the Art of Living in Creation?
            </h1>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none prose-invert">
            <div className="space-y-8 text-gray-300 leading-relaxed text-lg">
              <p>
                Imagine your life as a flowing river rather than a fixed path. This is what living in creation feels
                like: a gentle yet powerful way of moving through your days with awareness and intention.
              </p>

              <p>
                At its heart, this art is about remembering something we all knew as children but often forget as
                adults: that we're naturally creative beings. Not just in making art or solving problems, but in how we
                shape our entire experience: our relationships, environments, work, and inner worlds.
              </p>

              {/* Featured Quote with Glow */}
              <div className="my-12 p-8 backdrop-blur-xl bg-gradient-to-br from-orange-500/10 via-pink-500/10 to-purple-500/10 rounded-2xl border-l-4 border-orange-400 shadow-[0_0_50px_rgba(249,115,22,0.4)]">
                <p className="text-xl italic text-white leading-relaxed">
                  "Living in creation isn't about perfecting yourself or your circumstances. It's about tuning in to
                  what's already flowing within you."
                </p>
              </div>

              <p>
                When you begin to live this way, you notice how your natural rhythm guides you better than any external
                pressure. You feel the difference between moving from alignment versus moving from stress. You recognize
                when you're truly present versus when you're lost in thought or performing a role.
              </p>

              <p>
                Most importantly, you start to see how your inner state, your thoughts, feelings, and energy, shapes
                your outer reality. Not in a magical way, but in the very practical sense that how you feel affects what
                you notice, what choices you make, and how others respond to you.
              </p>

              <p>
                The House is designed as a sanctuary for this practice, each room offering a different facet of living
                in creation. As you move through these spaces, you're not learning steps or following rules. You're
                remembering how to trust yourself, feel what's true, and create from that honest place.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
