"use client"

import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "./cart-context"
import { useState } from "react"
import { CartDrawer } from "./cart-drawer"

export function CartButton() {
  const { cart } = useCart()
  const [isOpen, setIsOpen] = useState(false)

  const itemCount = cart?.lines.edges.reduce((total, { node }) => total + node.quantity, 0) || 0

  return (
    <>
      <Button variant="outline" size="icon" className="relative bg-transparent" onClick={() => setIsOpen(true)}>
        <ShoppingCart className="h-5 w-5" />
        {itemCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {itemCount}
          </span>
        )}
      </Button>
      <CartDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}
