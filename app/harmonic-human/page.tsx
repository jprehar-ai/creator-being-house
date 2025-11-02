"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Compass, ArrowRight, Star, Users, Heart, Lightbulb } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { PageBanner } from "@/components/page-banner"

export default function HarmonicHumanPage() {
  const [selectedArchetype, setSelectedArchetype] = useState<string | null>(null)

  const archetypes = [
    {
      id: "modern-adventurer",
      name: "Modern Adventurer",
      image: "/modern-adventurer.png",
      description: "Seeks new experiences and pushes boundaries",
      traits: ["Curious", "Bold", "Adaptable"],
      color: "from-orange-400 to-red-500",
    },
    {
      id: "hybrid-visionary",
      name: "Hybrid Visionary",
      image: "/hybrid-visionary.png",
      description: "Bridges different worlds and perspectives",
      traits: ["Innovative", "Integrative", "Forward-thinking"],
      color: "from-purple-400 to-pink-500",
    },
    {
      id: "explorer-inner-worlds",
      name: "Explorer of Inner Worlds",
      image: "/explorer-inner-worlds.png",
      description: "Dives deep into consciousness and spirituality",
      traits: ["Introspective", "Intuitive", "Wise"],
      color: "from-blue-400 to-indigo-500",
    },
    {
      id: "experiential-alchemist",
      name: "Experiential Alchemist",
      image: "/experiential-alchemist.png",
      description: "Transforms experiences into wisdom and art",
      traits: ["Transformative", "Creative", "Insightful"],
      color: "from-green-400 to-teal-500",
    },
    {
      id: "localist",
      name: "Localist",
      image: "/localist.png",
      description: "Focuses on community and place-based living",
      traits: ["Grounded", "Community-minded", "Sustainable"],
      color: "from-amber-400 to-yellow-500",
    },
    {
      id: "creative-collaborator",
      name: "Creative Collaborator",
      image: "/creative-collaborator.png",
      description: "Thrives in creative partnerships and teams",
      traits: ["Collaborative", "Supportive", "Inspiring"],
      color: "from-pink-400 to-rose-500",
    },
    {
      id: "new-storyteller",
      name: "New Storyteller",
      image: "/new-storyteller.png",
      description: "Crafts narratives that shape culture",
      traits: ["Expressive", "Influential", "Authentic"],
      color: "from-violet-400 to-purple-500",
    },
    {
      id: "conscious-technologist",
      name: "Conscious Technologist",
      image: "/conscious-technologist.png",
      description: "Uses technology mindfully for positive impact",
      traits: ["Innovative", "Ethical", "Future-focused"],
      color: "from-cyan-400 to-blue-500",
    },
    {
      id: "boundaryless-creator",
      name: "Boundaryless Creator",
      image: "/boundaryless-creator.png",
      description: "Creates without limits or traditional constraints",
      traits: ["Free-spirited", "Original", "Unlimited"],
      color: "from-emerald-400 to-green-500",
    },
    {
      id: "slow-life-pioneer",
      name: "Slow Life Pioneer",
      image: "/slow-life-pioneer.png",
      description: "Champions mindful, intentional living",
      traits: ["Mindful", "Intentional", "Peaceful"],
      color: "from-stone-400 to-gray-500",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-6 py-12">
        <PageBanner keyword="ARCHETYPES" icon={Compass} />

        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-800 mb-6">Harmonic Human</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
            Discover your unique creative archetype and explore how you naturally move through the world.
          </p>
          <Link href="/archetype-explorer">
            <motion.button
              className="bg-gradient-to-r from-amber-400 to-pink-400 text-white px-8 py-4 rounded-xl shadow-lg inline-flex items-center gap-2 text-lg font-medium"
              whileHover={{ scale: 1.02, boxShadow: "0 8px 25px rgba(251, 191, 36, 0.3)" }}
              whileTap={{ scale: 0.98 }}
            >
              Take the Assessment <ArrowRight className="h-5 w-5" />
            </motion.button>
          </Link>
        </motion.div>

        {/* What is Harmonic Human */}
        <motion.div
          className="max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-medium text-gray-800 mb-6 text-center">What is Harmonic Human?</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-lg leading-relaxed mb-6">
                Harmonic Human is our framework for understanding the different ways people naturally create, connect,
                and contribute to the world. Rather than putting you in a box, these archetypes help you recognize your
                unique creative frequency.
              </p>
              <p className="text-lg leading-relaxed">
                Each archetype represents a different approach to living creatively—from the bold exploration of the
                Modern Adventurer to the deep introspection of the Explorer of Inner Worlds. Understanding your
                archetype helps you align with your natural strengths and find your tribe.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Archetypes Grid */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-2xl md:text-3xl font-medium text-gray-800 mb-12 text-center">
            Explore the 10 Archetypes
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {archetypes.map((archetype, index) => (
              <motion.div
                key={archetype.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                onClick={() => setSelectedArchetype(archetype.id)}
              >
                <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 hover:shadow-lg transition-all">
                  <div className="aspect-square overflow-hidden relative">
                    <Image
                      src={archetype.image || "/placeholder.svg"}
                      alt={archetype.name}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${archetype.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-gray-800 text-sm mb-2 text-center">{archetype.name}</h3>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {archetype.traits.slice(0, 2).map((trait) => (
                        <span key={trait} className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
                          {trait}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* How It Works */}
        <motion.div
          className="max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-medium text-gray-800 mb-12 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-amber-500" />
              </div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">Take the Assessment</h3>
              <p className="text-gray-600">
                Answer thoughtful questions about how you create, connect, and contribute to discover your primary
                archetype.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">Find Your Tribe</h3>
              <p className="text-gray-600">
                Connect with others who share your archetype and learn from those with complementary creative
                frequencies.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-purple-500" />
              </div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">Live Your Design</h3>
              <p className="text-gray-600">
                Use insights about your archetype to make decisions, create projects, and build a life that feels
                authentically yours.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-gradient-to-br from-amber-50 to-pink-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-medium text-gray-800 mb-4">Ready to Discover Your Archetype?</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Take the Harmonic Human assessment and begin understanding your unique creative frequency.
            </p>
            <Link href="/archetype-explorer">
              <motion.button
                className="bg-gradient-to-r from-amber-400 to-pink-400 text-white px-8 py-4 rounded-xl shadow-lg inline-flex items-center gap-2 text-lg font-medium"
                whileHover={{ scale: 1.02, boxShadow: "0 8px 25px rgba(251, 191, 36, 0.3)" }}
                whileTap={{ scale: 0.98 }}
              >
                Start Your Journey <Heart className="h-5 w-5" />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
