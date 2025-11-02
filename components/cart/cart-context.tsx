"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import type { Product, ProductVariant, ShopifyCart } from "@/lib/shopify/types"
import {
  createCartAction,
  addToCartAction,
  updateCartAction,
  removeFromCartAction,
  getCartAction,
} from "@/app/actions/cart"

interface CartContextType {
  cart: ShopifyCart | null
  addItem: (variant: ProductVariant, product: Product) => Promise<void>
  removeItem: (lineId: string) => Promise<void>
  updateItemQuantity: (lineId: string, quantity: number) => Promise<void>
  isLoading: boolean
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<ShopifyCart | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  // Load cart from localStorage on mount
  useEffect(() => {
    const cartId = localStorage.getItem("cartId")
    if (cartId) {
      getCartAction(cartId).then((result) => {
        if (result.success && result.cart) {
          setCart(result.cart)
        } else {
          localStorage.removeItem("cartId")
        }
      })
    }
  }, [])

  const addItem = async (variant: ProductVariant, product: Product) => {
    setIsLoading(true)
    try {
      let currentCart = cart

      if (!currentCart) {
        const createResult = await createCartAction()
        if (!createResult.success || !createResult.cart) {
          throw new Error(createResult.error || "Failed to create cart")
        }
        currentCart = createResult.cart
        localStorage.setItem("cartId", currentCart.id)
      }

      const addResult = await addToCartAction(currentCart.id, [{ merchandiseId: variant.id, quantity: 1 }])

      if (!addResult.success || !addResult.cart) {
        throw new Error(addResult.error || "Failed to add item to cart")
      }

      setCart(addResult.cart)
    } catch (error) {
      console.error("Error adding item to cart:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const removeItem = async (lineId: string) => {
    if (!cart) return

    setIsLoading(true)
    try {
      const removeResult = await removeFromCartAction(cart.id, [lineId])

      if (!removeResult.success || !removeResult.cart) {
        throw new Error(removeResult.error || "Failed to remove item from cart")
      }

      setCart(removeResult.cart)
    } catch (error) {
      console.error("Error removing item from cart:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const updateItemQuantity = async (lineId: string, quantity: number) => {
    if (!cart) return

    setIsLoading(true)
    try {
      const updateResult = await updateCartAction(cart.id, [{ id: lineId, quantity }])

      if (!updateResult.success || !updateResult.cart) {
        throw new Error(updateResult.error || "Failed to update item quantity")
      }

      setCart(updateResult.cart)
    } catch (error) {
      console.error("Error updating item quantity:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, updateItemQuantity, isLoading }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
