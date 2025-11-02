"use server"

import { createCart, addCartLines, updateCartLines, removeCartLines, getCart } from "@/lib/shopify"

export async function createCartAction() {
  try {
    const cart = await createCart()
    return { success: true, cart }
  } catch (error) {
    console.error("Error creating cart:", error)
    return { success: false, error: "Failed to create cart" }
  }
}

export async function addToCartAction(cartId: string, lines: Array<{ merchandiseId: string; quantity: number }>) {
  try {
    const cart = await addCartLines(cartId, lines)
    return { success: true, cart }
  } catch (error) {
    console.error("Error adding to cart:", error)
    return { success: false, error: "Failed to add item to cart" }
  }
}

export async function updateCartAction(cartId: string, lines: Array<{ id: string; quantity: number }>) {
  try {
    const cart = await updateCartLines(cartId, lines)
    return { success: true, cart }
  } catch (error) {
    console.error("Error updating cart:", error)
    return { success: false, error: "Failed to update cart" }
  }
}

export async function removeFromCartAction(cartId: string, lineIds: string[]) {
  try {
    const cart = await removeCartLines(cartId, lineIds)
    return { success: true, cart }
  } catch (error) {
    console.error("Error removing from cart:", error)
    return { success: false, error: "Failed to remove item from cart" }
  }
}

export async function getCartAction(cartId: string) {
  try {
    const cart = await getCart(cartId)
    return { success: true, cart }
  } catch (error) {
    console.error("Error fetching cart:", error)
    return { success: false, error: "Failed to fetch cart" }
  }
}
