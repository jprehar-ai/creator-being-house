import { getProducts, getProduct } from "@/lib/shopify"
import { ShopPageClient } from "@/components/shop/shop-page-client"

export default async function ShopPage() {
  let products = []
  let featuredProduct = null
  let error = null

  try {
    // Fetch all products
    let allProducts = await getProducts({ first: 50 })

    // Try to fetch featured product
    try {
      featuredProduct = await getProduct("creator-being")
      if (featuredProduct) {
        // Remove featured product from main list
        allProducts = allProducts.filter((p) => p.id !== featuredProduct.id)
      }
    } catch (featuredError) {
      console.log("Featured product fetch failed (non-critical):", featuredError)
    }

    // Sort products to prioritize Creator Being ebook
    allProducts = allProducts.sort((a, b) => {
      const aTitle = a.title.toLowerCase()
      const bTitle = b.title.toLowerCase()

      const aIsEbook = aTitle.includes("creator being") && (aTitle.includes("ebook") || aTitle.includes("pdf"))
      const bIsEbook = bTitle.includes("creator being") && (bTitle.includes("ebook") || bTitle.includes("pdf"))

      if (aIsEbook && !bIsEbook) return -1
      if (!aIsEbook && bIsEbook) return 1

      return 0
    })

    products = allProducts
  } catch (e) {
    console.error("Shop page error:", e)
    let errorMessage = "Unable to load products. Please try again later."

    if (e instanceof Error) {
      if (e.message.includes("403")) {
        errorMessage =
          "Shopify API Access Denied (403). The Storefront Access Token may be invalid or missing required permissions. Please verify your Shopify integration settings."
      } else if (e.message.includes("401")) {
        errorMessage = "Shopify API Authentication Failed (401). Please check your Storefront Access Token."
      } else {
        errorMessage = e.message
      }
    }

    error = errorMessage
  }

  return <ShopPageClient products={products} featuredProduct={featuredProduct} error={error} />
}
