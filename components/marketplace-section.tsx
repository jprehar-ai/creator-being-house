"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ShoppingBag } from "lucide-react"

export function MarketplaceSection() {
  const products = [
    {
      id: 1,
      name: "Cosmic Flow Dress",
      description: "A flowing garment designed to enhance your creative expression.",
      price: 129,
      image: "/placeholder.svg?height=400&width=300&query=flowing%20cosmic%20dress%20in%20purple%20and%20gold",
    },
    {
      id: 2,
      name: "Resonance Wrap",
      description: "Handcrafted fabric that amplifies your natural frequency.",
      price: 89,
      image: "/placeholder.svg?height=400&width=300&query=elegant%20wrap%20shawl%20in%20cosmic%20colors",
    },
    {
      id: 3,
      name: "Creator Being Book",
      description: "The Art of Living in Creation - physical book with practices.",
      price: 44,
      image: "/placeholder.svg?height=400&width=300&query=hardcover%20book%20with%20cosmic%20design",
    },
  ]

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        <ShoppingBag className="h-6 w-6 text-cb-purple-light" />
        <h2 className="text-2xl font-light text-white font-serif">Skins of Light Collection</h2>
      </div>

      <p className="text-white/80 text-lg">
        Sacred offerings designed to support your transformation and expression in the physical world.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="glass-effect rounded-xl overflow-hidden"
            whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)" }}
          >
            <div className="relative h-64 w-full">
              <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-medium text-white mb-2">{product.name}</h3>
              <p className="text-white/70 mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-white font-medium">${product.price}</span>
                <button className="bg-cb-purple/30 hover:bg-cb-purple/40 text-white px-4 py-2 rounded-lg transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
