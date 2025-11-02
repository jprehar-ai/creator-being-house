import type { Product } from "@/lib/shopify/types"
import Image from "next/image"
import { ExternalLink, Star } from "lucide-react"

interface FeaturedProductCardProps {
  product: Product
}

export function FeaturedProductCard({ product }: FeaturedProductCardProps) {
  const image = product.images.edges[0]?.node
  const price = product.priceRange.minVariantPrice
  const shopifyUrl = `https://www.creatorbeing.uk/products/${product.handle}`

  return (
    <a
      href={shopifyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative bg-gradient-to-br from-gray-900/80 via-gray-900/60 to-gray-900/80 backdrop-blur-xl rounded-2xl overflow-hidden border-2 border-amber-500/30 hover:border-amber-500/60 transition-all duration-500 block shadow-2xl hover:shadow-amber-500/20"
    >
      {/* Featured Badge */}
      <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1.5 rounded-full font-semibold text-sm flex items-center gap-2 shadow-lg">
        <Star className="h-3.5 w-3.5 fill-current" />
        <span>Featured</span>
      </div>

      <div className="grid md:grid-cols-2 gap-6 p-6 md:p-8">
        {/* Product Image */}
        <div className="relative aspect-[3/4] overflow-hidden bg-gray-800 rounded-xl shadow-2xl">
          {image ? (
            <Image
              src={image.url || "/placeholder.svg"}
              alt={image.altText || product.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-600">No image</div>
          )}

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-center space-y-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-light text-white mb-3 tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-amber-300 via-orange-300 to-yellow-300 bg-clip-text text-transparent">
                {product.title}
              </span>
            </h2>

            {product.description && (
              <p className="text-gray-300 text-base leading-relaxed line-clamp-3">{product.description}</p>
            )}
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-light text-amber-400">£{Number.parseFloat(price.amount).toFixed(2)}</span>
              {!product.availableForSale && <span className="text-red-400 text-sm font-medium">Out of Stock</span>}
            </div>

            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-3 rounded-full font-semibold group-hover:shadow-lg group-hover:shadow-amber-500/50 transition-all duration-300">
              <span>View on Shopify</span>
              <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </a>
  )
}
