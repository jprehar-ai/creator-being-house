"use client"

import type { Product } from "@/lib/shopify/types"
import Image from "next/image"
import { ExternalLink } from "lucide-react"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const image = product.images.edges[0]?.node
  const price = product.priceRange.minVariantPrice
  const shopifyUrl = `https://www.creatorbeing.uk/products/${product.handle}`

  return (
    <a
      href={shopifyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative bg-gray-900/50 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-800 hover:border-amber-500/50 transition-all duration-300 block"
    >
      {/* Product Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-800">
        {image ? (
          <Image
            src={image.url || "/placeholder.svg"}
            alt={image.altText || product.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-600">No image</div>
        )}

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-3 rounded-full font-medium flex items-center gap-2">
            <span>View on Shopify</span>
            <ExternalLink className="h-4 w-4" />
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-white font-medium text-lg mb-2 line-clamp-2">{product.title}</h3>

        {product.description && <p className="text-gray-400 text-sm mb-3 line-clamp-2">{product.description}</p>}

        <div className="flex items-center justify-between">
          <span className="text-amber-400 font-semibold text-xl">£{Number.parseFloat(price.amount).toFixed(2)}</span>

          {!product.availableForSale && <span className="text-red-400 text-sm">Out of Stock</span>}
        </div>
      </div>
    </a>
  )
}
