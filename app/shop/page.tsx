import { getProducts, getProduct } from "@/lib/shopify"
import { ProductCard } from "@/components/products/product-card"
import { FeaturedProductCard } from "@/components/products/featured-product-card"
import { ShoppingBag } from "lucide-react"
import { PageBanner } from "@/components/page-banner"

export default async function ShopPage() {
  let products = []
  let featuredProduct = null
  let error = null

  try {
    console.log("[v0] Fetching products from Shopify...")
    featuredProduct = await getProduct("creator-being")

    // Fetch all other products
    products = await getProducts({ first: 50 })

    if (featuredProduct) {
      products = products.filter((p) => p.id !== featuredProduct.id)
    }

    console.log("[v0] Products fetched:", products.length)
    console.log("[v0] All product titles:")
    products.forEach((p, i) => {
      console.log(`  ${i + 1}. "${p.title}"`)
    })

    products = products.sort((a, b) => {
      const aTitle = a.title.toLowerCase()
      const bTitle = b.title.toLowerCase()

      const aIsEbook = aTitle.includes("creator being") && (aTitle.includes("ebook") || aTitle.includes("pdf"))
      const bIsEbook = bTitle.includes("creator being") && (bTitle.includes("ebook") || bTitle.includes("pdf"))

      // Put ebook at the top of the remaining products
      if (aIsEbook && !bIsEbook) return -1
      if (!aIsEbook && bIsEbook) return 1

      // Otherwise maintain original order
      return 0
    })
  } catch (e) {
    console.error("[v0] Error fetching products:", e)
    error = e instanceof Error ? e.message : "Unable to load products. Please try again later."
  }

  console.log("[v0] Featured product found:", featuredProduct?.title || "None")
  if (featuredProduct) {
    console.log("[v0] Featured product details:", {
      id: featuredProduct.id,
      title: featuredProduct.title,
      price: featuredProduct.priceRange.minVariantPrice.amount,
    })
  }

  return (
    <div className="min-h-screen bg-gray-950 relative overflow-hidden">
      {/* Desert Dusk gradient background with noise texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#d4a574] via-[#9d6b53] via-[#7d5a6f] to-[#3d2e40]" />
      <div
        className="absolute inset-0 opacity-[0.15] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Ambient gradient orbs with Desert Dusk colors */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#d4a574]/30 via-[#b8735f]/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#7d5a6f]/25 via-[#9d6b53]/15 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-[700px] h-[700px] bg-gradient-to-br from-[#5a4a5e]/20 via-[#3d2e40]/15 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="mb-12">
          <PageBanner keyword="SHOP" icon={ShoppingBag} />
        </div>

        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-amber-300 via-orange-300 to-yellow-300 bg-clip-text text-transparent">
              Creator Being Shop
            </span>
          </h1>
          <p className="text-gray-200 text-lg">
            Explore our collection of original artworks, books, and limited editions
          </p>
        </div>

        {error ? (
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-8">
              <p className="text-red-300 text-lg">{error}</p>
              <p className="text-gray-400 mt-4">
                Visit our store directly at{" "}
                <a
                  href="https://www.creatorbeing.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-300 underline"
                >
                  creatorbeing.uk
                </a>
              </p>
            </div>
          </div>
        ) : products.length === 0 ? (
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-12 border border-white/10">
              <p className="text-gray-300 text-lg mb-4">No products available at the moment.</p>
              <p className="text-gray-400">
                Visit our store directly at{" "}
                <a
                  href="https://www.creatorbeing.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-300 underline"
                >
                  creatorbeing.uk
                </a>
              </p>
            </div>
          </div>
        ) : (
          <>
            {featuredProduct && (
              <div className="mb-20">
                <FeaturedProductCard product={featuredProduct} />
              </div>
            )}

            {products.length > 0 && (
              <>
                <div className="mb-8">
                  <h2 className="text-3xl font-light text-white text-center">
                    <span className="bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent">
                      More Products
                    </span>
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
                  {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </>
            )}

            <div className="mt-16 text-center">
              <a
                href="https://www.creatorbeing.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors"
              >
                <span>View full collection at creatorbeing.uk</span>
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
          </>
        )}
      </div>
    </div>
  )
}
