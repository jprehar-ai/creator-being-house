"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Compass, Heart, Star, Users, Lightbulb } from "lucide-react"
import { notFound } from "next/navigation"

// Complete archetype data including Modern Adventurer
const archetypeData = {
  "modern-adventurer": {
    name: "The Modern Adventurer",
    image: "/modern-adventurer.png",
    description: "Lives by motion, not by maps. Pursues aliveness over success.",
    tags: ["Explorer", "Freedom Seeker", "Experience Collector"],
    color: "from-amber-400 to-orange-500",
    fullContent: {
      "Core Essence": `The Modern Adventurer is not defined by how many countries they've visited, but by how deeply they're willing to engage with the unknown. They live by motion, not by maps. Their greatest teacher is experience itself — not secondhand knowledge, not fixed identities, but the act of being in it. They don't chase success in the traditional sense. They pursue aliveness. For the Adventurer, the outer journey is a mirror for the inner one. They let life shape them, undo them, re-form them. The question "Where to next?" is about growth.`,

      "Lifestyle & Values": `The Adventurer chooses possibility over predictability. They prioritize freedom of time, movement, and self-expression. Their lives are designed to allow for constant evolution — and they feel most at home when they're learning, adapting, or starting fresh.

They value:
• Curiosity over routine
• Experience over accumulation
• Flexibility over rigidity
• Inner truth over external validation
• Presence over performance

They often resist structure not out of laziness, but because their lives unfold more through intuition than planning. They're not afraid to begin again, live with less, or choose the road less explained.`,

      "A Day in the Life": `A typical day in the life of a Modern Adventurer is anything but typical — but here's a common rhythm:

• Wake up in a guesthouse in a new city, sun streaming through open windows
• Journal or meditate while drinking local coffee, tuning into the inner landscape before choosing what's next
• A few hours of focused freelance work, coaching calls, or writing sessions from a co-working space or terrace
• An afternoon exploring — walking through neighborhoods, talking to strangers, sketching in a journal, visiting a market or hiking a nearby trail
• Dinner with new friends from different countries, exchanging stories and life philosophies
• Nighttime reflections, possibly under the stars, wondering where life will take them next — and trusting they'll know when it's time`,

      "Work & Creative Paths": `Adventurers often seek (or create) work that supports flexibility, meaning, and creativity. They tend to avoid traditional 9-to-5 roles in favor of fluid, project-based, or location-independent models.

Examples include:
• Travel writer, documentary filmmaker, or photojournalist
• Retreat guide, nature therapist, or outdoor educator
• Remote strategist, UX researcher, brand storyteller
• Cultural consultant, permaculture intern, digital course creator
• Language teacher, online facilitator, freelance creative

Rather than building a fixed "career path," they gather skills that can travel with them.`,

      "Relationship to Money & Possibility": `Money, for the Adventurer, is not about control — it's about choice. They tend to have a cyclical relationship with finances, often earning in bursts and spending in alignment with inspiration. Financial planning may feel limiting, but they're learning that structure can support spontaneity. They trust that money flows when they are aligned — and they've often experienced this in real-time.

Their wealth is measured in:
• Freedom of movement
• Diversity of experience
• Time flexibility
• Inner richness
• Resourcefulness

They value possibility above all. To the Adventurer, a modest budget + a bold idea = enough to begin.`,

      "Relationships & Love": `The Modern Adventurer loves deeply — but not possessively. They seek connection that honors expansion, not attachment. They are often drawn to intense, transformative relationships that mirror their own growth journey. For love to thrive, it must breathe.

What they need in relationship:
• Space to be themselves without compromise
• Shared values around growth, freedom, and exploration
• Emotional depth without control
• A partner (or friendship circle) who supports their inner and outer adventures

They may have periods of solo travel or long-distance relationships, and sometimes choose chosen family over traditional romantic models. For them, love is not about staying still — it's about staying true.`,

      "Challenges & Growth Edges": `Being in constant motion has its shadow. The Adventurer may:
• Struggle with consistency and long-term stability
• Experience loneliness or lack of rootedness
• Avoid hard conversations by moving on
• Romanticize beginnings but resist endings
• Confuse novelty with progress

Their edge is learning that stillness doesn't equal stagnation — and commitment doesn't equal confinement. They grow when they find inner anchors strong enough to hold them, no matter where they are.`,

      "Signs You Might Be This Archetype": `You might be a Modern Adventurer if:
• You've changed paths, cities, or countries more than once — and felt more you each time
• You've built a life around freedom and self-direction
• You crave variety and resist predictability
• You learn by going — not by being told
• You've had people say, "I wish I could live like you"
• You've left something comfortable behind because it no longer felt true
• You think in chapters, not timelines`,

      "Mantras & Anchors": `"My path is made by walking."

"I don't need to know what's next — I just need to stay true."

"Presence is the adventure."

"Home lives inside me."

"I trust the road will rise to meet me."`,
    },
  },
  localist: {
    name: "The Localist",
    image: "/placeholder.svg?height=400&width=600",
    description: "Deeply rooted in place, building community from the ground up.",
    tags: ["Community Builder", "Place-Based", "Roots"],
    color: "from-green-400 to-emerald-500",
  },
  "boundaryless-creator": {
    name: "The Boundaryless Creator",
    image: "/placeholder.svg?height=400&width=600",
    description: "Creates without limits, blending mediums and breaking conventions.",
    tags: ["Creative", "Innovative", "Boundary-Breaking"],
    color: "from-purple-400 to-pink-500",
  },
  "new-storyteller": {
    name: "The New Storyteller",
    image: "/placeholder.svg?height=400&width=600",
    description: "Weaves narratives that bridge worlds and transform perspectives.",
    tags: ["Storyteller", "Bridge-Builder", "Transformer"],
    color: "from-blue-400 to-indigo-500",
  },
  regenerator: {
    name: "The Regenerator",
    image: "/placeholder.svg?height=400&width=600",
    description: "Restores what's been broken, heals what's been wounded.",
    tags: ["Healer", "Restorer", "Nature-Connected"],
    color: "from-teal-400 to-green-500",
  },
  "creative-collaborator": {
    name: "The Creative Collaborator",
    image: "/placeholder.svg?height=400&width=600",
    description: "Brings people together to create something greater than the sum.",
    tags: ["Collaborator", "Team Builder", "Synergist"],
    color: "from-rose-400 to-red-500",
  },
  "conscious-technologist": {
    name: "The Conscious Technologist",
    image: "/placeholder.svg?height=400&width=600",
    description: "Uses technology as a tool for human flourishing and connection.",
    tags: ["Tech-Savvy", "Ethical", "Human-Centered"],
    color: "from-cyan-400 to-blue-500",
  },
  "slow-life-pioneer": {
    name: "The Slow-Life Pioneer",
    image: "/placeholder.svg?height=400&width=600",
    description: "Champions depth over speed, presence over productivity.",
    tags: ["Mindful", "Present", "Depth-Seeker"],
    color: "from-stone-400 to-amber-500",
  },
  "experiential-alchemist": {
    name: "The Experiential Alchemist",
    image: "/placeholder.svg?height=400&width=600",
    description: "Transforms ordinary moments into extraordinary experiences.",
    tags: ["Experience Designer", "Transformer", "Alchemist"],
    color: "from-violet-400 to-purple-500",
  },
  "explorer-inner-worlds": {
    name: "The Explorer of Inner Worlds",
    image: "/placeholder.svg?height=400&width=600",
    description: "Maps the territories of consciousness and inner landscapes.",
    tags: ["Inner Explorer", "Consciousness", "Depth"],
    color: "from-indigo-400 to-blue-500",
  },
  "hybrid-visionary": {
    name: "The Hybrid Visionary",
    image: "/placeholder.svg?height=400&width=600",
    description: "Bridges old and new, creating hybrid solutions for emerging challenges.",
    tags: ["Visionary", "Bridge-Builder", "Innovator"],
    color: "from-emerald-400 to-teal-500",
  },
  "harmonic-human": {
    name: "The Harmonic Human",
    image: "/placeholder.svg?height=400&width=600",
    description: "Lives in harmony with natural rhythms and cosmic frequencies.",
    tags: ["Harmonious", "Balanced", "Integrated"],
    color: "from-amber-400 to-yellow-500",
  },
}

export default function ArchetypePage({ params }: { params: { archetype: string } }) {
  const archetype = archetypeData[params.archetype as keyof typeof archetypeData]

  if (!archetype) {
    notFound()
  }

  // Check if this archetype has full content (like Modern Adventurer) or needs placeholder content
  const hasFullContent = "fullContent" in archetype

  // Get sections - either full content or placeholder
  const sections = hasFullContent
    ? Object.entries(archetype.fullContent).map(([title, content]) => ({ title, content }))
    : [
        {
          title: "Core Essence",
          content: `The ${archetype.name} represents a unique approach to living and creating in today's world. This archetype embodies specific values and ways of being that resonate with those seeking authentic expression and meaningful contribution. Their essence is defined by their relationship to their core purpose and how they show up in the world.`,
        },
        {
          title: "Lifestyle & Values",
          content: `This archetype prioritizes certain values that shape their daily choices and long-term vision. They create lifestyles that support their authentic expression while contributing to the greater good. Their values guide their decisions about work, relationships, and how they spend their time and energy.`,
        },
        {
          title: "A Day in the Life",
          content: `A typical day for ${archetype.name} reflects their core values and priorities. They structure their time in ways that honor their natural rhythms while making space for what matters most. Their daily practices and routines support their overall vision for how they want to live and contribute.`,
        },
        {
          title: "Work & Creative Paths",
          content: `${archetype.name} often gravitates toward work that aligns with their values and allows for authentic expression. They may create non-traditional career paths or find innovative ways to contribute their gifts. Their work is often an extension of their personal mission and values.`,
        },
        {
          title: "Relationship to Money & Possibility",
          content: `This archetype has a unique relationship with money and resources, often prioritizing values alignment over traditional financial metrics. They understand that true wealth includes many forms of abundance and seek to create sustainable models that support their vision.`,
        },
        {
          title: "Relationships & Love",
          content: `In relationships, ${archetype.name} seeks authentic connection and mutual growth. They value partnerships that support their individual expression while creating something beautiful together. Their approach to love honors both independence and interdependence.`,
        },
        {
          title: "Challenges & Growth Edges",
          content: `Like all archetypes, ${archetype.name} faces specific challenges and growth opportunities. Understanding these patterns helps them navigate obstacles and continue evolving. Their growth edges often become their greatest strengths when consciously developed.`,
        },
        {
          title: "Signs You Might Be This Archetype",
          content: `You might resonate with ${archetype.name} if you find yourself naturally drawn to their values and ways of being. These signs can help you recognize if this archetype reflects your authentic path and natural tendencies.`,
        },
        {
          title: "Mantras & Anchors",
          content: `These mantras and anchoring practices support ${archetype.name} in staying connected to their core essence and navigating life's challenges with grace and authenticity.`,
        },
      ]

  // Determine background gradient based on archetype
  const bgGradient = params.archetype === "modern-adventurer" ? "from-amber-50 to-orange-50" : "from-gray-50 to-white"

  return (
    <div className={`min-h-screen bg-gradient-to-b ${bgGradient}`}>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-r ${archetype.color} opacity-10`} />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <Link
              href="/harmonic-human"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-8 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Archetypes
            </Link>

            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <motion.img
                  src={archetype.image}
                  alt={archetype.name}
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
              </div>

              <div className="lg:w-1/2 text-center lg:text-left">
                <motion.h1
                  className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-gray-800"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  {archetype.name}
                </motion.h1>

                <motion.p
                  className="text-xl text-gray-600 mb-8 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  {archetype.description}
                </motion.p>

                <motion.div
                  className="flex flex-wrap gap-4 justify-center lg:justify-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  {archetype.tags.map((tag, index) => (
                    <div key={tag} className="flex items-center gap-2 bg-white/70 px-4 py-2 rounded-full border">
                      {params.archetype === "modern-adventurer" ? (
                        <>
                          {index === 0 && <Compass className="h-4 w-4 text-amber-600" />}
                          {index === 1 && <Heart className="h-4 w-4 text-amber-600" />}
                          {index === 2 && <Star className="h-4 w-4 text-amber-600" />}
                        </>
                      ) : (
                        <>
                          {index === 0 && <Users className="h-4 w-4 text-gray-600" />}
                          {index === 1 && <Lightbulb className="h-4 w-4 text-gray-600" />}
                          {index === 2 && <Heart className="h-4 w-4 text-gray-600" />}
                        </>
                      )}
                      <span className="text-sm font-medium text-gray-700">{tag}</span>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="mb-16"
              >
                <div
                  className={`${hasFullContent ? "bg-white/70 backdrop-blur-sm border-white/50" : "bg-white border-gray-100"} rounded-2xl p-8 shadow-sm border`}
                >
                  <h2
                    className={`text-2xl md:text-3xl font-light mb-6 text-gray-800 border-b ${hasFullContent ? "border-amber-200" : "border-gray-200"} pb-4`}
                  >
                    {section.title}
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700">
                    {section.content.split("\n").map((paragraph, pIndex) => (
                      <p key={pIndex} className="mb-4 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}

                    {!hasFullContent && (
                      <div className="mt-6 p-4 bg-gray-50 rounded-lg border-l-4 border-gray-300">
                        <p className="text-sm text-gray-600 italic">
                          This is placeholder content. The full {archetype.name} profile is coming soon with detailed
                          insights, real-world examples, and practical guidance for embodying this archetype.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 bg-gradient-to-r ${archetype.color}`}>
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-light mb-6 text-white">
              {hasFullContent ? "Ready to Embrace Your Adventure?" : "Connect with Your Archetype"}
            </h2>
            <p className="text-xl text-white/90 mb-8">
              {hasFullContent
                ? "Connect with other Modern Adventurers and explore tools for conscious living."
                : "Join Creator Being to explore your path more deeply and connect with others who share your vision."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/membership">
                <button className="bg-white text-gray-800 hover:bg-gray-50 px-8 py-4 rounded-full font-medium text-lg transition-colors">
                  Join Creator Being
                </button>
              </Link>
              <Link href="/harmonic-human">
                <button className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-medium text-lg transition-colors">
                  Explore Other Archetypes
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
