"use client"

import { ProductCard } from "@/components/products/product-card"
import { FeaturedProductCard } from "@/components/products/featured-product-card"
import { ShoppingBag, AlertCircle, Star } from 'lucide-react'
import { motion } from "framer-motion"

interface ShopPageClientProps {
  products: any[]
  featuredProduct: any
  error: string | null
}

export function ShopPageClient({ products, featuredProduct, error }: ShopPageClientProps) {
  const allProducts = featuredProduct ? [featuredProduct, ...products] : products

  return (
    <div className="relative overflow-hidden bg-gray-950 min-h-screen">
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(236, 72, 153, 0.4) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
          animate={{
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-[550px] h-[550px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
          animate={{
            x: [0, 40, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 22,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <section className="relative py-32 overflow-hidden z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-12"
            >
              <div className="flex justify-center">
                <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl text-purple-300 px-6 py-3 rounded-full text-sm font-medium border border-white/10 shadow-[0_0_30px_rgba(168,85,247,0.3)]">
                  <ShoppingBag className="h-4 w-4" />
                  Creator Being Shop
                </div>
              </div>

              <div className="space-y-6">
                <h1 className="text-5xl md:text-7xl font-light text-white leading-tight">
                  Original Art.{" "}
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent font-medium">
                    Books.
                  </span>
                  <br />
                  Limited Editions.
                </h1>

                <p className="text-xl md:text-2xl text-gray-300 font-light max-w-5xl mx-auto leading-relaxed">
                  Explore our collection of <span className="text-purple-400 font-medium">original artworks</span>,{" "}
                  <span className="text-pink-400 font-medium">transformative books</span>, and{" "}
                  <span className="text-orange-400 font-medium">limited edition pieces</span> created to inspire your
                  creative journey.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative z-10 pb-24">
        <div className="container mx-auto px-6">
          {error ? (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl mx-auto">
              <div className="bg-white/5 backdrop-blur-xl border border-red-500/20 rounded-2xl p-12 text-center shadow-[0_0_40px_rgba(239,68,68,0.2)]">
                <div className="flex justify-center mb-6">
                  <div className="bg-red-500/10 p-4 rounded-full">
                    <AlertCircle className="h-12 w-12 text-red-400" />
                  </div>
                </div>
                <h3 className="text-2xl font-medium text-white mb-4">Unable to Load Products</h3>
                <p className="text-red-300 text-lg mb-6">{error}</p>
                <p className="text-gray-400 mb-8">
                  In the meantime, you can visit our main store to browse all available products.
                </p>
                <a
                  href="https://www.creatorbeing.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 text-white px-8 py-3 rounded-full font-medium transition-all shadow-[0_0_40px_rgba(168,85,247,0.5)]"
                >
                  <span>Visit creatorbeing.uk</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          ) : allProducts.length === 0 ? (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl mx-auto">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-12 text-center shadow-[0_0_40px_rgba(168,85,247,0.2)]">
                <p className="text-gray-300 text-lg mb-4">No products available at the moment.</p>
                <p className="text-gray-400">
                  Visit our store directly at{" "}
                  <a
                    href="https://www.creatorbeing.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 underline transition-colors"
                  >
                    creatorbeing.uk
                  </a>
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
                {allProducts.map((product, index) => {
                  const isFeatured = index === 0 && featuredProduct && product.id === featuredProduct.id
                  
                  return (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={isFeatured ? "relative" : ""}
                    >
                      {isFeatured && (
                        <div className="absolute -top-3 -right-3 z-10">
                          <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5 shadow-[0_0_20px_rgba(168,85,247,0.6)]">
                            <Star className="h-3 w-3 fill-current" />
                            Featured
                          </div>
                        </div>
                      )}
                      <div className={isFeatured ? "ring-2 ring-purple-500/50 rounded-2xl shadow-[0_0_30px_rgba(168,85,247,0.4)]" : ""}>
                        <ProductCard product={product} />
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-16"
              >
                <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-10 border border-white/10 shadow-[0_0_40px_rgba(168,85,247,0.2)] text-center max-w-2xl mx-auto">
                  <h3 className="text-2xl font-medium text-white mb-4">Explore Our Full Collection</h3>
                  <p className="text-gray-300 mb-6">
                    Visit our main store to discover all available artworks, books, and limited editions.
                  </p>
                  <a
                    href="https://www.creatorbeing.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 text-white px-8 py-3 rounded-full font-medium transition-all shadow-[0_0_40px_rgba(168,85,247,0.5)]"
                  >
                    <span>Visit creatorbeing.uk</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}
