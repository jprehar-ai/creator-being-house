"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Star, Heart, Package, Download, ShoppingCart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function CreatorBeingBookPage() {
  const [selectedImage, setSelectedImage] = useState(0)

  const bookImages = [
    "/creator-being-book.jpeg",
    "/book-dear-creator-being.jpeg",
    "/book-circular-logo.jpeg",
    "/book-quote-page.jpeg",
    "/book-back-cover.jpeg",
  ]

  const whatInside = [
    "Our creative universe",
    "Living from the multidimensional planes of existence",
    "What is natural law?",
    "What are dimensions, and why are they important?",
    "Peak experience, enlightenment, wonder and miracles",
    "Money, time and matter",
    "A story about our galactic origins",
    "Remembering the cosmic nature of our body, emotions, thoughts and relationships",
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-6 py-12">
        {/* Back Button */}
        <Link href="/shop" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-8">
          <ArrowLeft className="h-4 w-4" />
          Back to Shop
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="aspect-square overflow-hidden rounded-2xl bg-gray-50 mb-4">
              <Image
                src={bookImages[selectedImage] || "/placeholder.svg"}
                alt="Creator Being Book"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-5 gap-3">
              {bookImages.map((image, index) => (
                <div
                  key={index}
                  className={`aspect-square overflow-hidden rounded-lg bg-gray-50 cursor-pointer transition-all ${
                    selectedImage === index ? "ring-2 ring-amber-400" : "hover:ring-1 ring-gray-300"
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Creator Being Book ${index + 1}`}
                    width={150}
                    height={150}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                Physical & Digital
              </span>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="text-sm font-medium text-gray-700">5.0</span>
                <span className="text-sm text-gray-500">(42 reviews)</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">Creator Being Book</h1>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Creator Being is a captivating and deeply personal book that explores the nature of the universe, natural
              law, love, and creative expression.
            </p>

            <div className="bg-gradient-to-r from-amber-50 to-pink-50 rounded-xl p-6 mb-8">
              <p className="text-gray-700 leading-relaxed">
                Within this beautiful book you'll find a compilation of short notes and hand drawn illustrations on
                natural law and the new human experience. From emotions, to relationships, to multidimensionality, to
                our galactic origins — it's the wild wisdom and the ancient knowledge that are crucial to remembering
                who we are as Nature herself and how to live from the Creative Principle for life.
              </p>
            </div>

            <p className="text-gray-700 mb-8 leading-relaxed">
              This is more than a book – it's an invitation to explore the depths of the cosmos and the beauty of our
              human experience. Whether you're looking to deepen your understanding of natural law, explore
              multidimensional living, or simply reconnect with your creative self, Creator Being will illuminate your
              path.
            </p>

            {/* What's Inside */}
            <div className="mb-8">
              <h3 className="text-xl font-medium text-gray-800 mb-4">What's Inside</h3>
              <ul className="space-y-2">
                {whatInside.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pricing and Purchase */}
            <div className="border-t pt-8">
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Package className="h-5 w-5 text-gray-400" />
                    <div>
                      <div className="font-medium text-gray-800">Physical Book</div>
                      <div className="text-sm text-gray-600">Printed book + shipping</div>
                    </div>
                  </div>
                  <div className="text-xl font-medium text-gray-800">$20 + P&P</div>
                </div>

                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Download className="h-5 w-5 text-gray-400" />
                    <div>
                      <div className="font-medium text-gray-800">Digital Book</div>
                      <div className="text-sm text-gray-600">PDF download</div>
                    </div>
                  </div>
                  <div className="text-xl font-medium text-gray-800">$5</div>
                </div>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 bg-amber-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-amber-600 transition-colors flex items-center justify-center gap-2">
                  <ShoppingCart className="h-5 w-5" />
                  Add Physical to Cart
                </button>
                <button className="flex-1 bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors flex items-center justify-center gap-2">
                  <Download className="h-5 w-5" />
                  Buy Digital
                </button>
                <button className="p-3 text-gray-400 hover:text-pink-500 transition-colors border border-gray-200 rounded-lg">
                  <Heart className="h-5 w-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
